import { useState, useEffect, forwardRef, useRef } from "react";
import { useForm, useDebouncedValue } from "@mantine/hooks";
import DatePicker from "react-datepicker";
import {
  TextInput,
  Button,
  Container,
  Group,
  useMantineTheme,
  Text,
  Grid,
  Col,
  MultiSelect,
  Checkbox,
  InputWrapper,
  Autocomplete,
} from "@mantine/core";
import RichTextEditor from "../../components/QuillEditor";
import { Dropzone } from "@mantine/dropzone";
import { useNotifications } from "@mantine/notifications";
import {
  CameraIcon,
  UploadIcon,
  CrossCircledIcon,
  CheckIcon,
} from "@modulz/radix-icons";
import format from "date-fns/format";
import axios from "axios";

export default function Newcreate() {
  const [currentHeader, setCurrentHeader] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [attendees, setAttendees] = useState([]);

  const dropZoneRef = useRef();

  const notifications = useNotifications();
  const theme = useMantineTheme();

  const form = useForm({
    initialValues: {
      header: null,
      title: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
      adress: "",
      city: "",
      zipCode: "",
      attendees: [],
    },

    validationRules: {
      header: (file) => file === null || file[0] instanceof File,
      title: (title) => title.trim().length > 3,
      description: (desc) => desc.trim().length > 10,
      startDate: (startDate) =>
        format(startDate, "dd/MM/yyyy") <=
        format(form.values.endDate, "dd/MM/yyyy"),
      endDate: (endDate) =>
        format(endDate, "dd/MM/yyyy") >=
        format(form.values.startDate, "dd/MM/yyyy"),
      adress: (adress) => adress.length !== 0,
      city: (city) => city.length !== 0,
      zipCode: (zipCode) => zipCode.length !== 0,
    },
  });

  const [debouncedSearch] = useDebouncedValue(form?.values.adress, 500);

  // Use effect about start and end date
  useEffect(() => {
    if (form.values.startDate > form.values.endDate) {
      form.setFieldValue("endDate", form.values.startDate);
    }
  }, [form]);

  // Use effect loading French adress from the gouv api
  useEffect(() => {
    const loadSuggestion = async () => {
      const response = await axios.get(
        `https://api-adresse.data.gouv.fr/search/?q=${debouncedSearch}&type=housenumber`
      );

      // Needed because the autocomplete expect a label and a value, so we set the value equals to the label #this is retarded
      response.data.features.forEach(
        (suggestion) =>
          (suggestion.properties.value = suggestion.properties.label)
      );

      setSuggestions(
        response.data.features.map((suggestion) => suggestion.properties)
      );
    };

    if (debouncedSearch) {
      loadSuggestion();
    }
  }, [debouncedSearch]);

  // Side effect to add a name on the dropzone input
  useEffect(() => {
    dropZoneRef.current.children[0].name = "headerUpload";
  }, []);

  // Update the icon displayed based on the file dragged
  const ImageUploadIcon = ({ status, ...props }) => {
    if (status.accepted) {
      return <UploadIcon {...props} />;
    }

    if (status.rejected) {
      return <CrossCircledIcon {...props} />;
    }

    return <CameraIcon {...props} />;
  };

  // eslint-disable-next-line react/display-name
  const AutoCompleteItem = forwardRef(({ label, ...others }, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <div>
          <Text>{label}</Text>
        </div>
      </Group>
    </div>
  ));

  // Update IconColor based on the drag event
  const getIconColor = (status, theme) => {
    return status.accepted
      ? theme.colors[theme.primaryColor][6]
      : status.rejected
      ? theme.colors.red[6]
      : theme.colorScheme === "dark"
      ? theme.colors.dark[0]
      : theme.black;
  };

  //Handle the header uploading to the form
  const handleHeaderUpload = (file) => {
    form.setFieldValue("header", file);
    setCurrentHeader(file);
  };

  //Handle the validation of an adress and set fill input
  const handleItemConfirmation = (choice) => {
    form.setValues((currentValues) => ({
      ...currentValues,

      adress: choice.name,
      city: choice.city,
      zipCode: choice.postcode,
    }));
  };

  //Create a formData before sending to the API
  const handleSubmit = () => {
    let formData = new FormData();
    for (const [key, value] of Object.entries(form.values)) {
      if (key === "header") {
        formData.append("headerUpload", value[0]);
      } else {
        formData.set(key, value);
      }
    }
    axios
      .post("http://localhost:8000/api/event/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        notifications.showNotification({
          title: "Succès",
          message: "Veuillez valider votre compte",
          color: "green",
          icon: <CheckIcon />,
        });
      })
      .catch((err) => {
        notifications.showNotification({
          title: "Erreur !",
          message: err.message,
          color: "red",
          icon: <CrossCircledIcon />,
        });
      });
  };

  return (
    <Container>
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        encType='multipart/form-data'
        method={"post"}
      >
        <h1>Créer un nouvel évènement</h1>

        <InputWrapper
          label='Ajouter une photo de couverture'
          style={{ marginBottom: "1em" }}
          error={
            form.errors.header &&
            "La photo de couverture n'est pas de type File"
          }
        >
          <Dropzone
            ref={dropZoneRef}
            onDrop={handleHeaderUpload}
            maxSize={3 * 1024 ** 2}
            accept={["image/png", "image/jpeg", "image/sgv+xml"]}
            multiple={false}
            styles={currentHeader ? { root: { padding: "0px" } } : ""}
            id='dropzone-header'
            value={form.values.header}
          >
            {(status) => (
              <>
                {currentHeader ? (
                  <img
                    src={URL.createObjectURL(new Blob(form.values.header))}
                    alt='Alternative text for image'
                    style={{
                      maxHeight: "228px",
                      objectFit: "cover",
                      minHeight: "228px",
                      width: "100%",
                    }}
                  />
                ) : (
                  <Group
                    position='center'
                    spacing='xl'
                    style={{ minHeight: 220, pointerEvents: "none" }}
                  >
                    <ImageUploadIcon
                      status={status}
                      style={{
                        width: 80,
                        height: 80,
                        color: getIconColor(status, theme),
                      }}
                    />

                    <div>
                      <Text size='xl' inline>
                        Faites glisser la photo de couverture de votre évènement
                      </Text>
                      <Text size='sm' color='dimmed' inline mt={7}>
                        Faites attention que l&apos;image ne soit pas trop
                        lourde :)
                      </Text>
                    </div>
                  </Group>
                )}
              </>
            )}
          </Dropzone>
        </InputWrapper>

        <TextInput
          required
          placeholder='Sortie à Paris !'
          label='Titre de votre évènement'
          error={
            form.errors.title &&
            "Veuillez spécifier un titre pour votre évènement"
          }
          value={form.values.title}
          onChange={(event) =>
            form.setFieldValue("title", event.currentTarget.value)
          }
          style={{ marginBottom: "1em" }}
        />

        <InputWrapper
          label="Description de l'évènement"
          required
          style={{ marginBottom: "1em" }}
          error={
            form.errors.description &&
            "Veuillez spécifier une description pour votre évènement (minimum 10 caractères)"
          }
        >
          <RichTextEditor
            value={form.values.description}
            onChange={(e) => form.setFieldValue("description", e)}
          />
        </InputWrapper>

        <Grid style={{ marginBottom: "1em" }}>
          <Col span={6}>
            <InputWrapper
              label='Date de commencement'
              required
              error={
                form.errors.startDate &&
                "Veuillez saisir une date de début d'évènement"
              }
            >
              <DatePicker
                dateFormat='dd/MM/yyyy'
                calendarStartDay={1}
                selectsStart
                minDate={Date.now()}
                startDate={form.values.startDate}
                endDate={form.values.endDate}
                locale='fr'
                selected={form.values.startDate}
                onChange={(date) => form.setFieldValue("startDate", date)}
                className='mantine-TextInput-input'
                value={form.values.startDate}
              />
            </InputWrapper>
          </Col>
          <Col span={6}>
            <InputWrapper
              label='Date de fin'
              required
              error={
                form.errors.endDate &&
                "Veuillez saisir une date de fin d'évènement"
              }
            >
              <DatePicker
                dateFormat='dd/MM/yyyy'
                calendarStartDay={1}
                locale='fr'
                selectsEnd
                minDate={form.values.startDate}
                startDate={form.values.startDate}
                endDate={form.values.endDate}
                selected={form.values.endDate}
                onChange={(date) => form.setFieldValue("endDate", date)}
                className='mantine-TextInput-input'
              />
            </InputWrapper>
          </Col>
          <Col span={5}>
            <Autocomplete
              value={form.values.adress}
              onChange={(adress) => form.setFieldValue("adress", adress)}
              label="Indiquez l'adresse de rendez-vous"
              placeholder="Rue de l'internet..."
              required
              data={suggestions}
              filter={(_, item) => item}
              itemComponent={AutoCompleteItem}
              onItemSubmit={handleItemConfirmation}
            />
          </Col>

          <Col span={4}>
            <TextInput
              required
              placeholder='Paris, Grenoble....'
              label='Ville'
              error={form.errors.city && "Veuillez spécifier une ville..."}
              value={form.values.city}
              onChange={(event) =>
                form.setFieldValue("city", event.currentTarget.value)
              }
            />
          </Col>

          <Col span={3}>
            <TextInput
              required
              placeholder='96440'
              label='Code postal'
              error={
                form.errors.zipCode && "Veuillez renseigner le code postal"
              }
              value={form.values.zipCode}
              onChange={(event) =>
                form.setFieldValue("zipCode", event.currentTarget.value)
              }
            />
          </Col>
        </Grid>

        <MultiSelect
          label='Ajouter des participants'
          data={[]}
          placeholder='emmanuel.macron@elysee.fr'
          searchable
          creatable
          getCreateLabel={(query) => `+ Ajouter l'adresse mail : ${query}`}
          onCreate={(query) => setAttendees((current) => [...current, query])}
          style={{ marginBottom: "1em" }}
        />

        <Checkbox
          label='Cet évènement est privé'
          style={{ marginBottom: "1em" }}
          color='indigo'
        />

        <Button type='submit' color='indigo'>
          Créer !
        </Button>
      </form>
    </Container>
  );
}

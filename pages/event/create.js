import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useForm } from "@mantine/hooks";
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
import { Dropzone } from "@mantine/dropzone";
import { CameraIcon, UploadIcon, CrossCircledIcon } from "@modulz/radix-icons";
import format from "date-fns/format";
import axios from "axios";

let QuillEditor = dynamic(() => import("../../components/QuillEditor"), {
  ssr: false,
});

export default function Newcreate() {
  const [currentHeader, setCurrentHeader] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [attendees, setAttendees] = useState([]);

  const data = [...new Set(suggestions)];

  const theme = useMantineTheme();

  const form = useForm({
    initialValues: {
      header: null,
      title: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
      place: "",
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
      place: (place) => place !== null,
    },
  });

  // Use effect about start and end date
  useEffect(() => {
    if (form.values.startDate > form.values.endDate) {
      form.setFieldValue("endDate", form.values.startDate);
    }
  }, [form]);

  useEffect(() => {
    const loadSuggestion = async () => {
      const response = await axios.get(
        `https://api-adresse.data.gouv.fr/search/?q=${searchCity}&type=municipality`
      );

      setSuggestions(response.data.features.map((a) => a.properties.city));
    };

    if (searchCity) {
      loadSuggestion();
    }
  }, [searchCity]);

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

  return (
    <Container>
      <form
        onSubmit={form.onSubmit((values) => console.log(values))}
        encType='multipart/form-data'
      >
        <h1>Créer un nouvel évènement</h1>

        <InputWrapper
          label='Ajouter une photo de couverture'
          className='mb-3'
          error={
            form.errors.header &&
            "La photo de couverture n'est pas de type File"
          }
        >
          <Dropzone
            onDrop={handleHeaderUpload}
            maxSize={3 * 1024 ** 2}
            accept={["image/png", "image/jpeg", "image/sgv+xml"]}
            multiple={false}
            classNames={currentHeader ? { root: "p-0" } : ""}
            id='dropzone-header'
            value={form.values.header}
          >
            {(status) => (
              <>
                {currentHeader ? (
                  <img
                    src={URL.createObjectURL(new Blob(form.values.header))}
                    alt='Alternative text for image'
                    className='w-100'
                    style={{
                      maxHeight: "228px",
                      objectFit: "cover",
                      minHeight: "228px",
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
          className='mb-3'
        />

        <InputWrapper
          label="Description de l'évènement"
          required
          className='mb-3'
          error={
            form.errors.description &&
            "Veuillez spécifier une description pour votre évènement (minimum 10 caractères)"
          }
        >
          <QuillEditor
            handleChange={(content) =>
              form.setFieldValue("description", content)
            }
            value={form.values.description}
          />
        </InputWrapper>

        <Grid className='mb-3'>
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
        </Grid>

        <Autocomplete
          value={searchCity}
          onChange={setSearchCity}
          label='Indiquez le lieu de rendez-vous'
          placeholder='Paris, Grenoble, Amiens...'
          required
          data={data}
          className='mb-3'
        />

        <MultiSelect
          label='Ajouter des participants'
          data={[]}
          placeholder='emmanuel.macron@elysee.fr'
          searchable
          creatable
          getCreateLabel={(query) => `+ Ajouter l'adresse mail : ${query}`}
          onCreate={(query) => setAttendees((current) => [...current, query])}
          className='mb-3'
        />

        <Checkbox
          label='Cet évènement est privé'
          className='mb-3'
          color='indigo'
        />

        <Button type='submit' color='indigo'>
          Créer !
        </Button>
      </form>
    </Container>
  );
}

import { AppShell, Header, MediaQuery, Burger, Text } from "@mantine/core";
import { useState } from "react";
import { useMantineTheme } from "@mantine/core";

export default function CustomNavbar({ children }) {
  const [opened, setOpened] = useState(false);

  const theme = useMantineTheme();

  return (
    <AppShell
      header={
        <Header height={70} padding='md'>
          {/* You can handle other responsive styles with MediaQuery component or createStyles function */}
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery smallerThan='sm' styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size='sm'
                color={theme.colors.gray[6]}
                mr='xl'
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
}

"use client";
import { AppShell, AppShellHeader, MantineProvider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Header from "../header/Header";
import { theme } from '../../theme';
export default function Provider({ children }: { children: React.ReactNode }){

    const [opened, { toggle }] = useDisclosure();

    return(
        <MantineProvider theme={theme}>
          <AppShell
            header={{ height: 80 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            
            withBorder
          >
            <AppShellHeader bg= "#F8F8F8">
                <Header />
            </AppShellHeader>
            <AppShell.Main bg= "#F8F8F8">
              {children}
            </AppShell.Main>
          </AppShell>
        </MantineProvider>
    );
}
"use client";
import { AppShell, AppShellFooter, AppShellHeader, MantineProvider, Overlay } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Header from "../header/Header";
import { theme } from '../../theme';
import { Footer } from "../footer/Footer";
export default function Provider({ children }: { children: React.ReactNode }) {

  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 80 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
        footer={{ height: 200, collapsed: true, offset: true }}
      >
        <Header />
        <AppShell.Main bg="#F8F8F8" pt={0}>
          {children}
          <Footer />
        </AppShell.Main>

      </AppShell>
    </MantineProvider>
  );
}
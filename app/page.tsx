import { Container, Divider } from "@mantine/core";
import About from "./components/HomeCompt/About/About";
import Hero from "./components/HomeCompt/hero/Hero";
import WinesCards from "./components/HomeCompt/winecards/WineCards";
import Vigne from "./components/HomeCompt/vigne/Vigne";

export default function HomePage() {
  return (
    <>
    <Hero />
    <Container my="xl">
    <About />
    <Divider my="xl" />
    <WinesCards />
    <Divider my="xl" />
    <Vigne />
    </Container>
    </>
  );
}

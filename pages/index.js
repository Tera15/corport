import Head from "next/head";
import "../styles/Home.module.css";
import Menu from "../components/Menu";
import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsSection from "../components/ProjectsSection";
export default function Home() {
  return (
    <>
      <Menu />
      <Head>
        <title>Create Next App</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-80">
        <Hero />
        <ProjectsSection />
        <About />
      </main>
    </>
  );
}

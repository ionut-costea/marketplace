import { Advertisement } from "./components/Advertisement";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/index";
import { Hero } from "./components/Hero";
import { Jobs } from "./components/Jobs/index";
import { TopJobs } from "./components/TopJobs";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Jobs />
      <Advertisement />
      <TopJobs />
      <Footer />
    </>
  );
};

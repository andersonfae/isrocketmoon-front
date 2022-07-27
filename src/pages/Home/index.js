import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Hero } from "../Hero";
import { Sectionjob } from "../../components/SectionJobs";
import { SectionTestemonials } from "../../components/SectionTestemonials";

export function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sectionjob />
      <SectionTestemonials />
      <Footer />
    </>
  );
}

// Teste branch

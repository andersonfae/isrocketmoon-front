import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Hero } from "../Hero";
import { Sectionjob } from "../../components/SectionJobs";
import { SectionTestemonials } from "../../components/SectionTestemonials";
import { Faq } from "../../components/FAQ/index";

export function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sectionjob />
      <SectionTestemonials />
      <Faq />
      <Footer />
    </>
  );
}

// Teste branch

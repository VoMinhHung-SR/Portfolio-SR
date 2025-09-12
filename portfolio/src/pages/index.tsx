import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../layout/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

// getStaticProps: run in build time, pre-render data
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      // serverSideTranslations load file JSON translations
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};

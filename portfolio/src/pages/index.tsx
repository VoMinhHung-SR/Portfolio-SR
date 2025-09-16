import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import GlobalParticles from "../components/animate/GlobalParticles";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Global Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-0"></div>
      
      {/* Global Particles with Twinkling Animation */}
      <GlobalParticles />
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />

        {/* Footer Copyright */}
        <div className="flex justify-center items-center p-8 mb-4">
          <p>&copy; {new Date().getFullYear()} Vo Minh Hung. All rights reserved.</p>
        </div>
      
      </div>

    </div>
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

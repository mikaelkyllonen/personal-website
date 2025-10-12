import Main from "./ui/main/main";
import Navigation from "./ui/navigation/navigation";
import AboutSection from "./features/about/about-section";
import ContactSection from "./features/contact/contact-section";
import Header from "./features/header/header";
import ExperienceSection from "./features/experience/experience-section";

export default function Page() {
  return (
    <>
      <Navigation />
      <Header />
      <Main>
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </Main>
    </>
  );
}

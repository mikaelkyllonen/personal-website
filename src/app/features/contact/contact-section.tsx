import Link from "@/app/ui/link/link";
import Section from "@/app/ui/section/section";
import styles from "./contact-section.module.css";
import { FaRegEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export default function ContactSection() {
  return (
    <Section id="contact">
      <h2>Contact</h2>
      <p>
        I'm always interested in hearing about new opportunities and connecting with fellow developers. Feel free to reach out.
      </p>
      <div className={styles.links}>
        <Link variant="tertiary" href="mailto:mikael@mikaelkyllonen.com"
          customClass={styles.link}
        >
          {/* <LuMail /> */}
          <FaRegEnvelope />
          mikael@mikaelkyllonen.com
        </Link>
        <Link variant="tertiary" href="https://linkedin.com/in/mikaelkyllonen/"
          customClass={styles.link}
        >
          {/* <LuLinkedin /> */}
          <FaLinkedinIn />
          linkedin.com/in/mikaelkyllonen

        </Link>
      </div>
    </Section>
  );
}

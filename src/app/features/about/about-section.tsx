import Section from "@/app/ui/section/section";
import me from "@/../public/images/me.png";
import Image from "next/image";
import styles from "./about-section.module.css";

export default function AboutSection() {
  return (
    <Section id="about">
      <h2>About</h2>
      <div className={styles.content}>
      <div className={styles.imageContainer}>
        <Image 
          src={me} 
          alt="Mikael Kyllönen" 
          width={230}
          height={230}
          className={styles.image} 
          priority 
        />
      </div>
      <div className={styles.text}>
      <p>
        My passion for software development began in 2019 when I created a VBA-based
        reporting system for our school's lobby service. Though the solution was
        simple, I discovered I loved the problem-solving process and the rewarding
        feeling of creating something useful for others.
      </p>
      <p>
        Since then, I've continued exploring software development, and this path
        continues to excite and inspire me in my work today.
      </p>
      </div>
      </div>
    </Section>
  );
}

import Link from "@/app/ui/link/link";
import styles from "./header.module.css";
import { LuDownload } from "react-icons/lu";
import { useState } from "react";

export default function Header() {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.text}>
        <h1>Hello!{' '}<span className={styles.nowrap}>I'm Mikael</span>,<br />a full-stack developer</h1>
        <p style={{ marginBottom: "0.8rem" }}>
          I create and build modern cloud-native applications using technologies like .NET, Azure, and React/Angular.
          </p>
          <p>
          Currently I'm developing enterprise applications at
          KajaPro Oy.
          </p>
        <div className={styles.actions}>
          <Link variant="secondary" href="resume.pdf" blank>
          <LuDownload />
            View resume
          </Link>
        </div>
      </div>
    </header>
  );
}

"use client";

import styles from "./navigation.module.css";
import useOutsideClick from "./useOutsideClick";
import useToggleNav from "./useToggleNav";
import HamburgerButton from "./hamburger-button";
import Link from "next/link";
import LinkComponent from "../link/link";
import { LuDownload } from "react-icons/lu";

const NAV_LIST_LINKS = [
  { href: "#about", text: "About" },
  { href: "#experience", text: "Experience" },
  { href: "#contact", text: "Contact" },
];

interface Props {
  logoOnly?: boolean;
}

export default function Navigation({ logoOnly }: Props) {
  const [isOpen, handleToggleNav, handleCloseNav] = useToggleNav(false);

  // Close the nav when clicking outside of it
  const ref = useOutsideClick(() => handleCloseNav());

  const listItems = NAV_LIST_LINKS.map((link) => (
    <li key={link.href}>
      <Link
        className={styles.nav__link}
        href={link.href}
        onClick={handleCloseNav}
      >
        {link.text}
      </Link>
    </li>
  ));

  if (logoOnly) {
    return (
      <nav className={styles.nav} aria-label="navigation">
        <div className={styles.logo}>
          <Link className={styles.nav__link} href="/" aria-label="home">
            Mikael Kyllönen
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav
      ref={ref}
      className={`${styles.nav}`}
      aria-label="navigation"
    >
      <div className={styles.logo}>
        <Link className={styles.logo_link}
         href="/" aria-label="home">
          Mikael Kyllönen
        </Link>
      </div>
      <HamburgerButton isNavOpen={isOpen} toggleIsNavOpen={handleToggleNav} />
      {/* 
      No need for 'aria-hidden' as this uses CSS 'visibility'.
      https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden
      */}
      <nav
        id="navigation"
        className={`${styles.aside} ${isOpen ? styles.open : ""}`}
      >
        <ul className={styles.nav__list}>{listItems}
          <li>
        <LinkComponent
        // customStyle={{ padding: "0.6rem 1.2rem", fontSize: "1.4rem", fontWeight: "var(--font-weight-regular)" }}
        variant="secondary"
        href={"resume.pdf"}
        blank
        // onClick={handleCloseNav}
      >
        <LuDownload />
        Resume
      </LinkComponent>
      </li>
        </ul>
      </nav>
    </nav>
  );
}

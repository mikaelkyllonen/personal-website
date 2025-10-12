import styles from "./link.module.css";
import NextLink from "next/link";

interface Props {
  variant: "primary" | "secondary" | "tertiary";
  href: string;
  customClass?: string;
  blank?: boolean;
  routerLink?: boolean;
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
}

export default function Link({
  variant,
  href,
  customClass,
  blank,
  customStyle,
  children,
}: Props) {
  const linkStyles =
    variant === "primary"
      ? `${styles.link} ${styles.primary}`
      : variant === "secondary"
      ? `${styles.link} ${styles.secondary}`
      : `${styles.link} ${styles.tertiary}`;

  const blankAttributes = { target: "_blank", rel: "noopener, noreferrer" };

  return (
    <NextLink
      href={href}
      className={`${linkStyles} ${customClass ?? ""}`}
      style={customStyle}
      {...(blank && blankAttributes)}
    >
      {children}
    </NextLink>
  );
}

import { LuHouse } from "react-icons/lu";
import styles from "./not-found.module.css";
import Link from "./ui/link/link";
import Main from "./ui/main/main";
import Navigation from "./ui/navigation/navigation";

export default function NotFound() {
  return (
    <>
      <Navigation logoOnly />
      <Main>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            404
          </h1>
          <p className={styles.description}>
            Page not found
          </p>
          <Link href="/" variant="primary" customClass={styles.link}>
            <LuHouse />
            Go back home
          </Link>
        </div>
      </Main>
    </>
  );
}

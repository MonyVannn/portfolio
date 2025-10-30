import Link from "next/link";
import styles from "./style.module.scss";

export default function index() {
  return (
    <div className={styles.footer}>
      <Link
        target="_blank"
        href="https://github.com/MonyVannn"
        className="hover:underline"
      >
        Github
      </Link>
      <Link
        target="_blank"
        href="https://www.instagram.com/_monyvann_/"
        className="hover:underline"
      >
        Instagram
      </Link>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/monyvann-men-65b7a5260"
        className="hover:underline"
      >
        LinkedIn
      </Link>
    </div>
  );
}

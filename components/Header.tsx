import Image from "next/image";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Layout.module.css";

const name = "Peter!";

export default function Header({ home }: any) {
  return (
    <header className={styles.header}>
      {home ? (
        <>
          <Image
            priority
            src="/img/meLove.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          ></Image>
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">

            <Image
              priority
              src="/img/meLove.jpg"
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt={name}
            ></Image>

          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/" className={utilStyles.colorInherit}>{name}</Link>
          </h2>
        </>
      )
      }
      <nav>
        <Link href="/">
          Inicio |
        </Link>
        <Link href="/blog">
          Blog |
        </Link>
        <Link href="/contacto">
          Contacto
        </Link>
      </nav>
    </header >
  );
}
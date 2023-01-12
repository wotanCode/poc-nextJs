import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout
      home
      title="Página de inicio"
      description="Descripción de la página de inicio"
    >
      <section className={utilStyles.headingMd}>
        <p>super duper description</p>
        <p>
          My website! -Pedro Yanez{" "}
          <a href="https://github.com">My github profile</a>.
        </p>
      </section>
    </Layout>
  );
}
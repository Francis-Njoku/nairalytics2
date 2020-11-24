import LayoutHead from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const Custom404 = () => (
  <Layout>
    <LayoutHead pageTitle={"Page Not Found"} />
    <main className="main">
      <section className="error">
        <img
          src={"/images/404.png"}
          alt="404 illustration"
          className="error__image"
        />
        <h1 className="h1 error__message">This page could not be found</h1>
        <Link href="/">
          <a className="btn btn--secondary error__cta">Go back home</a>
        </Link>
      </section>
    </main>
  </Layout>
);
export default Custom404;

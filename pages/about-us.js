import LayoutHead from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Intro from "../components/about/Intro";
import Team from "../components/about/Team";
import Vision from "../components/about/Vision";

const AboutUs = () => (
  <Layout>
    <LayoutHead pageTitle={"About Us"} />
    <main className="main">
      <Intro />
      <Vision />
      <Team />
    </main>
  </Layout>
);

export default AboutUs;

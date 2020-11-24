import Location from "../components/contact/FindUs";
import MessageBox from "../components/contact/MessageBox";
import Layout from "../components/layout/Layout";
import LayoutHead from "../components/layout/Head";

const AboutUs = () => (
  <Layout>
    <LayoutHead pageTitle={"Contact Us"} />
    <main className="main">
      <section className="section contact">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <MessageBox />
            <Location />
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default AboutUs;

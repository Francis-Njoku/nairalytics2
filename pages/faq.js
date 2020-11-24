import LayoutHead from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import { FAQ as FAQComponent } from "../components/faq/FAQ";

const FAQ = () => {
  return (
    <Layout>
      <LayoutHead pageTitle={"Frequently Asked Questions (FAQ)"} />
      <FAQComponent />
    </Layout>
  );
};

export default FAQ;

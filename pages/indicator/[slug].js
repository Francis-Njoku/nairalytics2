import AssociatedPosts from "../../components/blog/Blog";
import Chart from "../../components/indicator/Chart";
import LayoutHead from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";

const Indicator = ({ data, indicatorName }) => {
  return (
    <Layout>
      <LayoutHead pageTitle={indicatorName} />
      <main className="main main--transparent pt-5 px-0">
        <Chart chartData={data} />
        <AssociatedPosts />
      </main>
    </Layout>
  );
};

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const indicatorName = capitalize(slug.replace(/-/g, " "));
  const apiResponse = await fetch(
    `${process.env.baseAPIRoute}/dataset/${slug}`
  );
  const { data } = await apiResponse.json();
  return {
    props: {
      data,
      indicatorName,
    },
  };
}

export default Indicator;

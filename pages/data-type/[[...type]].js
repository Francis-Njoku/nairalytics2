import LayoutHead from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";
import DataType from "../../components/dataType/DataType";
import { useRouter } from "next/router";

const IndicatorMenu = ({ data }) => {
  const { query } = useRouter();
  let activeItem = null;
  if (query.type) {
    activeItem = query.type[0];
  }

  return (
    <Layout>
      <LayoutHead pageTitle={"DataType"} />
      <main className="main main--transparent pt-5 px-0">
        <DataType activeItem={activeItem} indicators={data} />
      </main>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const apiResponse = await fetch(`${process.env.baseAPIRoute}/indicator/`);
  const { data } = await apiResponse.json();
  return {
    props: {
      data,
    },
  };
};

export default IndicatorMenu;

import LayoutHead from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import EventComponent from "../components/events/Events";

const Events = () => {
  return (
    <Layout>
      <LayoutHead pageTitle={"Events"} />
      <EventComponent />
    </Layout>
  );
};

export default Events;

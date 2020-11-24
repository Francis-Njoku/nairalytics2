import Layout from "../components/layout/Layout";
import LayoutHead from "../components/layout/Head";
import SignupComponent from "../components/authentication/Signup";

const Signup = () => {
  return (
    <Layout>
      <LayoutHead pageTitle={"Sign Up"} />
      <SignupComponent />
    </Layout>
  );
};

export default Signup;

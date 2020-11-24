import React from "react";
import Layout from "../components/layout/Layout";
import LayoutHead from "../components/layout/Head";
import LoginComponent from "../components/login/Login";

const Login = () => {
  return (
    <Layout>
      <LayoutHead pageTitle={"Login"} />
      <LoginComponent />
    </Layout>
  );
};

export default Login;

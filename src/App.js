import React from "react";
import LoginOne from "./view/auth-view";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <LoginOne allowRedirect={true} />
    </Layout>
  );
};

export default App;

import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../Layouts/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Link to="/start-game">
        <h1 className="text-3xl font-bold hover:text-green-500 hover:underline  transition ease-in-out delay-50 duration:300">
          Let's start!
        </h1>
      </Link>
    </Layout>
  );
};

export default Home;

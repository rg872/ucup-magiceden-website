import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import HomeMiddle from "../components/home-middle";
import HomeTop from "../components/home-top";
import HomeBottom from "../components/home-bottom";

import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <main className="container-fluid">
      <HomeTop></HomeTop>
      <HomeMiddle></HomeMiddle>
      <HomeBottom></HomeBottom>
      <Footer></Footer>
    </main>
  );
};

export default Home;

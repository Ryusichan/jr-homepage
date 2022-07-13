import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container } from "@mui/material";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      {/* appbar */}
      <Appbar />

      {/* topcontainer   */}
      <Container maxWidth="sm">main page</Container>

      {/* ProgremInfo */}
      <Container maxWidth="sm">main page</Container>

      {/* Portfolio */}
      <Container maxWidth="sm">main page</Container>

      {/* ServiceProgrem */}
      <Container maxWidth="sm">main page</Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;

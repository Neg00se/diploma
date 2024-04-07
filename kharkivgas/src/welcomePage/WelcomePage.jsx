import React from "react";
import "./welcomepage.css";
import Header from "./Components/header/Header";
import Banner from "./Components/banner/Banner";
import Statistics from "./Components/statistics/Statistics";
import TarifTitle from "./Components/tarifsFirst/TarifTitle";
import Tarifsmain from "./Components/tarifsmain/Tarifsmain";
import Footer from "./Components/footer/Footer";
import News from "./Components/news/News";

export default function WelcomePage() {
  return (
    <>
      <Header />
      <Banner />
      <Statistics />
      <TarifTitle />
      <Tarifsmain />
		<News/>
      <Footer />
    </>
  );
}

import React from "react";
import NavBar from "../components/NavBar";
import SearchCard from "../components/SearchCard";
import TextHeader from "../components/TextHeader";

import Footer from '../components/component-footer/Fooyer';

export default function WelcomePage() {
  return (
    <div>
      <NavBar />
      <TextHeader />
      <SearchCard />
      <Footer />
    </div>
  );
}

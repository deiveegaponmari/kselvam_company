import React from "react";
import HeroSlider from "./HeroSlider";
import AboutHome from "./AboutHome";
import ServiceHome from './ServiceHome';
import EventsHome from "./EventsHome";

function Home() {
  return (
    <>
      <HeroSlider/>
      <AboutHome/>
      <ServiceHome/>
      <EventsHome/>
    </>
  );
}

export default Home;

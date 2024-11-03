"use client";
import Carousel from "@/components/carousel/carousel";
import ContactCard from "@/components/contact";
import CountdownTimer from "@/components/counter";
import Couple from "@/components/couple";
import Footer from "@/components/footer";
import Functions from "@/components/functions";
import Landing from "@/components/landing";
import LocationCard from "@/components/location";

export default function Home() {
  return (
    <div>
      <Landing />
      <Couple />
      <Carousel />
      <Functions />
      <CountdownTimer />
      <LocationCard />
      <ContactCard />
      <Footer />
    </div>
  );
}

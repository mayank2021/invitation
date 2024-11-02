import Carousel from "@/components/carousel/carousel";
import ContactCard from "@/components/contact";
import CountdownTimer from "@/components/counter";
import Couple from "@/components/couple";
import Footer from "@/components/footer";
import Functions from "@/components/functions";
import Landing from "@/components/landing";

export default function Home() {
  return (
    <div>
      <Landing />
      <Couple />
      <Carousel />
      <Functions />
      <CountdownTimer />
      <ContactCard />
      <Footer />
    </div>
  );
}

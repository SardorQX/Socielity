import { Hero, Navbar } from "../../components/pages/home-components";
import { Faq } from "../../components/pages/home-components/faq/faq";
import { Know } from "../../components/pages/home-components/know/know";
import { Partners } from "../../components/pages/home-components/partners/partners";
import { Services } from "../../components/pages/home-components/services/services";
import { Socielity } from "../../components/pages/home-components/socielity/socielity";
import { Testimonial } from "../../components/pages/home-components/testimonial/testimonial";
import { Trusted } from "../../components/pages/home-components/trusted/trusted";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trusted />
      <Partners />
      <Services />
      <Socielity />
      <Testimonial />
      <Know />
      <Faq/>
    </div>
  );
};

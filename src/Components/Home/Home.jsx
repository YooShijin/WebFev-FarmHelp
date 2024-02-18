import HeroSection from "../Hero/HereSection";
import AnimalHus from "../Animal Husbandry/AnimalHus";
import PointDetails from "../Point Details/PointDetails";
import ContactForm from "../Contact Form/ContactForm";
import Notification from "../Location_Notifications/Notfication";
import FootElement from "../Footer/FootElement";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <AnimalHus></AnimalHus>
      <PointDetails></PointDetails>
      <Notification></Notification>
      <ContactForm></ContactForm>
      <FootElement></FootElement>
    </>
  );
};

export default Home;

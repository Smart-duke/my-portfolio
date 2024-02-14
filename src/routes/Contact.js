import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="CONTACT ME" text="Let's have a chat" />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;

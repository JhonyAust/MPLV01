import { ContactInfo, Form, Map } from "../components/contact";

const Contact = () => {
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <Map />
      <div className="relative z-10">
      <ContactInfo />
      <Form />
      </div>
    </div>
  );
};

export default Contact;

import {
  Categories,
  Counter,
  Feeds,
  Services as ServicesList,
} from "../components/common/page-componets";
import Faqs from "./Faqs";
import ServiceComponent from "../components/service/ServiceComponent";
import OfferService from "../components/service/OfferService";
import ACSection from "../components/service/ACSection";

const HomeServices = () => {
  return (
    <div>
      <ServiceComponent/>
      <div className="pt-20 "> 
      <OfferService/>
      <ACSection/>
      <ServicesList />
      <Categories />
      <Counter />
      <Feeds />
      <Faqs/>
    </div>
    </div>
  );
};

export default HomeServices;

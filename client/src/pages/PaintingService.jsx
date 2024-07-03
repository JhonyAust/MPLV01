import {
    Categories,
    Counter,
    Feeds,
    Services as ServicesList,
  } from "../components/common/page-componets";
  import Faqs from "./Faqs";
  import OfferService from "../components/service/OfferService";
  import ACSection from "../components/service/ACSection";
  import PaintingServiceComponent from "../components/HomeServices/PaintingServicesComponent";
  import CardComponent from "../components/HomeServices/CardComponent";
  
  const PaintingServices = () => {
    return (
      <div>
        <PaintingServiceComponent/>
        <div className="p-10 md:p-20 "> <CardComponent/>
        </div>
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
  
  export default PaintingServices;
  
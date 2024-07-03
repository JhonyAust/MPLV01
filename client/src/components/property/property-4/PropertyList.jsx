import { useSelector } from "react-redux";
import { dataStore } from "../../../features/dataSlice";
import SingleProductCard from "../../common/page-componets/SingleProductCard";

const PropertyList = () => {
  const { currentDataItems } = useSelector(dataStore);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {currentDataItems?.map((listing) => (
        <SingleProductCard listing={listing} key={listing._id} />
      ))}
    </div>
  );
};

export default PropertyList;

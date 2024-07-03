const cardLabels = ({listing}) => {
  return (
    <div className="absolute top-2 left-2 flex-align-center gap-x-2">
      {listing.offer && (
      <span className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-primary">
        ${+listing.regularPrice - +listing.discountPrice} OFF
      </span>
      )}
      <span className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-secondary">
        for {listing.type}
      </span>
    </div>
  );
};

export default cardLabels;

import { useState } from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const SingleMenu = ({ menu, submenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`accordion flex-center-between my-4 cursor-pointer p-4 border-b hover:text-primary dark:border-b-dark`}
        onClick={handleShow}
      >
        <h1 className="text-md font-semibold">{menu}</h1>
        {isOpen ? <BiChevronUp size={25} /> : <BiChevronDown size={25}  />}
      </div>
      {isOpen && (
        <div>
          {submenu.map((item) => (
            <div key={item.name} className="flex items-center ml-4 p-4">
              {item.icon}
              <p className="ml-2">{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleMenu;

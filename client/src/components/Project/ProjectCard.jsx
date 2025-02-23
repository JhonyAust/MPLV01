import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectCard = ({ project }) => {
  const { title, address, imageUrl } = project;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      {/* Upper section: Scrollable Images using Carousel */}
      <div className="relative h-48">
        <Carousel
          showThumbs={false}
          showArrows={false}
          showStatus={false}  // Hides the image index status
          showIndicators={true}  // Show bullet points for navigation
          infiniteLoop={false}
          useKeyboardArrows={false}
          swipeable={true}
          emulateTouch={true}  // Enables mouse drag for scrolling
        >
          {imageUrl?.map((image, index) => (
            <div key={index} className="h-48">
              <img
                src={image}
                alt={`Project Image ${index + 1}`}
                className="object-cover h-full w-full"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Lower section: Title, Address, and Button */}
      <div className="p-4 flex justify-between items-center border-t">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 text-xs">{address}</p>
        </div>
        <button className="bg-[#FD3752] text-white px-2 py-2 rounded-lg text-sm font-semibold hover:bg-[#fd37519a] transition duration-300">
          Get More Information
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

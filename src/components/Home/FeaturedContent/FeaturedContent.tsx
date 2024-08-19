import React from 'react';

interface FeaturedContentProps {
  title: string;
  description: string;
  slides: number;
  duration: string;
  imageSrc: string;
}

const FeaturedContent: React.FC<FeaturedContentProps> = ({
  title,
  description,
  slides,
  duration,
  imageSrc,
}) => {
  return (
    <div className="flex justify-center items-center bg-purple-50 p-8 rounded-lg">
      {/* Book Image */}
      <div className="flex-shrink-0">
        <img src={imageSrc} alt={title} className="w-56 h-auto rounded-md shadow-md" />
      </div>

      {/* Book Details */}
      <div className="ml-8">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>

        {/* Book Info */}
        <div className="mt-4 flex items-center">
          <div className="text-purple-500 font-medium flex items-center mr-6">
            <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-2"></span> Slides:
            <span className="ml-1 text-gray-700">{slides}</span>
          </div>
          <div className="text-purple-500 font-medium flex items-center">
            <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-2"></span> Duration:
            <span className="ml-1 text-gray-700">{duration}</span>
          </div>
        </div>

        {/* Preview Button */}
        <button className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
          Preview
        </button>

        {/* Navigation Dots */}
        <div className="mt-6 flex items-center">
          <span className="w-3 h-3 bg-purple-600 rounded-full mx-1"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;

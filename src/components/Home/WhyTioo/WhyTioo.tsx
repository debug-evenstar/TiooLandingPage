import React from "react";
import whyImg from "@/assets/images/new-why.png";
import pointImg from "@/assets/images/why-point.png";

function FeatureCard({ title, description }: any) {
  return (
    <div className="flex gap-x-4 mb-4">
      <div className="w-[55px] shrink-0 h-[55px] rounded-full shadow-lg bg-white flex items-center justify-center">
        <svg
          width="29"
          height="27"
          viewBox="0 0 29 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="8.21875"
            y="6.95703"
            width="20"
            height="20"
            rx="2"
            fill="#2F327D"
          />
          <rect
            x="0.21875"
            y="0.957031"
            width="21.2245"
            height="21.2245"
            rx="2"
            fill="#F48C06"
          />
        </svg>
      </div>
      <div className="urbanist">
        <h3 className="text-lg font-bold mt-2">{title}</h3>
        <p className="text-gray-700 text-[15px] mt-2">{description}</p>
      </div>
    </div>
  );
}

function WhyTioo() {
  return (
    <div className="py-10 sm:py-20">
      <h1 className="px-3 sm:px-20 font-[600] text-4xl mb-4 text-gray-700">Why Tioo</h1>
      <div className="px-3  sm:px-12 items-center flex flex-col sm:flex-row">
        <img src={whyImg} alt="" className="sm:w-[600px]" />
        <div className="flex flex-col">
          <FeatureCard
            title="Intelligent Textbooks"
            description="Transform traditional learning with smart textbooks that include animations, interactive slides, and engaging content."
          />
          <FeatureCard
            title="Extensive Library"
            description="Gain access to a vast and diverse library featuring thousands of books across an extensive range of subjects and educational levels."
          />
          <FeatureCard
            title="Personalized Tutoring"
            description="Experience the advantages of personalized AI tutoring that is meticulously tailored to fit your unique learning style and individual needs."
          />
          <FeatureCard
            title="Community Engagement"
            description="Connect with a vibrant community of fellow learners and educators to foster support, collaboration, and shared growth."
          />
        </div>
      </div>
    </div>
  );
}

export default WhyTioo;

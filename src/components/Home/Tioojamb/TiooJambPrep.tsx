import React from 'react';
import bookIcon from '@/assets/images/icons/homeFeatures/book.svg';
import bulbIcon from '@/assets/images/icons/homeFeatures/bulb.svg';
import botIcon from '@/assets/images/icons/homeFeatures/bot.svg';
import usersIcon from '@/assets/images/icons/homeFeatures/users.svg';


const TiooJAMBPrep: React.FC = () => {
  const features = [
    {
      icon: bookIcon, // Replace with actual icon component or path
      title: "Extensive Past Questions",
      description: "Access a vast collection of past UTME papers categorized by topic to refine your exam strategy and identify key areas for review. This resource helps you familiarize yourself with common question types and track your progress effectively."
    },
    {
      icon: bulbIcon, // Replace with actual icon component or path
      title: "Personalized Tutoring With AI",
      description: "Receive personalized support with our advanced AI tutor, which adapts to your learning style and provides tailored feedback to help you master complex concepts and excel in your studies."
    },
    {
      icon: botIcon, // Replace with actual icon component or path
      title: "Exams Tips And Strategies",
      description: "Master techniques that will help you approach your exams with a clear mind and a positive attitude, ultimately leading to better results."
    },
    {
      icon: usersIcon, // Replace with actual icon component or path
      title: "Community Support",
      description: "Join a vibrant community of learners. Share tips, ask questions, and stay motivated with peer support and expert advice."
    }
  ];

  return (
    <div className="px-3 py-8 sm:py-16 sm:px-12">
      <div className="">
        <h1 className="text-[24px] sm:text-4xl font-bold text-center text-blue-900 mb-4">
          Tioo The Ultimate JAMB Prep Solution!
        </h1>
        <p className="text-center sm:w-[60%] mx-auto text urbanist text-[15px] sm:text-[20px] text-gray-600 mb-12">
          Pass your exams with flying colours using Tioo. Here are some ways Tioo can help you pass your UTME in flying colours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 gap-y-16 gap-x-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white text rounded-lg flex flex-col items-center justify-center relative shadow-2xl shadow-[#f9d8ff] h-[300px] p-3">
              <div className={`w-[90px] h-[90px] -top-10 absolute rounded-full flex items-center justify-center text-3xl mb-4 mx-auto ${index === 0 ? 'bg-[#5B72EE]' :
                index === 1 ? 'bg-[#F48C06]' :
                  index === 2 ? 'bg-[#9C29B2]' :
                    'bg-[#29B9E7]'
                }`}>
                <img src={feature.icon} alt="icon" className="w-9" />
              </div>

              <h3 className="text-lg text-main font-semibold text-center mb-2">{feature.title}</h3>
              <p className="text-gray-600 outfit-font text-center text-[14px] font-[400]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TiooJAMBPrep;
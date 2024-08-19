import React from 'react';

const TiooJAMBPrep: React.FC = () => {
  const features = [
    {
      icon: "📚", // Replace with actual icon component or path
      title: "Extensive Past Questions",
      description: "Access a vast collection of past UTME papers categorized by topic to refine your exam strategy and identify key areas for review. This resource helps you familiarize yourself with common question types and track your progress effectively."
    },
    {
      icon: "💡", // Replace with actual icon component or path
      title: "Personalized Tutoring With AI",
      description: "Receive personalized support with our advanced AI tutor, which adapts to your learning style and provides tailored feedback to help you master complex concepts and excel in your studies."
    },
    {
      icon: "🎯", // Replace with actual icon component or path
      title: "Exams Tips And Strategies",
      description: "Master techniques that will help you approach your exams with a clear mind and a positive attitude, ultimately leading to better results."
    },
    {
      icon: "👥", // Replace with actual icon component or path
      title: "Community Support",
      description: "Join a vibrant community of learners. Share tips, ask questions, and stay motivated with peer support and expert advice."
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Tioo The Ultimate JAMB Prep Solution!
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Pass your exams with flying colours using Tioo. Here are some ways Tioo can help you pass your UTME in flying colours.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto ${
                index === 0 ? 'bg-[#5B72EE]' :
                index === 1 ? 'bg-[#F48C06]' :
                index === 2 ? 'bg-[]' :
                'bg-cyan-500'
              }`}>
                {feature.icon}
              </div>
     
              <h3 className="text-xl font-semibold text-center mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TiooJAMBPrep;
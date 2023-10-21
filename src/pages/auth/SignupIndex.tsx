import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const SignupIndex = () => {
  const [route, setRoute] = useState<string>();
  const navigate = useNavigate();
  const gotoRegister = () => {
    if (route) {
      navigate(`/${route}`);
    }
  };
  const userTypes = [
    {
      name: "School",
      desc: "Educational Institution",
      id: "1",
      route: "school",
    },
    // {
    //   name: "Freelancer",
    //   desc: "Independent Educator",
    //   id: "2",
    //   route: "freelancer",
    // },
    {
      name: "Student",
      desc: "Create an account to learn",
      id: "3",
      route: "parent",
    },
  ];
  const previewBook = () => {
    window.open(process.env.REACT_APP_PREVIEW_LINK, '_blank')
  }
  return (
    <>
      <div className="bg-[#0E096C]">
        <div className="box">
          <div className="fixed top-3 left-4">
            <img src='https://res.cloudinary.com/dic7regoe/image/upload/v1696360486/praxeum/IMG_8444_1_1_n1reem.png' alt="logo" className=" w-16 lg:w-24" onClick={() => navigate('/')} />
          </div>
          <div className="lg:flex items-center w-full h-screen">
            <div className="lg:w-6/12 pt-24 lg:pt-0 flex justify-center">
              <div>
                <div className="flex justify-center">
                  <p className="w-full border-b-2 border-[#fff] pb-3 text-center fw-600 text-white text-2xl">
                    I am a
                  </p>
                </div>
                <div className="mt-12 grid gap-10 px-8 text-center">
                  {userTypes.map((item, i) => (
                    <div
                      className={`types px-4 py-6 cursor-pointer ${route === item.route
                          ? "bg-[#4F46E5] outline-[#4F46E5] !text-white"
                          : "bg-white"
                        }`}
                      key={i}
                      onClick={() => setRoute(item.route)}
                    >
                      <p className="fw-500 text-[20px] lg:pr-4">{item.name}</p>
                      <p
                        className={`mt-4 ${route === item.route ? "text-white" : "text-[#87909E]"
                          }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-10">
                  <div
                    className={`py-[10px] cursor-pointer btn-shade rounded-t-[8px] rounded-bl-[8px] border border-[#312ECB33] w-10/12 lg:w-full bg-[#E3E2FF] text-[#87909EBD] text-center ${route && "!bg-[#4F46E5] text-white"
                      }`}
                    onClick={gotoRegister}
                  >
                    Get Started
                  </div>
                </div>
                <div className="text-center text-white fs-300 mt-4">
                  Already have an account?{" "}
                  <Link to="/login" className="text-white fw-600">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 hidden lg:block">
              <div className="absolute top-0 right-0 bg-white w-[40%] h-[85vh] rounded-b-[300px]">
                <img src="https://res.cloudinary.com/dic7regoe/image/upload/v1696359495/praxeum/COVER_PAGE_1_2_1_yz4i2f.png" alt="img" className="w-[57%] mx-auto mt-4 rounded-[12px] img-shade" />
                <div>
                  <p className="text-center mt-6">Explore our flagship textbook</p>
                  <div
                    className={`py-[10px] cursor-pointer btn-shade rounded-[8px] border border-[#312ECB33] w-4/12 mx-auto mt-3 bg-[#4F46E5] text-white text-center`}
                    onClick={previewBook}>
                    Preview textbook
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupIndex;

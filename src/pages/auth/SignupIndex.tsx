import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
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
      desc: "Educationaal Institution",
      id: "1",
      route: "school",
    },
    {
      name: "Freelancer",
      desc: "Independent Educator",
      id: "2",
      route: "freelancer",
    },
    {
      name: "Parent/Guardian",
      desc: "You're creating an account for your child",
      id: "3",
      route: "parent",
    },
  ];
  return (
    <>
      <AuthLayout type="signup">
        <div>
          <div className="flex justify-center">
            <p className="w-4/12 border-b-2 border-[#4F46E5] pb-3 text-center fw-600 text-primary text-2xl">
              I am a
            </p>
          </div>
          <div className="mt-12 grid lg:grid-cols-3 gap-10">
            {userTypes.map((item) => (
              <div
                className={`types px-4 py-6 cursor-pointer ${
                  route === item.route ? "bg-[#4F46E5] outline-[#4F46E5] !text-white" : "bg-white"
                }`}
                onClick={() => setRoute(item.route)}
              >
                <p className="fw-500 text-lg">{item.name}</p>
                <p
                  className={`mt-4 ${
                    route === item.route ? "text-white" : "text-[#87909E]"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <div
              className={`py-[10px] cursor-pointer btn-shade rounded-t-[8px] rounded-bl-[8px] border border-[#312ECB33] w-10/12 lg:w-5/12 bg-[#E3E2FF] text-[#87909EBD] text-center ${
                route && "!bg-[#4F46E5] text-white"
              }`}
              onClick={gotoRegister}
            >
              Get Started
            </div>
          </div>
          <div className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-primary fw-500">
              Log in
            </Link>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default SignupIndex;

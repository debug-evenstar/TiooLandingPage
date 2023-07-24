import React, { useState, useEffect } from "react";
import { useLazyVerifyOtpQuery } from "../../services/api/authSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ThreeCirclesLoading } from "../../components/Ui/Loading";
import { FailureCheck, SuccessCheck } from "../../components/Ui/SuccessCheck";
import Button from "../../components/Ui/Button";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { saveUser } from "../../redux/reducers/userReducer";

const AccountVerify = () => {
  const [isBusy, setIsBusy] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const dispatch = useAppDispatch();
  const [verify] = useLazyVerifyOtpQuery();
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useAppSelector((state) => state.user.user)
  const handleNavigation = () => {
    if(user.account_type === "school"){
        navigate('/school-complete')
    }else if(user.account_type === "freelancer"){
        navigate('/freelancer-complete')
    }else if(user.account_type === "parent"){
        navigate('/parent-complete')
    }
    else toast.info('Cant resolve account type please contact the administrator')
  }
  const verifyOtp = async (data: any) => {
    const payload = {
      token: data,
    };
    setIsBusy(true);
    await verify(payload).then((res: any) => {
      if (res.isSuccess) {
        toast.success(res.data.message);
        setSuccess(true);
        dispatch(
          saveUser({
            name: res.data.data.name,
            email: res.data.data.email,
            account_type: res.data.data.account_type,
            phone: res.data.data.phone,
          })
        );
        setIsBusy(false);
      } else {
        toast.error(res?.error?.data.message);
        setIsBusy(false);
        setFailed(true);
      }
    });
  };
  useEffect(() => {
    if (id) {
      verifyOtp(id);
    }
  }, [id]);
  return (
    <>
      <div className="h-screen bg-[#E3E2FF] flex justify-center items-center">
        <div className="">
          <div className="">
            {isBusy && (
              <div className="">
                <p className="text-2xl text-center fw-600 mb-7">Verifying Account Information...</p>
                 <div className="flex justify-center">
                <ThreeCirclesLoading size="200" color="#4f46e5" />
                 </div>
              </div>
            )}
            {success && (
              <div className="">
                <p className="text-2xl text-center fw-600">Account Activated</p>
                <div className="mt-6 lg:mt-12">
                  <SuccessCheck />
                </div>
                <div className="lg:w-5/12 mx-auto text-center">
                  <p className="text-primary fw-600 my-3 text-xl">
                    Hello {user.name},
                  </p>
                  <p className="text-center">
                    Thank you, your email has been verified. Your account is now
                    active, please click on the button below to select your
                    preffered options for profile setup.
                  </p>
                  <div className="lg:w-10/12 mt-8 mx-auto">
                    <Button title="Click to continue" onClick={handleNavigation} />
                  </div>
                </div>
              </div>
            )}
            {failed && (
              <div className="">
                <p className="text-2xl text-center fw-600">
                  Account Activation Failed
                </p>
                <div className="mt-6 lg:mt-12">
                  <FailureCheck />
                </div>
                <div className="lg:w-5/12 mx-auto text-center">
                  <p className="text-center">
                    We're sorry, but your email could not be verified. Plese
                    ensure that your information was entered correctly and try
                    again.
                  </p>
                  <div className="lg:w-10/12 mt-8 mx-auto">
                    <Button title="Click to continue" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="fixed top-0 left-0">
          <h3 className="font-semibold text-[22px] pt-4 lg:pt-10 lg:mx-12 mx-2">
            Company's Logo
          </h3>
        </div>
      </div>
    </>
  );
};

export default AccountVerify;

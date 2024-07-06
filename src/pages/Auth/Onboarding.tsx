import { FC, FormEvent, MouseEvent, useEffect, useState } from "react";
import loginImg from "@/assets/images/signin.png";

import {
  useLazyGetOnboardingQuestionsQuery,
  useLazyLoginQuery,
} from "@/services/api/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { current } from "@reduxjs/toolkit";
import { BASE_URL, STUDENT_FRONT_BASE } from "@/services/constants";
import axios from "axios";

const SingleSelectGroup = ({
  setAnswer,
  answer,
  options,
  activeSelection,
  setActiveSelection,
}: any) => {
  const isActive = (index: number) => index === activeSelection;

  const handleClick = (index: number) => {
    setActiveSelection(index);
    setAnswer(options[index]);
  };
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-7">
      {options?.map((option: string, index: number) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`p-3 border hover:ring ring-main outline-none rounded-lg flex items-center space-x-3 ${
            isActive(index) && "ring"
          }`}
        >
          <div
            className={`rounded-full border w-5 h-5 flex items-center justify-center ${
              isActive(index) && "bg-main"
            }`}
          >
            <div className="rounded-full w-2 h-2 bg-white"></div>
          </div>
          <span>{option}</span>
        </button>
      ))}
    </div>
  );
};

const MultiSelectGroup = ({
  setAnswer,
  answer,
  options,
  max,
  activeSelection,
  setActiveSelection,
}: any) => {
  // const handleClick = (index: number) => {
  //   setActiveSelection(index);
  //   setAnswer(options[index]);
  // };

  const [selection, setSelection] = useState<number[]>([]);
  const isActive = (index: number) => selection.includes(index);

  const handleClick = (option: any, index: number) => {
    let data: number[] = [];
    if (!selection.includes(index)) {
      data = selection.length < max ? [...selection, index] : selection;
    } else {
      data = selection.filter((i) => i != index);
    }
    setSelection(data);
    const answers = data.map((i) => options[i]);
    setAnswer(answers);
    setActiveSelection(index);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-7">
      {options?.map((option: string, index: number) => (
        <button
          key={index}
          onClick={() => handleClick(option, index)}
          className={`p-3 border hover:ring ring-main outline-none rounded-lg flex items-center space-x-3 ${
            isActive(index) && "ring"
          }`}
        >
          <div
            className={`rounded border w-5 h-5 flex items-center justify-center ${
              isActive(index) && "bg-main"
            }`}
          >
            <span className="inline-block text-white text-xl">✔</span>
          </div>
          <span>{option}</span>
        </button>
      ))}
    </div>
  );
};

const ProcessFlow = ({ questions }: any) => {
  const [index, setIndex] = useState(0);
  const [activeSelection, setActiveSelection] = useState<number | null>(null);
  const [answers, setAnswers] = useState<any>({});
  const [activeQuestions, setActiveQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // get the first question when it's loaded from the server
    setCurrentQuestion(questions[0]);
  }, [questions]);

  useEffect(() => {
    // set the current question to the next sibling if the question has siblings
    if (activeQuestions.length > 0) {
      setCurrentQuestion(activeQuestions[index]);
    }
  }, [activeQuestions, index]);

  useEffect(() => {
    // let's us know when we have reached the end of the tree for that particular route(question);
    if (activeSelection !== null) {
      const next = getNextQuestions();
      setFinished(
        next.length == 0 &&
          (index == activeQuestions.length - 1 || activeQuestions.length == 0)
      );
      // console.log(next, index, activeQuestions);
    }
  }, [activeSelection]);

  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [finished, setFinished] = useState(false);

  const setAnswer = (value: any) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: {
        question: currentQuestion.question,
        answer: value,
      },
    });
  };

  const setNextQuestions = () => {
    const next_questions = getNextQuestions();

    if (next_questions.length > 0) {
      // if we still have sub-questions put them up for display
      setActiveQuestions(next_questions);
    } else {
      // we have come to the end of the road in the questions tree
      setFinished(true);
    }
  };

  const getNextQuestions = () => {
    const answer = answers[currentQuestion.id]?.answer;
    if (answer) {
      const next_questions = questions.filter(
        (q: any) =>
          q.parent_id == currentQuestion.id && answer == q.parent_answer
      );
      return next_questions;
    }
    return [];
  };

  const next = () => {
    setActiveSelection(null);
    // return console.log(index,activeQuestions)
    if (activeQuestions.length > 1 && index < activeQuestions.length) {
      setIndex((index) => index + 1);
    } else {
      setNextQuestions();
    }
  };

  const submit = async () => {
    const profile = localStorage.getItem("profile");
    console.log(answers);
    if (profile) {
      const { token } = JSON.parse(profile);

      const keys = Object.keys(answers);
      const new_answers: any[] = [];
      keys.forEach((key) => {
        new_answers.push({ ...answers[key], question_id: key });
      });

      const payload = {
        answers: new_answers,
        account_type: answers[1].answer,
      };

      console.log(payload);
      const response = await axios.post(
        `${BASE_URL}/onboarding/save-metadata`,
        payload,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      toast.success("Submitted user information... redirecting to dashbaord");
      window.location.assign(`${STUDENT_FRONT_BASE}/auth/${token}`);
    }
  };

  // back gets the previous question from the parent_id or decrement the current question index,
  // for questions that have siblings
  const back = () => {
    if (index > 0) {
      setIndex((index) => index - 1);
    } else {
      const previous = questions.find(
        (q: any) => q.id == currentQuestion?.parent_id
      );
      setCurrentQuestion(previous);
      setActiveSelection(null);
      setActiveQuestions([]);
      setIndex(0);
    }
  };

  return (
    <>
      <p></p>
      <div className="bg-white flex flex-col justify-center pb-20">
        <p className="font-[500] text-[20px] mb-6">
          {currentQuestion?.question}
        </p>

        {currentQuestion?.type == "single-select" && (
          <SingleSelectGroup
            setAnswer={setAnswer}
            answer={answers[currentQuestion?.id]}
            options={currentQuestion?.options}
            activeSelection={activeSelection}
            setActiveSelection={setActiveSelection}
          />
        )}
        {currentQuestion?.type == "multi-select" && (
          <MultiSelectGroup
            setAnswer={setAnswer}
            answer={answers[currentQuestion?.id]}
            max={4}
            options={currentQuestion?.options}
            activeSelection={activeSelection}
            setActiveSelection={setActiveSelection}
          />
        )}
      </div>
      <div className="w-full flex h-[5rem] items-center justify-between ">
        <button
          disabled={index == 0 && currentQuestion?.parent_id == null}
          onClick={back}
          className="font-[500] text-md"
        >
          {index > 0 || currentQuestion?.parent_id ? "Back" : ""}
        </button>
        <button
          onClick={finished ? submit : next}
          disabled={activeSelection === null}
          className={`${
            activeSelection == null ? "bg-main-light" : "bg-main"
          } rounded text-white px-7 py-2 text-base font-[600] `}
        >
          {finished ? "Submit" : "continue"}
        </button>
      </div>
    </>
  );
};

const OnboardingSetup: FC = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [getOnboardingQuestions, { isLoading }] =
    useLazyGetOnboardingQuestionsQuery();

  useEffect(() => {
    getOnboardingQuestions({}).then((response) => {
      setQuestions(response?.data?.data ?? []);
    });
  }, []);

  return (
    <div className="bg-white px-6 sm:px-20 flex flex-col justify-between">
      <ProcessFlow questions={questions} />
    </div>
  );
};

export default function Onboarding() {
  return (
    <div className="grid md:grid-cols-2 h-full">
      <OnboardingSetup />
      <div className="h-full bg-[#fbf4fc] relative flex-col justify-end hidden md:flex">
        <img src={loginImg} alt="" className="w-[80%] mx-auto" />
      </div>
    </div>
  );
}

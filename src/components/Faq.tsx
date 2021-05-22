import React, { useState } from "react";

const faqs = [
  {
    question: "How long is the road test appointment?",
    answer: `Yes you can. your parent or guardian must sign up the form MV-44.
    also, Jammu Motor Vehicles requires at least 50 hours of
    supervised training of 15 hours must be night driving in order to
    take your Road Test.`,
  },
  {
    question: "How long is the road test appointment?",
    answer: `Yes you can. your parent or guardian must sign up the form MV-44.
    also, Jammu Motor Vehicles requires at least 50 hours of
    supervised training of 15 hours must be night driving in order to
    take your Road Test.`,
  },
  {
    question: "How long is the road test appointment?",
    answer: `Yes you can. your parent or guardian must sign up the form MV-44.
    also, Jammu Motor Vehicles requires at least 50 hours of
    supervised training of 15 hours must be night driving in order to
    take your Road Test.`,
  },
  {
    question: "How long is the road test appointment?",
    answer: `Yes you can. your parent or guardian must sign up the form MV-44.
    also, Jammu Motor Vehicles requires at least 50 hours of
    supervised training of 15 hours must be night driving in order to
    take your Road Test.`,
  },
];
export default () => {
  const [currentOpen, setCurrentOpen] = useState(-1);
  
  return (
    <div className="faq">
      <div className="container">
        <div className="section-header">
          <h2>FAQ</h2>
          <p>
            Sed tamen tempor magna labore dolore dolor sint tempor duis magna
            elit veniam aliqua esse amet veniam enim export quid quid veniam
            aliqua eram noster malis nulla duis fugiat culpa esse aute nulla
            ipsum velit export irure minim illum fore
          </p>
        </div>
        <ul className="faq__list">
          {faqs.map((x, idx) => (
            <li
              className={`faq__item row ${idx === currentOpen && 'faq__item_active'}`}
              onClick={() => setCurrentOpen(idx)}
            >
              <div className="col-md-7">
                <div className="faq__question">{x.question}</div>
                <div className="faq__answer">{x.answer}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

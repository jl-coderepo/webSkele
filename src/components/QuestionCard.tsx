import React from "react";

type Props = {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <div>
    <p className='number'>
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answer &&
        answer.map((a) => (
          <div>
            <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: a }} />
            </button>
          </div>
        ))}
    </div>
  </div>
);

export default QuestionCard;

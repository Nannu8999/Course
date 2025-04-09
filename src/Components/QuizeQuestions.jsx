import { useState, useEffect } from "react";
import { getQuizeQuestions } from "../ApiCall";

function QuizeQuestions({ setShowModal, setScore }) {
    const [questions, setQuestions] = useState([]);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const thinking = '/animation/psychology.gif';
    const success = '/animation/success.gif';
    const wrong = '/animation/angry.gif';

    useEffect(() => {
        const getQuestions = async () => {
            const data = await getQuizeQuestions();
            setQuestions(data);
        };
        getQuestions();
    }, []);

    const currentQuestion = questions[questionNumber];

    const handleNext = () => {
        setShowAnswer(true); // show correct answer

        // wait 1 second, then go to next question
        setTimeout(() => {
            if (questionNumber < questions.length - 1) {
                setQuestionNumber((prev) => prev + 1);
                setSelectedOption(null);
                setShowAnswer(false);

                if (
                    selectedOption?.trim().toLowerCase() ===
                    currentQuestion.answer?.trim().toLowerCase()
                ) {
                    setCorrectAnswers((prev) => prev + 1);
                }

            } else {

                setScore({ actual: correctAnswers, total: (questions.length - 1) });

                console.log(correctAnswers, (questions.length - 1))
                setShowModal(false);
            }
        }, 1000);
    };

    return (
        <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Quiz</h5>
                    </div>

                    <div className="modal-body">
                        {currentQuestion ? (
                            <div className="mb-4">
                                <h6>
                                    {questionNumber + 1}. {currentQuestion.question}
                                </h6>

                                <ul className="list-unstyled">
                                    {currentQuestion.options.map((option, index) => (
                                        <li key={index} className="mb-2">
                                            <label
                                                className={
                                                    showAnswer && currentQuestion.answer === option
                                                        ? 'bg-success p-1 rounded text-white'
                                                        : ''
                                                }
                                            >
                                                <input
                                                    type="radio"
                                                    name={`question-${currentQuestion.id}`}
                                                    className="me-2"
                                                    value={option}
                                                    disabled={showAnswer}
                                                    checked={selectedOption === option}
                                                    onChange={() => setSelectedOption(option)}
                                                />
                                                {option}
                                            </label>
                                        </li>
                                    ))}
                                </ul>

                                {/* ✅ Show animation if correct answer is selected */}

                                {showAnswer && selectedOption?.trim().toLowerCase() === currentQuestion.answer?.trim().toLowerCase() && (
                                    <div className="text-center my-3">
                                        <img src={success} alt="Correct Answer" style={{ width: '150px' }} />
                                        <p className="text-success fw-bold">Correct Answer!</p>
                                    </div>
                                )}

                                {showAnswer && selectedOption?.trim().toLowerCase() !== currentQuestion.answer?.trim().toLowerCase() && (
                                    <div className="text-center my-3">
                                        <img src={wrong} alt="Wrong Answer" style={{ width: '150px' }} />
                                        <p className="text-danger fw-bold">Wrong Answer!</p>
                                    </div>
                                )}

                                {!showAnswer && (
                                    <div className="text-center my-3">
                                        <img src={thinking} alt="thingk" style={{ width: '150px' }} />
                                        <p className="text-danger fw-bold">?????</p>
                                    </div>
                                )}


                                <button
                                    className="btn btn-primary mt-3"
                                    onClick={handleNext}
                                    disabled={selectedOption === null || showAnswer}
                                >
                                    {questionNumber < questions.length - 1 ? "Next" : "Finish"}
                                </button>



                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizeQuestions;

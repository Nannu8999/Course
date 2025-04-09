import { useState, useEffect } from "react";
import { getCourses } from "../ApiCall";
import CourseVideo from "./CourseVideo";
import QuizeQuestions from "./QuizeQuestions";
import ResultModal from "./ResultModal";

function CourseCatalog() {
    const [courses, setCourses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 6;
    const [showModal, setShowModal] = useState(false);
    const [isVideoModal, setIsVideoModal] = useState('');
    const [score, setScore] = useState(null);


    useEffect(() => {
        const fetchCourses = async () => {
            const data = await getCourses();
            setCourses(data);
        };
        fetchCourses();
    }, []);

    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);
    const totalPages = Math.ceil(courses.length / coursesPerPage);

    const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
    const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

    const openVideo = () => {
        setShowModal(true);
        setIsVideoModal(true)
    };

    const openQuize = () => {
        setShowModal(true);
        setIsVideoModal(false)
    };

    if (score) {
        console.log(score);
    }
    return (

        <div className="container mt-4">
            <div className="row col-md-12">
                {currentCourses.length > 0 ? (
                    currentCourses.map((course) => (
                        <div key={course.id} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="card-img-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        <button
                                            className="btn btn-success rounded"
                                            onClick={() => openVideo()}
                                        >
                                            Start Learning
                                        </button>

                                        <button
                                            className="btn btn-success rounded"
                                            onClick={() => openQuize()}
                                        >
                                            Take Quiz
                                        </button>
                                    </div>

                                    <h5 className="card-title">{course.title}</h5>
                                    <p className="card-text">{course.description}</p>
                                </div>


                            </div>
                        </div>
                    ))
                ) : (
                    <div>No data found</div>
                )}
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-between mt-4">
                <button
                    className="btn btn-success"
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="align-self-center bg-success rounded" >
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    className="btn btn-success"
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>


            {/* Modal */}
            {showModal && isVideoModal === true && <CourseVideo setShowModal={setShowModal} />}
            {showModal && isVideoModal === false && <QuizeQuestions setShowModal={setShowModal} setScore={setScore} />}
            {score && <ResultModal actualScore={score.actual} totalScore={score.total} setShowModal={setShowModal} setScore={setScore} />}


        </div>
    );
}

export default CourseCatalog;

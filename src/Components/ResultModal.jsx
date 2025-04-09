function ResultModal({ actualScore, totalScore, setShowModal, setScore }) {

    const percentage = ((actualScore / totalScore) * 100).toFixed(0);

    const good = '/animation/good.gif';
    const bad = '/animation/notgood.gif'


    return (
        <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
            <div className="modal-dialog modal-md" role="document">
                <div className="modal-content rounded-4">
                    <div className="modal-header">
                        <h5 className="modal-title">Quiz Result</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => {
                                setShowModal(false);
                                setScore(null);
                            }}
                        ></button>
                    </div>

                    <div className="modal-body text-center py-5">
                        <h2 className="mb-4">Your Score</h2>
                        <div
                            className="d-inline-block p-4 rounded-circle bg-light border border-4"
                            style={{
                                minWidth: '150px',
                                minHeight: '150px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                color: '#0d6efd',
                            }}
                        >
                            {actualScore} / {totalScore}
                            <div style={{ fontSize: '1rem', color: 'gray', marginTop: '0.5rem' }}>
                                ({percentage}%)
                            </div>
                        </div>

                        <div className="mt-4">
                            {percentage >= 70 ? (
                                <p className="text-success fw-bold">Great job! 🎉<span><img src={good} style={{ width: '50%' }} /></span></p>

                            ) : (
                                <p className="text-danger fw-bold">Keep practicing! 💪<span><img src={bad} style={{ width: '50%' }} /></span></p>
                            )}
                        </div>

                        <button
                            className="btn btn-outline-primary mt-4"
                            onClick={() => {
                                setShowModal(false);
                                setScore(null);
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultModal;

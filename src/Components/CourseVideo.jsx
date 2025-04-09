function CourseVideo({ setShowModal }) {
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
                        <h5 className="modal-title">Course Video</h5>
                        <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                    </div>

                    <div className="modal-body">
                        <div className="ratio ratio-16x9">
                            <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/s2skans2dP4?si=r4CMlJrFSSBYHiB9&autoplay=1"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen>
                            </iframe>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CourseVideo;
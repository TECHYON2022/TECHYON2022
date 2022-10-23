import '../styles/timeline.css';

function Timeline() {
    return (
        <div className="position-relative timeline">
            <div className="d-flex row justify-content-center align-items-center m-0 p-0 my-5">
                <hr className='w-15' />
                <div className="fs-20 bolder w-25 text-center">
                    TIMELINE
                </div>
                <hr className='w-15' />
            </div>
            <div className="timeline w-100 d-flex row justify-content-center m-0 p-0 px-5">
                <div>
                    <div className="timeline-item py-3">
                        <h4 className='fs-18 m-0'>22 oct - Registrations open</h4>
                    </div>
                    <div className="timeline-item py-3">
                        <h4 className='fs-18 m-0'>26 oct - Registrations closed</h4>
                    </div>
                    <div className="timeline-item py-3">
                        <h4 className='fs-18 m-0'>27 oct - TECHYON day 1</h4>
                    </div>
                    <div className="timeline-item py-3">
                        <h4 className='fs-18 m-0'>28 oct - TECHYON day 2</h4>
                    </div>
                    <div className="timeline-item py-3">
                        <h4 className='fs-18 m-0'>29 oct - TECHYON day 3</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline

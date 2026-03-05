import { useState } from 'react'
import { Bookmark } from 'lucide-react'


const Card = (props) => {

    const [saved, setSaved] = useState(false)
    const toggleBookmark = () => {
        setSaved(!saved)
    }
    return (
        <>
            <div className="card">
                <div className="top">
                    <div className="logo-div"><img className='brand-logo' src={`../src/assets/${props.company}.png`} alt="Amazon-Logo" /></div>

                    <div className="bookmark" onClick={toggleBookmark}>
                        <span className='bookmark-text' >{saved ? "Saved" : "Save"}</span>
                        <div className="bookmark-icon">
                            <Bookmark fill={saved ? "black" : "none"} />
                        </div>

                    </div>
                </div>

                <div className="center">
                    <div>
                        <span className='company'>{props.company}</span>
                        <span className='post-time'>{props.datePosted} days ago</span>
                    </div>
                    <div className='job-post'>{props.jobPosition}</div>
                    <div>
                        <div className='job-type'>{props.jobType}</div>
                        <div className='job-disc'>{props.jobDesc}</div>
                    </div>
                </div>

                <div className="bottom">
                    <div>
                        <div className="pay">{props.payScale}</div>
                        <div className="location">{props.jobLocation}</div>
                    </div>
                    <div>
                        <button>Apply now</button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Card
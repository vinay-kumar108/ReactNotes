import { Bookmark } from 'lucide-react'

const Card = () => {
    return (
        <>
            <div className="card">
                <div className="top">
                    <div className="logo-div"><img className='brand-logo' src="../src/assets/01-logo.png" alt="Amazon-Logo" /></div>

                    <div className="bookmark">
                        <span className='bookmark-text'>Save</span>
                        <div className="bookmark-icon">
                            {/* imported from lucid-react */}
                            <Bookmark /></div>

                    </div>
                </div>

                <div className="center">
                    <div>
                        <span className='company'>Amazon</span>
                        <span className='post-time'>5 days ago</span>
                    </div>
                    <div className='job-post'>Senior UI/UX Designer</div>
                    <div>
                        <div className='job-type'>Part-Time</div>
                        <div className='job-disc'>Senior Level</div>
                    </div>
                </div>

                <div className="bottom">
                    <div>
                        <div className="pay">$120/hr</div>
                        <div className="location">Mumbai, India</div>
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
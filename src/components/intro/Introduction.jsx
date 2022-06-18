import me from '../../images/me.jpg';
import './intro.css';

export const Introduction = ()=>{
    return (
        <div className="i-headerWrapper">
            <div className="i-left">
                <div className="i-leftWrapper">
                    <h2 className="i-intro">Hello!</h2>
                    <h1 className="i-name">I'm Deepak Gupta, a Software Enginner specializing in Frontend Development</h1>
                    <div className="i-title">
                        <div className="i-titleWrapper">
                            <div className='i-title-item'>Frontend Developer</div>
                            <div className='i-title-item'>Android Developer</div>
                        </div>
                    </div>
                    <p className='i-description'>
                        Inquistive Learner Looking For A Challenging Position As a Software Engineer
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg">
                    <img src={me} alt="" className="i-img"/>
                </div>
            </div>
        </div>
    )
}
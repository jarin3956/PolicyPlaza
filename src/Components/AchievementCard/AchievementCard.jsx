import React from 'react';
import './AchievementCard.css';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import Person2Icon from '@mui/icons-material/Person2';

function AchievementCard() {
    return (
        <div className='ach-area'>
            <div className='row justify-content-center justify-content-lg-between ach-container'>
                <div className="col-11 col-lg-5 ach-cardarea">
                    <div className='ach-card'>
                        <div className="fi-card">
                            <div className="fi-content">
                                <img src="/PolicyPlaza-logo-1.png" alt="Logo" style={{ height: 50 }} />
                                <p className="fi-para" >What makes PolicyPlaza one of India's favourite places to buy insurance?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-11 col-lg-5 ach-cardarea">
                    <div className='ach-card '>
                        <div className="fi-card">
                            <div className="fj-content row">
                                <div className='fj-items' >
                                    <p className='fjit-head'><CelebrationIcon/> Over 9 million</p>
                                    <p className='fjit-para'>Customers trust us & have bought their insurance on PolicyPlaza</p>
                                </div>
                                <div className='fj-items' >
                                    <p className='fjit-head'><SavedSearchIcon/> 50+ insurers</p>
                                    <p className='fjit-para'>Partnered with us so that you can compare easily & transparently</p>
                                </div>
                                <div className='fj-items' >
                                    <p className='fjit-head'><InsertEmoticonIcon/> Great Price</p>
                                    <p className='fjit-para'>For all kinds of insurance plans available online</p>
                                </div>
                                <div className='fj-items' >
                                    <p className='fjit-head'><Person2Icon/> Claims</p>
                                    <p className='fjit-para'>Support built in with every policy for help, when you need it the most</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AchievementCard
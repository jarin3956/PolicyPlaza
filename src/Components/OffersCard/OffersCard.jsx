import React from 'react';
import './OffersCard.css';
import HomeIcon from '@mui/icons-material/Home';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

function OffersCard() {
    return (
        <div className='offr-area'>
            <div className='offr-container row'>
                <div className="col-11 col-lg-3 offr-cardarea">
                    <div className="offr-cardb">
                        <p className="offr-cardhead"><MonetizationOnIcon/> Investment Plans</p>
                        <p className="offr-carddesc">Begin your journey with an investment of ₹10k having returns worth ₹1 Crore*</p>
                        <button className="km-btnb">Know More</button>
                    </div>
                </div>
                <div className="col-11 col-lg-3 offr-cardarea">
                    <div className="offr-cardpp">
                        <p className="offr-cardhead"><MonitorHeartIcon/> Health Insurance</p>
                        <p className="offr-carddesc">Unlock ₹1 Crore in Health Coverage for Less than the Cost of ₹5 Lacs</p>
                        <button className="km-btnpp">Know More</button>
                    </div>
                </div>
                <div className="col-11 col-lg-3 offr-cardarea">
                    <div className="offr-cardy">
                        <p className="offr-cardhead"><HomeIcon/> Home Insurance</p>
                        <p className="offr-carddesc"> ₹50 Lakh Cover for your Home Insurance starting @ just ₹80/month* </p>
                        <button className="km-btny">Know More</button>
                    </div>
                </div>
                <div className="col-11 col-lg-3 offr-cardarea">
                    <div className="offr-cardp">
                        <p className="offr-cardhead"><QuestionAnswerIcon/> Ask PolicyPlaza</p>
                        <p className="offr-carddesc">Do you have any questions about insurance that you'd like answered? </p>
                        <button className="km-btnp">Write to Us</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default OffersCard
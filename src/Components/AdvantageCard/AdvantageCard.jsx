import React from 'react';
import './AdvantageCard.css'

function AdvantageCard() {
    return (
        <div className="adv-area">
            <div className="mb-1 text-center">
                <p className='adv-head'>PolicyPlaza's Advantage</p>
                <div className='adv-desc'>
                    <p className='text-muted pb-2' >When you choose us as your insurance provider, you're not just securing financial protection, you're gaining peace of mind. Our commitment extends beyond mere policies to providing clarity on intricate insurance terms, facilitating hassle-free claims, offering instant quotes from leading insurers, and standing by you during life's most challenging moments.</p>
                </div>
            </div>
            <div className="row justify-content-center justify-content-lg-between adv-container">
                <div className="col-12 col-lg-auto m-2 adv-cardarea">
                    <div className="adv-card">
                        <div className="adv-card-info">
                            <div className="adv-card-avatar"><img src="/bestprice.png" alt="Logo" className='w-100 rounded-3' /></div>
                            <div className="adv-card-title">Best Price</div>
                            <div className="adv-card-subtitle">Guaranteed</div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-auto m-2 adv-cardarea">
                    <div className="adv-card">
                        <div className="adv-card-info">
                            <div className="adv-card-avatar"><img src="/reliable.jpg" alt="Logo" className='w-100 rounded-3' /></div>
                            <div className="adv-card-title">100% Reliable</div>
                            <div className="adv-card-subtitle">Regulated by IRDAI</div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-auto m-2 adv-cardarea">
                    <div className="adv-card">
                        <div className="adv-card-info">
                            <div className="adv-card-avatar"><img src="/customerfirst.jpg" alt="Logo" className='w-100 rounded-3' /></div>
                            <div className="adv-card-title">Unbiased Advice</div>
                            <div className="adv-card-subtitle">Keeping customers first</div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-auto m-2 adv-cardarea">
                    <div className="adv-card">
                        <div className="adv-card-info">
                            <div className="adv-card-avatar"><img src="/happytohelp.jpg" alt="Logo" className='w-100 rounded-3' /></div>
                            <div className="adv-card-title">Happy to Help</div>
                            <div className="adv-card-subtitle">Every day of the week</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='know-btn-area'>
                <button className='know-btn'>
                    <span>Know More</span>
                    <svg className='know-svg' width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
                        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default AdvantageCard
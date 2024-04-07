import React from 'react';
import './CautionCard.css';

function CautionCard() {
    return (
        <>
            <div className='full-caut' >
                <div className=" text-center">
                    <p className='caut-main-head'>How PolicyPlaza Works?</p>
                </div>
                <div className='caut-area'>
                    <div className='caut-container row'>
                        <div className="col-11 col-lg-4 caut-cardarea">
                            <div className="caut-card">
                                <div className="caut-header">
                                    <img src="/fill-details.jpg" alt="Logo" className='w-100' />
                                </div>
                                <div className="caut-content">
                                    <span className="caut-catitle">Fill in Your Details</span>
                                    <p className="caut-cadesc">Easily secure personalized insurance policy premium quotes from top-rated insurers in moments. Just provide your details, and unlock exclusive access to the most competitive rates designed to fit your unique requirements.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-11 col-lg-4 caut-cardarea">
                            <div className="caut-card">
                                <div className="caut-header">
                                    <img src="/choose-policy.jpg" alt="Logo" className='w-100' />
                                </div>
                                <div className="caut-content">
                                    <span className="caut-catitle">Choose a Insurance Policy</span>
                                    <p className="caut-cadesc">Browse through available quotes, meticulously tailored to cater to your specific needs and financial constraints. Delve into a wealth of options and handpick the one that perfectly aligns with your preferences.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-11 col-lg-4 caut-cardarea">
                            <div className="caut-card">
                                <div className="caut-header">
                                    <img src="/make-payment.jpg" alt="Logo" className='w-100' />
                                </div>
                                <div className="caut-content">
                                    <span className="caut-catitle">Make Payment and Sit Back</span>
                                    <p className="caut-cadesc">Seamlessly complete your transaction online using Visa, RuPay, Mastercard, Maestro, American Express, and Paytm. Upon successful payment, receive your policy instantly delivered straight to your inbox.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CautionCard
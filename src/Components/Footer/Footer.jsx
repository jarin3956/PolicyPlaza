import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                <section>
                    <div className="container text-center text-md-start pt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">
                                <img src="/PolicyPlaza-logo-2.png" alt="Logo" style={{ height: 50 }} />
                                <div className="ft-desc">
                                    <p>
                                        PolicyPlaza is your digital gateway to comprehensive insurance coverages. Explore a wide array of policies tailored to your needs, enjoy hassle-free claims, and experience peace of mind in every click. We are always dedicated to provide peace of mind and security for you and your loved ones.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-2 col-lg-3 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Insurance
                                </h6>
                                <p className="ins-items">Life Insurance</p>
                                <p className="ins-items">Health Insurance</p>
                                <p className="ins-items">Home Insurance</p>
                                <p className="ins-items">Motor Insurance</p>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Investments
                                </h6>
                                <p className="ins-items">Capital Guarantee Plans</p>
                                <p className="ins-items">Investment Plans for NRIs</p>
                                <p className="ins-items">Systematic Investment Plan</p>
                                <p className="ins-items">Guaranteed Return Plans</p>
                            </div>
                            <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><LocationOnIcon /> Bangalore, India</p>
                                <p><MailIcon /> info@policyplaza.com </p>
                                <p><PhoneIcon /> + 91 0123456789</p>
                                <p><PhoneIcon /> + 91 0123456789</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="d-flex flex-column align-items-center p-2 border-bottom "  >
                    <div className="mb-1 text-center">
                        <p className='pay-head'>Payment Methods</p>
                    </div>
                    <div className="row justify-content-center justify-content-lg-between">
                        <div className="col-4 col-lg-2 mb-1">
                            <img src="/visa-logo.jpg" alt="Logo" className='w-100 pay-img' />
                        </div>
                        <div className="col-4 col-lg-2 mb-1">
                            <img src="/aeex-logo.png" alt="Logo" className='w-100 pay-img' />
                        </div>
                        <div className="col-4 col-lg-2 mb-1">
                            <img src="/maestro-logo.png" alt="Logo" className='w-100 pay-img' />
                        </div>
                        <div className="col-4 col-lg-2 mb-1">
                            <img src="/mc-logo.png" alt="Logo" className='w-100 pay-img' />
                        </div>
                        <div className="col-4 col-lg-2 mb-1">
                            <img src="/paytm-logo.jpg" alt="Logo" className='w-100 pay-img' />
                        </div>
                        <div className="col-4 col-lg-2 mb-1">
                            <img src="/rupay-logo.png" alt="Logo" className='w-100 pay-img' />
                        </div>

                    </div>
                </section>
                <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2024 Copyright: Jarin Jayamurali
                </div>
            </footer>
        </>
    )
}

export default Footer
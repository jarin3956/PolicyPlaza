import React, { useEffect, useState } from 'react';
import './BannerCard.css';


function BannerCard() {
    const [selectedImage, setSelectedImage] = useState(0);

    const handleButtonClick = async (index) => {
        setSelectedImage(index);
    };

    const loadPrevious = async () => {
        setSelectedImage((selectedImage - 1) % 3);
    }

    const loadNext = async () => {
        setSelectedImage((selectedImage + 1) % 3);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedImage(prevIndex => (prevIndex + 1) % 3); 
        }, 2500);
    
        return () => clearInterval(interval);
    }, [handleButtonClick,loadPrevious,loadNext]);

    return (
        <>
            <div className='bannerCard'>
                <div id="carouselBasicExample" className="carousel slide carousel-fade" data-mdb-ride="carousel" data-mdb-carousel-init>
                    <div className="carousel-indicators">
                        {[0, 1, 2].map((v) => (
                            <button className={`${selectedImage === v ? "carousel-bt-sel" : "carousel-bt" }`} key={v} onClick={() => handleButtonClick(v)} >
                                <p></p>
                            </button>
                        ))}
                    </div>

                    <div className="carousel-inner">
                        <div className={`carousel-item ${selectedImage === 0 ? "active" : ""}`}>
                            <img src="./pp-banner-1.jpg" className="banner-img w-100" alt="Banner-1" />
                        </div>
                        <div className={`carousel-item ${selectedImage === 1 ? "active" : ""}`}>
                            <img src="./pp-banner-2.jpg" className="banner-img w-100" alt="Banner-2" />
                        </div>
                        <div className={`carousel-item ${selectedImage === 2 ? "active" : ""}`}>
                            <img src="./pp-banner-3.jpg" className="banner-img w-100" alt="Banner-3" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" onClick={loadPrevious} >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button className="carousel-control-next" onClick={loadNext} >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default BannerCard;

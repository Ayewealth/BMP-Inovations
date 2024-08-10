import { Typewriter } from "react-simple-typewriter"
import TrustedBy from "../common/TrustedBy"

const HomeBanner = () => {
    return (
        <div className='section'>
            <div className="container">
                <div className="banner__container">
                    <div className='banner__contents'
                        data-aos="fade-down-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <h3>DO IT BETTER TODAY</h3>
                        <h2>Let's Grow Your <Typewriter words={["Ideas", "Brands", "Business"]} loop={true} typeSpeed={80} /></h2>
                        <p>
                            Elevate your brand's digital presence with our comprehensive software solutions. From web and app development to logo design and captivating animations, we offer a full spectrum of services. Seamlessly integrating technology, we enhance efficiency and amplify your brand in the digital landscape.
                        </p>
                        <button>GET STARTED</button>
                    </div>
                    <div className='banner__img'
                        data-aos="fade-down-left"
                        ata-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <img src="/images/head new.png" alt="" />
                    </div>
                </div>
                <TrustedBy />
            </div>
        </div>
    )
}

export default HomeBanner
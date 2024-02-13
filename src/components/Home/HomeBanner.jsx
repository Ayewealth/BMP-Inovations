import { Typewriter } from "react-simple-typewriter"

const HomeBanner = () => {
    return (
        <div className='section'>
            <div className="container">
                <div className="banner__container">
                    <div className='banner__contents'>
                        <h3>DO IT BETTER TODAY</h3>
                        <h2>Let's Grow Your <Typewriter words={["Idea", "Brand", "Business"]} loop={true} typeSpeed={80} /></h2>
                        <p>
                            Elevate your brand's digital presence with our comprehensive software solutions. From web and app development to logo design and captivating animations, we offer a full spectrum of services. Seamlessly integrating technology, we enhance efficiency and amplify your brand in the digital landscape.
                        </p>
                        <button>GET STARTED</button>
                    </div>
                    <div className='banner__img'>
                        <img src="/images/head new.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner
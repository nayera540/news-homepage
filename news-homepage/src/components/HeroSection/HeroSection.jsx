function HeroSection() {
    return (
        <section className="w-full md:w-8/12">
            <div className="hero-img">
                <img src="/assets/images/image-web-3-desktop.jpg" className="md:block hidden"/>
                <img src="/assets/images/image-web-3-mobile.jpg" className="md:hidden block"/>
            </div>
            <div className="hero-section-content flex flex-wrap mt-6">
                <div className="hero-header w-full md:w-6/12">
                    <h1 className="text-VeryDarkBlue text-4xl md:text-6xl font-bold md:pr-24">The Bright Future of Web 3.0?</h1>
                </div>
                <div className="hero-read-more flex flex-col justify-between w-full md:w-6/12 md:px-9">
                    <p className="text-DarkGrayishBlue text-[1.18rem] mb-5 md:mb-8">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?
                    </p>
                    <button className="bg-SoftRed self-start hover:text-white hover:bg-VeryDarkBlue duration-300 uppercase py-3 px-8 tracking-[3.5px] text-[1rem] text-VeryDarkBlue font-semibold">
                        Read more
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

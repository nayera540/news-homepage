import './TechTrendsSection.css';

function TechTrendsSection() {
    return (
        <section className="tech-trends-section flex flex-wrap md:flex-nowrap md:gap-16 sm:gap-8 gap-6 py-12 md:py-20">
            {/* <!-- First Trend --> */}
            <div className="tech-trend md:w-4/12 w-full">
                <div className="flex flex-nowrap sm:gap-6 gap-3">
                    <div className="trend-img w-1/3">
                        <img src="/assets/images/image-retro-pcs.jpg" alt="PCs trend" />
                    </div>
                    <div className="tech-trend-information w-2/3">
                        <span className="trend-number">01</span>
                        <h3 className="trend-title">
                            <a href="#">Reviving Retro PCs</a>
                        </h3>
                        <p className="trend-description">
                            What happens when old PCs are given modern upgrades?
                        </p>
                    </div>
                </div>
            </div>
            {/* <!-- Second Trend --> */}
            <div className="tech-trend md:w-4/12 w-full">
                <div className="flex flex-nowrap sm:gap-6 gap-3">
                    <div className="trend-img w-1/3">
                        <img src="/assets/images/image-top-laptops.jpg" alt="laptops trend" />
                    </div>
                    <div className="tech-trend-information w-2/3">
                        <span className="trend-number">02</span>
                        <h3 className="trend-title">
                            <a href="#">Top 10 Laptops of 2022</a>
                        </h3>
                        <p className="trend-description">
                            Our best picks for various needs and budgets.
                        </p>
                    </div>
                </div>
            </div>
            {/* <!-- Third Trend --> */}
            <div className="tech-trend md:w-4/12 w-full">
                <div className="flex flex-nowrap sm:gap-6 gap-3">
                    <div className="trend-img w-1/3">
                        <img src="/assets/images/image-gaming-growth.jpg" alt="gaming growth trend" />
                    </div>
                    <div className="tech-trend-information w-2/3">
                        <span className="trend-number">03</span>
                        <h3 className="trend-title">
                            <a href="#">The Growth of Gaming</a>
                        </h3>
                        <p className="trend-description">
                            How the pandemic has sparked fresh opportunities.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default TechTrendsSection

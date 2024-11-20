import './AsideSection.css';

function AsideSection() {
    return (
        <section className="aside-section w-full md:w-4/12 bg-VeryDarkBlue px-12 pt-10">
            <h2 className="uppercase text-SoftOrange font-[700] text-5xl">new</h2>
            <div className="aside-section">
                <h3 className="aside-title">
                    <a href="" className="">
                        Hydrogen VS Electric Cars
                    </a>
                </h3>
                <p className="aside-description">
                    Will hydrogen-fueled cars ever catch up to EVs?
                </p>
            </div>
            <div className="aside-section">
                <h3 className="aside-title">
                    <a href="" className="">
                        The Downsides of AI Artistry
                    </a>
                </h3>
                <p className="aside-description">
                    What are the possible adverse effects of on-demand AI image generation?
                </p>
            </div>
            <div className="aside-section">
                <h3 className="aside-title">
                    <a href="" className="">
                        Is VC Funding Drying Up?
                    </a>
                </h3>
                <p className="aside-description">
                    Private funding by VC firms is down 50% YOY. We take a look at what that means.
                </p>
            </div>
        </section>
    )
}

export default AsideSection

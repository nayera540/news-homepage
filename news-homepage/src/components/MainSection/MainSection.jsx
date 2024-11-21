import AsideSection from "../AsideSection/AsideSection"
import HeroSection from "../HeroSection/HeroSection"

function MainSection() {
    return (
        <main className="main-section flex flex-wrap gap-8 lg:flex-nowrap mt-12">
            <HeroSection />
            <AsideSection />
        </main>
    )
}

export default MainSection

import AsideSection from "../AsideSection/AsideSection"
import HeroSection from "../HeroSection/HeroSection"

function MainSection() {
    return (
        <main className="main-section flex flex-wrap mt-12 gap-4">
            <HeroSection />
            <AsideSection />
        </main>
    )
}

export default MainSection

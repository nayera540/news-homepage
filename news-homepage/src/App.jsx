import MainSection from "./components/MainSection/MainSection"
import NavBar from "./components/NavBar/NavBar"
import TechTrendsSection from "./components/TechTrendsSection/TechTrendsSection"

function App() {

    return (
        <div className="container">
            <NavBar />
            <MainSection />
            <TechTrendsSection />
        </div>
    )
}

export default App

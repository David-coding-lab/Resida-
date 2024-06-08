import './Shared_Components/shared.css'
import './Components/components.css'
import './App.css'
import Header from "./Shared_Components/Header"
import Hero from './Components/Hero'
import SubHero from './Components/SubHero'
import ExpSection from './Components/ExpSection'

export default function App(){
    return(
        <div>
            <Header />
            <Hero />
            <SubHero />
            <ExpSection />
        </div>
    )
}
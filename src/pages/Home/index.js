import React from "react"
import Home1 from "../../components/features/Landing/home1"
import Home2 from "../../components/features/Landing/home2"
import Home3 from "../../components/features/Landing/home3"
import Home4 from "../../components/features/Landing/home4"
import Home5 from "../../components/features/Landing/home5"


const Home = () => (
    <div className="flex flex-col items-center">
        <Home1 />
        <Home2 />
        <Home3 />
        <Home4 />
        <Home5 />
    </div>
)
export default Home
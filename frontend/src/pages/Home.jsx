import HomeHeader from "../components/home/HomeHeader";
import "../components/home/home.css";
import HomeFacts from "../components/home/HomeFacts";
import {useEffect} from "react";


export const Home = () => {
    useEffect(() => {
        const gsap = window.gsap
        const ScrollSmoother = window.ScrollSmoother;
        const ScrollTrigger = window.ScrollTrigger

        gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
        ScrollSmoother.create({
            wrapper: "#wrapper",
            content: "#content",
            smooth: 1.5,
            effects: true
        })
    })

    return (
        <div className="Home">
            <div id="wrapper">
                <div id="content">
                    <HomeHeader/>
                    <HomeFacts/>
                </div>
            </div>
        </div>
    )
}

export default Home;
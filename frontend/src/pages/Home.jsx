import HomeHeader from "../components/home/HomeHeader";
import "../components/home/home.css";
import HomeFacts from "../components/home/HomeFacts";
import {useEffect} from "react";
import {gsap} from "../libs/gsap/gsap.min";
import {ScrollSmoother} from "../libs/gsap/ScrollSmoother.min";
import {ScrollTrigger} from "../libs/gsap/ScrollTrigger.min";
import HomeJoin from "../components/home/HomeJoin";
import HomeFooter from "../components/home/HomeFotter";
// import {Wallet} from "../near-wallet";
//
// const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME })


export const Home = () => {
    useEffect( () => {
    })

    useEffect(() => {
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
                    <HomeJoin/>
                    <HomeFooter/>
                </div>
            </div>
        </div>
    )
}

export default Home;
import HomeHeader from "../components/home/HomeHeader";
import "../components/home/home.css";
import HomeFacts from "../components/home/HomeFacts";
import {useEffect} from "react";
import {gsap} from "../libs/gsap/gsap.min";
import {ScrollSmoother} from "../libs/gsap/ScrollSmoother.min";
import {ScrollTrigger} from "../libs/gsap/ScrollTrigger.min";
import Wallet from "../near-wallet";
// import {Wallet} from "../near-wallet";
//
// const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME })


export const Home = () => {
    const loginWallet = async () => {
        const isSignedIn = await Wallet.startUp()
        Wallet.signIn()
        console.log(isSignedIn)

    }

    useEffect( () => {
        loginWallet().catch(console.error)
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
                </div>
            </div>
        </div>
    )
}

export default Home;
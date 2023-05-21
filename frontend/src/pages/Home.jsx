import HomeHeader from "../components/home/HomeHeader";
import "../components/home/home.css";
import HomeFacts from "../components/home/HomeFacts";
import {useEffect} from "react";
import {gsap} from "../libs/gsap/gsap.min";
import {ScrollSmoother} from "../libs/gsap/ScrollSmoother.min";
import {ScrollTrigger} from "../libs/gsap/ScrollTrigger.min";
import HomeJoin from "../components/home/HomeJoin";
import HomeFooter from "../components/home/HomeFotter";
import Wallet from "../near-wallet";
import {useNavigate} from "react-router-dom";


export const Home = () => {
    const navigate = useNavigate();

    const loginWallet = async () => {
        let isSignIn = await Wallet.startUp()
        console.log(isSignIn)

        if (isSignIn) {
            navigate("/account")
        } else {
            Wallet.signIn()
        }
    }

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
                    <HomeHeader loginWallet={loginWallet}/>
                    <HomeFacts/>
                    <HomeJoin loginWallet={loginWallet}/>
                    <HomeFooter/>
                </div>
            </div>
        </div>
    )
}

export default Home;
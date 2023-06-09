import "./home.css";
import bgImage from "../../assets/image/home-header-bg.webp";
import {useEffect} from "react";
import {gsap} from "../../libs/gsap/gsap.min";
import Wallet from "../../near-wallet";

export const HomeHeader = () => {
    useEffect(() => {
        gsap.fromTo('.scroll-title-hide', { opacity: 1 }, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.scroll-title-hide',
                start: 300,
                end: 500,
                scrub: true
            }
        })
    })
    const loginWallet = async () => {
        await Wallet.startUp()
        Wallet.signIn()
    }

    return (
        <div className="HomeHeader" data-speed="0.9">
            <div data-speed=".6" className="home-header--info container fadein scroll-title-hide">
                <h1 className="home-header--title gradient-blue-magenta">Melon</h1>
                <p  className="home-header--subtitle">Social network in web3</p>
                <button onClick={loginWallet} className="home-header--scroll-join">Join</button>
            </div>
            <img className="home-header--image fadein scroll-title-hide" src={bgImage} alt="bgImage"/>
        </div>
    )
}

export default HomeHeader;
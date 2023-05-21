import {useEffect} from "react";
import {gsap} from "../../libs/gsap/gsap.min";
import Wallet from "../../near-wallet";

export const HomeJoin = () => {
    const loginWallet = async () => {
        await Wallet.startUp()
        Wallet.signIn()
    }

    useEffect(() => {
        gsap.to('.home-join--button',  {
            width: '100%',
            height: '100%',
            scrollTrigger: {
                trigger: '.home-join--button',
                start: 0
            }
        });

        gsap.fromTo('.home-join--button', { width: '100%', height: '100%' }, {
            width: '50%',
            height: '4rem',
            scrollTrigger: {
                trigger: '.home-join--button',
                start: 1900,
                end: 2100,
                scrub: true
            }
        })
    })

    return (
        <div data-speed="1.2" className="HomeJoin">
            <button onClick={loginWallet} className="home-join--button">
                Join to Melon
            </button>
        </div>
    )
}

export default HomeJoin
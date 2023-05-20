import "./home.css";
import messengerImage from "../../assets/image/facts/messenger.png";
import accountImage from "../../assets/image/facts/account.png";
import nearImage from "../../assets/image/near.png";
import HomeFactTextBlock from "./HomeFactTextBlock";
import HomeFactImage from "./HomeFactImage";
import {useEffect} from "react";

export const HomeFacts = () => {
    useEffect(() => {
        const gsap = window.gsap
        const ScrollSmoother = window.ScrollSmoother;
        const ScrollTrigger = window.ScrollTrigger


        gsap.to('.home-welcome--title',  {
            opacity: 0,
            scrollTrigger: {
                trigger: '.home-welcome--title',
                start: 0
            }
        });
        gsap.fromTo('.home-welcome--title', { opacity: 0 }, {
            opacity: 1,
            scrollTrigger: {
                trigger: '.home-welcome--title',
                start: 350,
                end: 700,
                scrub: true
            }
        })

        gsap.fromTo('.home-welcome--title--hide', { opacity: 1 }, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.home-welcome--title',
                start: 850,
                end: 1000,
                scrub: true
            }
        })
    })

    return (
        <div className="HomeFacts">
            <h1 data-speed="1.1" className="home-welcome--title home-welcome--title--hide gradient-magenta-yellow">Welcome to the free future</h1>
            <div data-speed="1.4" className="home-facts-unwrap">
                <div data-speed="1.4" className="home--fact">
                    <HomeFactTextBlock title="All data is stored on the blockchain"
                                       body="The social network is written on the Near blockchain, which means only you can manage your data"
                                       color="gradient-green-blue"
                    />
                    <HomeFactImage image={nearImage}/>
                </div>
                <div data-speed="1.4" className="home--fact">
                    <HomeFactImage image={messengerImage}/>
                    <HomeFactTextBlock title="Secure messenger"
                                       body="Secure messenger that the client uses - client encryption"
                                       color="gradient-blue-magenta"/>
                </div>
                <div data-speed="1.4" className="home--fact">
                    <HomeFactTextBlock title="Get carried away"
                                       body="View other users' connections or create your own"
                                       color="gradient-red-blue"/>
                    <HomeFactImage image={accountImage}/>
                </div>
            </div>
        </div>
    )
}

export default HomeFacts;
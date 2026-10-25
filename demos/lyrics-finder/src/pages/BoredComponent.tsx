import React, { useEffect } from "react";
import fetchBored from "../api/bored";
import { Button } from '../styling/LyricsComponentStyling';
import animations from "../styling/Animations.module.css";

interface boredObj {
    activity: string;
    type: string;
    participants: string;
    price: string;
    link: string;
}

const BoredComponent = () => {
    const [bored, setBored] = React.useState<boredObj>()

    const getBored = async () => {
        const bored: boredObj = await fetchBored();
        setBored(bored);
    }

    useEffect(() => {
        getBored();
    }, [])

    return (
        <div>
            <h1>You've come to the right place!</h1>
            <h2>Here are some ideas for what to do</h2>
            {bored &&
                <div>
                    <p>Activity: {bored.activity}</p>
                    <p>Type: {bored.type}</p>
                    <p>Participants: {bored.participants}</p>
                    <Button 
                    className={animations.pulsate}
                    onClick={getBored}
                    >
                        Re-roll
                    </Button>
                </div>
            }
            {!bored && `No data was found`}
        </div>
    )
}

export default BoredComponent;
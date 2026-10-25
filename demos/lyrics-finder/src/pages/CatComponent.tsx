import { useState, useReducer, useMemo } from 'react';
import fetchCatPic from '../api/catpic';
import { Button } from '../styling/LyricsComponentStyling';

interface State {
    count: number;
}

type Action = {
    type: "increment";
}

function reducerFunction(state: State, action: Action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        default:
            return state;
    }
}

const CatComponent = () => {
    const [picArray, setPicArray] = useState<string[]>([]);
    const [state, dispatch] = useReducer(reducerFunction, { count: 0 })
    console.log("initializing")

    const fetchAndSetPic = async () => {
        const pic = await fetchCatPic();
        if (pic) {
            setPicArray(prevArray => [...prevArray, pic.toString()]);
            dispatch({ type: "increment" });
        }
    };

    const memoizedPicArray = useMemo(() => picArray, [picArray]);

    return (
        <div>
            <Button style={{
                margin: "30px"
            }}
                onClick={fetchAndSetPic}>Generate more!</Button>
            <p>Amount of cats {state.count}</p>
            <div
                style={{
                    position: "fixed",
                    overflow: "auto",
                    height: "100%",
                    padding: "30px"
                }}
            >
                {memoizedPicArray.map((pic, index) => {
                    return <img key={index} src={pic} style={{ padding: "30px" }} />;
                })}
            </div>
        </div>
    )
}

export default CatComponent;
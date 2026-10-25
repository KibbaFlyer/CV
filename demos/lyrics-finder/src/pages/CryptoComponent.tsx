import React, { useEffect } from "react";
import fetchBitcoinPrice from "../api/coinbase";
import { Div, H1, StyledParallax, StyledParallaxLayer, StyledParallaxBackgroundLayer } from '../styling/ParallaxComponentStyling'

interface currency {
    code: string;
    symbol: string;
    rate: string;
    description: string;
    rate_float: number;
}

interface timeObj {
    updated: string;
    updatedISO: string;
    updateduk: string;
}

interface bpiObj {
    USD: currency;
    GBP: currency;
    EUR: currency;
}

interface btcPrice {
    time: timeObj;
    disclaimer: string;
    chartName: string;
    bpi: bpiObj;
}

const CryptoComponent = () => {
    const [price, setPrice] = React.useState<btcPrice>();
    const [render, setRender] = React.useState("")

    const getBitcoinPrice = async () => {
        const price: btcPrice = await fetchBitcoinPrice();
        setPrice(price);
        setRender(new Date().toLocaleDateString('en-us', { day: "numeric", year: "numeric", month: "short", hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h24" }))
        return;
    };

    useEffect(() => {
        getBitcoinPrice();
    }, []);

    return (
        <Div>
            <StyledParallax
                pages={1}
            >
                <StyledParallaxBackgroundLayer
                    offset={0}
                    speed={1}
                >
                </StyledParallaxBackgroundLayer>
                <StyledParallaxLayer
                    offset={0}
                    speed={1}
                >
                    <H1>Crypto</H1>
                    <div>
                        {price &&
                            <div>
                                <p>{price.disclaimer}</p>
                                <p>Updated: {price.time.updated}</p>
                                <p>Last try: {render}</p>
                                <p>EUR 🇪🇺: {price.bpi.EUR.rate_float.toLocaleString()}</p>
                                <p>USD 🇺🇸: {price.bpi.USD.rate_float.toLocaleString()}</p>
                                <p>GBP 🇬🇧: {price.bpi.GBP.rate_float.toLocaleString()}</p>
                            </div>
                        }
                        {!price && `No data was found`}
                    </div>
                </StyledParallaxLayer>
            </StyledParallax>

        </Div>
    )
}

export default CryptoComponent;
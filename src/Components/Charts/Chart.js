import React, {useEffect, useRef} from 'react'
import Helmet from "react-helmet"
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
const Chart = () => {
    const myRef = useRef()
    const myRef2 = useRef()
    useEffect(()=>{
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js'
        script.async = false;
        script.innerHTML = JSON.stringify({
            "container_id": "tv-medium-widget",
            "symbols": [
                {
                    "description": "BTC",
                    "proName": "BINANCE:BTCUSDT"
                },
                {
                    "description": "ETH",
                    "proName": "BINANCE:ETHUSDT"
                },
                {
                    "description": "BNB",
                    "proName": "BINANCE:BNBUSDT"
                },
                {
                    "description": "SOL",
                    "proName": "BINANCE:SOLUSDT"
                },
                {
                    "description": "TWT",
                    "proName": "BINANCE:TWTUSDT"
                },

                {
                    "description": "MINA",
                    "proName": "BINANCE:MINAUSDT"
                },
                {
                    "description": "EPS",
                    "proName": "BINANCE:EPSUSD"
                },
                {
                    "description": "WIN",
                    "proName": "BINANCE:WINUSDT"
                },
                {
                    "description": "BTC.D",
                    "proName": "CRYPTOCAP:BTC.D"
                },

            ],
            "colorTheme": "dark",
            "isTransparent": false,
            "showSymbolLogo": true,
            "locale": "uk"
        })
        myRef.current.appendChild(script);


        const script2 = document.createElement('script');
        script2.type = "text/javascript";
        const str = "new TradingView.widget('container_id':'tradingview_4b7ae');"
        script2.innerHTML = str;
    },[])

    return(
        <>
            <Helmet>
                <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>

            </Helmet>
            <div style={{}}>
                <div className="tradingview-widget-container" ref={myRef}>
                    <div className="tradingview-widget-container__widget"></div>
                </div>
            </div>


            <div style={{height: "calc(100% - 114px)"}}>
                <div className="tradingview-widget-container">
                    <TradingViewWidget
                        symbol="BTCUSD"
                        theme={Themes.DARK}
                        locale="en"
                        autosize
                    />
                </div>
                <div className="tradingview-widget-container">
                    <TradingViewWidget
                        symbol="CRYPTOCAP:BTC.D"
                        theme={Themes.DARK}
                        locale="en"
                        autosize
                    />
                </div>
            </div>
        </>


    )

}

export default Chart;
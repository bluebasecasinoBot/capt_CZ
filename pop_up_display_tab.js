import { __c, __g, __p, __sC, __SYD, __u, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.main_pop_tab = () =>{
    return __c(
        "div",
        {
            style:`height:100vh;width:100vw;background:rgba(0 , 0 , 0 , .8);display:${__p(["main_pop_tab" , "display"],false) ? "flex" : "none"};justify-content:center;align-items:center;position:fixed;bottom:0px;left:0px;z-index:9999;overflow:hidden;`,
            class:"main_pop_tab"
        },
        [
            __SYD.main_pop_tab__main(),
            __SYD.exit_pop_tab(),
            __SYD.sydney_tradeMark()
        ],
        {
            createState:{
                stateName:"main_pop_tab",
                state:{
                    display:false,
                    type:-1,
                    currentTitle:"",
                    currentContent1:"",
                    currentContent2:"",
                    currentImgFrame:"",
                    data:[
                            {
                                title: "Tax Tracker",
                                content1: "Stay ahead of hidden fees with bnbbot’s built-in tax tracker. Every trade is automatically analyzed so you know exactly how much is going to token taxes, liquidity, or developer wallets.",
                                content2: "No more guessing games or getting blindsided by unfair tokenomics. With clear, real-time insights into transaction taxes, you trade smarter, avoid scams, and keep more of your profits where they belong — in your wallet.",
                                img: "tax_tracker.png"
                            },
                            {
                                title: "AI-Powered Trade Automation",
                                content1: "bnbbot is built to act like a full-time professional trader powered by machine intelligence. It evaluates indicators, market sentiment, and price action in real time to determine the best entry and exit points for your trades.",
                                content2:"By adapting to changing market conditions, bnbbot minimizes emotional bias and maximizes precision. Whether the market is surging or slumping, your AI agent stays focused, disciplined, and always active — giving you a competitive edge around the clock.",
                                img: "trade_auto.jpg"
                            },
                            {
                                title: "Telegram Bot Integration",
                                content1: "With bnbbot, trading is just a message away. You can interact with your AI assistant directly through Telegram, the world’s most intuitive and secure messaging platform. No complex dashboards or browser tabs needed.",
                                content2:"Place trades, receive personalized alerts, monitor bot performance, and even adjust your strategy — all from a simple Telegram chat. bnbbot turns messaging into an intelligent trading experience, combining convenience with powerful automation.",
                                img: "bot_int.jpg"
                            },
                            {
                                title: "Smart Market Insights",
                                content1: "bnbbot offers a live stream of AI-curated market analysis, helping you stay ahead of trends, breakouts, and reversals. The system monitors key market indicators, order books, and sentiment patterns in real time.",
                                content2:"You’ll receive insights tailored to your trading style and risk appetite, giving you an edge whether you're day trading, swing trading, or investing long term. Stay informed without drowning in data.",
                                img: "market_insight.jpg"
                            },
                            {
                                title: "Custom Strategy Builder",
                                content1: "Design and personalize your trading strategy with bnbbot’s intuitive visual builder. Select indicators, define logic, adjust risk parameters, and preview performance — all without writing a single line of code.",
                                content2:"The builder gives you flexibility and control to create strategies that fit your style, while AI suggestions help you optimize logic for better outcomes. Build once, deploy everywhere.",
                                img: "strategy_builder.jpg"
                            },
                            {
                                title: "Backtesting Engine",
                                content1: "Before going live, bnbbot lets you simulate your strategy on historical market data. The backtesting engine reveals how your logic would have performed in past conditions — across different assets and timeframes.",
                                content2:"With visual feedback and detailed performance stats, you can refine your approach, fix weaknesses, and build confidence in your AI bot — all before risking a single coin.",
                                img: "backtesting.jpg"
                            },
                            {
                                title: "Multi-Exchange Support",
                                content1: "bnbbot connects seamlessly to major centralized and decentralized exchanges, including Binance, KuCoin, Bybit, and more. One AI agent, multiple markets — all in your control.",
                                content2:"Whether you're trading spot, futures, or DeFi tokens, bnbbot gives you the flexibility to manage your strategies across platforms without juggling different tools.",
                                img: "multi_swap.jpg"
                            },
                            {
                                title: "24/7 Autonomous Operation",
                                content1: "Markets never sleep — and neither does bnbbot. Your AI agent runs continuously in the background, analyzing data, scanning patterns, and executing trades based on your rules.",
                                content2:"Even while you're offline, working, or asleep, your bot keeps you in the game. No missed opportunities. No delays. Just non-stop performance.",
                                img: "autonomy.jpg"
                            },
                            {
                                title: "Risk Management Tools",
                                content1: "Protect your capital with built-in safety nets. bnbbot supports dynamic stop-loss, take-profit, trailing exits, and position sizing based on volatility and account exposure.",
                                content2:"You can configure each strategy with clear guardrails, allowing your AI to trade confidently while minimizing downside risk. Stay in control — even during chaos.",
                                img: "risk_manage.jpg"
                            },
                            {
                                title: "Plug & Play Templates",
                                content1: "Get started instantly with pre-built strategy templates crafted by expert traders and data scientists. Choose from momentum, scalping, grid trading, mean reversion, and more.",
                                content2:"Each template is fully editable, so you can run them as-is or customize them to match your style. Perfect for beginners and pros alike who want fast results.",
                                img: "plug_play.jpg"
                            },
                            {
                                title: "Web + Mobile Access",
                                content1: "bnbbot is built for the modern trader. Access your bot through a responsive web dashboard or directly from your phone using Telegram.",
                                content2:"Whether you're commuting, at your desk, or on vacation, your trading assistant is always within reach — no software installs or login hassle required.",
                                img: "web_mobile.jpg"
                            }
                        ],
                    updateContent:() =>{
                        const id = __p(["main_pop_tab" , "type"],-1);
                        const state = __g("main_pop_tab");
                        
                        if(id !== -1)
                        {
                            const data = __p(["main_pop_tab" , "data"],[])[id];
                            state.currentTitle = data.title;
                            state.currentContent1 = data.content1;
                            state.currentContent2 = data.content2;
                            state.currentImgFrame = data.img;
                        }else
                        {
                            state.currentTitle = "";
                            state.currentContent = "";
                            state.currentImgFrame = "";
                        }

                        console.log(state)

                        __u("main_pop_tab" , {type:"a" , value:state});
                    }
                }
            }
        }
    )
}



__SYD.main_pop_tab__main = () =>{
    return __c(
        "div",
        {
            style:"height:calc(100vh - 50px);width:calc(100vw - 50px);min-height:80vh;min-width:80vw;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);border-radius:15px;position:fixed;background: #0b0b0b ;display:flex;flex-direction:column;gap:10px;overflow:hidden;overflow-y:scroll;padding-top:50px;"
        },
        [
            __SYD.main_pop_top_cont(),
        ],
        {
            createState:{
                stateName:"main_pop_tab__main",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<1000px" , prop:{breakVal:true}},
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , breakVal:false}
            }
        }
    )
}

__SYD.exit_pop_tab = () =>{
    return __c(
        "span",
        {
            style:"position:absolute;top:10px;right:10px;height:20px;width:20px;background-image:url(./assets/exit.png);cursor:pointer;",
            class:"opacity-on-off"
        },
        [],{
            genericStyle:["bg_fit"],
            events:{
                onclick:e =>{
                    const state = __g('main_pop_tab');
                    state.display = false;
                    state.type = -1;
                    __u("main_pop_tab" , {type:"a" , value:state});
                }
            }
        }
    )
}

__SYD.main_pop_top_cont = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;align-items:center;gap:30px;padding:20px ${__p(["main_pop_tab__main" , "mobilePadState"],false) ? "10px" : "60px"};flex-direction:${__p(["main_pop_tab__main" , "breakVal"],false) ? "column-reverse" : "row"};justify-content:flex-end;`
        },
        [
            __c(
                "div",
                {
                    style:`height:fit-content;width:${__p(["main_pop_tab__main" , "breakVal"],false) ? "100%" : "50%"};display:flex;flex-direction:column;gap:30px;justify-content:center;font-family:font2;`
                },
                [
                    __SYD.main_pop_tab__main_mainHeader(),
                    __SYD.main_pop_tab__main_subText(__p(["main_pop_tab" , "currentContent1"],"")),
                    __SYD.main_pop_tab__main_subText(__p(["main_pop_tab" , "currentContent2"],"")),
                    __c(
                        "div",
                        {
                            style:"display:flex;width:100%;height:fit-content;column-gap:20px;flex-wrap:wrap;justify-content:center;"
                        },
                        [
                            // __SYD.main_pop_tab__main_buttonClick("ai"),
                            __SYD.main_pop_tab__main_buttonClick("bot"),
                        ]
                    )
                    // __SYD.p1_CA_section()
                ]
            ),
            __c(
                "div",
                {
                    style:`${__p(["main_pop_tab__main" , "breakVal"],false) ? "min-height:300px;width:300px" : "height:500px;width:500px"};display:flex;flex-direction:column;gap:20px;background-image:url(./assets/${__p(["main_pop_tab" , "currentImgFrame"],"")});border-radius:30px;`+__sC["thinBorder"](),
                    // class:"floatMainPic"
                },[
                    // __c(
                    //     "canvas",{style:"height:100%;width:100%;background:transparent;"},[],{type:"waveCanvas"}
                    // )
                ],{genericStyle:['bg_cover']}
            )
        ],
        {
            genericStyle:["bg_cover"]
        }
    )
}

__SYD.main_pop_tab__main_mainHeader = () =>{
    return __c(
        "div",
        {
            style:`text-shadow:1px 1px 0px #fff,2px 2px 0px #fff,3px 3px 0px #fff,4px 4px 0px #fff;text-align:center;
            text-transform:uppercase;font-weight:900;font-size:${SYD_VAR.page1MainFont_1.get()};text-shadow:unset;color:#F3BA2F;font-family:font1;${__p(["main_pop_tab__main" , "breakVal"],false) ? "font-size:30px;" : ""};`
        },
        [
            __c("p" , {} , [__p(["main_pop_tab" , "currentTitle"],"")])
        ]
    )
}

__SYD.main_pop_tab__main_subText = (value) =>{
    return __c(
        "div",
        {style:"width:100%;display:flex;justify-content:center;"},
        [
            __c("p" , {style:SYD_VAR.pag1SubText.get() + "padding:10px;color: #ffffff ;font-family:font2;" , class:""},[value])
        ]
    )
}

__SYD.main_pop_tab__main_buttonClick = (type = "ai") =>{
    return __c(
        "div",
        {
            style:SYD_VAR.buttonStyle1.get() + "margin-bottom:20px;"+__sC["thinBorder"](),
            class:"clickButton"
        },
        [
            __c("p" , {style:"width:fit-content"},[`${type === "ai" ? "Try bnbbot Ai Agent" : "Try bnbbot Trading Bot"}`])
        ],
        {
            events:{
                onclick:e =>{
                    location.href = `${type === "ai" ? "/agent/" : "https://t.me/dummy_test_bot_404_bot"}`
                }
            }
        }
    )
}

__SYD.sydney_tradeMark = () =>{
    return  __c(
        "span",
        {
            style:"position:absolute;bottom:5px;left:50%;transform:translateX(-50%);color:rgba(255,255,255,.3);font-size:12px;font-family:font2;font-style:italic;user-select:none;letter-spacing:1px;text-align:center;"
        },
        [
            "Powered by Sydney Algorithms"
        ]
    )
}

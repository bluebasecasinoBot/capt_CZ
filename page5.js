import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p5 = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;border:1px solid #333;` + __sC['pages'](),
            id:"p5"
        },
        [
            __SYD.p5SubHeader()
        ],{genericStyle:["bg_cover"]}
    )
}

__SYD.p5SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:20px;padding:0 ${__p(["p5SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};`
        },
        [
            // __SYD.p5_text1(),
            // __SYD.p5_text2(),
            // __SYD.p5_text3(),
            __SYD.p5_roadMap()
        ],
        {
            createState:{
                stateName:"p5SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    __flex_child:'row',
                    resize:false,
                    breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<800px" , prop:{breakVal:true}},
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<700px" , prop:{__flex_child:'column' , resize:true}}

                    // {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , __flex_child:'row' , resize:false , breakVal:false}//breakVal:false
            }
        }
    )
}


__SYD.p5_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get()
        },
        [
            __c(
                "p",
                {},["token roadmap"]
            )
        ]
    )
}


__SYD.p5_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get()
        },
        [
            __c(
                "p",
                {},["our token roadmap"]
            )
        ]
    )
}


__SYD.p5_text3 = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} text-align:center;`},["The Journey of a Cyborg Begins Alita AI’s mission unfolds in epic phases—each upgrade pushing us closer to total decentralization, innovation, and community power."])
        ]
    )
}

__SYD.p5_text4 = (textContent , align) =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.page2Text1.get()} font-family:font1;color:#015484; text-align:${align === "right" ? "left" : "right"};`},[textContent])
        ]
    )
}

__SYD.p5_text5 = (textContent , align) =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} font-weight:300;color:#02819d; text-align:${align === "right" ? "left" : "right"};`},[textContent])
        ]
    )
}

__SYD.p5_roadMap = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;padding:20px 0px;width:100%;display:flex;align-items:${__p(["p5SubHeader" , "breakVal"],false) ? "flex-start" : "center"};flex-direction:column;row-gap:20px;position:relative;padding:0 20px;`
        },
        [
            __SYD.p5_tab_center(),
            __SYD.p5_tab({title:"Initialization" , text:"Synthia begins by establishing its foundational identity, launching the $SYAI token on the Ethereum blockchain, and forming its core community. This phase focuses on solidifying the brand, releasing the initial platform vision, and preparing the infrastructure that will support future AI-powered modules." , position:"left" , tab:1}),
            __SYD.p5_tab({title:"Intelligence Integration" , text:"In this phase, Synthia starts to incorporate its first intelligent systems. Modular AI components are connected to the network, enabling basic functions such as language understanding, data parsing, and interaction handling. Tools for developers begin to roll out, offering early access to Synthia’s programmable AI architecture." , position:"right" , tab:2}),
            __SYD.p5_tab({title:"Ecosystem Growth" , text:"With the AI framework in place, Synthia expands its reach across platforms and use cases. The ecosystem begins to support real applications, including browser and mobile interfaces. Community governance mechanisms are activated, empowering $SYAI holders to help shape the project’s evolution. Strategic partnerships begin to take form to accelerate adoption." , position:"left" , tab:3}),
            __SYD.p5_tab({title:"Autonomy & Scale" , text:"Synthia reaches a stage where it can support autonomous, decentralized intelligence at scale. AI agents become self-directed, learning and evolving through real-world interaction. The network becomes increasingly modular and resilient, enabling an open marketplace for AI services, tools, and applications — all powered by the $SYAI token and a growing global community." , position:"right" , tab:4}),
        ]
    )
}

__SYD.p5_tab = ({title , text , position , tab}) =>{
    let tx = position === "left" ? "calc(-50% - 10px)" : "calc(50% + 10px)"
    return __c(
        "div",
        {
            style:`height:fit-content;width:${__p(["p5SubHeader" , "breakVal"],false) ? "100%" : "50%"};max-width:500px;padding:20px 0;${__p(["p5SubHeader" , "breakVal"],false) ? "" : `transform:translateX(${tx})`};border-radius:15px;position:relative;display:flex;gap:20px;flex-direction:column;-`
        },
        [
            __c(
                "div",
                {
                    style:`${__p(["p5SubHeader" , "breakVal"],false) ? "" : `position:absolute;top:50%;${position === "left" ? "right" : "left"}:0;transform:translateY(-50%) translateX(${position === "left" ? "calc(100% + 100px)" : "calc(-100% - 100px)"})`};height:130px;width:250px;background:transparent;display:flex;align-items:center;justify-content:center;border:30px solid transparent;border-image:url("./assets/border.png") 30 round;`
                },
                [
                    __c(
                        "p",
                        {
                            style:"height:calc(100%); width:calc(100%); background:#03b3da;text-align:center;display:flex;justify-content:center;align-items:center;" + SYD_VAR.page2Text2.get() + "color:#015484;font-weight:600;"
                        },
                        [
                            `#PHASE ${tab}`
                        ]
                    ),
                    __c(
                        "span",
                        {
                            style:`display:${__p(["p5SubHeader" , "breakVal"],false) ? "none" : "block"};position:absolute;top:50%;${position}:-30px;transform:translateY(-50%) translateX(${position === "left" ? "-100%" : "100%"});height:5px;width:80px;background:#000;`
                        }
                    )
                ]
            ),
            __c(
                "div",
                {
                    style:`height:100%;width:100%;background:rgb(3, 179, 218);padding:25px 15px;border-radius:0px;border:1px solid #333;border-radius:10px;display:flex;flex-direction:column;row-gap:20px;`
                },
                [
                    __SYD.p5_text4(title , __p(["p5SubHeader" , "breakVal"],false) ? "right" : position),
                    __SYD.p5_text5(text , __p(["p5SubHeader" , "breakVal"],false) ? "right" : position)
                ]
            ),
            __c(
                "div",
                {
                    style:`height:15px;width:15px;border-radius:50%;position:absolute;${__p(["p5SubHeader" , "breakVal"],false) ? "top:0;left:-20px;transform:translateY(50%) translateX(-50%);" : `top:50%;transform:translateY(-50%) translateX(${position === "left" ? "calc(100% + 0px)" : "calc(-100% - 0px)"});${position === "left" ? "right" : "left"}:0;`}`,
                    class:"p5_tab_knob"
                }
            )
        ]
    )
}

__SYD.p5_tab_center = () =>{
    return __c(
        "div",
        {
            style:`height:calc(100% - 30px);width:3px;background:#333;position:absolute;${__p(["p5SubHeader" , "breakVal"],false) ? "left:0%" : "left:50%;transform:translateX(-50%)"};top:10px;`
        }
    )
}
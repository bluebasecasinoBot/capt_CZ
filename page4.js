import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p4 = () =>{
    return __c(
        "div",
        {
            style:"background:transparent;height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;" + __sC['pages']({method:"add" , style:{padding:"30px 0px"}}),
            id:"p4"
        },
        [
            __SYD.p4SubHeader()
        ]
    )
}

__SYD.p4SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:20px;padding:0 ${__p(["p4SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};`
        },
        [
            // __SYD.p4_text1(),
            // __SYD.p4_text2(),
            // __SYD.p4_text3(),
            __SYD.p4_tabs()
        ],
        {
            createState:{
                stateName:"p4SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    __flex_child:'row',
                    resize:false
                    // breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<700px" , prop:{__flex_child:'column' , resize:true}}
                    // {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , __flex_child:'row' , resize:false}//breakVal:false
            }
        }
    )
}


__SYD.p4_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get() + "color:#b9bcc5;"
        },
        [
            __c(
                "p",
                {},["get $Alita"]
            )
        ]
    )
}


__SYD.p4_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get()
        },
        [
            __c(
                "p",
                {},["get it now on"]
            )
        ]
    )
}


__SYD.p4_text3 = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get() + "color:#fff;"} text-align:center;`},["Trade $ALITA securely and instantly on top-tier Solana DEXs. No middlemen, just pure peer-to-peer trading power."])
        ]
    )
}

__SYD.vert_line = () =>{
    return __c(
        "div",
        {
            style:`height:${__p(['p4SubHeader' , 'resize'], false) ? "1px" : "50px"};width:${__p(['p4SubHeader' , 'resize'], false) ? "100%" : "1px"};background:rgba(255,255,255,.2);`
        }
    )
}

__SYD.p4_tabs = () =>{
    return __c(
        "div",
        {
            style:`display:flex;row-gap:50px;column-gap:unset;height:fit-content;width:100%;justify-content:${__p(['p4SubHeader' , 'resize'], false) ? "flex-start" : "center"};flex-wrap:wrap;gap:20px;align-items:center;`
        },
        [
            __SYD.p4_tab({title:"Verified AI Core" , src:"brain"}),
            // __SYD.vert_line(),
            __SYD.p4_tab({title:"Telegram-Native" , src:"gear"}),
            // __SYD.vert_line(),
            __SYD.p4_tab({title:" Real-Time Execution" , src:"rocket"}),
            // __SYD.vert_line(),
            __SYD.p4_tab({title:"Multi-Exchange Support" , src:"exchange"}),
            // __SYD.vert_line(),
            __SYD.p4_tab({title:"Community-Driven" , src:"community"}),
            // __SYD.vert_line(),
            __SYD.p4_tab({title:"Battle-Tested Strategies" , src:"battle"}),
        ]
    )
}

__SYD.p4_tab = ({title , src}) =>{
    return __c(
        "div",
        {
            style:`background-color:#1E1E1E;height:fit-content;width:${__p(['p4SubHeader' , 'resize'], false) ? "100%" : "fit-content"};padding:10px ${__p(['p4SubHeader' , 'resize'], false) ? "0px" : "30px"};border-radius:10px;display:flex;gap:16px;justify-content:${__p(['p4SubHeader' , 'resize'], false) ? "flex-start" : "center"};align-items:center;cursor:pointer;flex-direction:row;gap:20px;padding:8px;`+__sC["thinBorder"](),
            // class:"p4_tab"
        },
        [
            __c(
                "img",
                {
                    style:"height:50px;width:50px;",
                    src:`./assets/${src}.svg`
                }
            ),
            __c(
                "p",
                {
                    style:SYD_VAR.page2Text2.get() + "color:#ffffff;font-weight:400;font-size:18px;"
                },
                [
                    `${title}`
                ]
            ),
        ]
    )
}
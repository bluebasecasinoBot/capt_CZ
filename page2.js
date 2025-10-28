import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p2 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;background: #16143a;" + __sC['pages'](),
            id:"p2"
        },
        [
            __SYD.p2SubHeader()
        ]
    )
}

__SYD.p2SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;align-items:center;gap:20px;padding:0 ${__p(["p2SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};flex-direction:${__p(["p2SubHeader" , "breakVal"],false) ? "column" : "row"}`
        },
        [
            __c(
                "div",
                {
                    style:`height:100vw;max-height:calc(100vh - 150px);width:${__p(["p2SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;flex-direction:column;gap:20px;background-image:url("./assets/about.png")`
                },[],{genericStyle:["bg_fit"]}
            ),
            __c(
                "div",
                {
                    style:`height:fit-content;width:${__p(["p2SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;justify-content:center;`
                },
                [
                    __SYD.p2_tab()
                ]
            ),
        ],
        {
            createState:{
                stateName:"p2SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , breakVal:false}
            }
        }
    )
}

__SYD.p2_tab = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;padding:60px 20px;display:flex;flex-direction:column;gap:30px;border-radius:30px;background:#fff;",
            class:"p2_tab"
        },
        [
            __SYD.p2_text1(),
            __SYD.p2_text2(),
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;gap:30px;padding:10px 0px;flex-direction:column;"
                },
                [   
                    __SYD.p2_text3(),
                    __SYD.p2_text4(),
                ]
            ),
            __SYD.p2_button()

        ]
    )
}

__SYD.p2_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get()
        },
        [
            __c(
                "p",
                {},["read more about Alita"]
            )
        ]
    )
}


__SYD.p2_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "color:#16143a;"
        },
        [
            __c(
                "p",
                {},["about $Alita"]
            )
        ]
    )
}

__SYD.p2_text3 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text3.get()
        },
        [
            __c(
                "p",
                {},["Born from Ashes. Built for Freedom. Alita AI is forged in the image of the iconic Alita: Battle Angel—a cyborg who defied her past to rewrite her future. Like her, we rise from the ruins of centralization to arm you with the tools to fight back. Whether you’re crafting AI models, launching tokens, or living fast in our degen casino, Alita AI is your companion on this journey."]
            )
        ]
    )
}

__SYD.p2_text4 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text3.get()
        },
        [
            __c(
                "p",
                {},["She didn’t wait for permission. Neither should you. Alita AI gives you the power to create, conquer, and thrive in a decentralized world—on your terms. This isn’t just a meme coin. It’s your legacy in the making."]
            )
        ]
    )
}

__SYD.p2_button = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.buttonStyle1.get(),
            class:"clickButton"
        },
        [
            __c("p" , {style:"width:fit-content"},["read more"])
        ]
    )
}
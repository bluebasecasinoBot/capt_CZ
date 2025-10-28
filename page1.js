import { __c, __p, __sC, __SYD, __v, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p1 = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:100%;min-height:fit-content;padding:15px;padding-bottom:20px;display:flex;flex-direction:column;gap:20px;justify-content:center;background:${SYD_VAR.newbgGrad.get()};border:1px solid transparent;margin-bottom:50px;`+__sC["comic_lines"]()+__sC["comic_outline"](),//#F3BA2F
            id:"p1",
            class:"inner-outline"
        },
        [
            __SYD.navBar(),
            __SYD.p1SubHeader()
        ],[],{genericStyle:["bg_cover"]}
    )
}

__SYD.p1SubHeader = () =>{
    return  __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;align-items:center;gap:30px;padding:0 ${__p(["p1SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};flex-direction:${__p(["p1SubHeader" , "breakVal"],false) ? "column-reverse" : "row"};justify-content:space-between;`
        },
        [
            __c(
                "div",
                {
                    style:`height:fit-content;width:${__p(["p1SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;flex-direction:column;gap:30px;justify-content:center;`
                },
                [
                    __SYD.p1_mainHeader(),
                    // __SYD.p1_subText(),
                    // __SYD.p1_CA_section()
                ]
            ),
            __c(
                "div",
                {
                    style:`${__p(["p1SubHeader" , "breakVal"],false) ? "height:500px;width:300px" : "height:500px;width:500px"};display:flex;flex-direction:column;gap:20px;background-position:center 0;border-radius:0%;background-image:url(./assets/capt_cz.gif);`,
                    // class:"floatMainPic"
                },[],{genericStyle:['bg_fit']}
            )
        ],
        {
            createState:{
                stateName:"p1SubHeader",
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

__SYD.p1_mainHeader = () =>{
    return __c(
        "div",
        {
            style:`${__p(["p1SubHeader" , "breakVal"],false) ? "height:300px" : "height:500px"};display:flex;align-items:center;justify-content:center;text-shadow:1px 1px 0px #fff,2px 2px 0px #fff,3px 3px 0px #fff,4px 4px 0px #fff;text-align:center;
            text-transform:uppercase;font-weight:900;font-size:${SYD_VAR.page1MainFont_1.get()};text-shadow:1px 1px #0B0B0B,2px 2px #0B0B0B,3px 3px #0B0B0B;color:#F3BA2F;font-family:font1;background-image:url(./assets/hero_cover.png);`
        },
        [
            __c("p" , {style:"font-size: clamp(2.5rem, 5vw, 5rem);letter-spacing: 2px;text-shadow: 1px 1px 0px #000000,2px 2px 0px #000000,3px 3px 0px #000000,4px 4px 0px #000000;color:#F3BA2F;"} , ["Capt. CZ"])
        ],
        {
            genericStyle:["bg_fit"]
        }
    )
}

__SYD.p1_subText = () =>{
    return __c(
        "div",
        {style:"width:100%;display:flex;justify-content:center;"},
        [
            __c("p" , {style:SYD_VAR.pag1SubText.get() + "padding:10px;color: #FFFFFF ;"},["Meet Bnbbot — the fastest way to trade crypto directly in Telegram. Simple, secure, and built for traders who want speed, control, and results.”"])
        ]
    )
}

__SYD.p1_CA_section = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;max-width:600px;background:#16143a;padding:20px;border-radius:10px;display:flex;gap:10px;flex-wrap:wrap;justify-content:center;align-items:center;"
        },
        [
            __c(
                "i",
                {
                    style:"min-height:40px;min-width:40px;font-size:20px;color:#fff;background: #8A63F7;border-radius:5px;display:flex;justify-content:center;align-items:center;",
                    class:"fa-solid fa-copy"
                }
            ),
            __c(
                "div",
                {
                    style:`font-weight:900;font-size:${__p(["p1SubHeader" , "caTextSize"],"16px")};color:#fff;`
                },
                [
                    SYD_VAR.p1CAText.get()
                ],
                {
                    type:"c_a"
                }
            ),
            __SYD.CA_copyButton()
        ]
    )
}

__SYD.CA_copyButton = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.buttonStyle1.get(),
            class:"clickButton"
        },
        [
            __c("p",{style:"font-weight:900;"},["copy"])
        ],
        {
            events:{
                onclick:() =>{
                    navigator.clipboard.writeText(SYD_VAR.p1CAText.get())
                    __v['c_a'].textContent = 'Contract Address Copied'

                    const timer = setTimeout(() =>{
                    __v['c_a'].textContent = SYD_VAR.p1CAText.get()
                    clearTimeout(timer)
                    },1500)
                }
            }
        }
    )
}

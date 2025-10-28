import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p6 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;background: #16143a;" + __sC['pages'](),
            id:"p6"
        },
        [
            __SYD.p6SubHeader()
        ]
    )
}

__SYD.p6SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:30px;padding:0 ${__p(["p6SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};`
        },
        [
            __SYD.p6_text1(),
            __SYD.p6_text2(),
            __SYD.p6_text3(),
            __SYD.p6_tabs()
        ],
        {
            createState:{
                stateName:"p6SubHeader",
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


__SYD.p6_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get() + "color:#b9bcc5;"
        },
        [
            __c(
                "p",
                {},["our tokenomics"]
            )
        ]
    )
}


__SYD.p6_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get()
        },
        [
            __c(
                "p",
                {},["our tokenomics"]
            )
        ]
    )
}


__SYD.p6_text3 = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get() + "color:#fff;"} text-align:center;`},["Built for Utility, Powered by Rebellion $ALITA fuels every interaction in our ecosystem—from casino games to AI creation. Designed for speed, scale, and sustainability, our tokenomics ensure that every holder plays a vital role in the future of Alita AI."])
        ]
    )
}

__SYD.p6_tabs = () =>{
    return __c(
        "div",
        {
            style:"display:flex;row-gap:50px;column-gap:50px;height:fit-content;width:100%;justify-content:center;flex-wrap:wrap;"
        },
        [
            __SYD.p6_tab({title:"Liquidity" , aux:"30%" , src1:"sun" , src2:"cloud"}),
            __SYD.p6_tab({title:"presale" , aux:"50%" , src1:"spiral" , src2:"star"}),
            __SYD.p6_tab({title:"dex" , aux:"5%" , src1:"flower" , src2:"j_img"}),
            __SYD.p6_tab({title:"marketing" , aux:"5%" , src1:"square" , src2:"pumpkin"}),
            __SYD.p6_tab({title:"tax" , aux:"0%" , src1:"rainbow" , src2:"star"}),
            __SYD.p6_tab({title:"burnt token" , aux:"5%" , src1:"sun" , src2:""}),
        ]
    )
}

__SYD.p6_tab = ({title , aux , src1 , src2}) =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:${__p(['p6SubHeader' , 'resize'], false) ? "100%" : "300px"};padding:25px 30px;border-radius:10px;display:flex;gap:16px;justify-content:center;align-items:center;cursor:pointer;background: #fff;flex-direction:row;gap:20px;border:2px solid #0B0A1D;position:relative;`,
            class:"p4_tab"
        },
        [
            __c(
                "div",
                {
                    style:SYD_VAR.page2Text2.get() + "color:rgba(29, 11, 78, 0.68);",
                },
                [
                    aux
                ]
            ),
            __c(
                "p",
                {
                    style:SYD_VAR.page2Text2.get() + "color:#16143a;"
                },
                [
                    `${title}`
                ]
            ),
            __c(
                "img",
                {
                    style:`display:${src1.length === 0 ? "none" : "block"}height:70px;width:70px;position:absolute;top:0;left:0;transform:translateX(0%) translateY(-50%);`,
                    src:`./assets/${src1}.png`
                }
            ),
            __c(
                "img",
                {
                    style:`display:${src2.length === 0 ? "none" : "block"};height:70px;width:70px;position:absolute;bottom:0;right:0;transform:translateX(0%) translateY(50%);`,
                    src:`./assets/${src2}.png`
                }
            )
        ]
    )
}
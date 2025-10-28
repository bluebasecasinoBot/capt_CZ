import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.c_r_p = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;margin-bottom:30px;" + __sC['pages'](),
            id:"c_r_p"
        },
        [
            __SYD.c_r_pSubHeader()
        ]
    )
}

__SYD.c_r_pSubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:20px;padding:0 ${__p(["c_r_pSubHeader" , "mobilePadState"],false) ? "10px" : "10px"};`
        },
        [
            __SYD.c_r_p_text1(),
            __SYD.c_r_p_text2(),
            __SYD.c_r_p_text3(),
            __SYD.c_r_p_tabs()
        ],
        {
            createState:{
                stateName:"c_r_pSubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    __flex_child:'row'
                    // breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<700px" , prop:{__flex_child:'column'}}
                    // {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , __flex_child:'row'}//breakVal:false
            }
        }
    )
}


__SYD.c_r_p_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get() + "font-size:15px;font-weight:200;color:#ffffff;padding:10px 30px;border-radius:25px;"+__sC["thinBorder"]()
        },
        [
            __c(
                "p",
                {},["Highly Trusted & Experienced Elite Developer"]
            )
        ]
    )
}


__SYD.c_r_p_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "padding:15px 20px;border-radius:10px 25px;color: #f4c13f ;background-color:#1e1e1e;"+__sC["thinBorder"]()
        },
        [
            __c(
                "p",
                {},["1000+ Trusted Users"]
            )
        ]
    )
}


__SYD.c_r_p_text3 = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} text-align:center;color:#ffffff;`},["Our customers are satisfied with our high-quality work and prompt customer support."])
        ]
    )
}

__SYD.c_r_p_text4 = (textContent , add = true) =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page3Text4.get() + "text-align:center;",
            class:add ? "subtle-hover" : ""
        },
        [
            __c(
                "p",
                {},[`${textContent}`]
            )
        ]
    )
}


__SYD.c_r_p_text5 = (textContent) =>{
    return __c(
        "div",
        {
            style:SYD_VAR.pag1SubText.get() + "text-align:center;"
        },
        [
            __c(
                "p",
                {},[`${textContent}`]
            )
        ]
    )
}

__SYD.c_r_p_tabs = () =>{
    return  __c(
        "div",
        {
            style:"display:flex;gap:50px;height:fit-content;width:100%;justify-content:center;flex-wrap:wrap;margin-top:15px;"
        },
        [
            __SYD.c_r_p_tab(
                {content:`This bot is a game changer. I don’t even open DEXs anymore — everything I need is right in Telegram.` ,title:`John M.` , likes:5}
            ),
            __SYD.c_r_p_tab({
                content:`Super easy to use and surprisingly fast. Sniping feature helped me catch a launch I would’ve missed otherwise.`,title:`Sophia R.` , likes:4
            }),
            __SYD.c_r_p_tab({
                content:`Clean interface, smooth trading, and I love the portfolio tracking. Feels like having a mini exchange in Telegram.`,title:`David K.` , likes:5
            }),
            __SYD.c_r_p_tab({
                content:`As someone new to trading, this bot made things simple. No complex setup, just plug and play.`,title:`Amaka O.` , likes:5
            }),
            __SYD.c_r_p_tab({
                content:`Sometimes network congestion slows trades, but overall this bot executes faster than any other I’ve tried.`,title:`Liam T.` , likes:4
            })
        ]
    )
}


__SYD.c_r_p_tab = ({title = '' , content = '' , likes = 5}) =>{
    return __c(
        'div',
        {
            style:`width:calc(100% - 20px);max-width:${__p(["c_r_pSubHeader" , "__flex_child"],"row") === "row" ? "280px" : "450px"};height:fit-content;border-radius:10px;padding:30px 0;cursor:pointer;position:relative;background-color:#1e1e1e;`+__sC["thinBorder"](),
            class:"buy_tabs"
        },
        [
            __c(
                'div',
                {
                    style:`height:fit-content;min-height:unset;padding:10px 20px;width:100%;background-color:unset;display:flex;align-items:flex-start;column-gap:40px;row-gap:20px;flex-direction:column;`
                },
                [
                    __c(
                        "div",
                        {
                            style:"height:fit-content;width:100%;color:#ffffff;font-weight:300;",
                            // class:"c_r_p_tab"
                        },
                        [
                            content
                        ]
                    ),
                    __c(
                        'div',
                        {
                            style:'width:100%;display:flex;flex-direction:column;gap:10px;'
                        },
                        [
                            __c(
                                "p",
                                {
                                    style:"font-weight:600;font-size:18px;color:#f4c13f;width:100%;text-align:center;"
                                },
                                [
                                    title
                                ]
                            ),
                            __c(
                                "div",
                                {
                                    style:"display:flex;gap:3px;align-items:center;justify-content:center;"
                                },
                                [
                                    ...(() =>{
                                        const el = [];
                                        for(let i = 0; i < likes; i++)
                                        {
                                            el.push(__c("span",{style:"height:20px;width:20px;background-image:url(./assets/star.png);"},[],{genericStyle:["bg_fit"]}));
                                        }
                                        return el;
                                    })()
                                ]
                            )
                        ]
                    )
                ]
            )
        ],
        {}
    )
}
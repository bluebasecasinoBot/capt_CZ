import { $, __c, __g, __p, __sC, __SYD, __u, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p7 = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;background-color:${SYD_VAR.newbgGrad.get()};margin-bottom:30px;` + __sC['pages']() + "paddingBottom:unset;"+__sC["comic_lines"]()+__sC["comic_outline"](),
            id:"p7"
        },
        [
            __SYD.p7SubHeader()
        ],{genericStyle:["bg_cover"]}
    )
}

__SYD.p7SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:20px;padding:0 ${__p(["p7SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};`
        },
        [
            // __SYD.p7_text1(),
            // __SYD.p7_text2(),
            // __SYD.p7_text3(),
            __c(
                "div",
                {
                    style:`height:100%;width:100%;max-width:1300px;display:flex;align-items:center;gap:20px;padding:0 ${__p(["p7SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};flex-direction:${__p(["p7SubHeader" , "breakVal"],false) ? "column" : "row"}`
                },
                [
                    __c(
                        "div",
                        {
                            style:`height:100vw;max-height:calc(100vh - 150px);width:${__p(["p7SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;flex-direction:column;gap:20px;background-image:url("./assets/capt_cz_faq.gif")`
                        },[],{genericStyle:["bg_fit"]}
                    ),
                    __c(
                        "div",
                        {
                            style:`height:fit-content;width:${__p(["p7SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;justify-content:center;`
                        },
                        [
                            __SYD.faqsQuestionaire()
                        ]
                    ),
                ]
            )
        ],
        {
            createState:{
                stateName:"p7SubHeader",
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
                    {size:"<1000px" , prop:{breakVal:true}},
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<700px" , prop:{__flex_child:'column' , resize:true}},
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , __flex_child:'row' , resize:false , breakVal:false}
            }
        }
    )
}

__SYD.p7_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get()
        },
        [
            __c(
                "p",
                {},["frequently asked questions"]
            )
        ]
    )
}


__SYD.p7_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "padding:15px 20px;border-radius:10px 25px;color: #f4c13f ;background-color:#0b0b0b;"+__sC["thinBorder"]()
        },
        [
            __c(
                "p",
                {},["frequently asked questions"]
            )
        ]
    )
}


__SYD.p7_text3 = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} text-align:center;color:#ffffff;`},["Got questions about bnbbot? We’ve put together answers to the most common things people ask so you can get started trading with confidence."])
        ]
    )
}

__SYD.p7_text4 = (textContent) =>{
    return $(
        "p",
        {
            style:"height:200px;width:80%;display:flex;align-items:center;justify-content:center;"
        },
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} padding:10px 20px;color:#000000;font-weight:100;text-shadow:unset;font-size:16px;`},[textContent],{genericStyle:["bg_fit"]})
        ]
    )
}

__SYD.faqsQuestionaire = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;max-width:700px;display:flex;flex-direction:column;row-gap:10px;padding-top:50px;"
        },
        [
            __SYD.questionTab({
                question:"Who is Captain CZ?",
                answer:"The protector of the chain — a symbol of freedom and decentralization.",
                index:0
            }),
            __SYD.questionTab({
                question:"What does this project stand for?",
                answer:"Power to the people, not the system.",
                index:1
            }),
            __SYD.questionTab({
                question:"Is this just a meme coin?",
                answer:"It started as one — now it’s a movement.",
                index:2
            }),
            __SYD.questionTab({
                question:"How can I join the community?",
                answer:"Hold, share, and stand with the chain.",
                index:3
            }),
            __SYD.questionTab({
                question:"What makes this different?",
                answer:"Purpose. Story. Vision. It’s more than just a token.",
                index:4
            }),
            __SYD.questionTab({
                question:"Where’s the roadmap?",
                answer:"Every block we build is the roadmap.",
                index:5
            })

        ],
        {
            createState:{
                stateName:"faqsQuestionaire",
                state:{
                    currentOpen:-1,
                    height:"0px"
                }
            }
        }
    )
}

__SYD.questionTab = ({
    question = "hello world",
    answer = "answer to hello world",
    index = 0
} = {}) =>{
    return __c(
        "div",
        {
            style:"display:flex;flex-direction:column;width:100%;color:#000;font-size:18px;"
        },
        [
            __c(
                "div",
                {
                    style:`height:60px;width:100%;cursor:pointer;padding:10px 20px;align-items:center;display:flex;position:relative;font-weight:300;color:#0b0b0b;background:${SYD_VAR.newbgGrad.get()};font-size:18px;color:#F3BA2F;text-shadow: 1px 1px 0px #000000,2px 2px 0px #000000,3px 3px 0px #000000,4px 4px 0px #000000;`+__sC["comic_lines"]()+__sC["comic_outline"]()
                },
                [
                    question,
                    __c(
                        "i",
                        {
                            style:`position:absolute;top:50%;transform:translateY(-50%) rotate(${__p(["faqsQuestionaire" , "currentOpen"],-1) === index ? "180deg" : "0deg"});right:15px;pointer-events:none;transition:transform linear .3s;`,
                            class:"fa-solid fa-chevron-down"
                        }
                    )

                ],
                {
                    events:{
                        onclick:e =>{
                            let update__;
                            if(__p(["faqsQuestionaire" , "currentOpen"]) !== index)
                            {
                                update__ = index
                            }else update__ = -1;

                            const state = __g("faqsQuestionaire");
                            state.currentOpen = update__;
                            state.height = getComputedStyle(e.target.parentElement.querySelector(".foldTab p")).height
                            __u("faqsQuestionaire" , {type:"a" , value:state});
                        }
                    }
                }
            ),
            __c(
                "div",
                {
                    style:`height:${__p(["faqsQuestionaire" , "currentOpen"],-1) === index ? __p(["faqsQuestionaire" , "height"],"0px") : "0px"};width:100%;transition:all linear .3s;background-image:url(./assets/speech.png);display:flex;align-items:center;justify-content:center;overflow:hidden;`,
                    class:"foldTab"
                },
                [
                    __SYD.p7_text4(answer)
                ],
                {
                    genericStyle:["bg_fit"]
                }
            )
        ]
    )
}

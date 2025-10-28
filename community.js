import { $, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.community = function()
{
    return $(
        "div",
        {
            id:"community",
            style:"display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;width:100%;padding:15px;font-family:font1;position:relative;min-height:100vh;position:relative;background-color:transparent;margin-bottom:50px;background-image:url(./assets/community.jpg);background-position:top;"+__sC["comic_lines"]()+__sC["comic_outline"](),
            id:'community'
        },
        [
            // $(
            //     "div",
            //     {
            //         style:SYD_VAR.page2Text2.get() + "padding:15px 20px;border-radius:10px 25px;color: #f4c13f ;background-color:#1e1e1e;"+__sC["thinBorder"]()
            //     },
            //     [
            //         $(
            //             "p",
            //             {},["Bnbbot Community"]
            //         )
            //     ]
            // ),
            __SYD.p5_text()
        ],{
            createState:{
                stateName:'community',
                state:{__size:'50px',__flex:'row',__font:{1:'50px',2:'20px'}}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'30px',__flex:'column-reverse',__font:{1:'30px',2:'17px'}}}],
                defState:{__size:'50px',__flex:'row',__font:{1:'50px',2:'20px'}}
            },
            genericStyle:["bg_cover"]
        }
    )
}

__SYD.p5_text = () =>{
    return $('p',{style:`font-family:font2;height:fit-content;font-size:${__p(['community' , '__font'],{2:'20px'})['2']};line-height: unset;width:100%;max-width:800px;text-align:center;font-weight:100;padding:${__p(["community" , "__flex"],"row") === "row" ? "50px" : "20px"};background-color:${"#1e1e1e"};background-color:${SYD_VAR.newbgGrad.get()};color:${"#ffffff"};display:flex;flex-direction:column;gap:15px;`+__sC["comic_lines"]()+__sC["comic_outline"]()},[
        $("p" , {style:`text-align:center;font-size:${"16px"};`} , [
            `Every hero needs a world worth fighting for — and that world is us. The strength of the chain doesn’t come from one man or one idea, but from the countless people who choose to believe in something bigger than themselves.`
        ]),
        $("p" , {style:`text-align:center;font-size:${"16px"};`} , [
            `We are builders, traders, dreamers — united by the belief that freedom and ownership should belong to everyone. Each wallet, each transaction, each voice adds another link to the chain that can’t be broken.`
        ]),
        $("p" , {style:`text-align:center;font-size:${"16px"};`} , [
            `Captain CZ may stand as its protector, but the true power lies in the community — those who hold the vision, defend the mission, and carry the torch of decentralization forward.`
        ]),
        $("p" , {style:`text-align:center;font-size:${"16px"};`} , [
            `This isn’t just a following… it’s a legacy being written, block by block.`
        ]),

        $(
            "div",
            {style:"align-self:center;margin-top:20px;"},
            [
                $(
                    "p",
                    {
                        style:SYD_VAR.buttonStyle1.get() + "margin-bottom:20px;font-family:font2;font-size:18px;background:#F3BA2F;box-shadow:1px 1px 0px #000000,2px 2px 0px #000000,3px 3px 0px #000000,4px 4px 0px #000000 , 5px 5px 0px #000000;border-radius:unset;color: #000000 ;",
                        class:"clickButton"
                    },
                    ["Join the Community"]
                ),
            ]
        ),
    ],{genericStyle:["bg_cover"]})
}
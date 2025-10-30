import { __SYD, $, __sC, __p, __g, __u } from "./sydneyDom_v3.js"

const hoverIn = e =>{
    e.currentTarget.style.background = "#FFD65C";
    e.currentTarget.style.color = "#000000";
}

const hoverOut = e =>{
    e.currentTarget.style.background = "#0a0a0aff";
    e.currentTarget.style.color = "#BFBFBF";
}

export function animate()
{
    let {currentTab} = __p(["ablt"]);

    currentTab++;

    if(currentTab > 4) currentTab = 0;

    const state = __g("ablt");
    state.currentTab = currentTab;
    __u("ablt",{type:"a" , value:state});
}

__SYD.ablt = function()
{
    return $(
        "div",
        {
            id:"ablt",
            style:"position:relative;height:100vh;min-height:fit-content;width:100%;position:relative;isolation:isolate;background-color:#0f0f0fff;padding:15px;margin-bottom:50px;"+__sC["row-start"]({method:"add",style:{alignItems:"flex-start"}})+__sC["comic_lines"]()+__sC["comic_outline"]()
        },
        [
            __SYD.ablt_main_txt()
        ],
        {
            createState:{
                stateName:"ablt",
                state:{
                    mobile:false,
                    currentTab:0,
                    inRange:false
                }
            },
            mediaQuery:{
                query:[{size:"<700px",prop:{mobile:true}}],
                defState:{mobile:false}
            }
        }
    )
}

const imgRef = ["shield" , "geometry" , "vision" , "armour" , "network"]

__SYD.ablt_main_txt = () =>{
    const mobile = __p(["ablt","mobile"],false);
    return $(
        "div",
        {
            style:__sC["col-start"]({method:"add",style:{gap:"20px",height:"fit-content",minHeight:"100%",width:"100%",padding:"10px"}})
        },
        [
            $(
                "div",
                {
                    style:"height:fit-content;min-height:100%;width:100%;"+__sC["col-start"]({method:"add",style:{gap:"20px"}})
                },
                [
                    $(
                        "h1",
                        {style:`width:100%;font-weight:900;font-family:font1;text-align:${mobile?"center":"left"}`},
                        [
                            $("p" , {style:"font-size: clamp(2.5rem, 5vw, 5rem);letter-spacing: 2px;text-shadow: 1px 1px 0px #000000,2px 2px 0px #000000,3px 3px 0px #000000,4px 4px 0px #000000;color:#F3BA2F;"} , ["The Arsenal"])
                        ]
                    ),
                    $(
                        "p",
                        {style:`width:100%;max-width:1000px;font-weight:900;color:#F5F5F5;font-family:font2;font-size:18px;text-shadow:2px 2px 0px #000000;text-align:${mobile?"center":"left"}`},
                        [
                            "He wasn’t built to destroy — he was built to defend. Every ability he carries is rooted in purpose: protection, freedom, and balance. His power comes from the same code that built the chain itself — proof that true strength isn’t given, it’s created."
                        ]
                    )
                ]
            ),

            $(
                "div",
                {
                    style:"height:fit-content;min-height:100%;width:100%;"+__sC["row-start"]({method:"add",style:{gap:"10px",justifyContent:"space-between"}})
                },
                [
                    $(
                        "div",
                        {
                            style:`height:100%;width:${mobile?"100%":"50%"};`+__sC["col-start"]({method:"add",style:{gap:"10px"}})
                        },
                        [
                            //feature 1
                            __SYD.ablt_main_txt_el("Shield of Immutability" , "Generates an unbreakable shield formed from blockchain-code. It deflects manipulation, censorship, and corruption — guarding the freedom of value itself." , 0),
                            __SYD.ablt_main_txt_el("Golden Geometry Strike" , "Harnessing the golden geometry of the Binance network, Captain CZ unleashes a focused energy strike that disrupts centralized power structures and breaks through old-order control." , 1),
                            __SYD.ablt_main_txt_el("Decentralized Vision" , "His eyes glow with the data of the chain. He can scan, analyse and visualise networks of value, detecting hidden controls and peer-to-peer flows — making him a true guardian of financial freedom." , 2),
                            __SYD.ablt_main_txt_el("Code Armour Fabrication" , "Through his mastery of code, Captain CZ materialises armour plates and gear on-the-fly — transforming from ordinary coder into armored protector in moments." , 3),
                            __SYD.ablt_main_txt_el("Network Nexus Command" , "He summons a web of light-nodes and data streams beneath his command, creating a decentralised network infrastructure that empowers communities, not rulers." , 4),
                        ]
                    ),
                    $(
                        "div",
                        {
                            style:`transition:all linear .3s;display:${mobile?"none":"flex"};height:500px;width:40%;background-image:url(./assets/${imgRef[__p(["ablt","currentTab"],0)]}.png);background-position:center top;`+__sC["comic_lines"]()+__sC["comic_outline"]()
                        },[],{genericStyle:["bg_cover"]}
                    )
                ]
            )
        ]
    )
}


__SYD.ablt_main_txt_el = (header , value , index)=>{
    const mobile = __p(["ablt","mobile"],false);
    return $(
        "p",
        {style:`width:100%;font-weight:300;font-family:font1;font-size:25px;text-align:${mobile?"center":"left"};padding:20px;transition:all linear .2s;opacity:${__p(["ablt","currentTab"],0) === index ? "1":".6"};`+__sC["col-start"]({method:"add",style:{gap:"20px",alignItems:"center"}})+__sC["comic_lines"]()+__sC["comic_outline"]()},
        [
            $(
                "p",
                {
                    style:`font-size:35px;font-weight:700;${__p(["ablt","currentTab"],0) === index ? "text-shadow: 1px 1px 0px #000000,2px 2px 0px #000000,3px 3px 0px #000000,4px 4px 0px #000000;color:#F3BA2F;" : "color:#BFBFBF;"}`
                },
                [
                    header
                ]
            ),
            $(
                "div",
                {
                    style:`font-family:font2;font-weight:700;font-size:18px;${__p(["ablt","currentTab"],0) === index ? "text-shadow: 1px 1px 0px #000000,2px 2px 0px #000000,3px 3px 0px #000000,4px 4px 0px #000000;color:#F3BA2F;" : "color:#BFBFBF;"}`
                },
                [
                    value
                ]
            )
        ],
        {
            events:{
                // onmouseenter:hoverIn,
                // onmouseout:hoverOut
            }
        }
    )
}

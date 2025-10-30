import { $, __c, __g, __p, __sC, __SYD, __u, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p3 = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:100%;min-height:fit-content;padding:0px;padding-bottom:0px;display:flex;flex-direction:column;gap:20px;justify-content:center;background:${SYD_VAR.newbgGrad.get()};border:1px solid transparent;margin-bottom:50px;`+__sC["comic_lines"]()+__sC["comic_outline"](),
            id:"p3",
            class:"inner-outline"
        },
        [
            __SYD.p3SubHeader()
        ]
    )
}

__SYD.p3SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:unset;display:flex;flex-direction:column;align-items:center;gap:20px;padding:0 ${__p(["p3SubHeader" , "mobilePadState"],false) ? "0px" : "0px"};`
        },
        [
            // __SYD.p3_text1(),
            // __SYD.p3_text2(),
            // __SYD.p3_text3(),
            __SYD.p3_tabs()
        ],
        {
            createState:{
                stateName:"p3SubHeader",
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


__SYD.p3_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get()
        },
        [
            __c(
                "p",
                {},["Buy $Alita"]
            )
        ]
    )
}


__SYD.p3_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "padding:15px 20px;border-radius:10px 25px;color: #f4c13f ;background-color:#0b0b0b;"+__sC["thinBorder"]()
        },
        [
            __c(
                "p",
                {},["bnbbot Features"]
            )
        ]
    )
}


__SYD.p3_text3 = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} text-align:center;color:#ffffff;`},["Why choose bnbbot? Packed with powerful tools and designed for traders of all levels, here’s what makes our Telegram bot stand out:"])
        ]
    )
}

__SYD.p3_text4 = (textContent) =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page3Text4.get() + "text-align:center;color:#f4c13f;",
            class:"subtle-hover"
        },
        [
            __c(
                "p",
                {},[`${textContent}`]
            )
        ]
    )
}


__SYD.p3_text5 = (textContent) =>{
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

const imageRef = [["comic1.jpg" , "comic1_.png"],["comic2.jpg","comic3.jpg"],["comic4.jpg","comic5.jpg","comic6.png"],["comic7.jpg",""]]

__SYD.p3_tabs = () =>{
    return  __c(
        "div",
        {
            style:"display:flex;height:fit-content;width:100%;justify-content:center;flex-wrap:wrap;gap:0px;"
        },
        [   
            ...(()=>{
                const el = new Array();
                const data = __p(["p3_tabs","size"],[[70 , 30],[40 , 60],[100/3,100/3,100/3],[100]])

                for(let i = 0; i < data.length; i++)
                {
                    el.push(
                        __SYD.p3_comicTabs_container({index:i})
                    )
                }

                console.log(el)
                return el;
            })()
        ],
        {
            createState:{
                stateName:"p3_tabs",
                state:{
                    size:[[70 , 30],[40 , 60],[100/3,100/3,100/3],[100]],
                    isMobile:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<800px",prop:{size:[[50 , 50],[50 , 50],[100/3,100/3,100/3],[100]]}},
                    {size:"<550px",prop:{size:[[100 , 100],[100 , 100],[100,100,100],[100]] , isMobile:true}}
                ],
                defState:{
                    size:[[70 , 30],[40 , 60],[100/3,100/3,100/3],[100]],
                    isMobile:false
                }
            }
        }
    )
}

__SYD.p3_comicTabs_container = function({index})
{
    return $(
        "div",
        {
            style:`height:fit-content;width:100%;display:flex;flex-direction:${__p(["p3_tabs","isMobile"],false)?"column":"row"};position:relative;`,
            class:"comic_container"
        },
        [
            ...(()=>{
                const el = new Array();
                const data = __p(["p3_tabs","size"],[[70 , 30],[40 , 60],[100/3,100/3,100/3],[100]]);
                for(let i = 0; i < data[index].length; i++)
                {
                    el.push(
                        __SYD.p3_comicTabs({width:data[index][i] , i:index , j:i})
                    )
                }
                return el;
            })()
        ]
    )
}

__SYD.p3_comicTabs = function({width,inject="",i,j})
{
    return $(
        "div",
        {
            style:`height:400px;width:${width}%;background-image:url(./assets/comicFolder/${imageRef[i][j]});`+__sC["comic_lines"]()+__sC["comic_outline"]()+`${inject}`,
            class:"inner-outline"
        },[],
        {
            genericStyle:["bg_fit"]
        }
    )
}


__SYD.p3_tab = ({title = '' , content = '' , img = "main" , index = 0}) =>{
    return __c(
        'div',
        {
            style:`width:calc(100% - 20px);max-width:${__p(["p3SubHeader" , "__flex_child"],"row") === "row" ? "280px" : "450px"};height:fit-content;border-radius:10px;padding:30px 0;cursor:pointer;position:relative;`+__sC["thinBorder"](),
            class:"buy_tabs"
        },
        [
            __c(
                'div',
                {
                    style:`height:fit-content;padding:10px 20px;width:100%;background:unset;display:flex;align-items:center;column-gap:20px;row-gap:20px;flex-direction:column;`
                },
                [
                    __c(
                        'div',
                        {
                            style:'width:100%;display:flex;flex-direction:column;gap:10px;'
                        },
                        [
                            __SYD.p3_text4(title),
                            // __SYD.p3_text5(content)
                        ]
                    ),
                    // __c(
                    //     "div",
                    //     {
                    //         style:"height:250px;width:100%;display:flex;justify-content:center;align-items:center;overflow:hidden;",
                    //         // class:"p3_tab"
                    //     },
                    //     [
                    //         __c(
                    //             "div",
                    //             {
                    //                 style:`width:100%;height:100%;background-color:rgba(255 , 255 , 255 , .3);background-image:url(./assets/${img});transition:all linear .3s;`,
                    //                 class:`img_holder_${img.split(".").join("")}`
                    //             },[],{genericStyle:["bg_cover"]}
                    //         ),
                    //     ]
                    // )
                ]
            ),
            __c(
                "span",
                {
                    style:"height:15px;width:15px;position:absolute;top:10px;right:10px;background-image:url(./assets/tab_link.png);"
                },[],{genericStyle:["bg_fit"]}
            )
        ],
        {
            events:{
                onmouseover:e =>{
                    // const el = document.querySelector(`.img_holder_${img.split(".").join("")}`);
                    // el.style.transform = "scale(1.3)";
                },
                onmouseout:e =>{
                    // const el = document.querySelector(`.img_holder_${img.split(".").join("")}`);
                    // el.style.transform = "scale(1)";
                },
                onclick:e =>{
                    const state = __g('main_pop_tab');
                    state.display = true;
                    state.type = index;
                    __u("main_pop_tab" , {type:"a" , value:state});

                    __p(["main_pop_tab" , "updateContent"],()=>{})();
                }
            }
        }
    )
}
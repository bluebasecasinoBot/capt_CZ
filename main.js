import { __c, __g, __m, __p, __SYD, __u, __v, manage_mediaQuery, SYD_VAR, visualTree } from "./sydneyDom_v3.js"

import "./nav.js"
import "./ability.js"
import "./page1.js"
import "./page2.js"
import "./page3.js"
import "./page4.js"
import "./page5.js"
import "./page6.js"
import "./page7.js"
import "./customer_review_page.js"
import "./pop_up_display_tab.js"
import "./footer.js"
import "./variable.js"
import "./style.js"
import "./community.js"
import { animate } from "./ability.js"

__SYD.container = () =>{
    return __c(
        "div",
        {
            style:`height:100vh;width:100vw;`
        },
        [
            __SYD.main_pop_tab(),
            __SYD.sub_container()
        ],
        {
            createState:{
                stateName:"container",
                state:{count:1}
            }
        }
    )
}

__SYD.sub_container = () =>{
    return __c(
        "div",
        {
            style:`min-height:100vh;width:100vw;background:${" #242323 "};font-family:font2; padding:15px;color:#000;`
        },
        [
            __SYD.p1(),
            __SYD.p3(),
            __SYD.ablt(),
            // __SYD.p4(),
            // __SYD.c_r_p(),
            __SYD.community(),
            __SYD.p7(),
            __SYD.footer_main_parent()
        ]
    )
}

__m(__SYD.container() , ()=>{
    manage_mediaQuery(window.innerWidth);

    //animate abilities
    setInterval(() => {
        animate();
    }, 3000);
    //animate abilities
});

visualTree({visual:true,port:9000});
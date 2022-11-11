swal("欢迎来到本站","网站暂时不能通过微信分享，如果想要分享请复制https://flowus.cn/27862033-1b41-447d-8ca9-5df6457a5da8");
rt = document.documentElement.style;
hd = document.querySelector(".caption");
let c = 0;

const change_bg =()=>{
    c = c+1;
    if (c%2 == 1){
        rt.setProperty("--body_bg","url(picture/backgrand2.png)");
        rt.setProperty("--header_bg","rgb(48,80,128)");
        rt.setProperty("--font_color","rgb(208,208,208)");
        rt.setProperty("--header_color","invert(0.85)");
        rt.setProperty("--border_color","rgb(128,128,128)");
        rt.setProperty("--icon_color","invert(1)")
    }
    else{
        rt.setProperty("--body_bg","url(picture/backgrand.png)");
        rt.setProperty("--header_bg","#fbfbfb");
        rt.setProperty("--font_color","#38a7ff");
        rt.setProperty("--header_color","invert(0%)");
        rt.setProperty("--border_color","#ccc");
    }
};
hd.addEventListener('click',change_bg);
// :root{
//     --body_bg:url(picture/backgrand.png);
//     --header_bg:#fbfbfb;
//     --font_color:#38a7ff;
//     --header_color:invert(0%);
//     --border_color:#ccc:
// }
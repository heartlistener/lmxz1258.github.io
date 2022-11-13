// swal("欢迎来到本站","现更新形策章节测试答案，需要从资料分享查找");
rt = document.documentElement.style;
hd = document.querySelector(".caption");
hm = document.querySelector(".head_m");
hbtn = document.querySelector(".head_btn");
let c = 0;

const change_bg =()=>{
    c = c+1;
    if (c%2 == 1){
        rt.setProperty("--body_bg","url(picture/backgrand2.png)");
        rt.setProperty("--header_bg","rgb(48,80,128)");
        rt.setProperty("--font_color","rgb(208,208,208)");
        rt.setProperty("--header_color","invert(0.85)");
        rt.setProperty("--border_color","rgb(128,128,128)");
        rt.setProperty("--icon_color","invert(1)");
        rt.setProperty("--head_bg","rgb(48,80,128)");
    }
    else{
        rt.setProperty("--body_bg","url(picture/backgrand.png)");
        rt.setProperty("--header_bg","#fbfbfb");
        rt.setProperty("--font_color","#38a7ff");
        rt.setProperty("--header_color","invert(0%)");
        rt.setProperty("--border_color","#ccc");
        rt.setProperty("--head_bg","#ebf6f6");
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

let n = 13;
let h_c = Math.floor(Math.random()*(n+1));

const change_h = () => {
  h_c++;
  if (h_c==n+1)
  {
    h_c=1;
  }
  switch(h_c){
    case 1:hm.innerHTML="<p>未来将属于两种人：思想的人和劳动的人，实际上，这两种人是一种人，因为思想也是劳动。</p>";
        break;
    case 2:hm.innerHTML="<p>如果你渴望得到某样东西，你得让它自由，如果它回到你身边，它就是属于你的，如果它不会回来，你就从未拥有过它。</p>";
        break;
    case 3:hm.innerHTML="<p>人类的全部智慧就包含在这五个字里面：等待和希望！</p>";
        break; 
    case 4:hm.innerHTML="<p>痛苦的经历一旦有人分担，痛苦就减少了一半。</p>";
        break; 
    case 5:hm.innerHTML="<p>我们做过的每件事，果然都留下了它的痕迹，有的模糊，有的清晰！我们在人生历程上每走过一步，就像爬虫在沙地上蠕行，留下的是一条长长的印痕！</p>";
        break;
    case 6:hm.innerHTML="<p>世界是美丽的，就算充满悲伤和泪水。也请睁开你的双眼，去做你想要做的事情，成为你想要成为的人，去找到你的朋友。不必焦躁，慢慢地去长大。</p>";
        break; 
    case 7:hm.innerHTML="<p>前天遇到了小鹿，昨天是小兔子，今天是你。</p>";
        break;   
    case 8:hm.innerHTML="<p>真正重要的东西，永远都是非常简单的。</p>";
        break;
    case 9:hm.innerHTML="<p>我宁愿靠自己的力量，打开我的前途，而不愿求有力者垂青。</p>";
        break; 
    case 10:hm.innerHTML="<p>脚步不能到达的地方，眼光可以到达;眼光不能到达的地方,精神可以飞到。</p>";
        break;   
    case 11:hm.innerHTML="<p>stay cool</p>";
        break;
    case 12:hm.innerHTML="<p>不认输，不逃避，世上没有不停的雨。</p>";
        break; 
    case 13:hm.innerHTML="<p>如果你愿意相信自己，再施一点点小魔法，你的梦想就全都会实现。</p>";
        break;          
  }
}
hbtn.addEventListener("click",change_h);
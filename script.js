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

let n = 39;
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
    case 12:hm.innerHTML="<p>临渊羡鱼，不如退而结网。</p>";
        break; 
    case 13:hm.innerHTML="<p>我准备好了，我准备好了，我准备好了…</p>";
        break;  
    case 14:hm.innerHTML="<p>每个人的心中都有一个风筝，不管那意味着什么，让我们勇敢地去追。</p>";
        break; 
    case 15:hm.innerHTML="<p>上帝总要拿去你什么东西的时候，先给你足够的快乐。</p>";
        break;   
    case 16:hm.innerHTML="<p>当罪恶导致善行，那就是最大的救赎。</p>";
        break;
    case 17:hm.innerHTML="<p>世界上最宽阔的是海洋，比海洋更宽阔的是天空，比天空更宽阔的是人的胸怀。</p>";
        break; 
    case 18:hm.innerHTML="<p>人，有了物质才能生存；人，有了理想才谈得上生活。</p>";
        break;   
    case 19:hm.innerHTML="<p>竹杖芒鞋轻胜马，谁怕，一蓑烟雨任平生！</p>";
        break; 
    case 20:hm.innerHTML="<p>试问岭南应不好，却道：此心安处是吾乡！</p>";
        break;   
    case 21:hm.innerHTML="<p>十年生死两茫茫，不思量，自难忘，千里孤坟，无处话凄凉。</p>";
        break;
    case 22:hm.innerHTML="<p>休对故人思故国，且将新火试新茶，诗酒趁年华。</p>";
        break; 
    case 23:hm.innerHTML="<p>惟江上之清风，与山间之明月，耳得之而为声，目遇之而成色，取之无禁，用之不竭。</p>";
        break;      
    case 24:hm.innerHTML="<p>星星之火，可以燎原。</p>";
        break; 
    case 25:hm.innerHTML="<p>没有调查就没有发言权！没有正确的调查，同样没有发言权。</p>";
        break;   
    case 26:hm.innerHTML="<p>与天奋斗，其乐无穷！与地奋斗，其乐无穷！与人奋斗，其乐无穷！</p>";
        break; 
    case 27:hm.innerHTML="<p>虚心使人进步，骄傲使人落后。</p>";
        break;   
    case 28:hm.innerHTML="<p>天若有情天亦老，人间正道是沧桑。</p>";
        break;
    case 29:hm.innerHTML="<p>不管风吹浪打，胜似闲庭信步</p>";
        break; 
    case 30:hm.innerHTML="<p>牢骚太盛防肠断，风物长宜放眼量。</p>";
        break;
    case 31:hm.innerHTML="<p>我们都有责任去引导年轻人，以防他们走上不归路，变得支离破碎，自暴自弃。</p>";
        break;
    case 32:hm.innerHTML="<p>记着，希望是个好东西，也许是世间最好的东西，好东西从不会逝去。</p>";
        break; 
    case 33:hm.innerHTML="<p>监狱里的高墙实在是很有趣。刚入狱的时候，你痛恨周围的高墙；慢慢地，你习惯了生活在其中；最终你会发现自己不得不依靠它而生存。这就是体制化。</p>";
        break;      
    case 34:hm.innerHTML="<p>生命就像一盒巧克力，结果往往出人意料。</p>";
        break; 
    case 35:hm.innerHTML="<p>放下包袱，继续前进。</p>";
        break;   
    case 36:hm.innerHTML="<p>没有人能让你不快乐，是你自己选择了不快乐。作为成年人，理应为自己的行为和情绪负责，从中体会到自己的力量。</p>";
        break; 
    case 37:hm.innerHTML="<p>重要的，珍惜的，一直在身边，一旦成为理所当然，就难以发现。</p>";
        break;   
    case 38:hm.innerHTML="<p>不能只被外表所蒙蔽哦。</p>";
        break;
    case 39:hm.innerHTML="<p>我喜欢早上起来时一切都是未知的，不知会遇见什么人，会有什么样的结局。</p>";
        break; 
  }
}
hbtn.addEventListener("click",change_h);
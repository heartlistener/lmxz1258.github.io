const title= document.querySelector('#title1');
const prev= document.querySelector('.prev');
const clannad= document.querySelector('.clannad');
const next= document.querySelector('.next');
const ja = document.querySelector('#jump_a');
const jk = document.querySelector('#jump_k');
const jbtn = document.querySelector('#jump_btn');
const sc = window.screen.width;
const jdsbj_next = document.querySelector("#jdsbj_next");
const jdsbj = document.querySelector("#jdsbj_1");
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

searchIcon.onclick = () =>{
  searchIcon.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}


let a = 1;
let k = 1;

const change = (m,n,q) => {
  text = '//player.bilibili.com/player.html?aid=2899526&bvid=BV1ks41117be&cid='+q;

  clannad.setAttribute('src',text);
  title.innerHTML = "第"+m+"-"+n+"集";
}
const Change = (m,n,q) => {
  text = '//player.bilibili.com/player.html?aid=2899526&bvid=BV1ks41117be&cid=4547795&page='+q;
  clannad.setAttribute('src',text);
  title.innerHTML = "第"+m+"-"+n+"集";
}

//previous play
const prevPlay = () => {
    k--;
    if (k == 0 && a == 1)
    {
        k = 22;
        a = 2;
    }
    if (k == 0 && a == 2)
    {
      k = 22;
      a = 1;
    }
    if (sc<740)
    {
      if(a==2)
      {
        ans =+ 4550562+k;
        change(a,k,ans);
      }
      else
      {

        ans =4547794+k;
        change(a,k,ans);
      }
    }
    else{
      ans = (a-1)*24+k;
      Change(a,k,ans);  
    }
}

prev.addEventListener("click", prevPlay);

//next play
const nextPlay = () => {
    k++;
    if (k == 23 && a == 1){
        k = 1;
        a = 2;
    }
    if (k == 23 && a == 2){
        k = 1;
        a = 1;

}
  if (sc<740)
  {
    if(a==2)
    {
      ans =+ 4550562+k;
      change(a,k,ans);
    }
    else
    {

      ans =4547794+k;
      change(a,k,ans);
    }
  }
  else{
    ans = (a-1)*24+k;
    Change(a,k,ans);  
  }

}

next.addEventListener("click", nextPlay); 

const jump_video = () => {
  k = Number(jk.value);
  a = Number(ja.value);
  if (sc<740)
  {
    if(a==2)
    {
      ans =+ 4550562+k;
      change(a,k,ans);
    }
    else
    {

      ans =4547794+k;
      change(a,k,ans);
    }
  }
  else{

    ans = (a-1)*24+k;
    Change(a,k,ans);  
  }
}

jbtn.addEventListener("click",jump_video);

let jdsbj_c = 1;

const change_jdsbj = () => {
  jdsbj_c++;
  if (jdsbj_c==21)
  {
    jdsbj_c=1;
  }
  switch(jdsbj_c){
    case 1:jdsbj.innerHTML="<em>如果你渴望得到某样东西，你得让它自由，如果它回到你身边，它就是属于你的，如果它不会回来，你就从未拥有过它。</em>";
      break;
    case 2:jdsbj.innerHTML="<em>上帝给了人们有限的力量但却给了人们无限的欲望。</em>";
      break;
    case 3:jdsbj.innerHTML="<em>幸福就是一双鞋，合不合适只有自己知道。</em>";
      break;
    case 4:jdsbj.innerHTML="<em>聪明的人，不该知道的绝不多问，不愿相信的一概不信。</em>";
      break;
    case 5:jdsbj.innerHTML="<em>学习并不等于认识，有学问的人和能认识的人是不同的。记忆造就了前者，哲学造就了后者。</em>"
      break;
    case 6:jdsbj.innerHTML="<em>在政治上，是没有人，只有主义，没有感情，只有利害。在政治上，我们不是杀一个人，而是移去一个障碍物。</em>";
      break;
    case 7:jdsbj.innerHTML="<em>我爱爱我的人，我恨恨我的人。</em>";
      break;
    case 8:jdsbj.innerHTML="<em>因为上帝掌握着时间和永恒，这两样东西是人掌握不了的。</em>";
      break;
    case 9:jdsbj.innerHTML="<em>死或许是一种刑罚，但不等于赎罪。</em>";
      break;
    case 10:jdsbj.innerHTML="<em>女人是不可侵犯的，自己所爱的女人是神圣的。</em>";
      break;
    case 11:jdsbj.innerHTML="<em>在我们等待的过程中，时间自然会促使事情不断地发展。</em>";
      break;
    case 12:jdsbj.innerHTML="<em>人生是这样易于变幻，当快乐来到我们面前的时候，我们应该及时地抓住它。</em>";
      break;
    case 13:jdsbj.innerHTML="<em>人在顺境中，觉得祷告不过是空洞词语的堆砌，而一旦遭受苦难，他就领悟了向上帝祷告的语言多么崇高神妙。</em>";
      break;
    case 14:jdsbj.innerHTML="<em>人呐，我对你们了如指掌，你们历来道貌岸然。</em>";
      break;
    case 15:jdsbj.innerHTML="<em>所有敌对的开始，就是面对悲剧的开始。我以为可以赢得天堂，但我输了。催我老的不是年月而是忧伤。</em>";
      break;
    case 16:jdsbj.innerHTML="<em>人总是急于得到幸福的，因为我们受苦的时间太长了。</em>";
      break;
    case 17:jdsbj.innerHTML="<em>死人的诅咒有时会比活人的憎恨更可怕。</em>";
      break;
    case 18:jdsbj.innerHTML="<em>退，并不是露怯，而是因为对自己的优势所在了然于心，更是为了紧接着一剑置对手于死地。</em>";
      break;
    case 19:jdsbj.innerHTML="<em>对于某些人来说，工作是医治悲伤的良药。</em>";
      break;
    case 20:jdsbj.innerHTML="<em>这个世界上无所谓幸福与不幸，只有一种状况和另一种状况的比较，如此而已。只有体验过极度不幸的人，才能够品尝到极度的幸福，只有下过死的决心的人，才能懂得活着是多么得快乐。幸福的活下去吧，请你们永远别忘记，直至天主垂允为人类揭示未来之日到来之前，这两个词就涵括了人类的全部智慧：等待和希望！</em>";
      break;
  }
}
jdsbj_next.addEventListener("click",change_jdsbj);
const title= document.querySelector('#title1');
const prev= document.querySelector('.prev');
const clannad= document.querySelector('.clannad');
const next= document.querySelector('.next');
const ja = document.querySelector('#jump_a');
const jk = document.querySelector('#jump_k');
const jbtn = document.querySelector('#jump_btn')

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
    ans = (a-1)*24+k;
    change(a,k,ans);
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
    ans = (a-1)*24+k;

    change(a,k,ans);
}

next.addEventListener("click", nextPlay); 

const jump_video = () => {
  k = Number(jk.value);
  a = Number(ja.value);
  ans = (a-1)*24+k;

  change(a,k,ans);
}

jbtn.addEventListener("click",jump_video);
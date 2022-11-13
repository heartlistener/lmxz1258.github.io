

const title= document.querySelector('.title');
const prev= document.querySelector('.prev');
const playPause= document.querySelector('.playPause');
const next= document.querySelector('.next');
const audio= document.querySelector('audio');

// song list
const songList =[
    {  
    path : "http://music.163.com/song/media/outer/url?id=1491585.mp3",
    songName : "Traveling Light",
    },
    {
    path : "http://music.163.com/song/media/outer/url?id=28987615.mp3",
    songName : "Radio Mix 6-2 ",
    },
    {
    path : "http://music.163.com/song/media/outer/url?id=1969538016.mp3",
    songName : "love Story",
    },
    { 
    path : "http://music.163.com/song/media/outer/url?id=1984892291.mp3",
    songName : "Celestial",
    },
    {
    path : "https://lmxz1258.github.io/newplay/music/crossing field.mp3",
    songName : "crossing field",
    },
    {
    path : "https://lmxz1258.github.io/newplay/music/You’re My World.mp3",
    songName : "You’re My World",
    },
    {
    path : "https://lmxz1258.github.io/newplay/music/Fight Song.mp3",
    songName : "Fight Song",
    },
    {
    path : "https://lmxz1258.github.io/newplay/music/Near or Far.mp3",
    songName : "Near or Far",
    },
    {
    path : "https://lmxz1258.github.io/newplay/music/Peter Pan Was Right.mp3",
    songName : "Peter Pan Was Right",
    },
    { 
    path : "https://lmxz1258.github.io/newplay/music/PLANET.mp3",
    songName : "PLANET",
    },
    {
    path : "https://lmxz1258.github.io/newplay/music/Runaway.mp3",
    songName : "Runaway",
    },
    {
    path : "https://lmxz1258.github.io/newplay/music/Set for Life.mp3",
    songName : "Set for Life",
    },
    {
    path : "https://lmxz1258.github.io/newplay/music/So Far Away.mp3",
    songName : "So Far Away",
    },
    {
    path : "https://lmxz1258.github.io/newplay/music/The Calling.mp3",
    songName : "The Calling",
    },
    {
    path : "https://lmxz1258.github.io/newplay/music/Unique.mp3",
    songName : "Unique",
    },
    {
    path : "https://lmxz1258.github.io/newplay/music/Valder Fields.mp3",
    songName : "Valder Fields",
    },
    {
    path : "https://lmxz1258.github.io/newplay/music/大人.mp3",
    songName : "大人",
    },
    {
    path : "https://lmxz1258.github.io/newplay/music/晴天.mp3",
    songName : "晴天",
    },
    {
    path : "https://lmxz1258.github.io/newplay/music/十代之曲.mp3",
    songName : "十代之曲",
    },
    { 
    path : "https://lmxz1258.github.io/newplay/music/棠梨煎雪.mp3",
    songName : "棠梨煎雪",
    },
    { 
    path : "https://lmxz1258.github.io/newplay/music/天空中闪烁着光.mp3",
    songName : "天空中闪烁着光",
    },
    { 
    path : "https://lmxz1258.github.io/newplay/music/像风一样.mp3",
    songName : "像风一样",
    },
    { 
    path : "https://lmxz1258.github.io/newplay/music/霜雪千年.mp3",
    songName : "霜雪千年",
    },
    {
    path : "https://lmxz1258.github.io/newplay/music/新時代 .mp3",
    songName : "新時代",
    },
    {
    path : "https://lmxz1258.github.io/newplay/music/有彩虹.mp3",
    songName : "有彩虹",
    },
];

let songPlaying = false;

//play song
 const playSong = ()=>{
    songPlaying = true;
    audio.play();
    playPause.classList.add('active');
    playPause.innerHTML = '<span class="material-icons">pause</span>';
}

//pause song
const pauseSong = () => {
    songPlaying = false;
    audio.pause();
    playPause.classList.remove('active');
    playPause.innerHTML = ' <span class="material-icons">play_arrow</span>';

}
//play/pause song
playPause.addEventListener("click",() => (songPlaying? pauseSong() : playSong()));

//load song
const loadSong = (songList) => {
    title.textContent = songList.songName;
    audio.src = songList.path;//

}
let i = 0;
loadSong (songList[i]);

//previous song
const prevSong = () => {
    i--;
    if (i < 0){
        i = songList.length -1;
    }
    loadSong(songList[i]);
    playSong();
}

prev.addEventListener("click", prevSong);

//next song
const nextSong = () => {
    i++;
    if (i > (songList.length - 1)){
        i = 0;
    }
    loadSong(songList[i]);
    playSong();
}

next.addEventListener("click", nextSong); 
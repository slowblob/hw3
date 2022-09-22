let video=document.querySelector('video');
let play=document.getElementById('play');
let pause=document.getElementById('pause');
let ff=document.getElementById('fastForward')
let skip=2
let re=document.getElementById('rewind')
let vol=document.getElementById('volume');
function playVideo(){
    video.play();
}
function pauseVideo(){
    video.pause();
}
function fastForward(){
    video.currentTime+=skip;
}
function rewind(){
    video.currentTime-=skip;
}
function sound(){
    video.volume=vol.value
}
play.addEventListener('click',playVideo);
pause.addEventListener('click',pauseVideo)
ff.addEventListener('click', fastForward);
re.addEventListener('click',rewind);
vol.addEventListener('change', sound);
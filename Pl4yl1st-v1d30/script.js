/*Select Box*/
$(document).ready(function(){
$("select").change(function(){
$(this).find("option:selected").each(function(){
var optionValue = $(this).attr("value");
if(optionValue){
$(".box").not("." + optionValue).hide();
$("." + optionValue).show();} else{
$(".box").hide();}});}).change();});

/*Playlist Video*/
//<![CDATA[
$(window).load(function(){
var video;
var playlist;
var tracks;
var current;

init();
function init(){
    current = 0;
    video = $('video');
    playlist = $('#playlist');
    tracks = playlist.find('li a');
    len = tracks.length - 1;
    video[0].volume = .99;
    playlist.find('a').click(function(e){
        e.preventDefault();
        link = $(this);
        current = link.parent().index();
        run(link, video[0]);
    });
    audio[0].addEventListener('ended',function(e){
        current++;
        if(current == len){
            current = 0;
            link = playlist.find('a')[0];
        }else{
            link = playlist.find('a')[current];    
        }
        run($(link),video[0]);
    });
}
function run(link, player){
        player.src = link.attr('href');
        par = link.parent();
        par.addClass('active').siblings().removeClass('active');
        video[0].load();
        video[0].play();
}
});//]]>

// tell the embed parent frame the height of the content
if (window.parent && window.parent.parent){
window.parent.parent.postMessage(["resultsFrame", {
height: document.body.getBoundingClientRect().height,
slug: "None"}], "*")}



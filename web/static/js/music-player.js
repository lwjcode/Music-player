/**
 * Created by LuWenjing on 2017/4/21.
 */

    //歌词对象
var lyricsobj = {
        song: {
            name: '',
            lrcTimeArray: [],
            lrcArray_line: []
        }
    };

window.onload = function(){
    document.getElementById("currentSong").innerHTML = "薛之谦--演员";
    var url = "/lyrics?name=xuezhiqian-actor";
    getLyrics(url);  //默认先播放第一首歌
    var audio = document.getElementById("audio");
    audio.addEventListener('timeupdate', scroll_lyrics, true);

    var songlist = document.getElementById("songlist");
    songlist.addEventListener('click', choice_song, true);

};

//创建request对象
function getRequest(){
    var req = null;
    if (window.XMLHttpRequest){
        req = new XMLHttpRequest();
    }
    else{
        req = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return req;
}

//从服务器获得歌词
function getLyrics(url){
    var req = getRequest();
    req.open("get", url, true);
    req.setRequestHeader("Content-Type",
        "application/x-www-form-urlencoded; charset=utf-8");
    req.onreadystatechange = function (){
        if (req.readyState == 4){
            var lyrics = req.responseText;
            if (lyrics != 'error') {
                parseLyrics(lyrics);
                create_lyrics();
            }
            else{
                create_noLyrics();
            }
        }
    };
    req.send();
}

//对歌词进行解析
function parseLyrics(lyrics){
    var lyrics_self = lyrics;
    //获取歌词内容
    var lrcArray = lyrics_self.split("\n");
    lyricsobj.song.lrcArray_line.length = 0;
    lyricsobj.song.lrcTimeArray.length = 0;

    for (var i = 0; i < lrcArray.length; i++){
        var lrcVal = lrcArray[i].replace(/[dd:dd.dd]/g,":");
        var str = lrcVal.substr(1, 8).split(':');
        var seconds = 0;
        seconds = parseInt(str[0])*60 + parseInt(str[1]);
        var lyrics_line = lrcVal.substring(10);
        if (i == 0) {
            lyricsobj.song.name = lyrics_line;
        }
        lyricsobj.song.lrcArray_line.push(lyrics_line);
        lyricsobj.song.lrcTimeArray.push(seconds);
    }
}

//让歌词显示在页面
function create_lyrics(){
    var lyricsp = document.getElementById("lyricslist");
    var text = "";
    var timelist = lyricsobj.song.lrcTimeArray;
    var lyricslist = lyricsobj.song.lrcArray_line;
    for (var i = 0; i < timelist.length; i++){
        text += '<p name="' + timelist[i] +'">'+lyricslist[i] + '</p>';
    }
    lyricsp.innerHTML = '';
    lyricsp.innerHTML = text;
    var audio = document.getElementById("audio");
    audio.autoplay = true;
}

//没有歌词时显示
function create_noLyrics(){
    var lyricsp = document.getElementById("lyricslist");
    lyricsp.innerHTML = '';
    lyricsp.innerHTML = '<h1>此歌曲暂无歌词！</h1>';
}

//让歌词滚动
function scroll_lyrics(){
    var audio = document.getElementById("audio");
    var timelist = lyricsobj.song.lrcTimeArray;
    var lyricslist = lyricsobj.song.lrcArray_line;
    var p = document.getElementsByTagName('p');
    for (var i = 0; i < timelist.length; i++){
        if (timelist[i] <= audio.currentTime + 0.5) {
            if (i > 0) {
                p[i - 1].style.color = 'white';
            }
            p[i].style.color = 'yellow';
            var ptop =p[i].offsetTop;  //获得当前歌词距离浏览器顶部的距离
            var parent =  p[i].parentNode.offsetTop;  //获得滚动窗口距离浏览器的距离
            var parentScroll = p[i].parentNode.scrollTop; //获得滚动窗口的滚动距离
            if (ptop - parent - parentScroll > 220){  //比较当前歌词距离滚动窗口顶部的距离，大于220，就让窗口滚动20，根据自己的布局设置
                p[i].parentNode.scrollTop = p[i].parentNode.scrollTop + 20;
            }
            else{
                //控制让当前歌词显示在中间，根据自己的布局设置
                p[i].parentNode.scrollTop = ptop - parent - 220;
            }
        }
    }
}

//点击列表选择要播放的歌曲
function choice_song(e){
    var audio = document.getElementById("audio");
    var elem = e.target;
    audio.src = 'static\\Music\\'+ elem.id +'.mp3';
    var url = '/lyrics?name='+ elem.id;
    document.getElementById("currentSong").innerHTML = elem.innerHTML;
    getLyrics(url);
}



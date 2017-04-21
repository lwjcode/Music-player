<%--
  Created by IntelliJ IDEA.
  User: LuWenjing
  Date: 2017/4/20
  Time: 21:39
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
  <head>
    <title>瘦小静音乐播放器</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="static/css/music-player.css" rel="stylesheet"/>
    <style type="text/css">

    </style>
  </head>
  <body>
    <!--导航栏-->
    <header class="title">
      <h1>瘦小静音乐播放器</h1>
      <div id="currentSong"></div>
    </header>
    <!--主要内容-->
    <article class="mainbody">
      <section class="showlyrics">
        <div id="lyricslist"></div>
        <audio id="audio" src="static\Music\xuezhiqian-actor.mp3" controls="controls" ></audio>
      </section>

      <!--播放列表-->
      <aside class="songlist">
        <lu class="list" id="songlist">
          <li id="xuezhiqian-actor">薛之谦--演员</li>
          <li id="xuezhiqian-yi-ban">薛之谦--一半</li>
          <li id="xuezhiqian-ni-hai-yao-wo-zen-yang">薛之谦--你还要我怎样</li>
          <li id="xuezhiqain-wo-zhi-dao-ni-dou-zhi-dao">薛之谦--我知道你都知道</li>
          <li id="lvyanxi-fei-niao-he-yu">吕妍熙--飞鸟和鱼</li>
          <li id="zhanglei-yi-xiang-ren">张磊--异乡人</li>
          <li id="lijian-chun-feng-shi-li-bu-ru-ni">李健--春风十里不如你</li>
          <li id="zhuqiang-che-zhan">朱强--车站</li>
          <li id="taopaojihua-yi-wan-ci-bei-shang">逃跑计划--一万次悲伤</li>
        </lu>
      </aside>
    </article>
  </div>


  <script type="text/javascript" src="static/js/music-player.js"></script>

  </body>
</html>

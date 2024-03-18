

/*새로고침 시 100초 올라가는 영상,*/
function hideVideo() {
  var videoElement = document.getElementById("zfirstvid");

  // 동영상 요소를 숨깁니다.
  videoElement.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
  videoElement.style.transform = "translateY(-100%)";
  videoElement.style.opacity = "1";

  // 비디오 요소를 삭제합니다.
  setTimeout(function () {
    videoElement.remove();
  }, 1000); // 동영상이 사라진 후 1초 후에 요소를 삭제합니다.
};

window.onload = function () {

  
/*새로고침 시 100초 올라가는 영상2 */
let videoElement = document.getElementById("zfirstvid");
videoElement.play();

// 7.5초 후에 hideVideo 함수를 호출하여 동영상을 숨깁니다. (수정해야함)
setTimeout(hideVideo, 7500);















  /* 왼쪽 헤더 누르면 페이지 새로고침 */
  const liveButton = document.getElementById("zlive2");
  const liveButton2 = document.getElementById("zlive");
  const liveButton3 = document.getElementById("ztitle");
  liveButton.addEventListener("click", () => {
    location.reload();
  });
  liveButton2.addEventListener("click", () => {
    location.reload();
  });

  liveButton3.addEventListener("click", () => {
    location.reload();
  });












  /*오른쪽 상단 버튼 좌우로 왔다갔다*/
  let leftBtn = document.getElementById('zleftbtn');
  let rightBtn = document.getElementById('zrightbtn');

  leftBtn.addEventListener('click', function () {
    leftBtn.style.display = 'none';
    rightBtn.style.display = 'inline';
  });

  rightBtn.addEventListener('click', function () {
    rightBtn.style.display = 'none';
    leftBtn.style.display = 'inline';
  });



  /* 버튼 누르면 글자 색, 화면 색 바뀌고 버튼 이미지 바뀌는거*/
  let zheader = document.querySelector('#zheader');
  let zwholecredit = document.querySelector('#zwholecredit');
  let zswitchbtn = document.getElementById('zswitchbtn');
  let zgreenimg = document.getElementById('zgreenimg');

  zswitchbtn.addEventListener('click', function () {
    zgreenimg.style.display = 'block';
    zmaindummy.style.filter = 'invert(90%)';
    zheader.style.color = '#3fe1b1';
    zwholecredit.style.color = 'black';
    zdummybtn.style.color = 'black';
    zdevilishbtn.style.color = 'black';
    z90sbtn.style.color = 'black';
    zpowerfreaksbtn.style.color = 'black';
    zclearbonesbtn.style.color = 'black';
    zbruiseboybtn.style.color = 'black';
    zstarfacebtn.style.color = 'black';

  });

  $(function(){
    $("#zswitchbtn").click(function(){
      $(".first2").find("span").css("color", "#3fe1b1");
      $(".four-times2").find("span").css("color", "#3fe1b1");
      $(".third2").find("span").css("color", "#3fe1b1");
      $(".five-times2").find("span").css("color", "#3fe1b1");

      $(".first").find("span").css("color", "#3fe1b1");
      $(".second").find("span").css("color", "#3fe1b1");
      $(".four-times").find("span").css("color", "#3fe1b1");
      $(".third").find("span").css("color", "#3fe1b1");
      $(".five-times").find("span").css("color", "#3fe1b1");

      $(".first3").find("span").css("color", "#3fe1b1");
      $(".second3").find("span").css("color", "#3fe1b1");
      $(".third3").find("span").css("color", "#3fe1b1");

      $(".first1").find("span").css("color", "#3fe1b1");
      $(".second1").find("span").css("color", "#3fe1b1");
      $(".four-times1").find("span").css("color", "#3fe1b1");
      $(".third1").find("span").css("color", "#3fe1b1");

      $("h2").css("color", "#3fe1b1");
    });
  });

  zswitchbtn2.addEventListener('click', function () {
    zmaindummy.style.filter = 'invert(0%)';
    zgreenimg.style.display = 'none';
    zheader.style.color = 'white';
    zwholecredit.style.color = 'white';
    zdummybtn.style.color = 'white';
    zdevilishbtn.style.color = 'white';
    z90sbtn.style.color = 'white';
    zpowerfreaksbtn.style.color = 'white';
    zclearbonesbtn.style.color = 'white';
    zbruiseboybtn.style.color = 'white';
    zstarfacebtn.style.color = 'white';
    
  });

  $(function(){
    $("#zswitchbtn2").click(function(){
      $(".first2").find("span").css("color", "white");
      $(".four-times2").find("span").css("color", "white");
      $(".third2").find("span").css("color", "white");
      $(".five-times2").find("span").css("color", "white");

      $(".first").find("span").css("color", "white");
      $(".second").find("span").css("color", "white");
      $(".four-times").find("span").css("color", "white");
      $(".third").find("span").css("color", "white");
      $(".five-times").find("span").css("color", "white");

      $(".first3").find("span").css("color", "white");
      $(".second3").find("span").css("color", "white");
      $(".third3").find("span").css("color", "white");

      $(".first1").find("span").css("color", "white");
      $(".second1").find("span").css("color", "white");
      $(".four-times1").find("span").css("color", "white");
      $(".third1").find("span").css("color", "white");

      $("h2").css("color", "white");
    });
  });








  
  /* 새로고침 시 첫 비디오 재생 (dummy)*/
  let zmaindummy = document.getElementById('zmaindummy');
  zmaindummy.play();














/* 마우스가 위로 올라가면 다른 동영상, 버튼 표시 및 숨김*/
let zmaindevilish = document.getElementById('zmaindevilish');
let zmainstarface = document.getElementById('zmainstarface');
let zmaingreen = document.getElementById('zmaingreen');
let zmainpower = document.getElementById('zmainpower');
let zmainclear = document.getElementById('zmainclear');
let zmainbruiseboy = document.getElementById('zmainbruiseboy');

let zdummybtn = document.getElementById('zdummybtn');
let zdevilishbtn = document.getElementById('zdevilishbtn');
let z90sbtn = document.getElementById('z90sbtn');
let zpowerfreaksbtn = document.getElementById('zpowerfreaksbtn');
let zclearbonesbtn = document.getElementById('zclearbonesbtn');
let zbruiseboybtn = document.getElementById('zbruiseboybtn');
let zstarfacebtn = document.getElementById('zstarfacebtn');

/*마우스가 올라갈 때 해당 동영상 표시, 다른 버튼 제거*/
zbruiseboybtn.addEventListener('mouseenter', function () {
  zdummybtn.style.display = "none";
  zdevilishbtn.style.display = "none";
  zstarfacebtn.style.display = "none";
  z90sbtn.style.display = "none";
  zpowerfreaksbtn.style.display = "none";
  zclearbonesbtn.style.display = "none";

  zmaindummy.style.display = 'none';
  zmaindevilish.style.display = 'none';
  zmainstarface.style.display = 'none';
  zmaingreen.style.display = 'none';
  zmainpower.style.display = 'none';
  zmainclear.style.display = 'none';
  zmainbruiseboy.style.display = 'inline';


  zmainbruiseboy.play();
});

/*마우스가 떨어질 때 해당 동영상 숨김, 다른 버튼 표시, dummy 재생*/
zbruiseboybtn.addEventListener('mouseleave', function () {
 
  zdummybtn.style.display = "inline";
  zdevilishbtn.style.display = "inline";
  zstarfacebtn.style.display = "inline";
  z90sbtn.style.display = "inline";
  zpowerfreaksbtn.style.display = "inline";
  zclearbonesbtn.style.display = "inline";

  zmainbruiseboy.style.display = 'none';
  zmaindummy.style.display = 'inline';
  zmaindummy.play();
});


  zstarfacebtn.addEventListener('mouseenter', function () {
    zdummybtn.style.display = "none";
    zdevilishbtn.style.display = "none";
    zbruiseboybtn.style.display = "none";
    z90sbtn.style.display = "none";
    zpowerfreaksbtn.style.display = "none";
    zclearbonesbtn.style.display = "none";

    zmaindummy.style.display = 'none';
    zmaindevilish.style.display = 'none';
    zmainbruiseboy.style.display = 'none';
    zmaingreen.style.display = 'none';
    zmainpower.style.display = 'none';
    zmainclear.style.display = 'none';

    zmainstarface.style.display = 'inline';

    zmainstarface.play();
  });
  zstarfacebtn.addEventListener('mouseleave', function () {
    zdummybtn.style.display = "inline";
    zdevilishbtn.style.display = "inline";
    zbruiseboybtn.style.display = "inline";
    z90sbtn.style.display = "inline";
    zpowerfreaksbtn.style.display = "inline";
    zclearbonesbtn.style.display = "inline";

    zmainstarface.style.display = 'none';
    zmaindummy.style.display = 'inline';
    zmaindummy.play();
  });
  zclearbonesbtn.addEventListener('mouseenter', function () {
    zdummybtn.style.display = "none";
    zdevilishbtn.style.display = "none";
    zstarfacebtn.style.display = "none";
    z90sbtn.style.display = "none";
    zpowerfreaksbtn.style.display = "none";
    zbruiseboybtn.style.display = "none";

    zmaindummy.style.display = 'none';
    zmaindevilish.style.display = 'none';
    zmainstarface.style.display = 'none';
    zmaingreen.style.display = 'none';
    zmainpower.style.display = 'none';
    zmainbruiseboy.style.display = 'none';

    zmainclear.style.display = 'inline';
    zmainclear.play();
  });
  zclearbonesbtn.addEventListener('mouseleave', function () {
    zdummybtn.style.display = "inline";
    zdevilishbtn.style.display = "inline";
    zstarfacebtn.style.display = "inline";
    z90sbtn.style.display = "inline";
    zpowerfreaksbtn.style.display = "inline";
    zbruiseboybtn.style.display = "inline";

    zmainclear.style.display = 'none';
    zmaindummy.style.display = 'inline';
    zmaindummy.play();
  });
  zpowerfreaksbtn.addEventListener('mouseenter', function () {
    zdummybtn.style.display = "none";
    zdevilishbtn.style.display = "none";
    zstarfacebtn.style.display = "none";
    z90sbtn.style.display = "none";
    zbruiseboybtn.style.display = "none";
    zclearbonesbtn.style.display = "none";

    zmaindummy.style.display = 'none';
    zmaindevilish.style.display = 'none';
    zmainstarface.style.display = 'none';
    zmaingreen.style.display = 'none';
    zmainbruiseboy.style.display = 'none';
    zmainclear.style.display = 'none';
    zmainpower.style.display = 'inline';
    zmainpower.play();
  });
  zpowerfreaksbtn.addEventListener('mouseleave', function () {
    zdummybtn.style.display = "inline";
    zdevilishbtn.style.display = "inline";
    zstarfacebtn.style.display = "inline";
    z90sbtn.style.display = "inline";
    zbruiseboybtn.style.display = "inline";
    zclearbonesbtn.style.display = "inline";

    zmainpower.style.display = 'none';
    zmaindummy.style.display = 'inline';
    zmaindummy.play();
  });
  z90sbtn.addEventListener('mouseenter', function () {
    zdummybtn.style.display = "none";
    zdevilishbtn.style.display = "none";
    zstarfacebtn.style.display = "none";
    zbruiseboybtn.style.display = "none";
    zpowerfreaksbtn.style.display = "none";
    zclearbonesbtn.style.display = "none";

    zmaindummy.style.display = 'none';
    zmaindevilish.style.display = 'none';
    zmainstarface.style.display = 'none';
    zmainbruiseboy.style.display = 'none';
    zmainpower.style.display = 'none';
    zmainclear.style.display = 'none';
    zmaingreen.style.display = 'inline';
    zmaingreen.play();
  });
  z90sbtn.addEventListener('mouseleave', function () {
    zdummybtn.style.display = "inline";
    zdevilishbtn.style.display = "inline";
    zstarfacebtn.style.display = "inline";
    zbruiseboybtn.style.display = "inline";
    zpowerfreaksbtn.style.display = "inline";
    zclearbonesbtn.style.display = "inline";

    zmaingreen.style.display = 'none';
    zmaindummy.style.display = 'inline';
    zmaindummy.play();
  });
  zdevilishbtn.addEventListener('mouseenter', function () {
    zdummybtn.style.display = "none";
    zbruiseboybtn.style.display = "none";
    zstarfacebtn.style.display = "none";
    z90sbtn.style.display = "none";
    zpowerfreaksbtn.style.display = "none";
    zclearbonesbtn.style.display = "none";

    zmaindummy.style.display = 'none';
    zmainbruiseboy.style.display = 'none';
    zmainstarface.style.display = 'none';
    zmaingreen.style.display = 'none';
    zmainpower.style.display = 'none';
    zmainclear.style.display = 'none';
    zmaindevilish.style.display = 'inline';
    zmaindevilish.play();
  });
  zdevilishbtn.addEventListener('mouseleave', function () {
    zdummybtn.style.display = "inline";
    zbruiseboybtn.style.display = "inline";
    zstarfacebtn.style.display = "inline";
    z90sbtn.style.display = "inline";
    zpowerfreaksbtn.style.display = "inline";
    zclearbonesbtn.style.display = "inline";

    zmaindevilish.style.display = 'none';
    zmaindummy.style.display = 'inline';
    zmaindummy.play();
  });
  zdummybtn.addEventListener('mouseenter', function () {
    zbruiseboybtn.style.display = "none";
    zdevilishbtn.style.display = "none";
    zstarfacebtn.style.display = "none";
    z90sbtn.style.display = "none";
    zpowerfreaksbtn.style.display = "none";
    zclearbonesbtn.style.display = "none";

    zmainbruiseboy.style.display = 'none';
    zmaindevilish.style.display = 'none';
    zmainstarface.style.display = 'none';
    zmaingreen.style.display = 'none';
    zmainpower.style.display = 'none';
    zmainclear.style.display = 'none';
    zmaindummy.style.display = 'inline';
    zmaindummy.play();


  });
  zdummybtn.addEventListener('mouseleave', function () {
    zdevilishbtn.style.display = "inline";
    zbruiseboybtn.style.display = "inline";
    zstarfacebtn.style.display = "inline";
    z90sbtn.style.display = "inline";
    zpowerfreaksbtn.style.display = "inline";
    zclearbonesbtn.style.display = "inline";
  });




};





/*버튼에 마우스 올려놓으면 play와 크레딧 문구 추가 (showPlayButton) 및 제거 (hidePlayButton)*/
function showPlayButton() {
  let playButton = document.getElementById("zplayButton");
  let zcreditdummy = document.getElementById("zcreditdummy");
  playButton.style.display = "inline";
  zcreditdummy.style.display = "inline";
  $("#zcreditdummy").find("span").each(function(index, item){

    randomizeText($(item));
  })

  function randomizeText(id) {
    var inc = 0;
    var out = 0;
    var str = id.text();
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&#^+=-';
    var t;
    var end = false;
    var anim = function() {
      inc++;
      if (inc % 7 === 0 && out < str.length) {
        id.append(document.createTextNode(str[out]));
        out++;
      } else if (out >= str.length) {
        id.next().html('');
  
        clearInterval(t);
        end = true;
      }
      if (end == false) {
        id.next().html(chars[Math.floor(Math.random() * chars.length)]);
      }
    };
    t = setInterval(anim, 5);
    id.html('');
  };
}


function hidePlayButton() {
  let playButton = document.getElementById("zplayButton");
  let zcreditdummy = document.getElementById("zcreditdummy");
  playButton.style.display = "none";
  zcreditdummy.style.display = "none";
}

function showPlayButton2() {
  let playButton2 = document.getElementById("zplayButton2");
  let zcreditdummy2 = document.getElementById("zcreditdummy2");
  playButton2.style.display = "inline";
  zcreditdummy2.style.display = "inline";
  $("#zcreditdummy2").find("span").each(function(index, item){

    randomizeText($(item));
  })

  function randomizeText(id) {
    var inc = 0;
    var out = 0;
    var str = id.text();
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&#^+=-';
    var t;
    var end = false;
    var anim = function() {
      inc++;
      if (inc % 7 === 0 && out < str.length) {
        id.append(document.createTextNode(str[out]));
        out++;
      } else if (out >= str.length) {
        id.next().html('');
  
        clearInterval(t);
        end = true;
      }
      if (end == false) {
        id.next().html(chars[Math.floor(Math.random() * chars.length)]);
      }
    };
    t = setInterval(anim, 5);
    id.html('');
  };  
}
function hidePlayButton2() {
  let playButton2 = document.getElementById("zplayButton2");
  let zcreditdummy2 = document.getElementById("zcreditdummy2");
  playButton2.style.display = "none";
  zcreditdummy2.style.display = "none";
}
function showPlayButton3() {
  let playButton3 = document.getElementById("zplayButton3");
  let zcreditdummy3 = document.getElementById("zcreditdummy3");
  playButton3.style.display = "inline";
  zcreditdummy3.style.display = "inline";
  $("#zcreditdummy3").find("span").each(function(index, item){

    randomizeText($(item));
  })

  function randomizeText(id) {
    var inc = 0;
    var out = 0;
    var str = id.text();
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&#^+=-';
    var t;
    var end = false;
    var anim = function() {
      inc++;
      if (inc % 7 === 0 && out < str.length) {
        id.append(document.createTextNode(str[out]));
        out++;
      } else if (out >= str.length) {
        id.next().html('');
  
        clearInterval(t);
        end = true;
      }
      if (end == false) {
        id.next().html(chars[Math.floor(Math.random() * chars.length)]);
      }
    };
    t = setInterval(anim, 5);
    id.html('');
  };
}
function hidePlayButton3() {
  let playButton3 = document.getElementById("zplayButton3");
  let zcreditdummy3 = document.getElementById("zcreditdummy3");
  playButton3.style.display = "none";
  zcreditdummy3.style.display = "none";
}
function showPlayButton4() {
  let playButton4 = document.getElementById("zplayButton4");
  let zcreditdummy4 = document.getElementById("zcreditdummy4");
  playButton4.style.display = "inline";
  zcreditdummy4.style.display = "inline";
  $("#zcreditdummy4").find("span").each(function(index, item){

    randomizeText($(item));
  })

  function randomizeText(id) {
    var inc = 0;
    var out = 0;
    var str = id.text();
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&#^+=-';
    var t;
    var end = false;
    var anim = function() {
      inc++;
      if (inc % 7 === 0 && out < str.length) {
        id.append(document.createTextNode(str[out]));
        out++;
      } else if (out >= str.length) {
        id.next().html('');
  
        clearInterval(t);
        end = true;
      }
      if (end == false) {
        id.next().html(chars[Math.floor(Math.random() * chars.length)]);
      }
    };
    t = setInterval(anim, 5);
    id.html('');
  };
}
function hidePlayButton4() {
  let playButton4 = document.getElementById("zplayButton4");
  let zcreditdummy4 = document.getElementById("zcreditdummy4");
  playButton4.style.display = "none";
  zcreditdummy4.style.display = "none";
}
function showPlayButton5() {
  let playButton5 = document.getElementById("zplayButton5");
  let zcreditdummy5 = document.getElementById("zcreditdummy5");
  playButton5.style.display = "inline";
  zcreditdummy5.style.display = "inline";
  $("#zcreditdummy5").find("span").each(function(index, item){

    randomizeText($(item));
  })

  function randomizeText(id) {
    var inc = 0;
    var out = 0;
    var str = id.text();
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&#^+=-';
    var t;
    var end = false;
    var anim = function() {
      inc++;
      if (inc % 7 === 0 && out < str.length) {
        id.append(document.createTextNode(str[out]));
        out++;
      } else if (out >= str.length) {
        id.next().html('');
  
        clearInterval(t);
        end = true;
      }
      if (end == false) {
        id.next().html(chars[Math.floor(Math.random() * chars.length)]);
      }
    };
    t = setInterval(anim, 5);
    id.html('');
  };
}
function hidePlayButton5() {
  let playButton5 = document.getElementById("zplayButton5");
  let zcreditdummy5 = document.getElementById("zcreditdummy5");
  playButton5.style.display = "none";
  zcreditdummy5.style.display = "none";
}
function showPlayButton6() {
  let playButton6 = document.getElementById("zplayButton6");
  let zcreditdummy6 = document.getElementById("zcreditdummy6");
  playButton6.style.display = "inline";
  zcreditdummy6.style.display = "inline";
  $("#zcreditdummy6").find("span").each(function(index, item){

    randomizeText($(item));
  })

  function randomizeText(id) {
    var inc = 0;
    var out = 0;
    var str = id.text();
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&#^+=-';
    var t;
    var end = false;
    var anim = function() {
      inc++;
      if (inc % 7 === 0 && out < str.length) {
        id.append(document.createTextNode(str[out]));
        out++;
      } else if (out >= str.length) {
        id.next().html('');
  
        clearInterval(t);
        end = true;
      }
      if (end == false) {
        id.next().html(chars[Math.floor(Math.random() * chars.length)]);
      }
    };
    t = setInterval(anim, 5);
    id.html('');
  };
}
function hidePlayButton6() {
  let playButton6 = document.getElementById("zplayButton6");
  let zcreditdummy6 = document.getElementById("zcreditdummy6");
  playButton6.style.display = "none";
  zcreditdummy6.style.display = "none";
}
function showPlayButton7() {
  let playButton7 = document.getElementById("zplayButton7");
  let zcreditdummy7 = document.getElementById("zcreditdummy7");
  playButton7.style.display = "inline";
  zcreditdummy7.style.display = "inline";
  $("#zcreditdummy7").find("span").each(function(index, item){

    randomizeText($(item));
  })

  function randomizeText(id) {
    var inc = 0;
    var out = 0;
    var str = id.text();
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&#^+=-';
    var t;
    var end = false;
    var anim = function() {
      inc++;
      if (inc % 7 === 0 && out < str.length) {
        id.append(document.createTextNode(str[out]));
        out++;
      } else if (out >= str.length) {
        id.next().html('');
  
        clearInterval(t);
        end = true;
      }
      if (end == false) {
        id.next().html(chars[Math.floor(Math.random() * chars.length)]);
      }
    };
    t = setInterval(anim, 5);
    id.html('');
  };
}
function hidePlayButton7() {
  let playButton7 = document.getElementById("zplayButton7");
  let zcreditdummy7 = document.getElementById("zcreditdummy7");
  playButton7.style.display = "none";
  zcreditdummy7.style.display = "none";
}
/*크레딧 play 추가 끝 */















/* 버튼 호버 시 버튼 움직이기*/

var moveX = 0;
var moveY = 0;
var animationFrameId = null;

function showPlayButton11(event) {
  var playButton = document.getElementById('zplayButton');
  playButton.style.display = 'inline-block';

  // 마우스 커서의 좌표 가져오기
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  // 버튼의 중심 좌표 가져오기
  var button = document.getElementById('zdummybtn');
  var buttonRect = button.getBoundingClientRect();
  var buttonX = buttonRect.left + buttonRect.width / 2;
  var buttonY = buttonRect.top + buttonRect.height / 2;

  // 마우스와 버튼의 거리 계산
  var distanceX = mouseX - buttonX;
  var distanceY = mouseY - buttonY;

  // 거리를 제한하여 버튼을 이동시킬 값 계산
  moveX = Math.max(-50, Math.min(50, distanceX));
  moveY = Math.max(-50, Math.min(50, distanceY));

  // 애니메이션 시작
  if (!animationFrameId) {
    animateButton();
  }
}

function hidePlayButton11() {
  var playButton = document.getElementById('zplayButton');
  playButton.style.display = 'none';

  // 애니메이션 종료
  cancelAnimationFrame(animationFrameId);
  animationFrameId = null

  // 버튼 초기 위치로 되돌리기
  var button = document.getElementById('zdummybtn');
  button.style.transform = 'translate(0px, 0px)';
}

function animateButton() {
  var button = document.getElementById('zdummybtn');

  // 현재 버튼의 위치 가져오기
  var transformStyle = window.getComputedStyle(button).getPropertyValue('transform');
  var transformValues = transformStyle.split('(')[1].split(')')[0].split(',');
  var currentX = parseInt(transformValues[4].trim());
  var currentY = parseInt(transformValues[5].trim());

  // 목표 위치까지 이동
  var targetX = moveX;
  var targetY = moveY;
  var stepX = (targetX - currentX) / 15;
  var stepY = (targetY - currentY) / 15;

  stepX = Math.round(stepX * 20) / 10;
  stepY = Math.round(stepY * 20) / 10;

  // 버튼 이동
  button.style.transform = 'translate(' + (currentX + stepX) + 'px, ' + (currentY + stepY) + 'px)';

  // 애니메이션 계속 진행
  if (Math.abs(targetX - currentX) > 1 || Math.abs(targetY - currentY) > 1) {
    animationFrameId = requestAnimationFrame(animateButton);
  } else {
    animationFrameId = null;
  }
}



var moveX2 = 0;
var moveY2 = 0;
var animationFrameId2 = null;

function showPlayButton22(event) {
  var playButton = document.getElementById('zplayButton2');
  playButton.style.display = 'inline-block';

  var mouseX = event.clientX;
  var mouseY = event.clientY;

  var button = document.getElementById('zdevilishbtn');
  var buttonRect = button.getBoundingClientRect();
  var buttonX = buttonRect.left + buttonRect.width / 2;
  var buttonY = buttonRect.top + buttonRect.height / 2;

  var distanceX = mouseX - buttonX;
  var distanceY = mouseY - buttonY;

  moveX2 = Math.max(-50, Math.min(50, distanceX));
  moveY2 = Math.max(-50, Math.min(50, distanceY));

  if (!animationFrameId2) {
    animateButton2();
  }
}

function hidePlayButton22() {
  var playButton = document.getElementById('zplayButton2');
  playButton.style.display = 'none';

  cancelAnimationFrame(animationFrameId2);
  animationFrameId2 = null;

  var button = document.getElementById('zdevilishbtn');
  button.style.transform = 'translate(0px, 0px)';
}

function animateButton2() {
  var button = document.getElementById('zdevilishbtn');

  var transformStyle = window.getComputedStyle(button).getPropertyValue('transform');
  var transformValues = transformStyle.split('(')[1].split(')')[0].split(',');
  var currentX = parseInt(transformValues[4].trim());
  var currentY = parseInt(transformValues[5].trim());

  var targetX = moveX2;
  var targetY = moveY2;
  var stepX = (targetX - currentX) / 15;
  var stepY = (targetY - currentY) / 15;

  stepX = Math.round(stepX * 20) / 10;
  stepY = Math.round(stepY * 20) / 10;

  button.style.transform = 'translate(' + (currentX + stepX) + 'px, ' + (currentY + stepY) + 'px)';

  if (Math.abs(targetX - currentX) > 1 || Math.abs(targetY - currentY) > 1) {
    animationFrameId2 = requestAnimationFrame(animateButton2);
  } else {
    animationFrameId2 = null;
  }
}




var moveX3 = 0;
var moveY3 = 0;
var animationFrameId3 = null;

function showPlayButton33(event) {
  var playButton = document.getElementById('zplayButton3');
  playButton.style.display = 'inline-block';

  var mouseX = event.clientX;
  var mouseY = event.clientY;

  var button = document.getElementById('zstarfacebtn');
  var buttonRect = button.getBoundingClientRect();
  var buttonX = buttonRect.left + buttonRect.width / 2;
  var buttonY = buttonRect.top + buttonRect.height / 2;

  var distanceX = mouseX - buttonX;
  var distanceY = mouseY - buttonY;

  moveX3 = Math.max(-50, Math.min(50, distanceX));
  moveY3 = Math.max(-50, Math.min(50, distanceY));

  if (!animationFrameId3) {
    animateButton3();
  }
}

function hidePlayButton33() {
  var playButton = document.getElementById('zplayButton3');
  playButton.style.display = 'none';

  cancelAnimationFrame(animationFrameId3);
  animationFrameId3 = null;

  var button = document.getElementById('zstarfacebtn');
  button.style.transform = 'translate(0px, 0px)';
}

function animateButton3() {
  var button = document.getElementById('zstarfacebtn');

  var transformStyle = window.getComputedStyle(button).getPropertyValue('transform');
  var transformValues = transformStyle.split('(')[1].split(')')[0].split(',');
  var currentX = parseInt(transformValues[4].trim());
  var currentY = parseInt(transformValues[5].trim());

  var targetX = moveX3;
  var targetY = moveY3;
  var stepX = (targetX - currentX) / 15;
  var stepY = (targetY - currentY) / 15;

  stepX = Math.round(stepX * 20) / 10;
  stepY = Math.round(stepY * 20) / 10;

  button.style.transform = 'translate(' + (currentX + stepX) + 'px, ' + (currentY + stepY) + 'px)';

  if (Math.abs(targetX - currentX) > 1 || Math.abs(targetY - currentY) > 1) {
    animationFrameId3 = requestAnimationFrame(animateButton3);
  } else {
    animationFrameId3 = null;
  }
}

var moveX4 = 0;
var moveY4 = 0;
var animationFrameId4 = null;

function showPlayButton44(event) {
  var playButton = document.getElementById('zplayButton4');
  playButton.style.display = 'inline-block';

  var mouseX = event.clientX;
  var mouseY = event.clientY;

  var button = document.getElementById('z90sbtn');
  var buttonRect = button.getBoundingClientRect();
  var buttonX = buttonRect.left + buttonRect.width / 2;
  var buttonY = buttonRect.top + buttonRect.height / 2;

  var distanceX = mouseX - buttonX;
  var distanceY = mouseY - buttonY;

  moveX4 = Math.max(-50, Math.min(50, distanceX));
  moveY4 = Math.max(-50, Math.min(50, distanceY));

  if (!animationFrameId4) {
    animateButton4();
  }
}

function hidePlayButton44() {
  var playButton = document.getElementById('zplayButton4');
  playButton.style.display = 'none';

  cancelAnimationFrame(animationFrameId4);
  animationFrameId4 = null;

  var button = document.getElementById('z90sbtn');
  button.style.transform = 'translate(0px, 0px)';
}

function animateButton4() {
  var button = document.getElementById('z90sbtn');

  var transformStyle = window.getComputedStyle(button).getPropertyValue('transform');
  var transformValues = transformStyle.split('(')[1].split(')')[0].split(',');
  var currentX = parseInt(transformValues[4].trim());
  var currentY = parseInt(transformValues[5].trim());

  var targetX = moveX4;
  var targetY = moveY4;
  var stepX = (targetX - currentX) / 15;
  var stepY = (targetY - currentY) / 15;

  stepX = Math.round(stepX * 20) / 10;
  stepY = Math.round(stepY * 20) / 10;

  button.style.transform = 'translate(' + (currentX + stepX) + 'px, ' + (currentY + stepY) + 'px)';

  if (Math.abs(targetX - currentX) > 1 || Math.abs(targetY - currentY) > 1) {
    animationFrameId4 = requestAnimationFrame(animateButton4);
  } else {
    animationFrameId4 = null;
  }
}

var moveX5 = 0;
var moveY5 = 0;
var animationFrameId5 = null;

function showPlayButton55(event) {
  var playButton = document.getElementById('zplayButton5');
  playButton.style.display = 'inline-block';

  var mouseX = event.clientX;
  var mouseY = event.clientY;

  var button = document.getElementById('zpowerfreaksbtn');
  var buttonRect = button.getBoundingClientRect();
  var buttonX = buttonRect.left + buttonRect.width / 2;
  var buttonY = buttonRect.top + buttonRect.height / 2;

  var distanceX = mouseX - buttonX;
  var distanceY = mouseY - buttonY;

  moveX5 = Math.max(-50, Math.min(50, distanceX));
  moveY5 = Math.max(-50, Math.min(50, distanceY));

  if (!animationFrameId5) {
    animateButton5();
  }
}

function hidePlayButton55() {
  var playButton = document.getElementById('zplayButton5');
  playButton.style.display = 'none';

  cancelAnimationFrame(animationFrameId5);
  animationFrameId5 = null;

  var button = document.getElementById('zpowerfreaksbtn');
  button.style.transform = 'translate(0px, 0px)';
}

function animateButton5() {
  var button = document.getElementById('zpowerfreaksbtn');

  var transformStyle = window.getComputedStyle(button).getPropertyValue('transform');
  var transformValues = transformStyle.split('(')[1].split(')')[0].split(',');
  var currentX = parseInt(transformValues[4].trim());
  var currentY = parseInt(transformValues[5].trim());

  var targetX = moveX5;
  var targetY = moveY5;
  var stepX = (targetX - currentX) / 15;
  var stepY = (targetY - currentY) / 15;

  stepX = Math.round(stepX * 20) / 10;
  stepY = Math.round(stepY * 20) / 10;

  button.style.transform = 'translate(' + (currentX + stepX) + 'px, ' + (currentY + stepY) + 'px)';

  if (Math.abs(targetX - currentX) > 1 || Math.abs(targetY - currentY) > 1) {
    animationFrameId5 = requestAnimationFrame(animateButton5);
  } else {
    animationFrameId5 = null;
  }
}
var moveX6 = 0;
var moveY6 = 0;
var animationFrameId6 = null;

function showPlayButton66(event) {
  var playButton = document.getElementById('zplayButton6');
  playButton.style.display = 'inline-block';

  var mouseX = event.clientX;
  var mouseY = event.clientY;

  var button = document.getElementById('zclearbonesbtn');
  var buttonRect = button.getBoundingClientRect();
  var buttonX = buttonRect.left + buttonRect.width / 2;
  var buttonY = buttonRect.top + buttonRect.height / 2;

  var distanceX = mouseX - buttonX;
  var distanceY = mouseY - buttonY;

  moveX6 = Math.max(-50, Math.min(50, distanceX));
  moveY6 = Math.max(-50, Math.min(50, distanceY));

  if (!animationFrameId6) {
    animateButton6();
  }
}

function hidePlayButton66() {
  var playButton = document.getElementById('zplayButton6');
  playButton.style.display = 'none';

  cancelAnimationFrame(animationFrameId6);
  animationFrameId6 = null;

  var button = document.getElementById('zclearbonesbtn');
  button.style.transform = 'translate(0px, 0px)';
}

function animateButton6() {
  var button = document.getElementById('zclearbonesbtn');

  var transformStyle = window.getComputedStyle(button).getPropertyValue('transform');
  var transformValues = transformStyle.split('(')[1].split(')')[0].split(',');
  var currentX = parseInt(transformValues[4].trim());
  var currentY = parseInt(transformValues[5].trim());

  var targetX = moveX6;
  var targetY = moveY6;
  var stepX = (targetX - currentX) / 15;
  var stepY = (targetY - currentY) / 15;

  stepX = Math.round(stepX * 20) / 10;
  stepY = Math.round(stepY * 20) / 10;

  button.style.transform = 'translate(' + (currentX + stepX) + 'px, ' + (currentY + stepY) + 'px)';

  if (Math.abs(targetX - currentX) > 1 || Math.abs(targetY - currentY) > 1) {
    animationFrameId6 = requestAnimationFrame(animateButton6);
  } else {
    animationFrameId6 = null;
  }
}



var moveX7 = 0;
var moveY7 = 0;
var animationFrameId7 = null;

function showPlayButton77(event) {
  var playButton = document.getElementById('zplayButton7');
  playButton.style.display = 'inline-block';

  var mouseX = event.clientX;
  var mouseY = event.clientY;

  var button = document.getElementById('zbruiseboybtn');
  var buttonRect = button.getBoundingClientRect();
  var buttonX = buttonRect.left + buttonRect.width / 2;
  var buttonY = buttonRect.top + buttonRect.height / 2;

  var distanceX = mouseX - buttonX;
  var distanceY = mouseY - buttonY;

  moveX7 = Math.max(-50, Math.min(50, distanceX));
  moveY7 = Math.max(-50, Math.min(50, distanceY));

  if (!animationFrameId7) {
    animateButton7();
  }
}

function hidePlayButton77() {
  var playButton = document.getElementById('zplayButton7');
  playButton.style.display = 'none';

  cancelAnimationFrame(animationFrameId7);
  animationFrameId7 = null;

  var button = document.getElementById('zbruiseboybtn');
  button.style.transform = 'translate(0px, 0px)';
}

function animateButton7() {
  var button = document.getElementById('zbruiseboybtn');

  var transformStyle = window.getComputedStyle(button).getPropertyValue('transform');
  var transformValues = transformStyle.split('(')[1].split(')')[0].split(',');
  var currentX = parseInt(transformValues[4].trim());
  var currentY = parseInt(transformValues[5].trim());

  var targetX = moveX7;
  var targetY = moveY7;
  var stepX = (targetX - currentX) / 15;
  var stepY = (targetY - currentY) / 15;

  stepX = Math.round(stepX * 20) / 10;
  stepY = Math.round(stepY * 20) / 10;

  button.style.transform = 'translate(' + (currentX + stepX) + 'px, ' + (currentY + stepY) + 'px)';

  if (Math.abs(targetX - currentX) > 1 || Math.abs(targetY - currentY) > 1) {
    animationFrameId7 = requestAnimationFrame(animateButton7);
  } else {
    animationFrameId7 = null;
  }
}

/* 버튼 호버 시 버튼 움직이기 끝*/





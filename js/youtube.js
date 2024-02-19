
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      function onYouTubeIframeAPIReady() {
        new YT.Player('player', {
            videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 ID
            playerVars: {
                autoplay: true,
                loop: true,
                playlist: 'An6LvWQuj_8' //반복 재생할 유튜브 영상 ID목록
            },
          events: {
            onReady: function (event) {
              event.target.mute() //음소거
            }
          }
        });
};

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

//유튜브 영역 아이콘 애니메이션 효과
function floatingObject(selector, delay, size) { 
  gsap.to(selector, random(1.5, 2.5), {
      y: size,
      repeat: -1, //무한반복
      yoyo: true, //한번 재생된 애니메이션을 다시 뒤로 재생한다.
      ease: Power1.easeInOut,
      delay: random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);
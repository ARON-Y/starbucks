// visual 영역

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        opacity: 1,
        delay: (index + 1) * 0.7
    });
    // gsap.to(애니메이션 요소, 지속시간, 옵션);
});

// notice 영역
//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: "vertical",
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container', {
    // direction: "horizontal" 작성 필요 없음, 기본값
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백 10px만큼 떨어질 것이라는 뜻
    centeredSlides: true, // 1번 슬라이드가 가운데에 보이기
    loop: true,
    autoplay: {
        delay: 5000, //5초
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지번호 요소 선택자
        clickable: true, //사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next',
    },
});

// awards 영역의 swiper
new Swiper('.awards .swiper-container', {
    // direction: "horizontal"  기본값
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: ".awards .swiper-prev",
        nextEl: ".awards .swiper-next"
    }
});


const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
    isHidePromotion = !isHidePromotion;
    //isHidePromotion의 반댓값(!)으로 시작해주세요. let isHidePromotion = false; 이므로 true로 시작한다.
    // 특정 변수의 값을 지속적으로 반대값으로 전환시켜 줄 수 있는 코드
    if (isHidePromotion) {
        //숨김 처리
        promotionEl.classList.add("hide");
    } else {
        //보임 처리
        promotionEl.classList.remove('hide');
      }
});

//scroll magic
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정
            triggerHook: 0.8 //감시하고 있는 요소가 0.8이라는 뷰포트 지점에 걸리면 실행이 된다. 내가 감시하고 있는 요소가 뷰포트의 어떤 지점에서 감시되었다는 것을 판단할 것인가 라는 것을 지정해 주는 옵션. 브라우저의 최상단이 0 최하단이 1, 중간지점은 0.5
        })
        .setClassToggle(spyEl, "show")
        .addTo(new ScrollMagic.Controller());
});


// footer copyright
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();


//페이지의 최상단으로 이동할 수 있는 애니메이션

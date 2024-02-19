//header
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

// window.addEventListener('scroll', function () {
//     console.log('scroll!');
// });

window.addEventListener('scroll', _.throttle(function () {
        console.log(window.scrollY);
        if (window.scrollY > 500) {
            //배지 숨기기
            // badgeEl.style.display = 'none';
            // gsap.to(애니메이션 요소, 지속시간, 옵션);
            gsap.to(badgeEl, 0.6, {
                opacity: 0,
                display: 'none'
            });

            // to top 버튼 보이기
            gsap.to(toTopEl, 0.2, {
                x: 0 // X축값으로 0px 이동시키겠다.
            });
        } else {
            // 배지 보이기
            // badgeEl.style.display = 'block';
            gsap.to(badgeEl, 0.6, {
                opacity: 1,
                display: 'block'
            });
            //to top 버튼 숨기기
             gsap.to(toTopEl, 0.2, {
                 x: 100, // X축값으로 100px(양수라 우측) 이동시키겠다.
             });
        }
    }, 300)
);
/* _.throttle(함수, 시간) */

const toTopEl = document.querySelector("#to-top");
toTopEl.addEventListener("click", function () {
    gsap.to(window, .7, { // 페이지가 출력되고 있는 window 화면 그 자체를, 0.7초 동안,
        scrollTo: 0 // scroll의 위치를 0px 지점으로 옮겨주겠다.
    })
});
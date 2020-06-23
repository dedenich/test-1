var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

const pagSpanCur = document.createElement('span');
pagSpanCur.classList.add('swiper-pagination-index', 'current');
pagSpanCur.setAttribute('id', 'currInd')
pagSpanCur.textContent = `0${mySwiper.activeIndex+1}`;
const pagSpanTotal = document.createElement('span');
pagSpanTotal.classList.add('swiper-pagination-index', 'total');
pagSpanTotal.textContent = `0${mySwiper.slides.length}`;
document.getElementById('pag').append(pagSpanCur, pagSpanTotal);

mySwiper.on('slideChange', () => {
  document.getElementById('currInd').textContent=`0${mySwiper.activeIndex+1}`;
  document.getElementById('body').classList.toggle('second-slide');
});

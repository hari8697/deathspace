var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  zoom: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar"
  // }
});

const po = $(".popup");
const close = $(".popup .close-wrapper");
const ports = $(".images img");
const tl3 = new TimelineMax();

tl3.set(po, {
  opacity: 0
});

ports.on("click", function() {
  mySwiper.updateSlides();

  var $this = $(this);
  if ($this.index() === 0 || $this.is(":nth-child(1)")) {
    mySwiper.activeIndex = 0;
    mySwiper.update();
  }
  if ($this.index() === 1 || $this.is(":nth-child(2)")) {
    mySwiper.activeIndex = 1;
    mySwiper.update();
  }
  if ($this.index() === 2 || $this.is(":nth-child(3)")) {
    mySwiper.activeIndex = 2;
    mySwiper.update();
  }
  if ($this.index() === 3 || $this.is(":nth-child(4)")) {
    mySwiper.activeIndex = 3;
    mySwiper.update();
  }
  if ($this.index() === 4 || $this.is(":nth-child(5)")) {
    mySwiper.activeIndex = 4;
    mySwiper.update();
  }
  if ($this.index() === 5 || $this.is(":nth-child(6)")) {
    mySwiper.activeIndex = 5;
    mySwiper.update();
  }

  tl3.to(po, 0.5, {
    opacity: 1,
    "pointer-events": "all"
  });
});

close.on("click", function() {
  tl3.to(po, 0.5, {
    opacity: 0,
    "pointer-events": "none"
  });
});

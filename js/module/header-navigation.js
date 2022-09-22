export default {
  methods: {
    openHamburger(e) {
      $(".hamburger").toggleClass("active");
      $(".naviga").toggleClass("active");
      $(".naviga a").removeClass("active");
    },
  },
  template: `<div class="box">
  <a class="logo" href="https://www.abfunds.com.tw/" title="聯博投信" target="_blank">
      <img src="images/logo.png" class="img-fluid">
  </a>
  <nav class="naviga">
      <a class="js-scroll-to" href="index.html" data-js-scroll-to="sectionOne">債券觀點</a>
      <a class="js-scroll-to" href="index.html" data-js-scroll-to="sectionTwo"
          onclick="gtag('event', 'click', {'event_category' : 'button','event_label' : '看影音長知識'});">看影音長知識</a>
      <a class="js-scroll-to" href="index.html" data-js-scroll-to="sectionThree"
          onclick="gtag('event', 'click', {'event_category' : 'button','event_label' : '看圖說故事'});">看圖說故事</a>
      <a class="js-scroll-to" href="index.html" data-js-scroll-to="sectionFour"
          onclick="gtag('event', 'click', {'event_category' : 'button','event_label' : '主題投資'});">主題投資</a>
  </nav>

  <div class="hamburger" @click="openHamburger">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
  </div>
</div>`,
};

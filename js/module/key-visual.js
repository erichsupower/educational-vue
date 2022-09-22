export default {
  data() {
    return {
      subTitle: "聯博非投資等級債券101",
      unitOne: {
        title: "淺談非投資等級債券與投資等級債券",
        img: "./images/unit/01/kv.jpg",
      },
      unitTwo: {
        title: "非投資等級債券的機會與風險",
        img: "./images/unit/02/kv.jpg",
      },
      unitThree: {
        title: "如何挑選非投資等級債券基金",
        img: "./images/unit/03/kv.jpg",
      },
    };
  },
  methods: {
    pathname() {
      return location.pathname;
    },
  },
  template: `
    <div v-if="pathname() === '/artical/unit_01.html'">
      <img :src="unitOne.img" :alt="unitOne.title">
      <div class="titleBox">
          <div class="seviceName">{{ subTitle }}</div>
          <h1>{{ unitOne.title }}</h1>
      </div>
    </div>

    <div v-if="pathname() === '/artical/unit_02.html'">
      <img :src="unitTwo.img" :alt="unitTwo.title">
      <div class="titleBox">
          <div class="seviceName">{{ subTitle }}</div>
          <h1>{{ unitTwo.title }}</h1>
      </div>
    </div>

    <div v-if="pathname() === '/artical/unit_03.html'">
    <img :src="unitThree.img" :alt="unitThree.title">
    <div class="titleBox">
        <div class="seviceName">{{ subTitle }}</div>
        <h1>{{ unitThree.title }}</h1>
    </div>
  </div>`,
};

import { reactive, onMounted } from "vue";

export default {
  setup() {
    const datas = reactive({
      writings: "",
    });

    onMounted(() => {
      axios
        .get("./data/interest.json")
        .then(function (response) {
          // 存放興趣文章
          let x = [];
          // 設定最大興趣文章數量
          let max = 3;
          //計數器
          let n = 1;

          for (let i = 0; i < response.data.article.length; i++) {
            let y = i + 1;

            if (parseInt(articleNum) !== y && n < max) {
              x.push(response.data.article[i]);
              n++;
            }
          }
          datas.writings = x;
        })
        .catch(function (response) {
          console.log(response);
        });
    });
    return { datas };
  },
  template: `
    <article v-for="item in datas.writings">
        <a :href="item.link" :id="item.id" :data-artical="articalNum">
            <img :src="item.image" :alt="item.title">
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
        </a>
    </article>`,
};

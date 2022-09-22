import { reactive, onMounted } from "vue";

export default {
  setup() {
    const datas = reactive({
      writings: "",
    });

    onMounted(() => {
      axios
        .get("./data/unit.json")
        .then(function (response) {
          datas.writings = response.data.article[0];
        })
        .catch(function (response) {
          console.log(response);
        });
    });
    return { datas };
  },
  template: `
  <div class="breadcrumbs">
      <a class="articalLink backHome" href="index.html">回首頁</a>
  </div>
  
  <p>{{ datas.writings.pOne }}</p>

  <p>{{ datas.writings.pTwo }}</p>

  <p>{{ datas.writings.pThree }}</p>

  <div class="table-responsive">
      <table class="styleBase">
          <thead>
              <tr>
                  <th></th>
                  <th>標準普爾</th>
                  <th>穆迪</th>
                  <th>信用評等涵義</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td rowspan="4" class="vertical bgWhite"><span>投資等級</span></td>
                  <td>AAA</td>
                  <td>Aaa</td>
                  <td class="textLeft">信貸品質最高，信用風險最低</td>
              </tr>
              <tr>
                  <td>AA</td>
                  <td>Aa</td>
                  <td class="textLeft">信貸品質最高，信用風險極低</td>
              </tr>
              <tr>
                  <td>A</td>
                  <td>A</td>
                  <td class="textLeft">信貸品質中上，信用風險較低</td>
              </tr>
              <tr class="underBorder">
                  <td>BBB</td>
                  <td>Baa</td>
                  <td class="textLeft">信用風險中等</td>
              </tr>
              <tr>
                  <td rowspan="6" class="vertical bgWhite"><span class="vertical">非投資等級</span></td>
                  <td>BB</td>
                  <td>Ba</td>
                  <td class="textLeft">信用風險較高</td>
              </tr>
              <tr>
                  <td>B</td>
                  <td>B</td>
                  <td class="textLeft">信用風險高</td>
              </tr>
              <tr>
                  <td>CCC</td>
                  <td>Caa</td>
                  <td class="textLeft">信用風險極高</td>
              </tr>
              <tr>
                  <td>CC</td>
                  <td rowspan="2">Ca</td>
                  <td rowspan="2" class="textLeft">違約可能性高</td>
              </tr>
              <tr>
                  <td class="bgWhite">C</td>
              </tr>
              <tr class="underBorder">
                  <td class="bgGary">D</td>
                  <td class="bgGary">C</td>
                  <td class="textLeft bgGary">已經違約或通常會違約，且收回本息的機會微乎其微</td>
              </tr>
          </tbody>
      </table>
  </div>

    
  <p>{{ datas.writings.pFour }}</p>

  <p>{{ datas.writings.pFive }}</p>

  <div class="image-responsive" id="fltScroll50">
      <h4>非投資等級債券中，仍有較高票息但違約風險較低的標的<br>
          <span>2002~2021 年間不同評級債券平均違約率</span>
      </h4>
      <img class="mobile" src="images/unit/01/chart_1_m.jpg" alt="">
      <img class="pc" src="images/unit/01/chart_1.jpg" alt="" style="max-width: 481px;">
  </div>

  <blockquote>{{ datas.writings.pSix }}</blockquote>


  <p>{{ datas.writings.pSeven }}</p>

  <div class="image-responsive" data-gtm="透過專業經理團隊縝密分析，掌握機會，監控風險">
      <h4>透過專業經理團隊縝密分析，掌握機會，監控風險</h4>
      <img class="mobile" src="images/unit/01/chart_2_m.jpg" alt="">
      <img class="pc" src="images/unit/01/chart_2.jpg" alt="" style="max-width: 641px;">
  </div>

  <p>{{ datas.writings.pEight }}</p>

  <blockquote>{{ datas.writings.pNine}} </blockquote>`,
};

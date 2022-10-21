export default {
    methods: {
        openHamburger(e) {
            alert("Get it!");
        },
    },
    template: `
    <div>
        <a href="https://www.abfunds.com.tw/" title="聯博投信" target="_blank">
            <img src="https://www.abfunds.com.tw/apac/tw/resources/images/logo-big.jpg">
        </a>
        <nav @click="openHamburger">
            <a href="index.html">債券觀點</a>
        </nav>
    </div>`,
};

import { createApp } from "vue";

import HeaderNavigation from "../js/module/header-navigation.js";
import KeyVisual from "../js/module/key-visual.js";
import FooterSocial from "../js/module/footer-social.js";
import FooterNote from "../js/module/footer-note.js";
import ArticalContent from "../js/module/artical-content.js";
import articalInterest from "./module/artical-interest.js";

createApp(HeaderNavigation).mount("#header");
createApp(KeyVisual).mount("#kv");
createApp(FooterSocial).mount("#social");
createApp(FooterNote).mount("#footer");
createApp(ArticalContent).mount("#articalContent");
createApp(articalInterest).mount("#articalInterest");

// Load vue.js
import { createApp } from "vue";

// Load custom vue module
import HeaderNavigation from "../js/module/header-navigation.js";

// use custom vue module
createApp(HeaderNavigation).mount("#header");

import Vue from "vue";
import Button from "./button";
import Icon from "./Icon";
import ButtonGroup from "./button-group";
import Input from "./input";
import Row from "./row";
import Col from "./col";
import Layout from "./layout";
import Header from "./header";
import Sider from "./sider";
import Content from "./content";
import Footer from "./footer";
import Toast from "./toast";
import plugin from "./plugin";
import Tabs from "./tabs";
import TabsHead from "./tabs-head";
import TabsBody from "./tabs-body";
import TabsItem from "./tabs-item";
import TabsPane from "./tabs-pane";
import Popover from "./popover";
import Collapse from "./collapse";
import CollapseItem from "./collapse-item";

Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-input", Input);
Vue.component("g-row", Row);
Vue.component("g-col", Col);
Vue.component("g-layout", Layout);
Vue.component("g-header", Header);
Vue.component("g-sider", Sider);
Vue.component("g-content", Content);
Vue.component("g-footer", Footer);
Vue.component("g-toast", Toast);
Vue.use(plugin);
Vue.component("g-tabs", Tabs);
Vue.component("g-tabs-head", TabsHead);
Vue.component("g-tabs-body", TabsBody);
Vue.component("g-tabs-item", TabsItem);
Vue.component("g-tabs-pane", TabsPane);
Vue.component("g-popover", Popover);
Vue.component("g-collapse", Collapse);
Vue.component("g-collapse-item", CollapseItem);

new Vue({
  el: "#app",
  data: {
    selectedTab: ["1", "2"],
  },
  created() {},
  methods: {
    yyy() {
      console.log("yyy");
    },
    showToast1() {
      this.showToast("top");
    },
    showToast2() {
      this.showToast("middle");
    },
    showToast3() {
      this.showToast("bottom");
    },
    showToast(position) {
      this.$toast(
        `您的当前战斗力为 ${parseInt(Math.random() * 100)},变强请氪金`,
        {
          position,
          enableHtml: false,
          closeButton: {
            text: "已氪金",
            callback() {
              console.log("他已经氪金了");
            },
          },
          autoClose: 3,
        }
      );
    },
  },
});

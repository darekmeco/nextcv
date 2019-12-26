<template>
  <div class="main-container">
    <a-row type="flex" justify="center" class="main-content">
      <a-col :span="16" class="left-sider">
        <a-row>
          <a-col>
            <div class="info">
              <h1 class="name">Dariusz Męciński</h1>
              <h2 class="job">Programmer</h2>
            </div>
          </a-col>
        </a-row>
        <a-row>
          <a-col>
            <a-list
              :data-source="main"
              :grid="{ gutter: 16, column: 2 }"
              item-layout="horizontal"
            >
              <a-list-item slot="renderItem" slot-scope="item">
                <a-icon type="android" /> {{ item.title }}
              </a-list-item>
            </a-list>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="14">
            <h2>My time</h2>
          </a-col>
          <a-col :span="10"> </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <h2>
              <fa :icon="fas.faBriefcase" />
              Education
            </h2>
            <a-list :data-source="listData" item-layout="vertical" size="large">
              <div slot="footer"><b>ant design vue</b> footer part</div>
              <a-list-item slot="renderItem" key="item.title" slot-scope="item">
                <template v-for="{ type, text } in actions" slot="actions">
                  <span :key="type">
                    <a-icon :type="type" style="margin-right: 8px" />
                    {{ text }}
                  </span>
                </template>
                <a-list-item-meta :description="item.description">
                  <a slot="title" :href="item.href">{{ item.title }}</a>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-col>
          <a-col :span="10"> </a-col>
        </a-row>
        <a-row>
          <a-col :span="14">
            <h2>Experience</h2>
          </a-col>
          <a-col :span="10"> </a-col>
        </a-row>
      </a-col>
      <a-col :span="8" class="right-sider">
        <a-row>
          <a-col>
            <logo></logo>
          </a-col>
        </a-row>
        <a-row>
          <a-col class="technologies">
            <technologies></technologies>
          </a-col>
        </a-row>
        <a-row>
          <a-col>
            <h2>My time</h2>
            <time-chart></time-chart>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import { fas } from "@fortawesome/free-solid-svg-icons";
import TimeChart from "../components/TimeChart/TimeChart.js";
import Technologies from "../components/Technologies.vue";
import Logo from "../components/Logo.vue";

const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: "https://www.antdv.com/",
    title: `ant design vue part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}

export default
@Component({
  components: {
    TimeChart,
    Technologies,
    Logo
  },
  methods: {}
})
class Index extends Vue {
  data() {
    return {
      listData,
      actions: [
        { type: "star-o", text: "156" },
        { type: "like-o", text: "156" },
        { type: "message", text: "2" }
      ]
    };
  }

  get main() {
    return this.$store.state.mainData.main;
  }

  get fas() {
    return fas;
  }
}
</script>

<style lang="scss">
h2 {
  text-decoration: none;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

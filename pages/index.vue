<template>
  <div class="main-container" v-if="loaded">
    <a-row type="flex" justify="center" class="main-content">
      <a-col :span="9" class="left-sider">
        <a-row>
          <a-col>
            <div class="info">
              <h1 class="name">
                {{ mainData.firstname }} {{ mainData.lastname }}
              </h1>
              <h2 class="job">{{ mainData.position }}</h2>
            </div>
          </a-col>
        </a-row>
        <a-row>
          <a-col>
            <a-list
              :data-source="mainData.contact_data"
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
          <a-col :span="24">
            <h2>Experience</h2>
            <a-list
              :data-source="mainData.experiences"
              item-layout="vertical"
              size="large"
              v-if="true"
            >
              <div slot="footer"><b>ant design vue</b> footer part</div>
              <a-list-item slot="renderItem" key="item.id" slot-scope="item">
                <template v-for="{ type, text } in actions" slot="actions">
                  <span :key="type">
                    <a-icon :type="type" style="margin-right: 8px" />
                    {{ text }}
                  </span>
                </template>
                <a-list-item-meta>
                  <div slot="description">
                    <h4>{{ item.company_name }}</h4>
                    <div v-html="md.render(item.description)"></div>
                  </div>

                  <div slot="title" :href="item.href">
                    <a-row type="flex" justify="start">
                      <a-col :span="14">
                        {{ item.position }}
                      </a-col>
                      <a-col :span="10" :push="0">
                        <a-button size="small" icon="calendar" ghost>
                          {{ item.start }}
                          - {{ item.end }}
                        </a-button>
                        <a-button size="small" icon="calendar" ghost>
                          {{ item.place }}
                        </a-button>
                      </a-col>
                    </a-row>
                  </div>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-col>
          <a-col :span="10"> </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <h2>
              <fa :icon="fas.faBriefcase" />
              Education
            </h2>
            <a-list
              :data-source="mainData.educations"
              item-layout="vertical"
              size="large"
              v-if="true"
            >
              <div slot="footer"><b>ant design vue</b> footer part</div>
              <a-list-item slot="renderItem" key="item.id" slot-scope="item">
                <template v-for="{ type, text } in actions" slot="actions">
                  <span :key="type">
                    <a-icon :type="type" style="margin-right: 8px" />
                    {{ text }}
                  </span>
                </template>
                <a-list-item-meta :description="item.description">
                  <a slot="title" :href="item.href">{{ item.course }}</a>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-col>
          <a-col :span="10"> </a-col>
        </a-row>
      </a-col>
      <a-col :span="5" class="right-sider">
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
            <social-links></social-links>
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
import MarkdownIt from "markdown-it";

import TimeChart from "../components/TimeChart/TimeChart.js";
import SocialLinks from "../components/SocialLinks/SocialLinks.js";
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
    SocialLinks,
    Technologies,
    Logo
  },
  methods: {}
})
class Index extends Vue {
  loaded = false;
  data() {
    return {
      md: null,
      listData,
      findMyData: [
        "Racing car sprays burning fuel into crowd.",
        "Japanese princess to wed commoner.",
        "Australian walks 100km after outback crash.",
        "Man charged over missing wedding girl.",
        "Los Angeles battles huge wildfires."
      ],
      actions: [
        { type: "star-o", text: "156" },
        { type: "like-o", text: "156" },
        { type: "message", text: "2" }
      ]
    };
  }

  get mainData() {
    return this.$store.state.mainData.resume;
  }

  get fas() {
    return fas;
  }

  async mounted() {
    await this.$store.dispatch("mainData/getMainData");
    this.md = new MarkdownIt();
    this.loaded = true;
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

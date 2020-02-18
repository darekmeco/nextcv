<template>
  <div v-if="loaded" class="main-container">
    <a-row type="flex" justify="center" class="main-content">
      <a-col
        :xxl="{ span: 9 }"
        :xl="{ span: 17 }"
        :lg="{ span: 15 }"
        :md="{ span: 12 }"
        :sm="{ span: 24 }"
        class="left-sider"
      >
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
                <a-button
                  type="primary"
                  shape="circle"
                  :icon="item.icon"
                  size="small"
                ></a-button>
                {{ item.title }}
              </a-list-item>
            </a-list>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <h2>
              <a-icon type="laptop" />
              Experience
            </h2>
            <a-list
              v-if="true"
              :data-source="mainData.experiences"
              item-layout="vertical"
              size="large"
            >
              <a-list-item slot="renderItem" key="item.id" slot-scope="item">
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
                      <a-col
                        :span="10"
                        :push="0"
                        :style="{ textAlign: 'right' }"
                      >
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
              <a-icon type="audit" />
              Education
            </h2>
            <a-list
              v-if="true"
              :data-source="mainData.educations"
              item-layout="vertical"
              size="large"
            >
              <a-list-item slot="renderItem" key="item.id" slot-scope="item">
                <a-list-item-meta :description="item.description">
                  <div slot="description">
                    <h4>{{ item.school_name }}</h4>
                  </div>
                  <div slot="title">
                    <a-row type="flex" justify="start">
                      <a-col :span="14">
                        {{ item.course }}
                      </a-col>
                      <a-col
                        :span="10"
                        :push="0"
                        :style="{ textAlign: 'right' }"
                      >
                        <a-button size="small" icon="calendar" ghost>
                          {{ item.start }}
                          - {{ item.end }}
                        </a-button>
                        <a-button size="small" icon="environment" ghost>
                          {{ item.place }}
                        </a-button>
                        <span>
                          <a-button
                            size="small"
                            icon="environment"
                            @click="openModal(get(item, 'diploma.url', null))"
                            ghost
                          >
                            Diploma
                          </a-button>
                        </span>
                      </a-col>
                    </a-row>
                  </div>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-col>
          <a-col :span="10"> </a-col>
        </a-row>
      </a-col>
      <a-col
        :xxl="{ span: 5 }"
        :xl="{ span: 7 }"
        :lg="{ span: 9 }"
        :md="{ span: 12 }"
        :sm="{ span: 24 }"
        class="right-sider"
      >
        <a-row>
          <a-col>
            <logo></logo>
          </a-col>
        </a-row>
        <a-row>
          <a-col class="">
            <skills title="Current technologies" current></skills>
          </a-col>
        </a-row>
        <a-row>
          <a-col class="">
            <skills title="Used technologies" :current="false"></skills>
          </a-col>
        </a-row>
        <a-row>
          <a-col>
            <social-links></social-links>
          </a-col>
        </a-row>
        <a-row>
          <a-col>
            <portfolio title="This project"></portfolio>
          </a-col>
        </a-row>
        <a-row>
          <a-col>
            <passions></passions>
          </a-col>
        </a-row>
        <a-row>
          <a-col>
            <time-chart></time-chart>
          </a-col>
        </a-row>
        <a-row>
          <a-col>
            <languages></languages>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-modal width="80%" title="" v-model="visible" @ok="visible = false">
      <img :src="modalImage" />
    </a-modal>
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import { fas } from "@fortawesome/free-solid-svg-icons";
import MarkdownIt from "markdown-it";
import _get from "lodash/get";
import TimeChart from "../components/TimeChart/TimeChart.js";
import SocialLinks from "../components/SocialLinks/SocialLinks.js";
import Languages from "../components/Languages/Languages.js";
import Portfolio from "../components/Portfolio/Portfolio.js";
import Skills from "../components/Skills/Skills.js";
import Passions from "../components/Passions/Passions.js";
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
    Skills,
    Logo,
    Portfolio,
    Languages,
    Passions
  },
  methods: {}
})
class Index extends Vue {
  loaded = false;
  data() {
    return {
      get: _get,
      modalImage: null,
      visible: false,
      md: null,
      listData,
      findMyData: [
        "Racing car sprays burning fuel into crowd.",
        "Japanese princess to wed commoner.",
        "Australian walks 100km after outback crash.",
        "Man charged over missing wedding girl.",
        "Los Angeles battles huge wildfires."
      ]
    };
  }

  openModal(url) {
    this.visible = true;
    this.modalImage = url;
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

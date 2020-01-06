import { Component, Vue, Prop } from "vue-property-decorator";
import Template from "./Portfolio.html";

export default
@Template
@Component({})
class Portfolio extends Vue {
  @Prop({ type: String, default: "My projects" }) title;
  get myData() {
    return this.$store.state.mainData.resume.portfolios;
  }

  redirectToUrl(row) {
    window.open(row.url, "_blank");
  }

  data() {
    return {};
  }
}

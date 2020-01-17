import { Component, Vue, Prop } from "vue-property-decorator";
import Template from "./Skills.html";

export default
@Template
@Component({})
class Skills extends Vue {
  @Prop({ type: String, default: "My skills" }) title;
  get myData() {
    return [...this.$store.state.mainData.resume.skills].sort(
      () => Math.random() - 0.5
    );
  }

  redirectToUrl(row) {
    window.open(row.url, "_blank");
  }

  data() {
    return {};
  }
}

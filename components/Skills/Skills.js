import { Component, Vue, Prop } from "vue-property-decorator";
import Template from "./Skills.html";

export default
@Template
@Component({})
class Skills extends Vue {
  @Prop({ type: String, default: "My skills" }) title;
  @Prop({ type: Boolean, default: true }) current;
  get myData() {
    return [...this.$store.state.mainData.resume.skills].sort(
      () => Math.random() - 0.5
    );
  }

  get myCurrentData() {
    return this.myData.filter(r => r.current === true);
  }

  get myUsedData() {
    return this.myData.filter(r => r.current === false);
  }

  get displayData() {
    return this.current ? this.myCurrentData : this.myUsedData;
  }

  redirectToUrl(row) {
    window.open(row.url, "_blank");
  }

  data() {
    return {};
  }
}

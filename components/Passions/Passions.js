import { Component, Vue } from "vue-property-decorator";
import Template from "./Passions.html";

export default
@Template
@Component({})
class Passions extends Vue {
  get myData() {
    return this.$store.state.mainData.resume.passions;
  }

  redirectToUrl(row) {
    window.open(row.url, "_blank");
  }

  data() {
    return {};
  }
}

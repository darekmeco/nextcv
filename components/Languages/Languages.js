import { Component, Vue } from "vue-property-decorator";
import Template from "./Languages.html";

export default
@Template
@Component({})
class Languages extends Vue {
  get myData() {
    return this.$store.state.mainData.resume.languages;
  }

  data() {
    return {};
  }
}

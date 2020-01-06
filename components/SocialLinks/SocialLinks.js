import { Component, Vue } from "vue-property-decorator";
import Template from "./SocialLinks.html";

export default
@Template
@Component({})
class SocialLinks extends Vue {
  get myData() {
    return this.$store.state.mainData.resume.social_links;
  }

  redirectToUrl(row) {
    window.open(row.url, "_blank");
  }

  data() {
    return {};
  }
}

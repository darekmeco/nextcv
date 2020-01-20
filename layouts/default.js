import "@/assets/scss/main.scss";
import { Component, Vue } from "vue-property-decorator";
import Template from "./default.html";
// import AuthMixin from "~/mixins/auth";

export default
@Template
@Component({
  components: {},
  methods: {},
  mixins: []
})
class Index extends Vue {
  visible = true;

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  }

  data() {
    return {};
  }

  handleSubmit() {
    this.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const authData = await this.$axios.$post(
            process.env.apiUrl + "/auth/local",
            {
              identifier: values.userName,
              password: values.password
            }
          );
          if (authData.jwt && authData.user) {
            localStorage.setItem("auth", JSON.stringify(authData));
            this.$store.commit("auth/setAuthState", authData);
          }
        } catch (e) {
          console.log(e.response);
          this.$message.error(e.response.data.error);
        }
      } else {
        console.log(err);
      }
    });
  }

  async handleLogout() {
    await this.$store.commit("auth/removeAuthState");
  }

  /**
   * Computed string returning login status depending on current
   * authentication state from auth-module.
   *
   * @returns {string}
   */
  get loggedInStatus() {
    return this.$store.state.auth.loggedIn ? "Logged In" : "Guest";
  }

  mounted() {}
}

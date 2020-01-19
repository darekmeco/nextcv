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
    console.log("submit");
    this.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const authData = await this.$axios.$post(
          process.env.apiUrl+"/auth/local",
          {
            identifier: values.userName,
            password: values.password
          }
        );

        if (authData.jwt && authData.user) {
          localStorage.setItem("auth", JSON.stringify(authData));
          this.$store.commit("auth/setAuthState", authData);
        }
        console.log("AuthData: ", authData);
      }
    });
  }

  async handleLogout() {
    console.log(1);
    await this.$store.commit("auth/removeAuthState");
    console.log(4);
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

  mounted() {
    this.$message.info("Hello...");
  }
}

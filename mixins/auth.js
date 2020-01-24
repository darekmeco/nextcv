import { Component, Vue } from "vue-property-decorator";

export default
@Component
class AuthMixin extends Vue {
  /**
   * This define if login got an error
   * @type {boolean}
   */
  loginHasError = false;

  /**
   * Logout method using auth-module with custom post-request
   * logic, using toast module to show information, success
   * and error messages.
   *
   * @returns {Promise<void>}
   */
  logout() {
    this.$message.info("Logging out...");
    this.$auth.$storage.setState("user", null);
    return Promise.resolve();
  }

  /**
   * Login method using auth-module with custom post-request
   * logic, using toast module to show information, success
   * and error messages.
   *
   * @returns {Promise<T>}
   */
  async login() {
    this.$message.info("Log in...");
    await this.$auth
      .login({
        data: {
          identifier: this.username,
          password: this.password
        }
      })
      .then(() => {
        this.$message.success("Successfully connected");
      })
      .catch(err => {
        this.$message.error("Please provide your username or your e-mail");
        this.loginHasError = true;
      });
  }
}

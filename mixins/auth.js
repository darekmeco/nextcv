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
    console.log(this.$auth);
    this.$auth.$storage.setState("user", null);
    // this.$auth.setToken(this.$state.strategy, false);
    // this.$auth.setRefreshToken(this.$state.strategy, false);
    return Promise.resolve();
    // await this.$auth.reset();
    // await this.$auth
    //   .logout()
    //   .then(() => {
    //     this.$message.success("Successfully disconnected");
    //   })
    //   .catch(err => {
    //     this.$message.error("Error while disconnecting: " + err.message);
    //   });

    // If you are not fond of using axios promises on async calls
    // You can still use Javascript try and catch block
    //
    // try {
    //   this.$toast.show('Logging out...')
    //   await this.$auth.logout()
    //   this.$toast.success('Successfully disconnected')
    // } catch (err) {
    //   this.$toast.error('Error while disconnecting: ' + err.message)
    // }
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
        console.log(err);
        this.$message.error("Please provide your username or your e-mail");
        this.loginHasError = true;
      });
  }
}

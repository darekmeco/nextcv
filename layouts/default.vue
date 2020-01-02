<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <a-row type="flex">
        <a-col :span="2" :order="1">
          <div class="logo" />
        </a-col>
        <a-col :span="20" :order="2">
          <a-menu
            theme="dark"
            mode="horizontal"
            :default-selected-keys="['2']"
            :style="{ float: 'left', lineHeight: '64px' }"
          >
            <a-menu-item key="1">nav 1</a-menu-item>
            <a-menu-item key="2">nav 2</a-menu-item>
            <a-menu-item key="3">nav 3</a-menu-item>
          </a-menu>
        </a-col>
        <a-col :span="2" :order="3">
          {{ loggedInStatus }}
          <a-button
            v-if="$store.state.auth.loggedIn"
            type="link"
            icon="logout"
            size="small"
            @click="handleLogout"
          />
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content
      :style="{ padding: '0 150px', width: '1440px', margin: '0 auto' }"
    >
      <div v-if="$store.state.auth.loggedIn">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <nuxt></nuxt>
      </div>
    </a-layout-content>
    <a-modal
      v-if="!$store.state.auth.loggedIn"
      v-model="visible"
      title="Logowanie"
    >
      <template slot="footer">
        <a-button @click="visible = false">Anuluj</a-button>
        <a-button @click="handleSubmit">
          Zaloguj
        </a-button>
      </template>
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
      >
        <a-form-item>
          <a-input
            v-decorator="[
              'userName',
              {
                rules: [
                  { required: true, message: 'Please input your username!' }
                ]
              }
            ]"
            placeholder="Username"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your Password!' }
                ]
              }
            ]"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true
              }
            ]"
          >
            Remember me
          </a-checkbox>
          <a class="login-form-forgot" href="">
            Forgot password
          </a>
        </a-form-item>
      </a-form>
    </a-modal>
    <a-layout-footer style="text-align: center">
      NextCV ©2019 Created by D.
    </a-layout-footer>
  </a-layout>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import Cookie from "js-cookie";
import AuthMixin from "~/mixins/auth";

export default
@Component({
  components: {},
  methods: {},
  mixins: [AuthMixin],
  middleware: ["auth"]
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
          "http://localhost:1337/auth/local",
          {
            identifier: values.userName,
            password: values.password
          }
        );

        if (authData.jwt && authData.user) {
          localStorage.setItem("auth", JSON.stringify(authData));
        }
        console.log("AuthData: ", authData);
      }
    });
  }

  handleLogout() {
    localStorage.clear();
    Cookie.remove("auth._refresh_token.local");
    Cookie.remove("auth._token.local");
    Cookie.remove("auth.strategy");
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
</script>
<style lang="scss">
$dark: #1f2426;
$gray: #4b5859;
$blueGray: #293e41;
$lightestBlue: #b4dad7;
$lightBlue: #519ca4;
$blue: #2196a7;
$darkBlue: #307982;
$darkestBlue: #215961;
$darkest-blue: #1a237e;
$darker-blue: #283593;
$dark-blue: #303f9f;
$medium-blue: #3949ab;
$light-blue: #3f51b5;
$lighter-blue: #5c6bc0;
$lightest-blue: #9fa8da;
$white: #ffffff;
$black: #0e1442;
$orange: #ffb300;
$yellow: #fdd835;
$dark-pink: #ad1457;
$light-pink: #d81b60;

body {
  background-color: white;
  color: $lightestBlue;
  font-family: "Open Sans", Helvetica;
  font-weight: 300;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: $lightestBlue;
  font-family: "Open Sans", Helvetica;
  font-weight: 300;
}

h3 {
  transition-duration: 0.3s;
  margin-top: 0;
  i {
    color: $darker-blue;
    background: $orange;
    width: 42px;
    height: 42px;
    font-size: 20px;
    line-height: 42px;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    margin-right: 8px;
    transition-duration: 0.3s;
  }
}

.ant-layout {
  background-color: white;
  .main-container {
    background-color: #f0f2f5;
    background-repeat: no-repeat;
    .left-sider {
      padding: 24px 24px 0 24px;
      background-color: $dark;
    }
    .right-sider {
      padding: 24px 24px;
      background-color: #f0f2f5;
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: $dark;
        font-weight: 400;
      }
    }
  }
}
.ant-list {
  color: $lightestBlue;
  .ant-list-item-action {
    > li {
      color: $lightestBlue;
    }
  }
  .ant-list-item-meta-description {
    color: $lightestBlue;
  }
  .ant-list-item-meta-title {
    > a {
      color: $lightestBlue;
    }
  }
}
.technologies {
  text-align: center;
  .ant-tag {
    color: $dark;
    border-radius: 0px;
    font-weight: 400;
  }
}

#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  float: left;
}

#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>

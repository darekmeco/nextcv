require("dotenv").config();
module.exports = {
  mode: "spa",
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    apiUrl: process.env.API_URL || "http://localhost:3001"
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Muli:400,300,600,700&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    {
      src: "@/assets/less/colors.less",
      lang: "less"
    },
    {
      src: "ant-design-vue/dist/antd.less",
      lang: "less"
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/antd-ui", "@/plugins/auth.js", "@/plugins/mainData.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    // Doc: https://github.com/nuxt-community/stylelint-module
    "@nuxtjs/stylelint-module",
    "@nuxtjs/dotenv"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          }
        ]
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias.vue = "vue/dist/vue.common";
      config.module.rules.push({
        test: /\.html$/,
        use: "vue-template-loader",
        exclude: /app.template.html/
      });
    },
    loaders: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#20bd67",
          "component-background": "#ffffff"
        }
      }
    }
  }
};

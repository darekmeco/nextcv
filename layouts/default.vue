<template>
<<<<<<< HEAD
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider breakpoint="lg" collapsed-width="0" width="300">
      <a-avatar src="https://picsum.photos/id/237/200/300" />
      <a-menu :defaultSelectedKeys="['4']" theme="dark" mode="inline">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span class="nav-text">nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span class="nav-text">nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="user" />
          <span class="nav-text">nav 4</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <nuxt />
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
=======
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-content
      :style="{ padding: '0 150px', width: '1200px', margin: '0 auto' }"
    >
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <a-row type="flex" justify="center" class="main-content">
          <a-col :span="6" :push="18">col-18 col-push-6</a-col>
          <a-col :span="18" :pull="6">
            <a-row>
              <a-col>
                <div class="info">
                  <h1 class="name">Naomi Weatherford</h1>
                  <h2 class="job">Frontend Web Designer</h2>
                </div>
              </a-col>
            </a-row>
            <a-row>
              <a-col>
                <a-list
                  :dataSource="data"
                  :grid="{ gutter: 16, column: 2 }"
                  item-layout="horizontal"
                >
                  <a-list-item slot="renderItem" slot-scope="item">
                    <a-icon type="android" /> {{ item.title }}
                  </a-list-item>
                </a-list>
              </a-col>
            </a-row>
            <a-row>
              <a-col>
                <h3>Mój dzień</h3>
                <canvas id="myChart" width="400" height="400"></canvas>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      NextCV ©2019 Created by D.
    </a-layout-footer>
>>>>>>> 9f614469cfafb28e5092c4f765fe560af360e729
  </a-layout>
</template>
<script>
import Chart from "chart.js";
const data = [
  {
    title: "Ant Design Title 1"
  },
  {
    title: "Ant Design Title 2"
  },
  {
    title: "Ant Design Title 3"
  },
  {
    title: "Ant Design Title 4"
  }
];
export default {
  data() {
    return {
      data
    };
  },
  mounted() {
    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
    console.log(myChart);
  }
};
</script>
<style>
body {
  font-family: "Montserrat", sans-serif;
}
#components-layout-demo-top .main-content {
  background-image: url("~assets/backcv.png");
  background-repeat: no-repeat;
}
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>

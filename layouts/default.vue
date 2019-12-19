<template>
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

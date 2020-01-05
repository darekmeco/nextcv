import { Component, Vue } from "vue-property-decorator";
import Chart from "chart.js";
import WithRender from "./TimeChart.html";

export default
@WithRender
@Component({
  // template: `<div>time<canvas id="myChart" width="400" height="400"></canvas></div>`
  // template: withRender
})
class TimeChart extends Vue {
  chart = null;
  get myTimeData() {
    return this.$store.state.mainData.resume.my_time;
  }

  beforeDestroy() {
    console.log("beforeDestroy");
    if (this.chart) {
      // this.chart.destroy();
      this.chart = null;
    }
  }

  data() {
    return {};
  }

  mounted() {
    const ctx = document.getElementById("myChart");
    this.chart = new Chart(ctx, {
      type: "doughnut",
      data: this.myTimeData,
      options: {
        legend: {
          display: true,
          position: "right"
        },
        tooltips: {
          enabled: true,
          intersect: false
        }
      }
    });
  }
}

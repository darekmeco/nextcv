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
    const data = this.$store.state.mainData.resume.user_times;
    return {
      datasets: [
        {
          data: data.map(r => r.percentage),
          backgroundColor: data.map(r => r.color)
        }
      ]
    };
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

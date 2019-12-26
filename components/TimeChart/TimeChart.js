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
  get myTimeData() {
    return this.$store.state.mainData.myTime;
  }

  mounted() {
    const ctx = document.getElementById("myChart");
    (() =>
      new Chart(ctx, {
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
      }))();
  }
}

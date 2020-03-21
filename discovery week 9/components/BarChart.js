import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  data: function () {
    return {
      datacollection: {
        labels: ["1900", "1950", "1999", "2050"],
        datasets: [
          {
            label: "Africa",
            backgroundColor: "#3e95cd",
            data: [133,221,783,2478]
          }, {
            label: "Europe",
            backgroundColor: "#8e5ea2",
            data: [408,547,675,734]
          }
        ]
    },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Predicted world population (millions) in 2050'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
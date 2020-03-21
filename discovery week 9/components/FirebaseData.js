import { Bubble } from 'vue-chartjs'
import database from '../firebase.js'

export default {
  extends: Bubble,
  data: function () {
    return {
        datacollection: {
            datasets: []
        },
        options: {
            title: {
              display: true,
              text: 'GDP, happiness and population'
            }, 
            scales: {
              yAxes: [{ 
                scaleLabel: {
                  display: true,
                  labelString: "Happiness"
                }
              }],
              xAxes: [{ 
                scaleLabel: {
                  display: true,
                  labelString: "GDP (PPP)"
                }
              }]
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
      database.collection('countries').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
          var bubble = {
            label: [doc.data().label],
            backgroundColor: [doc.data().backgroundColor],
            borderColor: [doc.data().borderColor],
             data: [{
               x: doc.data().data.r,
               y: doc.data().data.x,
               r: doc.data().data.y
             }]
           }
        this.datacollection.datasets.push(bubble)
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}
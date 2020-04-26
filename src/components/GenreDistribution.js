import Chart from 'chart.js'
import { h } from 'hyperapp'

export default (props) =>
    h('div', {id: 'genre'}, [
        h('h2', {}, 'Distribution by genre'),
        h('canvas', {
            oncreate: (element) => {
                const ctx = element.getContext('2d')
                const c = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: props.labels,
                        datasets: [{
                            data: props.data,
                            backgroundColor: ['#0000FF', '#26619C', '#79F8F8', '#1E7FCB', '#1E7FCB', '#A9EAFE', '#3A8EBA', '#686F8C', '#5472AE', '#0095B6', '#26C4EC', '#0F9DE8', '#17657D', '#77B5FE', '#22427C', '#00CCCB', '#24445C', '#008080', '#26C4EC']
                        }]
                    },
                    options: {
                        title: {
                            display: false,
                            fontsize: 14,
                        },
                        responsive: true,
                        legend: {
                            display : true,
                            position : 'left'
                        }
                    }
                })
                props.registerChart(c)
            }
        })
    ])

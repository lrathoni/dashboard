import Chart from 'chart.js'
import { h } from 'hyperapp'

export default (props) =>
    h('div', {id: 'genre'}, [
        h('h2', {}, 'Genre'),
        h('canvas', {
            oncreate: (element) => {
                const ctx = element.getContext('2d')
                const c = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: props.labels,
                        datasets: [{
                            data: props.data,
                            backgroundColor: ['blue', 'green', 'red', 'yellow', 'purple', 'pink']
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

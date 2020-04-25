import Chart from 'chart.js'
import { h } from 'hyperapp'

export default (props) =>
    h('div', {id: 'year'}, [
        h('canvas', {
            oncreate: (element) => {
                const ctx = element.getContext('2d')
                const chart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['1960\'s', '1970\'s', '1980\'s', '1990\'s', '2000\'s', '2010\'s', '2020\'s', 'Undefined Year'],
                        datasets: props.datasets,
                    },
                    options: {
                        title: {
                            display: true,
                            fontsize: 20,
                            text: 'Distibution by years (AxisX) and Vote (AxisY)',
                        },
                        responsive : true,
                        legend: {
                            display:  false,
                            position : 'right'
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    suggestedMin: -1,
                                    suggestedMax: 10
                                }
                            }]
                        }
                    }
                })
                chart.canvas.style.height = 400  + 'px'
                chart.canvas.style.width = 600 + 'px'
                props.registerChart2(chart)
            }
        })
    ])

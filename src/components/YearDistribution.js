import Chart from 'chart.js'
import { h } from 'hyperapp'

export default (props) =>
    h('div', {class: 'year'}, [
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
                            fontsize: 14,
                            text: 'Distibution by years',
                        },
                        responsive : true,
                        legend: {
                            display:  false,
                            position : 'right'
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    suggestedMin: 0,
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

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
                        labels: props.label,
                        datasets: props.datasets
                        // [{
                        //     label : props.datasets.label,
                        //     data : props.datasets.data,
                        //     backgroundColor: props.datasets.backgroundColor
                        // }]
                    },
                    options: {
                        title: {
                            display: true,
                            fontsize: 14,
                            text: props.title,
                        },
                        responsive : true,
                        legend: {
                            display:  true,
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
                chart.canvas.style.height = props.height  + 'px'
                chart.canvas.style.width = props.width + 'px'
            }
        }, console.log('Dis moi que tu passes par la stp'))
    ])

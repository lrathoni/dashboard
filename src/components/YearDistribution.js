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
                        labels: props.labels,
                        datasets: [{
                            label : props.data.title.map(item => item.title),
                            data : props.data.year.map(item => item.year),
                            backgroundColor: ['purple']
                        }]
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
                        }
                    }
                })
                chart.canvas.style.height = props.height  + 'px'
                chart.canvas.style.width = props.width + 'px'
            }
        }, console.log('Dis moi que tu passes par la stp'))
    ])

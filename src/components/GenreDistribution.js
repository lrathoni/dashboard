import Chart from 'chart.js'
import { h } from 'hyperapp'

export default (props) =>
    h('div', {class: 'genre'}, [
        h('canvas', {
            oncreate: (element) => {
                const ctx = element.getContext('2d')
                const c = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: props.labels,
                        datasets: [{
                            data: props.data,
                            backgroundColor: ['blue', 'green','red','yellow', 'purple', 'pink']
                        }]
                    },
                    options: {
                    	title: {
				            display: true,
				            fontsize: 14,
				            text: props.title,
				        },
				        responsive: true,
				        legend: {
				        	display : true,
                            position : 'left'
				        }
                    }
                })
                c.canvas.style.height = 400 + 'px'
                c.canvas.style.width = 800 + 'px'
                // si une fonction de callback est passé en paramètres de mes props alors je l'exécute

            }
        })
    ])

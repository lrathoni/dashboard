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
                            data: props.data
                        }]
                    },
                    responsive: true
                })
                c.canvas.style.height = 600 + 'px'
                c.canvas.style.width = 1200 + 'px'
                // si une fonction de callback est passé en paramètres de mes props alors je l'exécute

            }
        })
    ])
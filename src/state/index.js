export default {
    Director: {
        id:'',
        name: '',
        films: [],
        bio:'',
        birthday:'',
        genreSort: [
        ]
    },
    directorsList:[
        {
            name: 'James Cameron',
            id: 2710
        },
        {
            name: 'Wes Anderson',
            id: 5655
        },
        {
            name: 'Michael Bay',
            id: 865
        },
        {
            name: 'Luc Besson',
            id: 59
        },
        {
            name: 'Danny Boyle',
            id: 2034
        },
        {
            name: 'Christopher Nolan',
            id: 525
        },
        {
            name:'Stanley Kubrick',
            id: 240
        },
        {
            name: 'David Lynch',
            id: 5602
        },
        {
            name: 'David Fincher',
            id: 7467
        },
        {
            name: 'Jean-Luc Godard',
            id: 3776
        },
        {
            name: 'Peter Jackson',
            id:108
        }
    ],
    dataYear : {
        labels: ['1960\'s', '1970\'s', '1980\'s', '1990\'s', '2000\'s', '2010\'s', '2020\'s'],
        datasets: [{label: '', data : [0, 0, 0, 0, 0, 0, 0], backgroundColor: ['blue', 'green', 'red', 'yellow', 'purple', 'pink']}],
        title: 'Distibution by years',
        width: 600,
        height: 400
    }
}

export default {
    getGenre : (props) => {
        let genre = 'genre : '
        if (props.length > 1) {
            genre = 'genres : '
            for (let i = 0; i < props.length - 1; i++) {
                genre += props[i] + ', '
            }
        }
        genre += props[props.length - 1]
        return genre
    }
}

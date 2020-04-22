export default () => state => {
    for(let i = 0; i < state.Director.films.length; i++){
        //stock the index of the min in Array
        let min = i
        for(let j = i + 1; j < state.Director.films.length; j++){
            if(state.Director.films.vote[j] < state.Director.films.vote[min]){
            // Update index if inf value is found
                min = j
            }
        }
        const tmp = state.Director.films[i]
        state.Director.films[i] = state.Director.films[min]
        state.Director.films[min] = tmp
    }
    return state.Director.films
}

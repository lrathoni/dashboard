export default (filmArray) => {
    for(let i = 0; i < filmArray.length; i++){
        //stock the index of the min in Array
        let min = i
        for(let j = i + 1; j < filmArray.length; j++){
            if(filmArray[j] < filmArray[min]){
            // Update index if inf value is found
                min = j
            }
        }
        const tmp = filmArray[i]
        filmArray[i] = filmArray[min]
        filmArray[min] = tmp
    }
    return filmArray
}

export default{
    onInputChange: (event) => state => {
        state.Director.name = event.target.value
        state.directorsList.map(item =>{
        	if(item.name === state.Director.name){
        		state.Director.id = item.id
        	}
        })
      },
}

import axios from 'axios'

export default{
    onInputChange: (event) => state => {
        state.Director.name = event.target.value
        state.directorsList.map(item =>{
        	if(item.name === state.Director.name){
        		state.Director.id = item.id
        	}
        })
        const info = axios.get('https://api.themoviedb.org/3/person/'+ state.Director.id+'?api_key=f88f1caf38ec9a3acf3d6c51b4bf9820&language=en-US').then(response =>{
        	state.Director.bio = response.data.biography
        	state.Director.birthday = response.data.birthday
        })
      },
    getInformation: ()=> state => {
    	

    }

}

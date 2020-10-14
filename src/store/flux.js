const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            pokemonList:[]
		},
		actions: {
			fetchPokemones: async () =>{

                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                const response = await fetch(
                    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
                    config
                );

                const json = await response.json();
                console.log('--json--', json);


                setStore({ pokemonList: json.results })
            }
		}
	};
};

export default getState;

import React, { useContext } from 'react';
import { Context } from '../store/appContext';

import Cards from './Cards';
// HOOKS = useContext()

const List = () =>{

    const { store, actions } = useContext(Context);

    return(
        <>
            <button onClick={ ()=>actions.fetchPokemones() }>Fetch Pokemones</button>
         
            {
                store.pokemonList.map( (item, index)=>( <Cards key={index} data={item} /> )
                )
            }
         
        </>
    )

}

export default List;
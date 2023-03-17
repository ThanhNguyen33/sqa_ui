import { Component, createEffect } from 'solid-js';
import * as api from "../../../api/traffic";

const Home : Component = () => {
    
    createEffect(() => {
        api.getQueryWithCredential('products')
        .then(res => {
            console.log(res); 
        })
    })

    return (
        <div>
        </div>
    )
}

export default Home;
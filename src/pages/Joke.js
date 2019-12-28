import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../API';
import store from '../store/Store';


function Joke() {
    let category = store.getState();
    console.log(category.Category)

    const [dropdownchoice, setdropdownchoice] = useState(category.Category);
    const [joke, setJoke] = useState("My random joke goes here and will be replaced with redux.");
    const [delivery, setDelivery] = useState("")
    const [history, setHistory] = useState(category.History)

    const changeCategory = (e) => {
        setdropdownchoice(e.target.value);
        let newChoice = e.target.value;
        console.log(newChoice);
        if (e.target.value === 'Random') {
            store.dispatch({ type: 'RANDOM', data: 'Random' });
        } else if (e.target.value === 'Miscellaneous') {
            store.dispatch({ type: 'MISC', data: 'Miscellaneous' });
        } else if (e.target.value === 'Programming') {
            store.dispatch({ type: 'PROGRAMMING', data: 'Programming' });
        } else if (e.target.value === 'Dark') {
            store.dispatch({ type: 'DARK', data: 'Dark' });
        } else {
            store.dispatch({ type: 'RANDOM', data: 'Random' });
        }
        API.search(e.target.value).then((res) => {
            console.log(res)
            let jokeholder = res.data.joke || res.data.setup;
            setJoke(jokeholder)
            setDelivery(res.data.delivery || "")
        })
    }


    const newJoke = () => {
        API.search(category.Category).then((res) => {
            console.log(res)
            console.log(res.status)
            if (res === null || undefined) { return alert("ERRRRORs") };
            console.log(res)
            let jokeholder = res.data.joke || res.data.setup;
            setJoke(jokeholder)
            setDelivery(res.data.delivery || "")
            console.log(joke);
            let addJoke = {}
            if (res.data.joke) {
                addJoke.joke = res.data.joke;
            } else {
                addJoke.setup = res.data.setup;
                addJoke.delivery = res.data.delivery
            }
            setHistory(addJoke);
        });
    }
    return (
        <>
            <div className="jumbotron">
                <Link to='/'><h1 className="jokeheader">Joke Generator</h1></Link>
                <p className="jokeaterisk">* Limited to 25 req per minute</p>
            </div>
            <form action="#" onChange={(e) => changeCategory(e)}>
                <div class="select-box">
                    <label for="select-box1" class="label select-box1"><span class="label-desc">{dropdownchoice}</span> </label>
                    <select id="select-box1" class="select">
                        <option value="Programming">Programming</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                        <option value="Dark">Dark</option>
                        <option value="Random">Random</option>
                    </select>

                </div>

            </form>
            <center>
                <div className="jokecontent">
                    <h4 className='theJoke'> {joke}</h4>
                    <h4 className='theJoke'> {delivery}</h4>
                    <button onClick={newJoke}>Show me more!</button>
                </div>
            </center>
            {/* <div className="history">
                history div
                {history.map(item => <p>{item.joke}</p>)}
                {aliases.map(item => <li>{item}</li>)} 

            </div> */}
        </>
    )
}
export default Joke
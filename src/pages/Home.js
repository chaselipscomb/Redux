import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import store from '../store/Store';

function Home() {
    const [category, setCategory] = useState('Header');
    return (
        <>
            <Link to='/joke' onClick={() => store.dispatch({ type: 'PROGRAMMING', data: 'Programming' })} onMouseOver={(e) => setCategory("Programming")}><img className='categoryPictures' src='https://edgy.app/wp-content/uploads/2018/08/programming-FI-970x648.jpg' alt='category {category}' /></Link>
            <Link to='/joke' onClick={() => store.dispatch({ type: 'MISC', data: 'Miscellaneous' })} onMouseOver={(e) => setCategory("Miscellaneous")}><img className='categoryPictures' src='https://static.vecteezy.com/system/resources/previews/000/060/334/non_2x/white-miscellaneous-icon-vector-pack.jpg' alt='category {category}' /></Link>
            <div className='homeCategory'>
                <h1 className='homeText'>{category}</h1>
            </div>
            <Link to='/joke' onClick={() => store.dispatch({ type: 'DARK', data: 'Dark' })} onMouseOver={(e) => setCategory("Dark Humor")}><img className='categoryPictures' src='https://buzznigeria.com/wp-content/uploads/2015/03/funny-e1430403378808-640x400.jpg' alt='category {category}' /></Link>
            <Link to='/joke' onClick={() => store.dispatch({ type: 'RANDOM', data: 'Random' })} onMouseOver={(e) => setCategory("Random Joke")}><img className='categoryPictures' src='https://vrzkj25a871bpq7t1ugcgmn9-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/numpy-random-choice_featured-image.png' alt='category {category}' /></Link>
        </>
    )
}

export default Home
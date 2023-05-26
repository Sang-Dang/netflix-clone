import React from 'react'
import Featured from '../../components/Featured/Featured'
import FilmContainer from '../../containers/FilmContainer/FilmContainer'
import './App.css'

const Main:React.FC = () => {
    return (
        <main id='main'>
            <Featured imageURL='https://tv-fanatic-res.cloudinary.com/iu/s--lIb91Gdt--/f_auto,q_auto/v1676450336/picard-season-3-key-art-star-trek-picard' title='Star trek Picard' description='Set at the end of the 24th century, 18 years after the events of Star Trek: Nemesis, with Sir Patrick Stewart reprising his iconic role, Star Trek: Picard revolves around retired admiral Jean-Luc Picard. He is still deeply affected by the loss of Lieutenant Commander Data, portrayed by Brent Spiner, and the destruction of Romulus, and steps into the next chapter of his life.'/>
            <FilmContainer/>
        </main>
    );
}

export default Main;
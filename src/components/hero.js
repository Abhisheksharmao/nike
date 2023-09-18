import React, { useEffect } from 'react'
import "./css/hero.css"
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Hero() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    })
    return (
        <div>
            <div className="par_tem">
                <h1>FRESH</h1>
                <div className="par">
                    <div className="on" data-aos="fade-up">
                        <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww&w=1000&q=80" alt="" width="600px" height="600px" />
                        <input type="button" value="shop" />
                    </div>
                    <div className="of" data-aos="fade-up">
                        <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg" alt="" width="500px" height="600px" />
                        <input type="button" value="shop" />
                    </div>
                </div>
            </div>

            <div className="leo" data-aos="fade-up">
                <h2>Just In </h2>
                <img src="./images/sh.png" alt="ima" width="100% 100%"/>
                <h1>EASY ALL DAY</h1>
                <p>Take your game to next level in KD 16</p>
            </div>

            <div className="prev_tem" data-aos="fade-up">
                <h2>Don't Miss</h2>
                <img src="./images/jr.png" alt="ima" width="100% 100%" />
                <p>Jordan Apperal</p>
                <h1>BROOKLYN EFLECE</h1>

            </div>
        </div>
    )
}

import React from 'react'
import "./css/one.css";

export default function Navbar() {
    return (
        <div>
            {/* top nav */}
            <div className="top">
                <a href="/"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png" alt="" width="20px" height="20px" /></a>
                <div className="cont">
                    <ul>
                        <li><a href="/">Find a Store |</a></li>
                        <li><a href="/">Help |</a></li>
                        <li><a href="/">Join Us |</a></li>
                        <li><a href="/">Sign in </a></li>
                    </ul>
                </div>
            </div>
            {/* 2nd nav */}
            <div className="container">
                <a href="/"><img src="https://static.vecteezy.com/system/resources/thumbnails/010/994/232/small/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" alt="" width="50px" height="50px" /></a>
                <div className="hero">
                    <ul>
                        <li>New & Featured</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li><input type="search" name="searc" id="searc" placeholder='search' /></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

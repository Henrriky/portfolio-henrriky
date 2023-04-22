import React, { useState } from 'react'
import './scrollup.css'

function ScrollUp() {

    const [showScroll, setShowScroll] = useState(false);

    window.addEventListener("scroll", function() {
        const scrollY = this.scrollY;
        if(scrollY > 560) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    })

    return (
        <a href="#" className={showScroll ? "scrollup show-scroll" : "scrollup"}>
            <i className="uil uil-arrow-up scrollup__icon">
            </i>
        </a>
    )
}

export default ScrollUp
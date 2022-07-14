import React from "react";
import './Page404.css'

const NoPage = () => {
    return(
        <>
            <section className="notFound">
                <div className="img">
                </div>
                <div className="text">
                <h2>404</h2>
                <h2>PAGE NOT FOUND</h2>
                <h3>وَلَا تُصَعِّرْ خَدَّكَ لِلنَّاسِ وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا إِنَّ اللَّهَ لَايُحِبُّ كُلَّ مُخْتَالٍ فَخُورٍ</h3>
                <h3>BACK TO HOME?</h3>
                <a href="/" className="yes">YES</a>
                </div>
            </section>
        </>
    )
}

export default NoPage;
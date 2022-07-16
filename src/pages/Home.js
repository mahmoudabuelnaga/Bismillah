import React, { Component } from "react";
import Background from "../components/Background";
import ArkanIslam from "../components/ArkanIslam";
import Radio from "../components/Radio";
import AsmaHousnaComponent from "../components/AsmaHousnaComponent";
import Quran from "../components/Quran";
import Footer from "../components/Footer";

class Home extends Component{
    state = {
        data: ['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6']
    }

      
    render(){
        return(
            <>
                <div id="preloder">
                    <div className="loader"></div>
                </div>
                {/* <Header /> */}
                <Background />
                <ArkanIslam />
                <Radio />
                <AsmaHousnaComponent />
                <Quran />
                {/* <section className="countdown spad set-bg" data-setbg="assets/img/countdown-bg.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            </div>
                        </div>
                    </div>
                </section> */}
                
                <Footer />
            </>
        )
    }
}

export default Home;
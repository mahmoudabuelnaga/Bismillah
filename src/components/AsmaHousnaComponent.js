import axios from "axios";
import React from "react";
import AsmaHousna from "./AsmaHousna";
import { Button } from 'antd';
import 'antd/dist/antd.css';

class AsmaHousnaComponent extends React.Component {
    state = {
        data : []
    }
    async componentDidMount(){
      try{
        await axios.get(`https://quran-bismillah-api.herokuapp.com/asmaalhusna/api/?format=json`)
        .then(response => {
            this.setState({
                data: response.data
            })
        })
      }catch (e){
        // console.log(e)
      }
    }
  
    render(){
        
        return(
            <section className="youtube spad" style={{direction: 'rtl'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>أسماء الله الحسنى</h2>
                                {/* <h1>God Names</h1> */}
                            </div>
                        </div>
                    </div>
                    <h3 style={{display: 'flex', alignItem: 'center',  justifyContent: 'center'}}>"وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَى فَادْعُوهُ بِهَا وَذَرُوا الَّذِينَ يُلْحِدُونَ فِي أَسْمَائِهِ سَيُجْزَوْنَ مَا كَانُوا يَعْمَلُونَ"</h3>
                    <div className="row" style={{display: 'flex', alignItem: 'stretch|center|flex-start|flex-end|baseline|initial|inherit',  justifyContent: 'center'}}>
                        <div className="site-button-ghost-wrapper">
                            <Button type="dashed" ghost style={{color: 'black', fontSize: '20px'}}>
                            هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ
                            </Button>
                        </div>
                        <AsmaHousna AsmaHousna={this.state.data} />
                    </div>
                </div>
            </section>
        )
    }
}

export default AsmaHousnaComponent;
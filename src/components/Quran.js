import axios from "axios";
import React, { Component } from "react";
import { Typography } from 'antd';
const { Title } = Typography;

class Quran extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surat_change: '',        
            event: '',
            data: [],
            loadings: []
        };
      };

    async componentDidMount(){
        try{
            await axios.get(``)
            .then(response => {
                this.setState({
                    data: response.data
                });
            })
        } catch(e){
            // console.log(e)
        }
    }; 

    handleCategoryChange = (e) => {
        const event = e.target.value
        this.setState({
            event,
            surat_change: ''
        })

    };

    handleSuratChange = (e) => {
        const surat_change = e.target.value
        this.setState({
            surat_change
        })
    }

    getFilteredList = () => {
        if (!this.state.event) {
            return "أختر شيخك المفضل";
        }
        return this.state.data.filter((item) => `${item.id}` === this.state.event);
    };

    getItems = () => {
        if (!this.state.surat_change) {
            return "";
        }
        const recite = this.getFilteredList()
        const r = recite.map((item) => item.recitations.filter((surat) => `${surat.number}` === this.state.surat_change))
        const Suart = r[0][0]
        if (typeof(Suart) == 'undefined'){
            return ""
        }
        return(
            <div className="single_player_container" key={Suart.number}>
                <h4>{Suart.number} - {Suart.name_ar}</h4>
                <audio controls={true} style={{width:'100%'}}>
                    <source src={Suart.download_surat_link} type="audio/wav"/>
                    <source src={Suart.download_surat_link} type="audio/aiff"/>
                    <source src={Suart.download_surat_link} type="audio/flac"/>
                    <source src={Suart.download_surat_link} type="audio/ogg"/>
                    <source src={Suart.download_surat_link} type="audio/mp3"/>
                </audio>
            </div>
        )
    }


    renderItems = () => {
        const filterData = this.getFilteredList()
        const itemSurat = this.getItems()
        if (filterData === "أختر شيخك المفضل"){
            return (
                <section className="youtube spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h2>القرآن الكريم</h2>
                                    {/* <h1>The Holy Quran</h1> */}
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{direction: 'rtl'}}>
                            <div className="col-lg-6">
                                <div className="track__all">
                                    <select
                                        className="primary-btn border-btn"
                                        name="category-list"
                                        id="category-list"
                                        onChange={(e)=>this.handleCategoryChange(e)}
                                        style={{direction: 'ltr', width:'100%'}}
                                    >
                                        <option key={1000000} value="">--أختر شيخك المفضل--</option>
                                        {this.state.data.map((item) => (
                                            <option key={item.id} value={`${item.id}`}>{item.name_ar}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6 p-0" style={{direction: 'rtl', display: 'flex', alignItem: 'center',  justifyContent: 'center'}}>
                                <div className="track__content nice-scroll">
                                    <div className="section-title">
                                        <Title level={2}>{filterData}</Title>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }else{
            return filterData.map(item => (
                <section className="youtube spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h2>القرآن الكريم</h2>
                                    {/* <h1>The Holy Quran</h1> */}
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{direction: 'rtl'}}>
                            {/* <div className="col-lg-12 p-0">
                                <div className="track__pic">
                                    <img style={{ width: "100%" }} src="assets/img/masjid-pogung-dalangan-DBsQFuIbXg4-unsplash.jpg" alt=""/>
                                </div>
                            </div> */}
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h2>{item.name_ar}</h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="track__all">
                                    <select
                                        style={{direction: 'rtl', width: "100%"}}
                                        className="primary-btn border-btn"
                                        name="category-list"
                                        id="category-list"
                                        onChange={(e)=>this.handleCategoryChange(e)}
                                    >
                                        <option value="">--أختر--</option>
                                        {this.state.data.map((item) => (
                                            <option key={item.id} value={`${item.id}`}>{item.name_ar}</option>
                                        ))}
                                    </select>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="track__all">
                                    <select
                                        style={{width: "100%", direction:'rtl'}}
                                        className="primary-btn border-btn"
                                        name="category-list"
                                        id="category-list"
                                        onChange={(e)=>this.handleSuratChange(e)}
                                    >
                                        <option value="">----</option>
                                        {item.recitations.map((surat) => (
                                            <option key={surat.number} value={`${surat.number}`}>{surat.number} - {surat.name_ar} - {surat.surat_time}</option>
                                        ))}
                                    </select>

                                </div>
                            </div>
                            <div className="col-lg-12 p-0" style={{direction: 'rtl', alignItem: 'center',  justifyContent: 'center'}}>
                                <div className="track__content nice-scroll">
                                    {itemSurat}
                                    {/* <div className="single_player_container" key={Suart.number}>
                                        <h4>{Suart.number} - {Suart.name}</h4>
                                        <audio controls={true} style={{width:'100%'}}>
                                            <source src={Suart.download_surat_link} type="audio/wav"/>
                                            <source src={Suart.download_surat_link} type="audio/aiff"/>
                                            <source src={Suart.download_surat_link} type="audio/flac"/>
                                            <source src={Suart.download_surat_link} type="audio/ogg"/>
                                            <source src={Suart.download_surat_link} type="audio/mp3"/>
                                        </audio>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))
        }
    };

    render(){
        return(
            <>{this.renderItems()}</>
        )    
    }
}

export default Quran;
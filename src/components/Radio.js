import axios from "axios";
import React, { Component } from "react";

class Radio extends Component {
    constructor(props) {
        super(props);
        this.state = {
          event: '',
          radio_change: '',
          data: [],
          loadings: []
        };
      };

    
    
    async componentDidMount(){
        try{
            await axios.get(`https://quran-bismillah-api.herokuapp.com/radio/api/`)
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
            event
        })

    }

    handleRadioChange = (e) => {
        const radio_change = e.target.value
        this.setState({
            radio_change
        })

    }
         
    
    getFilteredList = () => {
        if (!this.state.event) {
            return this.state.loadings;
        }
        return this.state.data.filter((item) => item.status_type === this.state.event);
        }

        
    getItems = () => {
        if (!this.state.radio_change) {
            return this.state.loadings;
        }
        return this.state.data.filter((item) => `${item.id}` === this.state.radio_change);
        }
    
        
    renderItems = () => {
        const Item = this.getItems()
        return Item.map(item => (
            <div className="single_player_container" key={item.id}>
                <h4 className="section-title">{item.title_ar} {item.riwaya_ar}</h4>
                <audio controls style={{width:'100%'}}>
                    <source src={item.broadcasting} type="audio/wav"/>
                    <source src={item.broadcasting} type="audio/aiff"/>
                    <source src={item.broadcasting} type="audio/flac"/>
                    <source src={item.broadcasting} type="audio/ogg"/>
                    <source src={item.broadcasting} type="audio/mp3"/>
                </audio>
            </div>
        ));
    };
    

    render(){
        return(
            <section className="youtube spad" style={{borderBottom: 'solid 1px #FFF80A'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>راديو</h2>
                                {/* <h1>Islam podcast</h1> */}
                            </div>
                        </div>

                    </div>
                    <div className="row" style={{direction: 'rtl'}}>
                        <div className="col-lg-6">
                            <div className="section-title">
                                {/* <a href="#" className="primary-btn border-btn">View all tracks</a> */}
                                <select
                                    className="primary-btn border-btn"
                                    name="category-list"
                                    id="category-list"
                                    onChange={(e)=>this.handleCategoryChange(e)}
                                    style={{direction: 'ltr', width:'100%'}}
                                >
                                    <option value="">أختر نوع الإذاعة</option>
                                    <option value="reading">إذاعات القرآن الكريم</option>
                                    <option value="science">إذاعات العلوم الشرعية</option>
                                    <option value="translators">إذاعات ترجمات القرآن الكريم</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title">
                                {/* <a href="#" className="primary-btn border-btn">View all tracks</a> */}
                                <select
                                    className="primary-btn border-btn"
                                    name="category-list"
                                    id="category-list"
                                    onChange={(e)=>this.handleRadioChange(e)}
                                    style={{direction: 'ltr', width:'100%'}}
                                >
                                    <option value="">----</option>
                                    {this.getFilteredList().map((item) => (
                                        <option value={`${item.id}`}>{item.title_ar} {item.riwaya_ar}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {this.state.event !== ''? (
                        <div className="col-lg-12 p-0" style={{direction: 'ltr'}}>
                            <div className="track__content nice-scroll">
                            {this.renderItems()}
                            </div>
                        </div>
                        ) : ''}
                    </div>
                </div>
            </section>
        )
    }
}

export default Radio;
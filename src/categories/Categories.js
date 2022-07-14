import React from "react";
import { Component } from "react";
import axios from "axios";
import { Card } from 'antd';
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import './Categories.css'
import Footer from "../components/Footer";

const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

  
class Categorios extends Component{
    state = {
        data: [],        
    }

    async componentDidMount(){
        try{
            await axios.get(``)
            .then(res => {
                this.setState({
                    data: res.data     
                })
            })
        }catch(e){
            // console.log(e)
        }

    }

    

    render(){
        // console.log(this.state.data)
        return(
            <>
                <div className="section-title">
                    <h2>قائمة الفئات</h2>
                    {/* <h1>Category List</h1> */}
                </div>
                <Card title="" style={{direction: 'rtl'}}>
                    {this.state.data.map(category => (
                        <Card.Grid key={category.id} style={gridStyle}><Link style={{color: '#06113C', fontSize: 'large'}} to={`${category.id}/${category.slug}`}>{category.title_ar}</Link></Card.Grid>
                    ))}
                </Card>
                <Outlet />
                <br />
                <br />
                <br />
                <Footer />
            </>
        )
    }
}

export default Categorios;
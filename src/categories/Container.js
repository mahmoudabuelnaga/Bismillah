import React from "react";
import { useState, useEffect } from "react"
import axios from "axios";
import Footer from "../components/Footer";
import ChildComponent from "./Component";
import { useParams } from "react-router-dom";
import { Radio, Tabs } from 'antd';
import './Container.css'
const { TabPane } = Tabs;


  
const Container = () => {
    // const [data, setData] = useState([])
    const [mode, setMode] = useState('top')
    const [filterDate, setFilterDate] = useState([])
          
    const params = useParams();

    useEffect(()=> {
        try{
            axios.get(``)
            .then(res => {
                // setData(res.data)
                setFilterDate(res.data.filter((category) => `${category.id}` === params.id))
            })
        }catch(e){
            // console.log(e)
        }

    }, [params.id])

    const displayFilteredCatedgory = () => {
        return (
            <>
            {filterDate.map((category) => (
                <Tabs defaultActiveKey={category.id} key={category.id} tabPosition={mode} style={{height: '100%', }}>
                    {category.containers.map((container) => (
                        <>
                        <TabPane 
                            tab={`${container.title_ar}`} 
                            key={container.id * Math.random() * Math.random()} 
                            // style={mode === 'top'?{
                                // marginRight: '5%', fontSize: 'large'
                            // }: {fontSize: 'large'}}
                            >
                            {container.components.map(component => (
                                <>
                                    <ChildComponent components={component} />
                                    
                                </>
                            ))}
                            <br />
                            <br />
                            <br />
                            <br />
                            <Footer />
                
                        </TabPane>
                        
                        </>
                    ))
                    }
                    
                </Tabs>
            ))}
            </>
       
        )
    }

    const handleModeChange = (e) => {
        setMode(e.target.value);
    };

    const category_title_ar = filterDate.map(c => (c.title_ar))
    // const category_title = filterDate.map(c => (c.title))
    return(
        <div>
            <div className="section-title">
                <h2>{category_title_ar}</h2>
                {/* <h1>{category_title}</h1> */}
            </div>
            <div>
                <Radio.Group
                    onChange={handleModeChange}
                    value={mode}
                    style={{marginBottom: 8}}
                >
                    <Radio.Button value="top">أفقي</Radio.Button>
                    <Radio.Button value="left">عمودي</Radio.Button>
                </Radio.Group>
                {displayFilteredCatedgory()}
               

            </div>
        </div>
    )
}

export default Container;
import React, { Component } from "react";
import { Card } from 'antd';


class ChildComponent extends Component {
    state = {
        // data: this.props.components, 
        data: [{
            id: this.props.components.id , bismillah: this.props.components.bismillah , body: this.props.components.body, 
            container: this.props.components.container, looper: this.props.components.looper, surat: this.props.components.surat
        }],
        counter: this.props.components.looper,
    }

    handelNumberClick = (e) => {
        e.preventDefault();
        if(e.target.innerText > 0){
            this.setState({
                counter: parseInt(e.target.innerText) - 1
            })
        }
    }

    handelReloadCounter = () => {
        this.setState({
            counter: this.state.data.map(component => component.looper)
        })

    }

    render(){
        return(
            <>
                {this.state.data.map((component) => (
                <Card key={component.id} title="" style={{direction: 'rtl', marginBottom: '2%'}}>
                    <Card.Grid 
                         
                        style={{width: '100%', color:'#06113C', backgroundColor:'#EEEEEE', fontSize: 'large'}}
                    >                    
                        <div>{component.bismillah? component.bismillah: ''}</div>
                        <br />
                        <div>{component.body}</div>
                        <br />
                        <div style={{backgroundColor: '#DDDDDD', color:'#06113C', fontSize: 'large'}}>{component.surat}</div>

                    </Card.Grid>
                    {component.looper > 0 ? (
                        <>
                            <Card.Grid 
                             
                            style={{width: '20%', backgroundColor:'#06113C', color:'aliceblue', fontSize: 'large'}} // #990000
                            > 
                            {component.looper}
                            </Card.Grid>


                            {this.state.counter > 0 ?(
                                <>
                            <Card.Grid 
                             
                            style={{width: '60%', backgroundColor:'#FF8C32', color:'#06113C', fontSize: 'large'}} // #990000
                            onClick={(e) => this.handelNumberClick(e)}
                            >      
                                {this.state.counter}
                            </Card.Grid>     
                            </>
                            ): (
                                <>
                                <Card.Grid 
                                     
                                    style={{width: '60%', backgroundColor:'#50D890', color:'#06113C', fontSize: 'large'}} // #990000
                                    onClick={(e) => this.handelNumberClick(e)}
                                >     
                                    {this.state.counter}
                                </Card.Grid>

                                </>
                            )}
                            <Card.Grid 
                            
                            style={{width: '20%', backgroundColor:'#06113C', fontSize: 'large'}} // #990000
                            onClick={(e) => this.handelReloadCounter(e)}
                            > 
                            <img alt="" style={{width: '27px'}} src="../../assets/img/7.png" />
                            </Card.Grid>
                        </>
                        ) : ''}
                </Card>
                ))}
            </>
        )
    
    }
}

export default ChildComponent;
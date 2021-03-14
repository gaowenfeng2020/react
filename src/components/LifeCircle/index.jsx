import React, { Component } from 'react'
import LifeCircleDemo from './LifeCircleDemo'
export default class LifeCircle extends Component {
    constructor(){
        super()
        this.state={
            isShow:true
        }
    }
    handleShow=()=>{
        let {isShow} = this.state
        this.setState({
            isShow:!isShow
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleShow}>控制显示隐藏</button>
                
                {this.state.isShow?<LifeCircleDemo/>:''}
            </div>
        )
    }
}

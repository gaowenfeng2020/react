import React, { Component,createRef } from 'react'

export default class RefDemo extends Component {
    constructor(){
        super()
        this.myH1 = createRef()
        this.myInput=createRef()
    }
    handleBorder=()=>{
        console.log(this.myH1);
        this.myH1.current.style.border = "5px solid red"
        this.myInput.current.value = "请输入"
    }
    render() {
        return (
            <div>
                <h1 ref={this.myH1} onClick={this.handleBorder}>这段文字</h1>
                <input ref={this.myInput} type="text"/>
            </div>
        )
    }
}

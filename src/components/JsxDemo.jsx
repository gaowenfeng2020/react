import React from 'react'
import './style.css'
let str='Helloo'
let sum = (a,b)=>{
    return a+b
}
let ele = <p>外部的jsx结构</p>
let isActive = false


function JsxDemo(){
    return(
        <div>
            <h2>jsx语法演示</h2>
            <p>{`${str}`}</p>
            <p>{1>3?'1>3':'1<3'}</p>
            <p>{sum(22,11)}</p>
            <p>{ele}</p>
            <div className={isActive?'box active':'box'}></div>
            <div className={`box ${isActive?'active':''}`}></div>
            <div className={'box ' + (isActive?'active':'')}></div>
            <div style={{
                width:'100px',
                height:'100px',
                border:'1px solid blue'
            }}></div>
        </div>
    )
}

export default JsxDemo
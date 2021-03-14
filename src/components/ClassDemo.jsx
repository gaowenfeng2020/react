import React from 'react'

class ClassDemo extends React.Component{
    constructor(){
        super()
        this.state ={
            num:123
        }
    }
    render(){
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={()=>{
                    let {num} = this.state
                    let n = num +1
                    this.setState({
                        num:n
                    })
                }}>按钮</button>
            </div>
        )
    }
}

export default ClassDemo
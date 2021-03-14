//事件函数的定义

import React from 'react'

class FnDemo extends React.Component {
    constructor() {
        super()
        this.state = {
            num: 123
        }
        // this.handlePlus = this.handlePlus.bind(this)
    }
    // handlePlus() {  普通函数定义方式必须修正this指向
    //     console.log(this);
    //     let { num } = this.state
    //     let n = num + 1
    //     this.setState({
    //         num: n
    //     })
    // }
    handlePlus = (i)=>{
        console.log(this);
        let { num } = this.state
        let n = num + i
        this.setState({
            num: n
        })
    }
    render() {
        //封装后对函数进行参数传递必须使用匿名箭头函数
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={()=>{this.handlePlus(10)}}>按钮</button>
            </div>
        )
    }
}

export default FnDemo
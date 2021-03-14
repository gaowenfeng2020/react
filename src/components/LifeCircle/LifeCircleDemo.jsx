import React, { Component } from 'react'

export default class LifeCircleDemo extends Component {
    constructor(){
        super()
        console.log('constructor执行[1]');
        this.state={
            num:100
        }
    }
    componentDidMount(){
        console.log('componentDidMount执行,初始化完毕(使用频率最高)[3]');
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps,nextState);
        let {num}=this.state
        let nextnum = nextState.num
        return nextnum === num ?false:true

    }
    componentDidUpdate(){
        console.log('componentDidUpdate执行，更新完毕');
    }
    componentWillUnmount(){
        console.log('销毁');
    }
    render() {
        console.log('render执行[2]');
        return (
            <div>
                生命周期
                {this.state.num}
                <button onClick={()=>{
                    let {num} =this.state
                    ++num
                    this.setState({
                        num
                    })
                }}>按钮增加</button>

                <button onClick={()=>{                  
                    this.setState({
                        num:666
                    })
                }}>按钮增加666</button>
            </div>
        )
    }
}

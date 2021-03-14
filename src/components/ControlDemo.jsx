//受控组件（跟事件相关）

import React, { Component} from 'react'

export default class Chat extends Component {
    constructor(){
        super()
        this.state={
            msglist:['nihao','吃饭'],
            msg:'消息'
        }
        
    }
    handleChange=(ev)=>{
        console.log(ev.target.value,this.state.msg);
        this.setState({
            msg:ev.target.value
        })
    }
    handleDone=(ev)=>{
        console.log(ev);
        let {msglist,msg} = this.state
        if(ev.keyCode===13){
            msglist.push(msg)
            this.setState({msglist,
                msg:''
            })
            // this.chatInput.current.value = ''
        }
    }
    render() {
        return (
            <div>
                <input 
                    value={this.state.msg}
                    type="text" 
                    placeholder="请输入聊天内容"
                    onChange={this.handleChange}
                    onKeyUp={this.handleDone}
                />
                <div>
                    {
                        this.state.msglist.map((item,index)=>{
                            return <p key={index}>{item}</p>
                        })
                    }
                </div>
            </div>
        )
    }
}

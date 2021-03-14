import React, { Component,createRef} from 'react'

export default class Chat extends Component {
    constructor(){
        super()
        this.state={
            msglist:['nihao','吃饭']
        }
        this.chatInput = createRef()
    }
    handleInput=(ev)=>{
        // console.log(this.chatInput.current.value);
        let v = this.chatInput.current.value
        let {msglist} = this.state
        if(ev.keyCode===13){
            msglist.push(v)
            this.setState(msglist)
            this.chatInput.current.value = ''
        }
    }
    render() {
        return (
            <div>
                <input 
                    ref={this.chatInput} 
                    type="text" 
                    placeholder="请输入聊天内容"
                    onKeyUp={this.handleInput}
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

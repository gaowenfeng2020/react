import React,{Component} from 'react'
import CompA from './CompA'
import CompB from './CompB'
import CompC from './CompC'
// import CompC from './CompC'
import '../style.css'
export default class componentName extends Component {
    constructor(){
        super()
        this.state={
            idx:0
        }
    }
    handleTab(i){
        
        this.setState({
            idx:i
        })
    }
    render(){
        let {idx} =this.state
        return (
            <div>
                <ul>
                    <li className={idx===0?'active':''} onClick={()=>{this.handleTab(0)}}>菜单1</li>
                    <li className={idx===1?'active':''} onClick={()=>{this.handleTab(1)}}>菜单2</li>
                    <li className={idx===2?'active':''} onClick={()=>{this.handleTab(2)}}>菜单3</li>
                </ul>
                {idx===0?<CompA/>:''}
                {idx===1?<CompB/>:''}
                {idx===2?<CompC/>:''}

            </div>
        )
    }
}  
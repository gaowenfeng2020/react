import React,{Component} from 'react'

class JobClass extends Component {
    render(){
        let {jobname,salary,idx} = this.props
        let {handlesalary} =this.props
        return(
            <div>
                <p>类组件</p>
                <h3>岗位名称：{jobname}</h3>
                <h3>岗位薪资：{salary}</h3>
                <button onClick={()=>{handlesalary(idx)}}>涨薪</button>
            </div>
        )
    }
}

export default JobClass
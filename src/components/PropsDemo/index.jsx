import React,{Component} from 'react'
import JobFn from './JobFn'
import JobClass from './JobClass'
export default class PropsDemo extends Component {
    constructor(){
        super()
        this.state={
            joblist:[
                {jobname:'前端开发',salary:8000},
                {jobname:'前端中级开发',salary:'18000'},
                {jobname:'前端高级开发',salary:'28000'},
                {jobname:'前端专家开发',salary:'38000'},
            ]
        }
    }
    // handleSalary=()=>{
    // }
    // handleSalary=function () {
    // }
    // this.handleSalary = this.handleSalary.bind(this)
    handleSalary=(idx) =>{  //此处用箭头函数
        console.log(idx);
        let {joblist}=this.state
        joblist[idx].salary += 100
        this.setState({joblist:joblist})
    }
    render(){
        
        return(
            <div>
                <JobFn jobname="前端开发" salary="10s000"/>
                <JobClass jobname="高级工程师" salary="20000"/>
                {
                    this.state.joblist.map((item,index)=>{
                        return <JobClass 
                                    jobname={item.jobname} 
                                    salary={item.salary} 
                                    key={index}
                                    idx={index}
                                    handlesalary={this.handleSalary}
                                />
                    })
                }
            </div>
        )
    }
}
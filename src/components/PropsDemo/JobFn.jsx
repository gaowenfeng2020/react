import React from 'react'

function JobFn(props){
    return(
        <div>
            <h3>岗位名称：{props.jobname}</h3>
            <h3>岗位薪资：{props.salary}</h3>
        </div>
    )
}

export default JobFn
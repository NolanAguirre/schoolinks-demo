import React, { Component } from 'react'
import axios from 'axios'
import IpInfo from './ipInfo/IpInfo'
class IpRoute extends Component{
    constructor(props){
        super(props)
        this.state={
            ip:'',
            ipInfo:{},
            loading:false
        }
    }
    componentWillMount = () => {
        this.handleSubmit()
    }

    handleSubmit = (event) => {
        if(event){
            event.preventDefault()
        }
        const url = (this.state.ip)?`https://ip.nf/${this.state.ip}.json`:`https://ip.nf/me.json`
        this.setState({loading:true})
        axios.get(url).then(res=>{
            setTimeout(()=>{
                this.setState({ip:res.data.ip.ip, ipInfo:res.data.ip, loading:false})
            }, 2000) //this mocks response delay
        })
    }

    onChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        this.setState({[name]: value})
    }

    // <div onClick={this.onSubmit}></div>
    render = () => {
        return <form onSubmit={this.handleSubmit}>
            <input name='ip' value={this.state.ip} onChange={this.onChange} placeholder='IP address'/>
            <button type='submit'>Find IP info</button>
            {this.state.loading?<div>loading</div>:<IpInfo info={this.state.ipInfo}/>}
        </form>
    }
}

export default IpRoute

import React, {Component} from 'react';

export default class Pokemon extends Component<{name:String,count:number}>{
    render(){
        return <div>Hello {this.props.name} and Count {this.props.count}</div>
    }
    
}
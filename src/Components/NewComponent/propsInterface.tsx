import React, {Component} from 'react';

interface InputObject{
    name?:String,
    count?:number
}
export default class PokemonNew extends Component<InputObject>{
    render(){
        const {name,count} = this.props;
        return <div>Hello {name && <span style={{color:"red"}}>{name}</span>} and Count {this.props.count}</div>
    }
    
}
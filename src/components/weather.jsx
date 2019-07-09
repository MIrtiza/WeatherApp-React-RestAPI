import React, { Component } from 'react';


export default class Weather extends Component{
    render(){
        return(
            <div className="weather__info">
                {/* this is if condition in reactjs */}
                { this.props.city && this.props.country &&  <p>Location: <span className="weather__key"> {this.props.city}, {this.props.country} </span> </p>  }
                { this.props.temperature && <p>Temperature: <span className="weather__key"> {this.props.temperature}</span></p> }
                { this.props.humidity &&  <p>Humidity: <span className="weather__key"> {this.props.humidity}</span></p>  }
                { this.props.description && <p> Conditions: <span className="weather__key">{this.props.description}</span></p>  }
                {this.props.error && <p> <span className="weather__error">{ this.props.error }</span></p> }
              
              
            </div>
        )
    }
}
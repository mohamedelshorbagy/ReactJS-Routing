import React , {Component} from 'react';



export class Home extends Component {
    
    // COntructor and State Object
    constructor(props) {
        super();
        this.state = {
            age: props.age
        }

    }
    

    // Functions 
    incAge() {
        this.setState({
            age: this.state.age + 5

        });

    }


    render() {
        return(
            <div>
                <ul className="list-group">
                    <li className="list-group-item">{this.state.age}</li>

                </ul>
                <button className="btn btn-info" onClick={() => {this.incAge()}}>Increment My Age</button>

            </div>
            
        );


    }



}



export default Home;
import React , {Component} from 'react';


export class Contact extends Component {
 render() {
    return(
        <div>
            <form className="group">
                <input type="text" className="control" placeholder="Username"/> 
                <input type="password" className="control" placeholder="Password"/> 
                <textarea className="control" placeholder="Message"></textarea>
                <button className="btn btn-success">Sign Up</button>

            </form>


        </div>


    );


 }


}


export default Contact;
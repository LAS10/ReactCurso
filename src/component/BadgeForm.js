import React from 'react';
import { thisExpression } from '@babel/types';

class BadgeForm extends React.Component
{
    
    handleClick = (e)=>{
        console.log("Button was clicked");
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Button was submitted");
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.props.onSubmit} >
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName"
                            value={this.props.formValue.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="lastname"
                            value={this.props.formValue.lastname}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} 
                            className="form-control" 
                            type="email" 
                            name="email"
                            value={this.props.formValue.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Jog Title</label>
                        <input onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="jobtitle"
                            value={this.props.formValue.jobtitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="twitter"
                            value={this.props.formValue.twitter}
                        />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;
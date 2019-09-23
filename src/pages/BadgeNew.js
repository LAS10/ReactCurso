import React from 'react'
import Badge from '../component/badge'
import logo from '../images/platziconf-logo.svg'
import BadgeForm from '../component/BadgeForm'
import "./styles/BadgeNew.css"
import api from '../api';
import Loading from '../component/PageLoading';
import PageError from '../component/PageError';
class BadgeNew extends React.Component
{
    state = { form:{
            firstName:'',
            lastname:'',
            email:'',
            jobtitle:'',
            twitter:'',
        },
        loading: false,
        error: null
    };

    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        });
    };


    handleSubmit = async e => {
        e.preventDefault();
        this.setState({
            loading: true,
            error: null
        });

        try{
            await api.badges.create(this.state.form);
            this.setState({
                loading: false,
            });            
        }
        catch(error)
        {
            this.setState({
                loading: false,
                error: error
            });
        }
    };
    render()
    {
        if(this.state.loading)
        {
            return <Loading/>
        }

        if(this.state.error)
        {
            return <PageError error={this.state.error}/>;
        }
        return(
            <React.Fragment>
                <div className="Badges__hero">
                    <img src={logo} alt="Logo" className="Badges__hero-image image-fluid"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                Name={this.state.form.firstName || 'FIRST_NAME'}
                                LastName={this.state.form.lastname || 'LAST_NAME'}
                                Job={this.state.form.jobtitle || 'JOB_TITLE'}
                                FB={this.state.form.twitter || 'TWITTER'}
                                email={this.state.form.email}
                            />
                        </div>
                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                formValue={this.state.form}
                                onSubmit={this.handleSubmit}    
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;
import React from 'react'
import Badge from '../component/badge'
import logo from '../images/platziconf-logo.svg'
import BadgeForm from '../component/BadgeForm'
import "./styles/BadgeEdit.css"
import api from '../api';
import Loading from '../component/PageLoading';
import PageError from '../component/PageError';
import { timingSafeEqual } from 'crypto'
class BadgeEdit extends React.Component
{
    state = { form:{
            firstName:'',
            lastname:'',
            email:'',
            jobtitle:'',
            twitter:'',
        },
        loading: true,
        error: null
    };

    componentDidMount()
    {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading: true, error:null});

        try
        {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );

            this.setState({loading: false, error:null, form:{
                firstName: data.firstName,
                lastname: data.lastName,
                email: data.email,
                jobtitle: data.jobTitle,
                twitter: data.twitter}});
        }
        catch(error)
        {
            this.setState({loading: false, error: error});
        }
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
            await api.badges.update(this.props.match.params.badgeId,this.state.form);
            this.setState({
                loading: false,
            });            
            this.props.history.push("/Badges");
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
                            <h1>Edit Attendant</h1>
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

export default BadgeEdit;
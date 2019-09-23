import React from 'react';
import "./styles/BadgeDetails.css";
import PageLoading from '../component/PageLoading';
import PageError from '../component/PageError';
import api from '../api';
import BadgeDetails from './BadgeDetails';
class BadgeDetailsContainer extends React.Component
{
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
    };
    handleDeleteBadge = async e=>{
        this.setState({loading:true,error:null});

        try{
            await api.badges.remove(
                this.props.match.params.badgeId
            );

            this.props.history.push('/Badges');
        }
        catch(error)
        {
            this.setState({loading:false,error:error});
        }



    };
    componentDidMount()
    {
        this.fectchData();
    }
    handleCloseModal = e =>{
        this.setState({modalIsOpen:false});
    }

    handleOpenModal = e => {
        this.setState({modalIsOpen: true});
    }
    fectchData = async ()=>{
        this.setState({loading: true,error:null});

        try
        {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );

            this.setState({loading:false,data: data});
        }
        catch(error)
        {
            this.setState({loading: false,error:error});
        }
    };
    render()
    {
        if(this.state.loading)
        {
            return <PageLoading/>
        }

        if(this.state.error)
        {
            return <PageError error={this.state.error}/>
        }
        const CurrentBadge = this.state.data;
        return(
            <BadgeDetails 
                onCloseModal={this.handleCloseModal} 
                onOpenModal={this.handleOpenModal}
                modalIsOpen={this.state.modalIsOpen} 
                CurrentBadge={this.state.data}
                onDeleteBadge={this.handleDeleteBadge}
                />
        )
    }
}

export default BadgeDetailsContainer;
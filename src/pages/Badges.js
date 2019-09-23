import React from 'react';
import "./styles/BadgeNew.css"
import ConfLogo from '../images/badge-header.svg'
import BadgesList from '../component/BadgesList';
import { Link } from 'react-router-dom';
import api from '../api';
import PageLoading from '../component/PageLoading'
import PageError from '../component/PageError';
import MiniLoading from '../component/MiniLoading';
import { clearInterval } from 'timers';
class Badges extends React.Component
{
    state = {
        loading: true,
        data: [],
        error: null,
      };

    constructor(props){
        super(props);
        console.log("1. Constructor");
    }

    componentDidMount(){
        this.fetchData();
    }


    fetchData = async ()=>{
        this.setState({loading: true, error: null});

        try{
            const data = await api.badges.list();

            this.setState({loading:false,data: data});
        }
        catch(err)
        {
            this.setState({loading:false,error: err});
        }
    };
    componentWillUnmount() {
    }
    render(){
        if(this.state.loading === true && !this.state.data)
        {
            return <PageLoading/>;
        }

        if(this.state.error)
        {
            return <PageError error={this.state.error}/>;
        }

            return(
                <React.Fragment>
                    <div className="Badges">
                        <div className="Badges__hero">
                            <div className="Badges__container">
                                <img className="Badges_conf-logo" src={ConfLogo} alt="Conf Logo"/>
                            </div>
                        </div>
                    </div>

                    <div className="Badge__container">
                        <div className="Badges__buttons">
                            <Link to="/BadgesNew" className="btn btn-primary">
                                Badge
                            </Link>
                        </div>
                        <div className="Badges__list">
                            <div className="Badges__container">
                                <BadgesList badges={this.state.data}/>
                            </div>
                        </div>
                        {this.state.loading && <MiniLoading/>}
                    </div>
                </React.Fragment>
            )
    };
}

export default Badges;
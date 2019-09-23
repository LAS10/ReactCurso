import React from 'react';
import  { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import Layout from './Layout'
import NotFound from '../pages/NotFound';
import BadgeHome from '../pages/BadgeHome';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';
function App()
{
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/Badges" component={Badges}/>
                    <Route exact path="/BadgesNew" component={BadgeNew}/>
                    <Route exact path="/Badges/:badgeId/edit" component={BadgeEdit}/>
                    <Route exact path="/Badges/:badgeId" component={BadgeDetailsContainer}/>
                    <Route exact path="/" component={BadgeHome}/>
                    <Route path="/404" component={NotFound} />
                    <Redirect from="*" to="/404" />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;


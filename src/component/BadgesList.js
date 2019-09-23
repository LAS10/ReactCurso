import React from 'react';
import "./styles/BadgeList.css"
import {Link} from 'react-router-dom';



function BadgesList(props)
{
    const [query,SetQuery] = React.useState("");
    const badges = props.badges;
    const [filteredBadge,SetfilteredBadge] = React.useState(badges);

    React.useMemo(() => 
    { const result = badges.filter(badge => {
       return  `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
     });
     SetfilteredBadge(result);
    }, [badges,query]);

     if(filteredBadge.lenght>0)
        {
            return(
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary"
                        to="/BadgesNew"
                    >Create New Badge</Link>
                </div>
            )
        }
        return (
            <div className="BadgesList">
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text" className="form-control"
                        value={query}
                        onChange={(e)=>{
                            SetQuery(e.target.value);
                        }}
                    />
                </div>
                <ul className="list-unstyled">
                {filteredBadge.map((badge)=>{
                    return(
                        <li key={badge.id}>
                            <Link className="text-reset text-decoration-none" to={`/Badges/${badge.id}`}>
                                <div className="BadgesListItem">
                                    <img
                                        src={badge.avatarUrl}
                                        className="BadgesListItem__avatar"
                                        alt="Avatar"
                                    />
                                    <div>
                                        <strong>
                                            {badge.firstName} {badge.lastName}
                                        </strong>
                                        <br/>
                                        {badge.twitter}
                                        <br/>
                                        {badge.jobTitle}
                                    </div>
                                </div>
                                <br></br>
                            </Link>
                        </li>
                        
                    )
                })}
            </ul>
        </div>
        );
}

export default BadgesList;
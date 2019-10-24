import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOwnedFamilies } from '../../actions';

class OwnedFamilies extends React.Component {

    componentDidMount(){
        this.props.getOwnedFamilies(this.props.authUser);
    }

    render(){
        if(!this.props.family.ownedFamilies){
            return(
                <div className="container">Still Loading...</div>
            );
        }else if(this.props.family.ownedFamilies.length === 0){
            return(
                <div className="container"><Link to="/create-family" className="text-dark">You don't own families... want to create one?</Link></div>
            );
        }else{
            return <div className="container">Oh you got some families you own</div>;
        }
    }
};

const mapStateToProps = state => {
    return { family: state.family };
};

export default connect(mapStateToProps, { getOwnedFamilies })(OwnedFamilies);
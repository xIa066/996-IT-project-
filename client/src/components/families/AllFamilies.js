import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUser } from '../../actions';

class AllFamilies extends React.Component {
    
    async componentDidMount(){
        await this.props.getUser(this.props.authUser);
    }

    render(){
        if(!this.props.user.families){
            return(
                <div className="container">Still Loading...</div>
            );
        }else if(this.props.user.families.length === 0){
            return <div className="container">No Fam</div>
        }else{
            return this.props.user.families.map(family => {
                return(
                    <div className="container" key={family._id}>{family.familyName}</div>
                );
            })
        }
    }
}

const mapStateToProps = state => {
    return { user: state.user };
};

export default connect(mapStateToProps, { getUser })(AllFamilies);

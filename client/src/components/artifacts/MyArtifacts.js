import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchMyArtifacts } from '../../actions';
import Loading from '../misc/Loading';

class AllArtifacts extends React.Component{
    async componentDidMount(){
        await this.props.fetchMyArtifacts(this.props.authUser);
    }
    
    renderGallery(){
        return this.props.artifacts.map(artifact => {
            return(
                <div className="artifact" key={artifact._id}>
                    <Link to={`/artifacts/view/${artifact._id}`}>
                        <img src={artifact.photo} alt="" className="artifact__img"/><br/>
                    </Link>
                    <h5 className="artifact__name">{artifact.name}</h5>
                </div>
            );
        })
    }

    render(){
        if(!this.props.artifacts){
            return <Loading />;
        }else if(this.props.artifacts.length === 0){
            return <h1 className="banner"><span>No Artifacts Found!</span></h1>
        }else{
            return(
                <div id="body" className="all-artifacts">
                    <h1 className="banner"><span>My Artifacts</span></h1>
                    <section className="product">
                        {this.renderGallery()}
                    </section>
                </div>
            );
        }

    }
}

const mapStateToProps = state => {
    return { artifacts: Object.values(state.artifacts) };
}

export default connect(mapStateToProps, { fetchMyArtifacts })(AllArtifacts);
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchArtifacts } from '../../actions';

class AllArtifacts extends React.Component{
    componentDidMount(){
        this.props.fetchArtifacts();
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
        if(this.props.artifacts.length > 0){
            return(
                <div id="body" className="all-artifacts">
                    <h1 className="gallery-banner"><span>gallery</span></h1>
                    <section className="product">
                        {this.renderGallery()}
                    </section>
                </div>
            );
        }else{
            return null;
        }
    }
}

const mapStateToProps = state => {
    return { artifacts: Object.values(state.artifacts) };
}

export default connect(mapStateToProps, { fetchArtifacts })(AllArtifacts);
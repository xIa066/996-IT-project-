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
                <React.Fragment key={artifact._id}>
                    <li>
                        <Link to={`/artifacts/view/${artifact._id}`}>
                            <img src={artifact.photo} alt="" />
                        </Link>
                    </li>
                </React.Fragment>
            );
        })
    }

    render(){
        if(this.props.artifacts){
            return(
                <div id="body" className="all-artifacts">
                    <h1><span>gallery</span></h1>
                    <ul className="product">
                        {this.renderGallery()}
                    </ul>
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
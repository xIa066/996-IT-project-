import React from 'react';
import { connect } from 'react-redux';
import { fetchArtifact, deleteArtifact } from '../../actions';

class ShowArtifact extends React.Component{
    componentDidMount() {
        this.props.fetchArtifact(this.props.match.params.id);
    }
    
    renderArtifact(){
        return(
            <div className="row">
                <div className="col-6">
                    <img src={this.props.artifact[0].photo} />
                </div>
                <div className="col-6">
                    <div className="row">
                        <h1>{this.props.artifact[0].name}</h1>
                    </div>
                    <div className="row">
                        <h3>{this.props.artifact[0].description}</h3>
                    </div>
                    <div className="row">
                        <button type="button" class="btn btn-secondary mx-1">Edit</button>
                        <button type="button" class="btn btn-secondary mx-1" onClick={() => {this.props.deleteArtifact(this.props.match.params.id)}}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
    
    render(){
        if(this.props.artifact[0]){
            return(
                <div className="container">{this.renderArtifact()}</div>
            );
        }else{
            return null;
        }
    }
}

const mapStateToProps = state =>{
    return { artifact: Object.values(state.artifacts)}
}

export default connect(mapStateToProps, { fetchArtifact, deleteArtifact })(ShowArtifact);
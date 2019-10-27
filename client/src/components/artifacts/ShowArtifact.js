import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchArtifact, deleteArtifact } from '../../actions';

class ShowArtifact extends React.Component{
    componentDidMount() {
        this.props.fetchArtifact(this.props.id);
    }
    
    renderButtons(){
        console.log(this.props.id)
        if(this.props.authUser.sub === this.props.artifact[0].ownerID){
            return(
                <>
                    <Link to={`/artifacts/edit/${this.props.id}`}>
                        <button type="button" className="btn btn-secondary mx-2">Edit</button>
                    </Link>
                    <button type="button" className="btn btn-secondary mx-2" onClick={() => {this.props.deleteArtifact(this.props.id)}}>Delete</button>
                </>
            );       
        }else{
            return null;
        }
    }

    renderArtifact(){
        return(
            <div className="single-artifact">
                <div className="artifact__name-title">
                    <h1 className="banner">{this.props.artifact[0].name}</h1>
                </div>
                <div className="artifact__details">
                    <img className="artifact__img-single" src={this.props.artifact[0].photo} alt="" />
                    <div className="artifact__desc">
                        <h2 class="heading-secondary">Description</h2>
                        <h3>{this.props.artifact[0].description}</h3>
                        <h4>Date Recieved: {this.props.artifact[0].date}</h4>
                        <div className="buttons">
                            {this.renderButtons()}
                        </div>
                    </div>
                    
                </div>
                
            </div>
        );
    }
    
    render(){
        if(this.props.artifact[0]){
            return(
                <div className="container-fluid">{this.renderArtifact()}</div>
            );
        }else{
            return null;
        }
    }
}

const mapStateToProps = state =>{
    const artifact = Object.values(state.artifacts);
    return { artifact: artifact}
}

export default connect(mapStateToProps, { fetchArtifact, deleteArtifact })(ShowArtifact);
import React from 'react';
import { connect } from 'react-redux';
import { fetchArtifact } from '../../actions';

class ShowArtifact extends React.Component{
    componentDidMount() {
        this.props.fetchArtifact(this.props.match.params.id);
    }
    
    render(){
        return(
            <div>YAHHWEORJ</div>
        );
    }
}

const mapStateToProps = state =>{
    return { artifact: Object.values(state.artifacts)}
}

export default connect(mapStateToProps, { fetchArtifact })(ShowArtifact);
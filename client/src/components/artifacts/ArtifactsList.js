import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchArtifacts } from '../../actions';

import './card.css';

class ArtifactsList extends React.Component {
  componentDidMount(){
    this.props.fetchArtifacts();
  }

  setOrder = index => {
    var textOrder;
    var picOrder;
    if(index % 2 === 0){
      textOrder = "order-1";
      picOrder = "order-2";
    }else{
      textOrder = "order-2";
      picOrder = "order-1";
    }

    return { text: textOrder, pic: picOrder}
  }

  renderArtifactsList(){
    return this.props.artifacts.map((artifact, index) => {
      var orders = this.setOrder(index);
      console.log(artifact._id);
      return (
        <div className="row align-items-center mb-5" key={index}>
          <div className={"text-center col-6 ".concat(orders.text)}>
            <div className="row justify-content-center">
              <div className="col-8">
                <h2 className="artifact-text artifact-name">{artifact.name}</h2>
                <i className="fas fa-archway fa-2x"></i>
                <p className="artifact-text artifact-desc">{artifact.description}</p>
              </div>
            </div>  
          </div>
          <div className={"col-6 ".concat(orders.pic)}>
            <Link to={`/artifacts/view/${artifact._id}`}>
              <img className="img-fluid w-100 justify-content-center image" src={artifact.photo} />
            </Link>
          </div>
        </div>
      );
    });
  }

  render(){
    return(
      <div className="container-fluid px-0 pt-0" id="artifactsList">
        {this.renderArtifactsList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { artifacts: Object.values(state.artifacts) };
}

export default connect(mapStateToProps, { fetchArtifacts })(ArtifactsList);

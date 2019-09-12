import React from 'react';
import { connect } from 'react-redux';
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

      return (
        <div className="row align-items-center mb-5" key={index}>
          <div className={"col-6 ".concat(orders.text)}>
            <div className="text-center">
              <h2>ARTIFACTS</h2>
              <i className="fas fa-archway fa-2x"></i>
              <p className="">{artifact.description}</p>
            </div>
          </div>
          <div className={"col-6 ".concat(orders.pic)}>
            <img className="img-fluid" src={artifact.photo} />
          </div>
        </div>
      );
    });
  }

  render(){
    return(
      <div className="container-fluid px-0" id="artifactsList">
        {this.renderArtifactsList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { artifacts: Object.values(state.artifacts) };
}

export default connect(mapStateToProps, { fetchArtifacts })(ArtifactsList);

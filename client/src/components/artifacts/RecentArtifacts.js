import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//import action creators
import { fetchArtifacts } from '../../actions'; 


class RecentArtifacts extends React.Component{

    componentDidMount(){
        this.props.fetchArtifacts();
    }

    renderList = (recentList) => {
        return recentList.map(artifact =>{
            return(
                <Link to={`/artifacts/view/${artifact._id}`} key={artifact._id}>
                    <div className="item">
                        <img src={artifact.photo} alt=""/>
                        {artifact.name}
                    </div>
                </Link>
            );
        });
    }


    render(){
        if(this.props.artifacts.length === 0){
            return null;
        }else{
            var recentList;
            if(this.props.artifacts.length > 6){
                recentList = this.props.artifacts.slice(0, 6);
            }else{
                recentList = this.props.artifacts;
            }
            return(
                <div id="projects" className="recent-projects">
                    <span data-text="Recent Project" className="dashed-shadow hello">Recent Project</span>
                    <br/>
                    <OwlCarousel
                        loop
                        margin={0}
                        center
                        >
                        {this.renderList(recentList)}
                    </OwlCarousel>
    
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return { artifacts: Object.values(state.artifacts) };
}

export default connect(mapStateToProps, { fetchArtifacts })(RecentArtifacts);

import React, { Component } from 'react';

import RecentArtifacts from '../components/artifacts/RecentArtifacts';
import AllArtifacts from '../components/artifacts/AllArtifacts';
import Navbar from '../components/navigation/Navbar';

import '../styles/Homepage.css';


class NewHome extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <RecentArtifacts />
                <AllArtifacts />
            </div>
        );
    }
}

export default NewHome;
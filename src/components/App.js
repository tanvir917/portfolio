import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.jpg';

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }

    //{ this.state.displayBio ? <Title/> : null }
    render() {
        return (
            <div>
                <img src={profile} alt='profile' className="profile"/>
                <h1>Hello!</h1>
                <p>My name is Tanvir Islam.</p> 
                <Title/>
                <p>I am looking forwark for better projects</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Dhaka, Bangladeh</p>
                            <p>My favourite language is JavaScript</p>
                            <p>Besides Coding, I also love music and movie</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>
            </div>
        )
    }
}

export default App;
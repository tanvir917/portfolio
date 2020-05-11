import React, { Component } from 'react';
import Projects from './Projects';

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is David</p>
                <p>I am looking forwark for better projects</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in San Francisco</p>
                            <p>My favourite language is JavaScript</p>
                            <p>Besides Coding, I also love music and ramen</p>
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
            </div>
        )
    }
}

export default App;
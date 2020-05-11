import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = { displayBio: false };
        console.log(this);
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
        //bind allow us to pass this object from one object to another 
    }

    toggleDisplayBio() {
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
            </div>
        )
    }
}

export default App;
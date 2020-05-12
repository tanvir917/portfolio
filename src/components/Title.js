import React, { Component } from 'react';

const TITLES = [
    'am a software developer',
    'loves watching movies',
    'am an enthisiastic learner',
    'am an adventure seeker'
];

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true };

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        this.animateTitles();
    }

    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;//VALUE Will be 1-4

            this.setState({ titleIndex, fadeIn: true });//key value name same
            setTimeout(() => this.setState({ fadeIn: false }), 2000);
        }, 4000);

    }

    render() {
        const { fadeIn, titleIndex } = this.state;
        const title = TITLES[titleIndex];

        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I  {title} </p>
        )
    }
}

export default Title;
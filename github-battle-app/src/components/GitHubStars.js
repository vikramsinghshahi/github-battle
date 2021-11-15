import React from 'react';
import AllCard from './AllCard';

class GitHubStars extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            data: null,
            tag: 'all',
        };
    }

    componentDidMount = () =>
    {
        this.fetchData(this.state.tag);
        // console.log(this.state.data);
    };
    handleTags = ({ target }) =>
    {
        let id = target.dataset.id;
        this.setState(
            {
                tag: id,
                data: null,
            },
            () => this.fetchData(this.state.tag)
        );
    };
    fetchData = (tag) =>
    {
        fetch(
            `https://api.github.com/search/repositories?q=stars:%3E1+language:${tag}&sort=stars&order=desc&type=Repositories`
        )
            .then((res) => res.json())
            .then((data) => this.setState({ data: data.items }));
    };

    render()
    {
        let tag = this.state.tag;
        console.log(this.props);
        return (
            <main className="main">
                <div className="main_header">
                    <nav className="nav">
                        <h2
                            className={tag === 'all' ? 'active_navlink ' : 'navlink'}
                            data-id="all"
                            onClick={(event) => this.handleTags(event)}
                        >
                            All
                        </h2>
                        <h2
                            className={tag === 'javascript' ? 'active_navlink ' : 'navlink'}
                            data-id="javascript"
                            onClick={(event) => this.handleTags(event)}
                        >
                            JavaScript
                        </h2>
                        <h2
                            className={tag === 'ruby' ? 'active_navlink ' : 'navlink'}
                            data-id="ruby"
                            onClick={(event) => this.handleTags(event)}
                        >
                            Ruby
                        </h2>
                        <h2
                            className={tag === 'java' ? 'active_navlink ' : 'navlink'}
                            data-id="java"
                            onClick={(event) => this.handleTags(event)}
                        >
                            Java
                        </h2>
                        <h2
                            className={tag === 'css' ? 'active_navlink ' : 'navlink'}
                            data-id="css"
                            onClick={(event) => this.handleTags(event)}
                        >
                            CSS
                        </h2>
                        <h2
                            className={tag === 'python' ? 'active_navlink ' : 'navlink'}
                            data-id="python"
                            onClick={(event) => this.handleTags(event)}
                        >
                            Python
                        </h2>
                    </nav>
                </div>
                {this.state.data ? (
                    <AllCard data={this.state.data} darkMode={this.props.darkMode} />
                ) : (
                    <h2 className="center ">Loading...</h2>
                )}
            </main>
        );
    }
}

export default GitHubStars;
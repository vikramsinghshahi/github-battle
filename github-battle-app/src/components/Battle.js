import React from 'react';
import { Link } from 'react-router-dom';

class Battle extends React.Component
{
    render(props)
    {
        console.log(this.props, 'battle');
        let user1 = this.props.data1;
        let user2 = this.props.data2,
            winner,
            loser;
        // console.log(this.props);
        if (
            user1.public_repos * 20 + user1.followers >
            user2.public_repos * 20 + user2.followers
        )
        {
            winner = user1;
            loser = user2;
        } else
        {
            winner = user2;
            loser = user1;
        }
        return (
            <main>
                <section className="result_section">
                    <div className={this.props.darkMode ? 'result_dark' : 'result_light'}>
                        <h2 className="result_header">Winner</h2>
                        <div>
                            <img
                                src={winner.avatar_url}
                                alt={winner.login}
                                className="result_img"
                            />
                        </div>
                        <h2 className="result_score">
                            Score: {winner.public_repos * 20 + winner.followers}
                        </h2>
                        <h2 className="result_login">{winner.login}</h2>
                        <div className="result_col">
                            <img alt="" src="/images/user.png" />
                            <h2 className="inline-block mx-3">{winner.name}</h2>
                        </div>
                        <div className="result_col">
                            <img alt="" src="/images/location.png" />
                            <h2 className="inline-block mx-3">{winner.location}</h2>
                        </div>
                        <div className="result_col">
                            <img alt="" src="/images/rating.png" />
                            <h2 className="inline-block mx-3">
                                {winner.followers} followers
                            </h2>
                        </div>
                        <div className="result_col">
                            <img alt="" src="/images/rating.png" />
                            <h2 className="inline-block mx-3">
                                {winner.following} following
                            </h2>
                        </div>
                        <div className="result_col">
                            <img alt="" src="/images/repo.png" />
                            <h2 className="inline-block mx-3">
                                {winner.public_repos} repositories
                            </h2>
                        </div>
                    </div>

                    <div className={this.props.darkMode ? 'result_dark' : 'result_light'}>
                        <h2 className="result_header">Loser</h2>
                        <div>
                            <img
                                src={loser.avatar_url}
                                alt={loser.login}
                                className="result_img"
                            />
                        </div>
                        <h2 className="result_score">
                            Score: {loser.public_repos * 20 + loser.followers}
                        </h2>
                        <h2 className="result_login">{loser.login}</h2>
                        <div className="result_col">
                            <img alt="" src="/images/user.png" />
                            <h2 className="inline-block mx-3">{loser.name}</h2>
                        </div>
                        <div className="result_col">
                            <img alt="" src="/images/location.png" />
                            <h2 className="inline-block mx-3">{loser.location}</h2>
                        </div>
                        <div className="result_col">
                            <img alt="" src="/images/rating.png" />
                            <h2 className="inline-block mx-3">{loser.followers} followers</h2>
                        </div>
                        <div className="result_col">
                            <img alt="" src="/images/rating.png" />
                            <h2 className="inline-block mx-3">{loser.following} following</h2>
                        </div>
                        <div className="result_col">
                            <img alt="" src="/images/repo.png" />
                            <h2 className="inline-block mx-3">
                                {loser.public_repos} repositories
                            </h2>
                        </div>
                    </div>
                </section>

                <div className="center btn_wrapper">
                    <Link to="/battle">
                        <h3 className="btn_reset">Reset</h3>
                    </Link>
                </div>
            </main>
        );
    }
}

export default Battle;
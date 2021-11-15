import React from 'react';
import Players from './Players';
import { Link } from 'react-router-dom';

class GitHubBattle extends React.Component
{
    render(props)
    {
        return (
            <main className="main">
                <h1 className="battle_header">Instructions</h1>
                <section className="instruction">
                    <div className="instruction_col">
                        <h2>Enter two Github users</h2>
                        <div>
                            <img alt="" src="/images/user.png" />
                        </div>
                    </div>
                    <div className="instruction_col">
                        <h2>Battle</h2>
                        <div>
                            <img alt="" src="/images/swords.png" />
                        </div>
                    </div>
                    <div className="instruction_col">
                        <h2>Know the Winner</h2>
                        <div>
                            <img alt="" src="/images/trophy.png" />
                        </div>
                    </div>
                </section>
                <section className="player_container">
                    <h2 className="player_header">Players</h2>
                    <div>
                        <Players {...this.props} />
                    </div>
                    <div className="center py-12">
                        <Link
                            to={{
                                pathname: '/userbattle',
                            }}
                            className="battle_link"
                        >
                            <h4
                                className={
                                    !this.props.closeUser1Data && !this.props.closeUser2Data
                                        ? 'visible battle'
                                        : 'hidden'
                                }
                            >
                                Battle
                            </h4>
                        </Link>
                    </div>
                </section>
            </main>
        );
    }
}

export default GitHubBattle;
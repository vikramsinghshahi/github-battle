import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
// import { Route, Routes } from 'react-router-dom';
import GitHubStars from './components/GitHubStars';
import GitHubBattle from './components/GitHubBattle';
import Battle from './components/Battle';

class App extends React.Component
{
    constructor(props)
    {
        super();
        this.state = {
            inputText1: '',
            inputText2: '',
            hideForm1: false,
            hideForm2: false,
            data1: '',
            data2: '',
            closeUser1Data: true,
            closeUser2Data: true,
            darkMode: false,
        };
    }



    handleSubmit = (event) =>
    {
        console.dir(event);
        event.preventDefault();
        let id = event.target.dataset.id;
        if (this.state[id])
        {
            fetch(`https://api.github.com/users/${this.state[id]}`)
                .then((res) => res.json())
                .then((data) =>
                {
                    if (id === 'inputText1')
                    {
                        this.setState({
                            [id]: '',
                            data1: data,
                            hideForm1: true,
                            closeUser1Data: false,
                        });
                    } else
                    {
                        this.setState({
                            [id]: '',
                            data2: data,
                            hideForm2: true,
                            closeUser2Data: false,
                        });
                    }
                });
        }
    };

    handleChange = ({ target }) =>
    {
        let { value } = target;
        let id = target.dataset.id;
        this.setState({ [id]: value });
        console.log(this.state)
    };

    handleKeyPress = (event) =>
    {
        if (event.target === 13)
        {
            this.handleSubmit(event);
        }
    };

    closeUserData = ({ target }) =>
    {
        let id = target.dataset.id;
        if (id === 'user1')
        {
            this.setState((prevState) => ({
                hideForm1: !prevState.hideForm1,
                closeUser1Data: !prevState.closeUser1Data,
                data1: '',
            }));
        } else
        {
            this.setState((prevState) => ({
                hideForm2: !prevState.hideForm2,
                closeUser2Data: !prevState.closeUser2Data,
                data2: '',
            }));
        }
    };
    toggleDarkMode = () =>
    {
        this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
    };

    render()
    {
        return (
            <div className={this.state.darkMode ? 'dark_bg' : 'light_bg'}>
                <div className="container">
                    <BrowserRouter>
                        <Header toggleDarkMode={this.toggleDarkMode} {...this.state} />
                        <Routes>
                            <Route exact path="/" element={<GitHubStars {...this.state} />} />
                            <Route
                                exact
                                path="/battle"
                                element={
                                    <GitHubBattle
                                        {...this.state}
                                        handleSubmit={this.handleSubmit}
                                        handleChange={this.handleChange}
                                        handleKeyPress={this.handleKeyPress}
                                        closeUserData={this.closeUserData}
                                    />
                                }
                            />

                            <Route path="/userbattle" element={<Battle {...this.state} />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;
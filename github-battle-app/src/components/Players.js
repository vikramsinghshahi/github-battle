function Players(props)
{
    console.log(props);
    let inputText1 = props.inputText1;
    let inputText2 = props.inputText2;
    return (
        <>
            <div className="form_section">
                <div className="form">
                    <form
                        onSubmit={(e) => props.handleSubmit(e)}
                        data-id="inputText1"
                        className={
                            props.hideForm1 && !props.closeUser1Data ? 'hidden' : 'visible'
                        }
                    >
                        <label htmlFor="p-1" className="form_header">
                            Player One
                        </label>
                        <div className="wrapper">
                            <input
                                type="text"
                                placeholder="github username"
                                id="p-1"
                                className={
                                    props.darkMode ? 'handle_input_dark' : 'handle_input_light'
                                }
                                data-id="inputText1"
                                value={inputText1}
                                onChange={(e) => props.handleChange(e)}
                                onKeyDown={(e) => props.handleKeyPress(e)}
                            />
                            <input type="submit" value="submit" className="btn_submit" />
                        </div>
                    </form>
                    <div
                        className={
                            props.closeUser1Data && !props.hideForm1 ? 'hidden' : 'visible'
                        }
                    >
                        <div className="user_info">
                            <img
                                src={props.data1.avatar_url}
                                alt={props.data1.login}
                                className="user_profile"
                            />
                            <h3 className="text-xl ml-6 text-blue-600 font-bold">
                                {props.data1.login}
                            </h3>
                            <div className="cross">
                                <img
                                    data-id="user1"
                                    onClick={(e) => props.closeUserData(e)}
                                    alt=""
                                    src="/images/multiply.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form">
                    <form
                        onSubmit={(e) => props.handleSubmit(e)}
                        data-id="inputText2"
                        className={
                            props.hideForm2 && !props.closeUser2Data ? 'hidden' : 'visible'
                        }
                    >
                        <label htmlFor="p-1" className="form_header">
                            Player Two
                        </label>
                        <div className="wrapper">
                            <input
                                type="text"
                                placeholder="github username"
                                id="p-1"
                                className={
                                    props.darkMode ? 'handle_input_dark' : 'handle_input_light'
                                }
                                data-id="inputText2"
                                value={inputText2}
                                onChange={(e) => props.handleChange(e)}
                                onKeyDown={(e) => props.handleKeyPress(e)}
                            />
                            <input type="submit" value="submit" className="btn_submit" />
                        </div>
                    </form>
                    <div
                        className={
                            props.closeUser2Data && !props.hideForm2 ? 'hidden' : 'visible'
                        }
                    >
                        <div className="user_info">
                            <img
                                src={props.data2.avatar_url}
                                alt={props.data2.login}
                                className="user_profile"
                            />
                            <h3 className="text-xl ml-6 text-blue-600 font-bold">
                                {props.data2.login}
                            </h3>

                            <div className="cross">
                                <img
                                    data-id="user2"
                                    onClick={(e) => props.closeUserData(e)}
                                    alt=""
                                    src="/images/multiply.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Players;
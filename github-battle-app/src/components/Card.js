function Card(props)
{
    return (
        <div className={props.darkMode ? 'card_dark' : 'card_light'}>
            <h2 className="score">#{props.score}</h2>
            <div>
                <img
                    src={props.owner.avatar_url}
                    alt={props.owner.login}
                    className="card_img"
                />
            </div>
            <a className="login" href={props.html_url}>
                <h2>{props.owner.login}</h2>
            </a>
            <div className="card_content">
                <div className="col">
                    <img alt="" src="/images/user.png" />
                    <h3 className="user">{props.owner.login}</h3>
                </div>
                <div className="col">
                    <img alt="" src="/images/star.png" />
                    <h2 className="text-xl inline-block">
                        {props.stargazers_count} Stars
                    </h2>
                </div>
                <div className="col">
                    <img alt="" src="/images/fork.png" />
                    <h2 className="text-xl inline-block">{props.forks} forks</h2>
                </div>
                <div className="col">
                    <img alt="" src="/images/warning.png" />
                    <h2 className="text-xl inline-block">{props.open_issues} issues</h2>
                </div>
            </div>
        </div>
    );
}

export default Card;
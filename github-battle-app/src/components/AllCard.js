import Card from './Card';

function AllCard(props)
{
    let datas = props.data;
    console.log(datas);
    return (
        <section className="card_container">
            {datas.map((data, i) =>
            {
                return (
                    <Card
                        {...data}
                        key={data.id}
                        score={i + 1}
                        darkMode={props.darkMode}
                    />
                );
            })}
        </section>
    );
}
export default AllCard;
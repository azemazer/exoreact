const element = <Clients clients={["Batman", "Spiderman", "IronMan"]} />;

function Clients(props) {

    return <ul>
        {props.clients.map(x => <li>{x}</li>)}
    </ul>
}

export default element
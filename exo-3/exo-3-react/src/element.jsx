const element = <Shout status="King" />;

function Shout(props) {
    return <h1>I am the {props.status} of the World!</h1>;
}

export default element
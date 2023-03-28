const element = <App user="Nom" date={Date()} />;


function App(props) {

    return (
        <div>
            <h1>Welcome back, {props.user}!</h1>
            <p>Today is {props.date}</p>
        </div>
    )
}

export default element
export default function UsingPropsComponent(props){
    debugger;
    props.details.userName = "Anonymous"
    return <h1>Hello {props.details.userName}...</h1>
}
import "./CenteredContainer.css"

export default function CenteredContainer(props){
    console.log(props)
    return (
        <div className="Container">
            {props.children}
        </div>
    );
}
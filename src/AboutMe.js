
import "./App.css"
import CenteredContainer from "./CenteredContainer/CenteredContainer"

export default function AboutMe(){
    return (
        <div className="App-AboutMe">
            <CenteredContainer>
                <h1 className="App-AboutMe-TextHead">Über mich</h1>
                <h1 className="App-AboutMe-Text">Ich bin:</h1>
                <ul>
                    <li className="App-AboutMe-Text">18 Jahre alt</li>
                    <li className="App-AboutMe-Text">Schüler an der HTL-Salzburg</li>
                    <li className="App-AboutMe-Text">Informatik begeistert (mehr zu meinen bereits umgesetzten Ideen unter <b>Projekte</b>)</li>
                </ul>
            </CenteredContainer>
        </div>
    )
}
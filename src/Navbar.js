import "./App.css"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function Navbar(){
    return (
        <div className="App-Navbar">
        <AppBar elevation={0} color="transparent" position="aboslute" >
          <Toolbar>
            <h1 className="App-AboutMe-Text"> Christoph Weberbauer</h1>
          </Toolbar>
        </AppBar>
      </div>
    )
}
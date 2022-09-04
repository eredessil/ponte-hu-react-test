import "./App.scss";
import {Provider} from "react-redux";
import store from "./redux";
import Navigation from "./screens";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter basename={'/'}>
                    <Navigation/>
                </BrowserRouter>
            </Provider>
        </div>

    );
}

export default App;

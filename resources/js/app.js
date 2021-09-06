import ReactDOM from 'react-dom';
import Index from "./components/Index";
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <Index />
        </BrowserRouter>
    , document.getElementById('app'));
}

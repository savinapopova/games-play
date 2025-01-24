
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router";

createRoot(document.getElementById('box')).render(
<BrowserRouter>
    <App />
</BrowserRouter>

)

import ReactDOM from 'react-dom/client'
import "./index.css"
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateUser from './users/CreateUser.jsx';
import UserListing from './users/UserListing.jsx';
import 'boxicons'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/create-user' element={<CreateUser />} />
      <Route path='/list-users' element={<UserListing />} />
    </Routes>
  </BrowserRouter>,
)

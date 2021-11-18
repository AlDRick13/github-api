import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import './App.css';
//layuot
import MainLayout from './layouts/MainLayout';
//pages
import Home from './pages/Home/Home';
import Followers from "./pages/Followers/Followers";

function App() {
   
  return (
   <div className="min-h-screen bg-green ">
     <BrowserRouter>
      <Switch>
        <MainLayout>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/followers/:user" exact>
          <Followers />
          </Route>
        </MainLayout>
      </Switch>
     </BrowserRouter>

   </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import './App.css';
//layuot
import MainLayout from './layouts/MainLayout';
//pages
import HomePage from './pages/Home/HomePage';
import FollowersPage from "./pages/Followers/FollowersPage";
import ReposPage from "./pages/Repos/ReposPage";
function App() {
   
  return (
   <div className="min-h-screen bg-green ">
     <BrowserRouter>
      <Switch>
        <MainLayout>
          <Route path="/" exact>
            <HomePage/>
          </Route>

          <Route path="/:user/followers" exact>
          <FollowersPage />
          </Route>

          <Route path="/:user/repos" exact>
          <ReposPage />
          </Route>

        </MainLayout>
      </Switch>
     </BrowserRouter>

   </div>
  );
}

export default App;

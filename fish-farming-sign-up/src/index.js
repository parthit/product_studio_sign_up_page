import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import Intro from './Header/intro';
import reportWebVitals from './reportWebVitals';
import GroupExample from './Body/Cards/our_solution';
import VisualizationGroup from './Body/visualisations/visualization';
import SignUp from './Body/Sign_up/signUp';
import WhoWeAre from './Body/Background_Info/background_info';
import WhatWeProvide from './Body/info_viz/background_info';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Intro /> 
    <WhoWeAre />
    <GroupExample />
    <br />
    <br />
    <WhatWeProvide />
    <VisualizationGroup />
    <br />
    <br />
    <SignUp />
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

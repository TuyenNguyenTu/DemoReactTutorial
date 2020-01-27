import React from 'react';
import './App.css';
import Course from './Components/Course'
import Caching from './Components/Caching'
import CoreBasic from './Components/CoreBasic'
import CoreCSharp from './Components/CoreCSharp'
import Database from './Components/Database'
import Depen from './Components/Depen'
import Entity from './Components/EntityF'
import Log from './Components/Logs'
import ObjMap from './Components/ObjMap'
import RealTime from './Components/RealTime'
import Skill from './Components/Skill'
import SQL from './Components/SQL'
import Templalte from './Components/TemplateEngines'

function App() {
  return (
    <div>
    <h3 className="App">ASP .NET Core Developer in 2019</h3>
    <div className="row">
        <Course/>
        <Caching></Caching>
        <CoreBasic></CoreBasic>
        <CoreCSharp></CoreCSharp>
        <Database></Database>
        <Depen/>
        <Entity/>
        <Log/>
        <ObjMap/>
        <RealTime/>
        <Skill/>
        <SQL/>
        <Templalte/>
    </div>
    </div>

  );
}

export default App;

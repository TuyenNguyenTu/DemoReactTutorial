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
import ApiClient from './Components/ApiClient'
import GoodToKnow from './Components/GoodToKnow'
<<<<<<< HEAD
import CourseGood from './Components/CourseGoodToKnow'
=======

>>>>>>> 9e57f11fae56b81735d160bbe298a6d926a08d0f
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
        <ApiClient/>
        <GoodToKnow/>
<<<<<<< HEAD
        <CourseGood Tuyen="Kĩ năng mềm" time="30h" free="true"/>
        <CourseGood Tuyen="Kĩ năng cần có" time="25h" free="false"/>
        <CourseGood Tuyen="Reacjs" time="30h" free="true">ReactJs</CourseGood>
=======
>>>>>>> 9e57f11fae56b81735d160bbe298a6d926a08d0f
    </div>
    </div>

  );
}

export default App;

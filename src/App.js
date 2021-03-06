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
import CourseGood from './Components/CourseGoodToKnow'
import NodeJs from './Components/NodeJS'
import LifeCycle from './Components/LifeCycle'
import Solid from './Components/Solid'
import DesignPattern from './Components/DesignPatterns'

function App() {
  const items = [
    {
        Tuyen: 'F#',
        time: '30h',
        free: 'true',
        liChildren:'Giao Tiếp'
    },
    {
        Tuyen:'Angular 4x',
        time: '50h',
        free: 'false',
        liChildren:'Làm Việc'
    },
    {
        Tuyen:'NodeJs',
        time: '55h',
        free: 'true',
        liChildren:'Express'
    }
];

const elementCourse = items.map((item)=>

<CourseGood Tuyen={item.Tuyen} time={item.time} free={item.free} key={item.Tuyen} liChildren={item.liChildren}/>
);
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
        <Solid/>
        <DesignPattern/>
        <GoodToKnow/>
        <LifeCycle/>
        <NodeJs Tuyen="NodeJs" time="35h" liChildren="ExpressJs" liChildren1="Single Thread" liChildren2="Typescript" liChildren3="Typescript" liChildren4="Typescript" />
        {elementCourse}
        {/* <CourseGood Tuyen="Kĩ năng mềm" time="30h" free="true"/>
        <CourseGood Tuyen="Kĩ năng cần có" time="25h" free="false"/> */}
        {/* <CourseGood Tuyen="Reacjs" time="30h" free="true">ReactJs</CourseGood> */}

    </div>
    </div>

  );
}

export default App;

import React from 'react'
import Lesson from './LessonCourse'
import Lesson1 from './LessonCourseP2'
import Entity from './Entity.Component'
class Course extends React.Component {
    render() {
        return (

            <div className="col-xs-4 col-sm-4 col-md-4 col-log-4 margin">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title title">.NET</h3>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            <Lesson/>
                            <Lesson1/>
                            <Entity/>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}
export default Course
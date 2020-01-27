import React from 'react'

class Skill extends React.Component {
    render() {
        return (

            <div className="col-xs-4 col-sm-4 col-md-4 col-log-4 margin">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title title">General Development Skills</h3>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            <li className="list-group-item li-hover">GIT - Version Control(VSTS, GitHub, Gitlab)</li>
                            <li className="list-group-item li-hover">HTTP/HTTPS protocol</li>
                            <li className="list-group-item li-hover">Learn to search solutions</li>
                            <li className="list-group-item li-hover">Learn dotnet CLI</li>
                            <li className="list-group-item li-hover">Data Structures and Algorithms</li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}
export default Skill
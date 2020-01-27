import React from 'react'

class Logs extends React.Component {
    render() {
        return (

                <div className="col-xs-4 col-sm-4 col-md-4 col-log-4 margin">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title title">Logs Frameworks</h3>
                        </div>
                        <div className="panel-body">
                            <ul className="list-group">
                                <li className="list-group-item li-hover">log4net</li>
                                <li className="list-group-item li-hover">Serilog</li>
                                <li className="list-group-item li-hover">NLog</li>
                                <li className="list-group-item li-hover">Elmah</li>
                                <li className="list-group-item li-hover">Log Management System</li>
                            </ul>
                        </div>
                    </div>
                </div>

        )
    }
}
export default Logs
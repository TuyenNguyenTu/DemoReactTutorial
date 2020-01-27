import React from 'react'

class Dependency extends React.Component {
    render() {
        return (

                <div className="col-xs-4 col-sm-4 col-md-4 col-log-4 margin">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title title">Dependency Injection</h3>
                        </div>
                        <div className="panel-body">
                            <ul className="list-group">
                                <li className="list-group-item li-hover">DI Containers </li>
                                <li className="list-group-item li-hover">Scrutor</li>
                                <li className="list-group-item li-hover">Life cycles</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>

        )
    }
}
export default Dependency
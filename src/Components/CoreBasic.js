import React from 'react'

class CoreBasic extends React.Component {
    render() {
        return (

                <div className="col-xs-4 col-sm-4 col-md-4 col-log-4 margin">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title title">ASP .NET Core Basics</h3>
                        </div>
                        <div className="panel-body">
                            <ul className="list-group">
                                <li className="list-group-item li-hover">MVC</li>
                                <li className="list-group-item li-hover">REST</li>
                                <li className="list-group-item li-hover">Razor Pages</li>
                                <li className="list-group-item li-hover">Middlewares</li>
                                <li className="list-group-item li-hover">Razor Components</li>
                                <li className="list-group-item li-hover">Filter & Attributes</li>
                                <li className="list-group-item li-hover">Application Setting & Configurations</li>
                            </ul>
                        </div>
                    </div>
                </div>
      
        )
    }
}
export default CoreBasic
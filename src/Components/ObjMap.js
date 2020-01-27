import React from 'react'

class ObjectMap extends React.Component{
    render() {
        return (

            <div className="col-xs-4 col-sm-4 col-md-4 col-log-4 margin">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title title">Objec Mapping</h3>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            <li className="list-group-item li-hover">AutoMapper</li>
                            <li className="list-group-item li-hover">Mapster</li>
                            <li className="list-group-item li-hover">AgileMapper</li>
                            <li className="list-group-item li-hover">ExpressMapper</li>
                         
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}
export default ObjectMap
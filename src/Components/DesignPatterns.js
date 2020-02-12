import React from 'react'

class DesignPattern extends React.Component {
  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-log-4 margin">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title title">Design Patterns</h3>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              <li className="list-group-item li-hover">CQRS</li>
              <li className="list-group-item li-hover">Decorator</li>
              <li className="list-group-item li-hover">Strategy</li>
              <li className="list-group-item li-hover">Observer</li>
              <li className="list-group-item li-hover">Builder</li>
              <li className="list-group-item li-hover">Singleton</li>
              <li className="list-group-item li-hover">Facade</li>
              <li className="list-group-item li-hover">Mediator</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default DesignPattern
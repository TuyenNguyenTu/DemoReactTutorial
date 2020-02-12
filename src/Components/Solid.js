import React from 'react'

class Solid extends React.Component {
  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-log-4 margin">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title title">SOLID</h3>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              <li className="list-group-item li-hover">Single Responsibility Priniciple(SRP)</li>
              <li className="list-group-item li-hover">Open-Closed Principl(OCP)</li>
              <li className="list-group-item li-hover">Liskov Substitution Priniciple(LSP)</li>
              <li className="list-group-item li-hover">Interface Segregation Priniciple</li>
              <li className="list-group-item li-hover">Dependency Inversion Priniciple</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Solid
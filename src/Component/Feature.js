import React from 'react'

const Feature = (props) => {
  const mystyle={
    width: '60%',
    marginTop: '20px',
  }
  return (
    <>
        <div className="container" style={mystyle}>
        <div className="card bg-dark text-light my-1">
          <div className="card-header">{props.feature_itself}</div>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text text-secondary">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feature;
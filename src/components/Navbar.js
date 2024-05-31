import React from 'react'

export default function Navbar() {
  return (
    <>
    <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/" >Nitins Page</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/" >Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/" >Resume</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Projects
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/" >Action</a>
          <a className="dropdown-item" href="/" >Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/" >Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="/"  tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

  </div>
</nav>
</div>

<Navbar></Navbar>
 <div id="capabilities" >
     
        <h1 >REAL WORLD CAPABILITIES</h1>
            <div>
                <img className="centered" src="/images/datascience logo.png" />
                <h3>DATASCIENCE TECHNIQUES</h3>
                <ul id="first-ul">
                    <li> Collecting Raw Data </li>
                    <li> Defining Problem statement </li>
                    <li>Exploratory Data Analysis</li>
                    <li>Feature Engineering</li>
                    <li>Feature selection</li>
                    <li>Model Building</li>
                    <li>Hyperparameter Tuning </li>
                    <li>Model Evaluation</li>
                </ul>
            </div>
           
            <div>
                <img className="centered" src="/images/mid-cap.png" />
                <h3 >PRODUCT MONITORING</h3>
                <ul>
                    <li>I use Dvc for tracking the data and pipelines .By storing user-generated data in a secure
                        database MongoDB, I ensure a robust foundation for model training. Leveraging Airflow, I
                        automate continuous model training, enabling it to adapt to evolving trends and patterns in the
                        data seamlessly. Additionally, I employ Evidently AI for meticulous model monitoring, ensuring
                        model performance remains optimal over time </li>
                </ul>
            </div>
      
 </div>

    </>
  )
}

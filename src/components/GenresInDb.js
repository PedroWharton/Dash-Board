import React, { useState, useEffect } from "react";

function GenresInDb() {
  const [categories, setCategories] = useState([]);
  const fetchURL = 'http://localhost:3000/api/categories';

  useEffect(() => {
    fetch(fetchURL)
    .then(response => response.json())
    .then(data => {
        setCategories(data.rows)
    })
}, [])



    
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categories in Data Base
          </h5>
        </div>
        <div className="card-body">
        <div className="row">
        <div className="row">
          {categories.map((c => {
                return <div className="col-lg-6 mb-4">
                          <div className="card bg-dark text-white shadow">
                            <div className="card-body">{c.name}</div>
                          </div>
                        </div>
            }))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;

/*<div className="row">
          {categories.map((c => {
                return <div className="col-lg-6 mb-4">
                          <div className="card bg-dark text-white shadow">
                            <div className="card-body">{c.name}</div>
                          </div>
                        </div>
            }))}
          </div>*/

import React, { Component } from 'react'
import AmazonLogo from '../../assets/Amazon_logo.svg'
import CTAList from '..//cta-list/ctaList'

const ResultList = (props) => {

  const { totalResultAmount, results, onDelete } = props;

  function handleDelete(item) { 
    onDelete(item);
  }

  return (
    <React.Fragment>
      <p className="mt-2 mb-0">We found { totalResultAmount } products for you.</p>
      <div className="result-list row">
        {
          results.map(result => (
            <div key={result._id} className="col-sm-6 col-lg-4 mt-4 md-4" data-testid="result-item">
              <div className="card">
                <div className="card-body">
                  <img src={AmazonLogo} className="card-img-top" alt={"Amazon Prime Placeholder"}/>
                  <h2 className="card-title mt-4">{result.title}</h2>
                  <h5 className="card-title mt-2">{result.category.name}</h5>
                  <p className="card-text mt-2">{result.description}</p>
                  <CTAList
                    onDelete={() => handleDelete(result)}
                  />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </React.Fragment>
  );
  
}
 
export default ResultList;
import React from 'react'
import AmazonLogo from '../../assets/Amazon_logo.svg'
import CTAList from '..//cta-list/ctaList'

const ResultList = (props) => {

  const { totalResultAmount, results, onSave, onDelete } = props;

  function handleDelete(item) { 
    onDelete(item);
  }

  function handleSave(item) {
    onSave(item);
  }
  
  function handleShowMore(e) {
    const target = e.currentTarget.parentElement;
    if (!target.querySelector(".expanded")) {
      target.querySelector(".card-text").classList.add("expanded");
      target.querySelector(".show-more").innerText = "Show Less";
    } else { 
      target.querySelector(".card-text").classList.remove("expanded");
      target.querySelector(".show-more").innerText = "Show More";
    }
  }

  return (
    <React.Fragment>
      <p className="description mb-0">We found <b>{ totalResultAmount }</b> products for you.</p>
      <div className="result-list row">
        {
          results.map(result => (
            <div key={result._id} className="col-sm-6 col-lg-4 mt-4 md-4" data-testid="result-item">
              <div className="card">
                <div className="card-body">
                  <img src={AmazonLogo} className="card-img-top" alt={"Amazon Prime Placeholder"}/>
                  <h3 className="title card-title mt-4">{result.title}</h3>
                  <h5 className="category card-title mt-2">{result.category.name}</h5>
                  <div className="description">
                    <p className="card-text mt-2">{result.description}</p>
                    <span className="show-more d-flex justify-content-center mb-2" onClick={handleShowMore}>Show More</span>
                  </div>
                  <CTAList
                    onSave={() => handleSave(result)}
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
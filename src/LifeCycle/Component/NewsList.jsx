import React, { Component } from "react";
class NewsList extends Component {


  render() {
    return (
      <div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.props.articles.map((article) => (
            <div key={article.url} className="col-sm-4" style={{ display: "flex" }}>
              <div key={article.title} className="card mx-5 my-3">
                <img src={article.urlToImage} key={article.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title" key={article.title} >{article.title}</h6>
                  <p className="fs-6" key={article.author}>
                    {article.author} {article.publishedAt}
                  </p>
                  <p className="card-text" key={article.description}>{article.description}</p>
                  <a href={article.url} className="btn btn-primary" key={article.url}>
                    Read More...
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default NewsList;

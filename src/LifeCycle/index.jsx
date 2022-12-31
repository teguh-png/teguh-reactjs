import axios from "axios";
import React from "react";
import NavBar from "./Component/NavBar";
import NewsList from "./Component/NewsList";
import SearchBar from "./Component/SearchBar"

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      articles: [],
    };
  }

  componentDidMount() {
    console.log("DID MOUNT");
    this.fetchArticles();
  }

  componentDidUpdate() {
    console.log('DID UPDATE');
  }

  componentWillUnmount() {
    console.log("WILL UNMOUNT");
    this.setState({ articles: []});
  }

  fetchArticles = () => {
    const apiKey = 'ec9fb3f7a0504d73a2f447742e80381b';
    const url = `https://newsapi.org/v2/top-headlines?country=id&q=${this.state.searchTerm}&apiKey=${apiKey}`;
    axios.get(url).then((res) => {
      this.setState({ articles: res.data.articles });
    });
  }

  handleSearchInputChange = (event) => {
    this.setState({ searchTerm : event.target.value });
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.fetchArticles();
    
  }

  render() {
    return (
      <div>
        <NavBar />
        <SearchBar 
          searchTerm={this.state.searchTerm}
          handleSearchInputChange={this.handleSearchInputChange}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        {this.state.articles.length > 0 ? (
          <NewsList articles={this.state.articles} />
        ) : (
          <div>
            <h2 style={{marginLeft: '80px'}}>No articles to display</h2>
          </div>
        )}
      </div>
    );
  }
}

export default LifeCycle;

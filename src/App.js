import React, { Component } from 'react';
import './App.css';
import News from './News';

class App extends Component {

  state = { 

  }

  componentDidMount() {
    this._getNews();
  }

  _renderNews = () => {
    const all_news = this.state.all_news.map((news,index) => {
      console.log(news)
      return <News 
      title={news.title} 
      poster={news.urlToImage} 
      key={index} 
      author={news.author}
      description={news.description}
      />
    })
    return all_news
  }

  _getNews = async () => {
    const all_news = await this._callApi()
    this.setState({
      all_news
    })
  }

  _callApi = () => {
    return fetch('https://newsapi.org/v2/top-headlines?country=kr&apiKey=2f00d3a6133349baa018e75d6963c510')
    .then(response => response.json())
    .then(json => json.articles)
    //.then(json => console.log(json))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        { this.state.all_news ? this._renderNews() : '잠시만 기다려 주세요'}
      </div>
    );
  }

}

export default App;

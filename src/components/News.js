import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    // console.log("Hello i am a contructor from new component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

//run after the render() 
  async componentDidMount(){
    // console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=(api key)&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({articles: parsedData.articles , totalResults:parsedData.totalResults});
  }

  handleNextClick = async()=>{
    // console.log("Next");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=(api key)&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }
  
  handlePreviousClick = async()=>{
    // console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=(api key)&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }

  render() {
    // console.log("render");
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines </h2>
        {/* {this.state.articles.map((element)=>{console.log(element)})}  --displays the objects of article */}
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                      <NewsItem title={element.title?(element.title.length>=45?element.title.slice(0, 45):element.title):""} 
                      description={element.description?(element.description.length>=60?element.description.slice(0, 60):element.description):""} 
                      imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}

export default News

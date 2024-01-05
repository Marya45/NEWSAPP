import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalizefirstletter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    // console.log("Hello i am a contructor from new component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `NewsMonkey - ${this.capitalizefirstletter(this.props.category)}`;
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=(APIKEY)&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({articles: parsedData.articles , 
      totalResults:parsedData.totalResults , 
      loading: false
    });
  }

//run after the render() 
  async componentDidMount(){
    this.updateNews();
  }

  handleNextClick = async()=>{
    this.setState({page: this.state.page + 1});
    this.updateNews();
  }
  
  handlePreviousClick = async()=>{
    this.setState({page: this.state.page - 1});
    this.updateNews();
  }

  render() {
    // console.log("render");
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: '35px 0px'}} >NewsMonkey - Top {this.capitalizefirstletter(this.props.category)} Headlines </h1>
        {this.state.loading && <Spinner/>}
        {/* {this.state.articles.map((element)=>{console.log(element)})}  --displays the objects of article */}
        <div className="row">
          {!(this.state.loading) && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                      <NewsItem title={element.title?(element.title.length>=45?element.title.slice(0, 45):element.title):""} 
                      description={element.description?(element.description.length>=60?element.description.slice(0, 60):element.description):""} 
                      imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}

export default News

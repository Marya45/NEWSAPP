import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

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
      page: 1,
      totalResults: 0
    }
    document.title = `NewsMonkey - ${this.capitalizefirstletter(this.props.category)}`;
  }

  async updateNews(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    // console.log(parsedData);
    this.setState({articles: parsedData.articles , 
      totalResults: parsedData.totalResults , 
      loading: false
    });
    this.props.setProgress(100);
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

  fetchMoreData = async() => {
    this.setState({page: this.state.page + 1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({articles: this.state.articles.concat(parsedData.articles) , 
      totalResults: parsedData.totalResults , 
      loading: false
    });
  };

  render() {
    // console.log("render");
    return (
      <>
        <h1 className="text-center" style={{margin: '35px 0px'}} >NewsMonkey - Top {this.capitalizefirstletter(this.props.category)} Headlines </h1>
        {/* {this.state.loading && <Spinner/>} */}

        {/* {this.state.articles.map((element)=>{console.log(element)})}  --displays the objects of article */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

          <div className="row">
            {this.state.articles.map((element,index)=>{
              return <div className="col-md-4" key={index}>
                        <NewsItem title={element.title?(element.title.length>=45?element.title.slice(0, 45):element.title):""} 
                        description={element.description?(element.description.length>=60?element.description.slice(0, 60):element.description):""} 
                        imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                      </div>
            })}
          </div>

          </div>
        </InfiniteScroll>

      </>
    )
  }
}

export default News

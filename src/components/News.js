import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles = [
    {
      "source": { "id": "ars-technica", "name": "Ars Technica" },
      "author": "Jonathan M. Gitlin",
      "title": "Here are the 10 best cars we drove in 2023",
      "description": "EVs, hybrids, and a couple of sports cars—here are the 10 best cars we drove in 2023.",
      "url": "https://arstechnica.com/cars/2023/12/here-are-the-10-best-cars-we-drove-in-2023/",
      "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/12/ars-cars-of-2021-760x380.jpg",
      "publishedAt": "2023-12-29T12:30:40+00:00",
      "content": "125\r\nThe mince pies have been eaten, the crackers have been cracked, and the days are starting to get longer. That means it's time to look back on the best vehicles we tested in 2023. It has been a g… [+3733 chars]"
    },
    {
      "source": { "id": "talksport", "name": "TalkSport" },
      "author": "Josh Fordham",
      "title": "Manchester United release statement after journalists ‘banned’ from press conference...",
      "description": "Manchester United explained why four journalists were banned from an Erik ten Hag press conference on Tuesday. Sky Sports chief reporter Kaveh Solhekhol, the Manchester Evening News’ Samuel L…",
      "url": "https://talksport.com/football/1666142/man-utd-journalists-banned-press-conference-erik-ten-hag/",
      "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/10/228f511f-c84a-48e8-b067-5c7277d90984.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
      "publishedAt": "2023-12-05T12:12:06Z",
      "content": "Manchester United explained why four journalists were banned from an Erik ten Hag press conference on Tuesday.\r\nSky Sports chief reporter Kaveh Solhekhol, the Manchester Evening News' Samuel Luckhurs… [+820 chars]"
    },
    {
      "source": { "id": "bleacher-report", "name": "Bleacher Report" },
      "author": null,
      "title": "New Micah Parsons Show ",
      "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      "url": "https://bleacherreport.com/videos/490566-the-edge-w-micah-parsons-ep-11-vod",
      "urlToImage": null,
      "publishedAt": "2023-11-27T20:37:24.6381564Z",
      "content": null
    },
    {
      "source": { "id": "bleacher-report", "name": "Bleacher Report" },
      "author": null,
      "title": " Mikal Bridges Interview ",
      "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      "url": "https://bleacherreport.com/videos/491103-taylor-rooks-x-mikal-bridges-vod",
      "urlToImage": null,
      "publishedAt": "2023-11-27T20:37:24.3882176Z",
      "content": "Nets star sits down with Taylor Rooks for exclusive convo."
    }
  ]

  constructor(){
    super();
    console.log("Hello i am a contructor from new component");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className="container my-3">

        <h2>NewsMonkey - Top Headlines </h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="Mytitle" description="Mydesc" 
            imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"
            newsUrl="TODO"/>
          </div>
        </div>

      </div>
    )
  }
}

export default News

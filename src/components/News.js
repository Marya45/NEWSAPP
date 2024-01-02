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
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]

  constructor(){
    super();
    // console.log("Hello i am a contructor from new component");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

//run after the render() 
  async componentDidMount(){
    // console.log("cdm");
    let url = "API-URL";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles});
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

      </div>
    )
  }
}

export default News

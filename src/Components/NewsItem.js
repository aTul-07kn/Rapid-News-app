import React from "react";

const NewsItem=(props)=>{
    let defaultImage =
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/breaking-news-poster-design-template-232c3f2700b91a0fd6e3a5a2e583a5da_screen.jpg?ts=1610645412";
    let defaultNewsUrl =
      "https://news.google.com/home?hl=en-IN&gl=IN&ceid=IN:en";
    let { title, description, urlToImage, url, author, date, source} = props; //Destructuring of props
    return (
      <div className="my-3">
        <div className={`card text-${props.mode==="light"? "dark":"light"}`} style={{backgroundColor:props.mode==="light"? "white": "#282C35"}}>
          <img
            style={{ height: 300 }}
            src={urlToImage ? urlToImage : defaultImage}
            className="card-img-top"
            alt="News"
          />
          <div className="card-body">
            <h5 className="card-title">{title==='[Removed]' || title===null ? "Breaking News" : title}</h5>
            <span className="badge bg-danger">{source}</span>
            <p className="card-text">
              {description
                ? description
                : "See the full news article by clinking the below button"}
            </p>
            <p className={`card-text text-${props.mode==="light"? "secondary": "light"}`}>
              <small>
                By {author ? author : "Unknown"} -{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={url ? url : defaultNewsUrl}
              target="_blank"
              rel="noreferrer"
              className={`btn btn-sm btn-${props.mode==="light"? "dark":"primary"}`}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
import React, { useState } from 'react'
import NewsItem from './NewsItem'
import Loading from "./Loading"
import PropTypes from "prop-types"
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect } from 'react';

const News=(props)=>{

  const[articles,setArticles]=useState([]);
  const[page,setPage]=useState(1);
  const[totalResults,setTotalResults]=useState(0);
  const[loading,setLoading]=useState(false);

  const capitalize=(str)=>{
    str=str[0].toUpperCase()+str.slice(1)
    return str 
  }
  // constructor(props){
  //   super(props);
  //   console.log("state in constructor...")
  //   state={
  //     articles : [],
  //     page: 1, //for 1st page, we will keep on updating when the user clicks next or previous
  //     totalResults: 0,
  //     loading: false
  //   }
  //   document.title=`Rapid - ${capitalize(props.category)}`
  // }

  async function updateNews(){
    props.setProgress(10)
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data=await fetch(url)
    props.setProgress(30)
    let parsedData=await data.json()
    props.setProgress(70)
    console.log(parsedData)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)	
  }

  //in place of component did mount use this
  useEffect(()=>{
    document.title=`Rapid - ${capitalize(props.category)}`
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const fetchingData=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data=await fetch(url)
    let parsedData=await data.json()
    console.log(parsedData)
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }
  //to make the usePage() synchronous use the below useEffect() hook
  useEffect(()=>{
    fetchingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[page])


  // async function componentDidMount(){
  //   updateNews();
  //   // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3fa5d812607740ebb38dc0510d5316ca&page=1&pageSize=${props.pageSize}`
  //   // setState({
  //   //   loading: true
  //   // })
  //   // let data=await fetch(url)
  //   // let parsedData=await data.json()
  //   // console.log(parsedData)
  //   // setState({
  //   //   articles : parsedData.articles,
  //   //   totalResults: parsedData.totalResults,
  //   //   loading: false
  //   // })
  // }

  // handlePrevClick= async ()=>{
  //   console.log("prev")
  //   setState({
  //     page : state.page-1
  //   }, updateNews)  //pass the updateNews() function as callback as setSate is asynchronous

  //   // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3fa5d812607740ebb38dc0510d5316ca&page=${state.page-1}&pageSize=${props.pageSize}`
  //   // setState({
  //   //   loading: true
  //   // })
  //   // let data=await fetch(url)
  //   // let parsedData=await data.json()
  //   // console.log(parsedData)
  //   // setState({
  //   //   page: state.page-1,
  //   //   articles: parsedData.articles,
  //   //   loading: false
  //   // })
  // }
  // handleNextClick= async ()=>{
  //   console.log("next")
  //   setState({
  //     page: state.page+1
  //   }, updateNews)
  //   // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3fa5d812607740ebb38dc0510d5316ca&page=${state.page+1}&pageSize=${props.pageSize}`
  //   // setState({
  //   //   loading: true
  //   // })
  //   // let data=await fetch(url)
  //   // let parsedData=await data.json()
  //   // console.log(parsedData)
  //   // setState({
  //   //   page: state.page+1,
  //   //   articles: parsedData.articles,
  //   //   loading: false
  //   // })
  // }
  const fetchMoreData = async ()=>{
    setPage(page+1)
    
  }
    return (
      <>
        <h1 className="text-center my-4" style={{paddingTop: "70px"}}>Rapid - Headlines on <span className='category'>{capitalize(props.category)}</span></h1>
        {loading && <Loading />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          loader={loading && <Loading />}
          hasMore={articles.length!==totalResults}
          
        >
          <div className="container">
            <div className="row">
              {articles.filter(ele=>ele.title!=='[Removed]' || ele.title!==null).map((element)=>{
                  return(
                    <div className="col-md-4" key={element.url}>
                      <NewsItem mode={props.mode} title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button onClick={handlePrevClick} disabled={state.page<=1} type="button" className="btn btn-dark">&larr; Previous</button>
          <button onClick={handleNextClick} disabled={state.page>=Math.ceil(state.totalResults/props.pageSize)} type="button" className="btn btn-dark">Next &rarr;</button>
        </div> */}
      </>
    )
}


News.propTypes={
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string
}

News.defaultProps={
  pageSize: 9,
  country: "us",
  category: "general"
}

export default News

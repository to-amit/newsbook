import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize: 6,
    category: 'general'
  }
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string

  }
   cpitalize =(string)=>{
     return string.charAt(0).toUpperCase()+string.slice(1);
   }
    constructor(){
        super();
        this.state={
           articles: [],
           loading:false,
           page:1
        }
      }
      async updateNews(){
        const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e3cbfe1df9e2415aba1708c2749bcfdb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);

        let parsedData =await data.json();
        this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults,loading:false});
        console.log(parsedData);
      }

    async  componentDidMount(){
       this.updateNews();
      }

    handlePreviousClick = async ()=>{
 
      this.setState({page: this.state.page-1})
      this.updateNews();
    }  
    handleNextClick = async ()=>{
     
      this.setState({page: this.state.page+1})
      this.updateNews();
    }

  render() {
    return (
      <div className='container my-3'>
        
          <h2 className='my-4 text-center'>NewsBook - Top {this.cpitalize(this.props.category)} Headlines </h2>
           {this.state.loading && <Spinner/>}
            <div className="row">
              {!this.state.loading && this.state.articles.map((element)=>{
                  return  <div className="col-md-4 " key={element.url}>
                  <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>
              })}   
            </div>
          <div className="container d-flex justify-content-center">
            <button disabled={this.state.page<=1} type="button" class="btn btn-info mx-3" onClick={this.handlePreviousClick} >&larr;Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-info mx-3" onClick={this.handleNextClick} >Next &rarr;</button>
          </div>
          
      </div>
    )
  }
}

export default News
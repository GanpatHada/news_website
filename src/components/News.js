import React, { Component } from 'react'
import Newsitems from './Newsitems'

import logo from './spinner-unscreen.gif'
import logo1 from './spinner2.gif'
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
    constructor() {
        super();
        console.log("Hello news");
        this.state = {
            articles: [],
            loading: false,
            page: 1,

        }
    }

    async componentDidMount()//life cycle
    {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=212ca41fb8884d25845d48b8bfcec73a&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({loading:false});
        this.setState({ articles: parseddata.articles });
        this.setState({totalResults:parseddata.totalResults});
    }
    
    
    fetchMoreData =async()=>
    {
        this.setState({page:this.state.page+1});
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=212ca41fb8884d25845d48b8bfcec73a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: false });
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({ loading: false });
        this.setState({
            page: this.state.page + 1,
            articles: this.state.articles.concat(parseddata.articles)
        });

    }
    render() {
        return (
            <div className="container my-4 text-center">
                <h1 className="" style={{marginTop:'70px'}}>Top Headlines</h1>
                {this.state.loading && <img className="my-5"src={logo} alt="loading..." style={{height:'5rem'} } />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length<=this.state.totalResults}
                    loader={<img className="my-5"src={logo1} alt="loading..." style={{height:'5rem'} } />}
                >
                <div className="container">

                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <Newsitems title={element.title ? element.title : 'title not found'} description={element.description} imageurl={element.urlToImage ? element.urlToImage : "https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg"} newsurl={element.url} />
                            </div>
                        )
                    })}

                </div>   
                </div>
                </InfiniteScroll>
                {/* */}
               
               
            </div>
        )
    }
}

export default News

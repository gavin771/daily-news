import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectedNews, clearSelectedNews } from '../actions'
import { bindActionCreators } from 'redux'

import Counter from './LikesCounter'

class News extends Component {

  componentDidMount () {
    this.props.selectedNews(this.props.match.params.id)
  }

  componentWillUnmount () {
    this.props.clearSelectedNews()
  }

  renderNews = ({ selected }) => {
    if (selected) {
      return selected.map((i) => {
        return (
          <div key={i.id}>
            <div className="tags">
              <span><i className="fa fa-eye"></i>{i.views}</span>
              <span><i className="fa fa-thumbs-up"></i>{i.likes[0]}</span>
              <span><i className="fa fa-thumbs-down"></i>{i.likes[1]}</span>
            </div>
            <div className="top">
              <h2>{i.title}</h2>
              <span>Article by: <strong>{i.author}</strong></span>
            </div>
            <img alt={i.title} src={`/images/articles/${i.img}`} />
            <div className="body_news">{i.body}</div>
            <div>
              <Counter
                articleId={i.id}
                type="HANDLE_LIKES_ARTICLE"
                section="articles"
                likes={i.likes[0]}
                dislikes={i.likes[1]} />

            </div>
          </div>
        )
      })
    }
  }
  render () {
    return (
      <div className="news_container">
        {this.renderNews(this.props.articles)}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    articles: state.articles,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ selectedNews, clearSelectedNews }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(News)
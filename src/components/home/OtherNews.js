import React from 'react'
import { Link } from 'react-router-dom';

const OtherNews = (props) => {

  const showOther = ({ other }) => {
    if (other) {
      return other.map((i) => {
        return (
          <Link to={`/news/${i.id}`} key={i.id} className="item">
            <div className="left" style={{ background: `url(/images/articles/${i.img})` }}></div>
            <div className="right">
              <h3>{i.title}</h3>
              <div className="category_tag">{i.category}</div>
              <div className="tags">
              <span>
                <i className="fa fa-eye">
                {i.views}
                </i>
                <i className="fa fa-thumbs-up">
                {i.likes[0]}
                </i>
              </span>
              </div>
            </div>
          </Link>
        )
      })
    }
  }

  return (
    <div className="other_news">
      <h2>Other News</h2>
      <div className="other_news_items">
        {showOther(props)}
      </div>
    </div>
  )
}

export default OtherNews
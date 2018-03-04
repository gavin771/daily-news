import React from 'react';
import { Link } from 'react-router-dom';

const LatestNews = (props) => {

  const showLatest = ({ latest }) => {
    if (latest) {
      return latest.map((i) => {
        return (
          <Link to={`/news/${i.id}`} key={i.id} className="item">
            <div
              className="image_cover"
              style={{ background: `url(/images/articles/${i.img})` }}
            >
              <div className="description">
                <span>{i.category}</span>
                <div>{i.title}</div>
              </div>
            </div>
          </Link>
        )
      })
    }
  }
  return (
    <div className="home_latest">
      {showLatest(props)}
    </div>
  )
}

export default LatestNews
import React from 'react'
import './styles/News.scss'

const News = ({ children, title }) => (
  <section className="news">
    <h1>{title}</h1>
    <div className="news_container">
      {children}
    </div>
  </section>
)

export default News

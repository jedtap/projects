import React from 'react'
import BlogData from '../helpers/BlogData'


import '../styles/Blog.css'

const Blog = () => {
  return (<>
    <div className='alt-color'>
      <br />
      <br />
      <h1 className='section-name-alt'>TOP STORIES</h1>
      <br />
      <a href="https://www.linkedin.com/in/jed-tapiador/recent-activity/all/" target="_blank" rel="noopener noreferrer" title="View latest LinkedIn posts" className="linkedin-link">Check out more stories!</a>
      <br />
      <div className='blog-wrapper'>
        { BlogData.map((item, key) => 
          <div className='blog-unit' key={key}>
            <a href={item.link} className="blog-link" target="_blank" rel="noopener noreferrer" title="Check out the LinkedIn post!">
              <img className='blog-img' src={item.img} alt={item.alt} />
              <p className='blog-link'>Read more</p>
            </a>
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  </>)
}

export default Blog
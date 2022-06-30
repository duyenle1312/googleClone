import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router';

const links = [
    { url: '/', text: '🔍 General' },
    { url: '/images', text: '📷 Images' },
    { url: '/videos', text: '🎥   Videos' },
    { url: '/news', text: '📰 News' },
    // { url: '/scholar', text: 'All' },
]

export const Links = () => {
  return (
    <div className='flex sm:justify-around justify-between items-center mt-4'>
        {links.map(({url, text}) => (
          
        
            <NavLink exact={true} to={url} className={(navData) => (navData.isActive ? "text-md text-blue-700 font-semibold dark:text-blue-300 pb-2" : "text-md m-2 mb-3")}>
                {text}
            </NavLink>
        ))}
    </div>
  )
}

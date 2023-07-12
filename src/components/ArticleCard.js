import React from 'react'

const ArticleCard = ({article}) => {
  return (
    <div className='flex flex-col w-1/4 p-2 border border- m-2 rounded-2xl space-x-2 space-y-2'>
        <img src={article.urlToImage} alt={article.title} className='w-full h-48 object-contain border rounded-xl'/>
        <h1 className='line-clamp-2 text-xl font-bold'>{article.title}</h1>
        <p className='line-clamp-4'>{article.description}</p>
        <a href={article.url} className='italic hover:text-sky-400 duration-100 text-end'>Read More....</a>
    </div>
  )
}

export default ArticleCard
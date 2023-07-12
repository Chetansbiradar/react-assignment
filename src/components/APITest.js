import { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard';

const APITest = () => {
  const [news, setNews] = useState([]);
  useEffect(()=>{
    getNews();
  },[]);

  async function getNews(){
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=ca2de507569d48b3917007eb8ae306e8');
    const data = await response.json();
    console.log(data);
    setNews(data.articles);
  }
  return (
    <>
    <h1 className='text-3xl text-center m-5 sticky top-0 bg-white p-5'>Trending News</h1>
    <div className='flex flex-wrap justify-evenly'>
      {news.map((article)=><ArticleCard key={article.title} article={article}/>)}
    </div>
    </>
  )
}

export default APITest
import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Link, useLocation } from 'react-router-dom';
import { apiSearch } from '../api/api';

const Search = () => {
  const [res, setRes] = useState();
  
  const [isV, setIsV] = useState(1);
  const button3 = (contentId) =>{
    setIsV(contentId);
  }

  //검색 쿼리 가져오기
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  // useEffect(() => {
  //   (async function (query) {
  //     setRes(await apiSearch(query))
  //   }())
  // }, [query])
  
  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        const result = await apiSearch(query);
        setRes(result);
      }
    };
    fetchData();
  }, [query]);

console.log(res);

  if(!res) return <>준비중..</>;

  return (
    <div className='search'>
      <Header/>

      <div>
        <h1>Search Results " <span>{query}</span> "</h1>
        <div className='tap'>
          <ul>
            <li>
              <button className={isV === 1 ? 'selected': ''}
              onClick={()=>button3(1)}>Movies<span>{res.movie.data.total_results}</span></button>
              </li>
            <li>
              <button className={isV === 2 ? 'selected': ''}
              onClick={()=>button3(2)}>TV Shows<span>{res.tv.data.total_results}</span></button>
              </li>
            <li>
              <button className={isV === 3 ? 'selected': ''}
              onClick={()=>button3(3)}>Collection<span>{res.coll.data.total_results}</span></button>
              </li>
          </ul>
        </div>

        <article>
        {isV === 1 && res.movie.data.results.map(item=>(
          <Link to={`/detail/movie/${item.id}`}>
          <figure key={item.id}>
            <p>
              {item.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}/>
              ) : (
                <div style={{ 
                  width: '128px', height:'180px', 
                  backgroundColor: 'var(--light-gray)',
                }}>
                </div>
              )}
            </p>
            <div className='explain'>
              <h3>{item.title} <span>( {item.original_title} )</span></h3>
              <h5>Language: {item.original_language} • {item.release_date} <span>★ {item.vote_average}</span></h5>
              <p>{item.overview}</p>
            </div>
          </figure>
          </Link>
        ))
        }
        {isV === 2 && res.tv.data.results.map(item=>(
          <Link to={`/detail/tv/${item.id}`}>
          <figure key={item.id}>
            <p>
              {item.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}/>
              ) : (
                <div style={{ 
                  width: '128px', height:'180px', 
                  backgroundColor: 'var(--light-gray)',
                }}>
                </div>
              )}
            </p>
            <div className='explain'>
              <h3>{item.name} <span>( {item.original_name} )</span></h3>
              <h5>Language: {item.original_language} • {item.first_air_date} <span>★ {item.vote_average}</span></h5>
              <p>{item.overview}</p>
            </div>
          </figure>
          </Link>
        ))
        }
        {isV === 3 && res.coll.data.results.map(item=>(
          <Link>
          <figure key={item.id}>
            <p><img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}/></p>
            <div className='explain'>
              <h3>{item.name} <span>( {item.original_name} )</span></h3>
              <h5>Language: {item.original_language}</h5>
              <p>{item.overview}</p>
            </div>
          </figure>
          </Link>
        ))
        }
        </article>
      </div>

      <Footer/>
    </div>
  )
}

export default Search
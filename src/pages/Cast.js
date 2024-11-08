import { BrowserRouter as Router,Routes, Route, Link, useParams, useLocation } from 'react-router-dom'
import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

const Cast = () => {
  const {id} = useParams();

  const location = useLocation();
  const data = location.state?.data;
  console.log(data);
  //상단 버튼으로 미디어에서 넘어오면 id 값은 잘 있는데 여기 data가 undefined임

  const sum = data?.casts?.cast || data.credits.cast;
  const sum2 = data?.casts?.crew || data.credits.crew;

  // console.log(sum);
  // console.log(sum2);
  
  const departmentMap = sum2.length ? sum2.reduce((acc, member) => {
    // 현재 member의 department가 acc에 없으면 빈 배열 생성
    if (!acc[member.department]) {
        acc[member.department] = [];
    }
    // 해당 department에 member의 name 추가
    acc[member.department].push({name:member.name, job:member.job, profile_path:member.profile_path});
    return acc;
}, {}) : false;




  return (
    <div className='castcrew'>
      <Header/>

      <div className='backto'>
        <div>
          <Link to={data.casts ? `/detail/movie/${id}` : `/detail/tv/${id}`}>
            <p>{data.title ? (data.title) : (data.name) }</p>
            <img src='/arrow_back.svg'/>
          </Link>
          {/* <Link to='/media'> */}
          <Link to={data.casts ? `/detail/movie/${id}/media` : `/detail/tv/${id}/media`}>
            <p>Media</p>
            <img src='/arrow_forward.svg'/>
          </Link>
        </div>
      </div>

      <body>
        <h2>Casts / Crew</h2>

        <h3>Casts<span>{data?.casts?.cast.length || data?.credits?.cast.length}</span></h3>
        <article>
          {sum && sum.map(item=>
            <figure key={item.id}>
              {item.profile_path ? (
                <img src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}/>
                ) : (
                <div style={{ 
                  width: '80px', height:'73px',
                  marginRight: '20px', 
                  backgroundColor: 'var(--under-line)', // 원하는 배경색
                  borderRadius: '5px'
              }}>
              </div>
              )}
              <div>
                <b>{item.name}</b>
                <p>{item.character}</p>
              </div>
            </figure>
          )}

        </article>

        <h3>Crew<span>{data?.casts?.crew.length || data?.credits?.crew.length}</span></h3>
        {departmentMap && Object.entries(departmentMap).sort().map(([department, members])=>(
        <div className='crew' key={department}>
          <h4>{department}</h4>
          <article>
          {members.map(member => (
              <figure key={member.name}>
                {member.profile_path ? (
                <img src={`https://image.tmdb.org/t/p/original/${member.profile_path}`}/>
                ) : (
                <div style={{ 
                  width: '80px', height:'74px',
                  marginRight: '20px', 
                  backgroundColor: 'var(--under-line)', // 원하는 배경색
                  borderRadius: '5px'
                }}>
                  </div>
                )}
                <div>
                  <b>{member.name}</b>
                  <p>{member.job}</p>
                </div>
              </figure>
          ))}
          </article>
        </div>
        ))}
      </body>

      <Footer/>
    </div>
  )
}

export default Cast
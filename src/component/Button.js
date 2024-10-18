import React from 'react'

const Button = ({sort}) => {


  return (
    <div className='sortbtn'>
      <div>
        <div className='btn'>
          <button type='button'>Sort<span>Popularity Descending</span></button>
          {
            true ?(
              <div className='select'>
                <article>
                  <p>sort</p>
                  <ul>
                    {
                      sort.map((obj)=>
                        <li>{obj}</li>
                      )
                    }
                  </ul>
                </article>
              </div>
            ):''
          }
          
        </div>

        <div className='btn'>
          <button type='button'>Genre<span>3</span></button>
        </div>
        <div className='btn'>
          <button type='button'>Rating<span>5</span></button>
        </div>
        <div className='btn'>
          <button type='button'>User Score<span>5</span></button>
        </div>
        <div className='btn'>
          <button type='button'>Language<span>5</span></button>
        </div>
        <div className='btn'>
          <button type='button'>Runtime<span>5</span></button>
        </div>
        <div className='btn'>
          <button type='button'>Year<span>2024</span></button>
        </div>
        <div className='btn'>
          <button type='button'>Status<span>Released</span></button>
        </div>
      </div>

      <button>Reset Filters</button>
    </div>
  )
}

export default Button
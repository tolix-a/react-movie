import axios from 'axios';

const instant = axios.create({
   baseURL:'https://api.themoviedb.org/3',
   params:{api_key:'f89a6c1f22aca3858a4ae7aef10de967'}
})

export async function apiMain(){
   
   let [movieDay,movieWeek,tvDay,tvWeek,upcoming,movieTop,tvTop] = await Promise.all([
            instant.get('/trending/movie/day'),
            instant.get('/trending/movie/week'),
            instant.get('/trending/tv/day'),
            instant.get('/trending/tv/week'),
            instant.get('/movie/upcoming'),
            instant.get('/movie/top_rated'),
            instant.get('/tv/top_rated'),
         ])
   
   return {
      movieDay:movieDay.data.results,
      movieWeek:movieWeek.data.results,
      tvDay:tvDay.data.results,
      tvWeek:tvWeek.data.results,
      upcoming:upcoming.data.results,
      movieTop:movieTop.data.results,
      tvTop:tvTop.data.results
   };

}

export async function apiDetail(type,id){
   // let url=[];
   // if(type==='movie'){
   //    url = [
   //       instant.get(`/${type}/${id}/release_dates`)
   //    ]
   // }else{
   //    url = [
   //       instant.get(`/${type}/${id}/content_ratings`)
   //    ]
   // }
   
   let [detai,ott,rec,certim] = await Promise.all([
      instant.get(`/${type}/${id}?append_to_response=videos,images,casts`),
      instant.get(`/${type}/${id}/watch/providers`),
      instant.get(`/${type}/${id}/recommendations`),
      instant.get(`/${type}/${id}/release_dates`)
      // instant.get(`/collection/${id}`),
      // ...url
   ])

   return {detai,ott,rec,certim};
}

export async function apiDetailtv(type,id){
   // let url=[];
   // if(type==='movie'){
   //    url = [
   //       instant.get(`/${type}/${id}/release_dates`)
   //    ]
   // }else{
   //    url = [
   //       instant.get(`/${type}/${id}/content_ratings`)
   //    ]
   // }
   
   let [detai,ott,rec,certiv] = await Promise.all([
      instant.get(`/${type}/${id}?append_to_response=videos,images,credits`),
      instant.get(`/${type}/${id}/watch/providers`),
      instant.get(`/${type}/${id}/recommendations`),
      instant.get(`/${type}/${id}/content_ratings`)
      // ...url
   ])

   return {detai,ott,rec,certiv};
}
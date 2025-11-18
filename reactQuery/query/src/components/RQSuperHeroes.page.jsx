import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const fetcher = ()=>{
  return axios.get('http://localhost:4000/superheroes').then(res=>res.data)
}

function RQSuperHeroesPage() {
  const {data,isLoading,isError,error,isFetching} = useQuery({
    queryKey:['super-heroes'],
    queryFn: fetcher,
   // gcTime:5000, // garbage collection time - cache data remove
   // staleTime: 10000,// with in 10s no request will go. -> prevent the rate limit(request)
  //  refetchOnMount: false
  // refetchOnWindowFocus: true
  })
// isFetching is true when refetch happen cache is invalid.
console.log(isLoading,isFetching)

  console.log('e>',error)
if(isLoading){
  return <h1>Loading.....</h1>
}
if(isError){
  return <h1>{error.message}</h1>
}
  return (
    <div>
     {/* REACT QUERY Heroes page */}
     {data.map((cu,i)=>{
      return <p id={i+1}>{cu.name}</p>
     })}
    </div>
  )
}

export default RQSuperHeroesPage

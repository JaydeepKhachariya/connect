// import { Models } from "appwrite"
import Loader from "./Loader"
import GridPostList from "./GridPostList"

type SearchRedultsProps = {
  isSearchFetching:boolean,
  searchdPosts:any 
}

const SearchResults = ({isSearchFetching,searchdPosts}:SearchRedultsProps) => {

  if(isSearchFetching) return <Loader/>

  if( searchdPosts && searchdPosts?.documents.length>0) return (<GridPostList posts={searchdPosts?.documents}   />)

  return (
    <p className="text-light-4 mt-10 text-center w-full">No results found</p>
  )
}

export default SearchResults
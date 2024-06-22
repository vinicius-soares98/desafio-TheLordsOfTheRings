import { useEffect, useState } from "react"
import api from '../services/api'
import Header from "../components/Header/header"
import { StyledCardsContainer } from "../components/Cards/styledCardsContainer"
import Cards from "../components/Cards/cards"

function App() {
  const [movies, setMovies] = useState()
  const [filteredMovies, setFilteredMovies]= useState()

  useEffect(() => {
    async function loadData() {
      const { data: { docs }, } = await api.get('movie')
      setMovies(docs)
      setFilteredMovies(docs)
      console.log(docs)
    }

    loadData()
 

  }, [])

  return (
    <>
      <Header movies = {movies} setFilteredMovies={setFilteredMovies}/>
      <StyledCardsContainer>
        {filteredMovies && filteredMovies.map((movie) => <Cards movieData={movie} key={movie._id} />)}
      </StyledCardsContainer>
    </>

  )
}

export default App

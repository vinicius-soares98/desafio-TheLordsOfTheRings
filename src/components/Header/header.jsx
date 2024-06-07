import IconHeader from '../../assets/iconHeader.svg'
import { StyledHeader } from './styledHeader'
import { StyledFilters } from '../MoviesFilters/styledFilters'
import { useEffect, useRef, useState } from 'react'
import {StyledLine} from './styledSeparationLine'


export default function Header({movies, setFilteredMovies}){
    const [averageRuntime, setAverageRuntime] = useState(0)
    const [averageBudget, setAverageBudget] = useState(0)

   
    const input = useRef()

    function averageMovies(movies){
        const averageRuntimeValue = movies.reduce((acc, cur) => cur.runtimeInMinutes + acc, 0) / movies.length
        const averageBudgetValue = movies.reduce((acc, cur) => cur.budgetInMillions + acc, 0) / movies.length

        setAverageRuntime(averageRuntimeValue)
        setAverageBudget(averageBudgetValue)
    }
   
 
    useEffect(() => {
        if(movies && movies.length > 0){
            averageMovies(movies)
        }
    },[movies])

    function inputChange(){
        const newMovies = movies.filter( movie => movie.name.toLowerCase().includes(input.current.value.toLowerCase()))
        setFilteredMovies(newMovies)
        averageMovies(newMovies)
    }

    function sortChange(event){
        const sortEvent = event.target.value
        console.log(sortEvent)
        if(sortEvent == "budget"){
            const sortMovies = movies.filter(movie => movie.budgetInMillions)
            let sortedMoviesByBudget = sortMovies.sort((a,b) => b.budgetInMillions - a.budgetInMillions)
            console.log(sortedMoviesByBudget)
            setFilteredMovies(sortedMoviesByBudget)   
        }
        if(sortEvent == "revenue"){
            const sortMovies = movies.filter(movie => movie.boxOfficeRevenueInMillions)
            let sortedMovies = sortMovies.sort((a,b) => b.boxOfficeRevenueInMillions - a.boxOfficeRevenueInMillions)
            console.log(sortedMovies)
            setFilteredMovies(sortedMovies)   
        }
        if(sortEvent == "runtime"){
            const sortMovies = movies.filter(movie => movie.runtimeInMinutes)
            let sortedMoviesByRuntime = sortMovies.sort((a,b) => b.runtimeInMinutes - a.runtimeInMinutes)
            console.log(sortedMoviesByRuntime)
            setFilteredMovies(sortedMoviesByRuntime)   
        }
        if(sortEvent == ""){
            setFilteredMovies(movies)
        }   
    }


    return(
        <>
            <StyledHeader>
                <img src={IconHeader} alt="Icon Header" />
                <p>Senior Frontend Test</p>
            </StyledHeader>
            <StyledFilters>
                <div className="info">
                    <h1>Lord of the Rings Movies</h1>
                    <p>Ave. movie runtime: {averageRuntime} min</p>
                    <p>Ave. movie budget: {averageBudget}M</p>
                </div>
                <div className="filters">
                    <input type="text" placeholder="Filter movies by name" ref={input} onChange={inputChange} />
                    <select name="sort" id="sort" onChange={sortChange}>
                        <option value=""></option>
                        <option value="budget">Sort by budget</option>
                        <option value="revenue">Sort by revenue</option>
                        <option value="runtime">Sort by runtime</option>
                    </select>
                </div>
            </StyledFilters>
            <StyledLine/>
        </>
    )
}

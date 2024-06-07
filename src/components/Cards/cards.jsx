import { StyledCards } from "./styledCards";
import IconMovie from '../../assets/iconMovie.svg'
import IconAwards from '../../assets/iconAwards.svg'


export default function Cards({movieData}){
    return(
        <StyledCards>
            <div className="movieImage">
                <img src={IconMovie} alt="" />
            </div>
            <div className="movieInfo">
                <div className="movieDataWrapper">
                    <p className="movieTitle">{movieData.name}</p>
                    <p className="movieTime">{movieData.runtimeInMinutes} min</p>
                </div>
                <div className="awardsWrapper">
                    <img src= {IconAwards} alt="" />
                    <p className="awardsInfo">{movieData.academyAwardWins} Wins & {movieData.academyAwardNominations} Nominations</p>
                </div>
                <div className="valorsWrapper">
                    <div className="budget">
                        <p>Budget</p>
                        <p>{movieData.budgetInMillions}M</p>
                    </div>
                    <div className="revenue">
                        <p>Revenue</p>
                        <p>{movieData.boxOfficeRevenueInMillions}M</p>
                    </div>
                </div>
            </div>
        </StyledCards>
    )
}
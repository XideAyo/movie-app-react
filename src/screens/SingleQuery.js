    import React, { useEffect ,useState} from 'react'
    import Header from '../components/Header'
    import { useParams } from 'react-router-dom'
    import { displayCountryFlag, singleMovie } from '../config/api'
    import axios from 'axios'
    import ReactHtmlParser from 'react-html-parser'
import ExtraDetail from '../components/ExtraDetail'

    const SingleQuery = () => {

        const {name} = useParams()
        const [movie, setMovie] =useState("")

        const fetchSingleQuery = async () => {
            const {data} = await axios.get(singleMovie(name))

            setMovie(data)
            console.log(data)
        }

        useEffect(() => {
            fetchSingleQuery();
        },[])


    return (
        <div>
            <Header />
            <div className="detail">
                <div className="detail-info" style={{color: "#fff"}}>
                    <div style={{fontSize: '28px'}}>
                        <span>Movie:</span><span style={{color: "#ff7e00"}}>{movie.name}</span>
                    </div>
                    <div>
                        <span>IMDB Rating:</span><span></span>    
                    </div>
                    <div>
                        <span>Air Date:</span><span>{movie.premiered}</span>
                    </div>
                    <div>
                        <span>Country:</span><span>{movie.network.country.name}</span>           
                    </div>

                    <div>
                        <span>Genre:</span>
                        <span className='genres'>{movie.genres.map((genre) => {
                            return(
                                <span className='genre'>
                                    <span className=''>{genre}</span>
                                </span>
                            )
                        })}</span>
                    </div>   
                    <div>
                        <span>Summary:</span><span>{ReactHtmlParser(movie.summary)}</span>             
                    </div>                                        
                </div>
                <div className="detail-img">
                    <img src={movie.image.medium===null?"":movie.image.medium} alt="image" className='img'/>
                </div>
            </div>
            <button type="button" class="btn btn-success">See More Details</button>
            <ExtraDetail movie={movie}/>
        </div>
    )
    }

    export default SingleQuery
import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import { movieSearch } from '../config/api'
import { findActor } from '../config/api'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'

const Search = () => {

    const [category, setCategory] =useState("Select Query")
    const [query, setQuery] = useState("")
    const [movieQueryResult, setMovieQueryResult] =useState([])
    const [actorQueryResult, setActorQueryResult] =useState([])
    const [loading, setLoading] =useState(false)
    const [src, setSrc] =useState('')


    const getQueryResult = async (e) => {
        e.preventDefault()
        if(category === "Tv Shows"){

            setLoading(true)
            const {data} = await axios.get(movieSearch(query))

            setMovieQueryResult(data)

            console.log(movieQueryResult)
            setLoading(false)
        }else{
            setLoading(true)
            const {data} = await axios.get(findActor(query))

            setActorQueryResult(data)
            console.log(actorQueryResult)
            setLoading(false)

        }
    }


  return (
    <div className=''>
        <div className='search'>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <form className="d-flex">
                        <div className="dropdown">
                            <button className="btn btn-success dropdown-toggle mt10" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{marginRight: "50px"}}>
                                {category}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><Link className="dropdown-item" to="#" 
                                onClick={(e) => setCategory("Tv Shows")}
                                >Tv Shows</Link></li>
                                <li><Link className="dropdown-item" to="#"  
                                onClick={(e) => setCategory("Actor")}
                                >Actor / Actress</Link></li>
                            </ul>
                        </div>
                        <input className="form-control me-2 mt10" type="search" placeholder="Search" aria-label="Search" 
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button className="btn btn-outline-success mt10" type="submit" onClick={getQueryResult}>Search</button>
                    </form>
                    {loading ? <div className="spinner-border text-warning" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div> :null
                    }
                </div>
            </nav>
        </div>
        <div className='flex'>
            {movieQueryResult ? 
                movieQueryResult.map((data) => {
                    return(
                        <div className='bg-black'>
                            <div className="card text-white bg-success mb-3" style={{width: "300px",marginLeft: "50px"}}>
                                <img src={data.show.image===null?"":data.show.image.medium} className="card-img-top" alt={data.show.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{data.show.name}</h5>
                                    <p className="card-text">{ReactHtmlParser(data.show.summary.substring(0, 200))}</p>
                                    <Link to={`/single/${data.show.name}`} className="btn btn-primary">See Movie</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
        : null}
        </div>
        <div className='flex'>
            {actorQueryResult ? 
                actorQueryResult.map((data) => {
                    return(
                        <div className='bg-black'>
                            <div className="card text-white bg-success mb-3" style={{width: "300px",marginLeft: "50px"}}>
                                <img src={data.person.image===null?"":data.person.image.medium} className="card-img-top" alt={data.person.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{data.person.name}</h5>
                                    <Link to={`/single/${data.person.name}`} className="btn btn-primary">See Actor</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
        : null}
        </div>
    </div>
  )
}

export default Search
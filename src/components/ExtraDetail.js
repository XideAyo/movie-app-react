import React ,{useState}from 'react'
import axios from 'axios'
import { castMembers } from '../config/api'

const ExtraDetail = ({movie}) => {

    const [cast, setCast] =useState("")

    const castMember= async () => {
        const {data} = await axios.get(castMembers(movie.id))

        setCast(data)
    }

  return (
    <div>   

    </div>
  )
}

export default ExtraDetail
/*  fetch questions and set value to store*/
import {useEffect, useState} from 'react'
import data from '../Database/data'

export const useFetchQuestion = () =>{
const [getData, setGetData] = useState({isLoading: false, apiData: [], serverError: null})

} 
useEffect (()=>{
    setGetData (prev => ({...prev, isLoading: true} ))

    /* fetching data from backend in an anonymous function */

    (async()=>{
        try {
            
        } catch (error) {
            
        }
    })()

})
/*  fetch questions and set value to store*/
import {useEffect, useState, useDispatch} from 'react'
import data from '../Database/data'
import * as Action from '../redux/question_reducer'

export const useFetchQuestion = () =>{
const dispatch = useDispatch 
const [getData, setGetData] = useState({isLoading: false, apiData: [], serverError: null})


useEffect (()=>{
    setGetData (prev => ({...prev, isLoading: true} ))

    /* fetching data from backend in an anonymous function */

    (async()=>{
        try {
            let question = await data

            if (question.length>0){
                setGetData (prev => ({...prev, isLoading: false} ))
                setGetData (prev => ({...prev, apiData: question} ))

                /* dispatch an action to store */

                dispatch(Action.startExamAction(question))

            }
            else {
                throw new Error('No question is available')
            }
            

        } catch (error) {
            setGetData (prev => ({...prev, isLoading: false} ))
            setGetData (prev => ({...prev, serverError: true} ))

        }
    })()

},[dispatch])

return[getData,setGetData]


} 
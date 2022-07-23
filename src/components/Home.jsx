import React, { useEffect, useState, useContext } from 'react'

import axios from 'axios'

import Header from './Header'
import Meals from './Meals'
import Ingredients from './Ingredients'

import '../css/Home.css'
import SearchContext from '../SearchContext'
import CountrySearch from './CountrySearch'

import CircularProgress from '@mui/material/CircularProgress';
import { useHistory } from 'react-router-dom'

const Home = () => {

  const history = useHistory()

 const { meals, setMeals } = useContext(SearchContext)
 const { randomIngredient, setRandomIngredient } = useContext(SearchContext)
 const { popularIngre, setPopularIngre } = useContext(SearchContext)
 const { countriesName, setCountriesName } = useContext(SearchContext)

 // const [meals, setMeals] = useState([]) 
 // const [randomIngredient, setRandomIngredient] = useState([])
 // const [popularIngre, setPopularIngre] = useState([])
 // const [countriesName, setCountriesName] = useState([])

  // Loadings
  const [loadingRandomMeals, setLoadingRandomMeals] = useState(true)
  const [loadingPopularIngre, setLoadingPopularIngre] = useState(true)
  const [loadingRandomIngre, setLoadingRandomIngre] = useState(true)
  const [loadingCountries, setLoadingCountries] = useState(true)

  useEffect(()=>{
    let randomizeMeals = []
    let randomizeIngredients = []
    let popularIngredients = []


    // make a less time complexity fetch
    const fetchRandom = async() =>{
      if(meals.length === 0){
        for(let i = 0; i < 10; i++)
        await axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(res=>{
            randomizeMeals.push(res.data.meals[0])
            setMeals(randomizeMeals)
            setLoadingRandomMeals(false)
        })

        setMeals(randomizeMeals)
      }else{
        setLoadingRandomMeals(false)
        console.log(meals)
      }
    }

    const fetchRandomIngredients = async() =>{
      if(randomIngredient.length === 0){
        for(let i = 0; i < 6; i++){
          await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list').then(res=>{
             const randomIngredients = res.data.meals[Math.floor(Math.random()* 300)]
             randomizeIngredients.push(randomIngredients)
             setRandomIngredient(randomizeIngredients)
             setLoadingRandomIngre(false)
           })
         }
         setRandomIngredient(randomizeIngredients)
      }else{
        setLoadingRandomIngre(false)
      }

  }

  const fetchPopularIngredients = async() =>{
    if(popularIngre.length === 0){
      for(let i = 0; i < 7; i++){
        await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list').then(res=>{
          popularIngredients.push(res.data.meals[i])
          setPopularIngre(popularIngredients)
          setLoadingPopularIngre(false)      
        }).catch(err=>{
          alert(err.message)
        })
      }
  
      setPopularIngre(popularIngredients)
    }else{
      setLoadingPopularIngre(false)
    }

  }

  const fetchCountries = async () =>{
    if(countriesName.length === 0){
      await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list').then(res=>{
        setCountriesName(res.data.meals)
      }).catch(err=>{
        alert(err.message)
      })
      setLoadingCountries(false)
    }else{
      setLoadingCountries(false)
    }

  }

    fetchCountries()
    fetchPopularIngredients()
    fetchRandomIngredients()
    fetchRandom()

  }, [])



  return (
    <>
    <Header isAuth={true} />
    <div className='homeCContainer'>


      <div className='homeMemberReminderContainer'>
        <h2> Get your membership now for only RM20 to get free delivery on all orders </h2>
      </div>


      {/* RandomMeals */}
      { !loadingRandomMeals ? 
        <div className='mealsContainerBox'>
          <h3>Random Meals</h3>
          <div className='randomMeals'>
            
            {
                meals.map(meal=> 
                <Meals mealId={meal?.idMeal} image={meal?.strMealThumb} name={meal?.strMeal} key={meal?.idMeal} />)
            }
          </div>
          
        </div> : 
        <div className='mealsContainerBox'>
            <h3>Random Meals</h3>
              <div className='randomMeals'>
                  <CircularProgress />
              </div>
            </div>
      }

        { !loadingPopularIngre ?
        <div className='mealsContainerBox'>
          <h3>Popular Ingredients</h3>
          <div className='randomMeals'>
            
            { 
              popularIngre.map(ingredient=>(
                <Ingredients name={ingredient?.strIngredient} key={ingredient?.idIngredient} />
              ))
            }
            
          </div>
        </div>:
        <div className='mealsContainerBox'>
            <h3>Popular Ingredients</h3>
            <div className='randomMeals'>
              <CircularProgress />
            </div>
        </div>
        }

        { !loadingRandomIngre ? 
        <div className='mealsContainerBox'>
          <h3>Random Ingredients</h3>
          <div className='randomMeals'>
            
            { 
              randomIngredient.map(ingredient=>(
                <Ingredients name={ingredient?.strIngredient} key={ingredient?.idIngredient} />
              ))
            }
            
          </div>
        </div>: 
          <div className='mealsContainerBox'>
            <h3>Random Ingredients</h3>
              <div className='randomMeals'>
                  <CircularProgress />
              </div>
            </div>
        }

        { !loadingCountries ? 
        <div className='mealsContainerBox'>
          <h3>Countries</h3>
          <div className='randomMeals'>
            
            { 
              countriesName.map(country=>(
                <CountrySearch countryName={country} />
               ))
            }
            
          </div>
        </div>: 
        <div className='mealsContainerBox'>
          <h3>Countries</h3>
          <div className='randomMeals'>
            <CircularProgress />
          </div>
        </div> 
        } 


        <div className='alphabetsContainer'>
          <h3>Alphabet</h3>
          <div className='alphabets'>
            <button onClick={()=> history.push('/alphabet/a')} className='alphabet' >A</button>
            <button onClick={()=> history.push('/alphabet/b')} className='alphabet' >B</button>
            <button onClick={()=> history.push('/alphabet/c')} className='alphabet' >C</button>
            <button onClick={()=> history.push('/alphabet/d')} className='alphabet' >D</button>
            <button onClick={()=> history.push('/alphabet/e')} className='alphabet' >E</button>
            <button onClick={()=> history.push('/alphabet/f')} className='alphabet' >F</button>
            <button onClick={()=> history.push('/alphabet/g')} className='alphabet' >G</button>
            <button onClick={()=> history.push('/alphabet/h')} className='alphabet' >H</button>
            <button onClick={()=> history.push('/alphabet/i')} className='alphabet' >I</button>
            <button onClick={()=> history.push('/alphabet/j')} className='alphabet' >J</button>
            <button onClick={()=> history.push('/alphabet/k')} className='alphabet' >K</button>
            <button onClick={()=> history.push('/alphabet/l')} className='alphabet' >L</button>
            <button onClick={()=> history.push('/alphabet/m')} className='alphabet' >M</button>
            <button onClick={()=> history.push('/alphabet/n')} className='alphabet' >N</button>
            <button onClick={()=> history.push('/alphabet/o')} className='alphabet' >O</button>
            <button onClick={()=> history.push('/alphabet/p')} className='alphabet' >P</button>
            <button onClick={()=> history.push('/alphabet/q')} className='alphabet' >Q</button>
            <button onClick={()=> history.push('/alphabet/r')} className='alphabet' >R</button>
            <button onClick={()=> history.push('/alphabet/s')} className='alphabet' >S</button>
            <button onClick={()=> history.push('/alphabet/t')} className='alphabet' >T</button>
            <button onClick={()=> history.push('/alphabet/u')} className='alphabet' >U</button>
            <button onClick={()=> history.push('/alphabet/v')} className='alphabet' >V</button>
            <button onClick={()=> history.push('/alphabet/w')} className='alphabet' >W</button>
            <button onClick={()=> history.push('/alphabet/x')} className='alphabet' >X</button>
            <button onClick={()=> history.push('/alphabet/y')} className='alphabet' >Y</button>
            <button onClick={()=> history.push('/alphabet/z')} className='alphabet' >Z</button>
          </div>
        
        </div>

          
    </div>
    </>
  )
}

export default Home
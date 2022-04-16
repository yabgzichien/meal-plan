import React, { useEffect, useState, useContext } from 'react'

import axios from 'axios'

import Header from './Header'
import Meals from './Meals'
import Ingredients from './Ingredients'

import '../css/Home.css'
import SearchContext from '../SearchContext'
import CountrySearch from './CountrySearch'

import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {

  const { meals, setMeals } = useContext(SearchContext)
  const [randomIngredient, setRandomIngredient] = useState([])
  const [popularIngre, setPopularIngre] = useState([])
  const [countriesName, setCountriesName] = useState([])
  const [loadingRandomMeals, setLoadingRandomMeals] = useState(true)
  const [loadingPopularIngre, setLoadingPopularIngre] = useState(true)
  const [loadingRandomIngre, setLoadingRandomIngre] = useState(true)
  const [loadingCountries, setLoadingCountries] = useState(true)

  useEffect(()=>{
    let randomizeMeals = []
    let randomizeIngredients = []
    let popularIngredients = []

    const fetchRandom = async() =>{
        for(let i = 0; i < 10; i++)
            await axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(res=>{
                randomizeMeals.push(res.data.meals[0])
            })

        setMeals(randomizeMeals)
        setLoadingRandomMeals(true)
    }

    const fetchRandomIngredients = async() =>{
      for(let i = 0; i < 6; i++){
       await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list').then(res=>{
          const randomIngredients = res.data.meals[Math.floor(Math.random()* 606)]
          randomizeIngredients.push(randomIngredients)
        })
      }
      setRandomIngredient(randomizeIngredients)
      setLoadingRandomIngre(false)
  }

  const fetchPopularIngredients = async() =>{
    for(let i = 0; i < 4; i++){
      axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list').then(res=>{
        popularIngredients.push(res.data.meals[i])
      }).catch(err=>{
        alert(err.message)
      })
    }

    setPopularIngre(popularIngredients)
    setLoadingPopularIngre(false)
  }

  const fetchCountries = async () =>{
    await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list').then(res=>{
      setCountriesName(res.data.meals)
    }).catch(err=>{
      alert(err.message)
    })
    setLoadingCountries(false)
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

      {/* RandomMeals */}
      { loadingRandomMeals ? 
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


        <div className='mealsContainerBox'>
          <h3>Alphabet</h3>
          <div className='randomMeals'>
            
            <h3>A</h3>
            <h3>B</h3>
            <h3>C</h3>
            <h3>D</h3>
            <h3>E</h3>
            <h3>F</h3>
            <h3>G</h3>
            <h3>H</h3>
            <h3>I</h3>
            <h3>J</h3>
            <h3>K</h3>
            <h3>L</h3>
            <h3>M</h3>
            <h3>N</h3>
            <h3>O</h3>
            <h3>P</h3>
            <h3>Q</h3>
            <h3>R</h3>
            <h3>S</h3>
            <h3>T</h3>
            <h3>U</h3>
            <h3>V</h3>
            <h3>W</h3>
            <h3>X</h3>
            <h3>Y</h3>
            <h3>Z</h3>
            
          </div>
        
        </div>

          
    </div>
    </>
  )
}

export default Home
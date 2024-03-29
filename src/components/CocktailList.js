import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cocktails, loading} = useGlobalContext();
  if(loading){
    return <Loading />
  }
  if(cocktails.length<1){
    return(
      <h2 className='section-title'>
        no cocktails match your search criteria
      </h2>
    )
  }
  return (
    <div>
      <section className='section'>
        <h2 className='section-title'>cocktails</h2>
        <div className='cocktails-center'>
          {cocktails.map((items) => {
            return <Cocktail key={items.id} {...items} />
          })}
        </div>
      </section>
    </div>
  )
}

export default CocktailList

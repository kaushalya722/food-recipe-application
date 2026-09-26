import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const RecipeItems = () => {
  const allRecipes = useLoaderData()
  console.log(allRecipes)
  return (
    <div>RecipeItems</div>
  )
}

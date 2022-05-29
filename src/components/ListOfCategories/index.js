import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)

    window.fetch('https://petgram-server-angel-platzi-cxl19b3wg-angaven.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })

    setLoading(false)
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200

      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderlist = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'><Category /></Item>
          : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <Fragment>
      {renderlist()}
      {showFixed && renderlist(true)}
    </Fragment>
  )
}

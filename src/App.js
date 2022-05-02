import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'

import { GlobalStyle } from './GlobalStyles'
import { ListsOfPhotoCards } from './components/ListsOfPhotoCards'

export const App = () => (
  <div>
    <ListOfCategories />
    <ListsOfPhotoCards />
    <GlobalStyle />
  </div>
)

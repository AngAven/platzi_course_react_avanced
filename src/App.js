import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'

import { GlobalStyle } from './GlobalStyles'
import { ListsOfPhotoCards } from './components/ListsOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => (
  <div>
    <Logo />
    <ListOfCategories />
    <ListsOfPhotoCards />
    <GlobalStyle />
  </div>
)

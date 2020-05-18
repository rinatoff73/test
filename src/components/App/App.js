import React from 'react'
import useStyles from './App.styles'
import CardSearch from '../CardSearch/CardSearch'
import Card from '../Card/Card'
import 'normalize.css'

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <div className={classes.container}>
        <CardSearch />
        <Card />
      </div>
    </div>
  )
}

export default App

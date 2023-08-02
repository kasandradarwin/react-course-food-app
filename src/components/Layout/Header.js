import React, { Fragment } from 'react'
import mealsImage from 'src/components/assets/meals.jpg'
import classes from './Header.module.css'


const Header = props => {
  return <Fragment>
    <header className={classes.header}>
        <h1>ReactMeals</h1>
    </header>
    <button>
        Cart
    </button>
    <div className={classes['main-image']}><img src={mealsImage} alt="table full of food" /></div>
  </Fragment>
}

export default Header
import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './Navigationitem/NavigationItem';
const navigtionItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      Burger Build{' '}
    </NavigationItem>
    <NavigationItem link="/">Checkout </NavigationItem>
  </ul>
);

export default navigtionItems;

import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http reques... u can do that
    setTimeout(() => {
      alert('saved data to cloud!');
    }, 1000);
    // It runs before the main useEffect but after the first render cycle
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);
  // blank array for initial time only
  // If it is props.persons then everytime u update person only!

  // useEffect(); u can use as many as I want

  // There is no restriction 
  // So it will run every update
  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
    console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
};

export default cockpit;
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FillForm from './FillForm.jsx'
import FruitStore from './FruitStore.jsx'
import FruitHeader from './FruitHeader.jsx'
import './FruitStore.css'
import './FruitHeader.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <FruitHeader />
    <FruitStore />
  </StrictMode>,
)


/*

function Car(props){
  return(
    <>
      <h2>My Car</h2>
      <h4>It is a {props.color} colour Car.</h4>
      <h4>Hey, I have {props.brand}</h4>
      <h4>My brother has {props.color} colour {props.brand} {props.model} Car !</h4>
    </>
  );
}
createRoot(document.getElementById('root')).render(
  <Car color="White" brand="Ford" model="Mustang"/>
);
*/
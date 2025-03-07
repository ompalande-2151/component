const Om = () =>(
  <>
    <Main/>
    <Weather/>
    <Book/>
    <Car/>
  </>
)

const Main = () =>(
  <Person/>
)
const Person = () =>(
  <>
    <h1>Name : Om Palande</h1>
    <h1>Age : 22</h1>
    <Img/>
  </>
)
 const Img = () =>(
  <img src ='https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGxhc2glMjBhcHB8ZW58MHx8MHx8fDA%3D'/>
 )

 const Weather = () =>(
  <City/>
 )

 const City = () =>(
    <>
      <h1>city:Pune</h1>
      <h2>temprature:30 c</h2>
      <h3>condation:sunny</h3>
      <Alert/>
    </>
 )

 const Alert =()=>(
  <h1>Weather Alert:No Alert</h1>
 )

 const Book = () =>{
  return(
    <>
    <h1>Title:Om Palande</h1>
    <h1>Author:Om Palande</h1>
    <h1>Price:1000</h1>
    <Avalaiblity/>
    </>
  )
 }

 function Avalaiblity(){
  return(
    <h1>Avalaiblity:yes yes why not </h1>
  )
 }
 

 const Car = ()  =>(
      <Carinfo/>
 )

 function Carinfo (){
  <>
  <h1>car name:BMW</h1>
  <h1>car price:59L</h1>
  <Feature/>
  </>
 }

const Feature = () =>{
  return(
    <h1>Feature: Autopilot</h1>
  )
}

export default Om
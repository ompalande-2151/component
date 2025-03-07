
import React from 'react'


const Om = () => {
    return(
    <>

    <Greeting/>
    <ProductDisplay/>
    <UserProfile/>
    <StudentDetails/>
    <CarInfo/>
    <JobInfo/>
    <Bio/>
    <TaskDetails/>

    </> 
    )
}




function Greeting() {
  return <Welcome name='om' age={23} />;
}

const Welcome = (props) => {
  return (
    <div className="task1">
      <h1>Hello, {props.name}!</h1>
      <p>Your age is {props.age}</p>
      
    </div>
    
  );
};



function ProductDisplay() {
  return <Product name='Lenovo Laptop' price={76000} />;
}

const Product = (props) => {
  return (
    <div className="task2">
      <h3>{props.name}</h3>
      <p>Price: ₹{props.price}</p>
      
    </div>
  );
};



function UserProfile() {
  return <User username='om Kurne' city='Pune' />;
}

const User = (props) => {
  return (
    <div className="task3">
      <h2>User: {props.username}</h2>
      <p>Location: {props.city}</p>
      
    </div>
  );
};


function StudentDetails() {
  return <Student name='om Kurne' grade='A+' />;
}

const Student = (props) => {
  return (
    <div className="task4">
      <h4>{props.name}</h4>
      <p>Grade: {props.grade}</p>
      
    </div>
  );
};



function CarInfo() {
  return <Car brand='Toyota' model='Fortuner' />;
}

const Car = (props) => {
  return (
    <div className="task5">
      <h2>{props.brand}</h2>
      <p>Model: {props.model}</p>
      
    </div>
  );
};


function JobInfo() {
  return <Job title='Data Science' company='ExcelR Solution' />;
}

const Job = (props) => {
  return (
    <div className="task6">
      <h2>{props.title}</h2>
      <p>Company: {props.company}</p>
      
    </div>
  );
};



function Bio() {
  return <Person name='om' hobby='Cricket' />;
}

const Person = (props) => {
  return (
    <div className="task7">
      <h1>{props.name}</h1>
      <p>Hobby: {props.hobby}</p>
      
    </div>
  );
};


function TaskDetails() {
  return <Task name='Shopping' status='Pending' />;
}

const Task = (props) => {
  return (
    <div className="task8">
      <h3>Task: {props.name}</h3>
      <p>Status: {props.status}</p>
      
    </div>
  );
};




export default Om
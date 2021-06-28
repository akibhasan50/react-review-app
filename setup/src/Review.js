import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name,image,text,job} = people[index]

  const checkNumber= (number) =>{
    if(number > people.length -1){
      return 0
    }
    if(number < 0){
      return people.length -1 ;
    }
    return number
  }

  const nextPerson = () =>{
   setIndex( (index)=>{
     let newIndex = index+1;
     return checkNumber(newIndex)
   })
  }

  const prevPerson = () =>{
    setIndex( (index)=>{
      let newIndex = index-1;
      return checkNumber(newIndex)
    })
  }
  const randPerson = () =>{
    let random = Math.floor(Math.random() * people.length)

    console.log(index)
    
    if(random === index){
      random = random +1;
    }
    setIndex(checkNumber(random))
  }
  return <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img'></img>
      <span className='quote-icon'>
      <FaQuoteRight></FaQuoteRight>
    </span>
   
    </div>
    <h4 className='author'>{name}</h4>
    <p className='author'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft></FaChevronLeft>
      </button>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight></FaChevronRight>
      </button>
   
    </div>
    <button className='random-btn' onClick={randPerson}>
       surprise me
      </button>
  </article>;
};

export default Review;

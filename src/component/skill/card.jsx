
import React from 'react';
import './card.css'; 
import { ProgrammingSkills, FundamentalSkills, SoftSkills } from './Skills';

const skillsSections = [
  ProgrammingSkills,
  FundamentalSkills,
  SoftSkills
];

const CardComponent = () => {
  return (
    <div className='flex p-10  justify-center'>
    {skillsSections.map((Section, index) => (
    <div className="card">
      <div className="tools">
        <div className="circle">
          <span className="red box"></span>
        </div>
        <div className="circle">
          <span className="yellow box"></span>
        </div>
        <div className="circle">
          <span className="green box"></span>
        </div>
      </div>
      <div className="card__content">
      {Section}
      </div>
    </div>))}
    </div>
  );
}

export default CardComponent;

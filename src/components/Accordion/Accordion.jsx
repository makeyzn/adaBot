import React, { useState } from 'react'
import chevronDown from 'image/chevron-down.svg';
import chevronUp from 'image/chevron-up.svg';
import classes from './Accordion.module.sass';

const Accordion = () => {
    const [selected, setSelected] = useState(null);

    const toggle = i => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

  return (
    <>
      <div className='container'>
        <div>
            {data.map((item, i) => (
                <div className={classes.item}>
                    <div className={classes.title} onClick={() => toggle(i)}>
                        <h2>{item.position}</h2>
                        <img src={selected === i ? chevronUp : chevronDown} alt="" />
                    </div>
                    <hr />
                    <div className={selected === i ? classes.content__show : classes.content}>
                        <h1>{item.name}</h1>
                        <h3>{item.nickname}</h3>
                        <hr />
                        <a href={`mailto:${item.email}`}>{item.email}</a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Accordion

const data = [
    {
        position: 'Lead Developer',
        name: 'Bogdan Tanov',
        nickname: 'NullGuy \ HCoder',
        email: 'playmister00@gmail.com',
    },
    {
        position: 'Back-end Developer',
        name: 'Bogdan Tanov',
        nickname: 'NullGuy \ HCoder',
        email: 'playmister00@gmail.com',
    },
    {
        position: 'Front-end Developer',
        name: 'Bogdan Tanov',
        nickname: 'NullGuy \ HCoder',
        email: 'playmister00@gmail.com',
    },
    {
        position: 'Lead Designer',
        name: 'Bogdan Tanov',
        nickname: 'NullGuy \ HCoder',
        email: 'playmister00@gmail.com',
    },
    {
        position: 'Python Developer',
        name: 'Bogdan Tanov',
        nickname: 'NullGuy \ HCoder',
        email: 'playmister00@gmail.com',
    },
    {
        position: 'C# Developer',
        name: 'Bogdan Tanov',
        nickname: 'NullGuy \ HCoder',
        email: 'playmister00@gmail.com',
    },
    {
        position: 'C++ Developer',
        name: 'Bogdan Tanov',
        nickname: 'NullGuy \ HCoder',
        email: 'playmister00@gmail.com',
    },
    {
        position: 'Designer',
        name: 'Bogdan Tanov',
        nickname: 'NullGuy \ HCoder',
        email: 'playmister00@gmail.com',
    },
]
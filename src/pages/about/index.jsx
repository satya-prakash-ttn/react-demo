import React from 'react';
import data from "../../../public/data"
import Link from 'next/link';
const About = () => {
    const employees = data.employees;
    //console.log(employees);
    return (
        <div className='container'>
            <h1 className='text-4xl mb-8 mt-8'>About Us</h1>
            <p>{data.companyInfo}</p>
             {employees.map( (emp)=>{
               return <div className='mt-2 mb-2'><Link className='underline' href={`about/${emp.id}`}>{emp.name}</Link></div>
             })}
        </div>
    );
}

export default About;

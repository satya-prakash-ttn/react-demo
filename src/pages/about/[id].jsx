import React from 'react';
import { useRouter } from 'next/router';
import data from '../../../public/data.json';
import Link from 'next/link';

const EmployeeDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const employee = data.employees.find(emp => emp.id === Number(id));
    if (!employee) {
        return <div>Employee not found.</div>;
    }
    return (
        <div className='container'>
            <p>Name : {employee.name}</p>
            <p>Position : {employee.position}</p>
            <p>Bio : {employee.bio}</p>
            <div className='mt-4 mb-4'>
                <Link href="/about" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Back to About</Link>
            </div>
        </div>
    );
}

export default EmployeeDetail;

import React from 'react';
import { useRouter } from 'next/router';
import data from '../../../public/data.json';
import Link from 'next/link';

const ProductList = () => {
    const router = useRouter();
    const { id } = router.query;
    const product = data.products.find(product => product.id === Number(id));
    if (!product) {
        return <div className='container'>Product not found.</div>;
    }
    return (
        <div className='container'>
            <div class="product-box max-w-sm mt-10">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">{product.title}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.category}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Rs {product.price}</p>
            </div>
            <div className='mt-4 mb-4'>
                <Link href="/products" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Back</Link>
            </div>
        </div>
    );
}

export default ProductList;

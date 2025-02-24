import React from 'react';
import data from "../../../public/data"
import Link from 'next/link';
const Products = () => {
    const products = data.products;
    //console.log(products);
    return (
        <div className='container'>
            <h1 className='text-4xl mb-8 mt-8'>Products</h1>
            <div className='product-card'>
                {products.map((product) => (
                    <div class="product-box max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <Link href={`products/${product.id}`}>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">{product.title}</h5>
                        </Link>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.category}</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Rs {product.price}</p>
                        <Link className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' href={`products/${product.id}`}>
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default Products;

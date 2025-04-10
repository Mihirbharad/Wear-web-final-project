import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export const AddProduct = () => {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    useEffect(() => {
        const getAllCategories = async () => {
            const res = await axios.get("/getAllCategories");
            setCategories(res.data);
        };
        getAllCategories();
    }, []);

    const getSubCategories = async (category_id) => {
        const res = await axios.get(`/getSubCategoryByCategoryId/${category_id}`);
        setSubCategories(res.data);
    };

    const { register, handleSubmit } = useForm();
    const submitHandler = async (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('category_id', data.category_id);
        formData.append('sub_category_id', data.sub_category_id);
        formData.append('image', data.image[0]);
        formData.append("seller_id", localStorage.getItem('id'));

        const res = await axios.post("/create_product_file", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(res.data);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white-50 px-4">
            <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-lg text-center">
            <h1 style={{ color: 'red', fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Add Product</h1>
                <form onSubmit={handleSubmit(submitHandler)}className="space-y-5 text-left">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input type='text' {...register('name')} placeholder="Enter product name"
                            className="w-full p-3 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-600" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Price</label>
                        <input type='number' {...register('price')} placeholder="Enter price"
                            className="w-full p-3 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-600" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Category</label>
                        <select {...register('category_id')} onChange={(e) => getSubCategories(e.target.value)}
                            className="w-full p-3 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-600">
                            <option value=''>Select Category</option>
                            {categories?.map((category) => (
                                <option key={category._id} value={category._id}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Sub Category</label>
                        <select {...register('sub_category_id')}
                            className="w-full p-3 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-600">
                            <option value=''>Select Sub Category</option>
                            {subCategories?.map((subCategory) => (
                                <option key={subCategory._id} value={subCategory._id}>{subCategory.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Select File</label>
                        <input type='file' {...register('image')}
                            className="w-full p-3 border border-red-300 rounded-lg cursor-pointer" />
                    </div>
                    <div>
                        <input type='submit' value='ADD PRODUCT'
                            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg cursor-pointer transition duration-300 text-lg font-semibold" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;

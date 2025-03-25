import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    const submitHandler = async (data) => {
        data.seller_id = localStorage.getItem('id');
        data.price = parseFloat(data.price);
        console.log(data);
        const res = await axios.post("/create_product", data);
        console.log(res.data);
    };

    const getAllCategories = async () => {
        const res = await axios.get("/getAllCategories");
        setCategories(res.data);
    };

    const getSubCategories = async (category_id) => {
        const res = await axios.get("/getSubCategoryByCategoryId/" + category_id);
        setSubCategories(res.data);
    };

    useEffect(() => {
        getAllCategories();
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>Add Product</h1>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Name</label>
                        <input type='text' {...register('name')} style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Price</label>
                        <input type='number' {...register('price')} style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Image URL</label>
                        <input type='text' {...register('image_url')} style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Category</label>
                        <select {...register("category_id")} onChange={(e) => getSubCategories(e.target.value)} style={styles.select}>
                            <option value=''>Select Category</option>
                            {categories?.map((cat) => (
                                <option key={cat._id} value={cat._id}>{cat.name}</option>
                            ))}
                        </select>
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Sub Category</label>
                        <select {...register("sub_category_id")} style={styles.select}>
                            <option value=''>Select Sub Category</option>
                            {subCategories?.map((subCat) => (
                                <option key={subCat._id} value={subCat._id}>{subCat.name}</option>
                            ))}
                        </select>
                    </div>
                    <div style={styles.formGroup}>
                        <input type='submit' value='Add Product' style={styles.button} />
                    </div>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#0d1117',
    },
    card: {
        backgroundColor: '#1f2937',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0px 4px 15px rgba(97, 114, 151, 0.1)',
        width: '400px',
        textAlign: 'center',
        color: 'white',
    },
    title: {
        marginBottom: '20px',
        fontSize: '24px',
        color: '#2f3ee1',
    },
    formGroup: {
        marginBottom: '15px',
        textAlign: 'left',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
        color: '#d1d5db',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #374151',
        fontSize: '16px',
        backgroundColor: '#374151',
        color: 'white',
    },
    select: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #374151',
        fontSize: '16px',
        backgroundColor: '#374151',
        color: 'white',
    },
    button: {
        width: '100%',
        padding: '12px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#2f3ee1',
        color: '#1f2937',
        fontSize: '19px',
        cursor: 'pointer',
        transition: 'background 0.3s, transform 0.2s',
    },
    buttonHover: {
        backgroundColor: '#eab308',
        transform: 'scale(1.05)',
    }
};

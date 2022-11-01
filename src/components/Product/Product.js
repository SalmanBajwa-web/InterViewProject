import './Product.css'
import React, { useEffect, useState } from 'react'
import ProductOne from '../ProductOne/ProductOne';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';

const Product = () => {
    // state
    const [productArr, setProductArr] = useState([]);
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);
    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);


    // func
    const getProduct = async () => {
        setLoading(true);
        try {
            const pro = await fetch('https://jsonplaceholder.typicode.com/photos');
            console.log("pro :", pro);

            if (pro.status >= 200 && pro.status <= 400) {
                const data = await pro.json();
                setProductArr(data.slice(0, 10));
                setLoading(false);
                setIsError(false);

            } else {
                throw new Error('Error loading data');
            }
        } catch (err) {
            console.log("Error :", err)
            setIsError(true);
            setLoading(false);
        }
    }
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);



    // effect

    useEffect(() => {
        getProduct();
    }, [])



    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = productArr.slice(indexOfFirstPost, indexOfLastPost);



    return (
        <div className="product">



            {isError && (
                <div className="btnBox">
                    <button className='btn' onClick={getProduct}>Refresh</button>
                </div>
            )}
            <div className="productList">
                {loading && <Loader />}
                {loading && <Loader />}
                {loading && <Loader />}
                {loading && <Loader />}
                {loading && <Loader />}
            </div>
            <div className="productList">
                {currentPosts && currentPosts.map(item => {
                    return (
                        <ProductOne item={item} key={item.id} />
                    );
                })}
            </div>
            <div className="pageBox">
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={productArr.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
        </div>
    )
}

export default Product


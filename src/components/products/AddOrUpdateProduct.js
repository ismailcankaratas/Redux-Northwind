import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../../redux/actions/categoryActions';
import { saveProduct } from '../../redux/actions/productActions';
import withRouter from '../root/withRouter';
import ProductDetail from './ProductDetail';

function AddOrUpdateProduct({
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    ...props
}) {
    const [product, setProduct] = useState({ ...props.product });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (categories.length === 0) {
            getCategories();
        }
        setProduct({ ...props.product });
    }, [props.product]);
    // [props.product] --> [props.product] ' ı izle dom'a yerleştiği zaman bitir. Sonsuz döngüden kurtulmak için.
    function handleChange(event) {
        const { name, value } = event.target;
        setProduct(previousProduct => ({
            ...previousProduct,
            [name]: name === "categoryId" ? parseInt(value, 10) : value
        }))
        validate(name, value);

    }
    function validate(name, value) {
        console.log(name);
        if (name === "productName" && value === "") {
            setErrors(previousErrors => ({ ...previousErrors, productName: "Ürün ismi olmalıdır." }));
        } else if (name === "productName" && value !== "") {
            setErrors(previousErrors => ({ ...previousErrors, productName: "" }));
        }
    }

    function handleSave(event) {
        event.preventDefault();
        saveProduct(product).then(() => {
            navigate("/");
        });
    }

    return (
        <ProductDetail
            product={product}
            categories={categories}
            onChange={handleChange}
            onSave={handleSave}
            errors={errors}
        />
    )
}

export function getProductById(products, productId) {
    let product = products.find(product => product.id == productId) || null;
    return product;
}

function mapStateToProps(state, ownProps) {
    const productId = ownProps.params.productId;
    const product =
        productId && state.productListReducer.length > 0
            ? getProductById(state.productListReducer, productId)
            : {}
    return {
        product,
        products: state.productListReducer,
        categories: state.categoryListReducer
    }
}

const mapDispatchToProps = {
    getCategories, saveProduct
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct));
function Product(props){

    const {productObj}=props;

    return(
        <div className="shadow-2xl p-3 bg-amber-200">
            <h2 className="text-2xl text-blue-600">{productObj.title}</h2>
            <p className="font-bold">{productObj.price}</p>
            <p className="font-mono">{productObj.description}</p>
        </div>
    )

}

export default Product;
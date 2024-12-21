function Product(props) {
    return (
        <article className="product">
            <img src={props.img.src} alt={props.img.alt} />
            <h2 className="product__heading">{props.heading}</h2>
            <p className="product__description">
                {props.description}
            </p>

            <button className="product__learn-more">Learn More</button>

        </article>
    )
}
export default Product;
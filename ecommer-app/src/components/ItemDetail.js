const ItemDetail = ({ item }) => {
    //console.log(item)
    return (
        <div className="cointaner">
            <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-7">
                    <h1>
                        {item.title}
                    </h1>
                    <img src={item.pictureUrl} />
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5">
                    <p>
                        {item.price}
                    </p>
                    <p>
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
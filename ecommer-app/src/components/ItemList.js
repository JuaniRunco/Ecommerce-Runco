import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div className="container" style={{ paddingBottom: '20px' }}>
            <div className="row">
                {
                    items.map((item, i) => (
                        <div className="col-sd-12 col-md-4" key={i}>
                            <Item key={item.id} item={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ItemList;
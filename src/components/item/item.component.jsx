import './item.styles.scss'

const Item = ({ category }) => {
    return (
        <div className='category-container'>
            <div className='background-image' style={{ background: `url(${category.imageUrl})` }} />
            <div className='category-body-container'>
                <h2>{category.title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default Item;
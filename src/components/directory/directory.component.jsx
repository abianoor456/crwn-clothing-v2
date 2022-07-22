import Item from '../item/item.component';
import './directory.styles.scss';

const Directory = ({ categories }) => {
    return (
        <div className='directory-container'>
            {categories.map((category) => (
                <Item category={category} key={category.id}></Item>
            ))}
        </div>
    )

}

export default Directory;
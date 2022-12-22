import React, {useContext} from 'react'
import { GlobalState } from '../../../GlobalState'

import "./Filter.css"

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort


    const handleCategory = e => {
        setCategory(e.target.value)
        // setSearch('')
    }

    return (
        <div className="filter_menu">
            <label style={{color : "#ee4d2d"}}>Lọc danh sách :</label>
            <div className="filter-category">
                <span>Danh mục: </span>
                <select name="category" value={category} onChange={handleCategory} >
                    <option value=''>All Products</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>


            <div className="filter-sort">
                <span>Sắp xếp: </span>
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Newest</option>
                    <option value='sort=oldest'>Oldest</option>
                    <option value='sort=-sold'>Best sales</option>
                    <option value='sort=-price'>Price: Hight-Low</option>
                    <option value='sort=price'>Price: Low-Hight</option>
                </select>
            </div>
        </div>
    )
}

export default Filters

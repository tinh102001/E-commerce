import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

import "./LoadMore.css"

function LoadMore() {
    const state = useContext(GlobalState)
    const [page, setPage] = state.productsAPI.page
    const [result] = state.productsAPI.result

    return (
        <div className="load_more">
            {
                result < page * 12 ? ""
                : <button onClick={() => setPage(page+1)}>Hiển thị thêm sản phẩm</button>
            }
        </div>
    )
}

export default LoadMore

import React from 'react'
import { useLocation } from "react-router-dom"

function DetailPage() {
    const location = useLocation();
    const item = location.state.item;
  return (
    <div>
        {`${item.id}번째 게시글`}
    </div>
  )
}

export default DetailPage

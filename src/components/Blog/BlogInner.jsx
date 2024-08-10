import React from 'react'
import { useParams } from 'react-router-dom';

const BlogInner = () => {
    const { id } = useParams();

    return (
        <div>BlogInner</div>
    )
}

export default BlogInner
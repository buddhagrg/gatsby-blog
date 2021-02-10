import React from 'react';

export default function Tag({ tags }) {
    if (tags && tags.length > 0) {
        return tags.split(",").map((tag, index) => (
            <span key={index} className="badge badge-custom mr-1">{tag}</span>
        ))
    }
    return null;
}
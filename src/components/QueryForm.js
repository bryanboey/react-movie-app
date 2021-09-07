import React, { useState } from 'react'

export default function QueryForm({ setQuery }) {
    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(input);
        setInput("")
    }

    return (
        <form className="" onSubmit={handleSubmit}>
            <input
                className="form-control w-75 mx-auto"
                onChange={handleChange}
                value={input}
                type="search"
                id="query"
                placeholder="Search for movies"
            />
        </form>
    )
}

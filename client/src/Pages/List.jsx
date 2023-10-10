import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function List() {

    const [list, setList] = useState([])

    useEffect(() => {
        getList()
    }, [])

    const getList = async () => {

        const response = await axios.get('http://localhost:5000/api/getList')
        // console.log(response);
        setList(response.data)
    }

    return (
        <div className="App">
            <h1>List of Items</h1>
            {/* Check to see if any items are found*/}
            {
                list.length ? (
                    <div>
                        {/* Render the list of items */}
                        {list.map((item, i) => {
                            return (
                                <div key={i}>
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div>
                        <h2>No List Items Found</h2>
                    </div>
                )
            }
        </div>
    );


}


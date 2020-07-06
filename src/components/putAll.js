import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types/prop-types';
const axios = require('axios');

export default function PostAll() {

    const [firstResponse, setFirstResponse] = useState([]);
    const [secondResponse, setSecondResponse] = useState([]);
    useEffect(() => {
        let firstRequestUrl = "https://jsonplaceholder.typicode.com/posts/1"
        let secondRequestUrl = "https://jsonplaceholder.typicode.com/posts/2"

        const requestOne = axios.put(firstRequestUrl, {
            title: 'many',
            body: 'foo',
            userId: 1,
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });
        const requestTwo = axios.put(secondRequestUrl, {
            title: 'more',
            body: 'foo',
            userId: 1,
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });

        axios.all([requestOne, requestTwo])
            .then(axios.spread((...responses) => {
                const payloadOne = responses[0].data
                const payloadTwo = responses[1].data
                setFirstResponse([payloadOne]);
                setSecondResponse([payloadTwo]);
            }))
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    return (

        <section>

            <div className="map" style={{ color: 'white' }}>
                <ul>
                    {firstResponse.map((prop, ind) =>
                        <li key={ind}>{prop.title}</li>
                    )}
                </ul>
            </div>

            <div className="map" style={{ color: 'white' }}>
                <ul>
                    {secondResponse.map((prop, ind) =>
                        <li key={ind}>{prop.title}</li>
                    )}
                </ul>
            </div>
        </section>
    );
};

PostAll.propTypes = {
    posts: PropTypes.number.isRequired,
    item: PropTypes.string.isRequired,
    prop: PropTypes.number.isRequired,
    payloadOne: PropTypes.object.isRequired,
    payloadTwo: PropTypes.object.isRequired
};
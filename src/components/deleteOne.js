import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types/prop-types';
const axios = require('axios');

export default function Fetch() {
    const [payload, setPayload] = useState([])
    const prop = {
        success: "updating"
    }
    useEffect(() => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/2')
            .then(payload => {
                if (payload.data > 0) {
                    prop.success = "error!";
                }
                else {
                    prop.success = "successfully deleted!";
                }
                return setPayload([prop])

            })
            .catch(function (error) {
                console.log(error.toJSON());
                if(error.response.status === 404) {
                   prop.success = "404 error!";
                }
                else {
                   prop.success = "error!"
                }
                return setPayload([prop])
            })
            .then(function () {
                // always executed
                console.log(prop.success, payload);
            });
    }, [])

    console.log(payload);
    return (
        <div className="map" style={{ color: 'white' }}>
        <ul>
          {payload.map((prop, ind) =>
            <li key={ind}>{prop.success}</li>
          )}
        </ul>
      </div>
    );
}

Fetch.propTypes = {
    posts: PropTypes.number.isRequired,
    item: PropTypes.string.isRequired,
    prop: PropTypes.number.isRequired,
    payloadOne: PropTypes.object.isRequired,
    payloadTwo: PropTypes.object.isRequired
};
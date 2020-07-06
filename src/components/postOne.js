import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types/prop-types';
const axios = require('axios');

export default function Post() {
  const [payload, setPayload] = useState([])

  useEffect(() => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1,
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(payload => {
        return setPayload([payload.data])
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed

      });
  }, [])
  return (
    <div className="map" style={{ color: 'white' }}>
      <ul>
        {payload.map((prop, ind) =>
          <li key={ind}>{prop.title}</li>
        )}
      </ul>
    </div>
  );
}

Post.propTypes = {
  posts: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  prop: PropTypes.number.isRequired,
  payloadOne: PropTypes.object.isRequired,
  payloadTwo: PropTypes.object.isRequired
};
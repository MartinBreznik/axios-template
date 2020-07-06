import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types/prop-types';
const axios = require('axios');

export default function Fetch() {
    const [payload, setPayload] = useState([])
  
    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(payload => {
      return setPayload([payload.data])
    })
    .catch(function (error) {
     console.log(error.toJSON());
    })
    .then(function () {
      // always executed
    });
  },[])
  
    return (
      <div className="map" style={{color:'white'}}>
                    { Object.keys(payload).map((item, i) => (
                  <div key={i} className="report">
                      <ul>
                         {payload[item].map((prop,ind) =>
                           <li key={ind}>{prop.title}</li>
                        )}
                        </ul>
                  </div>
          ))}
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
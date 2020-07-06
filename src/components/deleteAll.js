import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types/prop-types';
const axios = require('axios');

export default function FetchAll() {

  const [firstResponse, setFirstResponse] = useState([]);
  const [secondResponse, setSecondResponse] = useState([]);
  useEffect(() => {
    let firstRequestUrl = "https://jsonplaceholder.typicode.com/posts/1"
    let secondRequestUrl = "https://jsonplaceholder.typicode.com/posts/2"
    var payloadOne;
    var payloadTwo;
    var requestErrorNumber = {
      first: '',
      second: ''
    };

    const requestOne = axios.delete(firstRequestUrl);
    const requestTwo = axios.delete(secondRequestUrl);

    axios.all([requestOne, requestTwo])
      .then(axios.spread((...responses) => {
        var payloadOne = responses[0].data
        var payloadTwo = responses[1].data

        for (var i in payloadOne) {
          if (payloadOne.hasOwnProperty(i))
          return payloadOne = "error!";
        }
        payloadOne = "success!";

        for (var i in payloadTwo) {
          if (payloadTwo.hasOwnProperty(i))
          return payloadTwo = "error!";
        }
        payloadTwo = "success!";
        setFirstResponse([payloadOne]);
        setSecondResponse([payloadTwo]);
        console.log("ran?");
      }))
      .catch(function (error) {
        console.log(error.response.status);
        setFirstResponse([error.response.status]);
        setSecondResponse([error.response.status]);
      });
  }, [])
  return (
    <section>
      <div className="map" style={{ color: 'white' }}>
        <ul>
          {firstResponse.map((prop, ind) =>
            <li key={ind}>{prop}</li>
          )}
        </ul>
      </div>

      <div className="map" style={{ color: 'white' }}>
        <ul>
          {secondResponse.map((prop, ind) =>
            <li key={ind}>{prop}</li>
          )}
        </ul>
      </div>
    </section>
  );
};

FetchAll.propTypes = {
  posts: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  prop: PropTypes.number.isRequired,
  payloadOne: PropTypes.object.isRequired,
  payloadTwo: PropTypes.object.isRequired
};
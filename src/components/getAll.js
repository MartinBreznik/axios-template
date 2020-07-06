import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types/prop-types';
const axios = require('axios');

export default function FetchAll() {
    
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        let firstRequestUrl = "https://jsonplaceholder.typicode.com/posts"
        let secondRequestUrl = "https://jsonplaceholder.typicode.com/users"

        const requestOne = axios.get(firstRequestUrl);
        const requestTwo = axios.get(secondRequestUrl);

        axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
            const payloadOne = responses[0].data
            const payloadTwo = responses[1].data
            setPosts([payloadOne]);
            setUsers([payloadTwo]);
        }))
        .catch(function (error) {
            console.log(error.toJSON());
          });
    }, [])
    return (
        
      <section>
          
        <div className="map" style={{ color: 'white' }}>
            {Object.keys(posts).map((item, i) => (
                <div key={i} className="report">
                    <ul>
                        {posts[item].map((prop, ind) =>
                            <li key={ind}>{prop.title}</li>
                        )}
                    </ul>
                </div>
            ))}

        </div>

        <div className="map" style={{ color: 'white' }}>
            {Object.keys(users).map((item, i) => (
                <div key={i} className="report">
                    <ul>
                        {users[item].map((prop, ind) =>
                            <li key={ind}>{prop.company.catchPhrase}</li>
                        )}
                    </ul>
                </div>
            ))}

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
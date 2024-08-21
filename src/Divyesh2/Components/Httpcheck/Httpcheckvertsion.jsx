import React, { useEffect } from 'react';
import axios from 'axios';

const App1 = () => {
  useEffect(() => {

    const checkHttpVersion = async () => {
      try {
        const response = await axios.get('https://example.com');

        // Unfortunately, HTTP version is not directly available in Axios response
        // However, you can try to infer it by inspecting headers or other response properties

        console.log('Response Headers:', response.headers);

        // Custom logic can be added here to guess the HTTP version
      } catch (error) {
        console.error('Error fetching resource:', error);
      }
    };

    checkHttpVersion();
  }, []);

  return <div className="App">Check the console for HTTP version details.</div>;
}

export default App1;

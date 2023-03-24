import { useState, useEffect } from 'react';
import './Fetch.css';

const FetchQuote = () => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const url = 'https://api.api-ninjas.com/v1/quotes';

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'BKClj4Dtpag57e4essMWzQ==qPsncxrminIefPX5',
      },
    }).then((res) => res.json()).then((apiData) => {
      setData(apiData);
      setIsLoading(false);
    }).catch(() => {
      setHasError(true);
    });
  }, [setData, setIsLoading]);

  if (hasError) {
    return (
      <section className="QuoteContainer">
        <span className="Error">Ups, something went wrong. Let&apos;s try again!</span>
      </section>
    );
  }
  if (isLoading) {
    return (
      <section className="QuoteContainer">
        <span>Loading...</span>
      </section>
    );
  }

  return (
    <section className="QuoteContainer">
      <blockquote>
        &quot;
        {data[0].quote}
        &quot;
      </blockquote>
      <p>
        -
        {' '}
        {data[0].author}
        {' '}
        -
      </p>
    </section>
  );
};

export default FetchQuote;

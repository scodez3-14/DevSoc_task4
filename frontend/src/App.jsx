
import { useEffect, useState } from 'react';
import QuoteCard from './components/QuoteCard';

function App() {
  // State management
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch quote from API
  const fetchQuote = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) throw new Error('Failed to fetch quote');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (err) {
      setError('Could not fetch quote. Please try again.');
      setQuote('');
      setAuthor('');
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchQuote();
  }, []);

  // Share functionality
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Quote of the Day',
        text: `"${quote}" - ${author}`,
      });
    } else {
      navigator.clipboard.writeText(`"${quote}" - ${author}`);
      alert('Quote copied to clipboard!');
    }
  };

  // Render
  return (
    <QuoteCard
      quote={quote}
      author={author}
      loading={loading}
      error={error}
      onNewQuote={fetchQuote}
      onShare={handleShare}
    />
  );
}

export default App;

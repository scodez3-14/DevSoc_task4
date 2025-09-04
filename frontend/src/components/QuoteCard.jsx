import React from 'react';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

function QuoteCard({ quote, author, loading, error, onNewQuote, onShare }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center border border-gray-200">
        <div className="mb-6">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto mb-2 text-purple-400"><path d="M7 17a5 5 0 0 1 5-5V7a8 8 0 0 0-8 8v2a3 3 0 0 0 3 3h2v-3Zm10 0a5 5 0 0 1 5-5V7a8 8 0 0 0-8 8v2a3 3 0 0 0 3 3h2v-3Z" fill="currentColor"/></svg>
          <h2 className="text-2xl font-bold text-purple-700 tracking-tight mb-2">Quote of the Day</h2>
        </div>
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <>
            <p className="text-xl italic font-medium text-gray-800 mb-4 transition-all duration-300">“{quote}”</p>
            <p className="text-lg font-semibold text-purple-500 mb-6">— {author}</p>
          </>
        )}
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-5 py-2 rounded-full shadow-md font-semibold transition-all duration-200 disabled:opacity-50"
            onClick={onNewQuote}
            disabled={loading}
          >
            New Quote
          </button>
          <button
            className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 text-white px-5 py-2 rounded-full shadow-md font-semibold transition-all duration-200 disabled:opacity-50"
            onClick={onShare}
            disabled={loading || !!error}
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;

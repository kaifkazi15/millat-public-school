// File: src/pages/Quotes.jsx
import { quotes } from '../quotesData';

const Quotes = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>School Quotes</h1>
      {quotes.map((q) => (
        <div key={q.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <p>"{q.text}"</p>
          <strong>- {q.author}</strong>
        </div>
      ))}
    </div>
  );
};
export default Quotes;
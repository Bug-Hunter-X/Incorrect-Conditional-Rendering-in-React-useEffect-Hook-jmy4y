```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: side effects here
    console.log('Count updated:', count);
  }, [count]);

  // Correct: conditional rendering here
  let message = '';
  if (count > 0) {
    message = 'Count is greater than 0';
  }

  return (
    <div>
      <p>Count: {count}</p>
      <p>{message}</p> 
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
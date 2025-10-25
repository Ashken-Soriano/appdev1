function Counter({ clicks }) {
  return <p>Clicked {clicks} times</p>;
}

export default function App() {
  return (
    <div>
      <Counter clicks={1} />
      <Counter clicks={2} />
    </div>
  );
}

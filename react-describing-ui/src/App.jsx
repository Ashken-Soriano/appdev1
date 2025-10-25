function Friend({ name }) {
  return <li>{name}</li>;
}

export default function App() {
  const friends = ["Liam", "Noah", "Emma", "Olivia"];

  return (
    <div>
      <h2>Friends List</h2>
      <ul>
        {friends.map((friend) => (
          <Friend key={friend} name={friend} />
        ))}
      </ul>
    </div>
  );
}

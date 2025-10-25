function Avatar({ name }) {
  return <img src={`https://robohash.org/${name}.png`} alt={name} />;
}

function Profile({ name }) {
  return (
    <div>
      <Avatar name={name} />
      <p>{name}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Profile name="Ashken" />
      <Profile name="Louie" />
    </div>
  );
}

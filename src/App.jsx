// src/App.jsx
const user = {
  name: 'Gregorio Y. Zara',
  imageUrl: 'https://i.imgur.com/QIrZWGIs.jpg',
};

export default function Profile() {
  return (
    <div>
      {/* curly braces for dynamic text */}
      <h1>{user.name}'s Profile</h1>

      {/* curly braces for dynamic attribute values */}
      <img
        src={user.imageUrl}
        alt={user.name}
      />

    </div>
  );
}
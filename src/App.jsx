// src/App.jsx
const person = {
  name: 'Taylor',
  imageId: '7vQD0fP',
  imageType: 'jpg',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s To Do List</h1>
      <img
        className="avatar"
        src={"https://i.imgur.com/" + person.imageId + "." + person.imageType}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fueled engine</li>
      </ul>
    </div>
  );
}
import { UserInfo } from "./components/UserInfo";

export default function App() {
  return (
    <div>
      <UserInfo name="Ashken" age={18} />
      <UserInfo name="Louie" age={20} />
    </div>
  );
}

import "./App.css";
import Border from "./componetns/Border/Border";
import Child from "./componetns/Border/Child/Child";
import Resume from "./componetns/Resume/Resume";
import List from "./componetns/List/List";
import Event from "./componetns/EventHandler/Event";
import Counter from "./componetns/Counter/Counter";

function App() {
  const handleClick = (e) => {
    e.stopPropagation();
  }

  const itemss = ["Item 1", "Item 2", "Item 3"];
  return (
    <div onClick={() => console.log("app")}>
      <Border>
        <Resume />
        <Border>
          <Child />
        </Border>
        <div>
          <h2>Numbered List</h2>
          <List layout="numbered" items={itemss} />

          <h2>Alphabetical List</h2>
          <List layout="alpha" items={itemss} />

          <h2>Bullet List</h2>
          <List layout="bullet" items={itemss} />
        </div>
        <Event />
        <Counter />
      </Border>
      <button onClick={handleClick}>Final</button>
    </div>
  );
}

export default App;

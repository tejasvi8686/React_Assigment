import "./App.css";
import Border from "./componetns/Border/Border";
import Child from "./componetns/Border/Child/Child";
import Resume from "./componetns/Resume/Resume";

function App() {
  return (
    <Border>
      <Resume />
      <Border>
        <Child />
      </Border>
      <Border>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          odio. Et, nobis sapiente debitis vel cum aliquam earum, cupiditate
          incidunt numquam ullam dignissimos quos vero repellat sit quidem quae
          ipsum molestiae optio nesciunt soluta laudantium asperiores quo! Ipsam
          earum, ea, asperiores id suscipit nobis repudiandae, ab cumque ducimus
          perferendis dolor!
        </p>
      </Border>
    </Border>
  );
}

export default App;

import { useState } from "react";
import menu from "./data";
import Button from "./components/Button";
import MenuItem from "./components/MenuItem";

function App() {
  const [items, setItems] = useState(menu);

  const filterMenu = (mealsTime) => {
    if (mealsTime === "all") return setItems(menu);
    let newItems = menu.filter((item) => item.category === mealsTime);
    setItems(newItems);
  };

  return (
    <main>
      <section className="container">
        <header className="title">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </header>
        <nav>
          <Button text={"All"} handlerFn={() => filterMenu("all")} />
          <Button
            text={"BreakFast"}
            handlerFn={() => filterMenu("breakfast")}
          />
          <Button text={"Lunch"} handlerFn={() => filterMenu("lunch")} />
          <Button text={"Shakes"} handlerFn={() => filterMenu("shakes")} />
        </nav>
        <section className="food-container">
          {items.map((item) => {
            const { id, title, price, img, desc } = item;
            return (
              <MenuItem
                key={id}
                title={title}
                price={price}
                img={img}
                desc={desc}
              />
            );
          })}
        </section>
      </section>
    </main>
  );
}

export default App;

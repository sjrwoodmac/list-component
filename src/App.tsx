import * as React from "react";
import { List, ListItem, ListTitle, ListWrapper } from "./components";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Lists</h1>

      <div className="flex-container">
        <section>
          <h2>Default</h2>
          <ListWrapper>
            <List>
              <ListItem value="item1">Item 1</ListItem>
              <ListItem value="item2">Item 2</ListItem>
              <ListItem value="item3">Item 3</ListItem>
              <ListItem value="item4">Item 4</ListItem>
            </List>
          </ListWrapper>
        </section>

        <section>
          <h2>With icon</h2>
          <ListWrapper>
            <List icon="full-circle">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
            </List>
          </ListWrapper>
        </section>

        <section>
          <h2>Directional</h2>
          <ListWrapper>
            <List directional>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
            </List>
          </ListWrapper>
        </section>

        <section>
          <h2>List Title</h2>
          <ListWrapper>
            <ListTitle>Title</ListTitle>
            <List icon="full-circle">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
            </List>
          </ListWrapper>
        </section>

        <section>
          <h2>Checkbox</h2>
          <ListWrapper>
            <List multiSelect onSelected={(items: any) => console.log(items)}>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
            </List>
          </ListWrapper>
        </section>

        <section>
          <h2>Draggable</h2>
          <ListWrapper>
            <List draggable>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
            </List>
          </ListWrapper>
        </section>
      </div>
    </div>
  );
}

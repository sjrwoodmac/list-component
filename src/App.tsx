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
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
            </List>
          </ListWrapper>
        </section>

        <section>
          <h2>With icon</h2>
          <ListWrapper>
            <List icon="full-circle">
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
            </List>
          </ListWrapper>
        </section>

        <section>
          <h2>Directional</h2>
          <ListWrapper>
            <List directional>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
            </List>
          </ListWrapper>
        </section>

        <section>
          <h2>List Title</h2>
          <ListWrapper>
            <ListTitle>Title</ListTitle>
            <List icon="full-circle">
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
            </List>
          </ListWrapper>
        </section>

        <section>
          <h2>Checkbox</h2>
          <ListWrapper>
            <List checkboxes onChecked={() => {}}>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
            </List>
          </ListWrapper>
        </section>

        <section>
          <h2>Draggable</h2>
          <ListWrapper>
            <List draggable>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
            </List>
          </ListWrapper>
        </section>
      </div>
    </div>
  );
}

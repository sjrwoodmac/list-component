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
          <h2>Single Item - Default</h2>
          <ListWrapper>
            <List>
              <ListItem>Item #1</ListItem>
              <ListItem>Item #2</ListItem>
              <ListItem>Item #3</ListItem>
              <ListItem>Item #4</ListItem>
              <ListItem>Item #5</ListItem>
            </List>
          </ListWrapper>
        </section>

        <section>
          <h2>Single Item - Default with icon</h2>
          <ListWrapper>
            <List icon="full-circle">
              <ListItem>Item #1</ListItem>
              <ListItem>Item #2</ListItem>
              <ListItem>Item #3</ListItem>
              <ListItem>Item #4</ListItem>
              <ListItem>Item #5</ListItem>
            </List>
          </ListWrapper>
        </section>

        <section>
          <h2>Single Item - Directional</h2>
          <ListWrapper>
            <List directional>
              <ListItem>Item #1</ListItem>
              <ListItem>Item #2</ListItem>
              <ListItem>Item #3</ListItem>
              <ListItem>Item #4</ListItem>
              <ListItem>Item #5</ListItem>
            </List>
          </ListWrapper>
        </section>

        <section>
          <h2>List Title</h2>
          <ListWrapper>
            <ListTitle>List Title</ListTitle>
            <List>
              <ListItem>Item #1</ListItem>
              <ListItem>Item #2</ListItem>
              <ListItem>Item #3</ListItem>
              <ListItem>Item #4</ListItem>
              <ListItem>Item #5</ListItem>
            </List>
          </ListWrapper>
        </section>

        <section>
          <h2>Checkbox</h2>
          <ListWrapper>
            <List checkboxes onChecked={() => {}}>
              <ListItem>Item #1</ListItem>
              <ListItem>Item #2</ListItem>
              <ListItem>Item #3</ListItem>
              <ListItem>Item #4</ListItem>
              <ListItem>Item #5</ListItem>
            </List>
          </ListWrapper>
        </section>
      </div>
    </div>
  );
}

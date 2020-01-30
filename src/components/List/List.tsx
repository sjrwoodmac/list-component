import React, {
  Children,
  cloneElement,
  FunctionComponent,
  ReactElement,
  ReactNode,
  useState
} from "react";
import uuidv4 from "uuid/v4";

interface IListProps {
  checkboxes?: boolean;
  children: ReactNode;
  directional?: boolean;
  draggable?: boolean;
  icon?: string;
  onChecked?: Function;
}

const List: FunctionComponent<IListProps> = ({
  checkboxes = false,
  children,
  directional = false,
  draggable = false,
  icon,
  onChecked
}) => {
  const [listItems, setListItems] = useState<ReactNode[] | null>(
    (): ReactNode[] | null =>
      Children.toArray(children).map((listItem, index) =>
        cloneElement(listItem as ReactElement<any>, {
          id: `listItem_${uuidv4()}`,
          index: index,
          checkboxes,
          directional,
          draggable,
          icon,
          key: uuidv4(),
          onChecked
        })
      )
  );

  return (
    <div className="list">
      <ul {...directional && { className: "list-directional" }}>{listItems}</ul>
    </div>
  );
};

export default List;

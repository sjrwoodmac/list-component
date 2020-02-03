import React, {
  Children,
  cloneElement,
  FunctionComponent,
  isValidElement,
  ReactNode,
  useState,
  useEffect
} from "react";
import { IListItemProps } from "../ListItem/ListItem";

interface IListProps {
  multiSelect?: boolean;
  children: ReactNode;
  directional?: boolean;
  draggable?: boolean;
  icon?: string;
  onSelected?: Function;
}

interface ISelectedListItem {
  label: string;
  value: string | number;
}

const List: FunctionComponent<IListProps> = ({
  multiSelect = false,
  children,
  directional = false,
  draggable = false,
  icon,
  onSelected
}) => {
  const [selectedItems, setSelectedItems] = useState<ISelectedListItem[]>([]);

  useEffect(() => {
    onSelected && onSelected(selectedItems);
  }, [selectedItems, onSelected]);

  const handleItemSelect = (item: ISelectedListItem): void => {
    const isExistingSelectedItem = selectedItems.some(
      selectedItem =>
        selectedItem.label === item.label && selectedItem.value === item.value
    );

    if (!multiSelect) {
      if (isExistingSelectedItem) {
        setSelectedItems([]);
      } else {
        setSelectedItems([item]);
      }
    } else {
      if (isExistingSelectedItem) {
        setSelectedItems(
          selectedItems.filter(
            selectedItem =>
              selectedItem.label !== item.label &&
              selectedItem.value !== item.value
          )
        );
      } else {
        setSelectedItems([...selectedItems, item]);
      }
    }
  };

  const listItems: ReactNode[] | null = Children.toArray(children).map(
    (listItem, index) => {
      if (!isValidElement<IListItemProps>(listItem)) {
        return listItem;
      }

      let isSelected = false;

      if (listItem && listItem.props) {
        const label = listItem.props.children;
        const value = listItem.props.value || label;

        isSelected = selectedItems.some(
          selectedItem =>
            selectedItem.label === label && selectedItem.value === value
        );
      }

      return cloneElement(listItem, {
        multiSelect,
        directional,
        draggable,
        icon,
        key: index,
        isSelected,
        onItemSelected: handleItemSelect
      });
    }
  );

  return (
    <div className="list">
      <ul {...directional && { className: "list-directional" }}>{listItems}</ul>
    </div>
  );
};

export default List;

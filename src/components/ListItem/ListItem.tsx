import React, { FunctionComponent, ReactNode, useState, useRef } from "react";
import { Checkbox, Icon, Tag } from "@blueprintjs/core";

interface IListItemProps {
  id?: any;
  checkboxes?: boolean;
  chilren?: ReactNode;
  directional?: boolean;
  draggable?: boolean;
  icon?: string;
  isSelected?: boolean;
  onChecked?: Function;
}

const ListItem: FunctionComponent<IListItemProps> = ({
  id,
  checkboxes,
  children,
  directional,
  draggable,
  icon,
  isSelected,
  onChecked
}) => {
  const [selected, setSelected] = useState(isSelected);

  const ref = useRef<HTMLLIElement>(null);

  const handleListItemClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setSelected(!selected);
  };

  const ListItemContent = () => {
    if (checkboxes) {
      return (
        <>
          <Checkbox checked={selected} tabIndex={-1} />
          <span className="list-item-text">{children}</span>
          <Tag className="list-item-tag" minimal>
            Unit
          </Tag>
        </>
      );
    }

    if (directional) {
      return (
        <>
          <span className="list-item-text">{children}</span>
          <Icon icon="chevron-right" iconSize={16} />
        </>
      );
    }

    if (draggable) {
      return (
        <>
          <Icon
            icon="layout-grid"
            iconSize={12}
            style={{ marginRight: "8px" }}
          />
          <span className="list-item-text">{children}</span>
        </>
      );
    }

    return (
      <>
        {!directional && icon && <Icon icon={icon} iconSize={16} />}

        <span className="list-item-text">{children}</span>
        {directional && <Icon icon="chevron-right" iconSize={16} />}
      </>
    );
  };

  return (
    <li
      ref={ref}
      id={id}
      className={`list-item${checkboxes ? " list-item-checkbox" : ""}${
        draggable ? " list-item-draggable" : ""
      }${selected ? " list-item-selected" : ""}`}
    >
      <a href="/" role="button" onClick={handleListItemClick}>
        <ListItemContent />
      </a>
    </li>
  );
};

export default ListItem;

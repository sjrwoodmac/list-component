import React, { FunctionComponent, ReactNode, useState, useRef } from "react";
import { Checkbox, Icon } from "@blueprintjs/core";

interface IListItemProps {
  id?: any;
  checkboxes?: boolean;
  chilren?: ReactNode;
  directional?: boolean;
  icon?: string;
  isSelected?: boolean;
  onChecked?: Function;
}

interface IDragItem {
  index: number;
  id: string;
  type: string;
}

const ListItem: FunctionComponent<IListItemProps> = ({
  id,
  checkboxes,
  children,
  directional,
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
        </>
      );
    }

    return (
      <>
        {!directional && icon && <Icon icon={icon || null} iconSize={16} />}

        <span className="list-item-text">{children}</span>
        {directional && <Icon icon="chevron-right" iconSize={16} />}
      </>
    );
  };

  return (
    <li ref={ref} id={id}>
      <a
        href="/"
        role="button"
        onClick={handleListItemClick}
        {...selected && { className: "list-item-selected" }}
      >
        <ListItemContent />
      </a>
    </li>
  );
};

export default ListItem;

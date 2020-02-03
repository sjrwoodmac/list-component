import React, { FunctionComponent, ReactNode, useRef } from "react";
import { Checkbox, Icon, Tag } from "@blueprintjs/core";

export interface IListItemProps {
  multiSelect?: boolean;
  children?: ReactNode;
  directional?: boolean;
  draggable?: boolean;
  icon?: string;
  isSelected?: boolean;
  value?: string | number | boolean;
  onItemSelected?: Function;
}

const ListItem: FunctionComponent<IListItemProps> = ({
  multiSelect,
  children,
  directional,
  draggable,
  icon,
  value,
  isSelected,
  onItemSelected
}) => {
  const ref = useRef<HTMLLIElement>(null);

  const handleListItemClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const node = e.target as HTMLAnchorElement;
    const { label, value } = node.dataset;

    onItemSelected &&
      onItemSelected({
        label,
        value
      });
  };

  const ListItemContent = () => {
    if (multiSelect) {
      return (
        <>
          <Checkbox checked={isSelected} tabIndex={-1} />
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
      className={`list-item${multiSelect ? " list-item-checkbox" : ""}${
        draggable ? " list-item-draggable" : ""
      }${isSelected ? " list-item-selected" : ""}`}
    >
      <a
        href="/"
        role="button"
        onClick={handleListItemClick}
        data-label={children ? children.toString() : null}
        data-value={value || (children ? children.toString() : null)}
      >
        <ListItemContent />
      </a>
    </li>
  );
};

export default ListItem;

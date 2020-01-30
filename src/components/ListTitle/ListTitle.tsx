import React, { FunctionComponent, ReactNode } from "react";

interface IListTitleProps {
  children: ReactNode;
}

export const ListTitle: FunctionComponent<IListTitleProps> = ({ children }) => (
  <div className="list-title">{children}</div>
);

import React, { FunctionComponent, ReactNode } from "react";

interface iListWrapperProps {
  children: ReactNode;
}

export const ListWrapper: FunctionComponent<iListWrapperProps> = ({
  children
}) => <div className="list-wrapper">{children}</div>;

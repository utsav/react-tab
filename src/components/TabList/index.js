import React, { useMemo, cloneElement } from "react";
import s from "./TabList.module.scss";

const TabList = ({ children }) => {
  const tabItems = useMemo(
    () =>
      children.map((tabItem, tabIndex) => cloneElement(tabItem, { tabIndex })),
    [children]
  );

  return <div className={s.container}>{tabItems}</div>;
};

TabList.tabType = "TabList";
export default TabList;

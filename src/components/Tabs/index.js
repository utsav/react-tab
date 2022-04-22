import React, { useMemo, useState } from "react";
import TabContext from "../../contexts/TabContext";
import s from "./Tabs.module.scss";

const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabChange = (index) => {
    setActiveIndex(index);
  };

  const { tabList, tabPanels } = useMemo(() => {
    let tabList = null;
    let tabPanels = [];
    children.forEach((childItem) => {
      if (childItem.type.tabType === "TabList") {
        tabList = childItem;
      }
      if (childItem.type.tabType === "TabPanel") {
        tabPanels.push(childItem);
      }
    });
    return { tabList, tabPanels };
  }, [children]);

  return (
    <TabContext.Provider value={{ activeIndex, handleTabChange }}>
      <div className={s.container}>
        <div>{tabList}</div>
        <div>{tabPanels[activeIndex]}</div>
      </div>
    </TabContext.Provider>
  );
};

Tabs.tabType = "Tabs";
export default Tabs;

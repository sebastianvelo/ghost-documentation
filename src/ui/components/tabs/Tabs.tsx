import React, { FunctionComponent, useState } from "react";
import TabsContent from "./content/TabsContent";
import TabsHeader from "./header/TabsHeader";

interface TabsProps {
  tabs?: {
    header: string;
    children: React.ReactNode | React.ReactNode[];
  }[];
}

const Tabs: FunctionComponent<TabsProps> = (props: TabsProps) => {
  const [tabActive, setTabActive] = useState(0);

  return (
    <div className="w-full flex flex-col flex-nowrap">
      <TabsHeader setTabActive={setTabActive} tabActive={tabActive} headers={props.tabs?.map(tab => tab.header)} />
      <TabsContent tabActive={tabActive} contents={props.tabs?.map(tab => tab.children)} />
    </div>
  );
};

export default Tabs;

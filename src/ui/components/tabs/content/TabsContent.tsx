import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import { transitionStyle } from "ui/common/style/CommonStyles";
import React, { FunctionComponent } from "react";

const getTabContentStyle = (i: number, active: number) =>
  TailwindStyle.builder()
    .add(transitionStyle())
    .addIf(`opacity-0 hidden`, i !== active)
    .addIf(`opacity-100`, i === active)
    .get();

interface TabsContentProps {
  tabActive: number;
  contents?: (React.ReactNode | React.ReactNode[])[];
}

const TabsContent: FunctionComponent<TabsContentProps> = (props: TabsContentProps) => (
  <div>
    {props.contents?.map((content, i) => (
      <div className={getTabContentStyle(i, props.tabActive)}>{content}</div>
    ))}
  </div>
);

export default TabsContent;

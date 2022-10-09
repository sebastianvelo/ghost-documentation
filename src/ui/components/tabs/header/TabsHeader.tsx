import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import { transitionStyle } from "ui/common/style/CommonStyles";
import { FunctionComponent } from "react";

const getTabStyle = (i: number, active: number) =>
  TailwindStyle.builder()
    .add(transitionStyle())
    .add("text-center w-full cursor-pointer border-b-4 py-2")
    .addIf("border-primary-light", i === active)
    .addIf("border-transparent", i !== active)
    .get();

const getTabHeaderStyle = () =>
  TailwindStyle.builder()
    .add("flex space-x-2 justify-around overflow-x-scroll flex-nowrap")
    .get();

interface TabsHeaderProps {
  setTabActive: (i: number) => void;
  tabActive: number;
  headers?: string[];
}

const TabsHeader: FunctionComponent<TabsHeaderProps> = (
  props: TabsHeaderProps
) => (
  <div className={getTabHeaderStyle()}>
    {props.headers?.map((tab, i) => (
      <div
        className={getTabStyle(i, props.tabActive)}
        onClick={() => props.setTabActive(i)}
      >
        {tab}
      </div>
    ))}
  </div>
);

export default TabsHeader;

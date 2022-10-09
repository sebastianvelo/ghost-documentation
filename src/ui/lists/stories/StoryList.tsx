import Story, { StoryProps } from "ui/components/story/Story";
import { divideColorStyle } from "ui/common/style/CommonStyles";
import { FunctionComponent } from "react";

interface StoryListProps {
  stories: StoryProps[];
  hoverable?: boolean;
}

const StoryList: FunctionComponent<StoryListProps> = (
  props: StoryListProps
) => (
  <div className={`divide-y ${divideColorStyle({})} w-full`}>
    {props.stories?.map((story) => (
      <Story {...story} {...props} />
    ))}
  </div>
);

export default StoryList;

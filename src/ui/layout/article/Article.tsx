import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import ParentProps from "ui/common/props/ParentProps";
import StyleableProps from "ui/common/props/StyleableProps";
import Title, { TitleProps } from "ui/atomic/title/Title";
import { FunctionComponent } from "react";

const articleStyle = (props: ArticleProps) =>
  TailwindStyle.builder().add(props.className).add("space-y-2").get();

export interface ArticleProps extends ParentProps, StyleableProps {
  title?: TitleProps;
}

const Article: FunctionComponent<ArticleProps> = (props: ArticleProps) => (
  <article className={articleStyle(props)}>
    <Title {...props.title} />
    {props.children}
  </article>
);

export default Article;

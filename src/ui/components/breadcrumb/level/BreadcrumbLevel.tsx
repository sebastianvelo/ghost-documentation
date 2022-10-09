import ActionLink, { ActionLinkProps } from "ui/atomic/link/ActionLink";
import { FunctionComponent } from "react";

interface BreadcrumbLevelProps extends ActionLinkProps {
  icon?: React.ReactNode;
}

const BreadcrumbLevel: FunctionComponent<BreadcrumbLevelProps> = (
  props: BreadcrumbLevelProps
) => (
  <>
    <ActionLink {...props} />
    {props.icon}
  </>
);

export default BreadcrumbLevel;

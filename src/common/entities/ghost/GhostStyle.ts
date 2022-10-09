class GhostStyle {
  private classNames: string[] = [];

  static builder = () => new GhostStyle();

  addIf = (className?: string, condition?: any) => {
    if (className && condition) this.classNames.push(className);
    return this;
  };

  add = (className?: string) => this.addIf(className, true);

  get = () => this.classNames.join(" ").trim();
}

export default GhostStyle;

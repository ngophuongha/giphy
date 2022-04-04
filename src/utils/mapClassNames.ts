type ClassNameArg = string | false | undefined | null | 0;

export function mapClassNames(
  classes: Record<string, string>
): (...args: ClassNameArg[]) => string {
  return (...args: ClassNameArg[]) => {
    return args
      .reduce<string[]>((arr, key) => {
        if (!key) return arr;
        const name = classes[key];
        arr.push(name || key);
        return arr;
      }, [])
      .join(" ");
  };
}

import { ThemeRegistration } from "shiki";

/**
 * @todo Replace these colors with their dark mode variants.
 */
const tokenColors = [
  {
    scope: "command.andexdbcmd",
    settings: {
      foreground: "#569CD6",
    },
  },
  {
    scope: "parameter.optional.andexdbcmd",
    settings: {
      foreground: "#D4D4D4",
    },
  },
  {
    scope: "parameter.required.andexdbcmd",
    settings: {
      foreground: "#4EC9B0",
    },
  },
  {
    scope: "parameter.ignorable.andexdbcmd",
    settings: {
      foreground: "#C586C0",
    },
  },
  {
    scope: "parameter.flags.andexdbcmd",
    settings: {
      foreground: "#CE9178",
    },
  },
  {
    scope: "entity.name.parameter.andexdbcmd",
    settings: {
      foreground: "#9CDCFE",
    },
  },
  {
    scope: "entity.type.parameter.andexdbcmd",
    settings: {
      foreground: "#B5CEA8",
    },
  },
  {
    scope: "entity.restrictions.parameter.andexdbcmd",
    settings: {
      foreground: "#D7BA7D",
    },
  },
] as const;

export default function applyExtension<T extends ThemeRegistration>(
  theme: T
): Exclude<T, "tokenColors"> & {
  tokenColors: [
    ...(T["tokenColors"] extends undefined ? [] : NonNullable<T["tokenColors"]>),
    ...typeof tokenColors,
  ];
} {
  theme.tokenColors ??= [];
  theme.tokenColors.push(...tokenColors);
  return theme as any;
}

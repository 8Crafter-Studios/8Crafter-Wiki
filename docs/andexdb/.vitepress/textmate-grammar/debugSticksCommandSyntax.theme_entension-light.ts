import { ThemeRegistration } from "shiki";

const tokenColors = [
  {
    scope: "command.andexdbcmd",
    settings: {
      foreground: "hsl(207, 61%, 41%)",
    },
  },
  {
    scope: "parameter.optional.andexdbcmd",
    settings: {
      foreground: "hsl(0, 0%, 17%)",
    },
  },
  {
    scope: "parameter.required.andexdbcmd",
    settings: {
      foreground: "hsl(168, 53%, 45%)",
    },
  },
  {
    scope: "parameter.ignorable.andexdbcmd",
    settings: {
      foreground: "hsl(305, 35%, 35%)",
    },
  },
  {
    scope: "parameter.flags.andexdbcmd",
    settings: {
      foreground: "hsl(17, 47%, 36%)",
    },
  },
  {
    scope: "entity.name.parameter.andexdbcmd",
    settings: {
      foreground: "hsl(201, 98%, 20%)",
    },
  },
  {
    scope: "entity.type.parameter.andexdbcmd",
    settings: {
      foreground: "hsl(99, 28%, 27%)",
    },
  },
  {
    scope: "entity.restrictions.parameter.andexdbcmd",
    settings: {
      foreground: "hsl(41, 53%, 33%)",
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

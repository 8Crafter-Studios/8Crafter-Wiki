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
      foreground: "hsl(0, 0%, 47%)",
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
    scope: "storage.type.parameter.andexdbcmd",
    settings: {
      foreground: "hsl(99, 28%, 27%)",
    },
  },
  {
    scope: "storage.type.plain_text.parameter.andexdbcmd",
    settings: {
      foreground: "hsl(87, 72%, 20%)",
    },
  },
  {
    scope: "string.quoted.other.parameter_type.andexdbcmd",
    settings: {
      foreground: "hsl(87, 72%, 20%)",
    },
  },
  {
    scope: "meta.parameter.type.restrictions.andexdbcmd",
    settings: {
      foreground: "hsl(41, 53%, 33%)",
    },
  },
  {
    scope: "entity.name.parameter_restriction.andexdbcmd",
    settings: {
      foreground: "hsl(356, 100%, 19%)",
    },
  },
  {
    scope: "constant.language.boolean.parameter_restriction_value.andexdbcmd",
    settings: {
      foreground: "hsl(356, 100%, 19%)",
    },
  },
  {
    scope: "constant.language.true.parameter_restriction_value.andexdbcmd",
    settings: {
      foreground: "hsl(120, 100%, 33%)",
    },
  },
  {
    scope: "constant.language.false.parameter_restriction_value.andexdbcmd",
    settings: {
      foreground: "hsl(0, 100%, 33%)",
    },
  },
  {
    scope: "constant.numeric.number.parameter_restriction_value.andexdbcmd",
    settings: {
      foreground: "hsl(29, 100%, 50%)",
    },
  },
  {
    scope: "constant.numeric.int.parameter_restriction_value.andexdbcmd",
    settings: {
      foreground: "hsl(29, 100%, 50%)",
    },
  },
  {
    scope: "constant.numeric.float.parameter_restriction_value.andexdbcmd",
    settings: {
      foreground: "hsl(29, 100%, 50%)",
    },
  },
  {
    scope: "constant.numeric.bigint.parameter_restriction_value.andexdbcmd",
    settings: {
      foreground: "hsl(29, 100%, 50%)",
    },
  },
  {
    scope: "string.quoted.double.parameter_restriction_value.andexdbcmd",
    settings: {
      foreground: "hsl(87, 72%, 20%)",
    },
  },
  {
    scope: "meta.parameter.type.restriction.value.parameter.andexdbcmd",
    settings: {
      foreground: "hsl(356, 100%, 39%)",
    },
  },
  {
    scope: "keyword.operator.equals.parameter_restriction.andexdbcmd",
    settings: {
      foreground: "hsl(180, 100%, 20%)",
    },
  },
  {
    scope: "keyword.operator.comma.parameter_restriction.andexdbcmd",
    settings: {
      foreground: "hsl(180, 100%, 20%)",
    },
  },
  {
    scope: "keyword.operator.union.union_type_vertical_line.andexdbcmd",
    settings: {
      foreground: "hsl(180, 100%, 20%)",
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

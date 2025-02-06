import { ThemeRegistration } from "shiki";

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
      foreground: "#878787",
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
      foreground: "#ce9178",
    },
  },
  {
    scope: "parameter.start_ellipsis.andexdbcmd",
    settings: {
      foreground: "#a078ce",
    },
  },
  {
    scope: "parameter.end_ellipsis.andexdbcmd",
    settings: {
      foreground: "#a078ce",
    },
  },
  {
    scope: "entity.name.parameter.andexdbcmd",
    settings: {
      foreground: "#9CDCFE",
    },
  },
  {
    scope: "storage.type.parameter.andexdbcmd",
    settings: {
      foreground: "#B5CEA8",
    },
  },
  {
    scope: "storage.type.plain_text.parameter.andexdbcmd",
    settings: {
      foreground: "#D1F1A9",
    },
  },
  {
    scope: "string.quoted.other.parameter_type.andexdbcmd",
    settings: {
      foreground: "#D1F1A9",
    },
  },
  {
    scope: "meta.parameter.type.restrictions.andexdbcmd",
    settings: {
      foreground: "#D7BA7D",
    },
  },
  {
    scope: "entity.name.parameter_restriction.andexdbcmd",
    settings: {
      foreground: "#FF9DA4",
    },
  },
  {
    scope: "constant.language.boolean.parameter_restriction_value.andexdbcmd",
    settings: {
      foreground: "#BBDAFF",
    },
  },
  {
    scope: "constant.language.true.parameter_restriction_value.andexdbcmd",
    settings: {
      foreground: "#55FF55",
    },
  },
  {
    scope: "constant.language.false.parameter_restriction_value.andexdbcmd",
    settings: {
      foreground: "#ff5555",
    },
  },
  {
    scope: "constant.numeric.number.parameter_restriction_value.andexdbcmd",
    settings: {
      foreground: "#FFC58F",
    },
  },
  {
    scope: "constant.numeric.int.parameter_restriction_value.andexdbcmd",
    settings: {
      foreground: "#FFC58F",
    },
  },
  {
    scope: "constant.numeric.float.parameter_restriction_value.andexdbcmd",
    settings: {
      foreground: "#FFC58F",
    },
  },
  {
    scope: "constant.numeric.bigint.parameter_restriction_value.andexdbcmd",
    settings: {
      foreground: "#FFC58F",
    },
  },
  {
    scope: "string.quoted.double.parameter_restriction_value.andexdbcmd",
    settings: {
      foreground: "#D1F1A9",
    },
  },
  {
    scope: "meta.parameter.type.restriction.value.parameter.andexdbcmd",
    settings: {
      foreground: "#FF9DA4",
    },
  },
  {
    scope: "keyword.operator.equals.parameter_restriction.andexdbcmd",
    settings: {
      foreground: "#99FFFF",
    },
  },
  {
    scope: "keyword.operator.comma.parameter_restriction.andexdbcmd",
    settings: {
      foreground: "#99FFFF",
    },
  },
  {
    scope: "keyword.operator.union.union_type_vertical_line.andexdbcmd",
    settings: {
      foreground: "#99FFFF",
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

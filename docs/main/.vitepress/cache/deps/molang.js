import "./chunk-PZ5AY32C.js";

// node_modules/molang/dist/molang.esm.js
var e = { "!": "BANG", "&": "AND", "(": "LEFT_PARENT", ")": "RIGHT_PARENT", "*": "ASTERISK", "+": "PLUS", ",": "COMMA", "-": "MINUS", "/": "SLASH", ":": "COLON", ";": "SEMICOLON", "<": "SMALLER", "=": "EQUALS", ">": "GREATER", "?": "QUESTION", "[": "ARRAY_LEFT", "]": "ARRAY_RIGHT", "{": "CURLY_LEFT", "|": "OR", "}": "CURLY_RIGHT" };
var t = /* @__PURE__ */ new Set(["return", "continue", "break", "for_each", "loop", "false", "true"]);
var s = class {
  constructor(e2, t2, s2, r2) {
    this.type = e2, this.text = t2, this.startColumn = s2, this.startLine = r2;
  }
  getType() {
    return this.type;
  }
  getText() {
    return this.text;
  }
  getPosition() {
    return { startColumn: this.startColumn, startLineNumber: this.startLine, endColumn: this.startColumn + this.text.length, endLineNumber: this.startLine };
  }
};
var r = class {
  constructor(e2) {
    this.i = 0, this.currentColumn = 0, this.currentLine = 0, this.lastColumns = 0, this.keywordTokens = e2 ? /* @__PURE__ */ new Set([...t, ...e2]) : t;
  }
  init(e2) {
    this.currentLine = 0, this.currentColumn = 0, this.lastColumns = 0, this.i = 0, this.expression = e2;
  }
  next() {
    for (this.currentColumn = this.i - this.lastColumns; this.i < this.expression.length && (" " === this.expression[this.i] || "	" === this.expression[this.i] || "\n" === this.expression[this.i]); ) "\n" === this.expression[this.i] && (this.currentLine++, this.currentColumn = 0, this.lastColumns = this.i + 1), this.i++;
    if ("#" === this.expression[this.i]) {
      const e2 = this.expression.indexOf("\n", this.i + 1);
      return this.i = -1 === e2 ? this.expression.length : e2, this.currentLine++, this.lastColumns = this.i + 1, this.currentColumn = 0, this.next();
    }
    let t2 = e[this.expression[this.i]];
    if (t2) return new s(t2, this.expression[this.i++], this.currentColumn, this.currentLine);
    if (this.isLetter(this.expression[this.i]) || "_" === this.expression[this.i]) {
      let e2 = this.i + 1;
      for (; e2 < this.expression.length && (this.isLetter(this.expression[e2]) || this.isNumber(this.expression[e2]) || "_" === this.expression[e2] || "." === this.expression[e2]); ) e2++;
      const t3 = this.expression.substring(this.i, e2).toLowerCase();
      return this.i = e2, new s(this.keywordTokens.has(t3) ? t3.toUpperCase() : "NAME", t3, this.currentColumn, this.currentLine);
    }
    if (this.isNumber(this.expression[this.i]) || "." === this.expression[this.i]) {
      let e2 = this.i + 1, t3 = "." === this.expression[this.i];
      for (; e2 < this.expression.length && (this.isNumber(this.expression[e2]) || "." === this.expression[e2] && !t3); ) "." === this.expression[e2] && (t3 = true), e2++;
      const r2 = new s("NUMBER", this.expression.substring(this.i, e2), this.currentColumn, this.currentLine), i2 = t3 && "f" === this.expression[e2];
      return this.i = i2 ? e2 + 1 : e2, r2;
    }
    if ("'" === this.expression[this.i]) {
      let e2 = this.i + 1;
      for (; e2 < this.expression.length && "'" !== this.expression[e2]; ) e2++;
      e2++;
      const t3 = new s("STRING", this.expression.substring(this.i, e2), this.currentColumn, this.currentLine);
      return this.i = e2, t3;
    }
    return this.hasNext() ? (this.i++, this.next()) : new s("EOF", "", this.currentColumn, this.currentLine);
  }
  hasNext() {
    return this.i < this.expression.length;
  }
  isLetter(e2) {
    return e2 >= "a" && e2 <= "z" || e2 >= "A" && e2 <= "Z";
  }
  isNumber(e2) {
    return e2 >= "0" && e2 <= "9";
  }
};
var i = (e2, t2, s2) => "number" != typeof e2 || Number.isNaN(e2) ? t2 : e2 > s2 ? s2 : e2 < t2 ? t2 : e2;
var n = (e2, t2, s2) => {
  let r2 = 0;
  for (; 0 < e2; ) r2 += p(t2, s2);
  return r2;
};
var o = (e2, t2, s2) => {
  let r2 = 0;
  for (; 0 < e2; ) r2 += l(t2, s2);
  return r2;
};
var a = (e2) => 3 * e2 ** 2 - 2 * e2 ** 3;
var h = (e2, t2, s2) => (s2 < 0 ? s2 = 0 : s2 > 1 && (s2 = 1), e2 + (t2 - e2) * s2);
var c = (e2, t2, s2) => {
  const r2 = (e3) => ((e3 + 180) % 360 + 180) % 360;
  if ((e2 = r2(e2)) > (t2 = r2(t2))) {
    let s3 = e2;
    e2 = t2, t2 = s3;
  }
  return t2 - e2 > 180 ? r2(t2 + s2 * (360 - (t2 - e2))) : e2 + s2 * (t2 - e2);
};
var u = (e2, t2) => e2 % t2;
var p = (e2, t2) => e2 + Math.random() * (t2 - e2);
var l = (e2, t2) => Math.round(e2 + Math.random() * (t2 - e2));
var x = (e2) => ((e2 = ((e2 %= 360) + 360) % 360) > 179 && (e2 -= 360), e2);
var E = (e2) => {
  const t2 = e2 ? 1 : Math.PI / 180;
  return { "math.abs": Math.abs, "math.acos": (e3) => Math.acos(e3) / t2, "math.asin": (e3) => Math.asin(e3) / t2, "math.atan": (e3) => Math.atan(e3) / t2, "math.atan2": (e3, s2) => Math.atan2(e3, s2) / t2, "math.ceil": Math.ceil, "math.clamp": i, "math.cos": (e3) => Math.cos(e3 * t2), "math.die_roll": n, "math.die_roll_integer": o, "math.exp": Math.exp, "math.floor": Math.floor, "math.hermite_blend": a, "math.lerp": h, "math.lerp_rotate": c, "math.ln": Math.log, "math.max": Math.max, "math.min": Math.min, "math.min_angle": x, "math.mod": u, "math.pi": Math.PI, "math.pow": Math.pow, "math.random": p, "math.random_integer": l, "math.round": Math.round, "math.sin": (e3) => Math.sin(e3 * t2), "math.sqrt": Math.sqrt, "math.trunc": Math.trunc };
};
var f = { "query.in_range": (e2, t2, s2) => "number" != typeof e2 || "number" != typeof t2 || "number" != typeof s2 ? (console.error('"query.in_range": value, min and max must be numbers'), false) : e2 >= t2 && e2 <= s2, "query.all": (e2, ...t2) => t2.every((t3) => t3 === e2), "query.any": (e2, ...t2) => t2.some((t3) => t3 === e2), "query.count": (e2) => Array.isArray(e2) ? e2.length : 1 };
var g = (e2) => ({ ...E(e2), ...f });
var m = class {
  constructor(e2, t2) {
    if (this.config = t2, !e2) throw new Error("Provided environment must be an object");
    this.env = { ...g(t2.useRadians ?? false), "query.self": () => this.env, ...t2.isFlat ? e2 : this.flattenEnv(e2) };
  }
  updateConfig({ variableHandler: e2, convertUndefined: t2, useRadians: s2 }) {
    void 0 !== t2 && (this.config.convertUndefined = t2), "function" == typeof e2 && (this.config.variableHandler = e2), !!this.config.useRadians != !!s2 && (this.env = Object.assign(this.env, g(!!s2)));
  }
  get() {
    return this.env;
  }
  flattenEnv(e2, t2 = "", s2 = {}) {
    for (let r2 in e2) {
      let i2 = r2;
      if ("." === r2[1]) switch (r2[0]) {
        case "q":
          i2 = "query" + r2.substring(1, r2.length);
          break;
        case "t":
          i2 = "temp" + r2.substring(1, r2.length);
          break;
        case "v":
          i2 = "variable" + r2.substring(1, r2.length);
          break;
        case "c":
          i2 = "context" + r2.substring(1, r2.length);
          break;
        case "f":
          i2 = "function" + r2.substring(1, r2.length);
      }
      e2[r2].__isContext ? s2[`${t2}${i2}`] = e2[r2].env : "object" != typeof e2[r2] || Array.isArray(e2[r2]) ? s2[`${t2}${i2}`] = e2[r2] : this.flattenEnv(e2[r2], `${t2}${r2}.`, s2);
    }
    return s2;
  }
  setAt(e2, t2) {
    if ("." === e2[1]) switch (e2[0]) {
      case "q":
        e2 = "query" + e2.substring(1, e2.length);
        break;
      case "t":
        e2 = "temp" + e2.substring(1, e2.length);
        break;
      case "v":
        e2 = "variable" + e2.substring(1, e2.length);
        break;
      case "c":
        e2 = "context" + e2.substring(1, e2.length);
        break;
      case "f":
        e2 = "function" + e2.substring(1, e2.length);
    }
    return this.env[e2] = t2;
  }
  getFrom(e2) {
    var _a, _b;
    if ("." === e2[1]) switch (e2[0]) {
      case "q":
        e2 = "query" + e2.substring(1, e2.length);
        break;
      case "t":
        e2 = "temp" + e2.substring(1, e2.length);
        break;
      case "v":
        e2 = "variable" + e2.substring(1, e2.length);
        break;
      case "c":
        e2 = "context" + e2.substring(1, e2.length);
        break;
      case "f":
        e2 = "function" + e2.substring(1, e2.length);
    }
    const t2 = this.env[e2] ?? ((_b = (_a = this.config).variableHandler) == null ? void 0 : _b.call(_a, e2, this.env));
    return void 0 === t2 && this.config.convertUndefined ? 0 : t2;
  }
};
var w = class {
  constructor(e2) {
    this.env = e2, this.__isContext = true;
  }
};
var d = class {
  toString() {
    return "" + this.eval();
  }
  walk(e2, t2 = /* @__PURE__ */ new Set()) {
    let s2 = e2(this) ?? this;
    return s2.iterate(e2, t2), s2;
  }
  iterate(e2, t2) {
    for (let s2 = 0; s2 < this.allExpressions.length; s2++) {
      const r2 = this.allExpressions[s2];
      if (t2.has(r2)) continue;
      t2.add(r2);
      const i2 = e2(r2) ?? r2;
      i2 !== r2 && t2.has(i2) || (t2.add(i2), this.setExpressionAt(s2, i2), i2.iterate(e2, t2));
    }
  }
  some(e2) {
    return this.allExpressions.some((t2) => e2(t2) || t2.some(e2));
  }
};
var v = class extends d {
  constructor() {
    super(...arguments), this.type = "VoidExpression";
  }
  get allExpressions() {
    return [];
  }
  setExpressionAt() {
  }
  isStatic() {
    return true;
  }
  eval() {
    return 0;
  }
  toString() {
    return "";
  }
};
var S = class extends d {
  constructor(e2, t2, s2, r2) {
    super(), this.left = e2, this.right = t2, this.operator = s2, this.evalHelper = r2, this.type = "GenericOperatorExpression";
  }
  get allExpressions() {
    return [this.left, this.right];
  }
  setExpressionAt(e2, t2) {
    0 === e2 ? this.left = t2 : 1 === e2 && (this.right = t2);
  }
  isStatic() {
    return this.left.isStatic() && this.right.isStatic();
  }
  eval() {
    return this.evalHelper(this.left, this.right);
  }
  toString() {
    return `${this.left.toString()}${this.operator}${this.right.toString()}`;
  }
};
var R = (e2, t2) => {
  const s2 = e2.eval(), r2 = t2.eval();
  if ("number" != typeof s2 && "boolean" != typeof s2 || "number" != typeof r2 && "boolean" != typeof r2) throw new Error(`Cannot use numeric operators for expression "${s2} + ${r2}"`);
  return s2 + r2;
};
var A = (e2, t2) => {
  const s2 = e2.eval(), r2 = t2.eval();
  if ("number" != typeof s2 && "boolean" != typeof s2 || "number" != typeof r2 && "boolean" != typeof r2) throw new Error(`Cannot use numeric operators for expression "${s2} - ${r2}"`);
  return s2 - r2;
};
var y = (e2, t2) => {
  const s2 = e2.eval(), r2 = t2.eval();
  if ("number" != typeof s2 && "boolean" != typeof s2 || "number" != typeof r2 && "boolean" != typeof r2) throw new Error(`Cannot use numeric operators for expression "${s2} / ${r2}"`);
  return s2 / r2;
};
var C = (e2, t2) => {
  const s2 = e2.eval(), r2 = t2.eval();
  if ("number" != typeof s2 && "boolean" != typeof s2 || "number" != typeof r2 && "boolean" != typeof r2) throw new Error(`Cannot use numeric operators for expression "${s2} * ${r2}"`);
  return s2 * r2;
};
var T = (e2, t2) => {
  if (e2.setPointer) return e2.setPointer(t2.eval()), 0;
  throw Error("Cannot assign to " + e2.type);
};
var N = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2, s2) {
    const r2 = e2.parseExpression(this.precedence), i2 = s2.getText();
    switch (i2) {
      case "+":
        return new S(t2, r2, i2, R);
      case "-":
        return new S(t2, r2, i2, A);
      case "*":
        return new S(t2, r2, i2, C);
      case "/":
        return new S(t2, r2, i2, y);
      case "=":
        return new S(t2, r2, "=", T);
      default:
        throw new Error("Operator not implemented");
    }
  }
};
var k;
!function(e2) {
  e2[e2.SCOPE = 1] = "SCOPE", e2[e2.STATEMENT = 2] = "STATEMENT", e2[e2.ASSIGNMENT = 3] = "ASSIGNMENT", e2[e2.CONDITIONAL = 4] = "CONDITIONAL", e2[e2.ARRAY_ACCESS = 5] = "ARRAY_ACCESS", e2[e2.NULLISH_COALESCING = 6] = "NULLISH_COALESCING", e2[e2.AND = 7] = "AND", e2[e2.OR = 8] = "OR", e2[e2.EQUALS_COMPARE = 9] = "EQUALS_COMPARE", e2[e2.COMPARE = 10] = "COMPARE", e2[e2.SUM = 11] = "SUM", e2[e2.PRODUCT = 12] = "PRODUCT", e2[e2.EXPONENT = 13] = "EXPONENT", e2[e2.PREFIX = 14] = "PREFIX", e2[e2.POSTFIX = 15] = "POSTFIX", e2[e2.FUNCTION = 16] = "FUNCTION";
}(k || (k = {}));
var b = class extends d {
  constructor(e2, t2) {
    super(), this.tokenType = e2, this.expression = t2, this.type = "PrefixExpression";
  }
  get allExpressions() {
    return [this.expression];
  }
  setExpressionAt(e2, t2) {
    this.expression = t2;
  }
  isStatic() {
    return this.expression.isStatic();
  }
  eval() {
    const e2 = this.expression.eval();
    if ("number" != typeof e2) throw new Error(`Cannot use "${this.tokenType}" operator in front of ${typeof e2} "${e2}"`);
    switch (this.tokenType) {
      case "MINUS":
        return -e2;
      case "BANG":
        return !e2;
    }
  }
  toString() {
    switch (this.tokenType) {
      case "MINUS":
        return "-" + this.expression.toString();
      case "BANG":
        return "!" + this.expression.toString();
    }
    throw new Error(`Unknown prefix operator: "${this.tokenType}"`);
  }
};
var P = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2) {
    return new b(t2.getType(), e2.parseExpression(this.precedence));
  }
};
var I = class extends d {
  constructor(e2) {
    super(), this.value = e2, this.type = "NumberExpression";
  }
  get allExpressions() {
    return [];
  }
  setExpressionAt() {
  }
  isStatic() {
    return true;
  }
  eval() {
    return this.value;
  }
  toString() {
    const e2 = "" + this.value;
    return e2.startsWith("0.") ? e2.slice(1) : e2;
  }
};
var L = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2) {
    return new I(Number(t2.getText()));
  }
};
var O = class extends d {
  constructor(e2, t2, s2 = false) {
    super(), this.executionEnv = e2, this.name = t2, this.isFunctionCall = s2, this.type = "NameExpression";
  }
  get allExpressions() {
    return [];
  }
  setExpressionAt() {
  }
  isStatic() {
    return false;
  }
  setPointer(e2) {
    this.executionEnv.setAt(this.name, e2);
  }
  setFunctionCall(e2 = true) {
    this.isFunctionCall = e2;
  }
  setName(e2) {
    this.name = e2;
  }
  setExecutionEnv(e2) {
    this.executionEnv = e2;
  }
  eval() {
    const e2 = this.executionEnv.getFrom(this.name);
    return this.isFunctionCall || "function" != typeof e2 ? e2 : e2();
  }
  toString() {
    return this.name;
  }
};
var M = class extends d {
  constructor(e2, t2) {
    super(), this.leftExpr = e2, this.rightExpr = t2, this.type = "NameExpression";
  }
  get allExpressions() {
    return [this.leftExpr, this.rightExpr];
  }
  setExpressionAt(e2, t2) {
    if (!(t2 instanceof O)) throw new Error('Cannot use context switch operator "->" on ' + t2.type);
    0 === e2 ? this.leftExpr = t2 : 1 === e2 && (this.rightExpr = t2);
  }
  isStatic() {
    return false;
  }
  eval() {
    const e2 = this.leftExpr.eval();
    return "object" != typeof e2 ? 0 : (this.rightExpr.setExecutionEnv(new m(e2, this.rightExpr.executionEnv.config)), this.rightExpr.eval());
  }
  toString() {
    return `${this.leftExpr.toString()}->${this.rightExpr.toString()}`;
  }
};
var _ = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2) {
    const s2 = new O(e2.executionEnv, t2.getText()), r2 = [e2.lookAhead(0), e2.lookAhead(1)];
    if ("MINUS" === r2[0].getType() && "GREATER" === r2[1].getType()) {
      e2.consume("MINUS"), e2.consume("GREATER");
      const t3 = e2.parseExpression(k.FUNCTION - 1);
      if ("NameExpression" !== t3.type && "FunctionExpression" !== t3.type) throw new Error('Cannot use context switch operator "->" on ' + t3.type);
      return new M(s2, t3);
    }
    return s2;
  }
};
var U = class extends d {
  constructor(e2, t2) {
    super(), this.expression = e2, this.brackets = t2, this.type = "GroupExpression";
  }
  get allExpressions() {
    return [this.expression];
  }
  setExpressionAt(e2, t2) {
    this.expression = t2;
  }
  isStatic() {
    return this.expression.isStatic();
  }
  get isReturn() {
    return this.expression.isReturn;
  }
  get isBreak() {
    return this.expression.isBreak;
  }
  get isContinue() {
    return this.expression.isContinue;
  }
  eval() {
    return this.expression.eval();
  }
  toString() {
    return `${this.brackets[0]}${this.expression.toString()}${this.brackets[1]}`;
  }
};
var $ = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2) {
    const s2 = e2.parseExpression(this.precedence);
    return e2.consume("RIGHT_PARENT"), e2.config.keepGroups ? new U(s2, "()") : s2;
  }
};
var F = class extends d {
  constructor(e2) {
    super(), this.expression = e2, this.type = "ReturnExpression", this.isReturn = true;
  }
  get allExpressions() {
    return [this.expression];
  }
  setExpressionAt(e2, t2) {
    this.expression = t2;
  }
  isStatic() {
    return false;
  }
  eval() {
    return this.expression.eval();
  }
  toString() {
    return "return " + this.expression.toString();
  }
};
var G = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2) {
    const s2 = e2.parseExpression(k.STATEMENT + 1);
    return new F(e2.match("SEMICOLON", false) ? s2 : new I(0));
  }
};
var B = class extends d {
  constructor(e2, t2 = false) {
    super(), this.value = e2, this.isReturn = t2, this.type = "StaticExpression";
  }
  get allExpressions() {
    return [];
  }
  setExpressionAt() {
  }
  isStatic() {
    return true;
  }
  eval() {
    return this.value;
  }
  toString() {
    let e2 = this.value;
    return "string" == typeof e2 && (e2 = `'${e2}'`), this.isReturn ? "return " + e2 : "" + e2;
  }
};
var z = class extends d {
  constructor(e2) {
    super(), this.expressions = e2, this.type = "StatementExpression", this.didReturn = void 0, this.wasLoopBroken = false, this.wasLoopContinued = false;
  }
  get allExpressions() {
    return this.expressions;
  }
  setExpressionAt(e2, t2) {
    this.expressions[e2] = t2;
  }
  get isReturn() {
    if (void 0 !== this.didReturn) return this.didReturn;
    let e2 = 0;
    for (; e2 < this.expressions.length; ) {
      const t2 = this.expressions[e2];
      if (t2.isBreak) return false;
      if (t2.isContinue) return false;
      if (t2.isReturn) return this.didReturn = true, true;
      e2++;
    }
    return this.didReturn = false, false;
  }
  get isBreak() {
    return !!this.wasLoopBroken && (this.wasLoopBroken = false, true);
  }
  get isContinue() {
    return !!this.wasLoopContinued && (this.wasLoopContinued = false, true);
  }
  isStatic() {
    let e2 = 0;
    for (; e2 < this.expressions.length; ) {
      if (!this.expressions[e2].isStatic()) return false;
      e2++;
    }
    return true;
  }
  eval() {
    this.didReturn = false, this.wasLoopBroken = false, this.wasLoopContinued = false;
    let e2 = 0;
    for (; e2 < this.expressions.length; ) {
      let t2 = this.expressions[e2].eval();
      if (this.expressions[e2].isReturn) return this.didReturn = true, t2;
      if (this.expressions[e2].isContinue) return void (this.wasLoopContinued = true);
      if (this.expressions[e2].isBreak) return void (this.wasLoopBroken = true);
      e2++;
    }
    return 0;
  }
  toString() {
    let e2 = "";
    for (const t2 of this.expressions) {
      if (t2 instanceof v || t2 instanceof B && !t2.isReturn) continue;
      const s2 = t2.toString();
      s2 && (e2 += s2 + ";");
    }
    return e2;
  }
};
var H = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  findReEntryPoint(e2) {
    let t2 = 1, s2 = e2.lookAhead(0).getType();
    for (; "EOF" !== s2 && ("CURLY_RIGHT" == s2 ? t2-- : "CURLY_LEFT" === s2 && t2++, 0 !== t2); ) e2.consume(), s2 = e2.lookAhead(0).getType();
  }
  parse(e2, t2, s2) {
    if (e2.config.useOptimizer && (t2.isStatic() && (t2 = new B(t2.eval(), t2.isReturn)), e2.config.earlyReturnsSkipParsing && t2.isReturn)) return e2.config.earlyReturnsSkipTokenization || this.findReEntryPoint(e2), new z([t2]);
    const r2 = [t2];
    if (!e2.match("CURLY_RIGHT", false)) do {
      let t3 = e2.parseExpression(this.precedence);
      if (e2.config.useOptimizer) {
        if (t3.isStatic()) {
          if (e2.config.useAgressiveStaticOptimizer && !t3.isReturn) continue;
          t3 = new B(t3.eval(), t3.isReturn);
        }
        if (e2.config.earlyReturnsSkipParsing && (t3.isBreak || t3.isContinue || t3.isReturn)) return r2.push(t3), e2.config.earlyReturnsSkipTokenization || this.findReEntryPoint(e2), new z(r2);
      }
      r2.push(t3);
    } while (e2.match("SEMICOLON") && !e2.match("EOF") && !e2.match("CURLY_RIGHT", false));
    e2.match("SEMICOLON");
    return new z(r2);
  }
};
var q = class extends d {
  constructor(e2) {
    super(), this.name = e2, this.type = "StringExpression";
  }
  get allExpressions() {
    return [];
  }
  setExpressionAt() {
  }
  isStatic() {
    return true;
  }
  eval() {
    return this.name.substring(1, this.name.length - 1);
  }
  toString() {
    return this.name;
  }
};
var Y = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2) {
    return new q(t2.getText());
  }
};
var D = class extends d {
  constructor(e2, t2) {
    super(), this.name = e2, this.args = t2, this.type = "FunctionExpression";
  }
  get allExpressions() {
    return [this.name, ...this.args];
  }
  setExpressionAt(e2, t2) {
    0 === e2 ? this.name = t2 : e2 > 0 && (this.args[e2 - 1] = t2);
  }
  setExecutionEnv(e2) {
    this.name.setExecutionEnv(e2);
  }
  get executionEnv() {
    return this.name.executionEnv;
  }
  isStatic() {
    return false;
  }
  eval() {
    const e2 = [];
    let t2 = 0;
    for (; t2 < this.args.length; ) e2.push(this.args[t2++].eval());
    const s2 = this.name.eval();
    if ("function" != typeof s2) throw new Error(this.name.toString() + " is not callable!");
    return s2(...e2);
  }
  toString() {
    let e2 = this.name.toString() + "(";
    for (let t2 = 0; t2 < this.args.length; t2++) e2 += `${this.args[t2].toString()}${t2 + 1 < this.args.length ? "," : ""}`;
    return e2 + ")";
  }
};
var Q = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2, s2) {
    const r2 = [];
    if (!t2.setFunctionCall) throw new Error(t2.type + " is not callable!");
    if (t2.setFunctionCall(true), !e2.match("RIGHT_PARENT")) {
      do {
        r2.push(e2.parseExpression());
      } while (e2.match("COMMA"));
      e2.consume("RIGHT_PARENT");
    }
    return new D(t2, r2);
  }
};
var X = class extends d {
  constructor(e2, t2) {
    super(), this.name = e2, this.lookup = t2, this.type = "ArrayAccessExpression";
  }
  get allExpressions() {
    return [this.name, this.lookup];
  }
  setExpressionAt(e2, t2) {
    0 === e2 ? this.name = t2 : 1 === e2 && (this.lookup = t2);
  }
  isStatic() {
    return false;
  }
  setPointer(e2) {
    this.name.eval()[this.lookup.eval()] = e2;
  }
  eval() {
    return this.name.eval()[this.lookup.eval()];
  }
  toString() {
    return `${this.name.toString()}[${this.lookup.toString()}]`;
  }
};
var j = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2, s2) {
    const r2 = e2.parseExpression(this.precedence - 1);
    if (!t2.setPointer) throw new Error(`"${t2.type}" is not an array`);
    if (!e2.match("ARRAY_RIGHT")) throw new Error(`No closing bracket for opening bracket "[${r2.eval()}"`);
    return new X(t2, r2);
  }
};
var W = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2) {
    let s2 = e2.parseExpression(this.precedence);
    return e2.config.useOptimizer && e2.config.earlyReturnsSkipTokenization && s2.isReturn ? e2.match("CURLY_RIGHT") : e2.consume("CURLY_RIGHT"), e2.config.keepGroups ? new U(s2, "{}") : s2;
  }
};
var K = class extends d {
  constructor(e2, t2) {
    super(), this.count = e2, this.expression = t2, this.type = "LoopExpression";
  }
  get allExpressions() {
    return [this.count, this.expression];
  }
  get isNoopLoop() {
    return this.count.isStatic() && 0 === this.count.eval();
  }
  setExpressionAt(e2, t2) {
    0 === e2 ? this.count = t2 : 1 === e2 && (this.expression = t2);
  }
  get isReturn() {
    return !this.isNoopLoop && this.expression.isReturn;
  }
  isStatic() {
    return this.count.isStatic() && this.expression.isStatic();
  }
  eval() {
    const e2 = Number(this.count.eval());
    if (0 === e2) return 0;
    if (Number.isNaN(e2)) throw new Error(`First loop() argument must be of type number, received "${typeof this.count.eval()}"`);
    if (e2 > 1024) throw new Error(`Cannot loop more than 1024x times, received "${e2}"`);
    let t2 = 0;
    for (; t2 < e2; ) {
      t2++;
      const e3 = this.expression.eval();
      if (this.expression.isBreak) break;
      if (!this.expression.isContinue && this.expression.isReturn) return e3;
    }
    return 0;
  }
  toString() {
    return this.isNoopLoop ? "" : `loop(${this.count.toString()},${this.expression.toString()})`;
  }
};
var V = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2) {
    e2.consume("LEFT_PARENT");
    const s2 = [];
    if (e2.match("RIGHT_PARENT")) throw new Error("loop() called without arguments");
    do {
      s2.push(e2.parseExpression());
    } while (e2.match("COMMA"));
    if (e2.consume("RIGHT_PARENT"), 2 !== s2.length) throw new Error("There must be exactly two loop() arguments; found " + s2.length);
    return new K(s2[0], s2[1]);
  }
};
var Z = class extends d {
  constructor(e2, t2, s2) {
    if (super(), this.variable = e2, this.arrayExpression = t2, this.expression = s2, this.type = "ForEachExpression", !this.variable.setPointer) throw new Error(`First for_each() argument must be a variable, received "${typeof this.variable.eval()}"`);
  }
  get isReturn() {
    return this.expression.isReturn;
  }
  get allExpressions() {
    return [this.variable, this.arrayExpression, this.expression];
  }
  setExpressionAt(e2, t2) {
    0 === e2 ? this.variable = t2 : 1 === e2 ? this.arrayExpression = t2 : 2 === e2 && (this.expression = t2);
  }
  isStatic() {
    return this.variable.isStatic() && this.arrayExpression.isStatic() && this.expression.isStatic();
  }
  eval() {
    var _a, _b;
    const e2 = this.arrayExpression.eval();
    if (!Array.isArray(e2)) throw new Error(`Second for_each() argument must be an array, received "${typeof e2}"`);
    let t2 = 0;
    for (; t2 < e2.length; ) {
      (_b = (_a = this.variable).setPointer) == null ? void 0 : _b.call(_a, e2[t2++]);
      const s2 = this.expression.eval();
      if (this.expression.isBreak) break;
      if (!this.expression.isContinue && this.expression.isReturn) return s2;
    }
    return 0;
  }
  toString() {
    return `for_each(${this.variable.toString()},${this.arrayExpression.toString()},${this.expression.toString()})`;
  }
};
var J = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2) {
    e2.consume("LEFT_PARENT");
    const s2 = [];
    if (e2.match("RIGHT_PARENT")) throw new Error("for_each() called without arguments");
    do {
      s2.push(e2.parseExpression());
    } while (e2.match("COMMA"));
    if (e2.consume("RIGHT_PARENT"), 3 !== s2.length) throw new Error("There must be exactly three for_each() arguments; found " + s2.length);
    return new Z(s2[0], s2[1], s2[2]);
  }
};
var ee = class extends d {
  constructor() {
    super(), this.type = "ContinueExpression", this.isContinue = true;
  }
  get allExpressions() {
    return [];
  }
  setExpressionAt() {
  }
  isStatic() {
    return false;
  }
  eval() {
    return 0;
  }
  toString() {
    return "continue";
  }
};
var te = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2) {
    return new ee();
  }
};
var se = class extends d {
  constructor() {
    super(), this.type = "BreakExpression", this.isBreak = true;
  }
  get allExpressions() {
    return [];
  }
  setExpressionAt() {
  }
  isStatic() {
    return false;
  }
  eval() {
    return 0;
  }
  isString() {
    return "break";
  }
};
var re = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2) {
    return new se();
  }
};
var ie = class extends d {
  constructor(e2) {
    super(), this.value = e2, this.type = "BooleanExpression";
  }
  get allExpressions() {
    return [];
  }
  setExpressionAt() {
  }
  isStatic() {
    return true;
  }
  eval() {
    return this.value;
  }
};
var ne = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2) {
    return new ie("true" === t2.getText());
  }
};
var oe = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2, s2) {
    return new S(t2, e2.parseExpression(this.precedence), "==", (e3, t3) => e3.eval() === t3.eval());
  }
};
var ae = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2, s2) {
    if (e2.match("EQUALS")) return new S(t2, e2.parseExpression(this.precedence), "!=", (e3, t3) => e3.eval() !== t3.eval());
    throw new Error("! was used as a binary operator");
  }
};
var he = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2, s2) {
    if (e2.match("AND")) return new S(t2, e2.parseExpression(this.precedence), "&&", (e3, t3) => e3.eval() && t3.eval());
    throw new Error('"&" not followed by another "&"');
  }
};
var ce = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2, s2) {
    if (e2.match("OR")) return new S(t2, e2.parseExpression(this.precedence), "||", (e3, t3) => e3.eval() || t3.eval());
    throw new Error('"|" not followed by another "|"');
  }
};
var ue = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2, s2) {
    return e2.match("EQUALS") ? new S(t2, e2.parseExpression(this.precedence), "<=", (e3, t3) => e3.eval() <= t3.eval()) : new S(t2, e2.parseExpression(this.precedence), "<", (e3, t3) => e3.eval() < t3.eval());
  }
};
var pe = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2, s2) {
    return e2.match("EQUALS") ? new S(t2, e2.parseExpression(this.precedence), ">=", (e3, t3) => e3.eval() >= t3.eval()) : new S(t2, e2.parseExpression(this.precedence), ">", (e3, t3) => e3.eval() > t3.eval());
  }
};
var le = class extends d {
  constructor(e2, t2, s2) {
    super(), this.leftExpression = e2, this.thenExpression = t2, this.elseExpression = s2, this.type = "TernaryExpression";
  }
  get allExpressions() {
    return this.leftExpression.isStatic() ? [this.leftExpression, this.leftExpression.eval() ? this.thenExpression : this.elseExpression] : [this.leftExpression, this.thenExpression, this.elseExpression];
  }
  setExpressionAt(e2, t2) {
    0 === e2 ? this.leftExpression = t2 : 1 === e2 ? this.thenExpression = t2 : 2 === e2 && (this.elseExpression = t2);
  }
  get isReturn() {
    return void 0 === this.leftResult ? this.thenExpression.isReturn && this.elseExpression.isReturn : this.leftResult ? this.thenExpression.isReturn : this.elseExpression.isReturn;
  }
  get hasReturn() {
    return this.thenExpression.isReturn || this.elseExpression.isReturn;
  }
  get isContinue() {
    return void 0 === this.leftResult ? this.thenExpression.isContinue && this.elseExpression.isContinue : this.leftResult ? this.thenExpression.isContinue : this.elseExpression.isContinue;
  }
  get isBreak() {
    return void 0 === this.leftResult ? this.thenExpression.isBreak && this.elseExpression.isBreak : this.leftResult ? this.thenExpression.isBreak : this.elseExpression.isBreak;
  }
  isStatic() {
    return this.leftExpression.isStatic() && this.thenExpression.isStatic() && this.elseExpression.isStatic();
  }
  eval() {
    return this.leftResult = this.leftExpression.eval(), this.leftResult ? this.thenExpression.eval() : this.elseExpression.eval();
  }
  toString() {
    return this.elseExpression instanceof v ? `${this.leftExpression.toString()}?${this.thenExpression.toString()}` : `${this.leftExpression.toString()}?${this.thenExpression.toString()}:${this.elseExpression.toString()}`;
  }
};
var xe = new class {
  constructor(e2 = 0) {
    this.precedence = e2, this.exprName = "Ternary";
  }
  parse(e2, t2, s2) {
    let r2, i2 = e2.parseExpression(this.precedence - 1);
    return r2 = e2.match("COLON") ? e2.parseExpression(this.precedence - 1) : new v(), e2.config.useOptimizer && t2.isStatic() ? t2.eval() ? i2 : r2 : new le(t2, i2, r2);
  }
}(k.CONDITIONAL);
var Ee = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2, s2) {
    return e2.match("QUESTION") ? new S(t2, e2.parseExpression(this.precedence), "??", (e3, t3) => e3.eval() ?? t3.eval()) : xe.parse(e2, t2, s2);
  }
};
var fe = class extends class {
  constructor(e2) {
    this.config = e2, this.prefixParselets = /* @__PURE__ */ new Map(), this.infixParselets = /* @__PURE__ */ new Map(), this.readTokens = [], this.tokenIterator = new r();
  }
  updateConfig(e2) {
    this.config = e2;
  }
  init(e2) {
    this.tokenIterator.init(e2), this.readTokens = [];
  }
  setTokenizer(e2) {
    this.tokenIterator = e2;
  }
  setExecutionEnvironment(e2) {
    this.executionEnv = e2;
  }
  parseExpression(e2 = 0) {
    let t2 = this.consume();
    if ("EOF" === t2.getType()) return new v();
    const s2 = this.prefixParselets.get(t2.getType());
    if (!s2) throw new Error(`Cannot parse ${t2.getType()} expression "${t2.getType()}"`);
    let r2 = s2.parse(this, t2);
    return this.parseInfixExpression(r2, e2);
  }
  parseInfixExpression(e2, t2 = 0) {
    let s2;
    for (; this.getPrecedence() > t2; ) {
      s2 = this.consume();
      let t3 = s2.getType();
      "EQUALS" !== t3 || this.match("EQUALS") || (t3 = "ASSIGN");
      const r2 = this.infixParselets.get(t3);
      if (!r2) throw new Error(`Unknown infix parselet: "${t3}"`);
      e2 = r2.parse(this, e2, s2);
    }
    return e2;
  }
  getPrecedence() {
    const e2 = this.infixParselets.get(this.lookAhead(0).getType());
    return (e2 == null ? void 0 : e2.precedence) ?? 0;
  }
  consume(e2) {
    const t2 = this.lookAhead(0);
    if (e2 && t2.getType() !== e2) throw new Error(`Expected token "${e2}" and found "${t2.getType()}"`);
    return this.readTokens.shift(), t2;
  }
  match(e2, t2 = true) {
    return this.lookAhead(0).getType() === e2 && (t2 && this.consume(), true);
  }
  lookAhead(e2) {
    for (; e2 >= this.readTokens.length; ) this.readTokens.push(this.tokenIterator.next());
    return this.readTokens[e2];
  }
  registerInfix(e2, t2) {
    this.infixParselets.set(e2, t2);
  }
  registerPrefix(e2, t2) {
    this.prefixParselets.set(e2, t2);
  }
  getInfix(e2) {
    return this.infixParselets.get(e2);
  }
  getPrefix(e2) {
    return this.prefixParselets.get(e2);
  }
} {
  constructor(e2) {
    super(e2), this.registerPrefix("NAME", new _()), this.registerPrefix("STRING", new Y()), this.registerPrefix("NUMBER", new L()), this.registerPrefix("TRUE", new ne(k.PREFIX)), this.registerPrefix("FALSE", new ne(k.PREFIX)), this.registerPrefix("RETURN", new G()), this.registerPrefix("CONTINUE", new te()), this.registerPrefix("BREAK", new re()), this.registerPrefix("LOOP", new V()), this.registerPrefix("FOR_EACH", new J()), this.registerInfix("QUESTION", new Ee(k.CONDITIONAL)), this.registerPrefix("LEFT_PARENT", new $()), this.registerInfix("LEFT_PARENT", new Q(k.FUNCTION)), this.registerInfix("ARRAY_LEFT", new j(k.ARRAY_ACCESS)), this.registerPrefix("CURLY_LEFT", new W(k.SCOPE)), this.registerInfix("SEMICOLON", new H(k.STATEMENT)), this.registerPrefix("MINUS", new P(k.PREFIX)), this.registerPrefix("BANG", new P(k.PREFIX)), this.registerInfix("PLUS", new N(k.SUM)), this.registerInfix("MINUS", new N(k.SUM)), this.registerInfix("ASTERISK", new N(k.PRODUCT)), this.registerInfix("SLASH", new N(k.PRODUCT)), this.registerInfix("EQUALS", new oe(k.EQUALS_COMPARE)), this.registerInfix("BANG", new ae(k.EQUALS_COMPARE)), this.registerInfix("GREATER", new pe(k.COMPARE)), this.registerInfix("SMALLER", new ue(k.COMPARE)), this.registerInfix("AND", new he(k.AND)), this.registerInfix("OR", new ce(k.OR)), this.registerInfix("ASSIGN", new N(k.ASSIGNMENT));
  }
};
var ge = class {
  constructor(e2 = 0) {
    this.precedence = e2;
  }
  parse(e2, t2) {
    if (e2.consume("LEFT_PARENT"), e2.match("RIGHT_PARENT")) throw new Error("function() called without arguments");
    let s2, r2, i2 = [];
    do {
      const t3 = e2.parseExpression();
      if (t3 instanceof q) r2 ? i2.push(t3.eval()) : r2 = t3.eval();
      else {
        if (!(t3 instanceof z || t3 instanceof U)) throw new Error(`Unexpected expresion: found "${t3.constructor.name}"`);
        s2 = t3;
      }
    } while (e2.match("COMMA"));
    if (e2.consume("RIGHT_PARENT"), !r2) throw new Error(`Missing function() name (argument 1); found "${r2}"`);
    if (!s2) throw new Error(`Missing function() body (argument ${i2.length + 2})`);
    if ("SEMICOLON" !== e2.lookAhead(0).getType()) throw new Error("Missing semicolon after function expression");
    return new me(e2.functions, r2, i2, s2);
  }
};
var me = class extends d {
  constructor(e2, t2, s2, r2) {
    super(), this.functionBody = r2, this.type = "CustomFunctionExpression", e2.set(t2.toLowerCase(), [s2, r2 instanceof U ? r2.allExpressions[0].toString() : r2.toString()]);
  }
  get allExpressions() {
    return [this.functionBody];
  }
  setExpressionAt(e2, t2) {
    this.functionBody = t2;
  }
  get isReturn() {
    return false;
  }
  isStatic() {
    return true;
  }
  eval() {
    return 0;
  }
};
var we = Object.freeze({ __proto__: null, ArrayAccessExpression: X, BooleanExpression: ie, BreakExpression: se, ContinueExpression: ee, ForEachExpression: Z, FunctionExpression: D, GenericOperatorExpression: S, GroupExpression: U, LoopExpression: K, NameExpression: O, NumberExpression: I, PostfixExpression: class extends d {
  constructor(e2, t2) {
    super(), this.expression = e2, this.tokenType = t2, this.type = "PostfixExpression";
  }
  get allExpressions() {
    return [this.expression];
  }
  setExpressionAt(e2, t2) {
    this.expression = t2;
  }
  isStatic() {
    return this.expression.isStatic();
  }
  eval() {
    this.tokenType;
  }
}, PrefixExpression: b, ReturnExpression: F, StatementExpression: z, StaticExpression: B, StringExpression: q, TernaryExpression: le, VoidExpression: v });
var de = class {
  constructor(e2 = {}, t2 = {}) {
    this.config = t2, this.expressionCache = {}, this.totalCacheEntries = 0, void 0 === t2.useOptimizer && (this.config.useOptimizer = true), void 0 === t2.useCache && (this.config.useCache = true), void 0 === t2.earlyReturnsSkipParsing && (this.config.earlyReturnsSkipParsing = true), void 0 === t2.earlyReturnsSkipTokenization && (this.config.earlyReturnsSkipTokenization = true), void 0 === t2.convertUndefined && (this.config.convertUndefined = false), this.parser = new fe({ ...this.config, tokenizer: void 0 }), this.updateExecutionEnv(e2, t2.assumeFlatEnvironment);
  }
  updateConfig(e2) {
    (e2 = Object.assign(this.config, e2)).tokenizer && this.parser.setTokenizer(e2.tokenizer), this.parser.updateConfig({ ...this.config, tokenizer: void 0 }), this.executionEnvironment.updateConfig(e2);
  }
  updateExecutionEnv(e2, t2 = false) {
    this.executionEnvironment = new m(e2, { useRadians: this.config.useRadians, convertUndefined: this.config.convertUndefined, isFlat: t2, variableHandler: this.config.variableHandler }), this.parser.setExecutionEnvironment(this.executionEnvironment);
  }
  clearCache() {
    this.expressionCache = {}, this.totalCacheEntries = 0;
  }
  execute(e2) {
    this.parser.setExecutionEnvironment(this.executionEnvironment);
    const t2 = this.parse(e2).eval();
    return void 0 === t2 ? 0 : "boolean" == typeof t2 ? Number(t2) : t2;
  }
  executeAndCatch(e2) {
    try {
      return this.execute(e2);
    } catch {
      return 0;
    }
  }
  parse(e2) {
    if (this.config.useCache ?? 1) {
      const t3 = this.expressionCache[e2];
      if (t3) return t3;
    }
    this.parser.init(e2);
    let t2 = this.parser.parseExpression();
    return (this.config.useOptimizer ?? 1) && t2.isStatic() && (t2 = new B(t2.eval())), (this.config.useCache ?? 1) && (this.totalCacheEntries > (this.config.maxCacheSize || 256) && this.clearCache(), this.expressionCache[e2] = t2, this.totalCacheEntries++), t2;
  }
  resolveStatic(e2) {
    return e2 = (e2 = e2.walk((e3) => {
      if (!(e3 instanceof q)) return e3.isStatic() ? new B(e3.eval()) : void 0;
    })).walk((e3) => {
      if (e3 instanceof S) switch (e3.operator) {
        case "+":
        case "-": {
          const t2 = e3.allExpressions.find((e4) => e4.isStatic() && 0 === e4.eval());
          if (t2) return e3.allExpressions.find((e4) => e4 !== t2);
          break;
        }
        case "*":
          if (e3.allExpressions.find((e4) => e4.isStatic() && 0 === e4.eval())) return new B(0);
        case "*":
        case "/": {
          const t2 = e3.allExpressions.find((e4) => e4.isStatic() && 1 === e4.eval());
          if (t2) return e3.allExpressions.find((e4) => e4 !== t2);
          break;
        }
      }
    });
  }
  minimize(e2) {
    e2 = this.resolveStatic(e2);
    const t2 = /* @__PURE__ */ new Map([["query.", "q."], ["variable.", "v."], ["context.", "c."], ["temp.", "t."]]);
    e2 = e2.walk((e3) => {
      if (e3 instanceof O) {
        const s3 = e3.toString();
        for (const [r2, i2] of t2) s3.startsWith(r2) && e3.setName(s3.replace(r2, i2));
        return e3;
      }
    });
    const s2 = /* @__PURE__ */ new Map();
    return e2 = e2.walk((e3) => {
      if (e3 instanceof O) {
        const t3 = e3.toString();
        if (!t3.startsWith("v.") && !t3.startsWith("t.")) return;
        if (s2.has(t3)) e3.setName(s2.get(t3));
        else {
          const r2 = "v.v" + s2.size;
          s2.set(t3, r2), e3.setName(r2);
        }
        return e3;
      }
    });
  }
  getParser() {
    return this.parser;
  }
};
var ve = class extends fe {
  constructor(e2) {
    super(e2), this.functions = /* @__PURE__ */ new Map(), this.classes = /* @__PURE__ */ new Map(), this.registerPrefix("FUNCTION", new ge());
  }
  reset() {
    this.functions.clear();
  }
};
var Se = class {
  constructor(e2) {
    this.parser = new ve({ useCache: false, useOptimizer: true, useAgressiveStaticOptimizer: true, keepGroups: true, earlyReturnsSkipParsing: false, earlyReturnsSkipTokenization: false }), this.parser.setExecutionEnvironment(new m(this.parser, e2)), this.parser.setTokenizer(new r(/* @__PURE__ */ new Set(["function"])));
  }
  get functions() {
    return this.parser.functions;
  }
  parse(e2) {
    this.parser.init(e2.replace(/\"/g, "'"));
    return this.parser.parseExpression();
  }
  transform(e2) {
    const t2 = new de({}, { useCache: false, keepGroups: true, useOptimizer: true, useAgressiveStaticOptimizer: true, earlyReturnsSkipParsing: true, earlyReturnsSkipTokenization: false });
    let s2 = 0, r2 = t2.parse(e2), i2 = false;
    r2 instanceof z && (i2 = true);
    let n2 = false;
    r2 = r2.walk((e3) => {
      if ("FunctionExpression" !== e3.type) return;
      const r3 = e3.name.name.replace(/(f|function)\./g, ""), i3 = e3.args;
      let [o3, a2] = this.functions.get(r3) ?? [];
      if (!a2 || !o3) return;
      a2 = a2.replace(/(a|arg)\.(\w+)/g, (e4, t3, s3) => {
        var _a;
        return (((_a = i3[o3.indexOf(s3)]) == null ? void 0 : _a.toString()) ?? "0").replace(/(t|temp)\./, "outer_temp.");
      });
      let h2 = function(e4) {
        if (e4 instanceof F) return new U(e4.allExpressions[0], "()");
        if (!(e4 instanceof z)) return e4;
        if (e4.allExpressions.length > 1) return e4;
        const t3 = e4.allExpressions[0];
        return t3 instanceof F ? new U(t3.allExpressions[0], "()") : e4;
      }(t2.parse(a2));
      if (h2 instanceof z) {
        const e4 = h2.allExpressions.some((e5) => e5 instanceof F), s3 = e4 || h2.some((e5) => e5 instanceof F);
        h2 = t2.parse(`({${a2}}+${s3 ? e4 ? "t.return_value" : "(t.return_value??0)" : "0"})`), n2 = true;
      }
      const c2 = /* @__PURE__ */ new Map();
      return h2 = h2.walk((e4) => {
        if (e4 instanceof O) {
          let t3 = e4.toString().split(".");
          const r4 = t3.shift(), [i4, ...n3] = t3, o4 = n3.length > 0 ? "." + n3.join(".") : "";
          if ("t" === r4 || "temp" === r4) {
            let t4 = c2.get(i4);
            t4 || (t4 = "t.__scvar" + s2++, c2.set(i4, t4)), e4.setName(`${t4}${o4}`);
          } else "outer_temp" === r4 && e4.setName(`t.${i4}${o4}`);
        } else {
          if (e4 instanceof F) {
            const s3 = new O(t2.getParser().executionEnv, "t.return_value"), r4 = e4.allExpressions[0];
            return new S(s3, r4, "=", () => {
              s3.setPointer(r4.eval());
            });
          }
          if (e4 instanceof z) {
            const t3 = [];
            for (let s3 = 0; s3 < e4.allExpressions.length; s3++) {
              const r4 = e4.allExpressions[s3];
              if (r4 instanceof le && r4.hasReturn) {
                Re(r4, e4.allExpressions.slice(s3 + 1)), t3.push(r4);
                break;
              }
              if (r4.isReturn) {
                t3.push(r4);
                break;
              }
              t3.push(r4);
            }
            return new z(t3);
          }
        }
      }), h2;
    });
    const o2 = t2.parse(r2.toString());
    return t2.resolveStatic(o2), !i2 && n2 ? `return ${o2.toString()};` : o2.toString();
  }
  reset() {
    this.functions.clear();
  }
};
function Re(e2, t2) {
  if (e2.isReturn) return;
  const s2 = e2.allExpressions[2].isReturn ? 1 : 2, r2 = e2.allExpressions[s2];
  r2 instanceof v || (r2 instanceof U && r2.allExpressions[0] instanceof z ? t2.unshift(...r2.allExpressions) : t2.unshift(r2)), t2.length > 0 && e2.setExpressionAt(s2, new U(new z(t2), "{}"));
}
export {
  w as Context,
  Se as CustomMolang,
  de as Molang,
  r as Tokenizer,
  we as expressions
};
//# sourceMappingURL=molang.js.map

export const DataFrame: any;
export namespace Errors {
  function ArgumentTypeError(input: any, expected: any): any;
  namespace ArgumentTypeError {
    function captureStackTrace(p0: any, p1: any): any;
    const stackTraceLimit: number;
  }
  function FileNotFoundError(fileName: any): any;
  namespace FileNotFoundError {
    function captureStackTrace(p0: any, p1: any): any;
    const stackTraceLimit: number;
  }
  function MixedTypeError(...args: any[]): any;
  namespace MixedTypeError {
    function captureStackTrace(p0: any, p1: any): any;
    const stackTraceLimit: number;
  }
  function NoSuchColumnError(column: any, columns: any): any;
  namespace NoSuchColumnError {
    function captureStackTrace(p0: any, p1: any): any;
    const stackTraceLimit: number;
  }
  function SQLParseError(message: any): any;
  namespace SQLParseError {
    function captureStackTrace(p0: any, p1: any): any;
    const stackTraceLimit: number;
  }
  function TableAlreadyExistsError(tableName: any): any;
  namespace TableAlreadyExistsError {
    function captureStackTrace(p0: any, p1: any): any;
    const stackTraceLimit: number;
  }
  function WrongSchemaError(columns: any, expected: any): any;
  namespace WrongSchemaError {
    function captureStackTrace(p0: any, p1: any): any;
    const stackTraceLimit: number;
  }
  function WrongTableNameError(tableName: any): any;
  namespace WrongTableNameError {
    function captureStackTrace(p0: any, p1: any): any;
    const stackTraceLimit: number;
  }
}
export const Row: any;
export default class _default {
  static defaultModules: Function[];
  static fromCSV(pathOrFile: any, ...args: any[]): any;
  static fromDSV(pathOrFile: any, ...args: any[]): any;
  static fromJSON(pathOrFile: any): any;
  static fromPSV(pathOrFile: any, ...args: any[]): any;
  static fromTSV(pathOrFile: any, ...args: any[]): any;
  static fromText(pathOrFile: any, ...args: any[]): any;
  static setDefaultModules(...args: any[]): void;
  constructor(data: any, columns: any, ...args: any[]);
  options: any;
  bisect(percentage: any): any;
  cast(columnName: any, typeFunction: any): any;
  castAll(typeFunctions: any): any;
  chain(...args: any[]): any;
  count(): any;
  countValue(valueToCount: any, ...args: any[]): any;
  diff(dfToDiff: any, columnNames: any): any;
  dim(): any;
  distinct(columnName: any): any;
  drop(columnName: any): any;
  dropDuplicates(...args: any[]): any;
  dropMissingValues(columnNames: any): any;
  fillMissingValues(replacement: any, columnNames: any): any;
  filter(condition: any): any;
  find(condition: any): any;
  fullJoin(dfToJoin: any, columnNames: any): any;
  getRow(index: any): any;
  groupBy(...args: any[]): any;
  head(...args: any[]): any;
  innerJoin(dfToJoin: any, columnNames: any): any;
  join(dfToJoin: any, columnNames: any, ...args: any[]): any;
  leftJoin(dfToJoin: any, columnNames: any): any;
  listColumns(): any;
  map(func: any): any;
  outerJoin(dfToJoin: any, columnNames: any): any;
  push(...args: any[]): any;
  reduce(func: any, init: any): any;
  reduceRight(func: any, init: any): any;
  rename(columnName: any, replacement: any): any;
  renameAll(newColumnNames: any): any;
  replace(value: any, replacement: any, columnNames: any): any;
  restructure(newColumnNames: any): any;
  rightJoin(dfToJoin: any, columnNames: any): any;
  sample(percentage: any): any;
  select(...args: any[]): any;
  setRow(index: any, ...args: any[]): any;
  show(...args: any[]): any;
  shuffle(): any;
  slice(startIndex: any, endIndex: any): any;
  sortBy(columnNames: any, ...args: any[]): any;
  tail(...args: any[]): any;
  toArray(columnName: any): any;
  toCSV(...args: any[]): any;
  toCollection(ofRows: any): any;
  toDSV(...args: any[]): any;
  toDict(): any;
  toJSON(...args: any[]): any;
  toPSV(...args: any[]): any;
  toTSV(...args: any[]): any;
  toText(...args: any[]): any;
  transpose(tranposeColumnNames: any): any;
  union(dfToUnion: any): any;
  unique(columnName: any): any;
  where(condition: any): any;
  withColumn(columnName: any, ...args: any[]): any;
}
export default namespace _default {
  class sql {
    static dropTable(tableName: any): void;
    static dropTables(): void;
    static listTables(): any;
    static registerTable(df: any, tableName: any, ...args: any[]): void;
    static renameTable(tableName: any, replacement: any, ...args: any[]): void;
    static request(query: any): any;
    static tables: {};
    constructor(df: any);
    df: any;
    name: any;
    register(tableName: any, ...args: any[]): any;
  }
}

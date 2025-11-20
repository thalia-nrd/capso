
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * ----------------------
 * USERS
 * ----------------------
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Cabinet
 * ----------------------
 * CABINETS
 * ----------------------
 */
export type Cabinet = $Result.DefaultSelection<Prisma.$CabinetPayload>
/**
 * Model CabinetLayout
 * ----------------------
 * CABINET LAYOUT
 * ----------------------
 */
export type CabinetLayout = $Result.DefaultSelection<Prisma.$CabinetLayoutPayload>
/**
 * Model SystemItem
 * ----------------------
 * SYSTEM ITEMS (global decor / mirror / mp3)
 * ----------------------
 */
export type SystemItem = $Result.DefaultSelection<Prisma.$SystemItemPayload>
/**
 * Model Chest
 * ----------------------
 * CHEST
 * ----------------------
 */
export type Chest = $Result.DefaultSelection<Prisma.$ChestPayload>
/**
 * Model Journal
 * ----------------------
 * JOURNAL
 * ----------------------
 */
export type Journal = $Result.DefaultSelection<Prisma.$JournalPayload>
/**
 * Model PhotoFrame
 * ----------------------
 * PHOTO FRAME
 * ----------------------
 */
export type PhotoFrame = $Result.DefaultSelection<Prisma.$PhotoFramePayload>
/**
 * Model Media
 * ----------------------
 * MEDIA
 * ----------------------
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model Checklist
 * ----------------------
 * CHECKLIST
 * ----------------------
 */
export type Checklist = $Result.DefaultSelection<Prisma.$ChecklistPayload>
/**
 * Model Note
 * ----------------------
 * NOTE
 * ----------------------
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cabinet`: Exposes CRUD operations for the **Cabinet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cabinets
    * const cabinets = await prisma.cabinet.findMany()
    * ```
    */
  get cabinet(): Prisma.CabinetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cabinetLayout`: Exposes CRUD operations for the **CabinetLayout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CabinetLayouts
    * const cabinetLayouts = await prisma.cabinetLayout.findMany()
    * ```
    */
  get cabinetLayout(): Prisma.CabinetLayoutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemItem`: Exposes CRUD operations for the **SystemItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemItems
    * const systemItems = await prisma.systemItem.findMany()
    * ```
    */
  get systemItem(): Prisma.SystemItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chest`: Exposes CRUD operations for the **Chest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chests
    * const chests = await prisma.chest.findMany()
    * ```
    */
  get chest(): Prisma.ChestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.journal`: Exposes CRUD operations for the **Journal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Journals
    * const journals = await prisma.journal.findMany()
    * ```
    */
  get journal(): Prisma.JournalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photoFrame`: Exposes CRUD operations for the **PhotoFrame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhotoFrames
    * const photoFrames = await prisma.photoFrame.findMany()
    * ```
    */
  get photoFrame(): Prisma.PhotoFrameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checklist`: Exposes CRUD operations for the **Checklist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checklists
    * const checklists = await prisma.checklist.findMany()
    * ```
    */
  get checklist(): Prisma.ChecklistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Cabinet: 'Cabinet',
    CabinetLayout: 'CabinetLayout',
    SystemItem: 'SystemItem',
    Chest: 'Chest',
    Journal: 'Journal',
    PhotoFrame: 'PhotoFrame',
    Media: 'Media',
    Checklist: 'Checklist',
    Note: 'Note'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "cabinet" | "cabinetLayout" | "systemItem" | "chest" | "journal" | "photoFrame" | "media" | "checklist" | "note"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Cabinet: {
        payload: Prisma.$CabinetPayload<ExtArgs>
        fields: Prisma.CabinetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CabinetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CabinetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          findFirst: {
            args: Prisma.CabinetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CabinetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          findMany: {
            args: Prisma.CabinetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>[]
          }
          create: {
            args: Prisma.CabinetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          createMany: {
            args: Prisma.CabinetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CabinetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>[]
          }
          delete: {
            args: Prisma.CabinetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          update: {
            args: Prisma.CabinetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          deleteMany: {
            args: Prisma.CabinetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CabinetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CabinetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>[]
          }
          upsert: {
            args: Prisma.CabinetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          aggregate: {
            args: Prisma.CabinetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCabinet>
          }
          groupBy: {
            args: Prisma.CabinetGroupByArgs<ExtArgs>
            result: $Utils.Optional<CabinetGroupByOutputType>[]
          }
          count: {
            args: Prisma.CabinetCountArgs<ExtArgs>
            result: $Utils.Optional<CabinetCountAggregateOutputType> | number
          }
        }
      }
      CabinetLayout: {
        payload: Prisma.$CabinetLayoutPayload<ExtArgs>
        fields: Prisma.CabinetLayoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CabinetLayoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetLayoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CabinetLayoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetLayoutPayload>
          }
          findFirst: {
            args: Prisma.CabinetLayoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetLayoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CabinetLayoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetLayoutPayload>
          }
          findMany: {
            args: Prisma.CabinetLayoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetLayoutPayload>[]
          }
          create: {
            args: Prisma.CabinetLayoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetLayoutPayload>
          }
          createMany: {
            args: Prisma.CabinetLayoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CabinetLayoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetLayoutPayload>[]
          }
          delete: {
            args: Prisma.CabinetLayoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetLayoutPayload>
          }
          update: {
            args: Prisma.CabinetLayoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetLayoutPayload>
          }
          deleteMany: {
            args: Prisma.CabinetLayoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CabinetLayoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CabinetLayoutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetLayoutPayload>[]
          }
          upsert: {
            args: Prisma.CabinetLayoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetLayoutPayload>
          }
          aggregate: {
            args: Prisma.CabinetLayoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCabinetLayout>
          }
          groupBy: {
            args: Prisma.CabinetLayoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<CabinetLayoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.CabinetLayoutCountArgs<ExtArgs>
            result: $Utils.Optional<CabinetLayoutCountAggregateOutputType> | number
          }
        }
      }
      SystemItem: {
        payload: Prisma.$SystemItemPayload<ExtArgs>
        fields: Prisma.SystemItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemItemPayload>
          }
          findFirst: {
            args: Prisma.SystemItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemItemPayload>
          }
          findMany: {
            args: Prisma.SystemItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemItemPayload>[]
          }
          create: {
            args: Prisma.SystemItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemItemPayload>
          }
          createMany: {
            args: Prisma.SystemItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemItemPayload>[]
          }
          delete: {
            args: Prisma.SystemItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemItemPayload>
          }
          update: {
            args: Prisma.SystemItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemItemPayload>
          }
          deleteMany: {
            args: Prisma.SystemItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemItemPayload>[]
          }
          upsert: {
            args: Prisma.SystemItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemItemPayload>
          }
          aggregate: {
            args: Prisma.SystemItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemItem>
          }
          groupBy: {
            args: Prisma.SystemItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemItemCountArgs<ExtArgs>
            result: $Utils.Optional<SystemItemCountAggregateOutputType> | number
          }
        }
      }
      Chest: {
        payload: Prisma.$ChestPayload<ExtArgs>
        fields: Prisma.ChestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChestPayload>
          }
          findFirst: {
            args: Prisma.ChestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChestPayload>
          }
          findMany: {
            args: Prisma.ChestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChestPayload>[]
          }
          create: {
            args: Prisma.ChestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChestPayload>
          }
          createMany: {
            args: Prisma.ChestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChestPayload>[]
          }
          delete: {
            args: Prisma.ChestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChestPayload>
          }
          update: {
            args: Prisma.ChestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChestPayload>
          }
          deleteMany: {
            args: Prisma.ChestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChestPayload>[]
          }
          upsert: {
            args: Prisma.ChestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChestPayload>
          }
          aggregate: {
            args: Prisma.ChestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChest>
          }
          groupBy: {
            args: Prisma.ChestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChestCountArgs<ExtArgs>
            result: $Utils.Optional<ChestCountAggregateOutputType> | number
          }
        }
      }
      Journal: {
        payload: Prisma.$JournalPayload<ExtArgs>
        fields: Prisma.JournalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JournalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JournalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalPayload>
          }
          findFirst: {
            args: Prisma.JournalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JournalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalPayload>
          }
          findMany: {
            args: Prisma.JournalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalPayload>[]
          }
          create: {
            args: Prisma.JournalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalPayload>
          }
          createMany: {
            args: Prisma.JournalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JournalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalPayload>[]
          }
          delete: {
            args: Prisma.JournalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalPayload>
          }
          update: {
            args: Prisma.JournalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalPayload>
          }
          deleteMany: {
            args: Prisma.JournalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JournalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JournalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalPayload>[]
          }
          upsert: {
            args: Prisma.JournalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalPayload>
          }
          aggregate: {
            args: Prisma.JournalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJournal>
          }
          groupBy: {
            args: Prisma.JournalGroupByArgs<ExtArgs>
            result: $Utils.Optional<JournalGroupByOutputType>[]
          }
          count: {
            args: Prisma.JournalCountArgs<ExtArgs>
            result: $Utils.Optional<JournalCountAggregateOutputType> | number
          }
        }
      }
      PhotoFrame: {
        payload: Prisma.$PhotoFramePayload<ExtArgs>
        fields: Prisma.PhotoFrameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFrameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFramePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFrameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFramePayload>
          }
          findFirst: {
            args: Prisma.PhotoFrameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFramePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFrameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFramePayload>
          }
          findMany: {
            args: Prisma.PhotoFrameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFramePayload>[]
          }
          create: {
            args: Prisma.PhotoFrameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFramePayload>
          }
          createMany: {
            args: Prisma.PhotoFrameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoFrameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFramePayload>[]
          }
          delete: {
            args: Prisma.PhotoFrameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFramePayload>
          }
          update: {
            args: Prisma.PhotoFrameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFramePayload>
          }
          deleteMany: {
            args: Prisma.PhotoFrameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoFrameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhotoFrameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFramePayload>[]
          }
          upsert: {
            args: Prisma.PhotoFrameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFramePayload>
          }
          aggregate: {
            args: Prisma.PhotoFrameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhotoFrame>
          }
          groupBy: {
            args: Prisma.PhotoFrameGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoFrameGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoFrameCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoFrameCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      Checklist: {
        payload: Prisma.$ChecklistPayload<ExtArgs>
        fields: Prisma.ChecklistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChecklistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChecklistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          findFirst: {
            args: Prisma.ChecklistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChecklistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          findMany: {
            args: Prisma.ChecklistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>[]
          }
          create: {
            args: Prisma.ChecklistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          createMany: {
            args: Prisma.ChecklistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChecklistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>[]
          }
          delete: {
            args: Prisma.ChecklistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          update: {
            args: Prisma.ChecklistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          deleteMany: {
            args: Prisma.ChecklistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChecklistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChecklistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>[]
          }
          upsert: {
            args: Prisma.ChecklistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          aggregate: {
            args: Prisma.ChecklistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChecklist>
          }
          groupBy: {
            args: Prisma.ChecklistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChecklistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChecklistCountArgs<ExtArgs>
            result: $Utils.Optional<ChecklistCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    cabinet?: CabinetOmit
    cabinetLayout?: CabinetLayoutOmit
    systemItem?: SystemItemOmit
    chest?: ChestOmit
    journal?: JournalOmit
    photoFrame?: PhotoFrameOmit
    media?: MediaOmit
    checklist?: ChecklistOmit
    note?: NoteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    cabinets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinets?: boolean | UserCountOutputTypeCountCabinetsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCabinetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CabinetWhereInput
  }


  /**
   * Count Type CabinetCountOutputType
   */

  export type CabinetCountOutputType = {
    layout: number
    photoFrame: number
    media: number
    checklist: number
    notes: number
  }

  export type CabinetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layout?: boolean | CabinetCountOutputTypeCountLayoutArgs
    photoFrame?: boolean | CabinetCountOutputTypeCountPhotoFrameArgs
    media?: boolean | CabinetCountOutputTypeCountMediaArgs
    checklist?: boolean | CabinetCountOutputTypeCountChecklistArgs
    notes?: boolean | CabinetCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * CabinetCountOutputType without action
   */
  export type CabinetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetCountOutputType
     */
    select?: CabinetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CabinetCountOutputType without action
   */
  export type CabinetCountOutputTypeCountLayoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CabinetLayoutWhereInput
  }

  /**
   * CabinetCountOutputType without action
   */
  export type CabinetCountOutputTypeCountPhotoFrameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoFrameWhereInput
  }

  /**
   * CabinetCountOutputType without action
   */
  export type CabinetCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }

  /**
   * CabinetCountOutputType without action
   */
  export type CabinetCountOutputTypeCountChecklistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistWhereInput
  }

  /**
   * CabinetCountOutputType without action
   */
  export type CabinetCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinets?: boolean | User$cabinetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinets?: boolean | User$cabinetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cabinets: Prisma.$CabinetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cabinets<T extends User$cabinetsArgs<ExtArgs> = {}>(args?: Subset<T, User$cabinetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.cabinets
   */
  export type User$cabinetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    where?: CabinetWhereInput
    orderBy?: CabinetOrderByWithRelationInput | CabinetOrderByWithRelationInput[]
    cursor?: CabinetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CabinetScalarFieldEnum | CabinetScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Cabinet
   */

  export type AggregateCabinet = {
    _count: CabinetCountAggregateOutputType | null
    _avg: CabinetAvgAggregateOutputType | null
    _sum: CabinetSumAggregateOutputType | null
    _min: CabinetMinAggregateOutputType | null
    _max: CabinetMaxAggregateOutputType | null
  }

  export type CabinetAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type CabinetSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type CabinetMinAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: number | null
  }

  export type CabinetMaxAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: number | null
  }

  export type CabinetCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    ownerId: number
    _all: number
  }


  export type CabinetAvgAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type CabinetSumAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type CabinetMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type CabinetMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type CabinetCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    _all?: true
  }

  export type CabinetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cabinet to aggregate.
     */
    where?: CabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cabinets to fetch.
     */
    orderBy?: CabinetOrderByWithRelationInput | CabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cabinets
    **/
    _count?: true | CabinetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CabinetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CabinetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CabinetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CabinetMaxAggregateInputType
  }

  export type GetCabinetAggregateType<T extends CabinetAggregateArgs> = {
        [P in keyof T & keyof AggregateCabinet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCabinet[P]>
      : GetScalarType<T[P], AggregateCabinet[P]>
  }




  export type CabinetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CabinetWhereInput
    orderBy?: CabinetOrderByWithAggregationInput | CabinetOrderByWithAggregationInput[]
    by: CabinetScalarFieldEnum[] | CabinetScalarFieldEnum
    having?: CabinetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CabinetCountAggregateInputType | true
    _avg?: CabinetAvgAggregateInputType
    _sum?: CabinetSumAggregateInputType
    _min?: CabinetMinAggregateInputType
    _max?: CabinetMaxAggregateInputType
  }

  export type CabinetGroupByOutputType = {
    id: number
    title: string
    createdAt: Date
    updatedAt: Date
    ownerId: number
    _count: CabinetCountAggregateOutputType | null
    _avg: CabinetAvgAggregateOutputType | null
    _sum: CabinetSumAggregateOutputType | null
    _min: CabinetMinAggregateOutputType | null
    _max: CabinetMaxAggregateOutputType | null
  }

  type GetCabinetGroupByPayload<T extends CabinetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CabinetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CabinetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CabinetGroupByOutputType[P]>
            : GetScalarType<T[P], CabinetGroupByOutputType[P]>
        }
      >
    >


  export type CabinetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    layout?: boolean | Cabinet$layoutArgs<ExtArgs>
    chest?: boolean | Cabinet$chestArgs<ExtArgs>
    journal?: boolean | Cabinet$journalArgs<ExtArgs>
    photoFrame?: boolean | Cabinet$photoFrameArgs<ExtArgs>
    media?: boolean | Cabinet$mediaArgs<ExtArgs>
    checklist?: boolean | Cabinet$checklistArgs<ExtArgs>
    notes?: boolean | Cabinet$notesArgs<ExtArgs>
    _count?: boolean | CabinetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cabinet"]>

  export type CabinetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cabinet"]>

  export type CabinetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cabinet"]>

  export type CabinetSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
  }

  export type CabinetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createdAt" | "updatedAt" | "ownerId", ExtArgs["result"]["cabinet"]>
  export type CabinetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    layout?: boolean | Cabinet$layoutArgs<ExtArgs>
    chest?: boolean | Cabinet$chestArgs<ExtArgs>
    journal?: boolean | Cabinet$journalArgs<ExtArgs>
    photoFrame?: boolean | Cabinet$photoFrameArgs<ExtArgs>
    media?: boolean | Cabinet$mediaArgs<ExtArgs>
    checklist?: boolean | Cabinet$checklistArgs<ExtArgs>
    notes?: boolean | Cabinet$notesArgs<ExtArgs>
    _count?: boolean | CabinetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CabinetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CabinetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CabinetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cabinet"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      layout: Prisma.$CabinetLayoutPayload<ExtArgs>[]
      chest: Prisma.$ChestPayload<ExtArgs> | null
      journal: Prisma.$JournalPayload<ExtArgs> | null
      photoFrame: Prisma.$PhotoFramePayload<ExtArgs>[]
      media: Prisma.$MediaPayload<ExtArgs>[]
      checklist: Prisma.$ChecklistPayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      createdAt: Date
      updatedAt: Date
      ownerId: number
    }, ExtArgs["result"]["cabinet"]>
    composites: {}
  }

  type CabinetGetPayload<S extends boolean | null | undefined | CabinetDefaultArgs> = $Result.GetResult<Prisma.$CabinetPayload, S>

  type CabinetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CabinetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CabinetCountAggregateInputType | true
    }

  export interface CabinetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cabinet'], meta: { name: 'Cabinet' } }
    /**
     * Find zero or one Cabinet that matches the filter.
     * @param {CabinetFindUniqueArgs} args - Arguments to find a Cabinet
     * @example
     * // Get one Cabinet
     * const cabinet = await prisma.cabinet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CabinetFindUniqueArgs>(args: SelectSubset<T, CabinetFindUniqueArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cabinet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CabinetFindUniqueOrThrowArgs} args - Arguments to find a Cabinet
     * @example
     * // Get one Cabinet
     * const cabinet = await prisma.cabinet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CabinetFindUniqueOrThrowArgs>(args: SelectSubset<T, CabinetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cabinet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetFindFirstArgs} args - Arguments to find a Cabinet
     * @example
     * // Get one Cabinet
     * const cabinet = await prisma.cabinet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CabinetFindFirstArgs>(args?: SelectSubset<T, CabinetFindFirstArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cabinet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetFindFirstOrThrowArgs} args - Arguments to find a Cabinet
     * @example
     * // Get one Cabinet
     * const cabinet = await prisma.cabinet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CabinetFindFirstOrThrowArgs>(args?: SelectSubset<T, CabinetFindFirstOrThrowArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cabinets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cabinets
     * const cabinets = await prisma.cabinet.findMany()
     * 
     * // Get first 10 Cabinets
     * const cabinets = await prisma.cabinet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cabinetWithIdOnly = await prisma.cabinet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CabinetFindManyArgs>(args?: SelectSubset<T, CabinetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cabinet.
     * @param {CabinetCreateArgs} args - Arguments to create a Cabinet.
     * @example
     * // Create one Cabinet
     * const Cabinet = await prisma.cabinet.create({
     *   data: {
     *     // ... data to create a Cabinet
     *   }
     * })
     * 
     */
    create<T extends CabinetCreateArgs>(args: SelectSubset<T, CabinetCreateArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cabinets.
     * @param {CabinetCreateManyArgs} args - Arguments to create many Cabinets.
     * @example
     * // Create many Cabinets
     * const cabinet = await prisma.cabinet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CabinetCreateManyArgs>(args?: SelectSubset<T, CabinetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cabinets and returns the data saved in the database.
     * @param {CabinetCreateManyAndReturnArgs} args - Arguments to create many Cabinets.
     * @example
     * // Create many Cabinets
     * const cabinet = await prisma.cabinet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cabinets and only return the `id`
     * const cabinetWithIdOnly = await prisma.cabinet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CabinetCreateManyAndReturnArgs>(args?: SelectSubset<T, CabinetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cabinet.
     * @param {CabinetDeleteArgs} args - Arguments to delete one Cabinet.
     * @example
     * // Delete one Cabinet
     * const Cabinet = await prisma.cabinet.delete({
     *   where: {
     *     // ... filter to delete one Cabinet
     *   }
     * })
     * 
     */
    delete<T extends CabinetDeleteArgs>(args: SelectSubset<T, CabinetDeleteArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cabinet.
     * @param {CabinetUpdateArgs} args - Arguments to update one Cabinet.
     * @example
     * // Update one Cabinet
     * const cabinet = await prisma.cabinet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CabinetUpdateArgs>(args: SelectSubset<T, CabinetUpdateArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cabinets.
     * @param {CabinetDeleteManyArgs} args - Arguments to filter Cabinets to delete.
     * @example
     * // Delete a few Cabinets
     * const { count } = await prisma.cabinet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CabinetDeleteManyArgs>(args?: SelectSubset<T, CabinetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cabinets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cabinets
     * const cabinet = await prisma.cabinet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CabinetUpdateManyArgs>(args: SelectSubset<T, CabinetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cabinets and returns the data updated in the database.
     * @param {CabinetUpdateManyAndReturnArgs} args - Arguments to update many Cabinets.
     * @example
     * // Update many Cabinets
     * const cabinet = await prisma.cabinet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cabinets and only return the `id`
     * const cabinetWithIdOnly = await prisma.cabinet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CabinetUpdateManyAndReturnArgs>(args: SelectSubset<T, CabinetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cabinet.
     * @param {CabinetUpsertArgs} args - Arguments to update or create a Cabinet.
     * @example
     * // Update or create a Cabinet
     * const cabinet = await prisma.cabinet.upsert({
     *   create: {
     *     // ... data to create a Cabinet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cabinet we want to update
     *   }
     * })
     */
    upsert<T extends CabinetUpsertArgs>(args: SelectSubset<T, CabinetUpsertArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cabinets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetCountArgs} args - Arguments to filter Cabinets to count.
     * @example
     * // Count the number of Cabinets
     * const count = await prisma.cabinet.count({
     *   where: {
     *     // ... the filter for the Cabinets we want to count
     *   }
     * })
    **/
    count<T extends CabinetCountArgs>(
      args?: Subset<T, CabinetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CabinetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cabinet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CabinetAggregateArgs>(args: Subset<T, CabinetAggregateArgs>): Prisma.PrismaPromise<GetCabinetAggregateType<T>>

    /**
     * Group by Cabinet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CabinetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CabinetGroupByArgs['orderBy'] }
        : { orderBy?: CabinetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CabinetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCabinetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cabinet model
   */
  readonly fields: CabinetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cabinet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CabinetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    layout<T extends Cabinet$layoutArgs<ExtArgs> = {}>(args?: Subset<T, Cabinet$layoutArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabinetLayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chest<T extends Cabinet$chestArgs<ExtArgs> = {}>(args?: Subset<T, Cabinet$chestArgs<ExtArgs>>): Prisma__ChestClient<$Result.GetResult<Prisma.$ChestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    journal<T extends Cabinet$journalArgs<ExtArgs> = {}>(args?: Subset<T, Cabinet$journalArgs<ExtArgs>>): Prisma__JournalClient<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    photoFrame<T extends Cabinet$photoFrameArgs<ExtArgs> = {}>(args?: Subset<T, Cabinet$photoFrameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoFramePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    media<T extends Cabinet$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Cabinet$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    checklist<T extends Cabinet$checklistArgs<ExtArgs> = {}>(args?: Subset<T, Cabinet$checklistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends Cabinet$notesArgs<ExtArgs> = {}>(args?: Subset<T, Cabinet$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cabinet model
   */
  interface CabinetFieldRefs {
    readonly id: FieldRef<"Cabinet", 'Int'>
    readonly title: FieldRef<"Cabinet", 'String'>
    readonly createdAt: FieldRef<"Cabinet", 'DateTime'>
    readonly updatedAt: FieldRef<"Cabinet", 'DateTime'>
    readonly ownerId: FieldRef<"Cabinet", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cabinet findUnique
   */
  export type CabinetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * Filter, which Cabinet to fetch.
     */
    where: CabinetWhereUniqueInput
  }

  /**
   * Cabinet findUniqueOrThrow
   */
  export type CabinetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * Filter, which Cabinet to fetch.
     */
    where: CabinetWhereUniqueInput
  }

  /**
   * Cabinet findFirst
   */
  export type CabinetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * Filter, which Cabinet to fetch.
     */
    where?: CabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cabinets to fetch.
     */
    orderBy?: CabinetOrderByWithRelationInput | CabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cabinets.
     */
    cursor?: CabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cabinets.
     */
    distinct?: CabinetScalarFieldEnum | CabinetScalarFieldEnum[]
  }

  /**
   * Cabinet findFirstOrThrow
   */
  export type CabinetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * Filter, which Cabinet to fetch.
     */
    where?: CabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cabinets to fetch.
     */
    orderBy?: CabinetOrderByWithRelationInput | CabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cabinets.
     */
    cursor?: CabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cabinets.
     */
    distinct?: CabinetScalarFieldEnum | CabinetScalarFieldEnum[]
  }

  /**
   * Cabinet findMany
   */
  export type CabinetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * Filter, which Cabinets to fetch.
     */
    where?: CabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cabinets to fetch.
     */
    orderBy?: CabinetOrderByWithRelationInput | CabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cabinets.
     */
    cursor?: CabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cabinets.
     */
    skip?: number
    distinct?: CabinetScalarFieldEnum | CabinetScalarFieldEnum[]
  }

  /**
   * Cabinet create
   */
  export type CabinetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * The data needed to create a Cabinet.
     */
    data: XOR<CabinetCreateInput, CabinetUncheckedCreateInput>
  }

  /**
   * Cabinet createMany
   */
  export type CabinetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cabinets.
     */
    data: CabinetCreateManyInput | CabinetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cabinet createManyAndReturn
   */
  export type CabinetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * The data used to create many Cabinets.
     */
    data: CabinetCreateManyInput | CabinetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cabinet update
   */
  export type CabinetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * The data needed to update a Cabinet.
     */
    data: XOR<CabinetUpdateInput, CabinetUncheckedUpdateInput>
    /**
     * Choose, which Cabinet to update.
     */
    where: CabinetWhereUniqueInput
  }

  /**
   * Cabinet updateMany
   */
  export type CabinetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cabinets.
     */
    data: XOR<CabinetUpdateManyMutationInput, CabinetUncheckedUpdateManyInput>
    /**
     * Filter which Cabinets to update
     */
    where?: CabinetWhereInput
    /**
     * Limit how many Cabinets to update.
     */
    limit?: number
  }

  /**
   * Cabinet updateManyAndReturn
   */
  export type CabinetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * The data used to update Cabinets.
     */
    data: XOR<CabinetUpdateManyMutationInput, CabinetUncheckedUpdateManyInput>
    /**
     * Filter which Cabinets to update
     */
    where?: CabinetWhereInput
    /**
     * Limit how many Cabinets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cabinet upsert
   */
  export type CabinetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * The filter to search for the Cabinet to update in case it exists.
     */
    where: CabinetWhereUniqueInput
    /**
     * In case the Cabinet found by the `where` argument doesn't exist, create a new Cabinet with this data.
     */
    create: XOR<CabinetCreateInput, CabinetUncheckedCreateInput>
    /**
     * In case the Cabinet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CabinetUpdateInput, CabinetUncheckedUpdateInput>
  }

  /**
   * Cabinet delete
   */
  export type CabinetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * Filter which Cabinet to delete.
     */
    where: CabinetWhereUniqueInput
  }

  /**
   * Cabinet deleteMany
   */
  export type CabinetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cabinets to delete
     */
    where?: CabinetWhereInput
    /**
     * Limit how many Cabinets to delete.
     */
    limit?: number
  }

  /**
   * Cabinet.layout
   */
  export type Cabinet$layoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetLayout
     */
    select?: CabinetLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetLayout
     */
    omit?: CabinetLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetLayoutInclude<ExtArgs> | null
    where?: CabinetLayoutWhereInput
    orderBy?: CabinetLayoutOrderByWithRelationInput | CabinetLayoutOrderByWithRelationInput[]
    cursor?: CabinetLayoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CabinetLayoutScalarFieldEnum | CabinetLayoutScalarFieldEnum[]
  }

  /**
   * Cabinet.chest
   */
  export type Cabinet$chestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chest
     */
    select?: ChestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chest
     */
    omit?: ChestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChestInclude<ExtArgs> | null
    where?: ChestWhereInput
  }

  /**
   * Cabinet.journal
   */
  export type Cabinet$journalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalInclude<ExtArgs> | null
    where?: JournalWhereInput
  }

  /**
   * Cabinet.photoFrame
   */
  export type Cabinet$photoFrameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFrame
     */
    select?: PhotoFrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFrame
     */
    omit?: PhotoFrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFrameInclude<ExtArgs> | null
    where?: PhotoFrameWhereInput
    orderBy?: PhotoFrameOrderByWithRelationInput | PhotoFrameOrderByWithRelationInput[]
    cursor?: PhotoFrameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoFrameScalarFieldEnum | PhotoFrameScalarFieldEnum[]
  }

  /**
   * Cabinet.media
   */
  export type Cabinet$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Cabinet.checklist
   */
  export type Cabinet$checklistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    where?: ChecklistWhereInput
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    cursor?: ChecklistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Cabinet.notes
   */
  export type Cabinet$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Cabinet without action
   */
  export type CabinetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
  }


  /**
   * Model CabinetLayout
   */

  export type AggregateCabinetLayout = {
    _count: CabinetLayoutCountAggregateOutputType | null
    _avg: CabinetLayoutAvgAggregateOutputType | null
    _sum: CabinetLayoutSumAggregateOutputType | null
    _min: CabinetLayoutMinAggregateOutputType | null
    _max: CabinetLayoutMaxAggregateOutputType | null
  }

  export type CabinetLayoutAvgAggregateOutputType = {
    id: number | null
    cabinetId: number | null
  }

  export type CabinetLayoutSumAggregateOutputType = {
    id: number | null
    cabinetId: number | null
  }

  export type CabinetLayoutMinAggregateOutputType = {
    id: number | null
    name: string | null
    cabinetId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CabinetLayoutMaxAggregateOutputType = {
    id: number | null
    name: string | null
    cabinetId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CabinetLayoutCountAggregateOutputType = {
    id: number
    name: number
    layout: number
    cabinetId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CabinetLayoutAvgAggregateInputType = {
    id?: true
    cabinetId?: true
  }

  export type CabinetLayoutSumAggregateInputType = {
    id?: true
    cabinetId?: true
  }

  export type CabinetLayoutMinAggregateInputType = {
    id?: true
    name?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CabinetLayoutMaxAggregateInputType = {
    id?: true
    name?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CabinetLayoutCountAggregateInputType = {
    id?: true
    name?: true
    layout?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CabinetLayoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CabinetLayout to aggregate.
     */
    where?: CabinetLayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CabinetLayouts to fetch.
     */
    orderBy?: CabinetLayoutOrderByWithRelationInput | CabinetLayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CabinetLayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CabinetLayouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CabinetLayouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CabinetLayouts
    **/
    _count?: true | CabinetLayoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CabinetLayoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CabinetLayoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CabinetLayoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CabinetLayoutMaxAggregateInputType
  }

  export type GetCabinetLayoutAggregateType<T extends CabinetLayoutAggregateArgs> = {
        [P in keyof T & keyof AggregateCabinetLayout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCabinetLayout[P]>
      : GetScalarType<T[P], AggregateCabinetLayout[P]>
  }




  export type CabinetLayoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CabinetLayoutWhereInput
    orderBy?: CabinetLayoutOrderByWithAggregationInput | CabinetLayoutOrderByWithAggregationInput[]
    by: CabinetLayoutScalarFieldEnum[] | CabinetLayoutScalarFieldEnum
    having?: CabinetLayoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CabinetLayoutCountAggregateInputType | true
    _avg?: CabinetLayoutAvgAggregateInputType
    _sum?: CabinetLayoutSumAggregateInputType
    _min?: CabinetLayoutMinAggregateInputType
    _max?: CabinetLayoutMaxAggregateInputType
  }

  export type CabinetLayoutGroupByOutputType = {
    id: number
    name: string | null
    layout: JsonValue
    cabinetId: number
    createdAt: Date
    updatedAt: Date
    _count: CabinetLayoutCountAggregateOutputType | null
    _avg: CabinetLayoutAvgAggregateOutputType | null
    _sum: CabinetLayoutSumAggregateOutputType | null
    _min: CabinetLayoutMinAggregateOutputType | null
    _max: CabinetLayoutMaxAggregateOutputType | null
  }

  type GetCabinetLayoutGroupByPayload<T extends CabinetLayoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CabinetLayoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CabinetLayoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CabinetLayoutGroupByOutputType[P]>
            : GetScalarType<T[P], CabinetLayoutGroupByOutputType[P]>
        }
      >
    >


  export type CabinetLayoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    layout?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cabinetLayout"]>

  export type CabinetLayoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    layout?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cabinetLayout"]>

  export type CabinetLayoutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    layout?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cabinetLayout"]>

  export type CabinetLayoutSelectScalar = {
    id?: boolean
    name?: boolean
    layout?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CabinetLayoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "layout" | "cabinetId" | "createdAt" | "updatedAt", ExtArgs["result"]["cabinetLayout"]>
  export type CabinetLayoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type CabinetLayoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type CabinetLayoutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }

  export type $CabinetLayoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CabinetLayout"
    objects: {
      cabinet: Prisma.$CabinetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      layout: Prisma.JsonValue
      cabinetId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cabinetLayout"]>
    composites: {}
  }

  type CabinetLayoutGetPayload<S extends boolean | null | undefined | CabinetLayoutDefaultArgs> = $Result.GetResult<Prisma.$CabinetLayoutPayload, S>

  type CabinetLayoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CabinetLayoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CabinetLayoutCountAggregateInputType | true
    }

  export interface CabinetLayoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CabinetLayout'], meta: { name: 'CabinetLayout' } }
    /**
     * Find zero or one CabinetLayout that matches the filter.
     * @param {CabinetLayoutFindUniqueArgs} args - Arguments to find a CabinetLayout
     * @example
     * // Get one CabinetLayout
     * const cabinetLayout = await prisma.cabinetLayout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CabinetLayoutFindUniqueArgs>(args: SelectSubset<T, CabinetLayoutFindUniqueArgs<ExtArgs>>): Prisma__CabinetLayoutClient<$Result.GetResult<Prisma.$CabinetLayoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CabinetLayout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CabinetLayoutFindUniqueOrThrowArgs} args - Arguments to find a CabinetLayout
     * @example
     * // Get one CabinetLayout
     * const cabinetLayout = await prisma.cabinetLayout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CabinetLayoutFindUniqueOrThrowArgs>(args: SelectSubset<T, CabinetLayoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CabinetLayoutClient<$Result.GetResult<Prisma.$CabinetLayoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CabinetLayout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetLayoutFindFirstArgs} args - Arguments to find a CabinetLayout
     * @example
     * // Get one CabinetLayout
     * const cabinetLayout = await prisma.cabinetLayout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CabinetLayoutFindFirstArgs>(args?: SelectSubset<T, CabinetLayoutFindFirstArgs<ExtArgs>>): Prisma__CabinetLayoutClient<$Result.GetResult<Prisma.$CabinetLayoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CabinetLayout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetLayoutFindFirstOrThrowArgs} args - Arguments to find a CabinetLayout
     * @example
     * // Get one CabinetLayout
     * const cabinetLayout = await prisma.cabinetLayout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CabinetLayoutFindFirstOrThrowArgs>(args?: SelectSubset<T, CabinetLayoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__CabinetLayoutClient<$Result.GetResult<Prisma.$CabinetLayoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CabinetLayouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetLayoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CabinetLayouts
     * const cabinetLayouts = await prisma.cabinetLayout.findMany()
     * 
     * // Get first 10 CabinetLayouts
     * const cabinetLayouts = await prisma.cabinetLayout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cabinetLayoutWithIdOnly = await prisma.cabinetLayout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CabinetLayoutFindManyArgs>(args?: SelectSubset<T, CabinetLayoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabinetLayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CabinetLayout.
     * @param {CabinetLayoutCreateArgs} args - Arguments to create a CabinetLayout.
     * @example
     * // Create one CabinetLayout
     * const CabinetLayout = await prisma.cabinetLayout.create({
     *   data: {
     *     // ... data to create a CabinetLayout
     *   }
     * })
     * 
     */
    create<T extends CabinetLayoutCreateArgs>(args: SelectSubset<T, CabinetLayoutCreateArgs<ExtArgs>>): Prisma__CabinetLayoutClient<$Result.GetResult<Prisma.$CabinetLayoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CabinetLayouts.
     * @param {CabinetLayoutCreateManyArgs} args - Arguments to create many CabinetLayouts.
     * @example
     * // Create many CabinetLayouts
     * const cabinetLayout = await prisma.cabinetLayout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CabinetLayoutCreateManyArgs>(args?: SelectSubset<T, CabinetLayoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CabinetLayouts and returns the data saved in the database.
     * @param {CabinetLayoutCreateManyAndReturnArgs} args - Arguments to create many CabinetLayouts.
     * @example
     * // Create many CabinetLayouts
     * const cabinetLayout = await prisma.cabinetLayout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CabinetLayouts and only return the `id`
     * const cabinetLayoutWithIdOnly = await prisma.cabinetLayout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CabinetLayoutCreateManyAndReturnArgs>(args?: SelectSubset<T, CabinetLayoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabinetLayoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CabinetLayout.
     * @param {CabinetLayoutDeleteArgs} args - Arguments to delete one CabinetLayout.
     * @example
     * // Delete one CabinetLayout
     * const CabinetLayout = await prisma.cabinetLayout.delete({
     *   where: {
     *     // ... filter to delete one CabinetLayout
     *   }
     * })
     * 
     */
    delete<T extends CabinetLayoutDeleteArgs>(args: SelectSubset<T, CabinetLayoutDeleteArgs<ExtArgs>>): Prisma__CabinetLayoutClient<$Result.GetResult<Prisma.$CabinetLayoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CabinetLayout.
     * @param {CabinetLayoutUpdateArgs} args - Arguments to update one CabinetLayout.
     * @example
     * // Update one CabinetLayout
     * const cabinetLayout = await prisma.cabinetLayout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CabinetLayoutUpdateArgs>(args: SelectSubset<T, CabinetLayoutUpdateArgs<ExtArgs>>): Prisma__CabinetLayoutClient<$Result.GetResult<Prisma.$CabinetLayoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CabinetLayouts.
     * @param {CabinetLayoutDeleteManyArgs} args - Arguments to filter CabinetLayouts to delete.
     * @example
     * // Delete a few CabinetLayouts
     * const { count } = await prisma.cabinetLayout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CabinetLayoutDeleteManyArgs>(args?: SelectSubset<T, CabinetLayoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CabinetLayouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetLayoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CabinetLayouts
     * const cabinetLayout = await prisma.cabinetLayout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CabinetLayoutUpdateManyArgs>(args: SelectSubset<T, CabinetLayoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CabinetLayouts and returns the data updated in the database.
     * @param {CabinetLayoutUpdateManyAndReturnArgs} args - Arguments to update many CabinetLayouts.
     * @example
     * // Update many CabinetLayouts
     * const cabinetLayout = await prisma.cabinetLayout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CabinetLayouts and only return the `id`
     * const cabinetLayoutWithIdOnly = await prisma.cabinetLayout.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CabinetLayoutUpdateManyAndReturnArgs>(args: SelectSubset<T, CabinetLayoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabinetLayoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CabinetLayout.
     * @param {CabinetLayoutUpsertArgs} args - Arguments to update or create a CabinetLayout.
     * @example
     * // Update or create a CabinetLayout
     * const cabinetLayout = await prisma.cabinetLayout.upsert({
     *   create: {
     *     // ... data to create a CabinetLayout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CabinetLayout we want to update
     *   }
     * })
     */
    upsert<T extends CabinetLayoutUpsertArgs>(args: SelectSubset<T, CabinetLayoutUpsertArgs<ExtArgs>>): Prisma__CabinetLayoutClient<$Result.GetResult<Prisma.$CabinetLayoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CabinetLayouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetLayoutCountArgs} args - Arguments to filter CabinetLayouts to count.
     * @example
     * // Count the number of CabinetLayouts
     * const count = await prisma.cabinetLayout.count({
     *   where: {
     *     // ... the filter for the CabinetLayouts we want to count
     *   }
     * })
    **/
    count<T extends CabinetLayoutCountArgs>(
      args?: Subset<T, CabinetLayoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CabinetLayoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CabinetLayout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetLayoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CabinetLayoutAggregateArgs>(args: Subset<T, CabinetLayoutAggregateArgs>): Prisma.PrismaPromise<GetCabinetLayoutAggregateType<T>>

    /**
     * Group by CabinetLayout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetLayoutGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CabinetLayoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CabinetLayoutGroupByArgs['orderBy'] }
        : { orderBy?: CabinetLayoutGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CabinetLayoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCabinetLayoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CabinetLayout model
   */
  readonly fields: CabinetLayoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CabinetLayout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CabinetLayoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cabinet<T extends CabinetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CabinetDefaultArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CabinetLayout model
   */
  interface CabinetLayoutFieldRefs {
    readonly id: FieldRef<"CabinetLayout", 'Int'>
    readonly name: FieldRef<"CabinetLayout", 'String'>
    readonly layout: FieldRef<"CabinetLayout", 'Json'>
    readonly cabinetId: FieldRef<"CabinetLayout", 'Int'>
    readonly createdAt: FieldRef<"CabinetLayout", 'DateTime'>
    readonly updatedAt: FieldRef<"CabinetLayout", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CabinetLayout findUnique
   */
  export type CabinetLayoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetLayout
     */
    select?: CabinetLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetLayout
     */
    omit?: CabinetLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetLayoutInclude<ExtArgs> | null
    /**
     * Filter, which CabinetLayout to fetch.
     */
    where: CabinetLayoutWhereUniqueInput
  }

  /**
   * CabinetLayout findUniqueOrThrow
   */
  export type CabinetLayoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetLayout
     */
    select?: CabinetLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetLayout
     */
    omit?: CabinetLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetLayoutInclude<ExtArgs> | null
    /**
     * Filter, which CabinetLayout to fetch.
     */
    where: CabinetLayoutWhereUniqueInput
  }

  /**
   * CabinetLayout findFirst
   */
  export type CabinetLayoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetLayout
     */
    select?: CabinetLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetLayout
     */
    omit?: CabinetLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetLayoutInclude<ExtArgs> | null
    /**
     * Filter, which CabinetLayout to fetch.
     */
    where?: CabinetLayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CabinetLayouts to fetch.
     */
    orderBy?: CabinetLayoutOrderByWithRelationInput | CabinetLayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CabinetLayouts.
     */
    cursor?: CabinetLayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CabinetLayouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CabinetLayouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CabinetLayouts.
     */
    distinct?: CabinetLayoutScalarFieldEnum | CabinetLayoutScalarFieldEnum[]
  }

  /**
   * CabinetLayout findFirstOrThrow
   */
  export type CabinetLayoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetLayout
     */
    select?: CabinetLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetLayout
     */
    omit?: CabinetLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetLayoutInclude<ExtArgs> | null
    /**
     * Filter, which CabinetLayout to fetch.
     */
    where?: CabinetLayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CabinetLayouts to fetch.
     */
    orderBy?: CabinetLayoutOrderByWithRelationInput | CabinetLayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CabinetLayouts.
     */
    cursor?: CabinetLayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CabinetLayouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CabinetLayouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CabinetLayouts.
     */
    distinct?: CabinetLayoutScalarFieldEnum | CabinetLayoutScalarFieldEnum[]
  }

  /**
   * CabinetLayout findMany
   */
  export type CabinetLayoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetLayout
     */
    select?: CabinetLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetLayout
     */
    omit?: CabinetLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetLayoutInclude<ExtArgs> | null
    /**
     * Filter, which CabinetLayouts to fetch.
     */
    where?: CabinetLayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CabinetLayouts to fetch.
     */
    orderBy?: CabinetLayoutOrderByWithRelationInput | CabinetLayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CabinetLayouts.
     */
    cursor?: CabinetLayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CabinetLayouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CabinetLayouts.
     */
    skip?: number
    distinct?: CabinetLayoutScalarFieldEnum | CabinetLayoutScalarFieldEnum[]
  }

  /**
   * CabinetLayout create
   */
  export type CabinetLayoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetLayout
     */
    select?: CabinetLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetLayout
     */
    omit?: CabinetLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetLayoutInclude<ExtArgs> | null
    /**
     * The data needed to create a CabinetLayout.
     */
    data: XOR<CabinetLayoutCreateInput, CabinetLayoutUncheckedCreateInput>
  }

  /**
   * CabinetLayout createMany
   */
  export type CabinetLayoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CabinetLayouts.
     */
    data: CabinetLayoutCreateManyInput | CabinetLayoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CabinetLayout createManyAndReturn
   */
  export type CabinetLayoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetLayout
     */
    select?: CabinetLayoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetLayout
     */
    omit?: CabinetLayoutOmit<ExtArgs> | null
    /**
     * The data used to create many CabinetLayouts.
     */
    data: CabinetLayoutCreateManyInput | CabinetLayoutCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetLayoutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CabinetLayout update
   */
  export type CabinetLayoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetLayout
     */
    select?: CabinetLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetLayout
     */
    omit?: CabinetLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetLayoutInclude<ExtArgs> | null
    /**
     * The data needed to update a CabinetLayout.
     */
    data: XOR<CabinetLayoutUpdateInput, CabinetLayoutUncheckedUpdateInput>
    /**
     * Choose, which CabinetLayout to update.
     */
    where: CabinetLayoutWhereUniqueInput
  }

  /**
   * CabinetLayout updateMany
   */
  export type CabinetLayoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CabinetLayouts.
     */
    data: XOR<CabinetLayoutUpdateManyMutationInput, CabinetLayoutUncheckedUpdateManyInput>
    /**
     * Filter which CabinetLayouts to update
     */
    where?: CabinetLayoutWhereInput
    /**
     * Limit how many CabinetLayouts to update.
     */
    limit?: number
  }

  /**
   * CabinetLayout updateManyAndReturn
   */
  export type CabinetLayoutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetLayout
     */
    select?: CabinetLayoutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetLayout
     */
    omit?: CabinetLayoutOmit<ExtArgs> | null
    /**
     * The data used to update CabinetLayouts.
     */
    data: XOR<CabinetLayoutUpdateManyMutationInput, CabinetLayoutUncheckedUpdateManyInput>
    /**
     * Filter which CabinetLayouts to update
     */
    where?: CabinetLayoutWhereInput
    /**
     * Limit how many CabinetLayouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetLayoutIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CabinetLayout upsert
   */
  export type CabinetLayoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetLayout
     */
    select?: CabinetLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetLayout
     */
    omit?: CabinetLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetLayoutInclude<ExtArgs> | null
    /**
     * The filter to search for the CabinetLayout to update in case it exists.
     */
    where: CabinetLayoutWhereUniqueInput
    /**
     * In case the CabinetLayout found by the `where` argument doesn't exist, create a new CabinetLayout with this data.
     */
    create: XOR<CabinetLayoutCreateInput, CabinetLayoutUncheckedCreateInput>
    /**
     * In case the CabinetLayout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CabinetLayoutUpdateInput, CabinetLayoutUncheckedUpdateInput>
  }

  /**
   * CabinetLayout delete
   */
  export type CabinetLayoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetLayout
     */
    select?: CabinetLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetLayout
     */
    omit?: CabinetLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetLayoutInclude<ExtArgs> | null
    /**
     * Filter which CabinetLayout to delete.
     */
    where: CabinetLayoutWhereUniqueInput
  }

  /**
   * CabinetLayout deleteMany
   */
  export type CabinetLayoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CabinetLayouts to delete
     */
    where?: CabinetLayoutWhereInput
    /**
     * Limit how many CabinetLayouts to delete.
     */
    limit?: number
  }

  /**
   * CabinetLayout without action
   */
  export type CabinetLayoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetLayout
     */
    select?: CabinetLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CabinetLayout
     */
    omit?: CabinetLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetLayoutInclude<ExtArgs> | null
  }


  /**
   * Model SystemItem
   */

  export type AggregateSystemItem = {
    _count: SystemItemCountAggregateOutputType | null
    _avg: SystemItemAvgAggregateOutputType | null
    _sum: SystemItemSumAggregateOutputType | null
    _min: SystemItemMinAggregateOutputType | null
    _max: SystemItemMaxAggregateOutputType | null
  }

  export type SystemItemAvgAggregateOutputType = {
    id: number | null
  }

  export type SystemItemSumAggregateOutputType = {
    id: number | null
  }

  export type SystemItemMinAggregateOutputType = {
    id: number | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemItemMaxAggregateOutputType = {
    id: number | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemItemCountAggregateOutputType = {
    id: number
    type: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SystemItemAvgAggregateInputType = {
    id?: true
  }

  export type SystemItemSumAggregateInputType = {
    id?: true
  }

  export type SystemItemMinAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemItemMaxAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemItemCountAggregateInputType = {
    id?: true
    type?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemItem to aggregate.
     */
    where?: SystemItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemItems to fetch.
     */
    orderBy?: SystemItemOrderByWithRelationInput | SystemItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemItems
    **/
    _count?: true | SystemItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemItemMaxAggregateInputType
  }

  export type GetSystemItemAggregateType<T extends SystemItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemItem[P]>
      : GetScalarType<T[P], AggregateSystemItem[P]>
  }




  export type SystemItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemItemWhereInput
    orderBy?: SystemItemOrderByWithAggregationInput | SystemItemOrderByWithAggregationInput[]
    by: SystemItemScalarFieldEnum[] | SystemItemScalarFieldEnum
    having?: SystemItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemItemCountAggregateInputType | true
    _avg?: SystemItemAvgAggregateInputType
    _sum?: SystemItemSumAggregateInputType
    _min?: SystemItemMinAggregateInputType
    _max?: SystemItemMaxAggregateInputType
  }

  export type SystemItemGroupByOutputType = {
    id: number
    type: string
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: SystemItemCountAggregateOutputType | null
    _avg: SystemItemAvgAggregateOutputType | null
    _sum: SystemItemSumAggregateOutputType | null
    _min: SystemItemMinAggregateOutputType | null
    _max: SystemItemMaxAggregateOutputType | null
  }

  type GetSystemItemGroupByPayload<T extends SystemItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemItemGroupByOutputType[P]>
            : GetScalarType<T[P], SystemItemGroupByOutputType[P]>
        }
      >
    >


  export type SystemItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemItem"]>

  export type SystemItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemItem"]>

  export type SystemItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemItem"]>

  export type SystemItemSelectScalar = {
    id?: boolean
    type?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SystemItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["systemItem"]>

  export type $SystemItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["systemItem"]>
    composites: {}
  }

  type SystemItemGetPayload<S extends boolean | null | undefined | SystemItemDefaultArgs> = $Result.GetResult<Prisma.$SystemItemPayload, S>

  type SystemItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemItemCountAggregateInputType | true
    }

  export interface SystemItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemItem'], meta: { name: 'SystemItem' } }
    /**
     * Find zero or one SystemItem that matches the filter.
     * @param {SystemItemFindUniqueArgs} args - Arguments to find a SystemItem
     * @example
     * // Get one SystemItem
     * const systemItem = await prisma.systemItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemItemFindUniqueArgs>(args: SelectSubset<T, SystemItemFindUniqueArgs<ExtArgs>>): Prisma__SystemItemClient<$Result.GetResult<Prisma.$SystemItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemItemFindUniqueOrThrowArgs} args - Arguments to find a SystemItem
     * @example
     * // Get one SystemItem
     * const systemItem = await prisma.systemItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemItemClient<$Result.GetResult<Prisma.$SystemItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemItemFindFirstArgs} args - Arguments to find a SystemItem
     * @example
     * // Get one SystemItem
     * const systemItem = await prisma.systemItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemItemFindFirstArgs>(args?: SelectSubset<T, SystemItemFindFirstArgs<ExtArgs>>): Prisma__SystemItemClient<$Result.GetResult<Prisma.$SystemItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemItemFindFirstOrThrowArgs} args - Arguments to find a SystemItem
     * @example
     * // Get one SystemItem
     * const systemItem = await prisma.systemItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemItemClient<$Result.GetResult<Prisma.$SystemItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemItems
     * const systemItems = await prisma.systemItem.findMany()
     * 
     * // Get first 10 SystemItems
     * const systemItems = await prisma.systemItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemItemWithIdOnly = await prisma.systemItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemItemFindManyArgs>(args?: SelectSubset<T, SystemItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemItem.
     * @param {SystemItemCreateArgs} args - Arguments to create a SystemItem.
     * @example
     * // Create one SystemItem
     * const SystemItem = await prisma.systemItem.create({
     *   data: {
     *     // ... data to create a SystemItem
     *   }
     * })
     * 
     */
    create<T extends SystemItemCreateArgs>(args: SelectSubset<T, SystemItemCreateArgs<ExtArgs>>): Prisma__SystemItemClient<$Result.GetResult<Prisma.$SystemItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemItems.
     * @param {SystemItemCreateManyArgs} args - Arguments to create many SystemItems.
     * @example
     * // Create many SystemItems
     * const systemItem = await prisma.systemItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemItemCreateManyArgs>(args?: SelectSubset<T, SystemItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemItems and returns the data saved in the database.
     * @param {SystemItemCreateManyAndReturnArgs} args - Arguments to create many SystemItems.
     * @example
     * // Create many SystemItems
     * const systemItem = await prisma.systemItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemItems and only return the `id`
     * const systemItemWithIdOnly = await prisma.systemItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemItemCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemItem.
     * @param {SystemItemDeleteArgs} args - Arguments to delete one SystemItem.
     * @example
     * // Delete one SystemItem
     * const SystemItem = await prisma.systemItem.delete({
     *   where: {
     *     // ... filter to delete one SystemItem
     *   }
     * })
     * 
     */
    delete<T extends SystemItemDeleteArgs>(args: SelectSubset<T, SystemItemDeleteArgs<ExtArgs>>): Prisma__SystemItemClient<$Result.GetResult<Prisma.$SystemItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemItem.
     * @param {SystemItemUpdateArgs} args - Arguments to update one SystemItem.
     * @example
     * // Update one SystemItem
     * const systemItem = await prisma.systemItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemItemUpdateArgs>(args: SelectSubset<T, SystemItemUpdateArgs<ExtArgs>>): Prisma__SystemItemClient<$Result.GetResult<Prisma.$SystemItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemItems.
     * @param {SystemItemDeleteManyArgs} args - Arguments to filter SystemItems to delete.
     * @example
     * // Delete a few SystemItems
     * const { count } = await prisma.systemItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemItemDeleteManyArgs>(args?: SelectSubset<T, SystemItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemItems
     * const systemItem = await prisma.systemItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemItemUpdateManyArgs>(args: SelectSubset<T, SystemItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemItems and returns the data updated in the database.
     * @param {SystemItemUpdateManyAndReturnArgs} args - Arguments to update many SystemItems.
     * @example
     * // Update many SystemItems
     * const systemItem = await prisma.systemItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemItems and only return the `id`
     * const systemItemWithIdOnly = await prisma.systemItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemItemUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemItem.
     * @param {SystemItemUpsertArgs} args - Arguments to update or create a SystemItem.
     * @example
     * // Update or create a SystemItem
     * const systemItem = await prisma.systemItem.upsert({
     *   create: {
     *     // ... data to create a SystemItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemItem we want to update
     *   }
     * })
     */
    upsert<T extends SystemItemUpsertArgs>(args: SelectSubset<T, SystemItemUpsertArgs<ExtArgs>>): Prisma__SystemItemClient<$Result.GetResult<Prisma.$SystemItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemItemCountArgs} args - Arguments to filter SystemItems to count.
     * @example
     * // Count the number of SystemItems
     * const count = await prisma.systemItem.count({
     *   where: {
     *     // ... the filter for the SystemItems we want to count
     *   }
     * })
    **/
    count<T extends SystemItemCountArgs>(
      args?: Subset<T, SystemItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemItemAggregateArgs>(args: Subset<T, SystemItemAggregateArgs>): Prisma.PrismaPromise<GetSystemItemAggregateType<T>>

    /**
     * Group by SystemItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemItemGroupByArgs['orderBy'] }
        : { orderBy?: SystemItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemItem model
   */
  readonly fields: SystemItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemItem model
   */
  interface SystemItemFieldRefs {
    readonly id: FieldRef<"SystemItem", 'Int'>
    readonly type: FieldRef<"SystemItem", 'String'>
    readonly metadata: FieldRef<"SystemItem", 'Json'>
    readonly createdAt: FieldRef<"SystemItem", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemItem findUnique
   */
  export type SystemItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemItem
     */
    select?: SystemItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemItem
     */
    omit?: SystemItemOmit<ExtArgs> | null
    /**
     * Filter, which SystemItem to fetch.
     */
    where: SystemItemWhereUniqueInput
  }

  /**
   * SystemItem findUniqueOrThrow
   */
  export type SystemItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemItem
     */
    select?: SystemItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemItem
     */
    omit?: SystemItemOmit<ExtArgs> | null
    /**
     * Filter, which SystemItem to fetch.
     */
    where: SystemItemWhereUniqueInput
  }

  /**
   * SystemItem findFirst
   */
  export type SystemItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemItem
     */
    select?: SystemItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemItem
     */
    omit?: SystemItemOmit<ExtArgs> | null
    /**
     * Filter, which SystemItem to fetch.
     */
    where?: SystemItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemItems to fetch.
     */
    orderBy?: SystemItemOrderByWithRelationInput | SystemItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemItems.
     */
    cursor?: SystemItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemItems.
     */
    distinct?: SystemItemScalarFieldEnum | SystemItemScalarFieldEnum[]
  }

  /**
   * SystemItem findFirstOrThrow
   */
  export type SystemItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemItem
     */
    select?: SystemItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemItem
     */
    omit?: SystemItemOmit<ExtArgs> | null
    /**
     * Filter, which SystemItem to fetch.
     */
    where?: SystemItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemItems to fetch.
     */
    orderBy?: SystemItemOrderByWithRelationInput | SystemItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemItems.
     */
    cursor?: SystemItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemItems.
     */
    distinct?: SystemItemScalarFieldEnum | SystemItemScalarFieldEnum[]
  }

  /**
   * SystemItem findMany
   */
  export type SystemItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemItem
     */
    select?: SystemItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemItem
     */
    omit?: SystemItemOmit<ExtArgs> | null
    /**
     * Filter, which SystemItems to fetch.
     */
    where?: SystemItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemItems to fetch.
     */
    orderBy?: SystemItemOrderByWithRelationInput | SystemItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemItems.
     */
    cursor?: SystemItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemItems.
     */
    skip?: number
    distinct?: SystemItemScalarFieldEnum | SystemItemScalarFieldEnum[]
  }

  /**
   * SystemItem create
   */
  export type SystemItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemItem
     */
    select?: SystemItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemItem
     */
    omit?: SystemItemOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemItem.
     */
    data: XOR<SystemItemCreateInput, SystemItemUncheckedCreateInput>
  }

  /**
   * SystemItem createMany
   */
  export type SystemItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemItems.
     */
    data: SystemItemCreateManyInput | SystemItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemItem createManyAndReturn
   */
  export type SystemItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemItem
     */
    select?: SystemItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemItem
     */
    omit?: SystemItemOmit<ExtArgs> | null
    /**
     * The data used to create many SystemItems.
     */
    data: SystemItemCreateManyInput | SystemItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemItem update
   */
  export type SystemItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemItem
     */
    select?: SystemItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemItem
     */
    omit?: SystemItemOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemItem.
     */
    data: XOR<SystemItemUpdateInput, SystemItemUncheckedUpdateInput>
    /**
     * Choose, which SystemItem to update.
     */
    where: SystemItemWhereUniqueInput
  }

  /**
   * SystemItem updateMany
   */
  export type SystemItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemItems.
     */
    data: XOR<SystemItemUpdateManyMutationInput, SystemItemUncheckedUpdateManyInput>
    /**
     * Filter which SystemItems to update
     */
    where?: SystemItemWhereInput
    /**
     * Limit how many SystemItems to update.
     */
    limit?: number
  }

  /**
   * SystemItem updateManyAndReturn
   */
  export type SystemItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemItem
     */
    select?: SystemItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemItem
     */
    omit?: SystemItemOmit<ExtArgs> | null
    /**
     * The data used to update SystemItems.
     */
    data: XOR<SystemItemUpdateManyMutationInput, SystemItemUncheckedUpdateManyInput>
    /**
     * Filter which SystemItems to update
     */
    where?: SystemItemWhereInput
    /**
     * Limit how many SystemItems to update.
     */
    limit?: number
  }

  /**
   * SystemItem upsert
   */
  export type SystemItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemItem
     */
    select?: SystemItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemItem
     */
    omit?: SystemItemOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemItem to update in case it exists.
     */
    where: SystemItemWhereUniqueInput
    /**
     * In case the SystemItem found by the `where` argument doesn't exist, create a new SystemItem with this data.
     */
    create: XOR<SystemItemCreateInput, SystemItemUncheckedCreateInput>
    /**
     * In case the SystemItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemItemUpdateInput, SystemItemUncheckedUpdateInput>
  }

  /**
   * SystemItem delete
   */
  export type SystemItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemItem
     */
    select?: SystemItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemItem
     */
    omit?: SystemItemOmit<ExtArgs> | null
    /**
     * Filter which SystemItem to delete.
     */
    where: SystemItemWhereUniqueInput
  }

  /**
   * SystemItem deleteMany
   */
  export type SystemItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemItems to delete
     */
    where?: SystemItemWhereInput
    /**
     * Limit how many SystemItems to delete.
     */
    limit?: number
  }

  /**
   * SystemItem without action
   */
  export type SystemItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemItem
     */
    select?: SystemItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemItem
     */
    omit?: SystemItemOmit<ExtArgs> | null
  }


  /**
   * Model Chest
   */

  export type AggregateChest = {
    _count: ChestCountAggregateOutputType | null
    _avg: ChestAvgAggregateOutputType | null
    _sum: ChestSumAggregateOutputType | null
    _min: ChestMinAggregateOutputType | null
    _max: ChestMaxAggregateOutputType | null
  }

  export type ChestAvgAggregateOutputType = {
    id: number | null
    cabinetId: number | null
  }

  export type ChestSumAggregateOutputType = {
    id: number | null
    cabinetId: number | null
  }

  export type ChestMinAggregateOutputType = {
    id: number | null
    passcode: string | null
    cabinetId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChestMaxAggregateOutputType = {
    id: number | null
    passcode: string | null
    cabinetId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChestCountAggregateOutputType = {
    id: number
    passcode: number
    position: number
    items: number
    cabinetId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChestAvgAggregateInputType = {
    id?: true
    cabinetId?: true
  }

  export type ChestSumAggregateInputType = {
    id?: true
    cabinetId?: true
  }

  export type ChestMinAggregateInputType = {
    id?: true
    passcode?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChestMaxAggregateInputType = {
    id?: true
    passcode?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChestCountAggregateInputType = {
    id?: true
    passcode?: true
    position?: true
    items?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chest to aggregate.
     */
    where?: ChestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chests to fetch.
     */
    orderBy?: ChestOrderByWithRelationInput | ChestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chests
    **/
    _count?: true | ChestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChestMaxAggregateInputType
  }

  export type GetChestAggregateType<T extends ChestAggregateArgs> = {
        [P in keyof T & keyof AggregateChest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChest[P]>
      : GetScalarType<T[P], AggregateChest[P]>
  }




  export type ChestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChestWhereInput
    orderBy?: ChestOrderByWithAggregationInput | ChestOrderByWithAggregationInput[]
    by: ChestScalarFieldEnum[] | ChestScalarFieldEnum
    having?: ChestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChestCountAggregateInputType | true
    _avg?: ChestAvgAggregateInputType
    _sum?: ChestSumAggregateInputType
    _min?: ChestMinAggregateInputType
    _max?: ChestMaxAggregateInputType
  }

  export type ChestGroupByOutputType = {
    id: number
    passcode: string
    position: JsonValue | null
    items: JsonValue | null
    cabinetId: number
    createdAt: Date
    updatedAt: Date
    _count: ChestCountAggregateOutputType | null
    _avg: ChestAvgAggregateOutputType | null
    _sum: ChestSumAggregateOutputType | null
    _min: ChestMinAggregateOutputType | null
    _max: ChestMaxAggregateOutputType | null
  }

  type GetChestGroupByPayload<T extends ChestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChestGroupByOutputType[P]>
            : GetScalarType<T[P], ChestGroupByOutputType[P]>
        }
      >
    >


  export type ChestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passcode?: boolean
    position?: boolean
    items?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chest"]>

  export type ChestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passcode?: boolean
    position?: boolean
    items?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chest"]>

  export type ChestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passcode?: boolean
    position?: boolean
    items?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chest"]>

  export type ChestSelectScalar = {
    id?: boolean
    passcode?: boolean
    position?: boolean
    items?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "passcode" | "position" | "items" | "cabinetId" | "createdAt" | "updatedAt", ExtArgs["result"]["chest"]>
  export type ChestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type ChestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type ChestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }

  export type $ChestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chest"
    objects: {
      cabinet: Prisma.$CabinetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      passcode: string
      position: Prisma.JsonValue | null
      items: Prisma.JsonValue | null
      cabinetId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chest"]>
    composites: {}
  }

  type ChestGetPayload<S extends boolean | null | undefined | ChestDefaultArgs> = $Result.GetResult<Prisma.$ChestPayload, S>

  type ChestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChestCountAggregateInputType | true
    }

  export interface ChestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chest'], meta: { name: 'Chest' } }
    /**
     * Find zero or one Chest that matches the filter.
     * @param {ChestFindUniqueArgs} args - Arguments to find a Chest
     * @example
     * // Get one Chest
     * const chest = await prisma.chest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChestFindUniqueArgs>(args: SelectSubset<T, ChestFindUniqueArgs<ExtArgs>>): Prisma__ChestClient<$Result.GetResult<Prisma.$ChestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChestFindUniqueOrThrowArgs} args - Arguments to find a Chest
     * @example
     * // Get one Chest
     * const chest = await prisma.chest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChestFindUniqueOrThrowArgs>(args: SelectSubset<T, ChestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChestClient<$Result.GetResult<Prisma.$ChestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChestFindFirstArgs} args - Arguments to find a Chest
     * @example
     * // Get one Chest
     * const chest = await prisma.chest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChestFindFirstArgs>(args?: SelectSubset<T, ChestFindFirstArgs<ExtArgs>>): Prisma__ChestClient<$Result.GetResult<Prisma.$ChestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChestFindFirstOrThrowArgs} args - Arguments to find a Chest
     * @example
     * // Get one Chest
     * const chest = await prisma.chest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChestFindFirstOrThrowArgs>(args?: SelectSubset<T, ChestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChestClient<$Result.GetResult<Prisma.$ChestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chests
     * const chests = await prisma.chest.findMany()
     * 
     * // Get first 10 Chests
     * const chests = await prisma.chest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chestWithIdOnly = await prisma.chest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChestFindManyArgs>(args?: SelectSubset<T, ChestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chest.
     * @param {ChestCreateArgs} args - Arguments to create a Chest.
     * @example
     * // Create one Chest
     * const Chest = await prisma.chest.create({
     *   data: {
     *     // ... data to create a Chest
     *   }
     * })
     * 
     */
    create<T extends ChestCreateArgs>(args: SelectSubset<T, ChestCreateArgs<ExtArgs>>): Prisma__ChestClient<$Result.GetResult<Prisma.$ChestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chests.
     * @param {ChestCreateManyArgs} args - Arguments to create many Chests.
     * @example
     * // Create many Chests
     * const chest = await prisma.chest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChestCreateManyArgs>(args?: SelectSubset<T, ChestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chests and returns the data saved in the database.
     * @param {ChestCreateManyAndReturnArgs} args - Arguments to create many Chests.
     * @example
     * // Create many Chests
     * const chest = await prisma.chest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chests and only return the `id`
     * const chestWithIdOnly = await prisma.chest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChestCreateManyAndReturnArgs>(args?: SelectSubset<T, ChestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chest.
     * @param {ChestDeleteArgs} args - Arguments to delete one Chest.
     * @example
     * // Delete one Chest
     * const Chest = await prisma.chest.delete({
     *   where: {
     *     // ... filter to delete one Chest
     *   }
     * })
     * 
     */
    delete<T extends ChestDeleteArgs>(args: SelectSubset<T, ChestDeleteArgs<ExtArgs>>): Prisma__ChestClient<$Result.GetResult<Prisma.$ChestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chest.
     * @param {ChestUpdateArgs} args - Arguments to update one Chest.
     * @example
     * // Update one Chest
     * const chest = await prisma.chest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChestUpdateArgs>(args: SelectSubset<T, ChestUpdateArgs<ExtArgs>>): Prisma__ChestClient<$Result.GetResult<Prisma.$ChestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chests.
     * @param {ChestDeleteManyArgs} args - Arguments to filter Chests to delete.
     * @example
     * // Delete a few Chests
     * const { count } = await prisma.chest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChestDeleteManyArgs>(args?: SelectSubset<T, ChestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chests
     * const chest = await prisma.chest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChestUpdateManyArgs>(args: SelectSubset<T, ChestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chests and returns the data updated in the database.
     * @param {ChestUpdateManyAndReturnArgs} args - Arguments to update many Chests.
     * @example
     * // Update many Chests
     * const chest = await prisma.chest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chests and only return the `id`
     * const chestWithIdOnly = await prisma.chest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChestUpdateManyAndReturnArgs>(args: SelectSubset<T, ChestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chest.
     * @param {ChestUpsertArgs} args - Arguments to update or create a Chest.
     * @example
     * // Update or create a Chest
     * const chest = await prisma.chest.upsert({
     *   create: {
     *     // ... data to create a Chest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chest we want to update
     *   }
     * })
     */
    upsert<T extends ChestUpsertArgs>(args: SelectSubset<T, ChestUpsertArgs<ExtArgs>>): Prisma__ChestClient<$Result.GetResult<Prisma.$ChestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChestCountArgs} args - Arguments to filter Chests to count.
     * @example
     * // Count the number of Chests
     * const count = await prisma.chest.count({
     *   where: {
     *     // ... the filter for the Chests we want to count
     *   }
     * })
    **/
    count<T extends ChestCountArgs>(
      args?: Subset<T, ChestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChestAggregateArgs>(args: Subset<T, ChestAggregateArgs>): Prisma.PrismaPromise<GetChestAggregateType<T>>

    /**
     * Group by Chest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChestGroupByArgs['orderBy'] }
        : { orderBy?: ChestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chest model
   */
  readonly fields: ChestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cabinet<T extends CabinetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CabinetDefaultArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chest model
   */
  interface ChestFieldRefs {
    readonly id: FieldRef<"Chest", 'Int'>
    readonly passcode: FieldRef<"Chest", 'String'>
    readonly position: FieldRef<"Chest", 'Json'>
    readonly items: FieldRef<"Chest", 'Json'>
    readonly cabinetId: FieldRef<"Chest", 'Int'>
    readonly createdAt: FieldRef<"Chest", 'DateTime'>
    readonly updatedAt: FieldRef<"Chest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chest findUnique
   */
  export type ChestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chest
     */
    select?: ChestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chest
     */
    omit?: ChestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChestInclude<ExtArgs> | null
    /**
     * Filter, which Chest to fetch.
     */
    where: ChestWhereUniqueInput
  }

  /**
   * Chest findUniqueOrThrow
   */
  export type ChestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chest
     */
    select?: ChestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chest
     */
    omit?: ChestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChestInclude<ExtArgs> | null
    /**
     * Filter, which Chest to fetch.
     */
    where: ChestWhereUniqueInput
  }

  /**
   * Chest findFirst
   */
  export type ChestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chest
     */
    select?: ChestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chest
     */
    omit?: ChestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChestInclude<ExtArgs> | null
    /**
     * Filter, which Chest to fetch.
     */
    where?: ChestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chests to fetch.
     */
    orderBy?: ChestOrderByWithRelationInput | ChestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chests.
     */
    cursor?: ChestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chests.
     */
    distinct?: ChestScalarFieldEnum | ChestScalarFieldEnum[]
  }

  /**
   * Chest findFirstOrThrow
   */
  export type ChestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chest
     */
    select?: ChestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chest
     */
    omit?: ChestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChestInclude<ExtArgs> | null
    /**
     * Filter, which Chest to fetch.
     */
    where?: ChestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chests to fetch.
     */
    orderBy?: ChestOrderByWithRelationInput | ChestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chests.
     */
    cursor?: ChestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chests.
     */
    distinct?: ChestScalarFieldEnum | ChestScalarFieldEnum[]
  }

  /**
   * Chest findMany
   */
  export type ChestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chest
     */
    select?: ChestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chest
     */
    omit?: ChestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChestInclude<ExtArgs> | null
    /**
     * Filter, which Chests to fetch.
     */
    where?: ChestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chests to fetch.
     */
    orderBy?: ChestOrderByWithRelationInput | ChestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chests.
     */
    cursor?: ChestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chests.
     */
    skip?: number
    distinct?: ChestScalarFieldEnum | ChestScalarFieldEnum[]
  }

  /**
   * Chest create
   */
  export type ChestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chest
     */
    select?: ChestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chest
     */
    omit?: ChestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChestInclude<ExtArgs> | null
    /**
     * The data needed to create a Chest.
     */
    data: XOR<ChestCreateInput, ChestUncheckedCreateInput>
  }

  /**
   * Chest createMany
   */
  export type ChestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chests.
     */
    data: ChestCreateManyInput | ChestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chest createManyAndReturn
   */
  export type ChestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chest
     */
    select?: ChestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chest
     */
    omit?: ChestOmit<ExtArgs> | null
    /**
     * The data used to create many Chests.
     */
    data: ChestCreateManyInput | ChestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chest update
   */
  export type ChestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chest
     */
    select?: ChestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chest
     */
    omit?: ChestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChestInclude<ExtArgs> | null
    /**
     * The data needed to update a Chest.
     */
    data: XOR<ChestUpdateInput, ChestUncheckedUpdateInput>
    /**
     * Choose, which Chest to update.
     */
    where: ChestWhereUniqueInput
  }

  /**
   * Chest updateMany
   */
  export type ChestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chests.
     */
    data: XOR<ChestUpdateManyMutationInput, ChestUncheckedUpdateManyInput>
    /**
     * Filter which Chests to update
     */
    where?: ChestWhereInput
    /**
     * Limit how many Chests to update.
     */
    limit?: number
  }

  /**
   * Chest updateManyAndReturn
   */
  export type ChestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chest
     */
    select?: ChestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chest
     */
    omit?: ChestOmit<ExtArgs> | null
    /**
     * The data used to update Chests.
     */
    data: XOR<ChestUpdateManyMutationInput, ChestUncheckedUpdateManyInput>
    /**
     * Filter which Chests to update
     */
    where?: ChestWhereInput
    /**
     * Limit how many Chests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chest upsert
   */
  export type ChestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chest
     */
    select?: ChestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chest
     */
    omit?: ChestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChestInclude<ExtArgs> | null
    /**
     * The filter to search for the Chest to update in case it exists.
     */
    where: ChestWhereUniqueInput
    /**
     * In case the Chest found by the `where` argument doesn't exist, create a new Chest with this data.
     */
    create: XOR<ChestCreateInput, ChestUncheckedCreateInput>
    /**
     * In case the Chest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChestUpdateInput, ChestUncheckedUpdateInput>
  }

  /**
   * Chest delete
   */
  export type ChestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chest
     */
    select?: ChestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chest
     */
    omit?: ChestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChestInclude<ExtArgs> | null
    /**
     * Filter which Chest to delete.
     */
    where: ChestWhereUniqueInput
  }

  /**
   * Chest deleteMany
   */
  export type ChestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chests to delete
     */
    where?: ChestWhereInput
    /**
     * Limit how many Chests to delete.
     */
    limit?: number
  }

  /**
   * Chest without action
   */
  export type ChestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chest
     */
    select?: ChestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chest
     */
    omit?: ChestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChestInclude<ExtArgs> | null
  }


  /**
   * Model Journal
   */

  export type AggregateJournal = {
    _count: JournalCountAggregateOutputType | null
    _avg: JournalAvgAggregateOutputType | null
    _sum: JournalSumAggregateOutputType | null
    _min: JournalMinAggregateOutputType | null
    _max: JournalMaxAggregateOutputType | null
  }

  export type JournalAvgAggregateOutputType = {
    id: number | null
    cabinetId: number | null
  }

  export type JournalSumAggregateOutputType = {
    id: number | null
    cabinetId: number | null
  }

  export type JournalMinAggregateOutputType = {
    id: number | null
    passcode: string | null
    cabinetId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JournalMaxAggregateOutputType = {
    id: number | null
    passcode: string | null
    cabinetId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JournalCountAggregateOutputType = {
    id: number
    passcode: number
    position: number
    entries: number
    cabinetId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JournalAvgAggregateInputType = {
    id?: true
    cabinetId?: true
  }

  export type JournalSumAggregateInputType = {
    id?: true
    cabinetId?: true
  }

  export type JournalMinAggregateInputType = {
    id?: true
    passcode?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JournalMaxAggregateInputType = {
    id?: true
    passcode?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JournalCountAggregateInputType = {
    id?: true
    passcode?: true
    position?: true
    entries?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JournalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Journal to aggregate.
     */
    where?: JournalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journals to fetch.
     */
    orderBy?: JournalOrderByWithRelationInput | JournalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JournalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Journals
    **/
    _count?: true | JournalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JournalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JournalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JournalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JournalMaxAggregateInputType
  }

  export type GetJournalAggregateType<T extends JournalAggregateArgs> = {
        [P in keyof T & keyof AggregateJournal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJournal[P]>
      : GetScalarType<T[P], AggregateJournal[P]>
  }




  export type JournalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalWhereInput
    orderBy?: JournalOrderByWithAggregationInput | JournalOrderByWithAggregationInput[]
    by: JournalScalarFieldEnum[] | JournalScalarFieldEnum
    having?: JournalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JournalCountAggregateInputType | true
    _avg?: JournalAvgAggregateInputType
    _sum?: JournalSumAggregateInputType
    _min?: JournalMinAggregateInputType
    _max?: JournalMaxAggregateInputType
  }

  export type JournalGroupByOutputType = {
    id: number
    passcode: string
    position: JsonValue | null
    entries: JsonValue
    cabinetId: number
    createdAt: Date
    updatedAt: Date
    _count: JournalCountAggregateOutputType | null
    _avg: JournalAvgAggregateOutputType | null
    _sum: JournalSumAggregateOutputType | null
    _min: JournalMinAggregateOutputType | null
    _max: JournalMaxAggregateOutputType | null
  }

  type GetJournalGroupByPayload<T extends JournalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JournalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JournalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JournalGroupByOutputType[P]>
            : GetScalarType<T[P], JournalGroupByOutputType[P]>
        }
      >
    >


  export type JournalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passcode?: boolean
    position?: boolean
    entries?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journal"]>

  export type JournalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passcode?: boolean
    position?: boolean
    entries?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journal"]>

  export type JournalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passcode?: boolean
    position?: boolean
    entries?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journal"]>

  export type JournalSelectScalar = {
    id?: boolean
    passcode?: boolean
    position?: boolean
    entries?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JournalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "passcode" | "position" | "entries" | "cabinetId" | "createdAt" | "updatedAt", ExtArgs["result"]["journal"]>
  export type JournalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type JournalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type JournalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }

  export type $JournalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Journal"
    objects: {
      cabinet: Prisma.$CabinetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      passcode: string
      position: Prisma.JsonValue | null
      entries: Prisma.JsonValue
      cabinetId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["journal"]>
    composites: {}
  }

  type JournalGetPayload<S extends boolean | null | undefined | JournalDefaultArgs> = $Result.GetResult<Prisma.$JournalPayload, S>

  type JournalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JournalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JournalCountAggregateInputType | true
    }

  export interface JournalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Journal'], meta: { name: 'Journal' } }
    /**
     * Find zero or one Journal that matches the filter.
     * @param {JournalFindUniqueArgs} args - Arguments to find a Journal
     * @example
     * // Get one Journal
     * const journal = await prisma.journal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JournalFindUniqueArgs>(args: SelectSubset<T, JournalFindUniqueArgs<ExtArgs>>): Prisma__JournalClient<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Journal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JournalFindUniqueOrThrowArgs} args - Arguments to find a Journal
     * @example
     * // Get one Journal
     * const journal = await prisma.journal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JournalFindUniqueOrThrowArgs>(args: SelectSubset<T, JournalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JournalClient<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Journal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalFindFirstArgs} args - Arguments to find a Journal
     * @example
     * // Get one Journal
     * const journal = await prisma.journal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JournalFindFirstArgs>(args?: SelectSubset<T, JournalFindFirstArgs<ExtArgs>>): Prisma__JournalClient<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Journal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalFindFirstOrThrowArgs} args - Arguments to find a Journal
     * @example
     * // Get one Journal
     * const journal = await prisma.journal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JournalFindFirstOrThrowArgs>(args?: SelectSubset<T, JournalFindFirstOrThrowArgs<ExtArgs>>): Prisma__JournalClient<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Journals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Journals
     * const journals = await prisma.journal.findMany()
     * 
     * // Get first 10 Journals
     * const journals = await prisma.journal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const journalWithIdOnly = await prisma.journal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JournalFindManyArgs>(args?: SelectSubset<T, JournalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Journal.
     * @param {JournalCreateArgs} args - Arguments to create a Journal.
     * @example
     * // Create one Journal
     * const Journal = await prisma.journal.create({
     *   data: {
     *     // ... data to create a Journal
     *   }
     * })
     * 
     */
    create<T extends JournalCreateArgs>(args: SelectSubset<T, JournalCreateArgs<ExtArgs>>): Prisma__JournalClient<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Journals.
     * @param {JournalCreateManyArgs} args - Arguments to create many Journals.
     * @example
     * // Create many Journals
     * const journal = await prisma.journal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JournalCreateManyArgs>(args?: SelectSubset<T, JournalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Journals and returns the data saved in the database.
     * @param {JournalCreateManyAndReturnArgs} args - Arguments to create many Journals.
     * @example
     * // Create many Journals
     * const journal = await prisma.journal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Journals and only return the `id`
     * const journalWithIdOnly = await prisma.journal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JournalCreateManyAndReturnArgs>(args?: SelectSubset<T, JournalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Journal.
     * @param {JournalDeleteArgs} args - Arguments to delete one Journal.
     * @example
     * // Delete one Journal
     * const Journal = await prisma.journal.delete({
     *   where: {
     *     // ... filter to delete one Journal
     *   }
     * })
     * 
     */
    delete<T extends JournalDeleteArgs>(args: SelectSubset<T, JournalDeleteArgs<ExtArgs>>): Prisma__JournalClient<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Journal.
     * @param {JournalUpdateArgs} args - Arguments to update one Journal.
     * @example
     * // Update one Journal
     * const journal = await prisma.journal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JournalUpdateArgs>(args: SelectSubset<T, JournalUpdateArgs<ExtArgs>>): Prisma__JournalClient<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Journals.
     * @param {JournalDeleteManyArgs} args - Arguments to filter Journals to delete.
     * @example
     * // Delete a few Journals
     * const { count } = await prisma.journal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JournalDeleteManyArgs>(args?: SelectSubset<T, JournalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Journals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Journals
     * const journal = await prisma.journal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JournalUpdateManyArgs>(args: SelectSubset<T, JournalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Journals and returns the data updated in the database.
     * @param {JournalUpdateManyAndReturnArgs} args - Arguments to update many Journals.
     * @example
     * // Update many Journals
     * const journal = await prisma.journal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Journals and only return the `id`
     * const journalWithIdOnly = await prisma.journal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JournalUpdateManyAndReturnArgs>(args: SelectSubset<T, JournalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Journal.
     * @param {JournalUpsertArgs} args - Arguments to update or create a Journal.
     * @example
     * // Update or create a Journal
     * const journal = await prisma.journal.upsert({
     *   create: {
     *     // ... data to create a Journal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Journal we want to update
     *   }
     * })
     */
    upsert<T extends JournalUpsertArgs>(args: SelectSubset<T, JournalUpsertArgs<ExtArgs>>): Prisma__JournalClient<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Journals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalCountArgs} args - Arguments to filter Journals to count.
     * @example
     * // Count the number of Journals
     * const count = await prisma.journal.count({
     *   where: {
     *     // ... the filter for the Journals we want to count
     *   }
     * })
    **/
    count<T extends JournalCountArgs>(
      args?: Subset<T, JournalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JournalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Journal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JournalAggregateArgs>(args: Subset<T, JournalAggregateArgs>): Prisma.PrismaPromise<GetJournalAggregateType<T>>

    /**
     * Group by Journal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JournalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JournalGroupByArgs['orderBy'] }
        : { orderBy?: JournalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JournalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJournalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Journal model
   */
  readonly fields: JournalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Journal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JournalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cabinet<T extends CabinetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CabinetDefaultArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Journal model
   */
  interface JournalFieldRefs {
    readonly id: FieldRef<"Journal", 'Int'>
    readonly passcode: FieldRef<"Journal", 'String'>
    readonly position: FieldRef<"Journal", 'Json'>
    readonly entries: FieldRef<"Journal", 'Json'>
    readonly cabinetId: FieldRef<"Journal", 'Int'>
    readonly createdAt: FieldRef<"Journal", 'DateTime'>
    readonly updatedAt: FieldRef<"Journal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Journal findUnique
   */
  export type JournalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalInclude<ExtArgs> | null
    /**
     * Filter, which Journal to fetch.
     */
    where: JournalWhereUniqueInput
  }

  /**
   * Journal findUniqueOrThrow
   */
  export type JournalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalInclude<ExtArgs> | null
    /**
     * Filter, which Journal to fetch.
     */
    where: JournalWhereUniqueInput
  }

  /**
   * Journal findFirst
   */
  export type JournalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalInclude<ExtArgs> | null
    /**
     * Filter, which Journal to fetch.
     */
    where?: JournalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journals to fetch.
     */
    orderBy?: JournalOrderByWithRelationInput | JournalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Journals.
     */
    cursor?: JournalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Journals.
     */
    distinct?: JournalScalarFieldEnum | JournalScalarFieldEnum[]
  }

  /**
   * Journal findFirstOrThrow
   */
  export type JournalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalInclude<ExtArgs> | null
    /**
     * Filter, which Journal to fetch.
     */
    where?: JournalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journals to fetch.
     */
    orderBy?: JournalOrderByWithRelationInput | JournalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Journals.
     */
    cursor?: JournalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Journals.
     */
    distinct?: JournalScalarFieldEnum | JournalScalarFieldEnum[]
  }

  /**
   * Journal findMany
   */
  export type JournalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalInclude<ExtArgs> | null
    /**
     * Filter, which Journals to fetch.
     */
    where?: JournalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journals to fetch.
     */
    orderBy?: JournalOrderByWithRelationInput | JournalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Journals.
     */
    cursor?: JournalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journals.
     */
    skip?: number
    distinct?: JournalScalarFieldEnum | JournalScalarFieldEnum[]
  }

  /**
   * Journal create
   */
  export type JournalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalInclude<ExtArgs> | null
    /**
     * The data needed to create a Journal.
     */
    data: XOR<JournalCreateInput, JournalUncheckedCreateInput>
  }

  /**
   * Journal createMany
   */
  export type JournalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Journals.
     */
    data: JournalCreateManyInput | JournalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Journal createManyAndReturn
   */
  export type JournalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * The data used to create many Journals.
     */
    data: JournalCreateManyInput | JournalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Journal update
   */
  export type JournalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalInclude<ExtArgs> | null
    /**
     * The data needed to update a Journal.
     */
    data: XOR<JournalUpdateInput, JournalUncheckedUpdateInput>
    /**
     * Choose, which Journal to update.
     */
    where: JournalWhereUniqueInput
  }

  /**
   * Journal updateMany
   */
  export type JournalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Journals.
     */
    data: XOR<JournalUpdateManyMutationInput, JournalUncheckedUpdateManyInput>
    /**
     * Filter which Journals to update
     */
    where?: JournalWhereInput
    /**
     * Limit how many Journals to update.
     */
    limit?: number
  }

  /**
   * Journal updateManyAndReturn
   */
  export type JournalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * The data used to update Journals.
     */
    data: XOR<JournalUpdateManyMutationInput, JournalUncheckedUpdateManyInput>
    /**
     * Filter which Journals to update
     */
    where?: JournalWhereInput
    /**
     * Limit how many Journals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Journal upsert
   */
  export type JournalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalInclude<ExtArgs> | null
    /**
     * The filter to search for the Journal to update in case it exists.
     */
    where: JournalWhereUniqueInput
    /**
     * In case the Journal found by the `where` argument doesn't exist, create a new Journal with this data.
     */
    create: XOR<JournalCreateInput, JournalUncheckedCreateInput>
    /**
     * In case the Journal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JournalUpdateInput, JournalUncheckedUpdateInput>
  }

  /**
   * Journal delete
   */
  export type JournalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalInclude<ExtArgs> | null
    /**
     * Filter which Journal to delete.
     */
    where: JournalWhereUniqueInput
  }

  /**
   * Journal deleteMany
   */
  export type JournalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Journals to delete
     */
    where?: JournalWhereInput
    /**
     * Limit how many Journals to delete.
     */
    limit?: number
  }

  /**
   * Journal without action
   */
  export type JournalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journal
     */
    select?: JournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journal
     */
    omit?: JournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalInclude<ExtArgs> | null
  }


  /**
   * Model PhotoFrame
   */

  export type AggregatePhotoFrame = {
    _count: PhotoFrameCountAggregateOutputType | null
    _avg: PhotoFrameAvgAggregateOutputType | null
    _sum: PhotoFrameSumAggregateOutputType | null
    _min: PhotoFrameMinAggregateOutputType | null
    _max: PhotoFrameMaxAggregateOutputType | null
  }

  export type PhotoFrameAvgAggregateOutputType = {
    id: number | null
    cabinetId: number | null
  }

  export type PhotoFrameSumAggregateOutputType = {
    id: number | null
    cabinetId: number | null
  }

  export type PhotoFrameMinAggregateOutputType = {
    id: number | null
    url: string | null
    caption: string | null
    cabinetId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhotoFrameMaxAggregateOutputType = {
    id: number | null
    url: string | null
    caption: string | null
    cabinetId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhotoFrameCountAggregateOutputType = {
    id: number
    position: number
    url: number
    caption: number
    metadata: number
    cabinetId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PhotoFrameAvgAggregateInputType = {
    id?: true
    cabinetId?: true
  }

  export type PhotoFrameSumAggregateInputType = {
    id?: true
    cabinetId?: true
  }

  export type PhotoFrameMinAggregateInputType = {
    id?: true
    url?: true
    caption?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhotoFrameMaxAggregateInputType = {
    id?: true
    url?: true
    caption?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhotoFrameCountAggregateInputType = {
    id?: true
    position?: true
    url?: true
    caption?: true
    metadata?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PhotoFrameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoFrame to aggregate.
     */
    where?: PhotoFrameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoFrames to fetch.
     */
    orderBy?: PhotoFrameOrderByWithRelationInput | PhotoFrameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoFrameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoFrames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoFrames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhotoFrames
    **/
    _count?: true | PhotoFrameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoFrameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoFrameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoFrameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoFrameMaxAggregateInputType
  }

  export type GetPhotoFrameAggregateType<T extends PhotoFrameAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotoFrame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotoFrame[P]>
      : GetScalarType<T[P], AggregatePhotoFrame[P]>
  }




  export type PhotoFrameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoFrameWhereInput
    orderBy?: PhotoFrameOrderByWithAggregationInput | PhotoFrameOrderByWithAggregationInput[]
    by: PhotoFrameScalarFieldEnum[] | PhotoFrameScalarFieldEnum
    having?: PhotoFrameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoFrameCountAggregateInputType | true
    _avg?: PhotoFrameAvgAggregateInputType
    _sum?: PhotoFrameSumAggregateInputType
    _min?: PhotoFrameMinAggregateInputType
    _max?: PhotoFrameMaxAggregateInputType
  }

  export type PhotoFrameGroupByOutputType = {
    id: number
    position: JsonValue | null
    url: string
    caption: string | null
    metadata: JsonValue | null
    cabinetId: number
    createdAt: Date
    updatedAt: Date
    _count: PhotoFrameCountAggregateOutputType | null
    _avg: PhotoFrameAvgAggregateOutputType | null
    _sum: PhotoFrameSumAggregateOutputType | null
    _min: PhotoFrameMinAggregateOutputType | null
    _max: PhotoFrameMaxAggregateOutputType | null
  }

  type GetPhotoFrameGroupByPayload<T extends PhotoFrameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoFrameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoFrameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoFrameGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoFrameGroupByOutputType[P]>
        }
      >
    >


  export type PhotoFrameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    url?: boolean
    caption?: boolean
    metadata?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoFrame"]>

  export type PhotoFrameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    url?: boolean
    caption?: boolean
    metadata?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoFrame"]>

  export type PhotoFrameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    url?: boolean
    caption?: boolean
    metadata?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoFrame"]>

  export type PhotoFrameSelectScalar = {
    id?: boolean
    position?: boolean
    url?: boolean
    caption?: boolean
    metadata?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PhotoFrameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "position" | "url" | "caption" | "metadata" | "cabinetId" | "createdAt" | "updatedAt", ExtArgs["result"]["photoFrame"]>
  export type PhotoFrameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type PhotoFrameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type PhotoFrameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }

  export type $PhotoFramePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhotoFrame"
    objects: {
      cabinet: Prisma.$CabinetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      position: Prisma.JsonValue | null
      url: string
      caption: string | null
      metadata: Prisma.JsonValue | null
      cabinetId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["photoFrame"]>
    composites: {}
  }

  type PhotoFrameGetPayload<S extends boolean | null | undefined | PhotoFrameDefaultArgs> = $Result.GetResult<Prisma.$PhotoFramePayload, S>

  type PhotoFrameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoFrameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoFrameCountAggregateInputType | true
    }

  export interface PhotoFrameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhotoFrame'], meta: { name: 'PhotoFrame' } }
    /**
     * Find zero or one PhotoFrame that matches the filter.
     * @param {PhotoFrameFindUniqueArgs} args - Arguments to find a PhotoFrame
     * @example
     * // Get one PhotoFrame
     * const photoFrame = await prisma.photoFrame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoFrameFindUniqueArgs>(args: SelectSubset<T, PhotoFrameFindUniqueArgs<ExtArgs>>): Prisma__PhotoFrameClient<$Result.GetResult<Prisma.$PhotoFramePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhotoFrame that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoFrameFindUniqueOrThrowArgs} args - Arguments to find a PhotoFrame
     * @example
     * // Get one PhotoFrame
     * const photoFrame = await prisma.photoFrame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoFrameFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoFrameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoFrameClient<$Result.GetResult<Prisma.$PhotoFramePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotoFrame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFrameFindFirstArgs} args - Arguments to find a PhotoFrame
     * @example
     * // Get one PhotoFrame
     * const photoFrame = await prisma.photoFrame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoFrameFindFirstArgs>(args?: SelectSubset<T, PhotoFrameFindFirstArgs<ExtArgs>>): Prisma__PhotoFrameClient<$Result.GetResult<Prisma.$PhotoFramePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotoFrame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFrameFindFirstOrThrowArgs} args - Arguments to find a PhotoFrame
     * @example
     * // Get one PhotoFrame
     * const photoFrame = await prisma.photoFrame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoFrameFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoFrameFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoFrameClient<$Result.GetResult<Prisma.$PhotoFramePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhotoFrames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFrameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhotoFrames
     * const photoFrames = await prisma.photoFrame.findMany()
     * 
     * // Get first 10 PhotoFrames
     * const photoFrames = await prisma.photoFrame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoFrameWithIdOnly = await prisma.photoFrame.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoFrameFindManyArgs>(args?: SelectSubset<T, PhotoFrameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoFramePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhotoFrame.
     * @param {PhotoFrameCreateArgs} args - Arguments to create a PhotoFrame.
     * @example
     * // Create one PhotoFrame
     * const PhotoFrame = await prisma.photoFrame.create({
     *   data: {
     *     // ... data to create a PhotoFrame
     *   }
     * })
     * 
     */
    create<T extends PhotoFrameCreateArgs>(args: SelectSubset<T, PhotoFrameCreateArgs<ExtArgs>>): Prisma__PhotoFrameClient<$Result.GetResult<Prisma.$PhotoFramePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhotoFrames.
     * @param {PhotoFrameCreateManyArgs} args - Arguments to create many PhotoFrames.
     * @example
     * // Create many PhotoFrames
     * const photoFrame = await prisma.photoFrame.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoFrameCreateManyArgs>(args?: SelectSubset<T, PhotoFrameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhotoFrames and returns the data saved in the database.
     * @param {PhotoFrameCreateManyAndReturnArgs} args - Arguments to create many PhotoFrames.
     * @example
     * // Create many PhotoFrames
     * const photoFrame = await prisma.photoFrame.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhotoFrames and only return the `id`
     * const photoFrameWithIdOnly = await prisma.photoFrame.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotoFrameCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotoFrameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoFramePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PhotoFrame.
     * @param {PhotoFrameDeleteArgs} args - Arguments to delete one PhotoFrame.
     * @example
     * // Delete one PhotoFrame
     * const PhotoFrame = await prisma.photoFrame.delete({
     *   where: {
     *     // ... filter to delete one PhotoFrame
     *   }
     * })
     * 
     */
    delete<T extends PhotoFrameDeleteArgs>(args: SelectSubset<T, PhotoFrameDeleteArgs<ExtArgs>>): Prisma__PhotoFrameClient<$Result.GetResult<Prisma.$PhotoFramePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhotoFrame.
     * @param {PhotoFrameUpdateArgs} args - Arguments to update one PhotoFrame.
     * @example
     * // Update one PhotoFrame
     * const photoFrame = await prisma.photoFrame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoFrameUpdateArgs>(args: SelectSubset<T, PhotoFrameUpdateArgs<ExtArgs>>): Prisma__PhotoFrameClient<$Result.GetResult<Prisma.$PhotoFramePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhotoFrames.
     * @param {PhotoFrameDeleteManyArgs} args - Arguments to filter PhotoFrames to delete.
     * @example
     * // Delete a few PhotoFrames
     * const { count } = await prisma.photoFrame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoFrameDeleteManyArgs>(args?: SelectSubset<T, PhotoFrameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotoFrames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFrameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhotoFrames
     * const photoFrame = await prisma.photoFrame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoFrameUpdateManyArgs>(args: SelectSubset<T, PhotoFrameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotoFrames and returns the data updated in the database.
     * @param {PhotoFrameUpdateManyAndReturnArgs} args - Arguments to update many PhotoFrames.
     * @example
     * // Update many PhotoFrames
     * const photoFrame = await prisma.photoFrame.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PhotoFrames and only return the `id`
     * const photoFrameWithIdOnly = await prisma.photoFrame.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhotoFrameUpdateManyAndReturnArgs>(args: SelectSubset<T, PhotoFrameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoFramePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PhotoFrame.
     * @param {PhotoFrameUpsertArgs} args - Arguments to update or create a PhotoFrame.
     * @example
     * // Update or create a PhotoFrame
     * const photoFrame = await prisma.photoFrame.upsert({
     *   create: {
     *     // ... data to create a PhotoFrame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhotoFrame we want to update
     *   }
     * })
     */
    upsert<T extends PhotoFrameUpsertArgs>(args: SelectSubset<T, PhotoFrameUpsertArgs<ExtArgs>>): Prisma__PhotoFrameClient<$Result.GetResult<Prisma.$PhotoFramePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhotoFrames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFrameCountArgs} args - Arguments to filter PhotoFrames to count.
     * @example
     * // Count the number of PhotoFrames
     * const count = await prisma.photoFrame.count({
     *   where: {
     *     // ... the filter for the PhotoFrames we want to count
     *   }
     * })
    **/
    count<T extends PhotoFrameCountArgs>(
      args?: Subset<T, PhotoFrameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoFrameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhotoFrame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFrameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoFrameAggregateArgs>(args: Subset<T, PhotoFrameAggregateArgs>): Prisma.PrismaPromise<GetPhotoFrameAggregateType<T>>

    /**
     * Group by PhotoFrame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFrameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoFrameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoFrameGroupByArgs['orderBy'] }
        : { orderBy?: PhotoFrameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoFrameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoFrameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhotoFrame model
   */
  readonly fields: PhotoFrameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhotoFrame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoFrameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cabinet<T extends CabinetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CabinetDefaultArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhotoFrame model
   */
  interface PhotoFrameFieldRefs {
    readonly id: FieldRef<"PhotoFrame", 'Int'>
    readonly position: FieldRef<"PhotoFrame", 'Json'>
    readonly url: FieldRef<"PhotoFrame", 'String'>
    readonly caption: FieldRef<"PhotoFrame", 'String'>
    readonly metadata: FieldRef<"PhotoFrame", 'Json'>
    readonly cabinetId: FieldRef<"PhotoFrame", 'Int'>
    readonly createdAt: FieldRef<"PhotoFrame", 'DateTime'>
    readonly updatedAt: FieldRef<"PhotoFrame", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhotoFrame findUnique
   */
  export type PhotoFrameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFrame
     */
    select?: PhotoFrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFrame
     */
    omit?: PhotoFrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFrameInclude<ExtArgs> | null
    /**
     * Filter, which PhotoFrame to fetch.
     */
    where: PhotoFrameWhereUniqueInput
  }

  /**
   * PhotoFrame findUniqueOrThrow
   */
  export type PhotoFrameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFrame
     */
    select?: PhotoFrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFrame
     */
    omit?: PhotoFrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFrameInclude<ExtArgs> | null
    /**
     * Filter, which PhotoFrame to fetch.
     */
    where: PhotoFrameWhereUniqueInput
  }

  /**
   * PhotoFrame findFirst
   */
  export type PhotoFrameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFrame
     */
    select?: PhotoFrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFrame
     */
    omit?: PhotoFrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFrameInclude<ExtArgs> | null
    /**
     * Filter, which PhotoFrame to fetch.
     */
    where?: PhotoFrameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoFrames to fetch.
     */
    orderBy?: PhotoFrameOrderByWithRelationInput | PhotoFrameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoFrames.
     */
    cursor?: PhotoFrameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoFrames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoFrames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoFrames.
     */
    distinct?: PhotoFrameScalarFieldEnum | PhotoFrameScalarFieldEnum[]
  }

  /**
   * PhotoFrame findFirstOrThrow
   */
  export type PhotoFrameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFrame
     */
    select?: PhotoFrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFrame
     */
    omit?: PhotoFrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFrameInclude<ExtArgs> | null
    /**
     * Filter, which PhotoFrame to fetch.
     */
    where?: PhotoFrameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoFrames to fetch.
     */
    orderBy?: PhotoFrameOrderByWithRelationInput | PhotoFrameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoFrames.
     */
    cursor?: PhotoFrameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoFrames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoFrames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoFrames.
     */
    distinct?: PhotoFrameScalarFieldEnum | PhotoFrameScalarFieldEnum[]
  }

  /**
   * PhotoFrame findMany
   */
  export type PhotoFrameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFrame
     */
    select?: PhotoFrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFrame
     */
    omit?: PhotoFrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFrameInclude<ExtArgs> | null
    /**
     * Filter, which PhotoFrames to fetch.
     */
    where?: PhotoFrameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoFrames to fetch.
     */
    orderBy?: PhotoFrameOrderByWithRelationInput | PhotoFrameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhotoFrames.
     */
    cursor?: PhotoFrameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoFrames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoFrames.
     */
    skip?: number
    distinct?: PhotoFrameScalarFieldEnum | PhotoFrameScalarFieldEnum[]
  }

  /**
   * PhotoFrame create
   */
  export type PhotoFrameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFrame
     */
    select?: PhotoFrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFrame
     */
    omit?: PhotoFrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFrameInclude<ExtArgs> | null
    /**
     * The data needed to create a PhotoFrame.
     */
    data: XOR<PhotoFrameCreateInput, PhotoFrameUncheckedCreateInput>
  }

  /**
   * PhotoFrame createMany
   */
  export type PhotoFrameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhotoFrames.
     */
    data: PhotoFrameCreateManyInput | PhotoFrameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhotoFrame createManyAndReturn
   */
  export type PhotoFrameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFrame
     */
    select?: PhotoFrameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFrame
     */
    omit?: PhotoFrameOmit<ExtArgs> | null
    /**
     * The data used to create many PhotoFrames.
     */
    data: PhotoFrameCreateManyInput | PhotoFrameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFrameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhotoFrame update
   */
  export type PhotoFrameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFrame
     */
    select?: PhotoFrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFrame
     */
    omit?: PhotoFrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFrameInclude<ExtArgs> | null
    /**
     * The data needed to update a PhotoFrame.
     */
    data: XOR<PhotoFrameUpdateInput, PhotoFrameUncheckedUpdateInput>
    /**
     * Choose, which PhotoFrame to update.
     */
    where: PhotoFrameWhereUniqueInput
  }

  /**
   * PhotoFrame updateMany
   */
  export type PhotoFrameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhotoFrames.
     */
    data: XOR<PhotoFrameUpdateManyMutationInput, PhotoFrameUncheckedUpdateManyInput>
    /**
     * Filter which PhotoFrames to update
     */
    where?: PhotoFrameWhereInput
    /**
     * Limit how many PhotoFrames to update.
     */
    limit?: number
  }

  /**
   * PhotoFrame updateManyAndReturn
   */
  export type PhotoFrameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFrame
     */
    select?: PhotoFrameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFrame
     */
    omit?: PhotoFrameOmit<ExtArgs> | null
    /**
     * The data used to update PhotoFrames.
     */
    data: XOR<PhotoFrameUpdateManyMutationInput, PhotoFrameUncheckedUpdateManyInput>
    /**
     * Filter which PhotoFrames to update
     */
    where?: PhotoFrameWhereInput
    /**
     * Limit how many PhotoFrames to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFrameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhotoFrame upsert
   */
  export type PhotoFrameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFrame
     */
    select?: PhotoFrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFrame
     */
    omit?: PhotoFrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFrameInclude<ExtArgs> | null
    /**
     * The filter to search for the PhotoFrame to update in case it exists.
     */
    where: PhotoFrameWhereUniqueInput
    /**
     * In case the PhotoFrame found by the `where` argument doesn't exist, create a new PhotoFrame with this data.
     */
    create: XOR<PhotoFrameCreateInput, PhotoFrameUncheckedCreateInput>
    /**
     * In case the PhotoFrame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoFrameUpdateInput, PhotoFrameUncheckedUpdateInput>
  }

  /**
   * PhotoFrame delete
   */
  export type PhotoFrameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFrame
     */
    select?: PhotoFrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFrame
     */
    omit?: PhotoFrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFrameInclude<ExtArgs> | null
    /**
     * Filter which PhotoFrame to delete.
     */
    where: PhotoFrameWhereUniqueInput
  }

  /**
   * PhotoFrame deleteMany
   */
  export type PhotoFrameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoFrames to delete
     */
    where?: PhotoFrameWhereInput
    /**
     * Limit how many PhotoFrames to delete.
     */
    limit?: number
  }

  /**
   * PhotoFrame without action
   */
  export type PhotoFrameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFrame
     */
    select?: PhotoFrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFrame
     */
    omit?: PhotoFrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFrameInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaAvgAggregateOutputType = {
    id: number | null
    cabinetId: number | null
  }

  export type MediaSumAggregateOutputType = {
    id: number | null
    cabinetId: number | null
  }

  export type MediaMinAggregateOutputType = {
    id: number | null
    type: string | null
    url: string | null
    cabinetId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: number | null
    type: string | null
    url: string | null
    cabinetId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    position: number
    type: number
    url: number
    metadata: number
    cabinetId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MediaAvgAggregateInputType = {
    id?: true
    cabinetId?: true
  }

  export type MediaSumAggregateInputType = {
    id?: true
    cabinetId?: true
  }

  export type MediaMinAggregateInputType = {
    id?: true
    type?: true
    url?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    type?: true
    url?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    position?: true
    type?: true
    url?: true
    metadata?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _avg?: MediaAvgAggregateInputType
    _sum?: MediaSumAggregateInputType
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: number
    position: JsonValue | null
    type: string
    url: string
    metadata: JsonValue | null
    cabinetId: number
    createdAt: Date
    updatedAt: Date
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    type?: boolean
    url?: boolean
    metadata?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    type?: boolean
    url?: boolean
    metadata?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    type?: boolean
    url?: boolean
    metadata?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    position?: boolean
    type?: boolean
    url?: boolean
    metadata?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "position" | "type" | "url" | "metadata" | "cabinetId" | "createdAt" | "updatedAt", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type MediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type MediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      cabinet: Prisma.$CabinetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      position: Prisma.JsonValue | null
      type: string
      url: string
      metadata: Prisma.JsonValue | null
      cabinetId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {MediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cabinet<T extends CabinetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CabinetDefaultArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'Int'>
    readonly position: FieldRef<"Media", 'Json'>
    readonly type: FieldRef<"Media", 'String'>
    readonly url: FieldRef<"Media", 'String'>
    readonly metadata: FieldRef<"Media", 'Json'>
    readonly cabinetId: FieldRef<"Media", 'Int'>
    readonly createdAt: FieldRef<"Media", 'DateTime'>
    readonly updatedAt: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media updateManyAndReturn
   */
  export type MediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Model Checklist
   */

  export type AggregateChecklist = {
    _count: ChecklistCountAggregateOutputType | null
    _avg: ChecklistAvgAggregateOutputType | null
    _sum: ChecklistSumAggregateOutputType | null
    _min: ChecklistMinAggregateOutputType | null
    _max: ChecklistMaxAggregateOutputType | null
  }

  export type ChecklistAvgAggregateOutputType = {
    id: number | null
    cabinetId: number | null
  }

  export type ChecklistSumAggregateOutputType = {
    id: number | null
    cabinetId: number | null
  }

  export type ChecklistMinAggregateOutputType = {
    id: number | null
    title: string | null
    cabinetId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChecklistMaxAggregateOutputType = {
    id: number | null
    title: string | null
    cabinetId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChecklistCountAggregateOutputType = {
    id: number
    position: number
    title: number
    items: number
    cabinetId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChecklistAvgAggregateInputType = {
    id?: true
    cabinetId?: true
  }

  export type ChecklistSumAggregateInputType = {
    id?: true
    cabinetId?: true
  }

  export type ChecklistMinAggregateInputType = {
    id?: true
    title?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChecklistMaxAggregateInputType = {
    id?: true
    title?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChecklistCountAggregateInputType = {
    id?: true
    position?: true
    title?: true
    items?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChecklistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checklist to aggregate.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Checklists
    **/
    _count?: true | ChecklistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChecklistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChecklistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChecklistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChecklistMaxAggregateInputType
  }

  export type GetChecklistAggregateType<T extends ChecklistAggregateArgs> = {
        [P in keyof T & keyof AggregateChecklist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChecklist[P]>
      : GetScalarType<T[P], AggregateChecklist[P]>
  }




  export type ChecklistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistWhereInput
    orderBy?: ChecklistOrderByWithAggregationInput | ChecklistOrderByWithAggregationInput[]
    by: ChecklistScalarFieldEnum[] | ChecklistScalarFieldEnum
    having?: ChecklistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChecklistCountAggregateInputType | true
    _avg?: ChecklistAvgAggregateInputType
    _sum?: ChecklistSumAggregateInputType
    _min?: ChecklistMinAggregateInputType
    _max?: ChecklistMaxAggregateInputType
  }

  export type ChecklistGroupByOutputType = {
    id: number
    position: JsonValue | null
    title: string
    items: JsonValue
    cabinetId: number
    createdAt: Date
    updatedAt: Date
    _count: ChecklistCountAggregateOutputType | null
    _avg: ChecklistAvgAggregateOutputType | null
    _sum: ChecklistSumAggregateOutputType | null
    _min: ChecklistMinAggregateOutputType | null
    _max: ChecklistMaxAggregateOutputType | null
  }

  type GetChecklistGroupByPayload<T extends ChecklistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChecklistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChecklistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChecklistGroupByOutputType[P]>
            : GetScalarType<T[P], ChecklistGroupByOutputType[P]>
        }
      >
    >


  export type ChecklistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    title?: boolean
    items?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklist"]>

  export type ChecklistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    title?: boolean
    items?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklist"]>

  export type ChecklistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    title?: boolean
    items?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklist"]>

  export type ChecklistSelectScalar = {
    id?: boolean
    position?: boolean
    title?: boolean
    items?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChecklistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "position" | "title" | "items" | "cabinetId" | "createdAt" | "updatedAt", ExtArgs["result"]["checklist"]>
  export type ChecklistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type ChecklistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type ChecklistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }

  export type $ChecklistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Checklist"
    objects: {
      cabinet: Prisma.$CabinetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      position: Prisma.JsonValue | null
      title: string
      items: Prisma.JsonValue
      cabinetId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["checklist"]>
    composites: {}
  }

  type ChecklistGetPayload<S extends boolean | null | undefined | ChecklistDefaultArgs> = $Result.GetResult<Prisma.$ChecklistPayload, S>

  type ChecklistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChecklistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChecklistCountAggregateInputType | true
    }

  export interface ChecklistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Checklist'], meta: { name: 'Checklist' } }
    /**
     * Find zero or one Checklist that matches the filter.
     * @param {ChecklistFindUniqueArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChecklistFindUniqueArgs>(args: SelectSubset<T, ChecklistFindUniqueArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Checklist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChecklistFindUniqueOrThrowArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChecklistFindUniqueOrThrowArgs>(args: SelectSubset<T, ChecklistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checklist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistFindFirstArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChecklistFindFirstArgs>(args?: SelectSubset<T, ChecklistFindFirstArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checklist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistFindFirstOrThrowArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChecklistFindFirstOrThrowArgs>(args?: SelectSubset<T, ChecklistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checklists
     * const checklists = await prisma.checklist.findMany()
     * 
     * // Get first 10 Checklists
     * const checklists = await prisma.checklist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checklistWithIdOnly = await prisma.checklist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChecklistFindManyArgs>(args?: SelectSubset<T, ChecklistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Checklist.
     * @param {ChecklistCreateArgs} args - Arguments to create a Checklist.
     * @example
     * // Create one Checklist
     * const Checklist = await prisma.checklist.create({
     *   data: {
     *     // ... data to create a Checklist
     *   }
     * })
     * 
     */
    create<T extends ChecklistCreateArgs>(args: SelectSubset<T, ChecklistCreateArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Checklists.
     * @param {ChecklistCreateManyArgs} args - Arguments to create many Checklists.
     * @example
     * // Create many Checklists
     * const checklist = await prisma.checklist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChecklistCreateManyArgs>(args?: SelectSubset<T, ChecklistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Checklists and returns the data saved in the database.
     * @param {ChecklistCreateManyAndReturnArgs} args - Arguments to create many Checklists.
     * @example
     * // Create many Checklists
     * const checklist = await prisma.checklist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Checklists and only return the `id`
     * const checklistWithIdOnly = await prisma.checklist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChecklistCreateManyAndReturnArgs>(args?: SelectSubset<T, ChecklistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Checklist.
     * @param {ChecklistDeleteArgs} args - Arguments to delete one Checklist.
     * @example
     * // Delete one Checklist
     * const Checklist = await prisma.checklist.delete({
     *   where: {
     *     // ... filter to delete one Checklist
     *   }
     * })
     * 
     */
    delete<T extends ChecklistDeleteArgs>(args: SelectSubset<T, ChecklistDeleteArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Checklist.
     * @param {ChecklistUpdateArgs} args - Arguments to update one Checklist.
     * @example
     * // Update one Checklist
     * const checklist = await prisma.checklist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChecklistUpdateArgs>(args: SelectSubset<T, ChecklistUpdateArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Checklists.
     * @param {ChecklistDeleteManyArgs} args - Arguments to filter Checklists to delete.
     * @example
     * // Delete a few Checklists
     * const { count } = await prisma.checklist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChecklistDeleteManyArgs>(args?: SelectSubset<T, ChecklistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checklists
     * const checklist = await prisma.checklist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChecklistUpdateManyArgs>(args: SelectSubset<T, ChecklistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checklists and returns the data updated in the database.
     * @param {ChecklistUpdateManyAndReturnArgs} args - Arguments to update many Checklists.
     * @example
     * // Update many Checklists
     * const checklist = await prisma.checklist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Checklists and only return the `id`
     * const checklistWithIdOnly = await prisma.checklist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChecklistUpdateManyAndReturnArgs>(args: SelectSubset<T, ChecklistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Checklist.
     * @param {ChecklistUpsertArgs} args - Arguments to update or create a Checklist.
     * @example
     * // Update or create a Checklist
     * const checklist = await prisma.checklist.upsert({
     *   create: {
     *     // ... data to create a Checklist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checklist we want to update
     *   }
     * })
     */
    upsert<T extends ChecklistUpsertArgs>(args: SelectSubset<T, ChecklistUpsertArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistCountArgs} args - Arguments to filter Checklists to count.
     * @example
     * // Count the number of Checklists
     * const count = await prisma.checklist.count({
     *   where: {
     *     // ... the filter for the Checklists we want to count
     *   }
     * })
    **/
    count<T extends ChecklistCountArgs>(
      args?: Subset<T, ChecklistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChecklistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChecklistAggregateArgs>(args: Subset<T, ChecklistAggregateArgs>): Prisma.PrismaPromise<GetChecklistAggregateType<T>>

    /**
     * Group by Checklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChecklistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChecklistGroupByArgs['orderBy'] }
        : { orderBy?: ChecklistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChecklistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChecklistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Checklist model
   */
  readonly fields: ChecklistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Checklist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChecklistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cabinet<T extends CabinetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CabinetDefaultArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Checklist model
   */
  interface ChecklistFieldRefs {
    readonly id: FieldRef<"Checklist", 'Int'>
    readonly position: FieldRef<"Checklist", 'Json'>
    readonly title: FieldRef<"Checklist", 'String'>
    readonly items: FieldRef<"Checklist", 'Json'>
    readonly cabinetId: FieldRef<"Checklist", 'Int'>
    readonly createdAt: FieldRef<"Checklist", 'DateTime'>
    readonly updatedAt: FieldRef<"Checklist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Checklist findUnique
   */
  export type ChecklistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist findUniqueOrThrow
   */
  export type ChecklistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist findFirst
   */
  export type ChecklistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checklists.
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checklists.
     */
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Checklist findFirstOrThrow
   */
  export type ChecklistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checklists.
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checklists.
     */
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Checklist findMany
   */
  export type ChecklistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklists to fetch.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Checklists.
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Checklist create
   */
  export type ChecklistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * The data needed to create a Checklist.
     */
    data: XOR<ChecklistCreateInput, ChecklistUncheckedCreateInput>
  }

  /**
   * Checklist createMany
   */
  export type ChecklistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Checklists.
     */
    data: ChecklistCreateManyInput | ChecklistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Checklist createManyAndReturn
   */
  export type ChecklistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * The data used to create many Checklists.
     */
    data: ChecklistCreateManyInput | ChecklistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Checklist update
   */
  export type ChecklistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * The data needed to update a Checklist.
     */
    data: XOR<ChecklistUpdateInput, ChecklistUncheckedUpdateInput>
    /**
     * Choose, which Checklist to update.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist updateMany
   */
  export type ChecklistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Checklists.
     */
    data: XOR<ChecklistUpdateManyMutationInput, ChecklistUncheckedUpdateManyInput>
    /**
     * Filter which Checklists to update
     */
    where?: ChecklistWhereInput
    /**
     * Limit how many Checklists to update.
     */
    limit?: number
  }

  /**
   * Checklist updateManyAndReturn
   */
  export type ChecklistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * The data used to update Checklists.
     */
    data: XOR<ChecklistUpdateManyMutationInput, ChecklistUncheckedUpdateManyInput>
    /**
     * Filter which Checklists to update
     */
    where?: ChecklistWhereInput
    /**
     * Limit how many Checklists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Checklist upsert
   */
  export type ChecklistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * The filter to search for the Checklist to update in case it exists.
     */
    where: ChecklistWhereUniqueInput
    /**
     * In case the Checklist found by the `where` argument doesn't exist, create a new Checklist with this data.
     */
    create: XOR<ChecklistCreateInput, ChecklistUncheckedCreateInput>
    /**
     * In case the Checklist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChecklistUpdateInput, ChecklistUncheckedUpdateInput>
  }

  /**
   * Checklist delete
   */
  export type ChecklistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter which Checklist to delete.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist deleteMany
   */
  export type ChecklistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checklists to delete
     */
    where?: ChecklistWhereInput
    /**
     * Limit how many Checklists to delete.
     */
    limit?: number
  }

  /**
   * Checklist without action
   */
  export type ChecklistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteAvgAggregateOutputType = {
    id: number | null
    cabinetId: number | null
  }

  export type NoteSumAggregateOutputType = {
    id: number | null
    cabinetId: number | null
  }

  export type NoteMinAggregateOutputType = {
    id: number | null
    content: string | null
    cabinetId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteMaxAggregateOutputType = {
    id: number | null
    content: string | null
    cabinetId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    position: number
    content: number
    cabinetId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NoteAvgAggregateInputType = {
    id?: true
    cabinetId?: true
  }

  export type NoteSumAggregateInputType = {
    id?: true
    cabinetId?: true
  }

  export type NoteMinAggregateInputType = {
    id?: true
    content?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    content?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    position?: true
    content?: true
    cabinetId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _avg?: NoteAvgAggregateInputType
    _sum?: NoteSumAggregateInputType
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: number
    position: JsonValue | null
    content: string
    cabinetId: number
    createdAt: Date
    updatedAt: Date
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    content?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    content?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    content?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    id?: boolean
    position?: boolean
    content?: boolean
    cabinetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "position" | "content" | "cabinetId" | "createdAt" | "updatedAt", ExtArgs["result"]["note"]>
  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type NoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }
  export type NoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      cabinet: Prisma.$CabinetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      position: Prisma.JsonValue | null
      content: string
      cabinetId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NoteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NoteUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NoteUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cabinet<T extends CabinetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CabinetDefaultArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Note model
   */
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", 'Int'>
    readonly position: FieldRef<"Note", 'Json'>
    readonly content: FieldRef<"Note", 'String'>
    readonly cabinetId: FieldRef<"Note", 'Int'>
    readonly createdAt: FieldRef<"Note", 'DateTime'>
    readonly updatedAt: FieldRef<"Note", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note createManyAndReturn
   */
  export type NoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Note updateManyAndReturn
   */
  export type NoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CabinetScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerId: 'ownerId'
  };

  export type CabinetScalarFieldEnum = (typeof CabinetScalarFieldEnum)[keyof typeof CabinetScalarFieldEnum]


  export const CabinetLayoutScalarFieldEnum: {
    id: 'id',
    name: 'name',
    layout: 'layout',
    cabinetId: 'cabinetId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CabinetLayoutScalarFieldEnum = (typeof CabinetLayoutScalarFieldEnum)[keyof typeof CabinetLayoutScalarFieldEnum]


  export const SystemItemScalarFieldEnum: {
    id: 'id',
    type: 'type',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SystemItemScalarFieldEnum = (typeof SystemItemScalarFieldEnum)[keyof typeof SystemItemScalarFieldEnum]


  export const ChestScalarFieldEnum: {
    id: 'id',
    passcode: 'passcode',
    position: 'position',
    items: 'items',
    cabinetId: 'cabinetId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChestScalarFieldEnum = (typeof ChestScalarFieldEnum)[keyof typeof ChestScalarFieldEnum]


  export const JournalScalarFieldEnum: {
    id: 'id',
    passcode: 'passcode',
    position: 'position',
    entries: 'entries',
    cabinetId: 'cabinetId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JournalScalarFieldEnum = (typeof JournalScalarFieldEnum)[keyof typeof JournalScalarFieldEnum]


  export const PhotoFrameScalarFieldEnum: {
    id: 'id',
    position: 'position',
    url: 'url',
    caption: 'caption',
    metadata: 'metadata',
    cabinetId: 'cabinetId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PhotoFrameScalarFieldEnum = (typeof PhotoFrameScalarFieldEnum)[keyof typeof PhotoFrameScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    position: 'position',
    type: 'type',
    url: 'url',
    metadata: 'metadata',
    cabinetId: 'cabinetId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const ChecklistScalarFieldEnum: {
    id: 'id',
    position: 'position',
    title: 'title',
    items: 'items',
    cabinetId: 'cabinetId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChecklistScalarFieldEnum = (typeof ChecklistScalarFieldEnum)[keyof typeof ChecklistScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    position: 'position',
    content: 'content',
    cabinetId: 'cabinetId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    cabinets?: CabinetListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cabinets?: CabinetOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    cabinets?: CabinetListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CabinetWhereInput = {
    AND?: CabinetWhereInput | CabinetWhereInput[]
    OR?: CabinetWhereInput[]
    NOT?: CabinetWhereInput | CabinetWhereInput[]
    id?: IntFilter<"Cabinet"> | number
    title?: StringFilter<"Cabinet"> | string
    createdAt?: DateTimeFilter<"Cabinet"> | Date | string
    updatedAt?: DateTimeFilter<"Cabinet"> | Date | string
    ownerId?: IntFilter<"Cabinet"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    layout?: CabinetLayoutListRelationFilter
    chest?: XOR<ChestNullableScalarRelationFilter, ChestWhereInput> | null
    journal?: XOR<JournalNullableScalarRelationFilter, JournalWhereInput> | null
    photoFrame?: PhotoFrameListRelationFilter
    media?: MediaListRelationFilter
    checklist?: ChecklistListRelationFilter
    notes?: NoteListRelationFilter
  }

  export type CabinetOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    layout?: CabinetLayoutOrderByRelationAggregateInput
    chest?: ChestOrderByWithRelationInput
    journal?: JournalOrderByWithRelationInput
    photoFrame?: PhotoFrameOrderByRelationAggregateInput
    media?: MediaOrderByRelationAggregateInput
    checklist?: ChecklistOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
  }

  export type CabinetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ownerId?: number
    AND?: CabinetWhereInput | CabinetWhereInput[]
    OR?: CabinetWhereInput[]
    NOT?: CabinetWhereInput | CabinetWhereInput[]
    title?: StringFilter<"Cabinet"> | string
    createdAt?: DateTimeFilter<"Cabinet"> | Date | string
    updatedAt?: DateTimeFilter<"Cabinet"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    layout?: CabinetLayoutListRelationFilter
    chest?: XOR<ChestNullableScalarRelationFilter, ChestWhereInput> | null
    journal?: XOR<JournalNullableScalarRelationFilter, JournalWhereInput> | null
    photoFrame?: PhotoFrameListRelationFilter
    media?: MediaListRelationFilter
    checklist?: ChecklistListRelationFilter
    notes?: NoteListRelationFilter
  }, "id" | "ownerId">

  export type CabinetOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    _count?: CabinetCountOrderByAggregateInput
    _avg?: CabinetAvgOrderByAggregateInput
    _max?: CabinetMaxOrderByAggregateInput
    _min?: CabinetMinOrderByAggregateInput
    _sum?: CabinetSumOrderByAggregateInput
  }

  export type CabinetScalarWhereWithAggregatesInput = {
    AND?: CabinetScalarWhereWithAggregatesInput | CabinetScalarWhereWithAggregatesInput[]
    OR?: CabinetScalarWhereWithAggregatesInput[]
    NOT?: CabinetScalarWhereWithAggregatesInput | CabinetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cabinet"> | number
    title?: StringWithAggregatesFilter<"Cabinet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cabinet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cabinet"> | Date | string
    ownerId?: IntWithAggregatesFilter<"Cabinet"> | number
  }

  export type CabinetLayoutWhereInput = {
    AND?: CabinetLayoutWhereInput | CabinetLayoutWhereInput[]
    OR?: CabinetLayoutWhereInput[]
    NOT?: CabinetLayoutWhereInput | CabinetLayoutWhereInput[]
    id?: IntFilter<"CabinetLayout"> | number
    name?: StringNullableFilter<"CabinetLayout"> | string | null
    layout?: JsonFilter<"CabinetLayout">
    cabinetId?: IntFilter<"CabinetLayout"> | number
    createdAt?: DateTimeFilter<"CabinetLayout"> | Date | string
    updatedAt?: DateTimeFilter<"CabinetLayout"> | Date | string
    cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }

  export type CabinetLayoutOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    layout?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cabinet?: CabinetOrderByWithRelationInput
  }

  export type CabinetLayoutWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CabinetLayoutWhereInput | CabinetLayoutWhereInput[]
    OR?: CabinetLayoutWhereInput[]
    NOT?: CabinetLayoutWhereInput | CabinetLayoutWhereInput[]
    name?: StringNullableFilter<"CabinetLayout"> | string | null
    layout?: JsonFilter<"CabinetLayout">
    cabinetId?: IntFilter<"CabinetLayout"> | number
    createdAt?: DateTimeFilter<"CabinetLayout"> | Date | string
    updatedAt?: DateTimeFilter<"CabinetLayout"> | Date | string
    cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }, "id">

  export type CabinetLayoutOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    layout?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CabinetLayoutCountOrderByAggregateInput
    _avg?: CabinetLayoutAvgOrderByAggregateInput
    _max?: CabinetLayoutMaxOrderByAggregateInput
    _min?: CabinetLayoutMinOrderByAggregateInput
    _sum?: CabinetLayoutSumOrderByAggregateInput
  }

  export type CabinetLayoutScalarWhereWithAggregatesInput = {
    AND?: CabinetLayoutScalarWhereWithAggregatesInput | CabinetLayoutScalarWhereWithAggregatesInput[]
    OR?: CabinetLayoutScalarWhereWithAggregatesInput[]
    NOT?: CabinetLayoutScalarWhereWithAggregatesInput | CabinetLayoutScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CabinetLayout"> | number
    name?: StringNullableWithAggregatesFilter<"CabinetLayout"> | string | null
    layout?: JsonWithAggregatesFilter<"CabinetLayout">
    cabinetId?: IntWithAggregatesFilter<"CabinetLayout"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CabinetLayout"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CabinetLayout"> | Date | string
  }

  export type SystemItemWhereInput = {
    AND?: SystemItemWhereInput | SystemItemWhereInput[]
    OR?: SystemItemWhereInput[]
    NOT?: SystemItemWhereInput | SystemItemWhereInput[]
    id?: IntFilter<"SystemItem"> | number
    type?: StringFilter<"SystemItem"> | string
    metadata?: JsonNullableFilter<"SystemItem">
    createdAt?: DateTimeFilter<"SystemItem"> | Date | string
    updatedAt?: DateTimeFilter<"SystemItem"> | Date | string
  }

  export type SystemItemOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SystemItemWhereInput | SystemItemWhereInput[]
    OR?: SystemItemWhereInput[]
    NOT?: SystemItemWhereInput | SystemItemWhereInput[]
    type?: StringFilter<"SystemItem"> | string
    metadata?: JsonNullableFilter<"SystemItem">
    createdAt?: DateTimeFilter<"SystemItem"> | Date | string
    updatedAt?: DateTimeFilter<"SystemItem"> | Date | string
  }, "id">

  export type SystemItemOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemItemCountOrderByAggregateInput
    _avg?: SystemItemAvgOrderByAggregateInput
    _max?: SystemItemMaxOrderByAggregateInput
    _min?: SystemItemMinOrderByAggregateInput
    _sum?: SystemItemSumOrderByAggregateInput
  }

  export type SystemItemScalarWhereWithAggregatesInput = {
    AND?: SystemItemScalarWhereWithAggregatesInput | SystemItemScalarWhereWithAggregatesInput[]
    OR?: SystemItemScalarWhereWithAggregatesInput[]
    NOT?: SystemItemScalarWhereWithAggregatesInput | SystemItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SystemItem"> | number
    type?: StringWithAggregatesFilter<"SystemItem"> | string
    metadata?: JsonNullableWithAggregatesFilter<"SystemItem">
    createdAt?: DateTimeWithAggregatesFilter<"SystemItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemItem"> | Date | string
  }

  export type ChestWhereInput = {
    AND?: ChestWhereInput | ChestWhereInput[]
    OR?: ChestWhereInput[]
    NOT?: ChestWhereInput | ChestWhereInput[]
    id?: IntFilter<"Chest"> | number
    passcode?: StringFilter<"Chest"> | string
    position?: JsonNullableFilter<"Chest">
    items?: JsonNullableFilter<"Chest">
    cabinetId?: IntFilter<"Chest"> | number
    createdAt?: DateTimeFilter<"Chest"> | Date | string
    updatedAt?: DateTimeFilter<"Chest"> | Date | string
    cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }

  export type ChestOrderByWithRelationInput = {
    id?: SortOrder
    passcode?: SortOrder
    position?: SortOrderInput | SortOrder
    items?: SortOrderInput | SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cabinet?: CabinetOrderByWithRelationInput
  }

  export type ChestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cabinetId?: number
    AND?: ChestWhereInput | ChestWhereInput[]
    OR?: ChestWhereInput[]
    NOT?: ChestWhereInput | ChestWhereInput[]
    passcode?: StringFilter<"Chest"> | string
    position?: JsonNullableFilter<"Chest">
    items?: JsonNullableFilter<"Chest">
    createdAt?: DateTimeFilter<"Chest"> | Date | string
    updatedAt?: DateTimeFilter<"Chest"> | Date | string
    cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }, "id" | "cabinetId">

  export type ChestOrderByWithAggregationInput = {
    id?: SortOrder
    passcode?: SortOrder
    position?: SortOrderInput | SortOrder
    items?: SortOrderInput | SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChestCountOrderByAggregateInput
    _avg?: ChestAvgOrderByAggregateInput
    _max?: ChestMaxOrderByAggregateInput
    _min?: ChestMinOrderByAggregateInput
    _sum?: ChestSumOrderByAggregateInput
  }

  export type ChestScalarWhereWithAggregatesInput = {
    AND?: ChestScalarWhereWithAggregatesInput | ChestScalarWhereWithAggregatesInput[]
    OR?: ChestScalarWhereWithAggregatesInput[]
    NOT?: ChestScalarWhereWithAggregatesInput | ChestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chest"> | number
    passcode?: StringWithAggregatesFilter<"Chest"> | string
    position?: JsonNullableWithAggregatesFilter<"Chest">
    items?: JsonNullableWithAggregatesFilter<"Chest">
    cabinetId?: IntWithAggregatesFilter<"Chest"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Chest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chest"> | Date | string
  }

  export type JournalWhereInput = {
    AND?: JournalWhereInput | JournalWhereInput[]
    OR?: JournalWhereInput[]
    NOT?: JournalWhereInput | JournalWhereInput[]
    id?: IntFilter<"Journal"> | number
    passcode?: StringFilter<"Journal"> | string
    position?: JsonNullableFilter<"Journal">
    entries?: JsonFilter<"Journal">
    cabinetId?: IntFilter<"Journal"> | number
    createdAt?: DateTimeFilter<"Journal"> | Date | string
    updatedAt?: DateTimeFilter<"Journal"> | Date | string
    cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }

  export type JournalOrderByWithRelationInput = {
    id?: SortOrder
    passcode?: SortOrder
    position?: SortOrderInput | SortOrder
    entries?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cabinet?: CabinetOrderByWithRelationInput
  }

  export type JournalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cabinetId?: number
    AND?: JournalWhereInput | JournalWhereInput[]
    OR?: JournalWhereInput[]
    NOT?: JournalWhereInput | JournalWhereInput[]
    passcode?: StringFilter<"Journal"> | string
    position?: JsonNullableFilter<"Journal">
    entries?: JsonFilter<"Journal">
    createdAt?: DateTimeFilter<"Journal"> | Date | string
    updatedAt?: DateTimeFilter<"Journal"> | Date | string
    cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }, "id" | "cabinetId">

  export type JournalOrderByWithAggregationInput = {
    id?: SortOrder
    passcode?: SortOrder
    position?: SortOrderInput | SortOrder
    entries?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JournalCountOrderByAggregateInput
    _avg?: JournalAvgOrderByAggregateInput
    _max?: JournalMaxOrderByAggregateInput
    _min?: JournalMinOrderByAggregateInput
    _sum?: JournalSumOrderByAggregateInput
  }

  export type JournalScalarWhereWithAggregatesInput = {
    AND?: JournalScalarWhereWithAggregatesInput | JournalScalarWhereWithAggregatesInput[]
    OR?: JournalScalarWhereWithAggregatesInput[]
    NOT?: JournalScalarWhereWithAggregatesInput | JournalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Journal"> | number
    passcode?: StringWithAggregatesFilter<"Journal"> | string
    position?: JsonNullableWithAggregatesFilter<"Journal">
    entries?: JsonWithAggregatesFilter<"Journal">
    cabinetId?: IntWithAggregatesFilter<"Journal"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Journal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Journal"> | Date | string
  }

  export type PhotoFrameWhereInput = {
    AND?: PhotoFrameWhereInput | PhotoFrameWhereInput[]
    OR?: PhotoFrameWhereInput[]
    NOT?: PhotoFrameWhereInput | PhotoFrameWhereInput[]
    id?: IntFilter<"PhotoFrame"> | number
    position?: JsonNullableFilter<"PhotoFrame">
    url?: StringFilter<"PhotoFrame"> | string
    caption?: StringNullableFilter<"PhotoFrame"> | string | null
    metadata?: JsonNullableFilter<"PhotoFrame">
    cabinetId?: IntFilter<"PhotoFrame"> | number
    createdAt?: DateTimeFilter<"PhotoFrame"> | Date | string
    updatedAt?: DateTimeFilter<"PhotoFrame"> | Date | string
    cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }

  export type PhotoFrameOrderByWithRelationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cabinet?: CabinetOrderByWithRelationInput
  }

  export type PhotoFrameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PhotoFrameWhereInput | PhotoFrameWhereInput[]
    OR?: PhotoFrameWhereInput[]
    NOT?: PhotoFrameWhereInput | PhotoFrameWhereInput[]
    position?: JsonNullableFilter<"PhotoFrame">
    url?: StringFilter<"PhotoFrame"> | string
    caption?: StringNullableFilter<"PhotoFrame"> | string | null
    metadata?: JsonNullableFilter<"PhotoFrame">
    cabinetId?: IntFilter<"PhotoFrame"> | number
    createdAt?: DateTimeFilter<"PhotoFrame"> | Date | string
    updatedAt?: DateTimeFilter<"PhotoFrame"> | Date | string
    cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }, "id">

  export type PhotoFrameOrderByWithAggregationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PhotoFrameCountOrderByAggregateInput
    _avg?: PhotoFrameAvgOrderByAggregateInput
    _max?: PhotoFrameMaxOrderByAggregateInput
    _min?: PhotoFrameMinOrderByAggregateInput
    _sum?: PhotoFrameSumOrderByAggregateInput
  }

  export type PhotoFrameScalarWhereWithAggregatesInput = {
    AND?: PhotoFrameScalarWhereWithAggregatesInput | PhotoFrameScalarWhereWithAggregatesInput[]
    OR?: PhotoFrameScalarWhereWithAggregatesInput[]
    NOT?: PhotoFrameScalarWhereWithAggregatesInput | PhotoFrameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PhotoFrame"> | number
    position?: JsonNullableWithAggregatesFilter<"PhotoFrame">
    url?: StringWithAggregatesFilter<"PhotoFrame"> | string
    caption?: StringNullableWithAggregatesFilter<"PhotoFrame"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"PhotoFrame">
    cabinetId?: IntWithAggregatesFilter<"PhotoFrame"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PhotoFrame"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PhotoFrame"> | Date | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: IntFilter<"Media"> | number
    position?: JsonNullableFilter<"Media">
    type?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    metadata?: JsonNullableFilter<"Media">
    cabinetId?: IntFilter<"Media"> | number
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
    cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    type?: SortOrder
    url?: SortOrder
    metadata?: SortOrderInput | SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cabinet?: CabinetOrderByWithRelationInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    position?: JsonNullableFilter<"Media">
    type?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    metadata?: JsonNullableFilter<"Media">
    cabinetId?: IntFilter<"Media"> | number
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
    cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    type?: SortOrder
    url?: SortOrder
    metadata?: SortOrderInput | SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _avg?: MediaAvgOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
    _sum?: MediaSumOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Media"> | number
    position?: JsonNullableWithAggregatesFilter<"Media">
    type?: StringWithAggregatesFilter<"Media"> | string
    url?: StringWithAggregatesFilter<"Media"> | string
    metadata?: JsonNullableWithAggregatesFilter<"Media">
    cabinetId?: IntWithAggregatesFilter<"Media"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
  }

  export type ChecklistWhereInput = {
    AND?: ChecklistWhereInput | ChecklistWhereInput[]
    OR?: ChecklistWhereInput[]
    NOT?: ChecklistWhereInput | ChecklistWhereInput[]
    id?: IntFilter<"Checklist"> | number
    position?: JsonNullableFilter<"Checklist">
    title?: StringFilter<"Checklist"> | string
    items?: JsonFilter<"Checklist">
    cabinetId?: IntFilter<"Checklist"> | number
    createdAt?: DateTimeFilter<"Checklist"> | Date | string
    updatedAt?: DateTimeFilter<"Checklist"> | Date | string
    cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }

  export type ChecklistOrderByWithRelationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    title?: SortOrder
    items?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cabinet?: CabinetOrderByWithRelationInput
  }

  export type ChecklistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChecklistWhereInput | ChecklistWhereInput[]
    OR?: ChecklistWhereInput[]
    NOT?: ChecklistWhereInput | ChecklistWhereInput[]
    position?: JsonNullableFilter<"Checklist">
    title?: StringFilter<"Checklist"> | string
    items?: JsonFilter<"Checklist">
    cabinetId?: IntFilter<"Checklist"> | number
    createdAt?: DateTimeFilter<"Checklist"> | Date | string
    updatedAt?: DateTimeFilter<"Checklist"> | Date | string
    cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }, "id">

  export type ChecklistOrderByWithAggregationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    title?: SortOrder
    items?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChecklistCountOrderByAggregateInput
    _avg?: ChecklistAvgOrderByAggregateInput
    _max?: ChecklistMaxOrderByAggregateInput
    _min?: ChecklistMinOrderByAggregateInput
    _sum?: ChecklistSumOrderByAggregateInput
  }

  export type ChecklistScalarWhereWithAggregatesInput = {
    AND?: ChecklistScalarWhereWithAggregatesInput | ChecklistScalarWhereWithAggregatesInput[]
    OR?: ChecklistScalarWhereWithAggregatesInput[]
    NOT?: ChecklistScalarWhereWithAggregatesInput | ChecklistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Checklist"> | number
    position?: JsonNullableWithAggregatesFilter<"Checklist">
    title?: StringWithAggregatesFilter<"Checklist"> | string
    items?: JsonWithAggregatesFilter<"Checklist">
    cabinetId?: IntWithAggregatesFilter<"Checklist"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Checklist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Checklist"> | Date | string
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    id?: IntFilter<"Note"> | number
    position?: JsonNullableFilter<"Note">
    content?: StringFilter<"Note"> | string
    cabinetId?: IntFilter<"Note"> | number
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    content?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cabinet?: CabinetOrderByWithRelationInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    position?: JsonNullableFilter<"Note">
    content?: StringFilter<"Note"> | string
    cabinetId?: IntFilter<"Note"> | number
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
  }, "id">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    content?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _avg?: NoteAvgOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
    _sum?: NoteSumOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Note"> | number
    position?: JsonNullableWithAggregatesFilter<"Note">
    content?: StringWithAggregatesFilter<"Note"> | string
    cabinetId?: IntWithAggregatesFilter<"Note"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinets?: CabinetCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinets?: CabinetUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinets?: CabinetUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinets?: CabinetUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CabinetCreateInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCabinetsInput
    layout?: CabinetLayoutCreateNestedManyWithoutCabinetInput
    chest?: ChestCreateNestedOneWithoutCabinetInput
    journal?: JournalCreateNestedOneWithoutCabinetInput
    photoFrame?: PhotoFrameCreateNestedManyWithoutCabinetInput
    media?: MediaCreateNestedManyWithoutCabinetInput
    checklist?: ChecklistCreateNestedManyWithoutCabinetInput
    notes?: NoteCreateNestedManyWithoutCabinetInput
  }

  export type CabinetUncheckedCreateInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    layout?: CabinetLayoutUncheckedCreateNestedManyWithoutCabinetInput
    chest?: ChestUncheckedCreateNestedOneWithoutCabinetInput
    journal?: JournalUncheckedCreateNestedOneWithoutCabinetInput
    photoFrame?: PhotoFrameUncheckedCreateNestedManyWithoutCabinetInput
    media?: MediaUncheckedCreateNestedManyWithoutCabinetInput
    checklist?: ChecklistUncheckedCreateNestedManyWithoutCabinetInput
    notes?: NoteUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCabinetsNestedInput
    layout?: CabinetLayoutUpdateManyWithoutCabinetNestedInput
    chest?: ChestUpdateOneWithoutCabinetNestedInput
    journal?: JournalUpdateOneWithoutCabinetNestedInput
    photoFrame?: PhotoFrameUpdateManyWithoutCabinetNestedInput
    media?: MediaUpdateManyWithoutCabinetNestedInput
    checklist?: ChecklistUpdateManyWithoutCabinetNestedInput
    notes?: NoteUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    layout?: CabinetLayoutUncheckedUpdateManyWithoutCabinetNestedInput
    chest?: ChestUncheckedUpdateOneWithoutCabinetNestedInput
    journal?: JournalUncheckedUpdateOneWithoutCabinetNestedInput
    photoFrame?: PhotoFrameUncheckedUpdateManyWithoutCabinetNestedInput
    media?: MediaUncheckedUpdateManyWithoutCabinetNestedInput
    checklist?: ChecklistUncheckedUpdateManyWithoutCabinetNestedInput
    notes?: NoteUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetCreateManyInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
  }

  export type CabinetUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CabinetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type CabinetLayoutCreateInput = {
    name?: string | null
    layout: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinet: CabinetCreateNestedOneWithoutLayoutInput
  }

  export type CabinetLayoutUncheckedCreateInput = {
    id?: number
    name?: string | null
    layout: JsonNullValueInput | InputJsonValue
    cabinetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CabinetLayoutUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinet?: CabinetUpdateOneRequiredWithoutLayoutNestedInput
  }

  export type CabinetLayoutUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: JsonNullValueInput | InputJsonValue
    cabinetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CabinetLayoutCreateManyInput = {
    id?: number
    name?: string | null
    layout: JsonNullValueInput | InputJsonValue
    cabinetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CabinetLayoutUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CabinetLayoutUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: JsonNullValueInput | InputJsonValue
    cabinetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemItemCreateInput = {
    type: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemItemUncheckedCreateInput = {
    id?: number
    type: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemItemUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemItemCreateManyInput = {
    id?: number
    type: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemItemUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChestCreateInput = {
    passcode: string
    position?: NullableJsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinet: CabinetCreateNestedOneWithoutChestInput
  }

  export type ChestUncheckedCreateInput = {
    id?: number
    passcode: string
    position?: NullableJsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    cabinetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChestUpdateInput = {
    passcode?: StringFieldUpdateOperationsInput | string
    position?: NullableJsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinet?: CabinetUpdateOneRequiredWithoutChestNestedInput
  }

  export type ChestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    passcode?: StringFieldUpdateOperationsInput | string
    position?: NullableJsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    cabinetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChestCreateManyInput = {
    id?: number
    passcode: string
    position?: NullableJsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    cabinetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChestUpdateManyMutationInput = {
    passcode?: StringFieldUpdateOperationsInput | string
    position?: NullableJsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    passcode?: StringFieldUpdateOperationsInput | string
    position?: NullableJsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    cabinetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalCreateInput = {
    passcode: string
    position?: NullableJsonNullValueInput | InputJsonValue
    entries: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinet: CabinetCreateNestedOneWithoutJournalInput
  }

  export type JournalUncheckedCreateInput = {
    id?: number
    passcode: string
    position?: NullableJsonNullValueInput | InputJsonValue
    entries: JsonNullValueInput | InputJsonValue
    cabinetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalUpdateInput = {
    passcode?: StringFieldUpdateOperationsInput | string
    position?: NullableJsonNullValueInput | InputJsonValue
    entries?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinet?: CabinetUpdateOneRequiredWithoutJournalNestedInput
  }

  export type JournalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    passcode?: StringFieldUpdateOperationsInput | string
    position?: NullableJsonNullValueInput | InputJsonValue
    entries?: JsonNullValueInput | InputJsonValue
    cabinetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalCreateManyInput = {
    id?: number
    passcode: string
    position?: NullableJsonNullValueInput | InputJsonValue
    entries: JsonNullValueInput | InputJsonValue
    cabinetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalUpdateManyMutationInput = {
    passcode?: StringFieldUpdateOperationsInput | string
    position?: NullableJsonNullValueInput | InputJsonValue
    entries?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    passcode?: StringFieldUpdateOperationsInput | string
    position?: NullableJsonNullValueInput | InputJsonValue
    entries?: JsonNullValueInput | InputJsonValue
    cabinetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoFrameCreateInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    url: string
    caption?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinet: CabinetCreateNestedOneWithoutPhotoFrameInput
  }

  export type PhotoFrameUncheckedCreateInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    url: string
    caption?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    cabinetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoFrameUpdateInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinet?: CabinetUpdateOneRequiredWithoutPhotoFrameNestedInput
  }

  export type PhotoFrameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    cabinetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoFrameCreateManyInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    url: string
    caption?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    cabinetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoFrameUpdateManyMutationInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoFrameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    cabinetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    type: string
    url: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinet: CabinetCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    type: string
    url: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    cabinetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUpdateInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinet?: CabinetUpdateOneRequiredWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    cabinetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    type: string
    url: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    cabinetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    cabinetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistCreateInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    title: string
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinet: CabinetCreateNestedOneWithoutChecklistInput
  }

  export type ChecklistUncheckedCreateInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    title: string
    items: JsonNullValueInput | InputJsonValue
    cabinetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChecklistUpdateInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinet?: CabinetUpdateOneRequiredWithoutChecklistNestedInput
  }

  export type ChecklistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    cabinetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistCreateManyInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    title: string
    items: JsonNullValueInput | InputJsonValue
    cabinetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChecklistUpdateManyMutationInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    cabinetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinet: CabinetCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    content: string
    cabinetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinet?: CabinetUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    content?: StringFieldUpdateOperationsInput | string
    cabinetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateManyInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    content: string
    cabinetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateManyMutationInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    content?: StringFieldUpdateOperationsInput | string
    cabinetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CabinetListRelationFilter = {
    every?: CabinetWhereInput
    some?: CabinetWhereInput
    none?: CabinetWhereInput
  }

  export type CabinetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CabinetLayoutListRelationFilter = {
    every?: CabinetLayoutWhereInput
    some?: CabinetLayoutWhereInput
    none?: CabinetLayoutWhereInput
  }

  export type ChestNullableScalarRelationFilter = {
    is?: ChestWhereInput | null
    isNot?: ChestWhereInput | null
  }

  export type JournalNullableScalarRelationFilter = {
    is?: JournalWhereInput | null
    isNot?: JournalWhereInput | null
  }

  export type PhotoFrameListRelationFilter = {
    every?: PhotoFrameWhereInput
    some?: PhotoFrameWhereInput
    none?: PhotoFrameWhereInput
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type ChecklistListRelationFilter = {
    every?: ChecklistWhereInput
    some?: ChecklistWhereInput
    none?: ChecklistWhereInput
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type CabinetLayoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotoFrameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChecklistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CabinetCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type CabinetAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type CabinetMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type CabinetMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type CabinetSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CabinetScalarRelationFilter = {
    is?: CabinetWhereInput
    isNot?: CabinetWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CabinetLayoutCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    layout?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CabinetLayoutAvgOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
  }

  export type CabinetLayoutMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CabinetLayoutMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CabinetLayoutSumOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SystemItemCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemItemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SystemItemMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemItemMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemItemSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ChestCountOrderByAggregateInput = {
    id?: SortOrder
    passcode?: SortOrder
    position?: SortOrder
    items?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChestAvgOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
  }

  export type ChestMaxOrderByAggregateInput = {
    id?: SortOrder
    passcode?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChestMinOrderByAggregateInput = {
    id?: SortOrder
    passcode?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChestSumOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
  }

  export type JournalCountOrderByAggregateInput = {
    id?: SortOrder
    passcode?: SortOrder
    position?: SortOrder
    entries?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalAvgOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
  }

  export type JournalMaxOrderByAggregateInput = {
    id?: SortOrder
    passcode?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalMinOrderByAggregateInput = {
    id?: SortOrder
    passcode?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalSumOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
  }

  export type PhotoFrameCountOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    metadata?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotoFrameAvgOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
  }

  export type PhotoFrameMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotoFrameMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotoFrameSumOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    type?: SortOrder
    url?: SortOrder
    metadata?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaAvgOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaSumOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
  }

  export type ChecklistCountOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    title?: SortOrder
    items?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChecklistAvgOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
  }

  export type ChecklistMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChecklistMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChecklistSumOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    content?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteAvgOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    cabinetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteSumOrderByAggregateInput = {
    id?: SortOrder
    cabinetId?: SortOrder
  }

  export type CabinetCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CabinetCreateWithoutOwnerInput, CabinetUncheckedCreateWithoutOwnerInput> | CabinetCreateWithoutOwnerInput[] | CabinetUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CabinetCreateOrConnectWithoutOwnerInput | CabinetCreateOrConnectWithoutOwnerInput[]
    createMany?: CabinetCreateManyOwnerInputEnvelope
    connect?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
  }

  export type CabinetUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CabinetCreateWithoutOwnerInput, CabinetUncheckedCreateWithoutOwnerInput> | CabinetCreateWithoutOwnerInput[] | CabinetUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CabinetCreateOrConnectWithoutOwnerInput | CabinetCreateOrConnectWithoutOwnerInput[]
    createMany?: CabinetCreateManyOwnerInputEnvelope
    connect?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CabinetUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CabinetCreateWithoutOwnerInput, CabinetUncheckedCreateWithoutOwnerInput> | CabinetCreateWithoutOwnerInput[] | CabinetUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CabinetCreateOrConnectWithoutOwnerInput | CabinetCreateOrConnectWithoutOwnerInput[]
    upsert?: CabinetUpsertWithWhereUniqueWithoutOwnerInput | CabinetUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CabinetCreateManyOwnerInputEnvelope
    set?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    disconnect?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    delete?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    connect?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    update?: CabinetUpdateWithWhereUniqueWithoutOwnerInput | CabinetUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CabinetUpdateManyWithWhereWithoutOwnerInput | CabinetUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CabinetScalarWhereInput | CabinetScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CabinetUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CabinetCreateWithoutOwnerInput, CabinetUncheckedCreateWithoutOwnerInput> | CabinetCreateWithoutOwnerInput[] | CabinetUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CabinetCreateOrConnectWithoutOwnerInput | CabinetCreateOrConnectWithoutOwnerInput[]
    upsert?: CabinetUpsertWithWhereUniqueWithoutOwnerInput | CabinetUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CabinetCreateManyOwnerInputEnvelope
    set?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    disconnect?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    delete?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    connect?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    update?: CabinetUpdateWithWhereUniqueWithoutOwnerInput | CabinetUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CabinetUpdateManyWithWhereWithoutOwnerInput | CabinetUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CabinetScalarWhereInput | CabinetScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCabinetsInput = {
    create?: XOR<UserCreateWithoutCabinetsInput, UserUncheckedCreateWithoutCabinetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCabinetsInput
    connect?: UserWhereUniqueInput
  }

  export type CabinetLayoutCreateNestedManyWithoutCabinetInput = {
    create?: XOR<CabinetLayoutCreateWithoutCabinetInput, CabinetLayoutUncheckedCreateWithoutCabinetInput> | CabinetLayoutCreateWithoutCabinetInput[] | CabinetLayoutUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: CabinetLayoutCreateOrConnectWithoutCabinetInput | CabinetLayoutCreateOrConnectWithoutCabinetInput[]
    createMany?: CabinetLayoutCreateManyCabinetInputEnvelope
    connect?: CabinetLayoutWhereUniqueInput | CabinetLayoutWhereUniqueInput[]
  }

  export type ChestCreateNestedOneWithoutCabinetInput = {
    create?: XOR<ChestCreateWithoutCabinetInput, ChestUncheckedCreateWithoutCabinetInput>
    connectOrCreate?: ChestCreateOrConnectWithoutCabinetInput
    connect?: ChestWhereUniqueInput
  }

  export type JournalCreateNestedOneWithoutCabinetInput = {
    create?: XOR<JournalCreateWithoutCabinetInput, JournalUncheckedCreateWithoutCabinetInput>
    connectOrCreate?: JournalCreateOrConnectWithoutCabinetInput
    connect?: JournalWhereUniqueInput
  }

  export type PhotoFrameCreateNestedManyWithoutCabinetInput = {
    create?: XOR<PhotoFrameCreateWithoutCabinetInput, PhotoFrameUncheckedCreateWithoutCabinetInput> | PhotoFrameCreateWithoutCabinetInput[] | PhotoFrameUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: PhotoFrameCreateOrConnectWithoutCabinetInput | PhotoFrameCreateOrConnectWithoutCabinetInput[]
    createMany?: PhotoFrameCreateManyCabinetInputEnvelope
    connect?: PhotoFrameWhereUniqueInput | PhotoFrameWhereUniqueInput[]
  }

  export type MediaCreateNestedManyWithoutCabinetInput = {
    create?: XOR<MediaCreateWithoutCabinetInput, MediaUncheckedCreateWithoutCabinetInput> | MediaCreateWithoutCabinetInput[] | MediaUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutCabinetInput | MediaCreateOrConnectWithoutCabinetInput[]
    createMany?: MediaCreateManyCabinetInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type ChecklistCreateNestedManyWithoutCabinetInput = {
    create?: XOR<ChecklistCreateWithoutCabinetInput, ChecklistUncheckedCreateWithoutCabinetInput> | ChecklistCreateWithoutCabinetInput[] | ChecklistUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutCabinetInput | ChecklistCreateOrConnectWithoutCabinetInput[]
    createMany?: ChecklistCreateManyCabinetInputEnvelope
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutCabinetInput = {
    create?: XOR<NoteCreateWithoutCabinetInput, NoteUncheckedCreateWithoutCabinetInput> | NoteCreateWithoutCabinetInput[] | NoteUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutCabinetInput | NoteCreateOrConnectWithoutCabinetInput[]
    createMany?: NoteCreateManyCabinetInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type CabinetLayoutUncheckedCreateNestedManyWithoutCabinetInput = {
    create?: XOR<CabinetLayoutCreateWithoutCabinetInput, CabinetLayoutUncheckedCreateWithoutCabinetInput> | CabinetLayoutCreateWithoutCabinetInput[] | CabinetLayoutUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: CabinetLayoutCreateOrConnectWithoutCabinetInput | CabinetLayoutCreateOrConnectWithoutCabinetInput[]
    createMany?: CabinetLayoutCreateManyCabinetInputEnvelope
    connect?: CabinetLayoutWhereUniqueInput | CabinetLayoutWhereUniqueInput[]
  }

  export type ChestUncheckedCreateNestedOneWithoutCabinetInput = {
    create?: XOR<ChestCreateWithoutCabinetInput, ChestUncheckedCreateWithoutCabinetInput>
    connectOrCreate?: ChestCreateOrConnectWithoutCabinetInput
    connect?: ChestWhereUniqueInput
  }

  export type JournalUncheckedCreateNestedOneWithoutCabinetInput = {
    create?: XOR<JournalCreateWithoutCabinetInput, JournalUncheckedCreateWithoutCabinetInput>
    connectOrCreate?: JournalCreateOrConnectWithoutCabinetInput
    connect?: JournalWhereUniqueInput
  }

  export type PhotoFrameUncheckedCreateNestedManyWithoutCabinetInput = {
    create?: XOR<PhotoFrameCreateWithoutCabinetInput, PhotoFrameUncheckedCreateWithoutCabinetInput> | PhotoFrameCreateWithoutCabinetInput[] | PhotoFrameUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: PhotoFrameCreateOrConnectWithoutCabinetInput | PhotoFrameCreateOrConnectWithoutCabinetInput[]
    createMany?: PhotoFrameCreateManyCabinetInputEnvelope
    connect?: PhotoFrameWhereUniqueInput | PhotoFrameWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutCabinetInput = {
    create?: XOR<MediaCreateWithoutCabinetInput, MediaUncheckedCreateWithoutCabinetInput> | MediaCreateWithoutCabinetInput[] | MediaUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutCabinetInput | MediaCreateOrConnectWithoutCabinetInput[]
    createMany?: MediaCreateManyCabinetInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type ChecklistUncheckedCreateNestedManyWithoutCabinetInput = {
    create?: XOR<ChecklistCreateWithoutCabinetInput, ChecklistUncheckedCreateWithoutCabinetInput> | ChecklistCreateWithoutCabinetInput[] | ChecklistUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutCabinetInput | ChecklistCreateOrConnectWithoutCabinetInput[]
    createMany?: ChecklistCreateManyCabinetInputEnvelope
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutCabinetInput = {
    create?: XOR<NoteCreateWithoutCabinetInput, NoteUncheckedCreateWithoutCabinetInput> | NoteCreateWithoutCabinetInput[] | NoteUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutCabinetInput | NoteCreateOrConnectWithoutCabinetInput[]
    createMany?: NoteCreateManyCabinetInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCabinetsNestedInput = {
    create?: XOR<UserCreateWithoutCabinetsInput, UserUncheckedCreateWithoutCabinetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCabinetsInput
    upsert?: UserUpsertWithoutCabinetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCabinetsInput, UserUpdateWithoutCabinetsInput>, UserUncheckedUpdateWithoutCabinetsInput>
  }

  export type CabinetLayoutUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<CabinetLayoutCreateWithoutCabinetInput, CabinetLayoutUncheckedCreateWithoutCabinetInput> | CabinetLayoutCreateWithoutCabinetInput[] | CabinetLayoutUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: CabinetLayoutCreateOrConnectWithoutCabinetInput | CabinetLayoutCreateOrConnectWithoutCabinetInput[]
    upsert?: CabinetLayoutUpsertWithWhereUniqueWithoutCabinetInput | CabinetLayoutUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: CabinetLayoutCreateManyCabinetInputEnvelope
    set?: CabinetLayoutWhereUniqueInput | CabinetLayoutWhereUniqueInput[]
    disconnect?: CabinetLayoutWhereUniqueInput | CabinetLayoutWhereUniqueInput[]
    delete?: CabinetLayoutWhereUniqueInput | CabinetLayoutWhereUniqueInput[]
    connect?: CabinetLayoutWhereUniqueInput | CabinetLayoutWhereUniqueInput[]
    update?: CabinetLayoutUpdateWithWhereUniqueWithoutCabinetInput | CabinetLayoutUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: CabinetLayoutUpdateManyWithWhereWithoutCabinetInput | CabinetLayoutUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: CabinetLayoutScalarWhereInput | CabinetLayoutScalarWhereInput[]
  }

  export type ChestUpdateOneWithoutCabinetNestedInput = {
    create?: XOR<ChestCreateWithoutCabinetInput, ChestUncheckedCreateWithoutCabinetInput>
    connectOrCreate?: ChestCreateOrConnectWithoutCabinetInput
    upsert?: ChestUpsertWithoutCabinetInput
    disconnect?: ChestWhereInput | boolean
    delete?: ChestWhereInput | boolean
    connect?: ChestWhereUniqueInput
    update?: XOR<XOR<ChestUpdateToOneWithWhereWithoutCabinetInput, ChestUpdateWithoutCabinetInput>, ChestUncheckedUpdateWithoutCabinetInput>
  }

  export type JournalUpdateOneWithoutCabinetNestedInput = {
    create?: XOR<JournalCreateWithoutCabinetInput, JournalUncheckedCreateWithoutCabinetInput>
    connectOrCreate?: JournalCreateOrConnectWithoutCabinetInput
    upsert?: JournalUpsertWithoutCabinetInput
    disconnect?: JournalWhereInput | boolean
    delete?: JournalWhereInput | boolean
    connect?: JournalWhereUniqueInput
    update?: XOR<XOR<JournalUpdateToOneWithWhereWithoutCabinetInput, JournalUpdateWithoutCabinetInput>, JournalUncheckedUpdateWithoutCabinetInput>
  }

  export type PhotoFrameUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<PhotoFrameCreateWithoutCabinetInput, PhotoFrameUncheckedCreateWithoutCabinetInput> | PhotoFrameCreateWithoutCabinetInput[] | PhotoFrameUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: PhotoFrameCreateOrConnectWithoutCabinetInput | PhotoFrameCreateOrConnectWithoutCabinetInput[]
    upsert?: PhotoFrameUpsertWithWhereUniqueWithoutCabinetInput | PhotoFrameUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: PhotoFrameCreateManyCabinetInputEnvelope
    set?: PhotoFrameWhereUniqueInput | PhotoFrameWhereUniqueInput[]
    disconnect?: PhotoFrameWhereUniqueInput | PhotoFrameWhereUniqueInput[]
    delete?: PhotoFrameWhereUniqueInput | PhotoFrameWhereUniqueInput[]
    connect?: PhotoFrameWhereUniqueInput | PhotoFrameWhereUniqueInput[]
    update?: PhotoFrameUpdateWithWhereUniqueWithoutCabinetInput | PhotoFrameUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: PhotoFrameUpdateManyWithWhereWithoutCabinetInput | PhotoFrameUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: PhotoFrameScalarWhereInput | PhotoFrameScalarWhereInput[]
  }

  export type MediaUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<MediaCreateWithoutCabinetInput, MediaUncheckedCreateWithoutCabinetInput> | MediaCreateWithoutCabinetInput[] | MediaUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutCabinetInput | MediaCreateOrConnectWithoutCabinetInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutCabinetInput | MediaUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: MediaCreateManyCabinetInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutCabinetInput | MediaUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutCabinetInput | MediaUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type ChecklistUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<ChecklistCreateWithoutCabinetInput, ChecklistUncheckedCreateWithoutCabinetInput> | ChecklistCreateWithoutCabinetInput[] | ChecklistUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutCabinetInput | ChecklistCreateOrConnectWithoutCabinetInput[]
    upsert?: ChecklistUpsertWithWhereUniqueWithoutCabinetInput | ChecklistUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: ChecklistCreateManyCabinetInputEnvelope
    set?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    disconnect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    delete?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    update?: ChecklistUpdateWithWhereUniqueWithoutCabinetInput | ChecklistUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: ChecklistUpdateManyWithWhereWithoutCabinetInput | ChecklistUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<NoteCreateWithoutCabinetInput, NoteUncheckedCreateWithoutCabinetInput> | NoteCreateWithoutCabinetInput[] | NoteUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutCabinetInput | NoteCreateOrConnectWithoutCabinetInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutCabinetInput | NoteUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: NoteCreateManyCabinetInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutCabinetInput | NoteUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutCabinetInput | NoteUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type CabinetLayoutUncheckedUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<CabinetLayoutCreateWithoutCabinetInput, CabinetLayoutUncheckedCreateWithoutCabinetInput> | CabinetLayoutCreateWithoutCabinetInput[] | CabinetLayoutUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: CabinetLayoutCreateOrConnectWithoutCabinetInput | CabinetLayoutCreateOrConnectWithoutCabinetInput[]
    upsert?: CabinetLayoutUpsertWithWhereUniqueWithoutCabinetInput | CabinetLayoutUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: CabinetLayoutCreateManyCabinetInputEnvelope
    set?: CabinetLayoutWhereUniqueInput | CabinetLayoutWhereUniqueInput[]
    disconnect?: CabinetLayoutWhereUniqueInput | CabinetLayoutWhereUniqueInput[]
    delete?: CabinetLayoutWhereUniqueInput | CabinetLayoutWhereUniqueInput[]
    connect?: CabinetLayoutWhereUniqueInput | CabinetLayoutWhereUniqueInput[]
    update?: CabinetLayoutUpdateWithWhereUniqueWithoutCabinetInput | CabinetLayoutUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: CabinetLayoutUpdateManyWithWhereWithoutCabinetInput | CabinetLayoutUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: CabinetLayoutScalarWhereInput | CabinetLayoutScalarWhereInput[]
  }

  export type ChestUncheckedUpdateOneWithoutCabinetNestedInput = {
    create?: XOR<ChestCreateWithoutCabinetInput, ChestUncheckedCreateWithoutCabinetInput>
    connectOrCreate?: ChestCreateOrConnectWithoutCabinetInput
    upsert?: ChestUpsertWithoutCabinetInput
    disconnect?: ChestWhereInput | boolean
    delete?: ChestWhereInput | boolean
    connect?: ChestWhereUniqueInput
    update?: XOR<XOR<ChestUpdateToOneWithWhereWithoutCabinetInput, ChestUpdateWithoutCabinetInput>, ChestUncheckedUpdateWithoutCabinetInput>
  }

  export type JournalUncheckedUpdateOneWithoutCabinetNestedInput = {
    create?: XOR<JournalCreateWithoutCabinetInput, JournalUncheckedCreateWithoutCabinetInput>
    connectOrCreate?: JournalCreateOrConnectWithoutCabinetInput
    upsert?: JournalUpsertWithoutCabinetInput
    disconnect?: JournalWhereInput | boolean
    delete?: JournalWhereInput | boolean
    connect?: JournalWhereUniqueInput
    update?: XOR<XOR<JournalUpdateToOneWithWhereWithoutCabinetInput, JournalUpdateWithoutCabinetInput>, JournalUncheckedUpdateWithoutCabinetInput>
  }

  export type PhotoFrameUncheckedUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<PhotoFrameCreateWithoutCabinetInput, PhotoFrameUncheckedCreateWithoutCabinetInput> | PhotoFrameCreateWithoutCabinetInput[] | PhotoFrameUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: PhotoFrameCreateOrConnectWithoutCabinetInput | PhotoFrameCreateOrConnectWithoutCabinetInput[]
    upsert?: PhotoFrameUpsertWithWhereUniqueWithoutCabinetInput | PhotoFrameUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: PhotoFrameCreateManyCabinetInputEnvelope
    set?: PhotoFrameWhereUniqueInput | PhotoFrameWhereUniqueInput[]
    disconnect?: PhotoFrameWhereUniqueInput | PhotoFrameWhereUniqueInput[]
    delete?: PhotoFrameWhereUniqueInput | PhotoFrameWhereUniqueInput[]
    connect?: PhotoFrameWhereUniqueInput | PhotoFrameWhereUniqueInput[]
    update?: PhotoFrameUpdateWithWhereUniqueWithoutCabinetInput | PhotoFrameUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: PhotoFrameUpdateManyWithWhereWithoutCabinetInput | PhotoFrameUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: PhotoFrameScalarWhereInput | PhotoFrameScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<MediaCreateWithoutCabinetInput, MediaUncheckedCreateWithoutCabinetInput> | MediaCreateWithoutCabinetInput[] | MediaUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutCabinetInput | MediaCreateOrConnectWithoutCabinetInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutCabinetInput | MediaUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: MediaCreateManyCabinetInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutCabinetInput | MediaUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutCabinetInput | MediaUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type ChecklistUncheckedUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<ChecklistCreateWithoutCabinetInput, ChecklistUncheckedCreateWithoutCabinetInput> | ChecklistCreateWithoutCabinetInput[] | ChecklistUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutCabinetInput | ChecklistCreateOrConnectWithoutCabinetInput[]
    upsert?: ChecklistUpsertWithWhereUniqueWithoutCabinetInput | ChecklistUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: ChecklistCreateManyCabinetInputEnvelope
    set?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    disconnect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    delete?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    update?: ChecklistUpdateWithWhereUniqueWithoutCabinetInput | ChecklistUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: ChecklistUpdateManyWithWhereWithoutCabinetInput | ChecklistUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<NoteCreateWithoutCabinetInput, NoteUncheckedCreateWithoutCabinetInput> | NoteCreateWithoutCabinetInput[] | NoteUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutCabinetInput | NoteCreateOrConnectWithoutCabinetInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutCabinetInput | NoteUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: NoteCreateManyCabinetInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutCabinetInput | NoteUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutCabinetInput | NoteUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type CabinetCreateNestedOneWithoutLayoutInput = {
    create?: XOR<CabinetCreateWithoutLayoutInput, CabinetUncheckedCreateWithoutLayoutInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutLayoutInput
    connect?: CabinetWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CabinetUpdateOneRequiredWithoutLayoutNestedInput = {
    create?: XOR<CabinetCreateWithoutLayoutInput, CabinetUncheckedCreateWithoutLayoutInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutLayoutInput
    upsert?: CabinetUpsertWithoutLayoutInput
    connect?: CabinetWhereUniqueInput
    update?: XOR<XOR<CabinetUpdateToOneWithWhereWithoutLayoutInput, CabinetUpdateWithoutLayoutInput>, CabinetUncheckedUpdateWithoutLayoutInput>
  }

  export type CabinetCreateNestedOneWithoutChestInput = {
    create?: XOR<CabinetCreateWithoutChestInput, CabinetUncheckedCreateWithoutChestInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutChestInput
    connect?: CabinetWhereUniqueInput
  }

  export type CabinetUpdateOneRequiredWithoutChestNestedInput = {
    create?: XOR<CabinetCreateWithoutChestInput, CabinetUncheckedCreateWithoutChestInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutChestInput
    upsert?: CabinetUpsertWithoutChestInput
    connect?: CabinetWhereUniqueInput
    update?: XOR<XOR<CabinetUpdateToOneWithWhereWithoutChestInput, CabinetUpdateWithoutChestInput>, CabinetUncheckedUpdateWithoutChestInput>
  }

  export type CabinetCreateNestedOneWithoutJournalInput = {
    create?: XOR<CabinetCreateWithoutJournalInput, CabinetUncheckedCreateWithoutJournalInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutJournalInput
    connect?: CabinetWhereUniqueInput
  }

  export type CabinetUpdateOneRequiredWithoutJournalNestedInput = {
    create?: XOR<CabinetCreateWithoutJournalInput, CabinetUncheckedCreateWithoutJournalInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutJournalInput
    upsert?: CabinetUpsertWithoutJournalInput
    connect?: CabinetWhereUniqueInput
    update?: XOR<XOR<CabinetUpdateToOneWithWhereWithoutJournalInput, CabinetUpdateWithoutJournalInput>, CabinetUncheckedUpdateWithoutJournalInput>
  }

  export type CabinetCreateNestedOneWithoutPhotoFrameInput = {
    create?: XOR<CabinetCreateWithoutPhotoFrameInput, CabinetUncheckedCreateWithoutPhotoFrameInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutPhotoFrameInput
    connect?: CabinetWhereUniqueInput
  }

  export type CabinetUpdateOneRequiredWithoutPhotoFrameNestedInput = {
    create?: XOR<CabinetCreateWithoutPhotoFrameInput, CabinetUncheckedCreateWithoutPhotoFrameInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutPhotoFrameInput
    upsert?: CabinetUpsertWithoutPhotoFrameInput
    connect?: CabinetWhereUniqueInput
    update?: XOR<XOR<CabinetUpdateToOneWithWhereWithoutPhotoFrameInput, CabinetUpdateWithoutPhotoFrameInput>, CabinetUncheckedUpdateWithoutPhotoFrameInput>
  }

  export type CabinetCreateNestedOneWithoutMediaInput = {
    create?: XOR<CabinetCreateWithoutMediaInput, CabinetUncheckedCreateWithoutMediaInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutMediaInput
    connect?: CabinetWhereUniqueInput
  }

  export type CabinetUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<CabinetCreateWithoutMediaInput, CabinetUncheckedCreateWithoutMediaInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutMediaInput
    upsert?: CabinetUpsertWithoutMediaInput
    connect?: CabinetWhereUniqueInput
    update?: XOR<XOR<CabinetUpdateToOneWithWhereWithoutMediaInput, CabinetUpdateWithoutMediaInput>, CabinetUncheckedUpdateWithoutMediaInput>
  }

  export type CabinetCreateNestedOneWithoutChecklistInput = {
    create?: XOR<CabinetCreateWithoutChecklistInput, CabinetUncheckedCreateWithoutChecklistInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutChecklistInput
    connect?: CabinetWhereUniqueInput
  }

  export type CabinetUpdateOneRequiredWithoutChecklistNestedInput = {
    create?: XOR<CabinetCreateWithoutChecklistInput, CabinetUncheckedCreateWithoutChecklistInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutChecklistInput
    upsert?: CabinetUpsertWithoutChecklistInput
    connect?: CabinetWhereUniqueInput
    update?: XOR<XOR<CabinetUpdateToOneWithWhereWithoutChecklistInput, CabinetUpdateWithoutChecklistInput>, CabinetUncheckedUpdateWithoutChecklistInput>
  }

  export type CabinetCreateNestedOneWithoutNotesInput = {
    create?: XOR<CabinetCreateWithoutNotesInput, CabinetUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutNotesInput
    connect?: CabinetWhereUniqueInput
  }

  export type CabinetUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<CabinetCreateWithoutNotesInput, CabinetUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutNotesInput
    upsert?: CabinetUpsertWithoutNotesInput
    connect?: CabinetWhereUniqueInput
    update?: XOR<XOR<CabinetUpdateToOneWithWhereWithoutNotesInput, CabinetUpdateWithoutNotesInput>, CabinetUncheckedUpdateWithoutNotesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CabinetCreateWithoutOwnerInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    layout?: CabinetLayoutCreateNestedManyWithoutCabinetInput
    chest?: ChestCreateNestedOneWithoutCabinetInput
    journal?: JournalCreateNestedOneWithoutCabinetInput
    photoFrame?: PhotoFrameCreateNestedManyWithoutCabinetInput
    media?: MediaCreateNestedManyWithoutCabinetInput
    checklist?: ChecklistCreateNestedManyWithoutCabinetInput
    notes?: NoteCreateNestedManyWithoutCabinetInput
  }

  export type CabinetUncheckedCreateWithoutOwnerInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    layout?: CabinetLayoutUncheckedCreateNestedManyWithoutCabinetInput
    chest?: ChestUncheckedCreateNestedOneWithoutCabinetInput
    journal?: JournalUncheckedCreateNestedOneWithoutCabinetInput
    photoFrame?: PhotoFrameUncheckedCreateNestedManyWithoutCabinetInput
    media?: MediaUncheckedCreateNestedManyWithoutCabinetInput
    checklist?: ChecklistUncheckedCreateNestedManyWithoutCabinetInput
    notes?: NoteUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetCreateOrConnectWithoutOwnerInput = {
    where: CabinetWhereUniqueInput
    create: XOR<CabinetCreateWithoutOwnerInput, CabinetUncheckedCreateWithoutOwnerInput>
  }

  export type CabinetCreateManyOwnerInputEnvelope = {
    data: CabinetCreateManyOwnerInput | CabinetCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type CabinetUpsertWithWhereUniqueWithoutOwnerInput = {
    where: CabinetWhereUniqueInput
    update: XOR<CabinetUpdateWithoutOwnerInput, CabinetUncheckedUpdateWithoutOwnerInput>
    create: XOR<CabinetCreateWithoutOwnerInput, CabinetUncheckedCreateWithoutOwnerInput>
  }

  export type CabinetUpdateWithWhereUniqueWithoutOwnerInput = {
    where: CabinetWhereUniqueInput
    data: XOR<CabinetUpdateWithoutOwnerInput, CabinetUncheckedUpdateWithoutOwnerInput>
  }

  export type CabinetUpdateManyWithWhereWithoutOwnerInput = {
    where: CabinetScalarWhereInput
    data: XOR<CabinetUpdateManyMutationInput, CabinetUncheckedUpdateManyWithoutOwnerInput>
  }

  export type CabinetScalarWhereInput = {
    AND?: CabinetScalarWhereInput | CabinetScalarWhereInput[]
    OR?: CabinetScalarWhereInput[]
    NOT?: CabinetScalarWhereInput | CabinetScalarWhereInput[]
    id?: IntFilter<"Cabinet"> | number
    title?: StringFilter<"Cabinet"> | string
    createdAt?: DateTimeFilter<"Cabinet"> | Date | string
    updatedAt?: DateTimeFilter<"Cabinet"> | Date | string
    ownerId?: IntFilter<"Cabinet"> | number
  }

  export type UserCreateWithoutCabinetsInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutCabinetsInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutCabinetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCabinetsInput, UserUncheckedCreateWithoutCabinetsInput>
  }

  export type CabinetLayoutCreateWithoutCabinetInput = {
    name?: string | null
    layout: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CabinetLayoutUncheckedCreateWithoutCabinetInput = {
    id?: number
    name?: string | null
    layout: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CabinetLayoutCreateOrConnectWithoutCabinetInput = {
    where: CabinetLayoutWhereUniqueInput
    create: XOR<CabinetLayoutCreateWithoutCabinetInput, CabinetLayoutUncheckedCreateWithoutCabinetInput>
  }

  export type CabinetLayoutCreateManyCabinetInputEnvelope = {
    data: CabinetLayoutCreateManyCabinetInput | CabinetLayoutCreateManyCabinetInput[]
    skipDuplicates?: boolean
  }

  export type ChestCreateWithoutCabinetInput = {
    passcode: string
    position?: NullableJsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChestUncheckedCreateWithoutCabinetInput = {
    id?: number
    passcode: string
    position?: NullableJsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChestCreateOrConnectWithoutCabinetInput = {
    where: ChestWhereUniqueInput
    create: XOR<ChestCreateWithoutCabinetInput, ChestUncheckedCreateWithoutCabinetInput>
  }

  export type JournalCreateWithoutCabinetInput = {
    passcode: string
    position?: NullableJsonNullValueInput | InputJsonValue
    entries: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalUncheckedCreateWithoutCabinetInput = {
    id?: number
    passcode: string
    position?: NullableJsonNullValueInput | InputJsonValue
    entries: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalCreateOrConnectWithoutCabinetInput = {
    where: JournalWhereUniqueInput
    create: XOR<JournalCreateWithoutCabinetInput, JournalUncheckedCreateWithoutCabinetInput>
  }

  export type PhotoFrameCreateWithoutCabinetInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    url: string
    caption?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoFrameUncheckedCreateWithoutCabinetInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    url: string
    caption?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoFrameCreateOrConnectWithoutCabinetInput = {
    where: PhotoFrameWhereUniqueInput
    create: XOR<PhotoFrameCreateWithoutCabinetInput, PhotoFrameUncheckedCreateWithoutCabinetInput>
  }

  export type PhotoFrameCreateManyCabinetInputEnvelope = {
    data: PhotoFrameCreateManyCabinetInput | PhotoFrameCreateManyCabinetInput[]
    skipDuplicates?: boolean
  }

  export type MediaCreateWithoutCabinetInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    type: string
    url: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUncheckedCreateWithoutCabinetInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    type: string
    url: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaCreateOrConnectWithoutCabinetInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutCabinetInput, MediaUncheckedCreateWithoutCabinetInput>
  }

  export type MediaCreateManyCabinetInputEnvelope = {
    data: MediaCreateManyCabinetInput | MediaCreateManyCabinetInput[]
    skipDuplicates?: boolean
  }

  export type ChecklistCreateWithoutCabinetInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    title: string
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChecklistUncheckedCreateWithoutCabinetInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    title: string
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChecklistCreateOrConnectWithoutCabinetInput = {
    where: ChecklistWhereUniqueInput
    create: XOR<ChecklistCreateWithoutCabinetInput, ChecklistUncheckedCreateWithoutCabinetInput>
  }

  export type ChecklistCreateManyCabinetInputEnvelope = {
    data: ChecklistCreateManyCabinetInput | ChecklistCreateManyCabinetInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutCabinetInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUncheckedCreateWithoutCabinetInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteCreateOrConnectWithoutCabinetInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutCabinetInput, NoteUncheckedCreateWithoutCabinetInput>
  }

  export type NoteCreateManyCabinetInputEnvelope = {
    data: NoteCreateManyCabinetInput | NoteCreateManyCabinetInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCabinetsInput = {
    update: XOR<UserUpdateWithoutCabinetsInput, UserUncheckedUpdateWithoutCabinetsInput>
    create: XOR<UserCreateWithoutCabinetsInput, UserUncheckedCreateWithoutCabinetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCabinetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCabinetsInput, UserUncheckedUpdateWithoutCabinetsInput>
  }

  export type UserUpdateWithoutCabinetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCabinetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CabinetLayoutUpsertWithWhereUniqueWithoutCabinetInput = {
    where: CabinetLayoutWhereUniqueInput
    update: XOR<CabinetLayoutUpdateWithoutCabinetInput, CabinetLayoutUncheckedUpdateWithoutCabinetInput>
    create: XOR<CabinetLayoutCreateWithoutCabinetInput, CabinetLayoutUncheckedCreateWithoutCabinetInput>
  }

  export type CabinetLayoutUpdateWithWhereUniqueWithoutCabinetInput = {
    where: CabinetLayoutWhereUniqueInput
    data: XOR<CabinetLayoutUpdateWithoutCabinetInput, CabinetLayoutUncheckedUpdateWithoutCabinetInput>
  }

  export type CabinetLayoutUpdateManyWithWhereWithoutCabinetInput = {
    where: CabinetLayoutScalarWhereInput
    data: XOR<CabinetLayoutUpdateManyMutationInput, CabinetLayoutUncheckedUpdateManyWithoutCabinetInput>
  }

  export type CabinetLayoutScalarWhereInput = {
    AND?: CabinetLayoutScalarWhereInput | CabinetLayoutScalarWhereInput[]
    OR?: CabinetLayoutScalarWhereInput[]
    NOT?: CabinetLayoutScalarWhereInput | CabinetLayoutScalarWhereInput[]
    id?: IntFilter<"CabinetLayout"> | number
    name?: StringNullableFilter<"CabinetLayout"> | string | null
    layout?: JsonFilter<"CabinetLayout">
    cabinetId?: IntFilter<"CabinetLayout"> | number
    createdAt?: DateTimeFilter<"CabinetLayout"> | Date | string
    updatedAt?: DateTimeFilter<"CabinetLayout"> | Date | string
  }

  export type ChestUpsertWithoutCabinetInput = {
    update: XOR<ChestUpdateWithoutCabinetInput, ChestUncheckedUpdateWithoutCabinetInput>
    create: XOR<ChestCreateWithoutCabinetInput, ChestUncheckedCreateWithoutCabinetInput>
    where?: ChestWhereInput
  }

  export type ChestUpdateToOneWithWhereWithoutCabinetInput = {
    where?: ChestWhereInput
    data: XOR<ChestUpdateWithoutCabinetInput, ChestUncheckedUpdateWithoutCabinetInput>
  }

  export type ChestUpdateWithoutCabinetInput = {
    passcode?: StringFieldUpdateOperationsInput | string
    position?: NullableJsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChestUncheckedUpdateWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    passcode?: StringFieldUpdateOperationsInput | string
    position?: NullableJsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalUpsertWithoutCabinetInput = {
    update: XOR<JournalUpdateWithoutCabinetInput, JournalUncheckedUpdateWithoutCabinetInput>
    create: XOR<JournalCreateWithoutCabinetInput, JournalUncheckedCreateWithoutCabinetInput>
    where?: JournalWhereInput
  }

  export type JournalUpdateToOneWithWhereWithoutCabinetInput = {
    where?: JournalWhereInput
    data: XOR<JournalUpdateWithoutCabinetInput, JournalUncheckedUpdateWithoutCabinetInput>
  }

  export type JournalUpdateWithoutCabinetInput = {
    passcode?: StringFieldUpdateOperationsInput | string
    position?: NullableJsonNullValueInput | InputJsonValue
    entries?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalUncheckedUpdateWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    passcode?: StringFieldUpdateOperationsInput | string
    position?: NullableJsonNullValueInput | InputJsonValue
    entries?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoFrameUpsertWithWhereUniqueWithoutCabinetInput = {
    where: PhotoFrameWhereUniqueInput
    update: XOR<PhotoFrameUpdateWithoutCabinetInput, PhotoFrameUncheckedUpdateWithoutCabinetInput>
    create: XOR<PhotoFrameCreateWithoutCabinetInput, PhotoFrameUncheckedCreateWithoutCabinetInput>
  }

  export type PhotoFrameUpdateWithWhereUniqueWithoutCabinetInput = {
    where: PhotoFrameWhereUniqueInput
    data: XOR<PhotoFrameUpdateWithoutCabinetInput, PhotoFrameUncheckedUpdateWithoutCabinetInput>
  }

  export type PhotoFrameUpdateManyWithWhereWithoutCabinetInput = {
    where: PhotoFrameScalarWhereInput
    data: XOR<PhotoFrameUpdateManyMutationInput, PhotoFrameUncheckedUpdateManyWithoutCabinetInput>
  }

  export type PhotoFrameScalarWhereInput = {
    AND?: PhotoFrameScalarWhereInput | PhotoFrameScalarWhereInput[]
    OR?: PhotoFrameScalarWhereInput[]
    NOT?: PhotoFrameScalarWhereInput | PhotoFrameScalarWhereInput[]
    id?: IntFilter<"PhotoFrame"> | number
    position?: JsonNullableFilter<"PhotoFrame">
    url?: StringFilter<"PhotoFrame"> | string
    caption?: StringNullableFilter<"PhotoFrame"> | string | null
    metadata?: JsonNullableFilter<"PhotoFrame">
    cabinetId?: IntFilter<"PhotoFrame"> | number
    createdAt?: DateTimeFilter<"PhotoFrame"> | Date | string
    updatedAt?: DateTimeFilter<"PhotoFrame"> | Date | string
  }

  export type MediaUpsertWithWhereUniqueWithoutCabinetInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutCabinetInput, MediaUncheckedUpdateWithoutCabinetInput>
    create: XOR<MediaCreateWithoutCabinetInput, MediaUncheckedCreateWithoutCabinetInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutCabinetInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutCabinetInput, MediaUncheckedUpdateWithoutCabinetInput>
  }

  export type MediaUpdateManyWithWhereWithoutCabinetInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutCabinetInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: IntFilter<"Media"> | number
    position?: JsonNullableFilter<"Media">
    type?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    metadata?: JsonNullableFilter<"Media">
    cabinetId?: IntFilter<"Media"> | number
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
  }

  export type ChecklistUpsertWithWhereUniqueWithoutCabinetInput = {
    where: ChecklistWhereUniqueInput
    update: XOR<ChecklistUpdateWithoutCabinetInput, ChecklistUncheckedUpdateWithoutCabinetInput>
    create: XOR<ChecklistCreateWithoutCabinetInput, ChecklistUncheckedCreateWithoutCabinetInput>
  }

  export type ChecklistUpdateWithWhereUniqueWithoutCabinetInput = {
    where: ChecklistWhereUniqueInput
    data: XOR<ChecklistUpdateWithoutCabinetInput, ChecklistUncheckedUpdateWithoutCabinetInput>
  }

  export type ChecklistUpdateManyWithWhereWithoutCabinetInput = {
    where: ChecklistScalarWhereInput
    data: XOR<ChecklistUpdateManyMutationInput, ChecklistUncheckedUpdateManyWithoutCabinetInput>
  }

  export type ChecklistScalarWhereInput = {
    AND?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
    OR?: ChecklistScalarWhereInput[]
    NOT?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
    id?: IntFilter<"Checklist"> | number
    position?: JsonNullableFilter<"Checklist">
    title?: StringFilter<"Checklist"> | string
    items?: JsonFilter<"Checklist">
    cabinetId?: IntFilter<"Checklist"> | number
    createdAt?: DateTimeFilter<"Checklist"> | Date | string
    updatedAt?: DateTimeFilter<"Checklist"> | Date | string
  }

  export type NoteUpsertWithWhereUniqueWithoutCabinetInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutCabinetInput, NoteUncheckedUpdateWithoutCabinetInput>
    create: XOR<NoteCreateWithoutCabinetInput, NoteUncheckedCreateWithoutCabinetInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutCabinetInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutCabinetInput, NoteUncheckedUpdateWithoutCabinetInput>
  }

  export type NoteUpdateManyWithWhereWithoutCabinetInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutCabinetInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    id?: IntFilter<"Note"> | number
    position?: JsonNullableFilter<"Note">
    content?: StringFilter<"Note"> | string
    cabinetId?: IntFilter<"Note"> | number
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
  }

  export type CabinetCreateWithoutLayoutInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCabinetsInput
    chest?: ChestCreateNestedOneWithoutCabinetInput
    journal?: JournalCreateNestedOneWithoutCabinetInput
    photoFrame?: PhotoFrameCreateNestedManyWithoutCabinetInput
    media?: MediaCreateNestedManyWithoutCabinetInput
    checklist?: ChecklistCreateNestedManyWithoutCabinetInput
    notes?: NoteCreateNestedManyWithoutCabinetInput
  }

  export type CabinetUncheckedCreateWithoutLayoutInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    chest?: ChestUncheckedCreateNestedOneWithoutCabinetInput
    journal?: JournalUncheckedCreateNestedOneWithoutCabinetInput
    photoFrame?: PhotoFrameUncheckedCreateNestedManyWithoutCabinetInput
    media?: MediaUncheckedCreateNestedManyWithoutCabinetInput
    checklist?: ChecklistUncheckedCreateNestedManyWithoutCabinetInput
    notes?: NoteUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetCreateOrConnectWithoutLayoutInput = {
    where: CabinetWhereUniqueInput
    create: XOR<CabinetCreateWithoutLayoutInput, CabinetUncheckedCreateWithoutLayoutInput>
  }

  export type CabinetUpsertWithoutLayoutInput = {
    update: XOR<CabinetUpdateWithoutLayoutInput, CabinetUncheckedUpdateWithoutLayoutInput>
    create: XOR<CabinetCreateWithoutLayoutInput, CabinetUncheckedCreateWithoutLayoutInput>
    where?: CabinetWhereInput
  }

  export type CabinetUpdateToOneWithWhereWithoutLayoutInput = {
    where?: CabinetWhereInput
    data: XOR<CabinetUpdateWithoutLayoutInput, CabinetUncheckedUpdateWithoutLayoutInput>
  }

  export type CabinetUpdateWithoutLayoutInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCabinetsNestedInput
    chest?: ChestUpdateOneWithoutCabinetNestedInput
    journal?: JournalUpdateOneWithoutCabinetNestedInput
    photoFrame?: PhotoFrameUpdateManyWithoutCabinetNestedInput
    media?: MediaUpdateManyWithoutCabinetNestedInput
    checklist?: ChecklistUpdateManyWithoutCabinetNestedInput
    notes?: NoteUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetUncheckedUpdateWithoutLayoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    chest?: ChestUncheckedUpdateOneWithoutCabinetNestedInput
    journal?: JournalUncheckedUpdateOneWithoutCabinetNestedInput
    photoFrame?: PhotoFrameUncheckedUpdateManyWithoutCabinetNestedInput
    media?: MediaUncheckedUpdateManyWithoutCabinetNestedInput
    checklist?: ChecklistUncheckedUpdateManyWithoutCabinetNestedInput
    notes?: NoteUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetCreateWithoutChestInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCabinetsInput
    layout?: CabinetLayoutCreateNestedManyWithoutCabinetInput
    journal?: JournalCreateNestedOneWithoutCabinetInput
    photoFrame?: PhotoFrameCreateNestedManyWithoutCabinetInput
    media?: MediaCreateNestedManyWithoutCabinetInput
    checklist?: ChecklistCreateNestedManyWithoutCabinetInput
    notes?: NoteCreateNestedManyWithoutCabinetInput
  }

  export type CabinetUncheckedCreateWithoutChestInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    layout?: CabinetLayoutUncheckedCreateNestedManyWithoutCabinetInput
    journal?: JournalUncheckedCreateNestedOneWithoutCabinetInput
    photoFrame?: PhotoFrameUncheckedCreateNestedManyWithoutCabinetInput
    media?: MediaUncheckedCreateNestedManyWithoutCabinetInput
    checklist?: ChecklistUncheckedCreateNestedManyWithoutCabinetInput
    notes?: NoteUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetCreateOrConnectWithoutChestInput = {
    where: CabinetWhereUniqueInput
    create: XOR<CabinetCreateWithoutChestInput, CabinetUncheckedCreateWithoutChestInput>
  }

  export type CabinetUpsertWithoutChestInput = {
    update: XOR<CabinetUpdateWithoutChestInput, CabinetUncheckedUpdateWithoutChestInput>
    create: XOR<CabinetCreateWithoutChestInput, CabinetUncheckedCreateWithoutChestInput>
    where?: CabinetWhereInput
  }

  export type CabinetUpdateToOneWithWhereWithoutChestInput = {
    where?: CabinetWhereInput
    data: XOR<CabinetUpdateWithoutChestInput, CabinetUncheckedUpdateWithoutChestInput>
  }

  export type CabinetUpdateWithoutChestInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCabinetsNestedInput
    layout?: CabinetLayoutUpdateManyWithoutCabinetNestedInput
    journal?: JournalUpdateOneWithoutCabinetNestedInput
    photoFrame?: PhotoFrameUpdateManyWithoutCabinetNestedInput
    media?: MediaUpdateManyWithoutCabinetNestedInput
    checklist?: ChecklistUpdateManyWithoutCabinetNestedInput
    notes?: NoteUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetUncheckedUpdateWithoutChestInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    layout?: CabinetLayoutUncheckedUpdateManyWithoutCabinetNestedInput
    journal?: JournalUncheckedUpdateOneWithoutCabinetNestedInput
    photoFrame?: PhotoFrameUncheckedUpdateManyWithoutCabinetNestedInput
    media?: MediaUncheckedUpdateManyWithoutCabinetNestedInput
    checklist?: ChecklistUncheckedUpdateManyWithoutCabinetNestedInput
    notes?: NoteUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetCreateWithoutJournalInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCabinetsInput
    layout?: CabinetLayoutCreateNestedManyWithoutCabinetInput
    chest?: ChestCreateNestedOneWithoutCabinetInput
    photoFrame?: PhotoFrameCreateNestedManyWithoutCabinetInput
    media?: MediaCreateNestedManyWithoutCabinetInput
    checklist?: ChecklistCreateNestedManyWithoutCabinetInput
    notes?: NoteCreateNestedManyWithoutCabinetInput
  }

  export type CabinetUncheckedCreateWithoutJournalInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    layout?: CabinetLayoutUncheckedCreateNestedManyWithoutCabinetInput
    chest?: ChestUncheckedCreateNestedOneWithoutCabinetInput
    photoFrame?: PhotoFrameUncheckedCreateNestedManyWithoutCabinetInput
    media?: MediaUncheckedCreateNestedManyWithoutCabinetInput
    checklist?: ChecklistUncheckedCreateNestedManyWithoutCabinetInput
    notes?: NoteUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetCreateOrConnectWithoutJournalInput = {
    where: CabinetWhereUniqueInput
    create: XOR<CabinetCreateWithoutJournalInput, CabinetUncheckedCreateWithoutJournalInput>
  }

  export type CabinetUpsertWithoutJournalInput = {
    update: XOR<CabinetUpdateWithoutJournalInput, CabinetUncheckedUpdateWithoutJournalInput>
    create: XOR<CabinetCreateWithoutJournalInput, CabinetUncheckedCreateWithoutJournalInput>
    where?: CabinetWhereInput
  }

  export type CabinetUpdateToOneWithWhereWithoutJournalInput = {
    where?: CabinetWhereInput
    data: XOR<CabinetUpdateWithoutJournalInput, CabinetUncheckedUpdateWithoutJournalInput>
  }

  export type CabinetUpdateWithoutJournalInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCabinetsNestedInput
    layout?: CabinetLayoutUpdateManyWithoutCabinetNestedInput
    chest?: ChestUpdateOneWithoutCabinetNestedInput
    photoFrame?: PhotoFrameUpdateManyWithoutCabinetNestedInput
    media?: MediaUpdateManyWithoutCabinetNestedInput
    checklist?: ChecklistUpdateManyWithoutCabinetNestedInput
    notes?: NoteUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetUncheckedUpdateWithoutJournalInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    layout?: CabinetLayoutUncheckedUpdateManyWithoutCabinetNestedInput
    chest?: ChestUncheckedUpdateOneWithoutCabinetNestedInput
    photoFrame?: PhotoFrameUncheckedUpdateManyWithoutCabinetNestedInput
    media?: MediaUncheckedUpdateManyWithoutCabinetNestedInput
    checklist?: ChecklistUncheckedUpdateManyWithoutCabinetNestedInput
    notes?: NoteUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetCreateWithoutPhotoFrameInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCabinetsInput
    layout?: CabinetLayoutCreateNestedManyWithoutCabinetInput
    chest?: ChestCreateNestedOneWithoutCabinetInput
    journal?: JournalCreateNestedOneWithoutCabinetInput
    media?: MediaCreateNestedManyWithoutCabinetInput
    checklist?: ChecklistCreateNestedManyWithoutCabinetInput
    notes?: NoteCreateNestedManyWithoutCabinetInput
  }

  export type CabinetUncheckedCreateWithoutPhotoFrameInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    layout?: CabinetLayoutUncheckedCreateNestedManyWithoutCabinetInput
    chest?: ChestUncheckedCreateNestedOneWithoutCabinetInput
    journal?: JournalUncheckedCreateNestedOneWithoutCabinetInput
    media?: MediaUncheckedCreateNestedManyWithoutCabinetInput
    checklist?: ChecklistUncheckedCreateNestedManyWithoutCabinetInput
    notes?: NoteUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetCreateOrConnectWithoutPhotoFrameInput = {
    where: CabinetWhereUniqueInput
    create: XOR<CabinetCreateWithoutPhotoFrameInput, CabinetUncheckedCreateWithoutPhotoFrameInput>
  }

  export type CabinetUpsertWithoutPhotoFrameInput = {
    update: XOR<CabinetUpdateWithoutPhotoFrameInput, CabinetUncheckedUpdateWithoutPhotoFrameInput>
    create: XOR<CabinetCreateWithoutPhotoFrameInput, CabinetUncheckedCreateWithoutPhotoFrameInput>
    where?: CabinetWhereInput
  }

  export type CabinetUpdateToOneWithWhereWithoutPhotoFrameInput = {
    where?: CabinetWhereInput
    data: XOR<CabinetUpdateWithoutPhotoFrameInput, CabinetUncheckedUpdateWithoutPhotoFrameInput>
  }

  export type CabinetUpdateWithoutPhotoFrameInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCabinetsNestedInput
    layout?: CabinetLayoutUpdateManyWithoutCabinetNestedInput
    chest?: ChestUpdateOneWithoutCabinetNestedInput
    journal?: JournalUpdateOneWithoutCabinetNestedInput
    media?: MediaUpdateManyWithoutCabinetNestedInput
    checklist?: ChecklistUpdateManyWithoutCabinetNestedInput
    notes?: NoteUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetUncheckedUpdateWithoutPhotoFrameInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    layout?: CabinetLayoutUncheckedUpdateManyWithoutCabinetNestedInput
    chest?: ChestUncheckedUpdateOneWithoutCabinetNestedInput
    journal?: JournalUncheckedUpdateOneWithoutCabinetNestedInput
    media?: MediaUncheckedUpdateManyWithoutCabinetNestedInput
    checklist?: ChecklistUncheckedUpdateManyWithoutCabinetNestedInput
    notes?: NoteUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetCreateWithoutMediaInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCabinetsInput
    layout?: CabinetLayoutCreateNestedManyWithoutCabinetInput
    chest?: ChestCreateNestedOneWithoutCabinetInput
    journal?: JournalCreateNestedOneWithoutCabinetInput
    photoFrame?: PhotoFrameCreateNestedManyWithoutCabinetInput
    checklist?: ChecklistCreateNestedManyWithoutCabinetInput
    notes?: NoteCreateNestedManyWithoutCabinetInput
  }

  export type CabinetUncheckedCreateWithoutMediaInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    layout?: CabinetLayoutUncheckedCreateNestedManyWithoutCabinetInput
    chest?: ChestUncheckedCreateNestedOneWithoutCabinetInput
    journal?: JournalUncheckedCreateNestedOneWithoutCabinetInput
    photoFrame?: PhotoFrameUncheckedCreateNestedManyWithoutCabinetInput
    checklist?: ChecklistUncheckedCreateNestedManyWithoutCabinetInput
    notes?: NoteUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetCreateOrConnectWithoutMediaInput = {
    where: CabinetWhereUniqueInput
    create: XOR<CabinetCreateWithoutMediaInput, CabinetUncheckedCreateWithoutMediaInput>
  }

  export type CabinetUpsertWithoutMediaInput = {
    update: XOR<CabinetUpdateWithoutMediaInput, CabinetUncheckedUpdateWithoutMediaInput>
    create: XOR<CabinetCreateWithoutMediaInput, CabinetUncheckedCreateWithoutMediaInput>
    where?: CabinetWhereInput
  }

  export type CabinetUpdateToOneWithWhereWithoutMediaInput = {
    where?: CabinetWhereInput
    data: XOR<CabinetUpdateWithoutMediaInput, CabinetUncheckedUpdateWithoutMediaInput>
  }

  export type CabinetUpdateWithoutMediaInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCabinetsNestedInput
    layout?: CabinetLayoutUpdateManyWithoutCabinetNestedInput
    chest?: ChestUpdateOneWithoutCabinetNestedInput
    journal?: JournalUpdateOneWithoutCabinetNestedInput
    photoFrame?: PhotoFrameUpdateManyWithoutCabinetNestedInput
    checklist?: ChecklistUpdateManyWithoutCabinetNestedInput
    notes?: NoteUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetUncheckedUpdateWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    layout?: CabinetLayoutUncheckedUpdateManyWithoutCabinetNestedInput
    chest?: ChestUncheckedUpdateOneWithoutCabinetNestedInput
    journal?: JournalUncheckedUpdateOneWithoutCabinetNestedInput
    photoFrame?: PhotoFrameUncheckedUpdateManyWithoutCabinetNestedInput
    checklist?: ChecklistUncheckedUpdateManyWithoutCabinetNestedInput
    notes?: NoteUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetCreateWithoutChecklistInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCabinetsInput
    layout?: CabinetLayoutCreateNestedManyWithoutCabinetInput
    chest?: ChestCreateNestedOneWithoutCabinetInput
    journal?: JournalCreateNestedOneWithoutCabinetInput
    photoFrame?: PhotoFrameCreateNestedManyWithoutCabinetInput
    media?: MediaCreateNestedManyWithoutCabinetInput
    notes?: NoteCreateNestedManyWithoutCabinetInput
  }

  export type CabinetUncheckedCreateWithoutChecklistInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    layout?: CabinetLayoutUncheckedCreateNestedManyWithoutCabinetInput
    chest?: ChestUncheckedCreateNestedOneWithoutCabinetInput
    journal?: JournalUncheckedCreateNestedOneWithoutCabinetInput
    photoFrame?: PhotoFrameUncheckedCreateNestedManyWithoutCabinetInput
    media?: MediaUncheckedCreateNestedManyWithoutCabinetInput
    notes?: NoteUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetCreateOrConnectWithoutChecklistInput = {
    where: CabinetWhereUniqueInput
    create: XOR<CabinetCreateWithoutChecklistInput, CabinetUncheckedCreateWithoutChecklistInput>
  }

  export type CabinetUpsertWithoutChecklistInput = {
    update: XOR<CabinetUpdateWithoutChecklistInput, CabinetUncheckedUpdateWithoutChecklistInput>
    create: XOR<CabinetCreateWithoutChecklistInput, CabinetUncheckedCreateWithoutChecklistInput>
    where?: CabinetWhereInput
  }

  export type CabinetUpdateToOneWithWhereWithoutChecklistInput = {
    where?: CabinetWhereInput
    data: XOR<CabinetUpdateWithoutChecklistInput, CabinetUncheckedUpdateWithoutChecklistInput>
  }

  export type CabinetUpdateWithoutChecklistInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCabinetsNestedInput
    layout?: CabinetLayoutUpdateManyWithoutCabinetNestedInput
    chest?: ChestUpdateOneWithoutCabinetNestedInput
    journal?: JournalUpdateOneWithoutCabinetNestedInput
    photoFrame?: PhotoFrameUpdateManyWithoutCabinetNestedInput
    media?: MediaUpdateManyWithoutCabinetNestedInput
    notes?: NoteUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetUncheckedUpdateWithoutChecklistInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    layout?: CabinetLayoutUncheckedUpdateManyWithoutCabinetNestedInput
    chest?: ChestUncheckedUpdateOneWithoutCabinetNestedInput
    journal?: JournalUncheckedUpdateOneWithoutCabinetNestedInput
    photoFrame?: PhotoFrameUncheckedUpdateManyWithoutCabinetNestedInput
    media?: MediaUncheckedUpdateManyWithoutCabinetNestedInput
    notes?: NoteUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetCreateWithoutNotesInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCabinetsInput
    layout?: CabinetLayoutCreateNestedManyWithoutCabinetInput
    chest?: ChestCreateNestedOneWithoutCabinetInput
    journal?: JournalCreateNestedOneWithoutCabinetInput
    photoFrame?: PhotoFrameCreateNestedManyWithoutCabinetInput
    media?: MediaCreateNestedManyWithoutCabinetInput
    checklist?: ChecklistCreateNestedManyWithoutCabinetInput
  }

  export type CabinetUncheckedCreateWithoutNotesInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    layout?: CabinetLayoutUncheckedCreateNestedManyWithoutCabinetInput
    chest?: ChestUncheckedCreateNestedOneWithoutCabinetInput
    journal?: JournalUncheckedCreateNestedOneWithoutCabinetInput
    photoFrame?: PhotoFrameUncheckedCreateNestedManyWithoutCabinetInput
    media?: MediaUncheckedCreateNestedManyWithoutCabinetInput
    checklist?: ChecklistUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetCreateOrConnectWithoutNotesInput = {
    where: CabinetWhereUniqueInput
    create: XOR<CabinetCreateWithoutNotesInput, CabinetUncheckedCreateWithoutNotesInput>
  }

  export type CabinetUpsertWithoutNotesInput = {
    update: XOR<CabinetUpdateWithoutNotesInput, CabinetUncheckedUpdateWithoutNotesInput>
    create: XOR<CabinetCreateWithoutNotesInput, CabinetUncheckedCreateWithoutNotesInput>
    where?: CabinetWhereInput
  }

  export type CabinetUpdateToOneWithWhereWithoutNotesInput = {
    where?: CabinetWhereInput
    data: XOR<CabinetUpdateWithoutNotesInput, CabinetUncheckedUpdateWithoutNotesInput>
  }

  export type CabinetUpdateWithoutNotesInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCabinetsNestedInput
    layout?: CabinetLayoutUpdateManyWithoutCabinetNestedInput
    chest?: ChestUpdateOneWithoutCabinetNestedInput
    journal?: JournalUpdateOneWithoutCabinetNestedInput
    photoFrame?: PhotoFrameUpdateManyWithoutCabinetNestedInput
    media?: MediaUpdateManyWithoutCabinetNestedInput
    checklist?: ChecklistUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    layout?: CabinetLayoutUncheckedUpdateManyWithoutCabinetNestedInput
    chest?: ChestUncheckedUpdateOneWithoutCabinetNestedInput
    journal?: JournalUncheckedUpdateOneWithoutCabinetNestedInput
    photoFrame?: PhotoFrameUncheckedUpdateManyWithoutCabinetNestedInput
    media?: MediaUncheckedUpdateManyWithoutCabinetNestedInput
    checklist?: ChecklistUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetCreateManyOwnerInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CabinetUpdateWithoutOwnerInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    layout?: CabinetLayoutUpdateManyWithoutCabinetNestedInput
    chest?: ChestUpdateOneWithoutCabinetNestedInput
    journal?: JournalUpdateOneWithoutCabinetNestedInput
    photoFrame?: PhotoFrameUpdateManyWithoutCabinetNestedInput
    media?: MediaUpdateManyWithoutCabinetNestedInput
    checklist?: ChecklistUpdateManyWithoutCabinetNestedInput
    notes?: NoteUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    layout?: CabinetLayoutUncheckedUpdateManyWithoutCabinetNestedInput
    chest?: ChestUncheckedUpdateOneWithoutCabinetNestedInput
    journal?: JournalUncheckedUpdateOneWithoutCabinetNestedInput
    photoFrame?: PhotoFrameUncheckedUpdateManyWithoutCabinetNestedInput
    media?: MediaUncheckedUpdateManyWithoutCabinetNestedInput
    checklist?: ChecklistUncheckedUpdateManyWithoutCabinetNestedInput
    notes?: NoteUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CabinetLayoutCreateManyCabinetInput = {
    id?: number
    name?: string | null
    layout: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoFrameCreateManyCabinetInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    url: string
    caption?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaCreateManyCabinetInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    type: string
    url: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChecklistCreateManyCabinetInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    title: string
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteCreateManyCabinetInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CabinetLayoutUpdateWithoutCabinetInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CabinetLayoutUncheckedUpdateWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CabinetLayoutUncheckedUpdateManyWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoFrameUpdateWithoutCabinetInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoFrameUncheckedUpdateWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoFrameUncheckedUpdateManyWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUpdateWithoutCabinetInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistUpdateWithoutCabinetInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistUncheckedUpdateWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistUncheckedUpdateManyWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUpdateWithoutCabinetInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyWithoutCabinetInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

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
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Frame
 * 
 */
export type Frame = $Result.DefaultSelection<Prisma.$FramePayload>
/**
 * Model FrameLayout
 * 
 */
export type FrameLayout = $Result.DefaultSelection<Prisma.$FrameLayoutPayload>
/**
 * Model Chest
 * 
 */
export type Chest = $Result.DefaultSelection<Prisma.$ChestPayload>
/**
 * Model Journal
 * 
 */
export type Journal = $Result.DefaultSelection<Prisma.$JournalPayload>
/**
 * Model Polaroid
 * 
 */
export type Polaroid = $Result.DefaultSelection<Prisma.$PolaroidPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model Checklist
 * 
 */
export type Checklist = $Result.DefaultSelection<Prisma.$ChecklistPayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>
/**
 * Model DecorItem
 * 
 */
export type DecorItem = $Result.DefaultSelection<Prisma.$DecorItemPayload>

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
   * `prisma.frame`: Exposes CRUD operations for the **Frame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Frames
    * const frames = await prisma.frame.findMany()
    * ```
    */
  get frame(): Prisma.FrameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.frameLayout`: Exposes CRUD operations for the **FrameLayout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FrameLayouts
    * const frameLayouts = await prisma.frameLayout.findMany()
    * ```
    */
  get frameLayout(): Prisma.FrameLayoutDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.polaroid`: Exposes CRUD operations for the **Polaroid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Polaroids
    * const polaroids = await prisma.polaroid.findMany()
    * ```
    */
  get polaroid(): Prisma.PolaroidDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.decorItem`: Exposes CRUD operations for the **DecorItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DecorItems
    * const decorItems = await prisma.decorItem.findMany()
    * ```
    */
  get decorItem(): Prisma.DecorItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
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
    Frame: 'Frame',
    FrameLayout: 'FrameLayout',
    Chest: 'Chest',
    Journal: 'Journal',
    Polaroid: 'Polaroid',
    Media: 'Media',
    Checklist: 'Checklist',
    Note: 'Note',
    DecorItem: 'DecorItem'
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
      modelProps: "user" | "frame" | "frameLayout" | "chest" | "journal" | "polaroid" | "media" | "checklist" | "note" | "decorItem"
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
      Frame: {
        payload: Prisma.$FramePayload<ExtArgs>
        fields: Prisma.FrameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FrameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FramePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FrameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FramePayload>
          }
          findFirst: {
            args: Prisma.FrameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FramePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FrameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FramePayload>
          }
          findMany: {
            args: Prisma.FrameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FramePayload>[]
          }
          create: {
            args: Prisma.FrameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FramePayload>
          }
          createMany: {
            args: Prisma.FrameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FrameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FramePayload>[]
          }
          delete: {
            args: Prisma.FrameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FramePayload>
          }
          update: {
            args: Prisma.FrameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FramePayload>
          }
          deleteMany: {
            args: Prisma.FrameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FrameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FrameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FramePayload>[]
          }
          upsert: {
            args: Prisma.FrameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FramePayload>
          }
          aggregate: {
            args: Prisma.FrameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFrame>
          }
          groupBy: {
            args: Prisma.FrameGroupByArgs<ExtArgs>
            result: $Utils.Optional<FrameGroupByOutputType>[]
          }
          count: {
            args: Prisma.FrameCountArgs<ExtArgs>
            result: $Utils.Optional<FrameCountAggregateOutputType> | number
          }
        }
      }
      FrameLayout: {
        payload: Prisma.$FrameLayoutPayload<ExtArgs>
        fields: Prisma.FrameLayoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FrameLayoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameLayoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FrameLayoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameLayoutPayload>
          }
          findFirst: {
            args: Prisma.FrameLayoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameLayoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FrameLayoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameLayoutPayload>
          }
          findMany: {
            args: Prisma.FrameLayoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameLayoutPayload>[]
          }
          create: {
            args: Prisma.FrameLayoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameLayoutPayload>
          }
          createMany: {
            args: Prisma.FrameLayoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FrameLayoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameLayoutPayload>[]
          }
          delete: {
            args: Prisma.FrameLayoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameLayoutPayload>
          }
          update: {
            args: Prisma.FrameLayoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameLayoutPayload>
          }
          deleteMany: {
            args: Prisma.FrameLayoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FrameLayoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FrameLayoutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameLayoutPayload>[]
          }
          upsert: {
            args: Prisma.FrameLayoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameLayoutPayload>
          }
          aggregate: {
            args: Prisma.FrameLayoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFrameLayout>
          }
          groupBy: {
            args: Prisma.FrameLayoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<FrameLayoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.FrameLayoutCountArgs<ExtArgs>
            result: $Utils.Optional<FrameLayoutCountAggregateOutputType> | number
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
      Polaroid: {
        payload: Prisma.$PolaroidPayload<ExtArgs>
        fields: Prisma.PolaroidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PolaroidFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolaroidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PolaroidFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolaroidPayload>
          }
          findFirst: {
            args: Prisma.PolaroidFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolaroidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PolaroidFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolaroidPayload>
          }
          findMany: {
            args: Prisma.PolaroidFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolaroidPayload>[]
          }
          create: {
            args: Prisma.PolaroidCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolaroidPayload>
          }
          createMany: {
            args: Prisma.PolaroidCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PolaroidCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolaroidPayload>[]
          }
          delete: {
            args: Prisma.PolaroidDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolaroidPayload>
          }
          update: {
            args: Prisma.PolaroidUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolaroidPayload>
          }
          deleteMany: {
            args: Prisma.PolaroidDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PolaroidUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PolaroidUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolaroidPayload>[]
          }
          upsert: {
            args: Prisma.PolaroidUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolaroidPayload>
          }
          aggregate: {
            args: Prisma.PolaroidAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolaroid>
          }
          groupBy: {
            args: Prisma.PolaroidGroupByArgs<ExtArgs>
            result: $Utils.Optional<PolaroidGroupByOutputType>[]
          }
          count: {
            args: Prisma.PolaroidCountArgs<ExtArgs>
            result: $Utils.Optional<PolaroidCountAggregateOutputType> | number
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
      DecorItem: {
        payload: Prisma.$DecorItemPayload<ExtArgs>
        fields: Prisma.DecorItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DecorItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecorItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DecorItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecorItemPayload>
          }
          findFirst: {
            args: Prisma.DecorItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecorItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DecorItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecorItemPayload>
          }
          findMany: {
            args: Prisma.DecorItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecorItemPayload>[]
          }
          create: {
            args: Prisma.DecorItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecorItemPayload>
          }
          createMany: {
            args: Prisma.DecorItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DecorItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecorItemPayload>[]
          }
          delete: {
            args: Prisma.DecorItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecorItemPayload>
          }
          update: {
            args: Prisma.DecorItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecorItemPayload>
          }
          deleteMany: {
            args: Prisma.DecorItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DecorItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DecorItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecorItemPayload>[]
          }
          upsert: {
            args: Prisma.DecorItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecorItemPayload>
          }
          aggregate: {
            args: Prisma.DecorItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDecorItem>
          }
          groupBy: {
            args: Prisma.DecorItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<DecorItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.DecorItemCountArgs<ExtArgs>
            result: $Utils.Optional<DecorItemCountAggregateOutputType> | number
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
    frame?: FrameOmit
    frameLayout?: FrameLayoutOmit
    chest?: ChestOmit
    journal?: JournalOmit
    polaroid?: PolaroidOmit
    media?: MediaOmit
    checklist?: ChecklistOmit
    note?: NoteOmit
    decorItem?: DecorItemOmit
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
    frame: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | UserCountOutputTypeCountFrameArgs
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
  export type UserCountOutputTypeCountFrameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrameWhereInput
  }


  /**
   * Count Type FrameCountOutputType
   */

  export type FrameCountOutputType = {
    polaroid: number
    media: number
    checklist: number
    notes: number
    decorItems: number
  }

  export type FrameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    polaroid?: boolean | FrameCountOutputTypeCountPolaroidArgs
    media?: boolean | FrameCountOutputTypeCountMediaArgs
    checklist?: boolean | FrameCountOutputTypeCountChecklistArgs
    notes?: boolean | FrameCountOutputTypeCountNotesArgs
    decorItems?: boolean | FrameCountOutputTypeCountDecorItemsArgs
  }

  // Custom InputTypes
  /**
   * FrameCountOutputType without action
   */
  export type FrameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrameCountOutputType
     */
    select?: FrameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FrameCountOutputType without action
   */
  export type FrameCountOutputTypeCountPolaroidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolaroidWhereInput
  }

  /**
   * FrameCountOutputType without action
   */
  export type FrameCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }

  /**
   * FrameCountOutputType without action
   */
  export type FrameCountOutputTypeCountChecklistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistWhereInput
  }

  /**
   * FrameCountOutputType without action
   */
  export type FrameCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * FrameCountOutputType without action
   */
  export type FrameCountOutputTypeCountDecorItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecorItemWhereInput
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
    frame?: boolean | User$frameArgs<ExtArgs>
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
    frame?: boolean | User$frameArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      frame: Prisma.$FramePayload<ExtArgs>[]
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
    frame<T extends User$frameArgs<ExtArgs> = {}>(args?: Subset<T, User$frameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FramePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * User.frame
   */
  export type User$frameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frame
     */
    select?: FrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frame
     */
    omit?: FrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameInclude<ExtArgs> | null
    where?: FrameWhereInput
    orderBy?: FrameOrderByWithRelationInput | FrameOrderByWithRelationInput[]
    cursor?: FrameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FrameScalarFieldEnum | FrameScalarFieldEnum[]
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
   * Model Frame
   */

  export type AggregateFrame = {
    _count: FrameCountAggregateOutputType | null
    _avg: FrameAvgAggregateOutputType | null
    _sum: FrameSumAggregateOutputType | null
    _min: FrameMinAggregateOutputType | null
    _max: FrameMaxAggregateOutputType | null
  }

  export type FrameAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type FrameSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type FrameMinAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: number | null
  }

  export type FrameMaxAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: number | null
  }

  export type FrameCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    ownerId: number
    _all: number
  }


  export type FrameAvgAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type FrameSumAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type FrameMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type FrameMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type FrameCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    _all?: true
  }

  export type FrameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Frame to aggregate.
     */
    where?: FrameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frames to fetch.
     */
    orderBy?: FrameOrderByWithRelationInput | FrameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FrameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Frames
    **/
    _count?: true | FrameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FrameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FrameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FrameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FrameMaxAggregateInputType
  }

  export type GetFrameAggregateType<T extends FrameAggregateArgs> = {
        [P in keyof T & keyof AggregateFrame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFrame[P]>
      : GetScalarType<T[P], AggregateFrame[P]>
  }




  export type FrameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrameWhereInput
    orderBy?: FrameOrderByWithAggregationInput | FrameOrderByWithAggregationInput[]
    by: FrameScalarFieldEnum[] | FrameScalarFieldEnum
    having?: FrameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FrameCountAggregateInputType | true
    _avg?: FrameAvgAggregateInputType
    _sum?: FrameSumAggregateInputType
    _min?: FrameMinAggregateInputType
    _max?: FrameMaxAggregateInputType
  }

  export type FrameGroupByOutputType = {
    id: number
    title: string
    createdAt: Date
    updatedAt: Date
    ownerId: number
    _count: FrameCountAggregateOutputType | null
    _avg: FrameAvgAggregateOutputType | null
    _sum: FrameSumAggregateOutputType | null
    _min: FrameMinAggregateOutputType | null
    _max: FrameMaxAggregateOutputType | null
  }

  type GetFrameGroupByPayload<T extends FrameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FrameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FrameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FrameGroupByOutputType[P]>
            : GetScalarType<T[P], FrameGroupByOutputType[P]>
        }
      >
    >


  export type FrameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    layout?: boolean | Frame$layoutArgs<ExtArgs>
    chest?: boolean | Frame$chestArgs<ExtArgs>
    journal?: boolean | Frame$journalArgs<ExtArgs>
    polaroid?: boolean | Frame$polaroidArgs<ExtArgs>
    media?: boolean | Frame$mediaArgs<ExtArgs>
    checklist?: boolean | Frame$checklistArgs<ExtArgs>
    notes?: boolean | Frame$notesArgs<ExtArgs>
    decorItems?: boolean | Frame$decorItemsArgs<ExtArgs>
    _count?: boolean | FrameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frame"]>

  export type FrameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frame"]>

  export type FrameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frame"]>

  export type FrameSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
  }

  export type FrameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createdAt" | "updatedAt" | "ownerId", ExtArgs["result"]["frame"]>
  export type FrameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    layout?: boolean | Frame$layoutArgs<ExtArgs>
    chest?: boolean | Frame$chestArgs<ExtArgs>
    journal?: boolean | Frame$journalArgs<ExtArgs>
    polaroid?: boolean | Frame$polaroidArgs<ExtArgs>
    media?: boolean | Frame$mediaArgs<ExtArgs>
    checklist?: boolean | Frame$checklistArgs<ExtArgs>
    notes?: boolean | Frame$notesArgs<ExtArgs>
    decorItems?: boolean | Frame$decorItemsArgs<ExtArgs>
    _count?: boolean | FrameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FrameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FrameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FramePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Frame"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      layout: Prisma.$FrameLayoutPayload<ExtArgs> | null
      chest: Prisma.$ChestPayload<ExtArgs> | null
      journal: Prisma.$JournalPayload<ExtArgs> | null
      polaroid: Prisma.$PolaroidPayload<ExtArgs>[]
      media: Prisma.$MediaPayload<ExtArgs>[]
      checklist: Prisma.$ChecklistPayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
      decorItems: Prisma.$DecorItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      createdAt: Date
      updatedAt: Date
      ownerId: number
    }, ExtArgs["result"]["frame"]>
    composites: {}
  }

  type FrameGetPayload<S extends boolean | null | undefined | FrameDefaultArgs> = $Result.GetResult<Prisma.$FramePayload, S>

  type FrameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FrameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FrameCountAggregateInputType | true
    }

  export interface FrameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Frame'], meta: { name: 'Frame' } }
    /**
     * Find zero or one Frame that matches the filter.
     * @param {FrameFindUniqueArgs} args - Arguments to find a Frame
     * @example
     * // Get one Frame
     * const frame = await prisma.frame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FrameFindUniqueArgs>(args: SelectSubset<T, FrameFindUniqueArgs<ExtArgs>>): Prisma__FrameClient<$Result.GetResult<Prisma.$FramePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Frame that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FrameFindUniqueOrThrowArgs} args - Arguments to find a Frame
     * @example
     * // Get one Frame
     * const frame = await prisma.frame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FrameFindUniqueOrThrowArgs>(args: SelectSubset<T, FrameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FrameClient<$Result.GetResult<Prisma.$FramePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Frame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameFindFirstArgs} args - Arguments to find a Frame
     * @example
     * // Get one Frame
     * const frame = await prisma.frame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FrameFindFirstArgs>(args?: SelectSubset<T, FrameFindFirstArgs<ExtArgs>>): Prisma__FrameClient<$Result.GetResult<Prisma.$FramePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Frame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameFindFirstOrThrowArgs} args - Arguments to find a Frame
     * @example
     * // Get one Frame
     * const frame = await prisma.frame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FrameFindFirstOrThrowArgs>(args?: SelectSubset<T, FrameFindFirstOrThrowArgs<ExtArgs>>): Prisma__FrameClient<$Result.GetResult<Prisma.$FramePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Frames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Frames
     * const frames = await prisma.frame.findMany()
     * 
     * // Get first 10 Frames
     * const frames = await prisma.frame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const frameWithIdOnly = await prisma.frame.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FrameFindManyArgs>(args?: SelectSubset<T, FrameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FramePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Frame.
     * @param {FrameCreateArgs} args - Arguments to create a Frame.
     * @example
     * // Create one Frame
     * const Frame = await prisma.frame.create({
     *   data: {
     *     // ... data to create a Frame
     *   }
     * })
     * 
     */
    create<T extends FrameCreateArgs>(args: SelectSubset<T, FrameCreateArgs<ExtArgs>>): Prisma__FrameClient<$Result.GetResult<Prisma.$FramePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Frames.
     * @param {FrameCreateManyArgs} args - Arguments to create many Frames.
     * @example
     * // Create many Frames
     * const frame = await prisma.frame.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FrameCreateManyArgs>(args?: SelectSubset<T, FrameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Frames and returns the data saved in the database.
     * @param {FrameCreateManyAndReturnArgs} args - Arguments to create many Frames.
     * @example
     * // Create many Frames
     * const frame = await prisma.frame.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Frames and only return the `id`
     * const frameWithIdOnly = await prisma.frame.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FrameCreateManyAndReturnArgs>(args?: SelectSubset<T, FrameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FramePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Frame.
     * @param {FrameDeleteArgs} args - Arguments to delete one Frame.
     * @example
     * // Delete one Frame
     * const Frame = await prisma.frame.delete({
     *   where: {
     *     // ... filter to delete one Frame
     *   }
     * })
     * 
     */
    delete<T extends FrameDeleteArgs>(args: SelectSubset<T, FrameDeleteArgs<ExtArgs>>): Prisma__FrameClient<$Result.GetResult<Prisma.$FramePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Frame.
     * @param {FrameUpdateArgs} args - Arguments to update one Frame.
     * @example
     * // Update one Frame
     * const frame = await prisma.frame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FrameUpdateArgs>(args: SelectSubset<T, FrameUpdateArgs<ExtArgs>>): Prisma__FrameClient<$Result.GetResult<Prisma.$FramePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Frames.
     * @param {FrameDeleteManyArgs} args - Arguments to filter Frames to delete.
     * @example
     * // Delete a few Frames
     * const { count } = await prisma.frame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FrameDeleteManyArgs>(args?: SelectSubset<T, FrameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Frames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Frames
     * const frame = await prisma.frame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FrameUpdateManyArgs>(args: SelectSubset<T, FrameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Frames and returns the data updated in the database.
     * @param {FrameUpdateManyAndReturnArgs} args - Arguments to update many Frames.
     * @example
     * // Update many Frames
     * const frame = await prisma.frame.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Frames and only return the `id`
     * const frameWithIdOnly = await prisma.frame.updateManyAndReturn({
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
    updateManyAndReturn<T extends FrameUpdateManyAndReturnArgs>(args: SelectSubset<T, FrameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FramePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Frame.
     * @param {FrameUpsertArgs} args - Arguments to update or create a Frame.
     * @example
     * // Update or create a Frame
     * const frame = await prisma.frame.upsert({
     *   create: {
     *     // ... data to create a Frame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Frame we want to update
     *   }
     * })
     */
    upsert<T extends FrameUpsertArgs>(args: SelectSubset<T, FrameUpsertArgs<ExtArgs>>): Prisma__FrameClient<$Result.GetResult<Prisma.$FramePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Frames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameCountArgs} args - Arguments to filter Frames to count.
     * @example
     * // Count the number of Frames
     * const count = await prisma.frame.count({
     *   where: {
     *     // ... the filter for the Frames we want to count
     *   }
     * })
    **/
    count<T extends FrameCountArgs>(
      args?: Subset<T, FrameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FrameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Frame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FrameAggregateArgs>(args: Subset<T, FrameAggregateArgs>): Prisma.PrismaPromise<GetFrameAggregateType<T>>

    /**
     * Group by Frame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameGroupByArgs} args - Group by arguments.
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
      T extends FrameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FrameGroupByArgs['orderBy'] }
        : { orderBy?: FrameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FrameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFrameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Frame model
   */
  readonly fields: FrameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Frame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FrameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    layout<T extends Frame$layoutArgs<ExtArgs> = {}>(args?: Subset<T, Frame$layoutArgs<ExtArgs>>): Prisma__FrameLayoutClient<$Result.GetResult<Prisma.$FrameLayoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chest<T extends Frame$chestArgs<ExtArgs> = {}>(args?: Subset<T, Frame$chestArgs<ExtArgs>>): Prisma__ChestClient<$Result.GetResult<Prisma.$ChestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    journal<T extends Frame$journalArgs<ExtArgs> = {}>(args?: Subset<T, Frame$journalArgs<ExtArgs>>): Prisma__JournalClient<$Result.GetResult<Prisma.$JournalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    polaroid<T extends Frame$polaroidArgs<ExtArgs> = {}>(args?: Subset<T, Frame$polaroidArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolaroidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    media<T extends Frame$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Frame$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    checklist<T extends Frame$checklistArgs<ExtArgs> = {}>(args?: Subset<T, Frame$checklistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends Frame$notesArgs<ExtArgs> = {}>(args?: Subset<T, Frame$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    decorItems<T extends Frame$decorItemsArgs<ExtArgs> = {}>(args?: Subset<T, Frame$decorItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecorItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Frame model
   */
  interface FrameFieldRefs {
    readonly id: FieldRef<"Frame", 'Int'>
    readonly title: FieldRef<"Frame", 'String'>
    readonly createdAt: FieldRef<"Frame", 'DateTime'>
    readonly updatedAt: FieldRef<"Frame", 'DateTime'>
    readonly ownerId: FieldRef<"Frame", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Frame findUnique
   */
  export type FrameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frame
     */
    select?: FrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frame
     */
    omit?: FrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameInclude<ExtArgs> | null
    /**
     * Filter, which Frame to fetch.
     */
    where: FrameWhereUniqueInput
  }

  /**
   * Frame findUniqueOrThrow
   */
  export type FrameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frame
     */
    select?: FrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frame
     */
    omit?: FrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameInclude<ExtArgs> | null
    /**
     * Filter, which Frame to fetch.
     */
    where: FrameWhereUniqueInput
  }

  /**
   * Frame findFirst
   */
  export type FrameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frame
     */
    select?: FrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frame
     */
    omit?: FrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameInclude<ExtArgs> | null
    /**
     * Filter, which Frame to fetch.
     */
    where?: FrameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frames to fetch.
     */
    orderBy?: FrameOrderByWithRelationInput | FrameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Frames.
     */
    cursor?: FrameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Frames.
     */
    distinct?: FrameScalarFieldEnum | FrameScalarFieldEnum[]
  }

  /**
   * Frame findFirstOrThrow
   */
  export type FrameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frame
     */
    select?: FrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frame
     */
    omit?: FrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameInclude<ExtArgs> | null
    /**
     * Filter, which Frame to fetch.
     */
    where?: FrameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frames to fetch.
     */
    orderBy?: FrameOrderByWithRelationInput | FrameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Frames.
     */
    cursor?: FrameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Frames.
     */
    distinct?: FrameScalarFieldEnum | FrameScalarFieldEnum[]
  }

  /**
   * Frame findMany
   */
  export type FrameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frame
     */
    select?: FrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frame
     */
    omit?: FrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameInclude<ExtArgs> | null
    /**
     * Filter, which Frames to fetch.
     */
    where?: FrameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frames to fetch.
     */
    orderBy?: FrameOrderByWithRelationInput | FrameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Frames.
     */
    cursor?: FrameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frames.
     */
    skip?: number
    distinct?: FrameScalarFieldEnum | FrameScalarFieldEnum[]
  }

  /**
   * Frame create
   */
  export type FrameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frame
     */
    select?: FrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frame
     */
    omit?: FrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameInclude<ExtArgs> | null
    /**
     * The data needed to create a Frame.
     */
    data: XOR<FrameCreateInput, FrameUncheckedCreateInput>
  }

  /**
   * Frame createMany
   */
  export type FrameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Frames.
     */
    data: FrameCreateManyInput | FrameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Frame createManyAndReturn
   */
  export type FrameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frame
     */
    select?: FrameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Frame
     */
    omit?: FrameOmit<ExtArgs> | null
    /**
     * The data used to create many Frames.
     */
    data: FrameCreateManyInput | FrameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Frame update
   */
  export type FrameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frame
     */
    select?: FrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frame
     */
    omit?: FrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameInclude<ExtArgs> | null
    /**
     * The data needed to update a Frame.
     */
    data: XOR<FrameUpdateInput, FrameUncheckedUpdateInput>
    /**
     * Choose, which Frame to update.
     */
    where: FrameWhereUniqueInput
  }

  /**
   * Frame updateMany
   */
  export type FrameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Frames.
     */
    data: XOR<FrameUpdateManyMutationInput, FrameUncheckedUpdateManyInput>
    /**
     * Filter which Frames to update
     */
    where?: FrameWhereInput
    /**
     * Limit how many Frames to update.
     */
    limit?: number
  }

  /**
   * Frame updateManyAndReturn
   */
  export type FrameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frame
     */
    select?: FrameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Frame
     */
    omit?: FrameOmit<ExtArgs> | null
    /**
     * The data used to update Frames.
     */
    data: XOR<FrameUpdateManyMutationInput, FrameUncheckedUpdateManyInput>
    /**
     * Filter which Frames to update
     */
    where?: FrameWhereInput
    /**
     * Limit how many Frames to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Frame upsert
   */
  export type FrameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frame
     */
    select?: FrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frame
     */
    omit?: FrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameInclude<ExtArgs> | null
    /**
     * The filter to search for the Frame to update in case it exists.
     */
    where: FrameWhereUniqueInput
    /**
     * In case the Frame found by the `where` argument doesn't exist, create a new Frame with this data.
     */
    create: XOR<FrameCreateInput, FrameUncheckedCreateInput>
    /**
     * In case the Frame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FrameUpdateInput, FrameUncheckedUpdateInput>
  }

  /**
   * Frame delete
   */
  export type FrameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frame
     */
    select?: FrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frame
     */
    omit?: FrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameInclude<ExtArgs> | null
    /**
     * Filter which Frame to delete.
     */
    where: FrameWhereUniqueInput
  }

  /**
   * Frame deleteMany
   */
  export type FrameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Frames to delete
     */
    where?: FrameWhereInput
    /**
     * Limit how many Frames to delete.
     */
    limit?: number
  }

  /**
   * Frame.layout
   */
  export type Frame$layoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrameLayout
     */
    select?: FrameLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrameLayout
     */
    omit?: FrameLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameLayoutInclude<ExtArgs> | null
    where?: FrameLayoutWhereInput
  }

  /**
   * Frame.chest
   */
  export type Frame$chestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Frame.journal
   */
  export type Frame$journalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Frame.polaroid
   */
  export type Frame$polaroidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Polaroid
     */
    select?: PolaroidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Polaroid
     */
    omit?: PolaroidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolaroidInclude<ExtArgs> | null
    where?: PolaroidWhereInput
    orderBy?: PolaroidOrderByWithRelationInput | PolaroidOrderByWithRelationInput[]
    cursor?: PolaroidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PolaroidScalarFieldEnum | PolaroidScalarFieldEnum[]
  }

  /**
   * Frame.media
   */
  export type Frame$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Frame.checklist
   */
  export type Frame$checklistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Frame.notes
   */
  export type Frame$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Frame.decorItems
   */
  export type Frame$decorItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecorItem
     */
    select?: DecorItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecorItem
     */
    omit?: DecorItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecorItemInclude<ExtArgs> | null
    where?: DecorItemWhereInput
    orderBy?: DecorItemOrderByWithRelationInput | DecorItemOrderByWithRelationInput[]
    cursor?: DecorItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DecorItemScalarFieldEnum | DecorItemScalarFieldEnum[]
  }

  /**
   * Frame without action
   */
  export type FrameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frame
     */
    select?: FrameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frame
     */
    omit?: FrameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameInclude<ExtArgs> | null
  }


  /**
   * Model FrameLayout
   */

  export type AggregateFrameLayout = {
    _count: FrameLayoutCountAggregateOutputType | null
    _avg: FrameLayoutAvgAggregateOutputType | null
    _sum: FrameLayoutSumAggregateOutputType | null
    _min: FrameLayoutMinAggregateOutputType | null
    _max: FrameLayoutMaxAggregateOutputType | null
  }

  export type FrameLayoutAvgAggregateOutputType = {
    id: number | null
    frameId: number | null
  }

  export type FrameLayoutSumAggregateOutputType = {
    id: number | null
    frameId: number | null
  }

  export type FrameLayoutMinAggregateOutputType = {
    id: number | null
    frameId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FrameLayoutMaxAggregateOutputType = {
    id: number | null
    frameId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FrameLayoutCountAggregateOutputType = {
    id: number
    layout: number
    frameId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FrameLayoutAvgAggregateInputType = {
    id?: true
    frameId?: true
  }

  export type FrameLayoutSumAggregateInputType = {
    id?: true
    frameId?: true
  }

  export type FrameLayoutMinAggregateInputType = {
    id?: true
    frameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FrameLayoutMaxAggregateInputType = {
    id?: true
    frameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FrameLayoutCountAggregateInputType = {
    id?: true
    layout?: true
    frameId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FrameLayoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FrameLayout to aggregate.
     */
    where?: FrameLayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FrameLayouts to fetch.
     */
    orderBy?: FrameLayoutOrderByWithRelationInput | FrameLayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FrameLayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FrameLayouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FrameLayouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FrameLayouts
    **/
    _count?: true | FrameLayoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FrameLayoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FrameLayoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FrameLayoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FrameLayoutMaxAggregateInputType
  }

  export type GetFrameLayoutAggregateType<T extends FrameLayoutAggregateArgs> = {
        [P in keyof T & keyof AggregateFrameLayout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFrameLayout[P]>
      : GetScalarType<T[P], AggregateFrameLayout[P]>
  }




  export type FrameLayoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrameLayoutWhereInput
    orderBy?: FrameLayoutOrderByWithAggregationInput | FrameLayoutOrderByWithAggregationInput[]
    by: FrameLayoutScalarFieldEnum[] | FrameLayoutScalarFieldEnum
    having?: FrameLayoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FrameLayoutCountAggregateInputType | true
    _avg?: FrameLayoutAvgAggregateInputType
    _sum?: FrameLayoutSumAggregateInputType
    _min?: FrameLayoutMinAggregateInputType
    _max?: FrameLayoutMaxAggregateInputType
  }

  export type FrameLayoutGroupByOutputType = {
    id: number
    layout: JsonValue
    frameId: number
    createdAt: Date
    updatedAt: Date
    _count: FrameLayoutCountAggregateOutputType | null
    _avg: FrameLayoutAvgAggregateOutputType | null
    _sum: FrameLayoutSumAggregateOutputType | null
    _min: FrameLayoutMinAggregateOutputType | null
    _max: FrameLayoutMaxAggregateOutputType | null
  }

  type GetFrameLayoutGroupByPayload<T extends FrameLayoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FrameLayoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FrameLayoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FrameLayoutGroupByOutputType[P]>
            : GetScalarType<T[P], FrameLayoutGroupByOutputType[P]>
        }
      >
    >


  export type FrameLayoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    layout?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frameLayout"]>

  export type FrameLayoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    layout?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frameLayout"]>

  export type FrameLayoutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    layout?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frameLayout"]>

  export type FrameLayoutSelectScalar = {
    id?: boolean
    layout?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FrameLayoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "layout" | "frameId" | "createdAt" | "updatedAt", ExtArgs["result"]["frameLayout"]>
  export type FrameLayoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }
  export type FrameLayoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }
  export type FrameLayoutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }

  export type $FrameLayoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FrameLayout"
    objects: {
      frame: Prisma.$FramePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      layout: Prisma.JsonValue
      frameId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["frameLayout"]>
    composites: {}
  }

  type FrameLayoutGetPayload<S extends boolean | null | undefined | FrameLayoutDefaultArgs> = $Result.GetResult<Prisma.$FrameLayoutPayload, S>

  type FrameLayoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FrameLayoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FrameLayoutCountAggregateInputType | true
    }

  export interface FrameLayoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FrameLayout'], meta: { name: 'FrameLayout' } }
    /**
     * Find zero or one FrameLayout that matches the filter.
     * @param {FrameLayoutFindUniqueArgs} args - Arguments to find a FrameLayout
     * @example
     * // Get one FrameLayout
     * const frameLayout = await prisma.frameLayout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FrameLayoutFindUniqueArgs>(args: SelectSubset<T, FrameLayoutFindUniqueArgs<ExtArgs>>): Prisma__FrameLayoutClient<$Result.GetResult<Prisma.$FrameLayoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FrameLayout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FrameLayoutFindUniqueOrThrowArgs} args - Arguments to find a FrameLayout
     * @example
     * // Get one FrameLayout
     * const frameLayout = await prisma.frameLayout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FrameLayoutFindUniqueOrThrowArgs>(args: SelectSubset<T, FrameLayoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FrameLayoutClient<$Result.GetResult<Prisma.$FrameLayoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FrameLayout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameLayoutFindFirstArgs} args - Arguments to find a FrameLayout
     * @example
     * // Get one FrameLayout
     * const frameLayout = await prisma.frameLayout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FrameLayoutFindFirstArgs>(args?: SelectSubset<T, FrameLayoutFindFirstArgs<ExtArgs>>): Prisma__FrameLayoutClient<$Result.GetResult<Prisma.$FrameLayoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FrameLayout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameLayoutFindFirstOrThrowArgs} args - Arguments to find a FrameLayout
     * @example
     * // Get one FrameLayout
     * const frameLayout = await prisma.frameLayout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FrameLayoutFindFirstOrThrowArgs>(args?: SelectSubset<T, FrameLayoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__FrameLayoutClient<$Result.GetResult<Prisma.$FrameLayoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FrameLayouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameLayoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FrameLayouts
     * const frameLayouts = await prisma.frameLayout.findMany()
     * 
     * // Get first 10 FrameLayouts
     * const frameLayouts = await prisma.frameLayout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const frameLayoutWithIdOnly = await prisma.frameLayout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FrameLayoutFindManyArgs>(args?: SelectSubset<T, FrameLayoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrameLayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FrameLayout.
     * @param {FrameLayoutCreateArgs} args - Arguments to create a FrameLayout.
     * @example
     * // Create one FrameLayout
     * const FrameLayout = await prisma.frameLayout.create({
     *   data: {
     *     // ... data to create a FrameLayout
     *   }
     * })
     * 
     */
    create<T extends FrameLayoutCreateArgs>(args: SelectSubset<T, FrameLayoutCreateArgs<ExtArgs>>): Prisma__FrameLayoutClient<$Result.GetResult<Prisma.$FrameLayoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FrameLayouts.
     * @param {FrameLayoutCreateManyArgs} args - Arguments to create many FrameLayouts.
     * @example
     * // Create many FrameLayouts
     * const frameLayout = await prisma.frameLayout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FrameLayoutCreateManyArgs>(args?: SelectSubset<T, FrameLayoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FrameLayouts and returns the data saved in the database.
     * @param {FrameLayoutCreateManyAndReturnArgs} args - Arguments to create many FrameLayouts.
     * @example
     * // Create many FrameLayouts
     * const frameLayout = await prisma.frameLayout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FrameLayouts and only return the `id`
     * const frameLayoutWithIdOnly = await prisma.frameLayout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FrameLayoutCreateManyAndReturnArgs>(args?: SelectSubset<T, FrameLayoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrameLayoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FrameLayout.
     * @param {FrameLayoutDeleteArgs} args - Arguments to delete one FrameLayout.
     * @example
     * // Delete one FrameLayout
     * const FrameLayout = await prisma.frameLayout.delete({
     *   where: {
     *     // ... filter to delete one FrameLayout
     *   }
     * })
     * 
     */
    delete<T extends FrameLayoutDeleteArgs>(args: SelectSubset<T, FrameLayoutDeleteArgs<ExtArgs>>): Prisma__FrameLayoutClient<$Result.GetResult<Prisma.$FrameLayoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FrameLayout.
     * @param {FrameLayoutUpdateArgs} args - Arguments to update one FrameLayout.
     * @example
     * // Update one FrameLayout
     * const frameLayout = await prisma.frameLayout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FrameLayoutUpdateArgs>(args: SelectSubset<T, FrameLayoutUpdateArgs<ExtArgs>>): Prisma__FrameLayoutClient<$Result.GetResult<Prisma.$FrameLayoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FrameLayouts.
     * @param {FrameLayoutDeleteManyArgs} args - Arguments to filter FrameLayouts to delete.
     * @example
     * // Delete a few FrameLayouts
     * const { count } = await prisma.frameLayout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FrameLayoutDeleteManyArgs>(args?: SelectSubset<T, FrameLayoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FrameLayouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameLayoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FrameLayouts
     * const frameLayout = await prisma.frameLayout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FrameLayoutUpdateManyArgs>(args: SelectSubset<T, FrameLayoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FrameLayouts and returns the data updated in the database.
     * @param {FrameLayoutUpdateManyAndReturnArgs} args - Arguments to update many FrameLayouts.
     * @example
     * // Update many FrameLayouts
     * const frameLayout = await prisma.frameLayout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FrameLayouts and only return the `id`
     * const frameLayoutWithIdOnly = await prisma.frameLayout.updateManyAndReturn({
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
    updateManyAndReturn<T extends FrameLayoutUpdateManyAndReturnArgs>(args: SelectSubset<T, FrameLayoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrameLayoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FrameLayout.
     * @param {FrameLayoutUpsertArgs} args - Arguments to update or create a FrameLayout.
     * @example
     * // Update or create a FrameLayout
     * const frameLayout = await prisma.frameLayout.upsert({
     *   create: {
     *     // ... data to create a FrameLayout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FrameLayout we want to update
     *   }
     * })
     */
    upsert<T extends FrameLayoutUpsertArgs>(args: SelectSubset<T, FrameLayoutUpsertArgs<ExtArgs>>): Prisma__FrameLayoutClient<$Result.GetResult<Prisma.$FrameLayoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FrameLayouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameLayoutCountArgs} args - Arguments to filter FrameLayouts to count.
     * @example
     * // Count the number of FrameLayouts
     * const count = await prisma.frameLayout.count({
     *   where: {
     *     // ... the filter for the FrameLayouts we want to count
     *   }
     * })
    **/
    count<T extends FrameLayoutCountArgs>(
      args?: Subset<T, FrameLayoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FrameLayoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FrameLayout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameLayoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FrameLayoutAggregateArgs>(args: Subset<T, FrameLayoutAggregateArgs>): Prisma.PrismaPromise<GetFrameLayoutAggregateType<T>>

    /**
     * Group by FrameLayout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameLayoutGroupByArgs} args - Group by arguments.
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
      T extends FrameLayoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FrameLayoutGroupByArgs['orderBy'] }
        : { orderBy?: FrameLayoutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FrameLayoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFrameLayoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FrameLayout model
   */
  readonly fields: FrameLayoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FrameLayout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FrameLayoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    frame<T extends FrameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FrameDefaultArgs<ExtArgs>>): Prisma__FrameClient<$Result.GetResult<Prisma.$FramePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FrameLayout model
   */
  interface FrameLayoutFieldRefs {
    readonly id: FieldRef<"FrameLayout", 'Int'>
    readonly layout: FieldRef<"FrameLayout", 'Json'>
    readonly frameId: FieldRef<"FrameLayout", 'Int'>
    readonly createdAt: FieldRef<"FrameLayout", 'DateTime'>
    readonly updatedAt: FieldRef<"FrameLayout", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FrameLayout findUnique
   */
  export type FrameLayoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrameLayout
     */
    select?: FrameLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrameLayout
     */
    omit?: FrameLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameLayoutInclude<ExtArgs> | null
    /**
     * Filter, which FrameLayout to fetch.
     */
    where: FrameLayoutWhereUniqueInput
  }

  /**
   * FrameLayout findUniqueOrThrow
   */
  export type FrameLayoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrameLayout
     */
    select?: FrameLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrameLayout
     */
    omit?: FrameLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameLayoutInclude<ExtArgs> | null
    /**
     * Filter, which FrameLayout to fetch.
     */
    where: FrameLayoutWhereUniqueInput
  }

  /**
   * FrameLayout findFirst
   */
  export type FrameLayoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrameLayout
     */
    select?: FrameLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrameLayout
     */
    omit?: FrameLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameLayoutInclude<ExtArgs> | null
    /**
     * Filter, which FrameLayout to fetch.
     */
    where?: FrameLayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FrameLayouts to fetch.
     */
    orderBy?: FrameLayoutOrderByWithRelationInput | FrameLayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FrameLayouts.
     */
    cursor?: FrameLayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FrameLayouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FrameLayouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FrameLayouts.
     */
    distinct?: FrameLayoutScalarFieldEnum | FrameLayoutScalarFieldEnum[]
  }

  /**
   * FrameLayout findFirstOrThrow
   */
  export type FrameLayoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrameLayout
     */
    select?: FrameLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrameLayout
     */
    omit?: FrameLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameLayoutInclude<ExtArgs> | null
    /**
     * Filter, which FrameLayout to fetch.
     */
    where?: FrameLayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FrameLayouts to fetch.
     */
    orderBy?: FrameLayoutOrderByWithRelationInput | FrameLayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FrameLayouts.
     */
    cursor?: FrameLayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FrameLayouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FrameLayouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FrameLayouts.
     */
    distinct?: FrameLayoutScalarFieldEnum | FrameLayoutScalarFieldEnum[]
  }

  /**
   * FrameLayout findMany
   */
  export type FrameLayoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrameLayout
     */
    select?: FrameLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrameLayout
     */
    omit?: FrameLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameLayoutInclude<ExtArgs> | null
    /**
     * Filter, which FrameLayouts to fetch.
     */
    where?: FrameLayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FrameLayouts to fetch.
     */
    orderBy?: FrameLayoutOrderByWithRelationInput | FrameLayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FrameLayouts.
     */
    cursor?: FrameLayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FrameLayouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FrameLayouts.
     */
    skip?: number
    distinct?: FrameLayoutScalarFieldEnum | FrameLayoutScalarFieldEnum[]
  }

  /**
   * FrameLayout create
   */
  export type FrameLayoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrameLayout
     */
    select?: FrameLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrameLayout
     */
    omit?: FrameLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameLayoutInclude<ExtArgs> | null
    /**
     * The data needed to create a FrameLayout.
     */
    data: XOR<FrameLayoutCreateInput, FrameLayoutUncheckedCreateInput>
  }

  /**
   * FrameLayout createMany
   */
  export type FrameLayoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FrameLayouts.
     */
    data: FrameLayoutCreateManyInput | FrameLayoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FrameLayout createManyAndReturn
   */
  export type FrameLayoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrameLayout
     */
    select?: FrameLayoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FrameLayout
     */
    omit?: FrameLayoutOmit<ExtArgs> | null
    /**
     * The data used to create many FrameLayouts.
     */
    data: FrameLayoutCreateManyInput | FrameLayoutCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameLayoutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FrameLayout update
   */
  export type FrameLayoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrameLayout
     */
    select?: FrameLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrameLayout
     */
    omit?: FrameLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameLayoutInclude<ExtArgs> | null
    /**
     * The data needed to update a FrameLayout.
     */
    data: XOR<FrameLayoutUpdateInput, FrameLayoutUncheckedUpdateInput>
    /**
     * Choose, which FrameLayout to update.
     */
    where: FrameLayoutWhereUniqueInput
  }

  /**
   * FrameLayout updateMany
   */
  export type FrameLayoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FrameLayouts.
     */
    data: XOR<FrameLayoutUpdateManyMutationInput, FrameLayoutUncheckedUpdateManyInput>
    /**
     * Filter which FrameLayouts to update
     */
    where?: FrameLayoutWhereInput
    /**
     * Limit how many FrameLayouts to update.
     */
    limit?: number
  }

  /**
   * FrameLayout updateManyAndReturn
   */
  export type FrameLayoutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrameLayout
     */
    select?: FrameLayoutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FrameLayout
     */
    omit?: FrameLayoutOmit<ExtArgs> | null
    /**
     * The data used to update FrameLayouts.
     */
    data: XOR<FrameLayoutUpdateManyMutationInput, FrameLayoutUncheckedUpdateManyInput>
    /**
     * Filter which FrameLayouts to update
     */
    where?: FrameLayoutWhereInput
    /**
     * Limit how many FrameLayouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameLayoutIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FrameLayout upsert
   */
  export type FrameLayoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrameLayout
     */
    select?: FrameLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrameLayout
     */
    omit?: FrameLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameLayoutInclude<ExtArgs> | null
    /**
     * The filter to search for the FrameLayout to update in case it exists.
     */
    where: FrameLayoutWhereUniqueInput
    /**
     * In case the FrameLayout found by the `where` argument doesn't exist, create a new FrameLayout with this data.
     */
    create: XOR<FrameLayoutCreateInput, FrameLayoutUncheckedCreateInput>
    /**
     * In case the FrameLayout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FrameLayoutUpdateInput, FrameLayoutUncheckedUpdateInput>
  }

  /**
   * FrameLayout delete
   */
  export type FrameLayoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrameLayout
     */
    select?: FrameLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrameLayout
     */
    omit?: FrameLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameLayoutInclude<ExtArgs> | null
    /**
     * Filter which FrameLayout to delete.
     */
    where: FrameLayoutWhereUniqueInput
  }

  /**
   * FrameLayout deleteMany
   */
  export type FrameLayoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FrameLayouts to delete
     */
    where?: FrameLayoutWhereInput
    /**
     * Limit how many FrameLayouts to delete.
     */
    limit?: number
  }

  /**
   * FrameLayout without action
   */
  export type FrameLayoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrameLayout
     */
    select?: FrameLayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrameLayout
     */
    omit?: FrameLayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameLayoutInclude<ExtArgs> | null
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
    frameId: number | null
  }

  export type ChestSumAggregateOutputType = {
    id: number | null
    frameId: number | null
  }

  export type ChestMinAggregateOutputType = {
    id: number | null
    passcode: string | null
    frameId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChestMaxAggregateOutputType = {
    id: number | null
    passcode: string | null
    frameId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChestCountAggregateOutputType = {
    id: number
    passcode: number
    position: number
    items: number
    frameId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChestAvgAggregateInputType = {
    id?: true
    frameId?: true
  }

  export type ChestSumAggregateInputType = {
    id?: true
    frameId?: true
  }

  export type ChestMinAggregateInputType = {
    id?: true
    passcode?: true
    frameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChestMaxAggregateInputType = {
    id?: true
    passcode?: true
    frameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChestCountAggregateInputType = {
    id?: true
    passcode?: true
    position?: true
    items?: true
    frameId?: true
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
    frameId: number
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
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chest"]>

  export type ChestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passcode?: boolean
    position?: boolean
    items?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chest"]>

  export type ChestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passcode?: boolean
    position?: boolean
    items?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chest"]>

  export type ChestSelectScalar = {
    id?: boolean
    passcode?: boolean
    position?: boolean
    items?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "passcode" | "position" | "items" | "frameId" | "createdAt" | "updatedAt", ExtArgs["result"]["chest"]>
  export type ChestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }
  export type ChestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }
  export type ChestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }

  export type $ChestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chest"
    objects: {
      frame: Prisma.$FramePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      passcode: string
      position: Prisma.JsonValue | null
      items: Prisma.JsonValue | null
      frameId: number
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
    frame<T extends FrameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FrameDefaultArgs<ExtArgs>>): Prisma__FrameClient<$Result.GetResult<Prisma.$FramePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly frameId: FieldRef<"Chest", 'Int'>
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
    frameId: number | null
  }

  export type JournalSumAggregateOutputType = {
    id: number | null
    frameId: number | null
  }

  export type JournalMinAggregateOutputType = {
    id: number | null
    passcode: string | null
    frameId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JournalMaxAggregateOutputType = {
    id: number | null
    passcode: string | null
    frameId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JournalCountAggregateOutputType = {
    id: number
    passcode: number
    position: number
    entries: number
    frameId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JournalAvgAggregateInputType = {
    id?: true
    frameId?: true
  }

  export type JournalSumAggregateInputType = {
    id?: true
    frameId?: true
  }

  export type JournalMinAggregateInputType = {
    id?: true
    passcode?: true
    frameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JournalMaxAggregateInputType = {
    id?: true
    passcode?: true
    frameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JournalCountAggregateInputType = {
    id?: true
    passcode?: true
    position?: true
    entries?: true
    frameId?: true
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
    frameId: number
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
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journal"]>

  export type JournalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passcode?: boolean
    position?: boolean
    entries?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journal"]>

  export type JournalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passcode?: boolean
    position?: boolean
    entries?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journal"]>

  export type JournalSelectScalar = {
    id?: boolean
    passcode?: boolean
    position?: boolean
    entries?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JournalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "passcode" | "position" | "entries" | "frameId" | "createdAt" | "updatedAt", ExtArgs["result"]["journal"]>
  export type JournalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }
  export type JournalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }
  export type JournalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }

  export type $JournalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Journal"
    objects: {
      frame: Prisma.$FramePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      passcode: string
      position: Prisma.JsonValue | null
      entries: Prisma.JsonValue
      frameId: number
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
    frame<T extends FrameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FrameDefaultArgs<ExtArgs>>): Prisma__FrameClient<$Result.GetResult<Prisma.$FramePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly frameId: FieldRef<"Journal", 'Int'>
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
   * Model Polaroid
   */

  export type AggregatePolaroid = {
    _count: PolaroidCountAggregateOutputType | null
    _avg: PolaroidAvgAggregateOutputType | null
    _sum: PolaroidSumAggregateOutputType | null
    _min: PolaroidMinAggregateOutputType | null
    _max: PolaroidMaxAggregateOutputType | null
  }

  export type PolaroidAvgAggregateOutputType = {
    id: number | null
    frameId: number | null
  }

  export type PolaroidSumAggregateOutputType = {
    id: number | null
    frameId: number | null
  }

  export type PolaroidMinAggregateOutputType = {
    id: number | null
    url: string | null
    caption: string | null
    frameId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PolaroidMaxAggregateOutputType = {
    id: number | null
    url: string | null
    caption: string | null
    frameId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PolaroidCountAggregateOutputType = {
    id: number
    position: number
    url: number
    caption: number
    frameId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PolaroidAvgAggregateInputType = {
    id?: true
    frameId?: true
  }

  export type PolaroidSumAggregateInputType = {
    id?: true
    frameId?: true
  }

  export type PolaroidMinAggregateInputType = {
    id?: true
    url?: true
    caption?: true
    frameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PolaroidMaxAggregateInputType = {
    id?: true
    url?: true
    caption?: true
    frameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PolaroidCountAggregateInputType = {
    id?: true
    position?: true
    url?: true
    caption?: true
    frameId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PolaroidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Polaroid to aggregate.
     */
    where?: PolaroidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Polaroids to fetch.
     */
    orderBy?: PolaroidOrderByWithRelationInput | PolaroidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PolaroidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Polaroids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Polaroids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Polaroids
    **/
    _count?: true | PolaroidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PolaroidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PolaroidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolaroidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolaroidMaxAggregateInputType
  }

  export type GetPolaroidAggregateType<T extends PolaroidAggregateArgs> = {
        [P in keyof T & keyof AggregatePolaroid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolaroid[P]>
      : GetScalarType<T[P], AggregatePolaroid[P]>
  }




  export type PolaroidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolaroidWhereInput
    orderBy?: PolaroidOrderByWithAggregationInput | PolaroidOrderByWithAggregationInput[]
    by: PolaroidScalarFieldEnum[] | PolaroidScalarFieldEnum
    having?: PolaroidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolaroidCountAggregateInputType | true
    _avg?: PolaroidAvgAggregateInputType
    _sum?: PolaroidSumAggregateInputType
    _min?: PolaroidMinAggregateInputType
    _max?: PolaroidMaxAggregateInputType
  }

  export type PolaroidGroupByOutputType = {
    id: number
    position: JsonValue | null
    url: string
    caption: string | null
    frameId: number
    createdAt: Date
    updatedAt: Date
    _count: PolaroidCountAggregateOutputType | null
    _avg: PolaroidAvgAggregateOutputType | null
    _sum: PolaroidSumAggregateOutputType | null
    _min: PolaroidMinAggregateOutputType | null
    _max: PolaroidMaxAggregateOutputType | null
  }

  type GetPolaroidGroupByPayload<T extends PolaroidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolaroidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolaroidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolaroidGroupByOutputType[P]>
            : GetScalarType<T[P], PolaroidGroupByOutputType[P]>
        }
      >
    >


  export type PolaroidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    url?: boolean
    caption?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["polaroid"]>

  export type PolaroidSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    url?: boolean
    caption?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["polaroid"]>

  export type PolaroidSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    url?: boolean
    caption?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["polaroid"]>

  export type PolaroidSelectScalar = {
    id?: boolean
    position?: boolean
    url?: boolean
    caption?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PolaroidOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "position" | "url" | "caption" | "frameId" | "createdAt" | "updatedAt", ExtArgs["result"]["polaroid"]>
  export type PolaroidInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }
  export type PolaroidIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }
  export type PolaroidIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }

  export type $PolaroidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Polaroid"
    objects: {
      frame: Prisma.$FramePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      position: Prisma.JsonValue | null
      url: string
      caption: string | null
      frameId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["polaroid"]>
    composites: {}
  }

  type PolaroidGetPayload<S extends boolean | null | undefined | PolaroidDefaultArgs> = $Result.GetResult<Prisma.$PolaroidPayload, S>

  type PolaroidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PolaroidFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PolaroidCountAggregateInputType | true
    }

  export interface PolaroidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Polaroid'], meta: { name: 'Polaroid' } }
    /**
     * Find zero or one Polaroid that matches the filter.
     * @param {PolaroidFindUniqueArgs} args - Arguments to find a Polaroid
     * @example
     * // Get one Polaroid
     * const polaroid = await prisma.polaroid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PolaroidFindUniqueArgs>(args: SelectSubset<T, PolaroidFindUniqueArgs<ExtArgs>>): Prisma__PolaroidClient<$Result.GetResult<Prisma.$PolaroidPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Polaroid that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PolaroidFindUniqueOrThrowArgs} args - Arguments to find a Polaroid
     * @example
     * // Get one Polaroid
     * const polaroid = await prisma.polaroid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PolaroidFindUniqueOrThrowArgs>(args: SelectSubset<T, PolaroidFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PolaroidClient<$Result.GetResult<Prisma.$PolaroidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Polaroid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolaroidFindFirstArgs} args - Arguments to find a Polaroid
     * @example
     * // Get one Polaroid
     * const polaroid = await prisma.polaroid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PolaroidFindFirstArgs>(args?: SelectSubset<T, PolaroidFindFirstArgs<ExtArgs>>): Prisma__PolaroidClient<$Result.GetResult<Prisma.$PolaroidPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Polaroid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolaroidFindFirstOrThrowArgs} args - Arguments to find a Polaroid
     * @example
     * // Get one Polaroid
     * const polaroid = await prisma.polaroid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PolaroidFindFirstOrThrowArgs>(args?: SelectSubset<T, PolaroidFindFirstOrThrowArgs<ExtArgs>>): Prisma__PolaroidClient<$Result.GetResult<Prisma.$PolaroidPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Polaroids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolaroidFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Polaroids
     * const polaroids = await prisma.polaroid.findMany()
     * 
     * // Get first 10 Polaroids
     * const polaroids = await prisma.polaroid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const polaroidWithIdOnly = await prisma.polaroid.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PolaroidFindManyArgs>(args?: SelectSubset<T, PolaroidFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolaroidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Polaroid.
     * @param {PolaroidCreateArgs} args - Arguments to create a Polaroid.
     * @example
     * // Create one Polaroid
     * const Polaroid = await prisma.polaroid.create({
     *   data: {
     *     // ... data to create a Polaroid
     *   }
     * })
     * 
     */
    create<T extends PolaroidCreateArgs>(args: SelectSubset<T, PolaroidCreateArgs<ExtArgs>>): Prisma__PolaroidClient<$Result.GetResult<Prisma.$PolaroidPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Polaroids.
     * @param {PolaroidCreateManyArgs} args - Arguments to create many Polaroids.
     * @example
     * // Create many Polaroids
     * const polaroid = await prisma.polaroid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PolaroidCreateManyArgs>(args?: SelectSubset<T, PolaroidCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Polaroids and returns the data saved in the database.
     * @param {PolaroidCreateManyAndReturnArgs} args - Arguments to create many Polaroids.
     * @example
     * // Create many Polaroids
     * const polaroid = await prisma.polaroid.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Polaroids and only return the `id`
     * const polaroidWithIdOnly = await prisma.polaroid.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PolaroidCreateManyAndReturnArgs>(args?: SelectSubset<T, PolaroidCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolaroidPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Polaroid.
     * @param {PolaroidDeleteArgs} args - Arguments to delete one Polaroid.
     * @example
     * // Delete one Polaroid
     * const Polaroid = await prisma.polaroid.delete({
     *   where: {
     *     // ... filter to delete one Polaroid
     *   }
     * })
     * 
     */
    delete<T extends PolaroidDeleteArgs>(args: SelectSubset<T, PolaroidDeleteArgs<ExtArgs>>): Prisma__PolaroidClient<$Result.GetResult<Prisma.$PolaroidPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Polaroid.
     * @param {PolaroidUpdateArgs} args - Arguments to update one Polaroid.
     * @example
     * // Update one Polaroid
     * const polaroid = await prisma.polaroid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PolaroidUpdateArgs>(args: SelectSubset<T, PolaroidUpdateArgs<ExtArgs>>): Prisma__PolaroidClient<$Result.GetResult<Prisma.$PolaroidPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Polaroids.
     * @param {PolaroidDeleteManyArgs} args - Arguments to filter Polaroids to delete.
     * @example
     * // Delete a few Polaroids
     * const { count } = await prisma.polaroid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PolaroidDeleteManyArgs>(args?: SelectSubset<T, PolaroidDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Polaroids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolaroidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Polaroids
     * const polaroid = await prisma.polaroid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PolaroidUpdateManyArgs>(args: SelectSubset<T, PolaroidUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Polaroids and returns the data updated in the database.
     * @param {PolaroidUpdateManyAndReturnArgs} args - Arguments to update many Polaroids.
     * @example
     * // Update many Polaroids
     * const polaroid = await prisma.polaroid.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Polaroids and only return the `id`
     * const polaroidWithIdOnly = await prisma.polaroid.updateManyAndReturn({
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
    updateManyAndReturn<T extends PolaroidUpdateManyAndReturnArgs>(args: SelectSubset<T, PolaroidUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolaroidPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Polaroid.
     * @param {PolaroidUpsertArgs} args - Arguments to update or create a Polaroid.
     * @example
     * // Update or create a Polaroid
     * const polaroid = await prisma.polaroid.upsert({
     *   create: {
     *     // ... data to create a Polaroid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Polaroid we want to update
     *   }
     * })
     */
    upsert<T extends PolaroidUpsertArgs>(args: SelectSubset<T, PolaroidUpsertArgs<ExtArgs>>): Prisma__PolaroidClient<$Result.GetResult<Prisma.$PolaroidPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Polaroids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolaroidCountArgs} args - Arguments to filter Polaroids to count.
     * @example
     * // Count the number of Polaroids
     * const count = await prisma.polaroid.count({
     *   where: {
     *     // ... the filter for the Polaroids we want to count
     *   }
     * })
    **/
    count<T extends PolaroidCountArgs>(
      args?: Subset<T, PolaroidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolaroidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Polaroid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolaroidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PolaroidAggregateArgs>(args: Subset<T, PolaroidAggregateArgs>): Prisma.PrismaPromise<GetPolaroidAggregateType<T>>

    /**
     * Group by Polaroid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolaroidGroupByArgs} args - Group by arguments.
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
      T extends PolaroidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolaroidGroupByArgs['orderBy'] }
        : { orderBy?: PolaroidGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PolaroidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolaroidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Polaroid model
   */
  readonly fields: PolaroidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Polaroid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PolaroidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    frame<T extends FrameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FrameDefaultArgs<ExtArgs>>): Prisma__FrameClient<$Result.GetResult<Prisma.$FramePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Polaroid model
   */
  interface PolaroidFieldRefs {
    readonly id: FieldRef<"Polaroid", 'Int'>
    readonly position: FieldRef<"Polaroid", 'Json'>
    readonly url: FieldRef<"Polaroid", 'String'>
    readonly caption: FieldRef<"Polaroid", 'String'>
    readonly frameId: FieldRef<"Polaroid", 'Int'>
    readonly createdAt: FieldRef<"Polaroid", 'DateTime'>
    readonly updatedAt: FieldRef<"Polaroid", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Polaroid findUnique
   */
  export type PolaroidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Polaroid
     */
    select?: PolaroidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Polaroid
     */
    omit?: PolaroidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolaroidInclude<ExtArgs> | null
    /**
     * Filter, which Polaroid to fetch.
     */
    where: PolaroidWhereUniqueInput
  }

  /**
   * Polaroid findUniqueOrThrow
   */
  export type PolaroidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Polaroid
     */
    select?: PolaroidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Polaroid
     */
    omit?: PolaroidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolaroidInclude<ExtArgs> | null
    /**
     * Filter, which Polaroid to fetch.
     */
    where: PolaroidWhereUniqueInput
  }

  /**
   * Polaroid findFirst
   */
  export type PolaroidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Polaroid
     */
    select?: PolaroidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Polaroid
     */
    omit?: PolaroidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolaroidInclude<ExtArgs> | null
    /**
     * Filter, which Polaroid to fetch.
     */
    where?: PolaroidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Polaroids to fetch.
     */
    orderBy?: PolaroidOrderByWithRelationInput | PolaroidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Polaroids.
     */
    cursor?: PolaroidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Polaroids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Polaroids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Polaroids.
     */
    distinct?: PolaroidScalarFieldEnum | PolaroidScalarFieldEnum[]
  }

  /**
   * Polaroid findFirstOrThrow
   */
  export type PolaroidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Polaroid
     */
    select?: PolaroidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Polaroid
     */
    omit?: PolaroidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolaroidInclude<ExtArgs> | null
    /**
     * Filter, which Polaroid to fetch.
     */
    where?: PolaroidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Polaroids to fetch.
     */
    orderBy?: PolaroidOrderByWithRelationInput | PolaroidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Polaroids.
     */
    cursor?: PolaroidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Polaroids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Polaroids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Polaroids.
     */
    distinct?: PolaroidScalarFieldEnum | PolaroidScalarFieldEnum[]
  }

  /**
   * Polaroid findMany
   */
  export type PolaroidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Polaroid
     */
    select?: PolaroidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Polaroid
     */
    omit?: PolaroidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolaroidInclude<ExtArgs> | null
    /**
     * Filter, which Polaroids to fetch.
     */
    where?: PolaroidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Polaroids to fetch.
     */
    orderBy?: PolaroidOrderByWithRelationInput | PolaroidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Polaroids.
     */
    cursor?: PolaroidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Polaroids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Polaroids.
     */
    skip?: number
    distinct?: PolaroidScalarFieldEnum | PolaroidScalarFieldEnum[]
  }

  /**
   * Polaroid create
   */
  export type PolaroidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Polaroid
     */
    select?: PolaroidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Polaroid
     */
    omit?: PolaroidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolaroidInclude<ExtArgs> | null
    /**
     * The data needed to create a Polaroid.
     */
    data: XOR<PolaroidCreateInput, PolaroidUncheckedCreateInput>
  }

  /**
   * Polaroid createMany
   */
  export type PolaroidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Polaroids.
     */
    data: PolaroidCreateManyInput | PolaroidCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Polaroid createManyAndReturn
   */
  export type PolaroidCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Polaroid
     */
    select?: PolaroidSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Polaroid
     */
    omit?: PolaroidOmit<ExtArgs> | null
    /**
     * The data used to create many Polaroids.
     */
    data: PolaroidCreateManyInput | PolaroidCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolaroidIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Polaroid update
   */
  export type PolaroidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Polaroid
     */
    select?: PolaroidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Polaroid
     */
    omit?: PolaroidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolaroidInclude<ExtArgs> | null
    /**
     * The data needed to update a Polaroid.
     */
    data: XOR<PolaroidUpdateInput, PolaroidUncheckedUpdateInput>
    /**
     * Choose, which Polaroid to update.
     */
    where: PolaroidWhereUniqueInput
  }

  /**
   * Polaroid updateMany
   */
  export type PolaroidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Polaroids.
     */
    data: XOR<PolaroidUpdateManyMutationInput, PolaroidUncheckedUpdateManyInput>
    /**
     * Filter which Polaroids to update
     */
    where?: PolaroidWhereInput
    /**
     * Limit how many Polaroids to update.
     */
    limit?: number
  }

  /**
   * Polaroid updateManyAndReturn
   */
  export type PolaroidUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Polaroid
     */
    select?: PolaroidSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Polaroid
     */
    omit?: PolaroidOmit<ExtArgs> | null
    /**
     * The data used to update Polaroids.
     */
    data: XOR<PolaroidUpdateManyMutationInput, PolaroidUncheckedUpdateManyInput>
    /**
     * Filter which Polaroids to update
     */
    where?: PolaroidWhereInput
    /**
     * Limit how many Polaroids to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolaroidIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Polaroid upsert
   */
  export type PolaroidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Polaroid
     */
    select?: PolaroidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Polaroid
     */
    omit?: PolaroidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolaroidInclude<ExtArgs> | null
    /**
     * The filter to search for the Polaroid to update in case it exists.
     */
    where: PolaroidWhereUniqueInput
    /**
     * In case the Polaroid found by the `where` argument doesn't exist, create a new Polaroid with this data.
     */
    create: XOR<PolaroidCreateInput, PolaroidUncheckedCreateInput>
    /**
     * In case the Polaroid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PolaroidUpdateInput, PolaroidUncheckedUpdateInput>
  }

  /**
   * Polaroid delete
   */
  export type PolaroidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Polaroid
     */
    select?: PolaroidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Polaroid
     */
    omit?: PolaroidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolaroidInclude<ExtArgs> | null
    /**
     * Filter which Polaroid to delete.
     */
    where: PolaroidWhereUniqueInput
  }

  /**
   * Polaroid deleteMany
   */
  export type PolaroidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Polaroids to delete
     */
    where?: PolaroidWhereInput
    /**
     * Limit how many Polaroids to delete.
     */
    limit?: number
  }

  /**
   * Polaroid without action
   */
  export type PolaroidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Polaroid
     */
    select?: PolaroidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Polaroid
     */
    omit?: PolaroidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolaroidInclude<ExtArgs> | null
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
    frameId: number | null
  }

  export type MediaSumAggregateOutputType = {
    id: number | null
    frameId: number | null
  }

  export type MediaMinAggregateOutputType = {
    id: number | null
    type: string | null
    url: string | null
    frameId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: number | null
    type: string | null
    url: string | null
    frameId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    position: number
    type: number
    url: number
    frameId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MediaAvgAggregateInputType = {
    id?: true
    frameId?: true
  }

  export type MediaSumAggregateInputType = {
    id?: true
    frameId?: true
  }

  export type MediaMinAggregateInputType = {
    id?: true
    type?: true
    url?: true
    frameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    type?: true
    url?: true
    frameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    position?: true
    type?: true
    url?: true
    frameId?: true
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
    frameId: number
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
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    type?: boolean
    url?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    type?: boolean
    url?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    position?: boolean
    type?: boolean
    url?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "position" | "type" | "url" | "frameId" | "createdAt" | "updatedAt", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }
  export type MediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }
  export type MediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      frame: Prisma.$FramePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      position: Prisma.JsonValue | null
      type: string
      url: string
      frameId: number
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
    frame<T extends FrameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FrameDefaultArgs<ExtArgs>>): Prisma__FrameClient<$Result.GetResult<Prisma.$FramePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly frameId: FieldRef<"Media", 'Int'>
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
    frameId: number | null
  }

  export type ChecklistSumAggregateOutputType = {
    id: number | null
    frameId: number | null
  }

  export type ChecklistMinAggregateOutputType = {
    id: number | null
    title: string | null
    frameId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChecklistMaxAggregateOutputType = {
    id: number | null
    title: string | null
    frameId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChecklistCountAggregateOutputType = {
    id: number
    position: number
    title: number
    items: number
    frameId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChecklistAvgAggregateInputType = {
    id?: true
    frameId?: true
  }

  export type ChecklistSumAggregateInputType = {
    id?: true
    frameId?: true
  }

  export type ChecklistMinAggregateInputType = {
    id?: true
    title?: true
    frameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChecklistMaxAggregateInputType = {
    id?: true
    title?: true
    frameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChecklistCountAggregateInputType = {
    id?: true
    position?: true
    title?: true
    items?: true
    frameId?: true
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
    frameId: number
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
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklist"]>

  export type ChecklistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    title?: boolean
    items?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklist"]>

  export type ChecklistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    title?: boolean
    items?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklist"]>

  export type ChecklistSelectScalar = {
    id?: boolean
    position?: boolean
    title?: boolean
    items?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChecklistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "position" | "title" | "items" | "frameId" | "createdAt" | "updatedAt", ExtArgs["result"]["checklist"]>
  export type ChecklistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }
  export type ChecklistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }
  export type ChecklistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }

  export type $ChecklistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Checklist"
    objects: {
      frame: Prisma.$FramePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      position: Prisma.JsonValue | null
      title: string
      items: Prisma.JsonValue
      frameId: number
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
    frame<T extends FrameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FrameDefaultArgs<ExtArgs>>): Prisma__FrameClient<$Result.GetResult<Prisma.$FramePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly frameId: FieldRef<"Checklist", 'Int'>
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
    frameId: number | null
  }

  export type NoteSumAggregateOutputType = {
    id: number | null
    frameId: number | null
  }

  export type NoteMinAggregateOutputType = {
    id: number | null
    content: string | null
    frameId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteMaxAggregateOutputType = {
    id: number | null
    content: string | null
    frameId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    position: number
    content: number
    frameId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NoteAvgAggregateInputType = {
    id?: true
    frameId?: true
  }

  export type NoteSumAggregateInputType = {
    id?: true
    frameId?: true
  }

  export type NoteMinAggregateInputType = {
    id?: true
    content?: true
    frameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    content?: true
    frameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    position?: true
    content?: true
    frameId?: true
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
    frameId: number
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
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    content?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    content?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    id?: boolean
    position?: boolean
    content?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "position" | "content" | "frameId" | "createdAt" | "updatedAt", ExtArgs["result"]["note"]>
  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }
  export type NoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }
  export type NoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      frame: Prisma.$FramePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      position: Prisma.JsonValue | null
      content: string
      frameId: number
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
    frame<T extends FrameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FrameDefaultArgs<ExtArgs>>): Prisma__FrameClient<$Result.GetResult<Prisma.$FramePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly frameId: FieldRef<"Note", 'Int'>
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
   * Model DecorItem
   */

  export type AggregateDecorItem = {
    _count: DecorItemCountAggregateOutputType | null
    _avg: DecorItemAvgAggregateOutputType | null
    _sum: DecorItemSumAggregateOutputType | null
    _min: DecorItemMinAggregateOutputType | null
    _max: DecorItemMaxAggregateOutputType | null
  }

  export type DecorItemAvgAggregateOutputType = {
    id: number | null
    frameId: number | null
  }

  export type DecorItemSumAggregateOutputType = {
    id: number | null
    frameId: number | null
  }

  export type DecorItemMinAggregateOutputType = {
    id: number | null
    type: string | null
    frameId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DecorItemMaxAggregateOutputType = {
    id: number | null
    type: string | null
    frameId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DecorItemCountAggregateOutputType = {
    id: number
    position: number
    type: number
    frameId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DecorItemAvgAggregateInputType = {
    id?: true
    frameId?: true
  }

  export type DecorItemSumAggregateInputType = {
    id?: true
    frameId?: true
  }

  export type DecorItemMinAggregateInputType = {
    id?: true
    type?: true
    frameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DecorItemMaxAggregateInputType = {
    id?: true
    type?: true
    frameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DecorItemCountAggregateInputType = {
    id?: true
    position?: true
    type?: true
    frameId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DecorItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DecorItem to aggregate.
     */
    where?: DecorItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DecorItems to fetch.
     */
    orderBy?: DecorItemOrderByWithRelationInput | DecorItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DecorItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DecorItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DecorItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DecorItems
    **/
    _count?: true | DecorItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DecorItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DecorItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DecorItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DecorItemMaxAggregateInputType
  }

  export type GetDecorItemAggregateType<T extends DecorItemAggregateArgs> = {
        [P in keyof T & keyof AggregateDecorItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDecorItem[P]>
      : GetScalarType<T[P], AggregateDecorItem[P]>
  }




  export type DecorItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecorItemWhereInput
    orderBy?: DecorItemOrderByWithAggregationInput | DecorItemOrderByWithAggregationInput[]
    by: DecorItemScalarFieldEnum[] | DecorItemScalarFieldEnum
    having?: DecorItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DecorItemCountAggregateInputType | true
    _avg?: DecorItemAvgAggregateInputType
    _sum?: DecorItemSumAggregateInputType
    _min?: DecorItemMinAggregateInputType
    _max?: DecorItemMaxAggregateInputType
  }

  export type DecorItemGroupByOutputType = {
    id: number
    position: JsonValue | null
    type: string
    frameId: number
    createdAt: Date
    updatedAt: Date
    _count: DecorItemCountAggregateOutputType | null
    _avg: DecorItemAvgAggregateOutputType | null
    _sum: DecorItemSumAggregateOutputType | null
    _min: DecorItemMinAggregateOutputType | null
    _max: DecorItemMaxAggregateOutputType | null
  }

  type GetDecorItemGroupByPayload<T extends DecorItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DecorItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DecorItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DecorItemGroupByOutputType[P]>
            : GetScalarType<T[P], DecorItemGroupByOutputType[P]>
        }
      >
    >


  export type DecorItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    type?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decorItem"]>

  export type DecorItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    type?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decorItem"]>

  export type DecorItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    type?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decorItem"]>

  export type DecorItemSelectScalar = {
    id?: boolean
    position?: boolean
    type?: boolean
    frameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DecorItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "position" | "type" | "frameId" | "createdAt" | "updatedAt", ExtArgs["result"]["decorItem"]>
  export type DecorItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }
  export type DecorItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }
  export type DecorItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frame?: boolean | FrameDefaultArgs<ExtArgs>
  }

  export type $DecorItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DecorItem"
    objects: {
      frame: Prisma.$FramePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      position: Prisma.JsonValue | null
      type: string
      frameId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["decorItem"]>
    composites: {}
  }

  type DecorItemGetPayload<S extends boolean | null | undefined | DecorItemDefaultArgs> = $Result.GetResult<Prisma.$DecorItemPayload, S>

  type DecorItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DecorItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DecorItemCountAggregateInputType | true
    }

  export interface DecorItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DecorItem'], meta: { name: 'DecorItem' } }
    /**
     * Find zero or one DecorItem that matches the filter.
     * @param {DecorItemFindUniqueArgs} args - Arguments to find a DecorItem
     * @example
     * // Get one DecorItem
     * const decorItem = await prisma.decorItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DecorItemFindUniqueArgs>(args: SelectSubset<T, DecorItemFindUniqueArgs<ExtArgs>>): Prisma__DecorItemClient<$Result.GetResult<Prisma.$DecorItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DecorItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DecorItemFindUniqueOrThrowArgs} args - Arguments to find a DecorItem
     * @example
     * // Get one DecorItem
     * const decorItem = await prisma.decorItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DecorItemFindUniqueOrThrowArgs>(args: SelectSubset<T, DecorItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DecorItemClient<$Result.GetResult<Prisma.$DecorItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DecorItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecorItemFindFirstArgs} args - Arguments to find a DecorItem
     * @example
     * // Get one DecorItem
     * const decorItem = await prisma.decorItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DecorItemFindFirstArgs>(args?: SelectSubset<T, DecorItemFindFirstArgs<ExtArgs>>): Prisma__DecorItemClient<$Result.GetResult<Prisma.$DecorItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DecorItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecorItemFindFirstOrThrowArgs} args - Arguments to find a DecorItem
     * @example
     * // Get one DecorItem
     * const decorItem = await prisma.decorItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DecorItemFindFirstOrThrowArgs>(args?: SelectSubset<T, DecorItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__DecorItemClient<$Result.GetResult<Prisma.$DecorItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DecorItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecorItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DecorItems
     * const decorItems = await prisma.decorItem.findMany()
     * 
     * // Get first 10 DecorItems
     * const decorItems = await prisma.decorItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const decorItemWithIdOnly = await prisma.decorItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DecorItemFindManyArgs>(args?: SelectSubset<T, DecorItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecorItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DecorItem.
     * @param {DecorItemCreateArgs} args - Arguments to create a DecorItem.
     * @example
     * // Create one DecorItem
     * const DecorItem = await prisma.decorItem.create({
     *   data: {
     *     // ... data to create a DecorItem
     *   }
     * })
     * 
     */
    create<T extends DecorItemCreateArgs>(args: SelectSubset<T, DecorItemCreateArgs<ExtArgs>>): Prisma__DecorItemClient<$Result.GetResult<Prisma.$DecorItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DecorItems.
     * @param {DecorItemCreateManyArgs} args - Arguments to create many DecorItems.
     * @example
     * // Create many DecorItems
     * const decorItem = await prisma.decorItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DecorItemCreateManyArgs>(args?: SelectSubset<T, DecorItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DecorItems and returns the data saved in the database.
     * @param {DecorItemCreateManyAndReturnArgs} args - Arguments to create many DecorItems.
     * @example
     * // Create many DecorItems
     * const decorItem = await prisma.decorItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DecorItems and only return the `id`
     * const decorItemWithIdOnly = await prisma.decorItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DecorItemCreateManyAndReturnArgs>(args?: SelectSubset<T, DecorItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecorItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DecorItem.
     * @param {DecorItemDeleteArgs} args - Arguments to delete one DecorItem.
     * @example
     * // Delete one DecorItem
     * const DecorItem = await prisma.decorItem.delete({
     *   where: {
     *     // ... filter to delete one DecorItem
     *   }
     * })
     * 
     */
    delete<T extends DecorItemDeleteArgs>(args: SelectSubset<T, DecorItemDeleteArgs<ExtArgs>>): Prisma__DecorItemClient<$Result.GetResult<Prisma.$DecorItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DecorItem.
     * @param {DecorItemUpdateArgs} args - Arguments to update one DecorItem.
     * @example
     * // Update one DecorItem
     * const decorItem = await prisma.decorItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DecorItemUpdateArgs>(args: SelectSubset<T, DecorItemUpdateArgs<ExtArgs>>): Prisma__DecorItemClient<$Result.GetResult<Prisma.$DecorItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DecorItems.
     * @param {DecorItemDeleteManyArgs} args - Arguments to filter DecorItems to delete.
     * @example
     * // Delete a few DecorItems
     * const { count } = await prisma.decorItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DecorItemDeleteManyArgs>(args?: SelectSubset<T, DecorItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DecorItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecorItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DecorItems
     * const decorItem = await prisma.decorItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DecorItemUpdateManyArgs>(args: SelectSubset<T, DecorItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DecorItems and returns the data updated in the database.
     * @param {DecorItemUpdateManyAndReturnArgs} args - Arguments to update many DecorItems.
     * @example
     * // Update many DecorItems
     * const decorItem = await prisma.decorItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DecorItems and only return the `id`
     * const decorItemWithIdOnly = await prisma.decorItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends DecorItemUpdateManyAndReturnArgs>(args: SelectSubset<T, DecorItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecorItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DecorItem.
     * @param {DecorItemUpsertArgs} args - Arguments to update or create a DecorItem.
     * @example
     * // Update or create a DecorItem
     * const decorItem = await prisma.decorItem.upsert({
     *   create: {
     *     // ... data to create a DecorItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DecorItem we want to update
     *   }
     * })
     */
    upsert<T extends DecorItemUpsertArgs>(args: SelectSubset<T, DecorItemUpsertArgs<ExtArgs>>): Prisma__DecorItemClient<$Result.GetResult<Prisma.$DecorItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DecorItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecorItemCountArgs} args - Arguments to filter DecorItems to count.
     * @example
     * // Count the number of DecorItems
     * const count = await prisma.decorItem.count({
     *   where: {
     *     // ... the filter for the DecorItems we want to count
     *   }
     * })
    **/
    count<T extends DecorItemCountArgs>(
      args?: Subset<T, DecorItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DecorItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DecorItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecorItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DecorItemAggregateArgs>(args: Subset<T, DecorItemAggregateArgs>): Prisma.PrismaPromise<GetDecorItemAggregateType<T>>

    /**
     * Group by DecorItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecorItemGroupByArgs} args - Group by arguments.
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
      T extends DecorItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DecorItemGroupByArgs['orderBy'] }
        : { orderBy?: DecorItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DecorItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDecorItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DecorItem model
   */
  readonly fields: DecorItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DecorItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DecorItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    frame<T extends FrameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FrameDefaultArgs<ExtArgs>>): Prisma__FrameClient<$Result.GetResult<Prisma.$FramePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DecorItem model
   */
  interface DecorItemFieldRefs {
    readonly id: FieldRef<"DecorItem", 'Int'>
    readonly position: FieldRef<"DecorItem", 'Json'>
    readonly type: FieldRef<"DecorItem", 'String'>
    readonly frameId: FieldRef<"DecorItem", 'Int'>
    readonly createdAt: FieldRef<"DecorItem", 'DateTime'>
    readonly updatedAt: FieldRef<"DecorItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DecorItem findUnique
   */
  export type DecorItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecorItem
     */
    select?: DecorItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecorItem
     */
    omit?: DecorItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecorItemInclude<ExtArgs> | null
    /**
     * Filter, which DecorItem to fetch.
     */
    where: DecorItemWhereUniqueInput
  }

  /**
   * DecorItem findUniqueOrThrow
   */
  export type DecorItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecorItem
     */
    select?: DecorItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecorItem
     */
    omit?: DecorItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecorItemInclude<ExtArgs> | null
    /**
     * Filter, which DecorItem to fetch.
     */
    where: DecorItemWhereUniqueInput
  }

  /**
   * DecorItem findFirst
   */
  export type DecorItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecorItem
     */
    select?: DecorItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecorItem
     */
    omit?: DecorItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecorItemInclude<ExtArgs> | null
    /**
     * Filter, which DecorItem to fetch.
     */
    where?: DecorItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DecorItems to fetch.
     */
    orderBy?: DecorItemOrderByWithRelationInput | DecorItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DecorItems.
     */
    cursor?: DecorItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DecorItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DecorItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DecorItems.
     */
    distinct?: DecorItemScalarFieldEnum | DecorItemScalarFieldEnum[]
  }

  /**
   * DecorItem findFirstOrThrow
   */
  export type DecorItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecorItem
     */
    select?: DecorItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecorItem
     */
    omit?: DecorItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecorItemInclude<ExtArgs> | null
    /**
     * Filter, which DecorItem to fetch.
     */
    where?: DecorItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DecorItems to fetch.
     */
    orderBy?: DecorItemOrderByWithRelationInput | DecorItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DecorItems.
     */
    cursor?: DecorItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DecorItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DecorItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DecorItems.
     */
    distinct?: DecorItemScalarFieldEnum | DecorItemScalarFieldEnum[]
  }

  /**
   * DecorItem findMany
   */
  export type DecorItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecorItem
     */
    select?: DecorItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecorItem
     */
    omit?: DecorItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecorItemInclude<ExtArgs> | null
    /**
     * Filter, which DecorItems to fetch.
     */
    where?: DecorItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DecorItems to fetch.
     */
    orderBy?: DecorItemOrderByWithRelationInput | DecorItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DecorItems.
     */
    cursor?: DecorItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DecorItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DecorItems.
     */
    skip?: number
    distinct?: DecorItemScalarFieldEnum | DecorItemScalarFieldEnum[]
  }

  /**
   * DecorItem create
   */
  export type DecorItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecorItem
     */
    select?: DecorItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecorItem
     */
    omit?: DecorItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecorItemInclude<ExtArgs> | null
    /**
     * The data needed to create a DecorItem.
     */
    data: XOR<DecorItemCreateInput, DecorItemUncheckedCreateInput>
  }

  /**
   * DecorItem createMany
   */
  export type DecorItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DecorItems.
     */
    data: DecorItemCreateManyInput | DecorItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DecorItem createManyAndReturn
   */
  export type DecorItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecorItem
     */
    select?: DecorItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DecorItem
     */
    omit?: DecorItemOmit<ExtArgs> | null
    /**
     * The data used to create many DecorItems.
     */
    data: DecorItemCreateManyInput | DecorItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecorItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DecorItem update
   */
  export type DecorItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecorItem
     */
    select?: DecorItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecorItem
     */
    omit?: DecorItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecorItemInclude<ExtArgs> | null
    /**
     * The data needed to update a DecorItem.
     */
    data: XOR<DecorItemUpdateInput, DecorItemUncheckedUpdateInput>
    /**
     * Choose, which DecorItem to update.
     */
    where: DecorItemWhereUniqueInput
  }

  /**
   * DecorItem updateMany
   */
  export type DecorItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DecorItems.
     */
    data: XOR<DecorItemUpdateManyMutationInput, DecorItemUncheckedUpdateManyInput>
    /**
     * Filter which DecorItems to update
     */
    where?: DecorItemWhereInput
    /**
     * Limit how many DecorItems to update.
     */
    limit?: number
  }

  /**
   * DecorItem updateManyAndReturn
   */
  export type DecorItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecorItem
     */
    select?: DecorItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DecorItem
     */
    omit?: DecorItemOmit<ExtArgs> | null
    /**
     * The data used to update DecorItems.
     */
    data: XOR<DecorItemUpdateManyMutationInput, DecorItemUncheckedUpdateManyInput>
    /**
     * Filter which DecorItems to update
     */
    where?: DecorItemWhereInput
    /**
     * Limit how many DecorItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecorItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DecorItem upsert
   */
  export type DecorItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecorItem
     */
    select?: DecorItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecorItem
     */
    omit?: DecorItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecorItemInclude<ExtArgs> | null
    /**
     * The filter to search for the DecorItem to update in case it exists.
     */
    where: DecorItemWhereUniqueInput
    /**
     * In case the DecorItem found by the `where` argument doesn't exist, create a new DecorItem with this data.
     */
    create: XOR<DecorItemCreateInput, DecorItemUncheckedCreateInput>
    /**
     * In case the DecorItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DecorItemUpdateInput, DecorItemUncheckedUpdateInput>
  }

  /**
   * DecorItem delete
   */
  export type DecorItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecorItem
     */
    select?: DecorItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecorItem
     */
    omit?: DecorItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecorItemInclude<ExtArgs> | null
    /**
     * Filter which DecorItem to delete.
     */
    where: DecorItemWhereUniqueInput
  }

  /**
   * DecorItem deleteMany
   */
  export type DecorItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DecorItems to delete
     */
    where?: DecorItemWhereInput
    /**
     * Limit how many DecorItems to delete.
     */
    limit?: number
  }

  /**
   * DecorItem without action
   */
  export type DecorItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecorItem
     */
    select?: DecorItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DecorItem
     */
    omit?: DecorItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecorItemInclude<ExtArgs> | null
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


  export const FrameScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerId: 'ownerId'
  };

  export type FrameScalarFieldEnum = (typeof FrameScalarFieldEnum)[keyof typeof FrameScalarFieldEnum]


  export const FrameLayoutScalarFieldEnum: {
    id: 'id',
    layout: 'layout',
    frameId: 'frameId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FrameLayoutScalarFieldEnum = (typeof FrameLayoutScalarFieldEnum)[keyof typeof FrameLayoutScalarFieldEnum]


  export const ChestScalarFieldEnum: {
    id: 'id',
    passcode: 'passcode',
    position: 'position',
    items: 'items',
    frameId: 'frameId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChestScalarFieldEnum = (typeof ChestScalarFieldEnum)[keyof typeof ChestScalarFieldEnum]


  export const JournalScalarFieldEnum: {
    id: 'id',
    passcode: 'passcode',
    position: 'position',
    entries: 'entries',
    frameId: 'frameId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JournalScalarFieldEnum = (typeof JournalScalarFieldEnum)[keyof typeof JournalScalarFieldEnum]


  export const PolaroidScalarFieldEnum: {
    id: 'id',
    position: 'position',
    url: 'url',
    caption: 'caption',
    frameId: 'frameId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PolaroidScalarFieldEnum = (typeof PolaroidScalarFieldEnum)[keyof typeof PolaroidScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    position: 'position',
    type: 'type',
    url: 'url',
    frameId: 'frameId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const ChecklistScalarFieldEnum: {
    id: 'id',
    position: 'position',
    title: 'title',
    items: 'items',
    frameId: 'frameId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChecklistScalarFieldEnum = (typeof ChecklistScalarFieldEnum)[keyof typeof ChecklistScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    position: 'position',
    content: 'content',
    frameId: 'frameId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const DecorItemScalarFieldEnum: {
    id: 'id',
    position: 'position',
    type: 'type',
    frameId: 'frameId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DecorItemScalarFieldEnum = (typeof DecorItemScalarFieldEnum)[keyof typeof DecorItemScalarFieldEnum]


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
    frame?: FrameListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    frame?: FrameOrderByRelationAggregateInput
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
    frame?: FrameListRelationFilter
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

  export type FrameWhereInput = {
    AND?: FrameWhereInput | FrameWhereInput[]
    OR?: FrameWhereInput[]
    NOT?: FrameWhereInput | FrameWhereInput[]
    id?: IntFilter<"Frame"> | number
    title?: StringFilter<"Frame"> | string
    createdAt?: DateTimeFilter<"Frame"> | Date | string
    updatedAt?: DateTimeFilter<"Frame"> | Date | string
    ownerId?: IntFilter<"Frame"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    layout?: XOR<FrameLayoutNullableScalarRelationFilter, FrameLayoutWhereInput> | null
    chest?: XOR<ChestNullableScalarRelationFilter, ChestWhereInput> | null
    journal?: XOR<JournalNullableScalarRelationFilter, JournalWhereInput> | null
    polaroid?: PolaroidListRelationFilter
    media?: MediaListRelationFilter
    checklist?: ChecklistListRelationFilter
    notes?: NoteListRelationFilter
    decorItems?: DecorItemListRelationFilter
  }

  export type FrameOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    layout?: FrameLayoutOrderByWithRelationInput
    chest?: ChestOrderByWithRelationInput
    journal?: JournalOrderByWithRelationInput
    polaroid?: PolaroidOrderByRelationAggregateInput
    media?: MediaOrderByRelationAggregateInput
    checklist?: ChecklistOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
    decorItems?: DecorItemOrderByRelationAggregateInput
  }

  export type FrameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ownerId?: number
    AND?: FrameWhereInput | FrameWhereInput[]
    OR?: FrameWhereInput[]
    NOT?: FrameWhereInput | FrameWhereInput[]
    title?: StringFilter<"Frame"> | string
    createdAt?: DateTimeFilter<"Frame"> | Date | string
    updatedAt?: DateTimeFilter<"Frame"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    layout?: XOR<FrameLayoutNullableScalarRelationFilter, FrameLayoutWhereInput> | null
    chest?: XOR<ChestNullableScalarRelationFilter, ChestWhereInput> | null
    journal?: XOR<JournalNullableScalarRelationFilter, JournalWhereInput> | null
    polaroid?: PolaroidListRelationFilter
    media?: MediaListRelationFilter
    checklist?: ChecklistListRelationFilter
    notes?: NoteListRelationFilter
    decorItems?: DecorItemListRelationFilter
  }, "id" | "ownerId">

  export type FrameOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    _count?: FrameCountOrderByAggregateInput
    _avg?: FrameAvgOrderByAggregateInput
    _max?: FrameMaxOrderByAggregateInput
    _min?: FrameMinOrderByAggregateInput
    _sum?: FrameSumOrderByAggregateInput
  }

  export type FrameScalarWhereWithAggregatesInput = {
    AND?: FrameScalarWhereWithAggregatesInput | FrameScalarWhereWithAggregatesInput[]
    OR?: FrameScalarWhereWithAggregatesInput[]
    NOT?: FrameScalarWhereWithAggregatesInput | FrameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Frame"> | number
    title?: StringWithAggregatesFilter<"Frame"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Frame"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Frame"> | Date | string
    ownerId?: IntWithAggregatesFilter<"Frame"> | number
  }

  export type FrameLayoutWhereInput = {
    AND?: FrameLayoutWhereInput | FrameLayoutWhereInput[]
    OR?: FrameLayoutWhereInput[]
    NOT?: FrameLayoutWhereInput | FrameLayoutWhereInput[]
    id?: IntFilter<"FrameLayout"> | number
    layout?: JsonFilter<"FrameLayout">
    frameId?: IntFilter<"FrameLayout"> | number
    createdAt?: DateTimeFilter<"FrameLayout"> | Date | string
    updatedAt?: DateTimeFilter<"FrameLayout"> | Date | string
    frame?: XOR<FrameScalarRelationFilter, FrameWhereInput>
  }

  export type FrameLayoutOrderByWithRelationInput = {
    id?: SortOrder
    layout?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    frame?: FrameOrderByWithRelationInput
  }

  export type FrameLayoutWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    frameId?: number
    AND?: FrameLayoutWhereInput | FrameLayoutWhereInput[]
    OR?: FrameLayoutWhereInput[]
    NOT?: FrameLayoutWhereInput | FrameLayoutWhereInput[]
    layout?: JsonFilter<"FrameLayout">
    createdAt?: DateTimeFilter<"FrameLayout"> | Date | string
    updatedAt?: DateTimeFilter<"FrameLayout"> | Date | string
    frame?: XOR<FrameScalarRelationFilter, FrameWhereInput>
  }, "id" | "frameId">

  export type FrameLayoutOrderByWithAggregationInput = {
    id?: SortOrder
    layout?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FrameLayoutCountOrderByAggregateInput
    _avg?: FrameLayoutAvgOrderByAggregateInput
    _max?: FrameLayoutMaxOrderByAggregateInput
    _min?: FrameLayoutMinOrderByAggregateInput
    _sum?: FrameLayoutSumOrderByAggregateInput
  }

  export type FrameLayoutScalarWhereWithAggregatesInput = {
    AND?: FrameLayoutScalarWhereWithAggregatesInput | FrameLayoutScalarWhereWithAggregatesInput[]
    OR?: FrameLayoutScalarWhereWithAggregatesInput[]
    NOT?: FrameLayoutScalarWhereWithAggregatesInput | FrameLayoutScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FrameLayout"> | number
    layout?: JsonWithAggregatesFilter<"FrameLayout">
    frameId?: IntWithAggregatesFilter<"FrameLayout"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FrameLayout"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FrameLayout"> | Date | string
  }

  export type ChestWhereInput = {
    AND?: ChestWhereInput | ChestWhereInput[]
    OR?: ChestWhereInput[]
    NOT?: ChestWhereInput | ChestWhereInput[]
    id?: IntFilter<"Chest"> | number
    passcode?: StringFilter<"Chest"> | string
    position?: JsonNullableFilter<"Chest">
    items?: JsonNullableFilter<"Chest">
    frameId?: IntFilter<"Chest"> | number
    createdAt?: DateTimeFilter<"Chest"> | Date | string
    updatedAt?: DateTimeFilter<"Chest"> | Date | string
    frame?: XOR<FrameScalarRelationFilter, FrameWhereInput>
  }

  export type ChestOrderByWithRelationInput = {
    id?: SortOrder
    passcode?: SortOrder
    position?: SortOrderInput | SortOrder
    items?: SortOrderInput | SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    frame?: FrameOrderByWithRelationInput
  }

  export type ChestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    frameId?: number
    AND?: ChestWhereInput | ChestWhereInput[]
    OR?: ChestWhereInput[]
    NOT?: ChestWhereInput | ChestWhereInput[]
    passcode?: StringFilter<"Chest"> | string
    position?: JsonNullableFilter<"Chest">
    items?: JsonNullableFilter<"Chest">
    createdAt?: DateTimeFilter<"Chest"> | Date | string
    updatedAt?: DateTimeFilter<"Chest"> | Date | string
    frame?: XOR<FrameScalarRelationFilter, FrameWhereInput>
  }, "id" | "frameId">

  export type ChestOrderByWithAggregationInput = {
    id?: SortOrder
    passcode?: SortOrder
    position?: SortOrderInput | SortOrder
    items?: SortOrderInput | SortOrder
    frameId?: SortOrder
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
    frameId?: IntWithAggregatesFilter<"Chest"> | number
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
    frameId?: IntFilter<"Journal"> | number
    createdAt?: DateTimeFilter<"Journal"> | Date | string
    updatedAt?: DateTimeFilter<"Journal"> | Date | string
    frame?: XOR<FrameScalarRelationFilter, FrameWhereInput>
  }

  export type JournalOrderByWithRelationInput = {
    id?: SortOrder
    passcode?: SortOrder
    position?: SortOrderInput | SortOrder
    entries?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    frame?: FrameOrderByWithRelationInput
  }

  export type JournalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    frameId?: number
    AND?: JournalWhereInput | JournalWhereInput[]
    OR?: JournalWhereInput[]
    NOT?: JournalWhereInput | JournalWhereInput[]
    passcode?: StringFilter<"Journal"> | string
    position?: JsonNullableFilter<"Journal">
    entries?: JsonFilter<"Journal">
    createdAt?: DateTimeFilter<"Journal"> | Date | string
    updatedAt?: DateTimeFilter<"Journal"> | Date | string
    frame?: XOR<FrameScalarRelationFilter, FrameWhereInput>
  }, "id" | "frameId">

  export type JournalOrderByWithAggregationInput = {
    id?: SortOrder
    passcode?: SortOrder
    position?: SortOrderInput | SortOrder
    entries?: SortOrder
    frameId?: SortOrder
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
    frameId?: IntWithAggregatesFilter<"Journal"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Journal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Journal"> | Date | string
  }

  export type PolaroidWhereInput = {
    AND?: PolaroidWhereInput | PolaroidWhereInput[]
    OR?: PolaroidWhereInput[]
    NOT?: PolaroidWhereInput | PolaroidWhereInput[]
    id?: IntFilter<"Polaroid"> | number
    position?: JsonNullableFilter<"Polaroid">
    url?: StringFilter<"Polaroid"> | string
    caption?: StringNullableFilter<"Polaroid"> | string | null
    frameId?: IntFilter<"Polaroid"> | number
    createdAt?: DateTimeFilter<"Polaroid"> | Date | string
    updatedAt?: DateTimeFilter<"Polaroid"> | Date | string
    frame?: XOR<FrameScalarRelationFilter, FrameWhereInput>
  }

  export type PolaroidOrderByWithRelationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    frame?: FrameOrderByWithRelationInput
  }

  export type PolaroidWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PolaroidWhereInput | PolaroidWhereInput[]
    OR?: PolaroidWhereInput[]
    NOT?: PolaroidWhereInput | PolaroidWhereInput[]
    position?: JsonNullableFilter<"Polaroid">
    url?: StringFilter<"Polaroid"> | string
    caption?: StringNullableFilter<"Polaroid"> | string | null
    frameId?: IntFilter<"Polaroid"> | number
    createdAt?: DateTimeFilter<"Polaroid"> | Date | string
    updatedAt?: DateTimeFilter<"Polaroid"> | Date | string
    frame?: XOR<FrameScalarRelationFilter, FrameWhereInput>
  }, "id">

  export type PolaroidOrderByWithAggregationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PolaroidCountOrderByAggregateInput
    _avg?: PolaroidAvgOrderByAggregateInput
    _max?: PolaroidMaxOrderByAggregateInput
    _min?: PolaroidMinOrderByAggregateInput
    _sum?: PolaroidSumOrderByAggregateInput
  }

  export type PolaroidScalarWhereWithAggregatesInput = {
    AND?: PolaroidScalarWhereWithAggregatesInput | PolaroidScalarWhereWithAggregatesInput[]
    OR?: PolaroidScalarWhereWithAggregatesInput[]
    NOT?: PolaroidScalarWhereWithAggregatesInput | PolaroidScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Polaroid"> | number
    position?: JsonNullableWithAggregatesFilter<"Polaroid">
    url?: StringWithAggregatesFilter<"Polaroid"> | string
    caption?: StringNullableWithAggregatesFilter<"Polaroid"> | string | null
    frameId?: IntWithAggregatesFilter<"Polaroid"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Polaroid"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Polaroid"> | Date | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: IntFilter<"Media"> | number
    position?: JsonNullableFilter<"Media">
    type?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    frameId?: IntFilter<"Media"> | number
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
    frame?: XOR<FrameScalarRelationFilter, FrameWhereInput>
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    type?: SortOrder
    url?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    frame?: FrameOrderByWithRelationInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    position?: JsonNullableFilter<"Media">
    type?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    frameId?: IntFilter<"Media"> | number
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
    frame?: XOR<FrameScalarRelationFilter, FrameWhereInput>
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    type?: SortOrder
    url?: SortOrder
    frameId?: SortOrder
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
    frameId?: IntWithAggregatesFilter<"Media"> | number
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
    frameId?: IntFilter<"Checklist"> | number
    createdAt?: DateTimeFilter<"Checklist"> | Date | string
    updatedAt?: DateTimeFilter<"Checklist"> | Date | string
    frame?: XOR<FrameScalarRelationFilter, FrameWhereInput>
  }

  export type ChecklistOrderByWithRelationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    title?: SortOrder
    items?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    frame?: FrameOrderByWithRelationInput
  }

  export type ChecklistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChecklistWhereInput | ChecklistWhereInput[]
    OR?: ChecklistWhereInput[]
    NOT?: ChecklistWhereInput | ChecklistWhereInput[]
    position?: JsonNullableFilter<"Checklist">
    title?: StringFilter<"Checklist"> | string
    items?: JsonFilter<"Checklist">
    frameId?: IntFilter<"Checklist"> | number
    createdAt?: DateTimeFilter<"Checklist"> | Date | string
    updatedAt?: DateTimeFilter<"Checklist"> | Date | string
    frame?: XOR<FrameScalarRelationFilter, FrameWhereInput>
  }, "id">

  export type ChecklistOrderByWithAggregationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    title?: SortOrder
    items?: SortOrder
    frameId?: SortOrder
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
    frameId?: IntWithAggregatesFilter<"Checklist"> | number
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
    frameId?: IntFilter<"Note"> | number
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    frame?: XOR<FrameScalarRelationFilter, FrameWhereInput>
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    content?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    frame?: FrameOrderByWithRelationInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    position?: JsonNullableFilter<"Note">
    content?: StringFilter<"Note"> | string
    frameId?: IntFilter<"Note"> | number
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    frame?: XOR<FrameScalarRelationFilter, FrameWhereInput>
  }, "id">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    content?: SortOrder
    frameId?: SortOrder
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
    frameId?: IntWithAggregatesFilter<"Note"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
  }

  export type DecorItemWhereInput = {
    AND?: DecorItemWhereInput | DecorItemWhereInput[]
    OR?: DecorItemWhereInput[]
    NOT?: DecorItemWhereInput | DecorItemWhereInput[]
    id?: IntFilter<"DecorItem"> | number
    position?: JsonNullableFilter<"DecorItem">
    type?: StringFilter<"DecorItem"> | string
    frameId?: IntFilter<"DecorItem"> | number
    createdAt?: DateTimeFilter<"DecorItem"> | Date | string
    updatedAt?: DateTimeFilter<"DecorItem"> | Date | string
    frame?: XOR<FrameScalarRelationFilter, FrameWhereInput>
  }

  export type DecorItemOrderByWithRelationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    type?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    frame?: FrameOrderByWithRelationInput
  }

  export type DecorItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DecorItemWhereInput | DecorItemWhereInput[]
    OR?: DecorItemWhereInput[]
    NOT?: DecorItemWhereInput | DecorItemWhereInput[]
    position?: JsonNullableFilter<"DecorItem">
    type?: StringFilter<"DecorItem"> | string
    frameId?: IntFilter<"DecorItem"> | number
    createdAt?: DateTimeFilter<"DecorItem"> | Date | string
    updatedAt?: DateTimeFilter<"DecorItem"> | Date | string
    frame?: XOR<FrameScalarRelationFilter, FrameWhereInput>
  }, "id">

  export type DecorItemOrderByWithAggregationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    type?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DecorItemCountOrderByAggregateInput
    _avg?: DecorItemAvgOrderByAggregateInput
    _max?: DecorItemMaxOrderByAggregateInput
    _min?: DecorItemMinOrderByAggregateInput
    _sum?: DecorItemSumOrderByAggregateInput
  }

  export type DecorItemScalarWhereWithAggregatesInput = {
    AND?: DecorItemScalarWhereWithAggregatesInput | DecorItemScalarWhereWithAggregatesInput[]
    OR?: DecorItemScalarWhereWithAggregatesInput[]
    NOT?: DecorItemScalarWhereWithAggregatesInput | DecorItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DecorItem"> | number
    position?: JsonNullableWithAggregatesFilter<"DecorItem">
    type?: StringWithAggregatesFilter<"DecorItem"> | string
    frameId?: IntWithAggregatesFilter<"DecorItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DecorItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DecorItem"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    frame?: FrameCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    frame?: FrameUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    frame?: FrameUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    frame?: FrameUncheckedUpdateManyWithoutOwnerNestedInput
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

  export type FrameCreateInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutFrameInput
    layout?: FrameLayoutCreateNestedOneWithoutFrameInput
    chest?: ChestCreateNestedOneWithoutFrameInput
    journal?: JournalCreateNestedOneWithoutFrameInput
    polaroid?: PolaroidCreateNestedManyWithoutFrameInput
    media?: MediaCreateNestedManyWithoutFrameInput
    checklist?: ChecklistCreateNestedManyWithoutFrameInput
    notes?: NoteCreateNestedManyWithoutFrameInput
    decorItems?: DecorItemCreateNestedManyWithoutFrameInput
  }

  export type FrameUncheckedCreateInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    layout?: FrameLayoutUncheckedCreateNestedOneWithoutFrameInput
    chest?: ChestUncheckedCreateNestedOneWithoutFrameInput
    journal?: JournalUncheckedCreateNestedOneWithoutFrameInput
    polaroid?: PolaroidUncheckedCreateNestedManyWithoutFrameInput
    media?: MediaUncheckedCreateNestedManyWithoutFrameInput
    checklist?: ChecklistUncheckedCreateNestedManyWithoutFrameInput
    notes?: NoteUncheckedCreateNestedManyWithoutFrameInput
    decorItems?: DecorItemUncheckedCreateNestedManyWithoutFrameInput
  }

  export type FrameUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFrameNestedInput
    layout?: FrameLayoutUpdateOneWithoutFrameNestedInput
    chest?: ChestUpdateOneWithoutFrameNestedInput
    journal?: JournalUpdateOneWithoutFrameNestedInput
    polaroid?: PolaroidUpdateManyWithoutFrameNestedInput
    media?: MediaUpdateManyWithoutFrameNestedInput
    checklist?: ChecklistUpdateManyWithoutFrameNestedInput
    notes?: NoteUpdateManyWithoutFrameNestedInput
    decorItems?: DecorItemUpdateManyWithoutFrameNestedInput
  }

  export type FrameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    layout?: FrameLayoutUncheckedUpdateOneWithoutFrameNestedInput
    chest?: ChestUncheckedUpdateOneWithoutFrameNestedInput
    journal?: JournalUncheckedUpdateOneWithoutFrameNestedInput
    polaroid?: PolaroidUncheckedUpdateManyWithoutFrameNestedInput
    media?: MediaUncheckedUpdateManyWithoutFrameNestedInput
    checklist?: ChecklistUncheckedUpdateManyWithoutFrameNestedInput
    notes?: NoteUncheckedUpdateManyWithoutFrameNestedInput
    decorItems?: DecorItemUncheckedUpdateManyWithoutFrameNestedInput
  }

  export type FrameCreateManyInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
  }

  export type FrameUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type FrameLayoutCreateInput = {
    layout: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    frame: FrameCreateNestedOneWithoutLayoutInput
  }

  export type FrameLayoutUncheckedCreateInput = {
    id?: number
    layout: JsonNullValueInput | InputJsonValue
    frameId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FrameLayoutUpdateInput = {
    layout?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    frame?: FrameUpdateOneRequiredWithoutLayoutNestedInput
  }

  export type FrameLayoutUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    layout?: JsonNullValueInput | InputJsonValue
    frameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrameLayoutCreateManyInput = {
    id?: number
    layout: JsonNullValueInput | InputJsonValue
    frameId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FrameLayoutUpdateManyMutationInput = {
    layout?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrameLayoutUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    layout?: JsonNullValueInput | InputJsonValue
    frameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChestCreateInput = {
    passcode: string
    position?: NullableJsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    frame: FrameCreateNestedOneWithoutChestInput
  }

  export type ChestUncheckedCreateInput = {
    id?: number
    passcode: string
    position?: NullableJsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    frameId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChestUpdateInput = {
    passcode?: StringFieldUpdateOperationsInput | string
    position?: NullableJsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    frame?: FrameUpdateOneRequiredWithoutChestNestedInput
  }

  export type ChestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    passcode?: StringFieldUpdateOperationsInput | string
    position?: NullableJsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    frameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChestCreateManyInput = {
    id?: number
    passcode: string
    position?: NullableJsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    frameId: number
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
    frameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalCreateInput = {
    passcode: string
    position?: NullableJsonNullValueInput | InputJsonValue
    entries: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    frame: FrameCreateNestedOneWithoutJournalInput
  }

  export type JournalUncheckedCreateInput = {
    id?: number
    passcode: string
    position?: NullableJsonNullValueInput | InputJsonValue
    entries: JsonNullValueInput | InputJsonValue
    frameId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalUpdateInput = {
    passcode?: StringFieldUpdateOperationsInput | string
    position?: NullableJsonNullValueInput | InputJsonValue
    entries?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    frame?: FrameUpdateOneRequiredWithoutJournalNestedInput
  }

  export type JournalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    passcode?: StringFieldUpdateOperationsInput | string
    position?: NullableJsonNullValueInput | InputJsonValue
    entries?: JsonNullValueInput | InputJsonValue
    frameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalCreateManyInput = {
    id?: number
    passcode: string
    position?: NullableJsonNullValueInput | InputJsonValue
    entries: JsonNullValueInput | InputJsonValue
    frameId: number
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
    frameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolaroidCreateInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    url: string
    caption?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    frame: FrameCreateNestedOneWithoutPolaroidInput
  }

  export type PolaroidUncheckedCreateInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    url: string
    caption?: string | null
    frameId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolaroidUpdateInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    frame?: FrameUpdateOneRequiredWithoutPolaroidNestedInput
  }

  export type PolaroidUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    frameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolaroidCreateManyInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    url: string
    caption?: string | null
    frameId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolaroidUpdateManyMutationInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolaroidUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    frameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    type: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    frame: FrameCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    type: string
    url: string
    frameId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUpdateInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    frame?: FrameUpdateOneRequiredWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    frameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    type: string
    url: string
    frameId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    frameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistCreateInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    title: string
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    frame: FrameCreateNestedOneWithoutChecklistInput
  }

  export type ChecklistUncheckedCreateInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    title: string
    items: JsonNullValueInput | InputJsonValue
    frameId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChecklistUpdateInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    frame?: FrameUpdateOneRequiredWithoutChecklistNestedInput
  }

  export type ChecklistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    frameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistCreateManyInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    title: string
    items: JsonNullValueInput | InputJsonValue
    frameId: number
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
    frameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    frame: FrameCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    content: string
    frameId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    frame?: FrameUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    content?: StringFieldUpdateOperationsInput | string
    frameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateManyInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    content: string
    frameId: number
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
    frameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecorItemCreateInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    frame: FrameCreateNestedOneWithoutDecorItemsInput
  }

  export type DecorItemUncheckedCreateInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    type: string
    frameId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DecorItemUpdateInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    frame?: FrameUpdateOneRequiredWithoutDecorItemsNestedInput
  }

  export type DecorItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    frameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecorItemCreateManyInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    type: string
    frameId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DecorItemUpdateManyMutationInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecorItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    frameId?: IntFieldUpdateOperationsInput | number
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

  export type FrameListRelationFilter = {
    every?: FrameWhereInput
    some?: FrameWhereInput
    none?: FrameWhereInput
  }

  export type FrameOrderByRelationAggregateInput = {
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

  export type FrameLayoutNullableScalarRelationFilter = {
    is?: FrameLayoutWhereInput | null
    isNot?: FrameLayoutWhereInput | null
  }

  export type ChestNullableScalarRelationFilter = {
    is?: ChestWhereInput | null
    isNot?: ChestWhereInput | null
  }

  export type JournalNullableScalarRelationFilter = {
    is?: JournalWhereInput | null
    isNot?: JournalWhereInput | null
  }

  export type PolaroidListRelationFilter = {
    every?: PolaroidWhereInput
    some?: PolaroidWhereInput
    none?: PolaroidWhereInput
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

  export type DecorItemListRelationFilter = {
    every?: DecorItemWhereInput
    some?: DecorItemWhereInput
    none?: DecorItemWhereInput
  }

  export type PolaroidOrderByRelationAggregateInput = {
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

  export type DecorItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FrameCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type FrameAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type FrameMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type FrameMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type FrameSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
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

  export type FrameScalarRelationFilter = {
    is?: FrameWhereInput
    isNot?: FrameWhereInput
  }

  export type FrameLayoutCountOrderByAggregateInput = {
    id?: SortOrder
    layout?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FrameLayoutAvgOrderByAggregateInput = {
    id?: SortOrder
    frameId?: SortOrder
  }

  export type FrameLayoutMaxOrderByAggregateInput = {
    id?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FrameLayoutMinOrderByAggregateInput = {
    id?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FrameLayoutSumOrderByAggregateInput = {
    id?: SortOrder
    frameId?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChestCountOrderByAggregateInput = {
    id?: SortOrder
    passcode?: SortOrder
    position?: SortOrder
    items?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChestAvgOrderByAggregateInput = {
    id?: SortOrder
    frameId?: SortOrder
  }

  export type ChestMaxOrderByAggregateInput = {
    id?: SortOrder
    passcode?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChestMinOrderByAggregateInput = {
    id?: SortOrder
    passcode?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChestSumOrderByAggregateInput = {
    id?: SortOrder
    frameId?: SortOrder
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

  export type JournalCountOrderByAggregateInput = {
    id?: SortOrder
    passcode?: SortOrder
    position?: SortOrder
    entries?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalAvgOrderByAggregateInput = {
    id?: SortOrder
    frameId?: SortOrder
  }

  export type JournalMaxOrderByAggregateInput = {
    id?: SortOrder
    passcode?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalMinOrderByAggregateInput = {
    id?: SortOrder
    passcode?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalSumOrderByAggregateInput = {
    id?: SortOrder
    frameId?: SortOrder
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

  export type PolaroidCountOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolaroidAvgOrderByAggregateInput = {
    id?: SortOrder
    frameId?: SortOrder
  }

  export type PolaroidMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolaroidMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolaroidSumOrderByAggregateInput = {
    id?: SortOrder
    frameId?: SortOrder
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

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    type?: SortOrder
    url?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaAvgOrderByAggregateInput = {
    id?: SortOrder
    frameId?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaSumOrderByAggregateInput = {
    id?: SortOrder
    frameId?: SortOrder
  }

  export type ChecklistCountOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    title?: SortOrder
    items?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChecklistAvgOrderByAggregateInput = {
    id?: SortOrder
    frameId?: SortOrder
  }

  export type ChecklistMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChecklistMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChecklistSumOrderByAggregateInput = {
    id?: SortOrder
    frameId?: SortOrder
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    content?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteAvgOrderByAggregateInput = {
    id?: SortOrder
    frameId?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteSumOrderByAggregateInput = {
    id?: SortOrder
    frameId?: SortOrder
  }

  export type DecorItemCountOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    type?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecorItemAvgOrderByAggregateInput = {
    id?: SortOrder
    frameId?: SortOrder
  }

  export type DecorItemMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecorItemMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    frameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecorItemSumOrderByAggregateInput = {
    id?: SortOrder
    frameId?: SortOrder
  }

  export type FrameCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FrameCreateWithoutOwnerInput, FrameUncheckedCreateWithoutOwnerInput> | FrameCreateWithoutOwnerInput[] | FrameUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FrameCreateOrConnectWithoutOwnerInput | FrameCreateOrConnectWithoutOwnerInput[]
    createMany?: FrameCreateManyOwnerInputEnvelope
    connect?: FrameWhereUniqueInput | FrameWhereUniqueInput[]
  }

  export type FrameUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FrameCreateWithoutOwnerInput, FrameUncheckedCreateWithoutOwnerInput> | FrameCreateWithoutOwnerInput[] | FrameUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FrameCreateOrConnectWithoutOwnerInput | FrameCreateOrConnectWithoutOwnerInput[]
    createMany?: FrameCreateManyOwnerInputEnvelope
    connect?: FrameWhereUniqueInput | FrameWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FrameUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FrameCreateWithoutOwnerInput, FrameUncheckedCreateWithoutOwnerInput> | FrameCreateWithoutOwnerInput[] | FrameUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FrameCreateOrConnectWithoutOwnerInput | FrameCreateOrConnectWithoutOwnerInput[]
    upsert?: FrameUpsertWithWhereUniqueWithoutOwnerInput | FrameUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FrameCreateManyOwnerInputEnvelope
    set?: FrameWhereUniqueInput | FrameWhereUniqueInput[]
    disconnect?: FrameWhereUniqueInput | FrameWhereUniqueInput[]
    delete?: FrameWhereUniqueInput | FrameWhereUniqueInput[]
    connect?: FrameWhereUniqueInput | FrameWhereUniqueInput[]
    update?: FrameUpdateWithWhereUniqueWithoutOwnerInput | FrameUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FrameUpdateManyWithWhereWithoutOwnerInput | FrameUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FrameScalarWhereInput | FrameScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FrameUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FrameCreateWithoutOwnerInput, FrameUncheckedCreateWithoutOwnerInput> | FrameCreateWithoutOwnerInput[] | FrameUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FrameCreateOrConnectWithoutOwnerInput | FrameCreateOrConnectWithoutOwnerInput[]
    upsert?: FrameUpsertWithWhereUniqueWithoutOwnerInput | FrameUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FrameCreateManyOwnerInputEnvelope
    set?: FrameWhereUniqueInput | FrameWhereUniqueInput[]
    disconnect?: FrameWhereUniqueInput | FrameWhereUniqueInput[]
    delete?: FrameWhereUniqueInput | FrameWhereUniqueInput[]
    connect?: FrameWhereUniqueInput | FrameWhereUniqueInput[]
    update?: FrameUpdateWithWhereUniqueWithoutOwnerInput | FrameUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FrameUpdateManyWithWhereWithoutOwnerInput | FrameUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FrameScalarWhereInput | FrameScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFrameInput = {
    create?: XOR<UserCreateWithoutFrameInput, UserUncheckedCreateWithoutFrameInput>
    connectOrCreate?: UserCreateOrConnectWithoutFrameInput
    connect?: UserWhereUniqueInput
  }

  export type FrameLayoutCreateNestedOneWithoutFrameInput = {
    create?: XOR<FrameLayoutCreateWithoutFrameInput, FrameLayoutUncheckedCreateWithoutFrameInput>
    connectOrCreate?: FrameLayoutCreateOrConnectWithoutFrameInput
    connect?: FrameLayoutWhereUniqueInput
  }

  export type ChestCreateNestedOneWithoutFrameInput = {
    create?: XOR<ChestCreateWithoutFrameInput, ChestUncheckedCreateWithoutFrameInput>
    connectOrCreate?: ChestCreateOrConnectWithoutFrameInput
    connect?: ChestWhereUniqueInput
  }

  export type JournalCreateNestedOneWithoutFrameInput = {
    create?: XOR<JournalCreateWithoutFrameInput, JournalUncheckedCreateWithoutFrameInput>
    connectOrCreate?: JournalCreateOrConnectWithoutFrameInput
    connect?: JournalWhereUniqueInput
  }

  export type PolaroidCreateNestedManyWithoutFrameInput = {
    create?: XOR<PolaroidCreateWithoutFrameInput, PolaroidUncheckedCreateWithoutFrameInput> | PolaroidCreateWithoutFrameInput[] | PolaroidUncheckedCreateWithoutFrameInput[]
    connectOrCreate?: PolaroidCreateOrConnectWithoutFrameInput | PolaroidCreateOrConnectWithoutFrameInput[]
    createMany?: PolaroidCreateManyFrameInputEnvelope
    connect?: PolaroidWhereUniqueInput | PolaroidWhereUniqueInput[]
  }

  export type MediaCreateNestedManyWithoutFrameInput = {
    create?: XOR<MediaCreateWithoutFrameInput, MediaUncheckedCreateWithoutFrameInput> | MediaCreateWithoutFrameInput[] | MediaUncheckedCreateWithoutFrameInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutFrameInput | MediaCreateOrConnectWithoutFrameInput[]
    createMany?: MediaCreateManyFrameInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type ChecklistCreateNestedManyWithoutFrameInput = {
    create?: XOR<ChecklistCreateWithoutFrameInput, ChecklistUncheckedCreateWithoutFrameInput> | ChecklistCreateWithoutFrameInput[] | ChecklistUncheckedCreateWithoutFrameInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutFrameInput | ChecklistCreateOrConnectWithoutFrameInput[]
    createMany?: ChecklistCreateManyFrameInputEnvelope
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutFrameInput = {
    create?: XOR<NoteCreateWithoutFrameInput, NoteUncheckedCreateWithoutFrameInput> | NoteCreateWithoutFrameInput[] | NoteUncheckedCreateWithoutFrameInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutFrameInput | NoteCreateOrConnectWithoutFrameInput[]
    createMany?: NoteCreateManyFrameInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type DecorItemCreateNestedManyWithoutFrameInput = {
    create?: XOR<DecorItemCreateWithoutFrameInput, DecorItemUncheckedCreateWithoutFrameInput> | DecorItemCreateWithoutFrameInput[] | DecorItemUncheckedCreateWithoutFrameInput[]
    connectOrCreate?: DecorItemCreateOrConnectWithoutFrameInput | DecorItemCreateOrConnectWithoutFrameInput[]
    createMany?: DecorItemCreateManyFrameInputEnvelope
    connect?: DecorItemWhereUniqueInput | DecorItemWhereUniqueInput[]
  }

  export type FrameLayoutUncheckedCreateNestedOneWithoutFrameInput = {
    create?: XOR<FrameLayoutCreateWithoutFrameInput, FrameLayoutUncheckedCreateWithoutFrameInput>
    connectOrCreate?: FrameLayoutCreateOrConnectWithoutFrameInput
    connect?: FrameLayoutWhereUniqueInput
  }

  export type ChestUncheckedCreateNestedOneWithoutFrameInput = {
    create?: XOR<ChestCreateWithoutFrameInput, ChestUncheckedCreateWithoutFrameInput>
    connectOrCreate?: ChestCreateOrConnectWithoutFrameInput
    connect?: ChestWhereUniqueInput
  }

  export type JournalUncheckedCreateNestedOneWithoutFrameInput = {
    create?: XOR<JournalCreateWithoutFrameInput, JournalUncheckedCreateWithoutFrameInput>
    connectOrCreate?: JournalCreateOrConnectWithoutFrameInput
    connect?: JournalWhereUniqueInput
  }

  export type PolaroidUncheckedCreateNestedManyWithoutFrameInput = {
    create?: XOR<PolaroidCreateWithoutFrameInput, PolaroidUncheckedCreateWithoutFrameInput> | PolaroidCreateWithoutFrameInput[] | PolaroidUncheckedCreateWithoutFrameInput[]
    connectOrCreate?: PolaroidCreateOrConnectWithoutFrameInput | PolaroidCreateOrConnectWithoutFrameInput[]
    createMany?: PolaroidCreateManyFrameInputEnvelope
    connect?: PolaroidWhereUniqueInput | PolaroidWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutFrameInput = {
    create?: XOR<MediaCreateWithoutFrameInput, MediaUncheckedCreateWithoutFrameInput> | MediaCreateWithoutFrameInput[] | MediaUncheckedCreateWithoutFrameInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutFrameInput | MediaCreateOrConnectWithoutFrameInput[]
    createMany?: MediaCreateManyFrameInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type ChecklistUncheckedCreateNestedManyWithoutFrameInput = {
    create?: XOR<ChecklistCreateWithoutFrameInput, ChecklistUncheckedCreateWithoutFrameInput> | ChecklistCreateWithoutFrameInput[] | ChecklistUncheckedCreateWithoutFrameInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutFrameInput | ChecklistCreateOrConnectWithoutFrameInput[]
    createMany?: ChecklistCreateManyFrameInputEnvelope
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutFrameInput = {
    create?: XOR<NoteCreateWithoutFrameInput, NoteUncheckedCreateWithoutFrameInput> | NoteCreateWithoutFrameInput[] | NoteUncheckedCreateWithoutFrameInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutFrameInput | NoteCreateOrConnectWithoutFrameInput[]
    createMany?: NoteCreateManyFrameInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type DecorItemUncheckedCreateNestedManyWithoutFrameInput = {
    create?: XOR<DecorItemCreateWithoutFrameInput, DecorItemUncheckedCreateWithoutFrameInput> | DecorItemCreateWithoutFrameInput[] | DecorItemUncheckedCreateWithoutFrameInput[]
    connectOrCreate?: DecorItemCreateOrConnectWithoutFrameInput | DecorItemCreateOrConnectWithoutFrameInput[]
    createMany?: DecorItemCreateManyFrameInputEnvelope
    connect?: DecorItemWhereUniqueInput | DecorItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutFrameNestedInput = {
    create?: XOR<UserCreateWithoutFrameInput, UserUncheckedCreateWithoutFrameInput>
    connectOrCreate?: UserCreateOrConnectWithoutFrameInput
    upsert?: UserUpsertWithoutFrameInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFrameInput, UserUpdateWithoutFrameInput>, UserUncheckedUpdateWithoutFrameInput>
  }

  export type FrameLayoutUpdateOneWithoutFrameNestedInput = {
    create?: XOR<FrameLayoutCreateWithoutFrameInput, FrameLayoutUncheckedCreateWithoutFrameInput>
    connectOrCreate?: FrameLayoutCreateOrConnectWithoutFrameInput
    upsert?: FrameLayoutUpsertWithoutFrameInput
    disconnect?: FrameLayoutWhereInput | boolean
    delete?: FrameLayoutWhereInput | boolean
    connect?: FrameLayoutWhereUniqueInput
    update?: XOR<XOR<FrameLayoutUpdateToOneWithWhereWithoutFrameInput, FrameLayoutUpdateWithoutFrameInput>, FrameLayoutUncheckedUpdateWithoutFrameInput>
  }

  export type ChestUpdateOneWithoutFrameNestedInput = {
    create?: XOR<ChestCreateWithoutFrameInput, ChestUncheckedCreateWithoutFrameInput>
    connectOrCreate?: ChestCreateOrConnectWithoutFrameInput
    upsert?: ChestUpsertWithoutFrameInput
    disconnect?: ChestWhereInput | boolean
    delete?: ChestWhereInput | boolean
    connect?: ChestWhereUniqueInput
    update?: XOR<XOR<ChestUpdateToOneWithWhereWithoutFrameInput, ChestUpdateWithoutFrameInput>, ChestUncheckedUpdateWithoutFrameInput>
  }

  export type JournalUpdateOneWithoutFrameNestedInput = {
    create?: XOR<JournalCreateWithoutFrameInput, JournalUncheckedCreateWithoutFrameInput>
    connectOrCreate?: JournalCreateOrConnectWithoutFrameInput
    upsert?: JournalUpsertWithoutFrameInput
    disconnect?: JournalWhereInput | boolean
    delete?: JournalWhereInput | boolean
    connect?: JournalWhereUniqueInput
    update?: XOR<XOR<JournalUpdateToOneWithWhereWithoutFrameInput, JournalUpdateWithoutFrameInput>, JournalUncheckedUpdateWithoutFrameInput>
  }

  export type PolaroidUpdateManyWithoutFrameNestedInput = {
    create?: XOR<PolaroidCreateWithoutFrameInput, PolaroidUncheckedCreateWithoutFrameInput> | PolaroidCreateWithoutFrameInput[] | PolaroidUncheckedCreateWithoutFrameInput[]
    connectOrCreate?: PolaroidCreateOrConnectWithoutFrameInput | PolaroidCreateOrConnectWithoutFrameInput[]
    upsert?: PolaroidUpsertWithWhereUniqueWithoutFrameInput | PolaroidUpsertWithWhereUniqueWithoutFrameInput[]
    createMany?: PolaroidCreateManyFrameInputEnvelope
    set?: PolaroidWhereUniqueInput | PolaroidWhereUniqueInput[]
    disconnect?: PolaroidWhereUniqueInput | PolaroidWhereUniqueInput[]
    delete?: PolaroidWhereUniqueInput | PolaroidWhereUniqueInput[]
    connect?: PolaroidWhereUniqueInput | PolaroidWhereUniqueInput[]
    update?: PolaroidUpdateWithWhereUniqueWithoutFrameInput | PolaroidUpdateWithWhereUniqueWithoutFrameInput[]
    updateMany?: PolaroidUpdateManyWithWhereWithoutFrameInput | PolaroidUpdateManyWithWhereWithoutFrameInput[]
    deleteMany?: PolaroidScalarWhereInput | PolaroidScalarWhereInput[]
  }

  export type MediaUpdateManyWithoutFrameNestedInput = {
    create?: XOR<MediaCreateWithoutFrameInput, MediaUncheckedCreateWithoutFrameInput> | MediaCreateWithoutFrameInput[] | MediaUncheckedCreateWithoutFrameInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutFrameInput | MediaCreateOrConnectWithoutFrameInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutFrameInput | MediaUpsertWithWhereUniqueWithoutFrameInput[]
    createMany?: MediaCreateManyFrameInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutFrameInput | MediaUpdateWithWhereUniqueWithoutFrameInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutFrameInput | MediaUpdateManyWithWhereWithoutFrameInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type ChecklistUpdateManyWithoutFrameNestedInput = {
    create?: XOR<ChecklistCreateWithoutFrameInput, ChecklistUncheckedCreateWithoutFrameInput> | ChecklistCreateWithoutFrameInput[] | ChecklistUncheckedCreateWithoutFrameInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutFrameInput | ChecklistCreateOrConnectWithoutFrameInput[]
    upsert?: ChecklistUpsertWithWhereUniqueWithoutFrameInput | ChecklistUpsertWithWhereUniqueWithoutFrameInput[]
    createMany?: ChecklistCreateManyFrameInputEnvelope
    set?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    disconnect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    delete?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    update?: ChecklistUpdateWithWhereUniqueWithoutFrameInput | ChecklistUpdateWithWhereUniqueWithoutFrameInput[]
    updateMany?: ChecklistUpdateManyWithWhereWithoutFrameInput | ChecklistUpdateManyWithWhereWithoutFrameInput[]
    deleteMany?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutFrameNestedInput = {
    create?: XOR<NoteCreateWithoutFrameInput, NoteUncheckedCreateWithoutFrameInput> | NoteCreateWithoutFrameInput[] | NoteUncheckedCreateWithoutFrameInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutFrameInput | NoteCreateOrConnectWithoutFrameInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutFrameInput | NoteUpsertWithWhereUniqueWithoutFrameInput[]
    createMany?: NoteCreateManyFrameInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutFrameInput | NoteUpdateWithWhereUniqueWithoutFrameInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutFrameInput | NoteUpdateManyWithWhereWithoutFrameInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type DecorItemUpdateManyWithoutFrameNestedInput = {
    create?: XOR<DecorItemCreateWithoutFrameInput, DecorItemUncheckedCreateWithoutFrameInput> | DecorItemCreateWithoutFrameInput[] | DecorItemUncheckedCreateWithoutFrameInput[]
    connectOrCreate?: DecorItemCreateOrConnectWithoutFrameInput | DecorItemCreateOrConnectWithoutFrameInput[]
    upsert?: DecorItemUpsertWithWhereUniqueWithoutFrameInput | DecorItemUpsertWithWhereUniqueWithoutFrameInput[]
    createMany?: DecorItemCreateManyFrameInputEnvelope
    set?: DecorItemWhereUniqueInput | DecorItemWhereUniqueInput[]
    disconnect?: DecorItemWhereUniqueInput | DecorItemWhereUniqueInput[]
    delete?: DecorItemWhereUniqueInput | DecorItemWhereUniqueInput[]
    connect?: DecorItemWhereUniqueInput | DecorItemWhereUniqueInput[]
    update?: DecorItemUpdateWithWhereUniqueWithoutFrameInput | DecorItemUpdateWithWhereUniqueWithoutFrameInput[]
    updateMany?: DecorItemUpdateManyWithWhereWithoutFrameInput | DecorItemUpdateManyWithWhereWithoutFrameInput[]
    deleteMany?: DecorItemScalarWhereInput | DecorItemScalarWhereInput[]
  }

  export type FrameLayoutUncheckedUpdateOneWithoutFrameNestedInput = {
    create?: XOR<FrameLayoutCreateWithoutFrameInput, FrameLayoutUncheckedCreateWithoutFrameInput>
    connectOrCreate?: FrameLayoutCreateOrConnectWithoutFrameInput
    upsert?: FrameLayoutUpsertWithoutFrameInput
    disconnect?: FrameLayoutWhereInput | boolean
    delete?: FrameLayoutWhereInput | boolean
    connect?: FrameLayoutWhereUniqueInput
    update?: XOR<XOR<FrameLayoutUpdateToOneWithWhereWithoutFrameInput, FrameLayoutUpdateWithoutFrameInput>, FrameLayoutUncheckedUpdateWithoutFrameInput>
  }

  export type ChestUncheckedUpdateOneWithoutFrameNestedInput = {
    create?: XOR<ChestCreateWithoutFrameInput, ChestUncheckedCreateWithoutFrameInput>
    connectOrCreate?: ChestCreateOrConnectWithoutFrameInput
    upsert?: ChestUpsertWithoutFrameInput
    disconnect?: ChestWhereInput | boolean
    delete?: ChestWhereInput | boolean
    connect?: ChestWhereUniqueInput
    update?: XOR<XOR<ChestUpdateToOneWithWhereWithoutFrameInput, ChestUpdateWithoutFrameInput>, ChestUncheckedUpdateWithoutFrameInput>
  }

  export type JournalUncheckedUpdateOneWithoutFrameNestedInput = {
    create?: XOR<JournalCreateWithoutFrameInput, JournalUncheckedCreateWithoutFrameInput>
    connectOrCreate?: JournalCreateOrConnectWithoutFrameInput
    upsert?: JournalUpsertWithoutFrameInput
    disconnect?: JournalWhereInput | boolean
    delete?: JournalWhereInput | boolean
    connect?: JournalWhereUniqueInput
    update?: XOR<XOR<JournalUpdateToOneWithWhereWithoutFrameInput, JournalUpdateWithoutFrameInput>, JournalUncheckedUpdateWithoutFrameInput>
  }

  export type PolaroidUncheckedUpdateManyWithoutFrameNestedInput = {
    create?: XOR<PolaroidCreateWithoutFrameInput, PolaroidUncheckedCreateWithoutFrameInput> | PolaroidCreateWithoutFrameInput[] | PolaroidUncheckedCreateWithoutFrameInput[]
    connectOrCreate?: PolaroidCreateOrConnectWithoutFrameInput | PolaroidCreateOrConnectWithoutFrameInput[]
    upsert?: PolaroidUpsertWithWhereUniqueWithoutFrameInput | PolaroidUpsertWithWhereUniqueWithoutFrameInput[]
    createMany?: PolaroidCreateManyFrameInputEnvelope
    set?: PolaroidWhereUniqueInput | PolaroidWhereUniqueInput[]
    disconnect?: PolaroidWhereUniqueInput | PolaroidWhereUniqueInput[]
    delete?: PolaroidWhereUniqueInput | PolaroidWhereUniqueInput[]
    connect?: PolaroidWhereUniqueInput | PolaroidWhereUniqueInput[]
    update?: PolaroidUpdateWithWhereUniqueWithoutFrameInput | PolaroidUpdateWithWhereUniqueWithoutFrameInput[]
    updateMany?: PolaroidUpdateManyWithWhereWithoutFrameInput | PolaroidUpdateManyWithWhereWithoutFrameInput[]
    deleteMany?: PolaroidScalarWhereInput | PolaroidScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutFrameNestedInput = {
    create?: XOR<MediaCreateWithoutFrameInput, MediaUncheckedCreateWithoutFrameInput> | MediaCreateWithoutFrameInput[] | MediaUncheckedCreateWithoutFrameInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutFrameInput | MediaCreateOrConnectWithoutFrameInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutFrameInput | MediaUpsertWithWhereUniqueWithoutFrameInput[]
    createMany?: MediaCreateManyFrameInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutFrameInput | MediaUpdateWithWhereUniqueWithoutFrameInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutFrameInput | MediaUpdateManyWithWhereWithoutFrameInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type ChecklistUncheckedUpdateManyWithoutFrameNestedInput = {
    create?: XOR<ChecklistCreateWithoutFrameInput, ChecklistUncheckedCreateWithoutFrameInput> | ChecklistCreateWithoutFrameInput[] | ChecklistUncheckedCreateWithoutFrameInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutFrameInput | ChecklistCreateOrConnectWithoutFrameInput[]
    upsert?: ChecklistUpsertWithWhereUniqueWithoutFrameInput | ChecklistUpsertWithWhereUniqueWithoutFrameInput[]
    createMany?: ChecklistCreateManyFrameInputEnvelope
    set?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    disconnect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    delete?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    update?: ChecklistUpdateWithWhereUniqueWithoutFrameInput | ChecklistUpdateWithWhereUniqueWithoutFrameInput[]
    updateMany?: ChecklistUpdateManyWithWhereWithoutFrameInput | ChecklistUpdateManyWithWhereWithoutFrameInput[]
    deleteMany?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutFrameNestedInput = {
    create?: XOR<NoteCreateWithoutFrameInput, NoteUncheckedCreateWithoutFrameInput> | NoteCreateWithoutFrameInput[] | NoteUncheckedCreateWithoutFrameInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutFrameInput | NoteCreateOrConnectWithoutFrameInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutFrameInput | NoteUpsertWithWhereUniqueWithoutFrameInput[]
    createMany?: NoteCreateManyFrameInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutFrameInput | NoteUpdateWithWhereUniqueWithoutFrameInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutFrameInput | NoteUpdateManyWithWhereWithoutFrameInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type DecorItemUncheckedUpdateManyWithoutFrameNestedInput = {
    create?: XOR<DecorItemCreateWithoutFrameInput, DecorItemUncheckedCreateWithoutFrameInput> | DecorItemCreateWithoutFrameInput[] | DecorItemUncheckedCreateWithoutFrameInput[]
    connectOrCreate?: DecorItemCreateOrConnectWithoutFrameInput | DecorItemCreateOrConnectWithoutFrameInput[]
    upsert?: DecorItemUpsertWithWhereUniqueWithoutFrameInput | DecorItemUpsertWithWhereUniqueWithoutFrameInput[]
    createMany?: DecorItemCreateManyFrameInputEnvelope
    set?: DecorItemWhereUniqueInput | DecorItemWhereUniqueInput[]
    disconnect?: DecorItemWhereUniqueInput | DecorItemWhereUniqueInput[]
    delete?: DecorItemWhereUniqueInput | DecorItemWhereUniqueInput[]
    connect?: DecorItemWhereUniqueInput | DecorItemWhereUniqueInput[]
    update?: DecorItemUpdateWithWhereUniqueWithoutFrameInput | DecorItemUpdateWithWhereUniqueWithoutFrameInput[]
    updateMany?: DecorItemUpdateManyWithWhereWithoutFrameInput | DecorItemUpdateManyWithWhereWithoutFrameInput[]
    deleteMany?: DecorItemScalarWhereInput | DecorItemScalarWhereInput[]
  }

  export type FrameCreateNestedOneWithoutLayoutInput = {
    create?: XOR<FrameCreateWithoutLayoutInput, FrameUncheckedCreateWithoutLayoutInput>
    connectOrCreate?: FrameCreateOrConnectWithoutLayoutInput
    connect?: FrameWhereUniqueInput
  }

  export type FrameUpdateOneRequiredWithoutLayoutNestedInput = {
    create?: XOR<FrameCreateWithoutLayoutInput, FrameUncheckedCreateWithoutLayoutInput>
    connectOrCreate?: FrameCreateOrConnectWithoutLayoutInput
    upsert?: FrameUpsertWithoutLayoutInput
    connect?: FrameWhereUniqueInput
    update?: XOR<XOR<FrameUpdateToOneWithWhereWithoutLayoutInput, FrameUpdateWithoutLayoutInput>, FrameUncheckedUpdateWithoutLayoutInput>
  }

  export type FrameCreateNestedOneWithoutChestInput = {
    create?: XOR<FrameCreateWithoutChestInput, FrameUncheckedCreateWithoutChestInput>
    connectOrCreate?: FrameCreateOrConnectWithoutChestInput
    connect?: FrameWhereUniqueInput
  }

  export type FrameUpdateOneRequiredWithoutChestNestedInput = {
    create?: XOR<FrameCreateWithoutChestInput, FrameUncheckedCreateWithoutChestInput>
    connectOrCreate?: FrameCreateOrConnectWithoutChestInput
    upsert?: FrameUpsertWithoutChestInput
    connect?: FrameWhereUniqueInput
    update?: XOR<XOR<FrameUpdateToOneWithWhereWithoutChestInput, FrameUpdateWithoutChestInput>, FrameUncheckedUpdateWithoutChestInput>
  }

  export type FrameCreateNestedOneWithoutJournalInput = {
    create?: XOR<FrameCreateWithoutJournalInput, FrameUncheckedCreateWithoutJournalInput>
    connectOrCreate?: FrameCreateOrConnectWithoutJournalInput
    connect?: FrameWhereUniqueInput
  }

  export type FrameUpdateOneRequiredWithoutJournalNestedInput = {
    create?: XOR<FrameCreateWithoutJournalInput, FrameUncheckedCreateWithoutJournalInput>
    connectOrCreate?: FrameCreateOrConnectWithoutJournalInput
    upsert?: FrameUpsertWithoutJournalInput
    connect?: FrameWhereUniqueInput
    update?: XOR<XOR<FrameUpdateToOneWithWhereWithoutJournalInput, FrameUpdateWithoutJournalInput>, FrameUncheckedUpdateWithoutJournalInput>
  }

  export type FrameCreateNestedOneWithoutPolaroidInput = {
    create?: XOR<FrameCreateWithoutPolaroidInput, FrameUncheckedCreateWithoutPolaroidInput>
    connectOrCreate?: FrameCreateOrConnectWithoutPolaroidInput
    connect?: FrameWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FrameUpdateOneRequiredWithoutPolaroidNestedInput = {
    create?: XOR<FrameCreateWithoutPolaroidInput, FrameUncheckedCreateWithoutPolaroidInput>
    connectOrCreate?: FrameCreateOrConnectWithoutPolaroidInput
    upsert?: FrameUpsertWithoutPolaroidInput
    connect?: FrameWhereUniqueInput
    update?: XOR<XOR<FrameUpdateToOneWithWhereWithoutPolaroidInput, FrameUpdateWithoutPolaroidInput>, FrameUncheckedUpdateWithoutPolaroidInput>
  }

  export type FrameCreateNestedOneWithoutMediaInput = {
    create?: XOR<FrameCreateWithoutMediaInput, FrameUncheckedCreateWithoutMediaInput>
    connectOrCreate?: FrameCreateOrConnectWithoutMediaInput
    connect?: FrameWhereUniqueInput
  }

  export type FrameUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<FrameCreateWithoutMediaInput, FrameUncheckedCreateWithoutMediaInput>
    connectOrCreate?: FrameCreateOrConnectWithoutMediaInput
    upsert?: FrameUpsertWithoutMediaInput
    connect?: FrameWhereUniqueInput
    update?: XOR<XOR<FrameUpdateToOneWithWhereWithoutMediaInput, FrameUpdateWithoutMediaInput>, FrameUncheckedUpdateWithoutMediaInput>
  }

  export type FrameCreateNestedOneWithoutChecklistInput = {
    create?: XOR<FrameCreateWithoutChecklistInput, FrameUncheckedCreateWithoutChecklistInput>
    connectOrCreate?: FrameCreateOrConnectWithoutChecklistInput
    connect?: FrameWhereUniqueInput
  }

  export type FrameUpdateOneRequiredWithoutChecklistNestedInput = {
    create?: XOR<FrameCreateWithoutChecklistInput, FrameUncheckedCreateWithoutChecklistInput>
    connectOrCreate?: FrameCreateOrConnectWithoutChecklistInput
    upsert?: FrameUpsertWithoutChecklistInput
    connect?: FrameWhereUniqueInput
    update?: XOR<XOR<FrameUpdateToOneWithWhereWithoutChecklistInput, FrameUpdateWithoutChecklistInput>, FrameUncheckedUpdateWithoutChecklistInput>
  }

  export type FrameCreateNestedOneWithoutNotesInput = {
    create?: XOR<FrameCreateWithoutNotesInput, FrameUncheckedCreateWithoutNotesInput>
    connectOrCreate?: FrameCreateOrConnectWithoutNotesInput
    connect?: FrameWhereUniqueInput
  }

  export type FrameUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<FrameCreateWithoutNotesInput, FrameUncheckedCreateWithoutNotesInput>
    connectOrCreate?: FrameCreateOrConnectWithoutNotesInput
    upsert?: FrameUpsertWithoutNotesInput
    connect?: FrameWhereUniqueInput
    update?: XOR<XOR<FrameUpdateToOneWithWhereWithoutNotesInput, FrameUpdateWithoutNotesInput>, FrameUncheckedUpdateWithoutNotesInput>
  }

  export type FrameCreateNestedOneWithoutDecorItemsInput = {
    create?: XOR<FrameCreateWithoutDecorItemsInput, FrameUncheckedCreateWithoutDecorItemsInput>
    connectOrCreate?: FrameCreateOrConnectWithoutDecorItemsInput
    connect?: FrameWhereUniqueInput
  }

  export type FrameUpdateOneRequiredWithoutDecorItemsNestedInput = {
    create?: XOR<FrameCreateWithoutDecorItemsInput, FrameUncheckedCreateWithoutDecorItemsInput>
    connectOrCreate?: FrameCreateOrConnectWithoutDecorItemsInput
    upsert?: FrameUpsertWithoutDecorItemsInput
    connect?: FrameWhereUniqueInput
    update?: XOR<XOR<FrameUpdateToOneWithWhereWithoutDecorItemsInput, FrameUpdateWithoutDecorItemsInput>, FrameUncheckedUpdateWithoutDecorItemsInput>
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

  export type FrameCreateWithoutOwnerInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    layout?: FrameLayoutCreateNestedOneWithoutFrameInput
    chest?: ChestCreateNestedOneWithoutFrameInput
    journal?: JournalCreateNestedOneWithoutFrameInput
    polaroid?: PolaroidCreateNestedManyWithoutFrameInput
    media?: MediaCreateNestedManyWithoutFrameInput
    checklist?: ChecklistCreateNestedManyWithoutFrameInput
    notes?: NoteCreateNestedManyWithoutFrameInput
    decorItems?: DecorItemCreateNestedManyWithoutFrameInput
  }

  export type FrameUncheckedCreateWithoutOwnerInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    layout?: FrameLayoutUncheckedCreateNestedOneWithoutFrameInput
    chest?: ChestUncheckedCreateNestedOneWithoutFrameInput
    journal?: JournalUncheckedCreateNestedOneWithoutFrameInput
    polaroid?: PolaroidUncheckedCreateNestedManyWithoutFrameInput
    media?: MediaUncheckedCreateNestedManyWithoutFrameInput
    checklist?: ChecklistUncheckedCreateNestedManyWithoutFrameInput
    notes?: NoteUncheckedCreateNestedManyWithoutFrameInput
    decorItems?: DecorItemUncheckedCreateNestedManyWithoutFrameInput
  }

  export type FrameCreateOrConnectWithoutOwnerInput = {
    where: FrameWhereUniqueInput
    create: XOR<FrameCreateWithoutOwnerInput, FrameUncheckedCreateWithoutOwnerInput>
  }

  export type FrameCreateManyOwnerInputEnvelope = {
    data: FrameCreateManyOwnerInput | FrameCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type FrameUpsertWithWhereUniqueWithoutOwnerInput = {
    where: FrameWhereUniqueInput
    update: XOR<FrameUpdateWithoutOwnerInput, FrameUncheckedUpdateWithoutOwnerInput>
    create: XOR<FrameCreateWithoutOwnerInput, FrameUncheckedCreateWithoutOwnerInput>
  }

  export type FrameUpdateWithWhereUniqueWithoutOwnerInput = {
    where: FrameWhereUniqueInput
    data: XOR<FrameUpdateWithoutOwnerInput, FrameUncheckedUpdateWithoutOwnerInput>
  }

  export type FrameUpdateManyWithWhereWithoutOwnerInput = {
    where: FrameScalarWhereInput
    data: XOR<FrameUpdateManyMutationInput, FrameUncheckedUpdateManyWithoutOwnerInput>
  }

  export type FrameScalarWhereInput = {
    AND?: FrameScalarWhereInput | FrameScalarWhereInput[]
    OR?: FrameScalarWhereInput[]
    NOT?: FrameScalarWhereInput | FrameScalarWhereInput[]
    id?: IntFilter<"Frame"> | number
    title?: StringFilter<"Frame"> | string
    createdAt?: DateTimeFilter<"Frame"> | Date | string
    updatedAt?: DateTimeFilter<"Frame"> | Date | string
    ownerId?: IntFilter<"Frame"> | number
  }

  export type UserCreateWithoutFrameInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutFrameInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutFrameInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFrameInput, UserUncheckedCreateWithoutFrameInput>
  }

  export type FrameLayoutCreateWithoutFrameInput = {
    layout: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FrameLayoutUncheckedCreateWithoutFrameInput = {
    id?: number
    layout: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FrameLayoutCreateOrConnectWithoutFrameInput = {
    where: FrameLayoutWhereUniqueInput
    create: XOR<FrameLayoutCreateWithoutFrameInput, FrameLayoutUncheckedCreateWithoutFrameInput>
  }

  export type ChestCreateWithoutFrameInput = {
    passcode: string
    position?: NullableJsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChestUncheckedCreateWithoutFrameInput = {
    id?: number
    passcode: string
    position?: NullableJsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChestCreateOrConnectWithoutFrameInput = {
    where: ChestWhereUniqueInput
    create: XOR<ChestCreateWithoutFrameInput, ChestUncheckedCreateWithoutFrameInput>
  }

  export type JournalCreateWithoutFrameInput = {
    passcode: string
    position?: NullableJsonNullValueInput | InputJsonValue
    entries: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalUncheckedCreateWithoutFrameInput = {
    id?: number
    passcode: string
    position?: NullableJsonNullValueInput | InputJsonValue
    entries: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalCreateOrConnectWithoutFrameInput = {
    where: JournalWhereUniqueInput
    create: XOR<JournalCreateWithoutFrameInput, JournalUncheckedCreateWithoutFrameInput>
  }

  export type PolaroidCreateWithoutFrameInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    url: string
    caption?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolaroidUncheckedCreateWithoutFrameInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    url: string
    caption?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolaroidCreateOrConnectWithoutFrameInput = {
    where: PolaroidWhereUniqueInput
    create: XOR<PolaroidCreateWithoutFrameInput, PolaroidUncheckedCreateWithoutFrameInput>
  }

  export type PolaroidCreateManyFrameInputEnvelope = {
    data: PolaroidCreateManyFrameInput | PolaroidCreateManyFrameInput[]
    skipDuplicates?: boolean
  }

  export type MediaCreateWithoutFrameInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    type: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUncheckedCreateWithoutFrameInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    type: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaCreateOrConnectWithoutFrameInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutFrameInput, MediaUncheckedCreateWithoutFrameInput>
  }

  export type MediaCreateManyFrameInputEnvelope = {
    data: MediaCreateManyFrameInput | MediaCreateManyFrameInput[]
    skipDuplicates?: boolean
  }

  export type ChecklistCreateWithoutFrameInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    title: string
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChecklistUncheckedCreateWithoutFrameInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    title: string
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChecklistCreateOrConnectWithoutFrameInput = {
    where: ChecklistWhereUniqueInput
    create: XOR<ChecklistCreateWithoutFrameInput, ChecklistUncheckedCreateWithoutFrameInput>
  }

  export type ChecklistCreateManyFrameInputEnvelope = {
    data: ChecklistCreateManyFrameInput | ChecklistCreateManyFrameInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutFrameInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUncheckedCreateWithoutFrameInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteCreateOrConnectWithoutFrameInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutFrameInput, NoteUncheckedCreateWithoutFrameInput>
  }

  export type NoteCreateManyFrameInputEnvelope = {
    data: NoteCreateManyFrameInput | NoteCreateManyFrameInput[]
    skipDuplicates?: boolean
  }

  export type DecorItemCreateWithoutFrameInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DecorItemUncheckedCreateWithoutFrameInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DecorItemCreateOrConnectWithoutFrameInput = {
    where: DecorItemWhereUniqueInput
    create: XOR<DecorItemCreateWithoutFrameInput, DecorItemUncheckedCreateWithoutFrameInput>
  }

  export type DecorItemCreateManyFrameInputEnvelope = {
    data: DecorItemCreateManyFrameInput | DecorItemCreateManyFrameInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFrameInput = {
    update: XOR<UserUpdateWithoutFrameInput, UserUncheckedUpdateWithoutFrameInput>
    create: XOR<UserCreateWithoutFrameInput, UserUncheckedCreateWithoutFrameInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFrameInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFrameInput, UserUncheckedUpdateWithoutFrameInput>
  }

  export type UserUpdateWithoutFrameInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutFrameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrameLayoutUpsertWithoutFrameInput = {
    update: XOR<FrameLayoutUpdateWithoutFrameInput, FrameLayoutUncheckedUpdateWithoutFrameInput>
    create: XOR<FrameLayoutCreateWithoutFrameInput, FrameLayoutUncheckedCreateWithoutFrameInput>
    where?: FrameLayoutWhereInput
  }

  export type FrameLayoutUpdateToOneWithWhereWithoutFrameInput = {
    where?: FrameLayoutWhereInput
    data: XOR<FrameLayoutUpdateWithoutFrameInput, FrameLayoutUncheckedUpdateWithoutFrameInput>
  }

  export type FrameLayoutUpdateWithoutFrameInput = {
    layout?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrameLayoutUncheckedUpdateWithoutFrameInput = {
    id?: IntFieldUpdateOperationsInput | number
    layout?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChestUpsertWithoutFrameInput = {
    update: XOR<ChestUpdateWithoutFrameInput, ChestUncheckedUpdateWithoutFrameInput>
    create: XOR<ChestCreateWithoutFrameInput, ChestUncheckedCreateWithoutFrameInput>
    where?: ChestWhereInput
  }

  export type ChestUpdateToOneWithWhereWithoutFrameInput = {
    where?: ChestWhereInput
    data: XOR<ChestUpdateWithoutFrameInput, ChestUncheckedUpdateWithoutFrameInput>
  }

  export type ChestUpdateWithoutFrameInput = {
    passcode?: StringFieldUpdateOperationsInput | string
    position?: NullableJsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChestUncheckedUpdateWithoutFrameInput = {
    id?: IntFieldUpdateOperationsInput | number
    passcode?: StringFieldUpdateOperationsInput | string
    position?: NullableJsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalUpsertWithoutFrameInput = {
    update: XOR<JournalUpdateWithoutFrameInput, JournalUncheckedUpdateWithoutFrameInput>
    create: XOR<JournalCreateWithoutFrameInput, JournalUncheckedCreateWithoutFrameInput>
    where?: JournalWhereInput
  }

  export type JournalUpdateToOneWithWhereWithoutFrameInput = {
    where?: JournalWhereInput
    data: XOR<JournalUpdateWithoutFrameInput, JournalUncheckedUpdateWithoutFrameInput>
  }

  export type JournalUpdateWithoutFrameInput = {
    passcode?: StringFieldUpdateOperationsInput | string
    position?: NullableJsonNullValueInput | InputJsonValue
    entries?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalUncheckedUpdateWithoutFrameInput = {
    id?: IntFieldUpdateOperationsInput | number
    passcode?: StringFieldUpdateOperationsInput | string
    position?: NullableJsonNullValueInput | InputJsonValue
    entries?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolaroidUpsertWithWhereUniqueWithoutFrameInput = {
    where: PolaroidWhereUniqueInput
    update: XOR<PolaroidUpdateWithoutFrameInput, PolaroidUncheckedUpdateWithoutFrameInput>
    create: XOR<PolaroidCreateWithoutFrameInput, PolaroidUncheckedCreateWithoutFrameInput>
  }

  export type PolaroidUpdateWithWhereUniqueWithoutFrameInput = {
    where: PolaroidWhereUniqueInput
    data: XOR<PolaroidUpdateWithoutFrameInput, PolaroidUncheckedUpdateWithoutFrameInput>
  }

  export type PolaroidUpdateManyWithWhereWithoutFrameInput = {
    where: PolaroidScalarWhereInput
    data: XOR<PolaroidUpdateManyMutationInput, PolaroidUncheckedUpdateManyWithoutFrameInput>
  }

  export type PolaroidScalarWhereInput = {
    AND?: PolaroidScalarWhereInput | PolaroidScalarWhereInput[]
    OR?: PolaroidScalarWhereInput[]
    NOT?: PolaroidScalarWhereInput | PolaroidScalarWhereInput[]
    id?: IntFilter<"Polaroid"> | number
    position?: JsonNullableFilter<"Polaroid">
    url?: StringFilter<"Polaroid"> | string
    caption?: StringNullableFilter<"Polaroid"> | string | null
    frameId?: IntFilter<"Polaroid"> | number
    createdAt?: DateTimeFilter<"Polaroid"> | Date | string
    updatedAt?: DateTimeFilter<"Polaroid"> | Date | string
  }

  export type MediaUpsertWithWhereUniqueWithoutFrameInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutFrameInput, MediaUncheckedUpdateWithoutFrameInput>
    create: XOR<MediaCreateWithoutFrameInput, MediaUncheckedCreateWithoutFrameInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutFrameInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutFrameInput, MediaUncheckedUpdateWithoutFrameInput>
  }

  export type MediaUpdateManyWithWhereWithoutFrameInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutFrameInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: IntFilter<"Media"> | number
    position?: JsonNullableFilter<"Media">
    type?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    frameId?: IntFilter<"Media"> | number
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
  }

  export type ChecklistUpsertWithWhereUniqueWithoutFrameInput = {
    where: ChecklistWhereUniqueInput
    update: XOR<ChecklistUpdateWithoutFrameInput, ChecklistUncheckedUpdateWithoutFrameInput>
    create: XOR<ChecklistCreateWithoutFrameInput, ChecklistUncheckedCreateWithoutFrameInput>
  }

  export type ChecklistUpdateWithWhereUniqueWithoutFrameInput = {
    where: ChecklistWhereUniqueInput
    data: XOR<ChecklistUpdateWithoutFrameInput, ChecklistUncheckedUpdateWithoutFrameInput>
  }

  export type ChecklistUpdateManyWithWhereWithoutFrameInput = {
    where: ChecklistScalarWhereInput
    data: XOR<ChecklistUpdateManyMutationInput, ChecklistUncheckedUpdateManyWithoutFrameInput>
  }

  export type ChecklistScalarWhereInput = {
    AND?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
    OR?: ChecklistScalarWhereInput[]
    NOT?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
    id?: IntFilter<"Checklist"> | number
    position?: JsonNullableFilter<"Checklist">
    title?: StringFilter<"Checklist"> | string
    items?: JsonFilter<"Checklist">
    frameId?: IntFilter<"Checklist"> | number
    createdAt?: DateTimeFilter<"Checklist"> | Date | string
    updatedAt?: DateTimeFilter<"Checklist"> | Date | string
  }

  export type NoteUpsertWithWhereUniqueWithoutFrameInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutFrameInput, NoteUncheckedUpdateWithoutFrameInput>
    create: XOR<NoteCreateWithoutFrameInput, NoteUncheckedCreateWithoutFrameInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutFrameInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutFrameInput, NoteUncheckedUpdateWithoutFrameInput>
  }

  export type NoteUpdateManyWithWhereWithoutFrameInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutFrameInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    id?: IntFilter<"Note"> | number
    position?: JsonNullableFilter<"Note">
    content?: StringFilter<"Note"> | string
    frameId?: IntFilter<"Note"> | number
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
  }

  export type DecorItemUpsertWithWhereUniqueWithoutFrameInput = {
    where: DecorItemWhereUniqueInput
    update: XOR<DecorItemUpdateWithoutFrameInput, DecorItemUncheckedUpdateWithoutFrameInput>
    create: XOR<DecorItemCreateWithoutFrameInput, DecorItemUncheckedCreateWithoutFrameInput>
  }

  export type DecorItemUpdateWithWhereUniqueWithoutFrameInput = {
    where: DecorItemWhereUniqueInput
    data: XOR<DecorItemUpdateWithoutFrameInput, DecorItemUncheckedUpdateWithoutFrameInput>
  }

  export type DecorItemUpdateManyWithWhereWithoutFrameInput = {
    where: DecorItemScalarWhereInput
    data: XOR<DecorItemUpdateManyMutationInput, DecorItemUncheckedUpdateManyWithoutFrameInput>
  }

  export type DecorItemScalarWhereInput = {
    AND?: DecorItemScalarWhereInput | DecorItemScalarWhereInput[]
    OR?: DecorItemScalarWhereInput[]
    NOT?: DecorItemScalarWhereInput | DecorItemScalarWhereInput[]
    id?: IntFilter<"DecorItem"> | number
    position?: JsonNullableFilter<"DecorItem">
    type?: StringFilter<"DecorItem"> | string
    frameId?: IntFilter<"DecorItem"> | number
    createdAt?: DateTimeFilter<"DecorItem"> | Date | string
    updatedAt?: DateTimeFilter<"DecorItem"> | Date | string
  }

  export type FrameCreateWithoutLayoutInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutFrameInput
    chest?: ChestCreateNestedOneWithoutFrameInput
    journal?: JournalCreateNestedOneWithoutFrameInput
    polaroid?: PolaroidCreateNestedManyWithoutFrameInput
    media?: MediaCreateNestedManyWithoutFrameInput
    checklist?: ChecklistCreateNestedManyWithoutFrameInput
    notes?: NoteCreateNestedManyWithoutFrameInput
    decorItems?: DecorItemCreateNestedManyWithoutFrameInput
  }

  export type FrameUncheckedCreateWithoutLayoutInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    chest?: ChestUncheckedCreateNestedOneWithoutFrameInput
    journal?: JournalUncheckedCreateNestedOneWithoutFrameInput
    polaroid?: PolaroidUncheckedCreateNestedManyWithoutFrameInput
    media?: MediaUncheckedCreateNestedManyWithoutFrameInput
    checklist?: ChecklistUncheckedCreateNestedManyWithoutFrameInput
    notes?: NoteUncheckedCreateNestedManyWithoutFrameInput
    decorItems?: DecorItemUncheckedCreateNestedManyWithoutFrameInput
  }

  export type FrameCreateOrConnectWithoutLayoutInput = {
    where: FrameWhereUniqueInput
    create: XOR<FrameCreateWithoutLayoutInput, FrameUncheckedCreateWithoutLayoutInput>
  }

  export type FrameUpsertWithoutLayoutInput = {
    update: XOR<FrameUpdateWithoutLayoutInput, FrameUncheckedUpdateWithoutLayoutInput>
    create: XOR<FrameCreateWithoutLayoutInput, FrameUncheckedCreateWithoutLayoutInput>
    where?: FrameWhereInput
  }

  export type FrameUpdateToOneWithWhereWithoutLayoutInput = {
    where?: FrameWhereInput
    data: XOR<FrameUpdateWithoutLayoutInput, FrameUncheckedUpdateWithoutLayoutInput>
  }

  export type FrameUpdateWithoutLayoutInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFrameNestedInput
    chest?: ChestUpdateOneWithoutFrameNestedInput
    journal?: JournalUpdateOneWithoutFrameNestedInput
    polaroid?: PolaroidUpdateManyWithoutFrameNestedInput
    media?: MediaUpdateManyWithoutFrameNestedInput
    checklist?: ChecklistUpdateManyWithoutFrameNestedInput
    notes?: NoteUpdateManyWithoutFrameNestedInput
    decorItems?: DecorItemUpdateManyWithoutFrameNestedInput
  }

  export type FrameUncheckedUpdateWithoutLayoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    chest?: ChestUncheckedUpdateOneWithoutFrameNestedInput
    journal?: JournalUncheckedUpdateOneWithoutFrameNestedInput
    polaroid?: PolaroidUncheckedUpdateManyWithoutFrameNestedInput
    media?: MediaUncheckedUpdateManyWithoutFrameNestedInput
    checklist?: ChecklistUncheckedUpdateManyWithoutFrameNestedInput
    notes?: NoteUncheckedUpdateManyWithoutFrameNestedInput
    decorItems?: DecorItemUncheckedUpdateManyWithoutFrameNestedInput
  }

  export type FrameCreateWithoutChestInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutFrameInput
    layout?: FrameLayoutCreateNestedOneWithoutFrameInput
    journal?: JournalCreateNestedOneWithoutFrameInput
    polaroid?: PolaroidCreateNestedManyWithoutFrameInput
    media?: MediaCreateNestedManyWithoutFrameInput
    checklist?: ChecklistCreateNestedManyWithoutFrameInput
    notes?: NoteCreateNestedManyWithoutFrameInput
    decorItems?: DecorItemCreateNestedManyWithoutFrameInput
  }

  export type FrameUncheckedCreateWithoutChestInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    layout?: FrameLayoutUncheckedCreateNestedOneWithoutFrameInput
    journal?: JournalUncheckedCreateNestedOneWithoutFrameInput
    polaroid?: PolaroidUncheckedCreateNestedManyWithoutFrameInput
    media?: MediaUncheckedCreateNestedManyWithoutFrameInput
    checklist?: ChecklistUncheckedCreateNestedManyWithoutFrameInput
    notes?: NoteUncheckedCreateNestedManyWithoutFrameInput
    decorItems?: DecorItemUncheckedCreateNestedManyWithoutFrameInput
  }

  export type FrameCreateOrConnectWithoutChestInput = {
    where: FrameWhereUniqueInput
    create: XOR<FrameCreateWithoutChestInput, FrameUncheckedCreateWithoutChestInput>
  }

  export type FrameUpsertWithoutChestInput = {
    update: XOR<FrameUpdateWithoutChestInput, FrameUncheckedUpdateWithoutChestInput>
    create: XOR<FrameCreateWithoutChestInput, FrameUncheckedCreateWithoutChestInput>
    where?: FrameWhereInput
  }

  export type FrameUpdateToOneWithWhereWithoutChestInput = {
    where?: FrameWhereInput
    data: XOR<FrameUpdateWithoutChestInput, FrameUncheckedUpdateWithoutChestInput>
  }

  export type FrameUpdateWithoutChestInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFrameNestedInput
    layout?: FrameLayoutUpdateOneWithoutFrameNestedInput
    journal?: JournalUpdateOneWithoutFrameNestedInput
    polaroid?: PolaroidUpdateManyWithoutFrameNestedInput
    media?: MediaUpdateManyWithoutFrameNestedInput
    checklist?: ChecklistUpdateManyWithoutFrameNestedInput
    notes?: NoteUpdateManyWithoutFrameNestedInput
    decorItems?: DecorItemUpdateManyWithoutFrameNestedInput
  }

  export type FrameUncheckedUpdateWithoutChestInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    layout?: FrameLayoutUncheckedUpdateOneWithoutFrameNestedInput
    journal?: JournalUncheckedUpdateOneWithoutFrameNestedInput
    polaroid?: PolaroidUncheckedUpdateManyWithoutFrameNestedInput
    media?: MediaUncheckedUpdateManyWithoutFrameNestedInput
    checklist?: ChecklistUncheckedUpdateManyWithoutFrameNestedInput
    notes?: NoteUncheckedUpdateManyWithoutFrameNestedInput
    decorItems?: DecorItemUncheckedUpdateManyWithoutFrameNestedInput
  }

  export type FrameCreateWithoutJournalInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutFrameInput
    layout?: FrameLayoutCreateNestedOneWithoutFrameInput
    chest?: ChestCreateNestedOneWithoutFrameInput
    polaroid?: PolaroidCreateNestedManyWithoutFrameInput
    media?: MediaCreateNestedManyWithoutFrameInput
    checklist?: ChecklistCreateNestedManyWithoutFrameInput
    notes?: NoteCreateNestedManyWithoutFrameInput
    decorItems?: DecorItemCreateNestedManyWithoutFrameInput
  }

  export type FrameUncheckedCreateWithoutJournalInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    layout?: FrameLayoutUncheckedCreateNestedOneWithoutFrameInput
    chest?: ChestUncheckedCreateNestedOneWithoutFrameInput
    polaroid?: PolaroidUncheckedCreateNestedManyWithoutFrameInput
    media?: MediaUncheckedCreateNestedManyWithoutFrameInput
    checklist?: ChecklistUncheckedCreateNestedManyWithoutFrameInput
    notes?: NoteUncheckedCreateNestedManyWithoutFrameInput
    decorItems?: DecorItemUncheckedCreateNestedManyWithoutFrameInput
  }

  export type FrameCreateOrConnectWithoutJournalInput = {
    where: FrameWhereUniqueInput
    create: XOR<FrameCreateWithoutJournalInput, FrameUncheckedCreateWithoutJournalInput>
  }

  export type FrameUpsertWithoutJournalInput = {
    update: XOR<FrameUpdateWithoutJournalInput, FrameUncheckedUpdateWithoutJournalInput>
    create: XOR<FrameCreateWithoutJournalInput, FrameUncheckedCreateWithoutJournalInput>
    where?: FrameWhereInput
  }

  export type FrameUpdateToOneWithWhereWithoutJournalInput = {
    where?: FrameWhereInput
    data: XOR<FrameUpdateWithoutJournalInput, FrameUncheckedUpdateWithoutJournalInput>
  }

  export type FrameUpdateWithoutJournalInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFrameNestedInput
    layout?: FrameLayoutUpdateOneWithoutFrameNestedInput
    chest?: ChestUpdateOneWithoutFrameNestedInput
    polaroid?: PolaroidUpdateManyWithoutFrameNestedInput
    media?: MediaUpdateManyWithoutFrameNestedInput
    checklist?: ChecklistUpdateManyWithoutFrameNestedInput
    notes?: NoteUpdateManyWithoutFrameNestedInput
    decorItems?: DecorItemUpdateManyWithoutFrameNestedInput
  }

  export type FrameUncheckedUpdateWithoutJournalInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    layout?: FrameLayoutUncheckedUpdateOneWithoutFrameNestedInput
    chest?: ChestUncheckedUpdateOneWithoutFrameNestedInput
    polaroid?: PolaroidUncheckedUpdateManyWithoutFrameNestedInput
    media?: MediaUncheckedUpdateManyWithoutFrameNestedInput
    checklist?: ChecklistUncheckedUpdateManyWithoutFrameNestedInput
    notes?: NoteUncheckedUpdateManyWithoutFrameNestedInput
    decorItems?: DecorItemUncheckedUpdateManyWithoutFrameNestedInput
  }

  export type FrameCreateWithoutPolaroidInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutFrameInput
    layout?: FrameLayoutCreateNestedOneWithoutFrameInput
    chest?: ChestCreateNestedOneWithoutFrameInput
    journal?: JournalCreateNestedOneWithoutFrameInput
    media?: MediaCreateNestedManyWithoutFrameInput
    checklist?: ChecklistCreateNestedManyWithoutFrameInput
    notes?: NoteCreateNestedManyWithoutFrameInput
    decorItems?: DecorItemCreateNestedManyWithoutFrameInput
  }

  export type FrameUncheckedCreateWithoutPolaroidInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    layout?: FrameLayoutUncheckedCreateNestedOneWithoutFrameInput
    chest?: ChestUncheckedCreateNestedOneWithoutFrameInput
    journal?: JournalUncheckedCreateNestedOneWithoutFrameInput
    media?: MediaUncheckedCreateNestedManyWithoutFrameInput
    checklist?: ChecklistUncheckedCreateNestedManyWithoutFrameInput
    notes?: NoteUncheckedCreateNestedManyWithoutFrameInput
    decorItems?: DecorItemUncheckedCreateNestedManyWithoutFrameInput
  }

  export type FrameCreateOrConnectWithoutPolaroidInput = {
    where: FrameWhereUniqueInput
    create: XOR<FrameCreateWithoutPolaroidInput, FrameUncheckedCreateWithoutPolaroidInput>
  }

  export type FrameUpsertWithoutPolaroidInput = {
    update: XOR<FrameUpdateWithoutPolaroidInput, FrameUncheckedUpdateWithoutPolaroidInput>
    create: XOR<FrameCreateWithoutPolaroidInput, FrameUncheckedCreateWithoutPolaroidInput>
    where?: FrameWhereInput
  }

  export type FrameUpdateToOneWithWhereWithoutPolaroidInput = {
    where?: FrameWhereInput
    data: XOR<FrameUpdateWithoutPolaroidInput, FrameUncheckedUpdateWithoutPolaroidInput>
  }

  export type FrameUpdateWithoutPolaroidInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFrameNestedInput
    layout?: FrameLayoutUpdateOneWithoutFrameNestedInput
    chest?: ChestUpdateOneWithoutFrameNestedInput
    journal?: JournalUpdateOneWithoutFrameNestedInput
    media?: MediaUpdateManyWithoutFrameNestedInput
    checklist?: ChecklistUpdateManyWithoutFrameNestedInput
    notes?: NoteUpdateManyWithoutFrameNestedInput
    decorItems?: DecorItemUpdateManyWithoutFrameNestedInput
  }

  export type FrameUncheckedUpdateWithoutPolaroidInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    layout?: FrameLayoutUncheckedUpdateOneWithoutFrameNestedInput
    chest?: ChestUncheckedUpdateOneWithoutFrameNestedInput
    journal?: JournalUncheckedUpdateOneWithoutFrameNestedInput
    media?: MediaUncheckedUpdateManyWithoutFrameNestedInput
    checklist?: ChecklistUncheckedUpdateManyWithoutFrameNestedInput
    notes?: NoteUncheckedUpdateManyWithoutFrameNestedInput
    decorItems?: DecorItemUncheckedUpdateManyWithoutFrameNestedInput
  }

  export type FrameCreateWithoutMediaInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutFrameInput
    layout?: FrameLayoutCreateNestedOneWithoutFrameInput
    chest?: ChestCreateNestedOneWithoutFrameInput
    journal?: JournalCreateNestedOneWithoutFrameInput
    polaroid?: PolaroidCreateNestedManyWithoutFrameInput
    checklist?: ChecklistCreateNestedManyWithoutFrameInput
    notes?: NoteCreateNestedManyWithoutFrameInput
    decorItems?: DecorItemCreateNestedManyWithoutFrameInput
  }

  export type FrameUncheckedCreateWithoutMediaInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    layout?: FrameLayoutUncheckedCreateNestedOneWithoutFrameInput
    chest?: ChestUncheckedCreateNestedOneWithoutFrameInput
    journal?: JournalUncheckedCreateNestedOneWithoutFrameInput
    polaroid?: PolaroidUncheckedCreateNestedManyWithoutFrameInput
    checklist?: ChecklistUncheckedCreateNestedManyWithoutFrameInput
    notes?: NoteUncheckedCreateNestedManyWithoutFrameInput
    decorItems?: DecorItemUncheckedCreateNestedManyWithoutFrameInput
  }

  export type FrameCreateOrConnectWithoutMediaInput = {
    where: FrameWhereUniqueInput
    create: XOR<FrameCreateWithoutMediaInput, FrameUncheckedCreateWithoutMediaInput>
  }

  export type FrameUpsertWithoutMediaInput = {
    update: XOR<FrameUpdateWithoutMediaInput, FrameUncheckedUpdateWithoutMediaInput>
    create: XOR<FrameCreateWithoutMediaInput, FrameUncheckedCreateWithoutMediaInput>
    where?: FrameWhereInput
  }

  export type FrameUpdateToOneWithWhereWithoutMediaInput = {
    where?: FrameWhereInput
    data: XOR<FrameUpdateWithoutMediaInput, FrameUncheckedUpdateWithoutMediaInput>
  }

  export type FrameUpdateWithoutMediaInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFrameNestedInput
    layout?: FrameLayoutUpdateOneWithoutFrameNestedInput
    chest?: ChestUpdateOneWithoutFrameNestedInput
    journal?: JournalUpdateOneWithoutFrameNestedInput
    polaroid?: PolaroidUpdateManyWithoutFrameNestedInput
    checklist?: ChecklistUpdateManyWithoutFrameNestedInput
    notes?: NoteUpdateManyWithoutFrameNestedInput
    decorItems?: DecorItemUpdateManyWithoutFrameNestedInput
  }

  export type FrameUncheckedUpdateWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    layout?: FrameLayoutUncheckedUpdateOneWithoutFrameNestedInput
    chest?: ChestUncheckedUpdateOneWithoutFrameNestedInput
    journal?: JournalUncheckedUpdateOneWithoutFrameNestedInput
    polaroid?: PolaroidUncheckedUpdateManyWithoutFrameNestedInput
    checklist?: ChecklistUncheckedUpdateManyWithoutFrameNestedInput
    notes?: NoteUncheckedUpdateManyWithoutFrameNestedInput
    decorItems?: DecorItemUncheckedUpdateManyWithoutFrameNestedInput
  }

  export type FrameCreateWithoutChecklistInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutFrameInput
    layout?: FrameLayoutCreateNestedOneWithoutFrameInput
    chest?: ChestCreateNestedOneWithoutFrameInput
    journal?: JournalCreateNestedOneWithoutFrameInput
    polaroid?: PolaroidCreateNestedManyWithoutFrameInput
    media?: MediaCreateNestedManyWithoutFrameInput
    notes?: NoteCreateNestedManyWithoutFrameInput
    decorItems?: DecorItemCreateNestedManyWithoutFrameInput
  }

  export type FrameUncheckedCreateWithoutChecklistInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    layout?: FrameLayoutUncheckedCreateNestedOneWithoutFrameInput
    chest?: ChestUncheckedCreateNestedOneWithoutFrameInput
    journal?: JournalUncheckedCreateNestedOneWithoutFrameInput
    polaroid?: PolaroidUncheckedCreateNestedManyWithoutFrameInput
    media?: MediaUncheckedCreateNestedManyWithoutFrameInput
    notes?: NoteUncheckedCreateNestedManyWithoutFrameInput
    decorItems?: DecorItemUncheckedCreateNestedManyWithoutFrameInput
  }

  export type FrameCreateOrConnectWithoutChecklistInput = {
    where: FrameWhereUniqueInput
    create: XOR<FrameCreateWithoutChecklistInput, FrameUncheckedCreateWithoutChecklistInput>
  }

  export type FrameUpsertWithoutChecklistInput = {
    update: XOR<FrameUpdateWithoutChecklistInput, FrameUncheckedUpdateWithoutChecklistInput>
    create: XOR<FrameCreateWithoutChecklistInput, FrameUncheckedCreateWithoutChecklistInput>
    where?: FrameWhereInput
  }

  export type FrameUpdateToOneWithWhereWithoutChecklistInput = {
    where?: FrameWhereInput
    data: XOR<FrameUpdateWithoutChecklistInput, FrameUncheckedUpdateWithoutChecklistInput>
  }

  export type FrameUpdateWithoutChecklistInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFrameNestedInput
    layout?: FrameLayoutUpdateOneWithoutFrameNestedInput
    chest?: ChestUpdateOneWithoutFrameNestedInput
    journal?: JournalUpdateOneWithoutFrameNestedInput
    polaroid?: PolaroidUpdateManyWithoutFrameNestedInput
    media?: MediaUpdateManyWithoutFrameNestedInput
    notes?: NoteUpdateManyWithoutFrameNestedInput
    decorItems?: DecorItemUpdateManyWithoutFrameNestedInput
  }

  export type FrameUncheckedUpdateWithoutChecklistInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    layout?: FrameLayoutUncheckedUpdateOneWithoutFrameNestedInput
    chest?: ChestUncheckedUpdateOneWithoutFrameNestedInput
    journal?: JournalUncheckedUpdateOneWithoutFrameNestedInput
    polaroid?: PolaroidUncheckedUpdateManyWithoutFrameNestedInput
    media?: MediaUncheckedUpdateManyWithoutFrameNestedInput
    notes?: NoteUncheckedUpdateManyWithoutFrameNestedInput
    decorItems?: DecorItemUncheckedUpdateManyWithoutFrameNestedInput
  }

  export type FrameCreateWithoutNotesInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutFrameInput
    layout?: FrameLayoutCreateNestedOneWithoutFrameInput
    chest?: ChestCreateNestedOneWithoutFrameInput
    journal?: JournalCreateNestedOneWithoutFrameInput
    polaroid?: PolaroidCreateNestedManyWithoutFrameInput
    media?: MediaCreateNestedManyWithoutFrameInput
    checklist?: ChecklistCreateNestedManyWithoutFrameInput
    decorItems?: DecorItemCreateNestedManyWithoutFrameInput
  }

  export type FrameUncheckedCreateWithoutNotesInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    layout?: FrameLayoutUncheckedCreateNestedOneWithoutFrameInput
    chest?: ChestUncheckedCreateNestedOneWithoutFrameInput
    journal?: JournalUncheckedCreateNestedOneWithoutFrameInput
    polaroid?: PolaroidUncheckedCreateNestedManyWithoutFrameInput
    media?: MediaUncheckedCreateNestedManyWithoutFrameInput
    checklist?: ChecklistUncheckedCreateNestedManyWithoutFrameInput
    decorItems?: DecorItemUncheckedCreateNestedManyWithoutFrameInput
  }

  export type FrameCreateOrConnectWithoutNotesInput = {
    where: FrameWhereUniqueInput
    create: XOR<FrameCreateWithoutNotesInput, FrameUncheckedCreateWithoutNotesInput>
  }

  export type FrameUpsertWithoutNotesInput = {
    update: XOR<FrameUpdateWithoutNotesInput, FrameUncheckedUpdateWithoutNotesInput>
    create: XOR<FrameCreateWithoutNotesInput, FrameUncheckedCreateWithoutNotesInput>
    where?: FrameWhereInput
  }

  export type FrameUpdateToOneWithWhereWithoutNotesInput = {
    where?: FrameWhereInput
    data: XOR<FrameUpdateWithoutNotesInput, FrameUncheckedUpdateWithoutNotesInput>
  }

  export type FrameUpdateWithoutNotesInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFrameNestedInput
    layout?: FrameLayoutUpdateOneWithoutFrameNestedInput
    chest?: ChestUpdateOneWithoutFrameNestedInput
    journal?: JournalUpdateOneWithoutFrameNestedInput
    polaroid?: PolaroidUpdateManyWithoutFrameNestedInput
    media?: MediaUpdateManyWithoutFrameNestedInput
    checklist?: ChecklistUpdateManyWithoutFrameNestedInput
    decorItems?: DecorItemUpdateManyWithoutFrameNestedInput
  }

  export type FrameUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    layout?: FrameLayoutUncheckedUpdateOneWithoutFrameNestedInput
    chest?: ChestUncheckedUpdateOneWithoutFrameNestedInput
    journal?: JournalUncheckedUpdateOneWithoutFrameNestedInput
    polaroid?: PolaroidUncheckedUpdateManyWithoutFrameNestedInput
    media?: MediaUncheckedUpdateManyWithoutFrameNestedInput
    checklist?: ChecklistUncheckedUpdateManyWithoutFrameNestedInput
    decorItems?: DecorItemUncheckedUpdateManyWithoutFrameNestedInput
  }

  export type FrameCreateWithoutDecorItemsInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutFrameInput
    layout?: FrameLayoutCreateNestedOneWithoutFrameInput
    chest?: ChestCreateNestedOneWithoutFrameInput
    journal?: JournalCreateNestedOneWithoutFrameInput
    polaroid?: PolaroidCreateNestedManyWithoutFrameInput
    media?: MediaCreateNestedManyWithoutFrameInput
    checklist?: ChecklistCreateNestedManyWithoutFrameInput
    notes?: NoteCreateNestedManyWithoutFrameInput
  }

  export type FrameUncheckedCreateWithoutDecorItemsInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    layout?: FrameLayoutUncheckedCreateNestedOneWithoutFrameInput
    chest?: ChestUncheckedCreateNestedOneWithoutFrameInput
    journal?: JournalUncheckedCreateNestedOneWithoutFrameInput
    polaroid?: PolaroidUncheckedCreateNestedManyWithoutFrameInput
    media?: MediaUncheckedCreateNestedManyWithoutFrameInput
    checklist?: ChecklistUncheckedCreateNestedManyWithoutFrameInput
    notes?: NoteUncheckedCreateNestedManyWithoutFrameInput
  }

  export type FrameCreateOrConnectWithoutDecorItemsInput = {
    where: FrameWhereUniqueInput
    create: XOR<FrameCreateWithoutDecorItemsInput, FrameUncheckedCreateWithoutDecorItemsInput>
  }

  export type FrameUpsertWithoutDecorItemsInput = {
    update: XOR<FrameUpdateWithoutDecorItemsInput, FrameUncheckedUpdateWithoutDecorItemsInput>
    create: XOR<FrameCreateWithoutDecorItemsInput, FrameUncheckedCreateWithoutDecorItemsInput>
    where?: FrameWhereInput
  }

  export type FrameUpdateToOneWithWhereWithoutDecorItemsInput = {
    where?: FrameWhereInput
    data: XOR<FrameUpdateWithoutDecorItemsInput, FrameUncheckedUpdateWithoutDecorItemsInput>
  }

  export type FrameUpdateWithoutDecorItemsInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFrameNestedInput
    layout?: FrameLayoutUpdateOneWithoutFrameNestedInput
    chest?: ChestUpdateOneWithoutFrameNestedInput
    journal?: JournalUpdateOneWithoutFrameNestedInput
    polaroid?: PolaroidUpdateManyWithoutFrameNestedInput
    media?: MediaUpdateManyWithoutFrameNestedInput
    checklist?: ChecklistUpdateManyWithoutFrameNestedInput
    notes?: NoteUpdateManyWithoutFrameNestedInput
  }

  export type FrameUncheckedUpdateWithoutDecorItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    layout?: FrameLayoutUncheckedUpdateOneWithoutFrameNestedInput
    chest?: ChestUncheckedUpdateOneWithoutFrameNestedInput
    journal?: JournalUncheckedUpdateOneWithoutFrameNestedInput
    polaroid?: PolaroidUncheckedUpdateManyWithoutFrameNestedInput
    media?: MediaUncheckedUpdateManyWithoutFrameNestedInput
    checklist?: ChecklistUncheckedUpdateManyWithoutFrameNestedInput
    notes?: NoteUncheckedUpdateManyWithoutFrameNestedInput
  }

  export type FrameCreateManyOwnerInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FrameUpdateWithoutOwnerInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    layout?: FrameLayoutUpdateOneWithoutFrameNestedInput
    chest?: ChestUpdateOneWithoutFrameNestedInput
    journal?: JournalUpdateOneWithoutFrameNestedInput
    polaroid?: PolaroidUpdateManyWithoutFrameNestedInput
    media?: MediaUpdateManyWithoutFrameNestedInput
    checklist?: ChecklistUpdateManyWithoutFrameNestedInput
    notes?: NoteUpdateManyWithoutFrameNestedInput
    decorItems?: DecorItemUpdateManyWithoutFrameNestedInput
  }

  export type FrameUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    layout?: FrameLayoutUncheckedUpdateOneWithoutFrameNestedInput
    chest?: ChestUncheckedUpdateOneWithoutFrameNestedInput
    journal?: JournalUncheckedUpdateOneWithoutFrameNestedInput
    polaroid?: PolaroidUncheckedUpdateManyWithoutFrameNestedInput
    media?: MediaUncheckedUpdateManyWithoutFrameNestedInput
    checklist?: ChecklistUncheckedUpdateManyWithoutFrameNestedInput
    notes?: NoteUncheckedUpdateManyWithoutFrameNestedInput
    decorItems?: DecorItemUncheckedUpdateManyWithoutFrameNestedInput
  }

  export type FrameUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolaroidCreateManyFrameInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    url: string
    caption?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaCreateManyFrameInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    type: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChecklistCreateManyFrameInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    title: string
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteCreateManyFrameInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DecorItemCreateManyFrameInput = {
    id?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolaroidUpdateWithoutFrameInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolaroidUncheckedUpdateWithoutFrameInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolaroidUncheckedUpdateManyWithoutFrameInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUpdateWithoutFrameInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateWithoutFrameInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyWithoutFrameInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistUpdateWithoutFrameInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistUncheckedUpdateWithoutFrameInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistUncheckedUpdateManyWithoutFrameInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUpdateWithoutFrameInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateWithoutFrameInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyWithoutFrameInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecorItemUpdateWithoutFrameInput = {
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecorItemUncheckedUpdateWithoutFrameInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecorItemUncheckedUpdateManyWithoutFrameInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
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
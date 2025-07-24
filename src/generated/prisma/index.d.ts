
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
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventParticipant
 * 
 */
export type EventParticipant = $Result.DefaultSelection<Prisma.$EventParticipantPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model QuestionUpvote
 * 
 */
export type QuestionUpvote = $Result.DefaultSelection<Prisma.$QuestionUpvotePayload>
/**
 * Model Poll
 * 
 */
export type Poll = $Result.DefaultSelection<Prisma.$PollPayload>
/**
 * Model PollOption
 * 
 */
export type PollOption = $Result.DefaultSelection<Prisma.$PollOptionPayload>
/**
 * Model PollVote
 * 
 */
export type PollVote = $Result.DefaultSelection<Prisma.$PollVotePayload>

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventParticipant`: Exposes CRUD operations for the **EventParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventParticipants
    * const eventParticipants = await prisma.eventParticipant.findMany()
    * ```
    */
  get eventParticipant(): Prisma.EventParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionUpvote`: Exposes CRUD operations for the **QuestionUpvote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionUpvotes
    * const questionUpvotes = await prisma.questionUpvote.findMany()
    * ```
    */
  get questionUpvote(): Prisma.QuestionUpvoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.poll`: Exposes CRUD operations for the **Poll** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Polls
    * const polls = await prisma.poll.findMany()
    * ```
    */
  get poll(): Prisma.PollDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pollOption`: Exposes CRUD operations for the **PollOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PollOptions
    * const pollOptions = await prisma.pollOption.findMany()
    * ```
    */
  get pollOption(): Prisma.PollOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pollVote`: Exposes CRUD operations for the **PollVote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PollVotes
    * const pollVotes = await prisma.pollVote.findMany()
    * ```
    */
  get pollVote(): Prisma.PollVoteDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Event: 'Event',
    EventParticipant: 'EventParticipant',
    Question: 'Question',
    QuestionUpvote: 'QuestionUpvote',
    Poll: 'Poll',
    PollOption: 'PollOption',
    PollVote: 'PollVote'
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
      modelProps: "user" | "event" | "eventParticipant" | "question" | "questionUpvote" | "poll" | "pollOption" | "pollVote"
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
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventParticipant: {
        payload: Prisma.$EventParticipantPayload<ExtArgs>
        fields: Prisma.EventParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          findFirst: {
            args: Prisma.EventParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          findMany: {
            args: Prisma.EventParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>[]
          }
          create: {
            args: Prisma.EventParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          createMany: {
            args: Prisma.EventParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>[]
          }
          delete: {
            args: Prisma.EventParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          update: {
            args: Prisma.EventParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          deleteMany: {
            args: Prisma.EventParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>[]
          }
          upsert: {
            args: Prisma.EventParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          aggregate: {
            args: Prisma.EventParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventParticipant>
          }
          groupBy: {
            args: Prisma.EventParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<EventParticipantCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      QuestionUpvote: {
        payload: Prisma.$QuestionUpvotePayload<ExtArgs>
        fields: Prisma.QuestionUpvoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionUpvoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionUpvotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionUpvoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionUpvotePayload>
          }
          findFirst: {
            args: Prisma.QuestionUpvoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionUpvotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionUpvoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionUpvotePayload>
          }
          findMany: {
            args: Prisma.QuestionUpvoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionUpvotePayload>[]
          }
          create: {
            args: Prisma.QuestionUpvoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionUpvotePayload>
          }
          createMany: {
            args: Prisma.QuestionUpvoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionUpvoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionUpvotePayload>[]
          }
          delete: {
            args: Prisma.QuestionUpvoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionUpvotePayload>
          }
          update: {
            args: Prisma.QuestionUpvoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionUpvotePayload>
          }
          deleteMany: {
            args: Prisma.QuestionUpvoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpvoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpvoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionUpvotePayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpvoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionUpvotePayload>
          }
          aggregate: {
            args: Prisma.QuestionUpvoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionUpvote>
          }
          groupBy: {
            args: Prisma.QuestionUpvoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionUpvoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionUpvoteCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionUpvoteCountAggregateOutputType> | number
          }
        }
      }
      Poll: {
        payload: Prisma.$PollPayload<ExtArgs>
        fields: Prisma.PollFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PollFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PollFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>
          }
          findFirst: {
            args: Prisma.PollFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PollFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>
          }
          findMany: {
            args: Prisma.PollFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>[]
          }
          create: {
            args: Prisma.PollCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>
          }
          createMany: {
            args: Prisma.PollCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PollCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>[]
          }
          delete: {
            args: Prisma.PollDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>
          }
          update: {
            args: Prisma.PollUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>
          }
          deleteMany: {
            args: Prisma.PollDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PollUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PollUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>[]
          }
          upsert: {
            args: Prisma.PollUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>
          }
          aggregate: {
            args: Prisma.PollAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoll>
          }
          groupBy: {
            args: Prisma.PollGroupByArgs<ExtArgs>
            result: $Utils.Optional<PollGroupByOutputType>[]
          }
          count: {
            args: Prisma.PollCountArgs<ExtArgs>
            result: $Utils.Optional<PollCountAggregateOutputType> | number
          }
        }
      }
      PollOption: {
        payload: Prisma.$PollOptionPayload<ExtArgs>
        fields: Prisma.PollOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PollOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PollOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload>
          }
          findFirst: {
            args: Prisma.PollOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PollOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload>
          }
          findMany: {
            args: Prisma.PollOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload>[]
          }
          create: {
            args: Prisma.PollOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload>
          }
          createMany: {
            args: Prisma.PollOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PollOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload>[]
          }
          delete: {
            args: Prisma.PollOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload>
          }
          update: {
            args: Prisma.PollOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload>
          }
          deleteMany: {
            args: Prisma.PollOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PollOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PollOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload>[]
          }
          upsert: {
            args: Prisma.PollOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload>
          }
          aggregate: {
            args: Prisma.PollOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePollOption>
          }
          groupBy: {
            args: Prisma.PollOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PollOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PollOptionCountArgs<ExtArgs>
            result: $Utils.Optional<PollOptionCountAggregateOutputType> | number
          }
        }
      }
      PollVote: {
        payload: Prisma.$PollVotePayload<ExtArgs>
        fields: Prisma.PollVoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PollVoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollVotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PollVoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollVotePayload>
          }
          findFirst: {
            args: Prisma.PollVoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollVotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PollVoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollVotePayload>
          }
          findMany: {
            args: Prisma.PollVoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollVotePayload>[]
          }
          create: {
            args: Prisma.PollVoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollVotePayload>
          }
          createMany: {
            args: Prisma.PollVoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PollVoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollVotePayload>[]
          }
          delete: {
            args: Prisma.PollVoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollVotePayload>
          }
          update: {
            args: Prisma.PollVoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollVotePayload>
          }
          deleteMany: {
            args: Prisma.PollVoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PollVoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PollVoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollVotePayload>[]
          }
          upsert: {
            args: Prisma.PollVoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollVotePayload>
          }
          aggregate: {
            args: Prisma.PollVoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePollVote>
          }
          groupBy: {
            args: Prisma.PollVoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PollVoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PollVoteCountArgs<ExtArgs>
            result: $Utils.Optional<PollVoteCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    event?: EventOmit
    eventParticipant?: EventParticipantOmit
    question?: QuestionOmit
    questionUpvote?: QuestionUpvoteOmit
    poll?: PollOmit
    pollOption?: PollOptionOmit
    pollVote?: PollVoteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    events: number
    participations: number
    questions: number
    upvotes: number
    votes: number
    bookMarks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | UserCountOutputTypeCountEventsArgs
    participations?: boolean | UserCountOutputTypeCountParticipationsArgs
    questions?: boolean | UserCountOutputTypeCountQuestionsArgs
    upvotes?: boolean | UserCountOutputTypeCountUpvotesArgs
    votes?: boolean | UserCountOutputTypeCountVotesArgs
    bookMarks?: boolean | UserCountOutputTypeCountBookMarksArgs
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
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventParticipantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpvotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionUpvoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PollVoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookMarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    participants: number
    questions: number
    polls: number
    bookMarkedBy: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | EventCountOutputTypeCountParticipantsArgs
    questions?: boolean | EventCountOutputTypeCountQuestionsArgs
    polls?: boolean | EventCountOutputTypeCountPollsArgs
    bookMarkedBy?: boolean | EventCountOutputTypeCountBookMarkedByArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventParticipantWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountPollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PollWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountBookMarkedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    upvotes: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upvotes?: boolean | QuestionCountOutputTypeCountUpvotesArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountUpvotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionUpvoteWhereInput
  }


  /**
   * Count Type PollCountOutputType
   */

  export type PollCountOutputType = {
    options: number
    votes: number
  }

  export type PollCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | PollCountOutputTypeCountOptionsArgs
    votes?: boolean | PollCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * PollCountOutputType without action
   */
  export type PollCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollCountOutputType
     */
    select?: PollCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PollCountOutputType without action
   */
  export type PollCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PollOptionWhereInput
  }

  /**
   * PollCountOutputType without action
   */
  export type PollCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PollVoteWhereInput
  }


  /**
   * Count Type PollOptionCountOutputType
   */

  export type PollOptionCountOutputType = {
    votes: number
  }

  export type PollOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | PollOptionCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * PollOptionCountOutputType without action
   */
  export type PollOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOptionCountOutputType
     */
    select?: PollOptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PollOptionCountOutputType without action
   */
  export type PollOptionCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PollVoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    displayName: string | null
    color: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    displayName: string | null
    color: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    displayName: number
    color: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    displayName?: true
    color?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    displayName?: true
    color?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    displayName?: true
    color?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    createdAt: Date
    displayName: string
    color: string
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    createdAt?: boolean
    displayName?: boolean
    color?: boolean
    events?: boolean | User$eventsArgs<ExtArgs>
    participations?: boolean | User$participationsArgs<ExtArgs>
    questions?: boolean | User$questionsArgs<ExtArgs>
    upvotes?: boolean | User$upvotesArgs<ExtArgs>
    votes?: boolean | User$votesArgs<ExtArgs>
    bookMarks?: boolean | User$bookMarksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    displayName?: boolean
    color?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    displayName?: boolean
    color?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    displayName?: boolean
    color?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt" | "displayName" | "color", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | User$eventsArgs<ExtArgs>
    participations?: boolean | User$participationsArgs<ExtArgs>
    questions?: boolean | User$questionsArgs<ExtArgs>
    upvotes?: boolean | User$upvotesArgs<ExtArgs>
    votes?: boolean | User$votesArgs<ExtArgs>
    bookMarks?: boolean | User$bookMarksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
      participations: Prisma.$EventParticipantPayload<ExtArgs>[]
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      upvotes: Prisma.$QuestionUpvotePayload<ExtArgs>[]
      votes: Prisma.$PollVotePayload<ExtArgs>[]
      bookMarks: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      createdAt: Date
      displayName: string
      color: string
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
    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participations<T extends User$participationsArgs<ExtArgs> = {}>(args?: Subset<T, User$participationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends User$questionsArgs<ExtArgs> = {}>(args?: Subset<T, User$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    upvotes<T extends User$upvotesArgs<ExtArgs> = {}>(args?: Subset<T, User$upvotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionUpvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends User$votesArgs<ExtArgs> = {}>(args?: Subset<T, User$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookMarks<T extends User$bookMarksArgs<ExtArgs> = {}>(args?: Subset<T, User$bookMarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly color: FieldRef<"User", 'String'>
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
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.participations
   */
  export type User$participationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    where?: EventParticipantWhereInput
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    cursor?: EventParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * User.questions
   */
  export type User$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * User.upvotes
   */
  export type User$upvotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionUpvote
     */
    select?: QuestionUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionUpvote
     */
    omit?: QuestionUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionUpvoteInclude<ExtArgs> | null
    where?: QuestionUpvoteWhereInput
    orderBy?: QuestionUpvoteOrderByWithRelationInput | QuestionUpvoteOrderByWithRelationInput[]
    cursor?: QuestionUpvoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionUpvoteScalarFieldEnum | QuestionUpvoteScalarFieldEnum[]
  }

  /**
   * User.votes
   */
  export type User$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollVote
     */
    select?: PollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollVote
     */
    omit?: PollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollVoteInclude<ExtArgs> | null
    where?: PollVoteWhereInput
    orderBy?: PollVoteOrderByWithRelationInput | PollVoteOrderByWithRelationInput[]
    cursor?: PollVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PollVoteScalarFieldEnum | PollVoteScalarFieldEnum[]
  }

  /**
   * User.bookMarks
   */
  export type User$bookMarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
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
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    displayName: string | null
    slug: string | null
    createdAt: Date | null
    ownerId: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    displayName: string | null
    slug: string | null
    createdAt: Date | null
    ownerId: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    displayName: number
    slug: number
    createdAt: number
    ownerId: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    displayName?: true
    slug?: true
    createdAt?: true
    ownerId?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    displayName?: true
    slug?: true
    createdAt?: true
    ownerId?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    displayName?: true
    slug?: true
    createdAt?: true
    ownerId?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    displayName: string
    slug: string | null
    createdAt: Date
    ownerId: string
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayName?: boolean
    slug?: boolean
    createdAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | Event$participantsArgs<ExtArgs>
    questions?: boolean | Event$questionsArgs<ExtArgs>
    polls?: boolean | Event$pollsArgs<ExtArgs>
    bookMarkedBy?: boolean | Event$bookMarkedByArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayName?: boolean
    slug?: boolean
    createdAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayName?: boolean
    slug?: boolean
    createdAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    displayName?: boolean
    slug?: boolean
    createdAt?: boolean
    ownerId?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "displayName" | "slug" | "createdAt" | "ownerId", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | Event$participantsArgs<ExtArgs>
    questions?: boolean | Event$questionsArgs<ExtArgs>
    polls?: boolean | Event$pollsArgs<ExtArgs>
    bookMarkedBy?: boolean | Event$bookMarkedByArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      participants: Prisma.$EventParticipantPayload<ExtArgs>[]
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      polls: Prisma.$PollPayload<ExtArgs>[]
      bookMarkedBy: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      displayName: string
      slug: string | null
      createdAt: Date
      ownerId: string
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends Event$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Event$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends Event$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Event$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    polls<T extends Event$pollsArgs<ExtArgs> = {}>(args?: Subset<T, Event$pollsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookMarkedBy<T extends Event$bookMarkedByArgs<ExtArgs> = {}>(args?: Subset<T, Event$bookMarkedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly displayName: FieldRef<"Event", 'String'>
    readonly slug: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly ownerId: FieldRef<"Event", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.participants
   */
  export type Event$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    where?: EventParticipantWhereInput
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    cursor?: EventParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * Event.questions
   */
  export type Event$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Event.polls
   */
  export type Event$pollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    where?: PollWhereInput
    orderBy?: PollOrderByWithRelationInput | PollOrderByWithRelationInput[]
    cursor?: PollWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PollScalarFieldEnum | PollScalarFieldEnum[]
  }

  /**
   * Event.bookMarkedBy
   */
  export type Event$bookMarkedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventParticipant
   */

  export type AggregateEventParticipant = {
    _count: EventParticipantCountAggregateOutputType | null
    _min: EventParticipantMinAggregateOutputType | null
    _max: EventParticipantMaxAggregateOutputType | null
  }

  export type EventParticipantMinAggregateOutputType = {
    eventId: string | null
    userId: string | null
  }

  export type EventParticipantMaxAggregateOutputType = {
    eventId: string | null
    userId: string | null
  }

  export type EventParticipantCountAggregateOutputType = {
    eventId: number
    userId: number
    _all: number
  }


  export type EventParticipantMinAggregateInputType = {
    eventId?: true
    userId?: true
  }

  export type EventParticipantMaxAggregateInputType = {
    eventId?: true
    userId?: true
  }

  export type EventParticipantCountAggregateInputType = {
    eventId?: true
    userId?: true
    _all?: true
  }

  export type EventParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventParticipant to aggregate.
     */
    where?: EventParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventParticipants
    **/
    _count?: true | EventParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventParticipantMaxAggregateInputType
  }

  export type GetEventParticipantAggregateType<T extends EventParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateEventParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventParticipant[P]>
      : GetScalarType<T[P], AggregateEventParticipant[P]>
  }




  export type EventParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventParticipantWhereInput
    orderBy?: EventParticipantOrderByWithAggregationInput | EventParticipantOrderByWithAggregationInput[]
    by: EventParticipantScalarFieldEnum[] | EventParticipantScalarFieldEnum
    having?: EventParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventParticipantCountAggregateInputType | true
    _min?: EventParticipantMinAggregateInputType
    _max?: EventParticipantMaxAggregateInputType
  }

  export type EventParticipantGroupByOutputType = {
    eventId: string
    userId: string
    _count: EventParticipantCountAggregateOutputType | null
    _min: EventParticipantMinAggregateOutputType | null
    _max: EventParticipantMaxAggregateOutputType | null
  }

  type GetEventParticipantGroupByPayload<T extends EventParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], EventParticipantGroupByOutputType[P]>
        }
      >
    >


  export type EventParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    userId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventParticipant"]>

  export type EventParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    userId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventParticipant"]>

  export type EventParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    userId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventParticipant"]>

  export type EventParticipantSelectScalar = {
    eventId?: boolean
    userId?: boolean
  }

  export type EventParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eventId" | "userId", ExtArgs["result"]["eventParticipant"]>
  export type EventParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventParticipant"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      eventId: string
      userId: string
    }, ExtArgs["result"]["eventParticipant"]>
    composites: {}
  }

  type EventParticipantGetPayload<S extends boolean | null | undefined | EventParticipantDefaultArgs> = $Result.GetResult<Prisma.$EventParticipantPayload, S>

  type EventParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventParticipantCountAggregateInputType | true
    }

  export interface EventParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventParticipant'], meta: { name: 'EventParticipant' } }
    /**
     * Find zero or one EventParticipant that matches the filter.
     * @param {EventParticipantFindUniqueArgs} args - Arguments to find a EventParticipant
     * @example
     * // Get one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventParticipantFindUniqueArgs>(args: SelectSubset<T, EventParticipantFindUniqueArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventParticipantFindUniqueOrThrowArgs} args - Arguments to find a EventParticipant
     * @example
     * // Get one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, EventParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantFindFirstArgs} args - Arguments to find a EventParticipant
     * @example
     * // Get one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventParticipantFindFirstArgs>(args?: SelectSubset<T, EventParticipantFindFirstArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantFindFirstOrThrowArgs} args - Arguments to find a EventParticipant
     * @example
     * // Get one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, EventParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventParticipants
     * const eventParticipants = await prisma.eventParticipant.findMany()
     * 
     * // Get first 10 EventParticipants
     * const eventParticipants = await prisma.eventParticipant.findMany({ take: 10 })
     * 
     * // Only select the `eventId`
     * const eventParticipantWithEventIdOnly = await prisma.eventParticipant.findMany({ select: { eventId: true } })
     * 
     */
    findMany<T extends EventParticipantFindManyArgs>(args?: SelectSubset<T, EventParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventParticipant.
     * @param {EventParticipantCreateArgs} args - Arguments to create a EventParticipant.
     * @example
     * // Create one EventParticipant
     * const EventParticipant = await prisma.eventParticipant.create({
     *   data: {
     *     // ... data to create a EventParticipant
     *   }
     * })
     * 
     */
    create<T extends EventParticipantCreateArgs>(args: SelectSubset<T, EventParticipantCreateArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventParticipants.
     * @param {EventParticipantCreateManyArgs} args - Arguments to create many EventParticipants.
     * @example
     * // Create many EventParticipants
     * const eventParticipant = await prisma.eventParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventParticipantCreateManyArgs>(args?: SelectSubset<T, EventParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventParticipants and returns the data saved in the database.
     * @param {EventParticipantCreateManyAndReturnArgs} args - Arguments to create many EventParticipants.
     * @example
     * // Create many EventParticipants
     * const eventParticipant = await prisma.eventParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventParticipants and only return the `eventId`
     * const eventParticipantWithEventIdOnly = await prisma.eventParticipant.createManyAndReturn({
     *   select: { eventId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, EventParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventParticipant.
     * @param {EventParticipantDeleteArgs} args - Arguments to delete one EventParticipant.
     * @example
     * // Delete one EventParticipant
     * const EventParticipant = await prisma.eventParticipant.delete({
     *   where: {
     *     // ... filter to delete one EventParticipant
     *   }
     * })
     * 
     */
    delete<T extends EventParticipantDeleteArgs>(args: SelectSubset<T, EventParticipantDeleteArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventParticipant.
     * @param {EventParticipantUpdateArgs} args - Arguments to update one EventParticipant.
     * @example
     * // Update one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventParticipantUpdateArgs>(args: SelectSubset<T, EventParticipantUpdateArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventParticipants.
     * @param {EventParticipantDeleteManyArgs} args - Arguments to filter EventParticipants to delete.
     * @example
     * // Delete a few EventParticipants
     * const { count } = await prisma.eventParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventParticipantDeleteManyArgs>(args?: SelectSubset<T, EventParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventParticipants
     * const eventParticipant = await prisma.eventParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventParticipantUpdateManyArgs>(args: SelectSubset<T, EventParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventParticipants and returns the data updated in the database.
     * @param {EventParticipantUpdateManyAndReturnArgs} args - Arguments to update many EventParticipants.
     * @example
     * // Update many EventParticipants
     * const eventParticipant = await prisma.eventParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventParticipants and only return the `eventId`
     * const eventParticipantWithEventIdOnly = await prisma.eventParticipant.updateManyAndReturn({
     *   select: { eventId: true },
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
    updateManyAndReturn<T extends EventParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, EventParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventParticipant.
     * @param {EventParticipantUpsertArgs} args - Arguments to update or create a EventParticipant.
     * @example
     * // Update or create a EventParticipant
     * const eventParticipant = await prisma.eventParticipant.upsert({
     *   create: {
     *     // ... data to create a EventParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventParticipant we want to update
     *   }
     * })
     */
    upsert<T extends EventParticipantUpsertArgs>(args: SelectSubset<T, EventParticipantUpsertArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantCountArgs} args - Arguments to filter EventParticipants to count.
     * @example
     * // Count the number of EventParticipants
     * const count = await prisma.eventParticipant.count({
     *   where: {
     *     // ... the filter for the EventParticipants we want to count
     *   }
     * })
    **/
    count<T extends EventParticipantCountArgs>(
      args?: Subset<T, EventParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventParticipantAggregateArgs>(args: Subset<T, EventParticipantAggregateArgs>): Prisma.PrismaPromise<GetEventParticipantAggregateType<T>>

    /**
     * Group by EventParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantGroupByArgs} args - Group by arguments.
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
      T extends EventParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventParticipantGroupByArgs['orderBy'] }
        : { orderBy?: EventParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventParticipant model
   */
  readonly fields: EventParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventParticipant model
   */
  interface EventParticipantFieldRefs {
    readonly eventId: FieldRef<"EventParticipant", 'String'>
    readonly userId: FieldRef<"EventParticipant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EventParticipant findUnique
   */
  export type EventParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipant to fetch.
     */
    where: EventParticipantWhereUniqueInput
  }

  /**
   * EventParticipant findUniqueOrThrow
   */
  export type EventParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipant to fetch.
     */
    where: EventParticipantWhereUniqueInput
  }

  /**
   * EventParticipant findFirst
   */
  export type EventParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipant to fetch.
     */
    where?: EventParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventParticipants.
     */
    cursor?: EventParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventParticipants.
     */
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * EventParticipant findFirstOrThrow
   */
  export type EventParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipant to fetch.
     */
    where?: EventParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventParticipants.
     */
    cursor?: EventParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventParticipants.
     */
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * EventParticipant findMany
   */
  export type EventParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipants to fetch.
     */
    where?: EventParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventParticipants.
     */
    cursor?: EventParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventParticipants.
     */
    skip?: number
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * EventParticipant create
   */
  export type EventParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a EventParticipant.
     */
    data: XOR<EventParticipantCreateInput, EventParticipantUncheckedCreateInput>
  }

  /**
   * EventParticipant createMany
   */
  export type EventParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventParticipants.
     */
    data: EventParticipantCreateManyInput | EventParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventParticipant createManyAndReturn
   */
  export type EventParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many EventParticipants.
     */
    data: EventParticipantCreateManyInput | EventParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventParticipant update
   */
  export type EventParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a EventParticipant.
     */
    data: XOR<EventParticipantUpdateInput, EventParticipantUncheckedUpdateInput>
    /**
     * Choose, which EventParticipant to update.
     */
    where: EventParticipantWhereUniqueInput
  }

  /**
   * EventParticipant updateMany
   */
  export type EventParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventParticipants.
     */
    data: XOR<EventParticipantUpdateManyMutationInput, EventParticipantUncheckedUpdateManyInput>
    /**
     * Filter which EventParticipants to update
     */
    where?: EventParticipantWhereInput
    /**
     * Limit how many EventParticipants to update.
     */
    limit?: number
  }

  /**
   * EventParticipant updateManyAndReturn
   */
  export type EventParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * The data used to update EventParticipants.
     */
    data: XOR<EventParticipantUpdateManyMutationInput, EventParticipantUncheckedUpdateManyInput>
    /**
     * Filter which EventParticipants to update
     */
    where?: EventParticipantWhereInput
    /**
     * Limit how many EventParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventParticipant upsert
   */
  export type EventParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the EventParticipant to update in case it exists.
     */
    where: EventParticipantWhereUniqueInput
    /**
     * In case the EventParticipant found by the `where` argument doesn't exist, create a new EventParticipant with this data.
     */
    create: XOR<EventParticipantCreateInput, EventParticipantUncheckedCreateInput>
    /**
     * In case the EventParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventParticipantUpdateInput, EventParticipantUncheckedUpdateInput>
  }

  /**
   * EventParticipant delete
   */
  export type EventParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter which EventParticipant to delete.
     */
    where: EventParticipantWhereUniqueInput
  }

  /**
   * EventParticipant deleteMany
   */
  export type EventParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventParticipants to delete
     */
    where?: EventParticipantWhereInput
    /**
     * Limit how many EventParticipants to delete.
     */
    limit?: number
  }

  /**
   * EventParticipant without action
   */
  export type EventParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    body: string | null
    isPinned: boolean | null
    isResolved: boolean | null
    eventId: string | null
    userId: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    body: string | null
    isPinned: boolean | null
    isResolved: boolean | null
    eventId: string | null
    userId: string | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    createdAt: number
    body: number
    isPinned: number
    isResolved: number
    eventId: number
    userId: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    createdAt?: true
    body?: true
    isPinned?: true
    isResolved?: true
    eventId?: true
    userId?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    body?: true
    isPinned?: true
    isResolved?: true
    eventId?: true
    userId?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    createdAt?: true
    body?: true
    isPinned?: true
    isResolved?: true
    eventId?: true
    userId?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    createdAt: Date
    body: string
    isPinned: boolean
    isResolved: boolean
    eventId: string
    userId: string
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    body?: boolean
    isPinned?: boolean
    isResolved?: boolean
    eventId?: boolean
    userId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    upvotes?: boolean | Question$upvotesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    body?: boolean
    isPinned?: boolean
    isResolved?: boolean
    eventId?: boolean
    userId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    body?: boolean
    isPinned?: boolean
    isResolved?: boolean
    eventId?: boolean
    userId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    body?: boolean
    isPinned?: boolean
    isResolved?: boolean
    eventId?: boolean
    userId?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "body" | "isPinned" | "isResolved" | "eventId" | "userId", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    upvotes?: boolean | Question$upvotesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
      upvotes: Prisma.$QuestionUpvotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      body: string
      isPinned: boolean
      isResolved: boolean
      eventId: string
      userId: string
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    upvotes<T extends Question$upvotesArgs<ExtArgs> = {}>(args?: Subset<T, Question$upvotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionUpvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly body: FieldRef<"Question", 'String'>
    readonly isPinned: FieldRef<"Question", 'Boolean'>
    readonly isResolved: FieldRef<"Question", 'Boolean'>
    readonly eventId: FieldRef<"Question", 'String'>
    readonly userId: FieldRef<"Question", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.upvotes
   */
  export type Question$upvotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionUpvote
     */
    select?: QuestionUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionUpvote
     */
    omit?: QuestionUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionUpvoteInclude<ExtArgs> | null
    where?: QuestionUpvoteWhereInput
    orderBy?: QuestionUpvoteOrderByWithRelationInput | QuestionUpvoteOrderByWithRelationInput[]
    cursor?: QuestionUpvoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionUpvoteScalarFieldEnum | QuestionUpvoteScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model QuestionUpvote
   */

  export type AggregateQuestionUpvote = {
    _count: QuestionUpvoteCountAggregateOutputType | null
    _min: QuestionUpvoteMinAggregateOutputType | null
    _max: QuestionUpvoteMaxAggregateOutputType | null
  }

  export type QuestionUpvoteMinAggregateOutputType = {
    questionId: string | null
    authorId: string | null
  }

  export type QuestionUpvoteMaxAggregateOutputType = {
    questionId: string | null
    authorId: string | null
  }

  export type QuestionUpvoteCountAggregateOutputType = {
    questionId: number
    authorId: number
    _all: number
  }


  export type QuestionUpvoteMinAggregateInputType = {
    questionId?: true
    authorId?: true
  }

  export type QuestionUpvoteMaxAggregateInputType = {
    questionId?: true
    authorId?: true
  }

  export type QuestionUpvoteCountAggregateInputType = {
    questionId?: true
    authorId?: true
    _all?: true
  }

  export type QuestionUpvoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionUpvote to aggregate.
     */
    where?: QuestionUpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionUpvotes to fetch.
     */
    orderBy?: QuestionUpvoteOrderByWithRelationInput | QuestionUpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionUpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionUpvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionUpvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionUpvotes
    **/
    _count?: true | QuestionUpvoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionUpvoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionUpvoteMaxAggregateInputType
  }

  export type GetQuestionUpvoteAggregateType<T extends QuestionUpvoteAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionUpvote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionUpvote[P]>
      : GetScalarType<T[P], AggregateQuestionUpvote[P]>
  }




  export type QuestionUpvoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionUpvoteWhereInput
    orderBy?: QuestionUpvoteOrderByWithAggregationInput | QuestionUpvoteOrderByWithAggregationInput[]
    by: QuestionUpvoteScalarFieldEnum[] | QuestionUpvoteScalarFieldEnum
    having?: QuestionUpvoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionUpvoteCountAggregateInputType | true
    _min?: QuestionUpvoteMinAggregateInputType
    _max?: QuestionUpvoteMaxAggregateInputType
  }

  export type QuestionUpvoteGroupByOutputType = {
    questionId: string
    authorId: string
    _count: QuestionUpvoteCountAggregateOutputType | null
    _min: QuestionUpvoteMinAggregateOutputType | null
    _max: QuestionUpvoteMaxAggregateOutputType | null
  }

  type GetQuestionUpvoteGroupByPayload<T extends QuestionUpvoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionUpvoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionUpvoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionUpvoteGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionUpvoteGroupByOutputType[P]>
        }
      >
    >


  export type QuestionUpvoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    questionId?: boolean
    authorId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionUpvote"]>

  export type QuestionUpvoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    questionId?: boolean
    authorId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionUpvote"]>

  export type QuestionUpvoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    questionId?: boolean
    authorId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionUpvote"]>

  export type QuestionUpvoteSelectScalar = {
    questionId?: boolean
    authorId?: boolean
  }

  export type QuestionUpvoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"questionId" | "authorId", ExtArgs["result"]["questionUpvote"]>
  export type QuestionUpvoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuestionUpvoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuestionUpvoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuestionUpvotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionUpvote"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      questionId: string
      authorId: string
    }, ExtArgs["result"]["questionUpvote"]>
    composites: {}
  }

  type QuestionUpvoteGetPayload<S extends boolean | null | undefined | QuestionUpvoteDefaultArgs> = $Result.GetResult<Prisma.$QuestionUpvotePayload, S>

  type QuestionUpvoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionUpvoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionUpvoteCountAggregateInputType | true
    }

  export interface QuestionUpvoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionUpvote'], meta: { name: 'QuestionUpvote' } }
    /**
     * Find zero or one QuestionUpvote that matches the filter.
     * @param {QuestionUpvoteFindUniqueArgs} args - Arguments to find a QuestionUpvote
     * @example
     * // Get one QuestionUpvote
     * const questionUpvote = await prisma.questionUpvote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionUpvoteFindUniqueArgs>(args: SelectSubset<T, QuestionUpvoteFindUniqueArgs<ExtArgs>>): Prisma__QuestionUpvoteClient<$Result.GetResult<Prisma.$QuestionUpvotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionUpvote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionUpvoteFindUniqueOrThrowArgs} args - Arguments to find a QuestionUpvote
     * @example
     * // Get one QuestionUpvote
     * const questionUpvote = await prisma.questionUpvote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionUpvoteFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionUpvoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionUpvoteClient<$Result.GetResult<Prisma.$QuestionUpvotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionUpvote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpvoteFindFirstArgs} args - Arguments to find a QuestionUpvote
     * @example
     * // Get one QuestionUpvote
     * const questionUpvote = await prisma.questionUpvote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionUpvoteFindFirstArgs>(args?: SelectSubset<T, QuestionUpvoteFindFirstArgs<ExtArgs>>): Prisma__QuestionUpvoteClient<$Result.GetResult<Prisma.$QuestionUpvotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionUpvote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpvoteFindFirstOrThrowArgs} args - Arguments to find a QuestionUpvote
     * @example
     * // Get one QuestionUpvote
     * const questionUpvote = await prisma.questionUpvote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionUpvoteFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionUpvoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionUpvoteClient<$Result.GetResult<Prisma.$QuestionUpvotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionUpvotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpvoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionUpvotes
     * const questionUpvotes = await prisma.questionUpvote.findMany()
     * 
     * // Get first 10 QuestionUpvotes
     * const questionUpvotes = await prisma.questionUpvote.findMany({ take: 10 })
     * 
     * // Only select the `questionId`
     * const questionUpvoteWithQuestionIdOnly = await prisma.questionUpvote.findMany({ select: { questionId: true } })
     * 
     */
    findMany<T extends QuestionUpvoteFindManyArgs>(args?: SelectSubset<T, QuestionUpvoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionUpvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionUpvote.
     * @param {QuestionUpvoteCreateArgs} args - Arguments to create a QuestionUpvote.
     * @example
     * // Create one QuestionUpvote
     * const QuestionUpvote = await prisma.questionUpvote.create({
     *   data: {
     *     // ... data to create a QuestionUpvote
     *   }
     * })
     * 
     */
    create<T extends QuestionUpvoteCreateArgs>(args: SelectSubset<T, QuestionUpvoteCreateArgs<ExtArgs>>): Prisma__QuestionUpvoteClient<$Result.GetResult<Prisma.$QuestionUpvotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionUpvotes.
     * @param {QuestionUpvoteCreateManyArgs} args - Arguments to create many QuestionUpvotes.
     * @example
     * // Create many QuestionUpvotes
     * const questionUpvote = await prisma.questionUpvote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionUpvoteCreateManyArgs>(args?: SelectSubset<T, QuestionUpvoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionUpvotes and returns the data saved in the database.
     * @param {QuestionUpvoteCreateManyAndReturnArgs} args - Arguments to create many QuestionUpvotes.
     * @example
     * // Create many QuestionUpvotes
     * const questionUpvote = await prisma.questionUpvote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionUpvotes and only return the `questionId`
     * const questionUpvoteWithQuestionIdOnly = await prisma.questionUpvote.createManyAndReturn({
     *   select: { questionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionUpvoteCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionUpvoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionUpvotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestionUpvote.
     * @param {QuestionUpvoteDeleteArgs} args - Arguments to delete one QuestionUpvote.
     * @example
     * // Delete one QuestionUpvote
     * const QuestionUpvote = await prisma.questionUpvote.delete({
     *   where: {
     *     // ... filter to delete one QuestionUpvote
     *   }
     * })
     * 
     */
    delete<T extends QuestionUpvoteDeleteArgs>(args: SelectSubset<T, QuestionUpvoteDeleteArgs<ExtArgs>>): Prisma__QuestionUpvoteClient<$Result.GetResult<Prisma.$QuestionUpvotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionUpvote.
     * @param {QuestionUpvoteUpdateArgs} args - Arguments to update one QuestionUpvote.
     * @example
     * // Update one QuestionUpvote
     * const questionUpvote = await prisma.questionUpvote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpvoteUpdateArgs>(args: SelectSubset<T, QuestionUpvoteUpdateArgs<ExtArgs>>): Prisma__QuestionUpvoteClient<$Result.GetResult<Prisma.$QuestionUpvotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionUpvotes.
     * @param {QuestionUpvoteDeleteManyArgs} args - Arguments to filter QuestionUpvotes to delete.
     * @example
     * // Delete a few QuestionUpvotes
     * const { count } = await prisma.questionUpvote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionUpvoteDeleteManyArgs>(args?: SelectSubset<T, QuestionUpvoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionUpvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpvoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionUpvotes
     * const questionUpvote = await prisma.questionUpvote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpvoteUpdateManyArgs>(args: SelectSubset<T, QuestionUpvoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionUpvotes and returns the data updated in the database.
     * @param {QuestionUpvoteUpdateManyAndReturnArgs} args - Arguments to update many QuestionUpvotes.
     * @example
     * // Update many QuestionUpvotes
     * const questionUpvote = await prisma.questionUpvote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestionUpvotes and only return the `questionId`
     * const questionUpvoteWithQuestionIdOnly = await prisma.questionUpvote.updateManyAndReturn({
     *   select: { questionId: true },
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
    updateManyAndReturn<T extends QuestionUpvoteUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpvoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionUpvotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestionUpvote.
     * @param {QuestionUpvoteUpsertArgs} args - Arguments to update or create a QuestionUpvote.
     * @example
     * // Update or create a QuestionUpvote
     * const questionUpvote = await prisma.questionUpvote.upsert({
     *   create: {
     *     // ... data to create a QuestionUpvote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionUpvote we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpvoteUpsertArgs>(args: SelectSubset<T, QuestionUpvoteUpsertArgs<ExtArgs>>): Prisma__QuestionUpvoteClient<$Result.GetResult<Prisma.$QuestionUpvotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionUpvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpvoteCountArgs} args - Arguments to filter QuestionUpvotes to count.
     * @example
     * // Count the number of QuestionUpvotes
     * const count = await prisma.questionUpvote.count({
     *   where: {
     *     // ... the filter for the QuestionUpvotes we want to count
     *   }
     * })
    **/
    count<T extends QuestionUpvoteCountArgs>(
      args?: Subset<T, QuestionUpvoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionUpvoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionUpvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpvoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionUpvoteAggregateArgs>(args: Subset<T, QuestionUpvoteAggregateArgs>): Prisma.PrismaPromise<GetQuestionUpvoteAggregateType<T>>

    /**
     * Group by QuestionUpvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpvoteGroupByArgs} args - Group by arguments.
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
      T extends QuestionUpvoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionUpvoteGroupByArgs['orderBy'] }
        : { orderBy?: QuestionUpvoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionUpvoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionUpvoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionUpvote model
   */
  readonly fields: QuestionUpvoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionUpvote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionUpvoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuestionUpvote model
   */
  interface QuestionUpvoteFieldRefs {
    readonly questionId: FieldRef<"QuestionUpvote", 'String'>
    readonly authorId: FieldRef<"QuestionUpvote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuestionUpvote findUnique
   */
  export type QuestionUpvoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionUpvote
     */
    select?: QuestionUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionUpvote
     */
    omit?: QuestionUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionUpvoteInclude<ExtArgs> | null
    /**
     * Filter, which QuestionUpvote to fetch.
     */
    where: QuestionUpvoteWhereUniqueInput
  }

  /**
   * QuestionUpvote findUniqueOrThrow
   */
  export type QuestionUpvoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionUpvote
     */
    select?: QuestionUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionUpvote
     */
    omit?: QuestionUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionUpvoteInclude<ExtArgs> | null
    /**
     * Filter, which QuestionUpvote to fetch.
     */
    where: QuestionUpvoteWhereUniqueInput
  }

  /**
   * QuestionUpvote findFirst
   */
  export type QuestionUpvoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionUpvote
     */
    select?: QuestionUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionUpvote
     */
    omit?: QuestionUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionUpvoteInclude<ExtArgs> | null
    /**
     * Filter, which QuestionUpvote to fetch.
     */
    where?: QuestionUpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionUpvotes to fetch.
     */
    orderBy?: QuestionUpvoteOrderByWithRelationInput | QuestionUpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionUpvotes.
     */
    cursor?: QuestionUpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionUpvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionUpvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionUpvotes.
     */
    distinct?: QuestionUpvoteScalarFieldEnum | QuestionUpvoteScalarFieldEnum[]
  }

  /**
   * QuestionUpvote findFirstOrThrow
   */
  export type QuestionUpvoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionUpvote
     */
    select?: QuestionUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionUpvote
     */
    omit?: QuestionUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionUpvoteInclude<ExtArgs> | null
    /**
     * Filter, which QuestionUpvote to fetch.
     */
    where?: QuestionUpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionUpvotes to fetch.
     */
    orderBy?: QuestionUpvoteOrderByWithRelationInput | QuestionUpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionUpvotes.
     */
    cursor?: QuestionUpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionUpvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionUpvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionUpvotes.
     */
    distinct?: QuestionUpvoteScalarFieldEnum | QuestionUpvoteScalarFieldEnum[]
  }

  /**
   * QuestionUpvote findMany
   */
  export type QuestionUpvoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionUpvote
     */
    select?: QuestionUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionUpvote
     */
    omit?: QuestionUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionUpvoteInclude<ExtArgs> | null
    /**
     * Filter, which QuestionUpvotes to fetch.
     */
    where?: QuestionUpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionUpvotes to fetch.
     */
    orderBy?: QuestionUpvoteOrderByWithRelationInput | QuestionUpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionUpvotes.
     */
    cursor?: QuestionUpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionUpvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionUpvotes.
     */
    skip?: number
    distinct?: QuestionUpvoteScalarFieldEnum | QuestionUpvoteScalarFieldEnum[]
  }

  /**
   * QuestionUpvote create
   */
  export type QuestionUpvoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionUpvote
     */
    select?: QuestionUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionUpvote
     */
    omit?: QuestionUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionUpvoteInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionUpvote.
     */
    data: XOR<QuestionUpvoteCreateInput, QuestionUpvoteUncheckedCreateInput>
  }

  /**
   * QuestionUpvote createMany
   */
  export type QuestionUpvoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionUpvotes.
     */
    data: QuestionUpvoteCreateManyInput | QuestionUpvoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionUpvote createManyAndReturn
   */
  export type QuestionUpvoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionUpvote
     */
    select?: QuestionUpvoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionUpvote
     */
    omit?: QuestionUpvoteOmit<ExtArgs> | null
    /**
     * The data used to create many QuestionUpvotes.
     */
    data: QuestionUpvoteCreateManyInput | QuestionUpvoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionUpvoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionUpvote update
   */
  export type QuestionUpvoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionUpvote
     */
    select?: QuestionUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionUpvote
     */
    omit?: QuestionUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionUpvoteInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionUpvote.
     */
    data: XOR<QuestionUpvoteUpdateInput, QuestionUpvoteUncheckedUpdateInput>
    /**
     * Choose, which QuestionUpvote to update.
     */
    where: QuestionUpvoteWhereUniqueInput
  }

  /**
   * QuestionUpvote updateMany
   */
  export type QuestionUpvoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionUpvotes.
     */
    data: XOR<QuestionUpvoteUpdateManyMutationInput, QuestionUpvoteUncheckedUpdateManyInput>
    /**
     * Filter which QuestionUpvotes to update
     */
    where?: QuestionUpvoteWhereInput
    /**
     * Limit how many QuestionUpvotes to update.
     */
    limit?: number
  }

  /**
   * QuestionUpvote updateManyAndReturn
   */
  export type QuestionUpvoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionUpvote
     */
    select?: QuestionUpvoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionUpvote
     */
    omit?: QuestionUpvoteOmit<ExtArgs> | null
    /**
     * The data used to update QuestionUpvotes.
     */
    data: XOR<QuestionUpvoteUpdateManyMutationInput, QuestionUpvoteUncheckedUpdateManyInput>
    /**
     * Filter which QuestionUpvotes to update
     */
    where?: QuestionUpvoteWhereInput
    /**
     * Limit how many QuestionUpvotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionUpvoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionUpvote upsert
   */
  export type QuestionUpvoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionUpvote
     */
    select?: QuestionUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionUpvote
     */
    omit?: QuestionUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionUpvoteInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionUpvote to update in case it exists.
     */
    where: QuestionUpvoteWhereUniqueInput
    /**
     * In case the QuestionUpvote found by the `where` argument doesn't exist, create a new QuestionUpvote with this data.
     */
    create: XOR<QuestionUpvoteCreateInput, QuestionUpvoteUncheckedCreateInput>
    /**
     * In case the QuestionUpvote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpvoteUpdateInput, QuestionUpvoteUncheckedUpdateInput>
  }

  /**
   * QuestionUpvote delete
   */
  export type QuestionUpvoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionUpvote
     */
    select?: QuestionUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionUpvote
     */
    omit?: QuestionUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionUpvoteInclude<ExtArgs> | null
    /**
     * Filter which QuestionUpvote to delete.
     */
    where: QuestionUpvoteWhereUniqueInput
  }

  /**
   * QuestionUpvote deleteMany
   */
  export type QuestionUpvoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionUpvotes to delete
     */
    where?: QuestionUpvoteWhereInput
    /**
     * Limit how many QuestionUpvotes to delete.
     */
    limit?: number
  }

  /**
   * QuestionUpvote without action
   */
  export type QuestionUpvoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionUpvote
     */
    select?: QuestionUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionUpvote
     */
    omit?: QuestionUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionUpvoteInclude<ExtArgs> | null
  }


  /**
   * Model Poll
   */

  export type AggregatePoll = {
    _count: PollCountAggregateOutputType | null
    _min: PollMinAggregateOutputType | null
    _max: PollMaxAggregateOutputType | null
  }

  export type PollMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    body: string | null
    isLive: boolean | null
    eventId: string | null
  }

  export type PollMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    body: string | null
    isLive: boolean | null
    eventId: string | null
  }

  export type PollCountAggregateOutputType = {
    id: number
    createdAt: number
    body: number
    isLive: number
    eventId: number
    _all: number
  }


  export type PollMinAggregateInputType = {
    id?: true
    createdAt?: true
    body?: true
    isLive?: true
    eventId?: true
  }

  export type PollMaxAggregateInputType = {
    id?: true
    createdAt?: true
    body?: true
    isLive?: true
    eventId?: true
  }

  export type PollCountAggregateInputType = {
    id?: true
    createdAt?: true
    body?: true
    isLive?: true
    eventId?: true
    _all?: true
  }

  export type PollAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Poll to aggregate.
     */
    where?: PollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Polls to fetch.
     */
    orderBy?: PollOrderByWithRelationInput | PollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Polls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Polls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Polls
    **/
    _count?: true | PollCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PollMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PollMaxAggregateInputType
  }

  export type GetPollAggregateType<T extends PollAggregateArgs> = {
        [P in keyof T & keyof AggregatePoll]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoll[P]>
      : GetScalarType<T[P], AggregatePoll[P]>
  }




  export type PollGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PollWhereInput
    orderBy?: PollOrderByWithAggregationInput | PollOrderByWithAggregationInput[]
    by: PollScalarFieldEnum[] | PollScalarFieldEnum
    having?: PollScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PollCountAggregateInputType | true
    _min?: PollMinAggregateInputType
    _max?: PollMaxAggregateInputType
  }

  export type PollGroupByOutputType = {
    id: string
    createdAt: Date
    body: string
    isLive: boolean
    eventId: string
    _count: PollCountAggregateOutputType | null
    _min: PollMinAggregateOutputType | null
    _max: PollMaxAggregateOutputType | null
  }

  type GetPollGroupByPayload<T extends PollGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PollGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PollGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PollGroupByOutputType[P]>
            : GetScalarType<T[P], PollGroupByOutputType[P]>
        }
      >
    >


  export type PollSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    body?: boolean
    isLive?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    options?: boolean | Poll$optionsArgs<ExtArgs>
    votes?: boolean | Poll$votesArgs<ExtArgs>
    _count?: boolean | PollCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poll"]>

  export type PollSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    body?: boolean
    isLive?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poll"]>

  export type PollSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    body?: boolean
    isLive?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poll"]>

  export type PollSelectScalar = {
    id?: boolean
    createdAt?: boolean
    body?: boolean
    isLive?: boolean
    eventId?: boolean
  }

  export type PollOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "body" | "isLive" | "eventId", ExtArgs["result"]["poll"]>
  export type PollInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    options?: boolean | Poll$optionsArgs<ExtArgs>
    votes?: boolean | Poll$votesArgs<ExtArgs>
    _count?: boolean | PollCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PollIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type PollIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $PollPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Poll"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      options: Prisma.$PollOptionPayload<ExtArgs>[]
      votes: Prisma.$PollVotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      body: string
      isLive: boolean
      eventId: string
    }, ExtArgs["result"]["poll"]>
    composites: {}
  }

  type PollGetPayload<S extends boolean | null | undefined | PollDefaultArgs> = $Result.GetResult<Prisma.$PollPayload, S>

  type PollCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PollFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PollCountAggregateInputType | true
    }

  export interface PollDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Poll'], meta: { name: 'Poll' } }
    /**
     * Find zero or one Poll that matches the filter.
     * @param {PollFindUniqueArgs} args - Arguments to find a Poll
     * @example
     * // Get one Poll
     * const poll = await prisma.poll.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PollFindUniqueArgs>(args: SelectSubset<T, PollFindUniqueArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Poll that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PollFindUniqueOrThrowArgs} args - Arguments to find a Poll
     * @example
     * // Get one Poll
     * const poll = await prisma.poll.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PollFindUniqueOrThrowArgs>(args: SelectSubset<T, PollFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poll that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollFindFirstArgs} args - Arguments to find a Poll
     * @example
     * // Get one Poll
     * const poll = await prisma.poll.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PollFindFirstArgs>(args?: SelectSubset<T, PollFindFirstArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poll that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollFindFirstOrThrowArgs} args - Arguments to find a Poll
     * @example
     * // Get one Poll
     * const poll = await prisma.poll.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PollFindFirstOrThrowArgs>(args?: SelectSubset<T, PollFindFirstOrThrowArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Polls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Polls
     * const polls = await prisma.poll.findMany()
     * 
     * // Get first 10 Polls
     * const polls = await prisma.poll.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pollWithIdOnly = await prisma.poll.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PollFindManyArgs>(args?: SelectSubset<T, PollFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Poll.
     * @param {PollCreateArgs} args - Arguments to create a Poll.
     * @example
     * // Create one Poll
     * const Poll = await prisma.poll.create({
     *   data: {
     *     // ... data to create a Poll
     *   }
     * })
     * 
     */
    create<T extends PollCreateArgs>(args: SelectSubset<T, PollCreateArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Polls.
     * @param {PollCreateManyArgs} args - Arguments to create many Polls.
     * @example
     * // Create many Polls
     * const poll = await prisma.poll.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PollCreateManyArgs>(args?: SelectSubset<T, PollCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Polls and returns the data saved in the database.
     * @param {PollCreateManyAndReturnArgs} args - Arguments to create many Polls.
     * @example
     * // Create many Polls
     * const poll = await prisma.poll.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Polls and only return the `id`
     * const pollWithIdOnly = await prisma.poll.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PollCreateManyAndReturnArgs>(args?: SelectSubset<T, PollCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Poll.
     * @param {PollDeleteArgs} args - Arguments to delete one Poll.
     * @example
     * // Delete one Poll
     * const Poll = await prisma.poll.delete({
     *   where: {
     *     // ... filter to delete one Poll
     *   }
     * })
     * 
     */
    delete<T extends PollDeleteArgs>(args: SelectSubset<T, PollDeleteArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Poll.
     * @param {PollUpdateArgs} args - Arguments to update one Poll.
     * @example
     * // Update one Poll
     * const poll = await prisma.poll.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PollUpdateArgs>(args: SelectSubset<T, PollUpdateArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Polls.
     * @param {PollDeleteManyArgs} args - Arguments to filter Polls to delete.
     * @example
     * // Delete a few Polls
     * const { count } = await prisma.poll.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PollDeleteManyArgs>(args?: SelectSubset<T, PollDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Polls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Polls
     * const poll = await prisma.poll.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PollUpdateManyArgs>(args: SelectSubset<T, PollUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Polls and returns the data updated in the database.
     * @param {PollUpdateManyAndReturnArgs} args - Arguments to update many Polls.
     * @example
     * // Update many Polls
     * const poll = await prisma.poll.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Polls and only return the `id`
     * const pollWithIdOnly = await prisma.poll.updateManyAndReturn({
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
    updateManyAndReturn<T extends PollUpdateManyAndReturnArgs>(args: SelectSubset<T, PollUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Poll.
     * @param {PollUpsertArgs} args - Arguments to update or create a Poll.
     * @example
     * // Update or create a Poll
     * const poll = await prisma.poll.upsert({
     *   create: {
     *     // ... data to create a Poll
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Poll we want to update
     *   }
     * })
     */
    upsert<T extends PollUpsertArgs>(args: SelectSubset<T, PollUpsertArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Polls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollCountArgs} args - Arguments to filter Polls to count.
     * @example
     * // Count the number of Polls
     * const count = await prisma.poll.count({
     *   where: {
     *     // ... the filter for the Polls we want to count
     *   }
     * })
    **/
    count<T extends PollCountArgs>(
      args?: Subset<T, PollCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PollCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Poll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PollAggregateArgs>(args: Subset<T, PollAggregateArgs>): Prisma.PrismaPromise<GetPollAggregateType<T>>

    /**
     * Group by Poll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollGroupByArgs} args - Group by arguments.
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
      T extends PollGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PollGroupByArgs['orderBy'] }
        : { orderBy?: PollGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PollGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPollGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Poll model
   */
  readonly fields: PollFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Poll.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PollClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends Poll$optionsArgs<ExtArgs> = {}>(args?: Subset<T, Poll$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends Poll$votesArgs<ExtArgs> = {}>(args?: Subset<T, Poll$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Poll model
   */
  interface PollFieldRefs {
    readonly id: FieldRef<"Poll", 'String'>
    readonly createdAt: FieldRef<"Poll", 'DateTime'>
    readonly body: FieldRef<"Poll", 'String'>
    readonly isLive: FieldRef<"Poll", 'Boolean'>
    readonly eventId: FieldRef<"Poll", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Poll findUnique
   */
  export type PollFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * Filter, which Poll to fetch.
     */
    where: PollWhereUniqueInput
  }

  /**
   * Poll findUniqueOrThrow
   */
  export type PollFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * Filter, which Poll to fetch.
     */
    where: PollWhereUniqueInput
  }

  /**
   * Poll findFirst
   */
  export type PollFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * Filter, which Poll to fetch.
     */
    where?: PollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Polls to fetch.
     */
    orderBy?: PollOrderByWithRelationInput | PollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Polls.
     */
    cursor?: PollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Polls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Polls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Polls.
     */
    distinct?: PollScalarFieldEnum | PollScalarFieldEnum[]
  }

  /**
   * Poll findFirstOrThrow
   */
  export type PollFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * Filter, which Poll to fetch.
     */
    where?: PollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Polls to fetch.
     */
    orderBy?: PollOrderByWithRelationInput | PollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Polls.
     */
    cursor?: PollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Polls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Polls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Polls.
     */
    distinct?: PollScalarFieldEnum | PollScalarFieldEnum[]
  }

  /**
   * Poll findMany
   */
  export type PollFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * Filter, which Polls to fetch.
     */
    where?: PollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Polls to fetch.
     */
    orderBy?: PollOrderByWithRelationInput | PollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Polls.
     */
    cursor?: PollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Polls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Polls.
     */
    skip?: number
    distinct?: PollScalarFieldEnum | PollScalarFieldEnum[]
  }

  /**
   * Poll create
   */
  export type PollCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * The data needed to create a Poll.
     */
    data: XOR<PollCreateInput, PollUncheckedCreateInput>
  }

  /**
   * Poll createMany
   */
  export type PollCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Polls.
     */
    data: PollCreateManyInput | PollCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Poll createManyAndReturn
   */
  export type PollCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * The data used to create many Polls.
     */
    data: PollCreateManyInput | PollCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Poll update
   */
  export type PollUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * The data needed to update a Poll.
     */
    data: XOR<PollUpdateInput, PollUncheckedUpdateInput>
    /**
     * Choose, which Poll to update.
     */
    where: PollWhereUniqueInput
  }

  /**
   * Poll updateMany
   */
  export type PollUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Polls.
     */
    data: XOR<PollUpdateManyMutationInput, PollUncheckedUpdateManyInput>
    /**
     * Filter which Polls to update
     */
    where?: PollWhereInput
    /**
     * Limit how many Polls to update.
     */
    limit?: number
  }

  /**
   * Poll updateManyAndReturn
   */
  export type PollUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * The data used to update Polls.
     */
    data: XOR<PollUpdateManyMutationInput, PollUncheckedUpdateManyInput>
    /**
     * Filter which Polls to update
     */
    where?: PollWhereInput
    /**
     * Limit how many Polls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Poll upsert
   */
  export type PollUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * The filter to search for the Poll to update in case it exists.
     */
    where: PollWhereUniqueInput
    /**
     * In case the Poll found by the `where` argument doesn't exist, create a new Poll with this data.
     */
    create: XOR<PollCreateInput, PollUncheckedCreateInput>
    /**
     * In case the Poll was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PollUpdateInput, PollUncheckedUpdateInput>
  }

  /**
   * Poll delete
   */
  export type PollDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * Filter which Poll to delete.
     */
    where: PollWhereUniqueInput
  }

  /**
   * Poll deleteMany
   */
  export type PollDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Polls to delete
     */
    where?: PollWhereInput
    /**
     * Limit how many Polls to delete.
     */
    limit?: number
  }

  /**
   * Poll.options
   */
  export type Poll$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
    where?: PollOptionWhereInput
    orderBy?: PollOptionOrderByWithRelationInput | PollOptionOrderByWithRelationInput[]
    cursor?: PollOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PollOptionScalarFieldEnum | PollOptionScalarFieldEnum[]
  }

  /**
   * Poll.votes
   */
  export type Poll$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollVote
     */
    select?: PollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollVote
     */
    omit?: PollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollVoteInclude<ExtArgs> | null
    where?: PollVoteWhereInput
    orderBy?: PollVoteOrderByWithRelationInput | PollVoteOrderByWithRelationInput[]
    cursor?: PollVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PollVoteScalarFieldEnum | PollVoteScalarFieldEnum[]
  }

  /**
   * Poll without action
   */
  export type PollDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
  }


  /**
   * Model PollOption
   */

  export type AggregatePollOption = {
    _count: PollOptionCountAggregateOutputType | null
    _avg: PollOptionAvgAggregateOutputType | null
    _sum: PollOptionSumAggregateOutputType | null
    _min: PollOptionMinAggregateOutputType | null
    _max: PollOptionMaxAggregateOutputType | null
  }

  export type PollOptionAvgAggregateOutputType = {
    index: number | null
  }

  export type PollOptionSumAggregateOutputType = {
    index: number | null
  }

  export type PollOptionMinAggregateOutputType = {
    id: string | null
    index: number | null
    body: string | null
    pollId: string | null
  }

  export type PollOptionMaxAggregateOutputType = {
    id: string | null
    index: number | null
    body: string | null
    pollId: string | null
  }

  export type PollOptionCountAggregateOutputType = {
    id: number
    index: number
    body: number
    pollId: number
    _all: number
  }


  export type PollOptionAvgAggregateInputType = {
    index?: true
  }

  export type PollOptionSumAggregateInputType = {
    index?: true
  }

  export type PollOptionMinAggregateInputType = {
    id?: true
    index?: true
    body?: true
    pollId?: true
  }

  export type PollOptionMaxAggregateInputType = {
    id?: true
    index?: true
    body?: true
    pollId?: true
  }

  export type PollOptionCountAggregateInputType = {
    id?: true
    index?: true
    body?: true
    pollId?: true
    _all?: true
  }

  export type PollOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PollOption to aggregate.
     */
    where?: PollOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PollOptions to fetch.
     */
    orderBy?: PollOptionOrderByWithRelationInput | PollOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PollOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PollOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PollOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PollOptions
    **/
    _count?: true | PollOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PollOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PollOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PollOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PollOptionMaxAggregateInputType
  }

  export type GetPollOptionAggregateType<T extends PollOptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePollOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePollOption[P]>
      : GetScalarType<T[P], AggregatePollOption[P]>
  }




  export type PollOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PollOptionWhereInput
    orderBy?: PollOptionOrderByWithAggregationInput | PollOptionOrderByWithAggregationInput[]
    by: PollOptionScalarFieldEnum[] | PollOptionScalarFieldEnum
    having?: PollOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PollOptionCountAggregateInputType | true
    _avg?: PollOptionAvgAggregateInputType
    _sum?: PollOptionSumAggregateInputType
    _min?: PollOptionMinAggregateInputType
    _max?: PollOptionMaxAggregateInputType
  }

  export type PollOptionGroupByOutputType = {
    id: string
    index: number
    body: string
    pollId: string
    _count: PollOptionCountAggregateOutputType | null
    _avg: PollOptionAvgAggregateOutputType | null
    _sum: PollOptionSumAggregateOutputType | null
    _min: PollOptionMinAggregateOutputType | null
    _max: PollOptionMaxAggregateOutputType | null
  }

  type GetPollOptionGroupByPayload<T extends PollOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PollOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PollOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PollOptionGroupByOutputType[P]>
            : GetScalarType<T[P], PollOptionGroupByOutputType[P]>
        }
      >
    >


  export type PollOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    index?: boolean
    body?: boolean
    pollId?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
    votes?: boolean | PollOption$votesArgs<ExtArgs>
    _count?: boolean | PollOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pollOption"]>

  export type PollOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    index?: boolean
    body?: boolean
    pollId?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pollOption"]>

  export type PollOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    index?: boolean
    body?: boolean
    pollId?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pollOption"]>

  export type PollOptionSelectScalar = {
    id?: boolean
    index?: boolean
    body?: boolean
    pollId?: boolean
  }

  export type PollOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "index" | "body" | "pollId", ExtArgs["result"]["pollOption"]>
  export type PollOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
    votes?: boolean | PollOption$votesArgs<ExtArgs>
    _count?: boolean | PollOptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PollOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }
  export type PollOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }

  export type $PollOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PollOption"
    objects: {
      poll: Prisma.$PollPayload<ExtArgs>
      votes: Prisma.$PollVotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      index: number
      body: string
      pollId: string
    }, ExtArgs["result"]["pollOption"]>
    composites: {}
  }

  type PollOptionGetPayload<S extends boolean | null | undefined | PollOptionDefaultArgs> = $Result.GetResult<Prisma.$PollOptionPayload, S>

  type PollOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PollOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PollOptionCountAggregateInputType | true
    }

  export interface PollOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PollOption'], meta: { name: 'PollOption' } }
    /**
     * Find zero or one PollOption that matches the filter.
     * @param {PollOptionFindUniqueArgs} args - Arguments to find a PollOption
     * @example
     * // Get one PollOption
     * const pollOption = await prisma.pollOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PollOptionFindUniqueArgs>(args: SelectSubset<T, PollOptionFindUniqueArgs<ExtArgs>>): Prisma__PollOptionClient<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PollOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PollOptionFindUniqueOrThrowArgs} args - Arguments to find a PollOption
     * @example
     * // Get one PollOption
     * const pollOption = await prisma.pollOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PollOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PollOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PollOptionClient<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PollOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollOptionFindFirstArgs} args - Arguments to find a PollOption
     * @example
     * // Get one PollOption
     * const pollOption = await prisma.pollOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PollOptionFindFirstArgs>(args?: SelectSubset<T, PollOptionFindFirstArgs<ExtArgs>>): Prisma__PollOptionClient<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PollOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollOptionFindFirstOrThrowArgs} args - Arguments to find a PollOption
     * @example
     * // Get one PollOption
     * const pollOption = await prisma.pollOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PollOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PollOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PollOptionClient<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PollOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PollOptions
     * const pollOptions = await prisma.pollOption.findMany()
     * 
     * // Get first 10 PollOptions
     * const pollOptions = await prisma.pollOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pollOptionWithIdOnly = await prisma.pollOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PollOptionFindManyArgs>(args?: SelectSubset<T, PollOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PollOption.
     * @param {PollOptionCreateArgs} args - Arguments to create a PollOption.
     * @example
     * // Create one PollOption
     * const PollOption = await prisma.pollOption.create({
     *   data: {
     *     // ... data to create a PollOption
     *   }
     * })
     * 
     */
    create<T extends PollOptionCreateArgs>(args: SelectSubset<T, PollOptionCreateArgs<ExtArgs>>): Prisma__PollOptionClient<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PollOptions.
     * @param {PollOptionCreateManyArgs} args - Arguments to create many PollOptions.
     * @example
     * // Create many PollOptions
     * const pollOption = await prisma.pollOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PollOptionCreateManyArgs>(args?: SelectSubset<T, PollOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PollOptions and returns the data saved in the database.
     * @param {PollOptionCreateManyAndReturnArgs} args - Arguments to create many PollOptions.
     * @example
     * // Create many PollOptions
     * const pollOption = await prisma.pollOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PollOptions and only return the `id`
     * const pollOptionWithIdOnly = await prisma.pollOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PollOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, PollOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PollOption.
     * @param {PollOptionDeleteArgs} args - Arguments to delete one PollOption.
     * @example
     * // Delete one PollOption
     * const PollOption = await prisma.pollOption.delete({
     *   where: {
     *     // ... filter to delete one PollOption
     *   }
     * })
     * 
     */
    delete<T extends PollOptionDeleteArgs>(args: SelectSubset<T, PollOptionDeleteArgs<ExtArgs>>): Prisma__PollOptionClient<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PollOption.
     * @param {PollOptionUpdateArgs} args - Arguments to update one PollOption.
     * @example
     * // Update one PollOption
     * const pollOption = await prisma.pollOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PollOptionUpdateArgs>(args: SelectSubset<T, PollOptionUpdateArgs<ExtArgs>>): Prisma__PollOptionClient<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PollOptions.
     * @param {PollOptionDeleteManyArgs} args - Arguments to filter PollOptions to delete.
     * @example
     * // Delete a few PollOptions
     * const { count } = await prisma.pollOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PollOptionDeleteManyArgs>(args?: SelectSubset<T, PollOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PollOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PollOptions
     * const pollOption = await prisma.pollOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PollOptionUpdateManyArgs>(args: SelectSubset<T, PollOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PollOptions and returns the data updated in the database.
     * @param {PollOptionUpdateManyAndReturnArgs} args - Arguments to update many PollOptions.
     * @example
     * // Update many PollOptions
     * const pollOption = await prisma.pollOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PollOptions and only return the `id`
     * const pollOptionWithIdOnly = await prisma.pollOption.updateManyAndReturn({
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
    updateManyAndReturn<T extends PollOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, PollOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PollOption.
     * @param {PollOptionUpsertArgs} args - Arguments to update or create a PollOption.
     * @example
     * // Update or create a PollOption
     * const pollOption = await prisma.pollOption.upsert({
     *   create: {
     *     // ... data to create a PollOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PollOption we want to update
     *   }
     * })
     */
    upsert<T extends PollOptionUpsertArgs>(args: SelectSubset<T, PollOptionUpsertArgs<ExtArgs>>): Prisma__PollOptionClient<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PollOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollOptionCountArgs} args - Arguments to filter PollOptions to count.
     * @example
     * // Count the number of PollOptions
     * const count = await prisma.pollOption.count({
     *   where: {
     *     // ... the filter for the PollOptions we want to count
     *   }
     * })
    **/
    count<T extends PollOptionCountArgs>(
      args?: Subset<T, PollOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PollOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PollOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PollOptionAggregateArgs>(args: Subset<T, PollOptionAggregateArgs>): Prisma.PrismaPromise<GetPollOptionAggregateType<T>>

    /**
     * Group by PollOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollOptionGroupByArgs} args - Group by arguments.
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
      T extends PollOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PollOptionGroupByArgs['orderBy'] }
        : { orderBy?: PollOptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PollOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPollOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PollOption model
   */
  readonly fields: PollOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PollOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PollOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poll<T extends PollDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PollDefaultArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votes<T extends PollOption$votesArgs<ExtArgs> = {}>(args?: Subset<T, PollOption$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PollOption model
   */
  interface PollOptionFieldRefs {
    readonly id: FieldRef<"PollOption", 'String'>
    readonly index: FieldRef<"PollOption", 'Int'>
    readonly body: FieldRef<"PollOption", 'String'>
    readonly pollId: FieldRef<"PollOption", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PollOption findUnique
   */
  export type PollOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
    /**
     * Filter, which PollOption to fetch.
     */
    where: PollOptionWhereUniqueInput
  }

  /**
   * PollOption findUniqueOrThrow
   */
  export type PollOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
    /**
     * Filter, which PollOption to fetch.
     */
    where: PollOptionWhereUniqueInput
  }

  /**
   * PollOption findFirst
   */
  export type PollOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
    /**
     * Filter, which PollOption to fetch.
     */
    where?: PollOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PollOptions to fetch.
     */
    orderBy?: PollOptionOrderByWithRelationInput | PollOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PollOptions.
     */
    cursor?: PollOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PollOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PollOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PollOptions.
     */
    distinct?: PollOptionScalarFieldEnum | PollOptionScalarFieldEnum[]
  }

  /**
   * PollOption findFirstOrThrow
   */
  export type PollOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
    /**
     * Filter, which PollOption to fetch.
     */
    where?: PollOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PollOptions to fetch.
     */
    orderBy?: PollOptionOrderByWithRelationInput | PollOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PollOptions.
     */
    cursor?: PollOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PollOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PollOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PollOptions.
     */
    distinct?: PollOptionScalarFieldEnum | PollOptionScalarFieldEnum[]
  }

  /**
   * PollOption findMany
   */
  export type PollOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
    /**
     * Filter, which PollOptions to fetch.
     */
    where?: PollOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PollOptions to fetch.
     */
    orderBy?: PollOptionOrderByWithRelationInput | PollOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PollOptions.
     */
    cursor?: PollOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PollOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PollOptions.
     */
    skip?: number
    distinct?: PollOptionScalarFieldEnum | PollOptionScalarFieldEnum[]
  }

  /**
   * PollOption create
   */
  export type PollOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a PollOption.
     */
    data: XOR<PollOptionCreateInput, PollOptionUncheckedCreateInput>
  }

  /**
   * PollOption createMany
   */
  export type PollOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PollOptions.
     */
    data: PollOptionCreateManyInput | PollOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PollOption createManyAndReturn
   */
  export type PollOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * The data used to create many PollOptions.
     */
    data: PollOptionCreateManyInput | PollOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PollOption update
   */
  export type PollOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a PollOption.
     */
    data: XOR<PollOptionUpdateInput, PollOptionUncheckedUpdateInput>
    /**
     * Choose, which PollOption to update.
     */
    where: PollOptionWhereUniqueInput
  }

  /**
   * PollOption updateMany
   */
  export type PollOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PollOptions.
     */
    data: XOR<PollOptionUpdateManyMutationInput, PollOptionUncheckedUpdateManyInput>
    /**
     * Filter which PollOptions to update
     */
    where?: PollOptionWhereInput
    /**
     * Limit how many PollOptions to update.
     */
    limit?: number
  }

  /**
   * PollOption updateManyAndReturn
   */
  export type PollOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * The data used to update PollOptions.
     */
    data: XOR<PollOptionUpdateManyMutationInput, PollOptionUncheckedUpdateManyInput>
    /**
     * Filter which PollOptions to update
     */
    where?: PollOptionWhereInput
    /**
     * Limit how many PollOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PollOption upsert
   */
  export type PollOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the PollOption to update in case it exists.
     */
    where: PollOptionWhereUniqueInput
    /**
     * In case the PollOption found by the `where` argument doesn't exist, create a new PollOption with this data.
     */
    create: XOR<PollOptionCreateInput, PollOptionUncheckedCreateInput>
    /**
     * In case the PollOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PollOptionUpdateInput, PollOptionUncheckedUpdateInput>
  }

  /**
   * PollOption delete
   */
  export type PollOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
    /**
     * Filter which PollOption to delete.
     */
    where: PollOptionWhereUniqueInput
  }

  /**
   * PollOption deleteMany
   */
  export type PollOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PollOptions to delete
     */
    where?: PollOptionWhereInput
    /**
     * Limit how many PollOptions to delete.
     */
    limit?: number
  }

  /**
   * PollOption.votes
   */
  export type PollOption$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollVote
     */
    select?: PollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollVote
     */
    omit?: PollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollVoteInclude<ExtArgs> | null
    where?: PollVoteWhereInput
    orderBy?: PollVoteOrderByWithRelationInput | PollVoteOrderByWithRelationInput[]
    cursor?: PollVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PollVoteScalarFieldEnum | PollVoteScalarFieldEnum[]
  }

  /**
   * PollOption without action
   */
  export type PollOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
  }


  /**
   * Model PollVote
   */

  export type AggregatePollVote = {
    _count: PollVoteCountAggregateOutputType | null
    _min: PollVoteMinAggregateOutputType | null
    _max: PollVoteMaxAggregateOutputType | null
  }

  export type PollVoteMinAggregateOutputType = {
    authorId: string | null
    pollOptionId: string | null
    pollId: string | null
  }

  export type PollVoteMaxAggregateOutputType = {
    authorId: string | null
    pollOptionId: string | null
    pollId: string | null
  }

  export type PollVoteCountAggregateOutputType = {
    authorId: number
    pollOptionId: number
    pollId: number
    _all: number
  }


  export type PollVoteMinAggregateInputType = {
    authorId?: true
    pollOptionId?: true
    pollId?: true
  }

  export type PollVoteMaxAggregateInputType = {
    authorId?: true
    pollOptionId?: true
    pollId?: true
  }

  export type PollVoteCountAggregateInputType = {
    authorId?: true
    pollOptionId?: true
    pollId?: true
    _all?: true
  }

  export type PollVoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PollVote to aggregate.
     */
    where?: PollVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PollVotes to fetch.
     */
    orderBy?: PollVoteOrderByWithRelationInput | PollVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PollVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PollVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PollVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PollVotes
    **/
    _count?: true | PollVoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PollVoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PollVoteMaxAggregateInputType
  }

  export type GetPollVoteAggregateType<T extends PollVoteAggregateArgs> = {
        [P in keyof T & keyof AggregatePollVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePollVote[P]>
      : GetScalarType<T[P], AggregatePollVote[P]>
  }




  export type PollVoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PollVoteWhereInput
    orderBy?: PollVoteOrderByWithAggregationInput | PollVoteOrderByWithAggregationInput[]
    by: PollVoteScalarFieldEnum[] | PollVoteScalarFieldEnum
    having?: PollVoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PollVoteCountAggregateInputType | true
    _min?: PollVoteMinAggregateInputType
    _max?: PollVoteMaxAggregateInputType
  }

  export type PollVoteGroupByOutputType = {
    authorId: string
    pollOptionId: string
    pollId: string
    _count: PollVoteCountAggregateOutputType | null
    _min: PollVoteMinAggregateOutputType | null
    _max: PollVoteMaxAggregateOutputType | null
  }

  type GetPollVoteGroupByPayload<T extends PollVoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PollVoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PollVoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PollVoteGroupByOutputType[P]>
            : GetScalarType<T[P], PollVoteGroupByOutputType[P]>
        }
      >
    >


  export type PollVoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    authorId?: boolean
    pollOptionId?: boolean
    pollId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    pollOption?: boolean | PollOptionDefaultArgs<ExtArgs>
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pollVote"]>

  export type PollVoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    authorId?: boolean
    pollOptionId?: boolean
    pollId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    pollOption?: boolean | PollOptionDefaultArgs<ExtArgs>
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pollVote"]>

  export type PollVoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    authorId?: boolean
    pollOptionId?: boolean
    pollId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    pollOption?: boolean | PollOptionDefaultArgs<ExtArgs>
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pollVote"]>

  export type PollVoteSelectScalar = {
    authorId?: boolean
    pollOptionId?: boolean
    pollId?: boolean
  }

  export type PollVoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"authorId" | "pollOptionId" | "pollId", ExtArgs["result"]["pollVote"]>
  export type PollVoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    pollOption?: boolean | PollOptionDefaultArgs<ExtArgs>
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }
  export type PollVoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    pollOption?: boolean | PollOptionDefaultArgs<ExtArgs>
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }
  export type PollVoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    pollOption?: boolean | PollOptionDefaultArgs<ExtArgs>
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }

  export type $PollVotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PollVote"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      pollOption: Prisma.$PollOptionPayload<ExtArgs>
      poll: Prisma.$PollPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      authorId: string
      pollOptionId: string
      pollId: string
    }, ExtArgs["result"]["pollVote"]>
    composites: {}
  }

  type PollVoteGetPayload<S extends boolean | null | undefined | PollVoteDefaultArgs> = $Result.GetResult<Prisma.$PollVotePayload, S>

  type PollVoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PollVoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PollVoteCountAggregateInputType | true
    }

  export interface PollVoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PollVote'], meta: { name: 'PollVote' } }
    /**
     * Find zero or one PollVote that matches the filter.
     * @param {PollVoteFindUniqueArgs} args - Arguments to find a PollVote
     * @example
     * // Get one PollVote
     * const pollVote = await prisma.pollVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PollVoteFindUniqueArgs>(args: SelectSubset<T, PollVoteFindUniqueArgs<ExtArgs>>): Prisma__PollVoteClient<$Result.GetResult<Prisma.$PollVotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PollVote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PollVoteFindUniqueOrThrowArgs} args - Arguments to find a PollVote
     * @example
     * // Get one PollVote
     * const pollVote = await prisma.pollVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PollVoteFindUniqueOrThrowArgs>(args: SelectSubset<T, PollVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PollVoteClient<$Result.GetResult<Prisma.$PollVotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PollVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollVoteFindFirstArgs} args - Arguments to find a PollVote
     * @example
     * // Get one PollVote
     * const pollVote = await prisma.pollVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PollVoteFindFirstArgs>(args?: SelectSubset<T, PollVoteFindFirstArgs<ExtArgs>>): Prisma__PollVoteClient<$Result.GetResult<Prisma.$PollVotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PollVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollVoteFindFirstOrThrowArgs} args - Arguments to find a PollVote
     * @example
     * // Get one PollVote
     * const pollVote = await prisma.pollVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PollVoteFindFirstOrThrowArgs>(args?: SelectSubset<T, PollVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PollVoteClient<$Result.GetResult<Prisma.$PollVotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PollVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollVoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PollVotes
     * const pollVotes = await prisma.pollVote.findMany()
     * 
     * // Get first 10 PollVotes
     * const pollVotes = await prisma.pollVote.findMany({ take: 10 })
     * 
     * // Only select the `authorId`
     * const pollVoteWithAuthorIdOnly = await prisma.pollVote.findMany({ select: { authorId: true } })
     * 
     */
    findMany<T extends PollVoteFindManyArgs>(args?: SelectSubset<T, PollVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PollVote.
     * @param {PollVoteCreateArgs} args - Arguments to create a PollVote.
     * @example
     * // Create one PollVote
     * const PollVote = await prisma.pollVote.create({
     *   data: {
     *     // ... data to create a PollVote
     *   }
     * })
     * 
     */
    create<T extends PollVoteCreateArgs>(args: SelectSubset<T, PollVoteCreateArgs<ExtArgs>>): Prisma__PollVoteClient<$Result.GetResult<Prisma.$PollVotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PollVotes.
     * @param {PollVoteCreateManyArgs} args - Arguments to create many PollVotes.
     * @example
     * // Create many PollVotes
     * const pollVote = await prisma.pollVote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PollVoteCreateManyArgs>(args?: SelectSubset<T, PollVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PollVotes and returns the data saved in the database.
     * @param {PollVoteCreateManyAndReturnArgs} args - Arguments to create many PollVotes.
     * @example
     * // Create many PollVotes
     * const pollVote = await prisma.pollVote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PollVotes and only return the `authorId`
     * const pollVoteWithAuthorIdOnly = await prisma.pollVote.createManyAndReturn({
     *   select: { authorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PollVoteCreateManyAndReturnArgs>(args?: SelectSubset<T, PollVoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollVotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PollVote.
     * @param {PollVoteDeleteArgs} args - Arguments to delete one PollVote.
     * @example
     * // Delete one PollVote
     * const PollVote = await prisma.pollVote.delete({
     *   where: {
     *     // ... filter to delete one PollVote
     *   }
     * })
     * 
     */
    delete<T extends PollVoteDeleteArgs>(args: SelectSubset<T, PollVoteDeleteArgs<ExtArgs>>): Prisma__PollVoteClient<$Result.GetResult<Prisma.$PollVotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PollVote.
     * @param {PollVoteUpdateArgs} args - Arguments to update one PollVote.
     * @example
     * // Update one PollVote
     * const pollVote = await prisma.pollVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PollVoteUpdateArgs>(args: SelectSubset<T, PollVoteUpdateArgs<ExtArgs>>): Prisma__PollVoteClient<$Result.GetResult<Prisma.$PollVotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PollVotes.
     * @param {PollVoteDeleteManyArgs} args - Arguments to filter PollVotes to delete.
     * @example
     * // Delete a few PollVotes
     * const { count } = await prisma.pollVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PollVoteDeleteManyArgs>(args?: SelectSubset<T, PollVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PollVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PollVotes
     * const pollVote = await prisma.pollVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PollVoteUpdateManyArgs>(args: SelectSubset<T, PollVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PollVotes and returns the data updated in the database.
     * @param {PollVoteUpdateManyAndReturnArgs} args - Arguments to update many PollVotes.
     * @example
     * // Update many PollVotes
     * const pollVote = await prisma.pollVote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PollVotes and only return the `authorId`
     * const pollVoteWithAuthorIdOnly = await prisma.pollVote.updateManyAndReturn({
     *   select: { authorId: true },
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
    updateManyAndReturn<T extends PollVoteUpdateManyAndReturnArgs>(args: SelectSubset<T, PollVoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollVotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PollVote.
     * @param {PollVoteUpsertArgs} args - Arguments to update or create a PollVote.
     * @example
     * // Update or create a PollVote
     * const pollVote = await prisma.pollVote.upsert({
     *   create: {
     *     // ... data to create a PollVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PollVote we want to update
     *   }
     * })
     */
    upsert<T extends PollVoteUpsertArgs>(args: SelectSubset<T, PollVoteUpsertArgs<ExtArgs>>): Prisma__PollVoteClient<$Result.GetResult<Prisma.$PollVotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PollVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollVoteCountArgs} args - Arguments to filter PollVotes to count.
     * @example
     * // Count the number of PollVotes
     * const count = await prisma.pollVote.count({
     *   where: {
     *     // ... the filter for the PollVotes we want to count
     *   }
     * })
    **/
    count<T extends PollVoteCountArgs>(
      args?: Subset<T, PollVoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PollVoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PollVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PollVoteAggregateArgs>(args: Subset<T, PollVoteAggregateArgs>): Prisma.PrismaPromise<GetPollVoteAggregateType<T>>

    /**
     * Group by PollVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollVoteGroupByArgs} args - Group by arguments.
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
      T extends PollVoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PollVoteGroupByArgs['orderBy'] }
        : { orderBy?: PollVoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PollVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPollVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PollVote model
   */
  readonly fields: PollVoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PollVote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PollVoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pollOption<T extends PollOptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PollOptionDefaultArgs<ExtArgs>>): Prisma__PollOptionClient<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    poll<T extends PollDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PollDefaultArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PollVote model
   */
  interface PollVoteFieldRefs {
    readonly authorId: FieldRef<"PollVote", 'String'>
    readonly pollOptionId: FieldRef<"PollVote", 'String'>
    readonly pollId: FieldRef<"PollVote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PollVote findUnique
   */
  export type PollVoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollVote
     */
    select?: PollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollVote
     */
    omit?: PollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollVoteInclude<ExtArgs> | null
    /**
     * Filter, which PollVote to fetch.
     */
    where: PollVoteWhereUniqueInput
  }

  /**
   * PollVote findUniqueOrThrow
   */
  export type PollVoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollVote
     */
    select?: PollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollVote
     */
    omit?: PollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollVoteInclude<ExtArgs> | null
    /**
     * Filter, which PollVote to fetch.
     */
    where: PollVoteWhereUniqueInput
  }

  /**
   * PollVote findFirst
   */
  export type PollVoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollVote
     */
    select?: PollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollVote
     */
    omit?: PollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollVoteInclude<ExtArgs> | null
    /**
     * Filter, which PollVote to fetch.
     */
    where?: PollVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PollVotes to fetch.
     */
    orderBy?: PollVoteOrderByWithRelationInput | PollVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PollVotes.
     */
    cursor?: PollVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PollVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PollVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PollVotes.
     */
    distinct?: PollVoteScalarFieldEnum | PollVoteScalarFieldEnum[]
  }

  /**
   * PollVote findFirstOrThrow
   */
  export type PollVoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollVote
     */
    select?: PollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollVote
     */
    omit?: PollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollVoteInclude<ExtArgs> | null
    /**
     * Filter, which PollVote to fetch.
     */
    where?: PollVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PollVotes to fetch.
     */
    orderBy?: PollVoteOrderByWithRelationInput | PollVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PollVotes.
     */
    cursor?: PollVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PollVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PollVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PollVotes.
     */
    distinct?: PollVoteScalarFieldEnum | PollVoteScalarFieldEnum[]
  }

  /**
   * PollVote findMany
   */
  export type PollVoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollVote
     */
    select?: PollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollVote
     */
    omit?: PollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollVoteInclude<ExtArgs> | null
    /**
     * Filter, which PollVotes to fetch.
     */
    where?: PollVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PollVotes to fetch.
     */
    orderBy?: PollVoteOrderByWithRelationInput | PollVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PollVotes.
     */
    cursor?: PollVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PollVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PollVotes.
     */
    skip?: number
    distinct?: PollVoteScalarFieldEnum | PollVoteScalarFieldEnum[]
  }

  /**
   * PollVote create
   */
  export type PollVoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollVote
     */
    select?: PollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollVote
     */
    omit?: PollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollVoteInclude<ExtArgs> | null
    /**
     * The data needed to create a PollVote.
     */
    data: XOR<PollVoteCreateInput, PollVoteUncheckedCreateInput>
  }

  /**
   * PollVote createMany
   */
  export type PollVoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PollVotes.
     */
    data: PollVoteCreateManyInput | PollVoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PollVote createManyAndReturn
   */
  export type PollVoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollVote
     */
    select?: PollVoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PollVote
     */
    omit?: PollVoteOmit<ExtArgs> | null
    /**
     * The data used to create many PollVotes.
     */
    data: PollVoteCreateManyInput | PollVoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollVoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PollVote update
   */
  export type PollVoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollVote
     */
    select?: PollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollVote
     */
    omit?: PollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollVoteInclude<ExtArgs> | null
    /**
     * The data needed to update a PollVote.
     */
    data: XOR<PollVoteUpdateInput, PollVoteUncheckedUpdateInput>
    /**
     * Choose, which PollVote to update.
     */
    where: PollVoteWhereUniqueInput
  }

  /**
   * PollVote updateMany
   */
  export type PollVoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PollVotes.
     */
    data: XOR<PollVoteUpdateManyMutationInput, PollVoteUncheckedUpdateManyInput>
    /**
     * Filter which PollVotes to update
     */
    where?: PollVoteWhereInput
    /**
     * Limit how many PollVotes to update.
     */
    limit?: number
  }

  /**
   * PollVote updateManyAndReturn
   */
  export type PollVoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollVote
     */
    select?: PollVoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PollVote
     */
    omit?: PollVoteOmit<ExtArgs> | null
    /**
     * The data used to update PollVotes.
     */
    data: XOR<PollVoteUpdateManyMutationInput, PollVoteUncheckedUpdateManyInput>
    /**
     * Filter which PollVotes to update
     */
    where?: PollVoteWhereInput
    /**
     * Limit how many PollVotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollVoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PollVote upsert
   */
  export type PollVoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollVote
     */
    select?: PollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollVote
     */
    omit?: PollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollVoteInclude<ExtArgs> | null
    /**
     * The filter to search for the PollVote to update in case it exists.
     */
    where: PollVoteWhereUniqueInput
    /**
     * In case the PollVote found by the `where` argument doesn't exist, create a new PollVote with this data.
     */
    create: XOR<PollVoteCreateInput, PollVoteUncheckedCreateInput>
    /**
     * In case the PollVote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PollVoteUpdateInput, PollVoteUncheckedUpdateInput>
  }

  /**
   * PollVote delete
   */
  export type PollVoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollVote
     */
    select?: PollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollVote
     */
    omit?: PollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollVoteInclude<ExtArgs> | null
    /**
     * Filter which PollVote to delete.
     */
    where: PollVoteWhereUniqueInput
  }

  /**
   * PollVote deleteMany
   */
  export type PollVoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PollVotes to delete
     */
    where?: PollVoteWhereInput
    /**
     * Limit how many PollVotes to delete.
     */
    limit?: number
  }

  /**
   * PollVote without action
   */
  export type PollVoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollVote
     */
    select?: PollVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollVote
     */
    omit?: PollVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollVoteInclude<ExtArgs> | null
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
    email: 'email',
    createdAt: 'createdAt',
    displayName: 'displayName',
    color: 'color'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    displayName: 'displayName',
    slug: 'slug',
    createdAt: 'createdAt',
    ownerId: 'ownerId'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventParticipantScalarFieldEnum: {
    eventId: 'eventId',
    userId: 'userId'
  };

  export type EventParticipantScalarFieldEnum = (typeof EventParticipantScalarFieldEnum)[keyof typeof EventParticipantScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    body: 'body',
    isPinned: 'isPinned',
    isResolved: 'isResolved',
    eventId: 'eventId',
    userId: 'userId'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const QuestionUpvoteScalarFieldEnum: {
    questionId: 'questionId',
    authorId: 'authorId'
  };

  export type QuestionUpvoteScalarFieldEnum = (typeof QuestionUpvoteScalarFieldEnum)[keyof typeof QuestionUpvoteScalarFieldEnum]


  export const PollScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    body: 'body',
    isLive: 'isLive',
    eventId: 'eventId'
  };

  export type PollScalarFieldEnum = (typeof PollScalarFieldEnum)[keyof typeof PollScalarFieldEnum]


  export const PollOptionScalarFieldEnum: {
    id: 'id',
    index: 'index',
    body: 'body',
    pollId: 'pollId'
  };

  export type PollOptionScalarFieldEnum = (typeof PollOptionScalarFieldEnum)[keyof typeof PollOptionScalarFieldEnum]


  export const PollVoteScalarFieldEnum: {
    authorId: 'authorId',
    pollOptionId: 'pollOptionId',
    pollId: 'pollId'
  };

  export type PollVoteScalarFieldEnum = (typeof PollVoteScalarFieldEnum)[keyof typeof PollVoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    displayName?: StringFilter<"User"> | string
    color?: StringFilter<"User"> | string
    events?: EventListRelationFilter
    participations?: EventParticipantListRelationFilter
    questions?: QuestionListRelationFilter
    upvotes?: QuestionUpvoteListRelationFilter
    votes?: PollVoteListRelationFilter
    bookMarks?: EventListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    displayName?: SortOrder
    color?: SortOrder
    events?: EventOrderByRelationAggregateInput
    participations?: EventParticipantOrderByRelationAggregateInput
    questions?: QuestionOrderByRelationAggregateInput
    upvotes?: QuestionUpvoteOrderByRelationAggregateInput
    votes?: PollVoteOrderByRelationAggregateInput
    bookMarks?: EventOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    displayName?: StringFilter<"User"> | string
    color?: StringFilter<"User"> | string
    events?: EventListRelationFilter
    participations?: EventParticipantListRelationFilter
    questions?: QuestionListRelationFilter
    upvotes?: QuestionUpvoteListRelationFilter
    votes?: PollVoteListRelationFilter
    bookMarks?: EventListRelationFilter
  }, "id" | "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    displayName?: SortOrder
    color?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    displayName?: StringWithAggregatesFilter<"User"> | string
    color?: StringWithAggregatesFilter<"User"> | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    displayName?: StringFilter<"Event"> | string
    slug?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    ownerId?: StringFilter<"Event"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: EventParticipantListRelationFilter
    questions?: QuestionListRelationFilter
    polls?: PollListRelationFilter
    bookMarkedBy?: UserListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    displayName?: SortOrder
    slug?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    participants?: EventParticipantOrderByRelationAggregateInput
    questions?: QuestionOrderByRelationAggregateInput
    polls?: PollOrderByRelationAggregateInput
    bookMarkedBy?: UserOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug_ownerId?: EventSlugOwnerIdCompoundUniqueInput
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    displayName?: StringFilter<"Event"> | string
    slug?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    ownerId?: StringFilter<"Event"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: EventParticipantListRelationFilter
    questions?: QuestionListRelationFilter
    polls?: PollListRelationFilter
    bookMarkedBy?: UserListRelationFilter
  }, "id" | "slug_ownerId">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    displayName?: SortOrder
    slug?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    displayName?: StringWithAggregatesFilter<"Event"> | string
    slug?: StringNullableWithAggregatesFilter<"Event"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    ownerId?: StringWithAggregatesFilter<"Event"> | string
  }

  export type EventParticipantWhereInput = {
    AND?: EventParticipantWhereInput | EventParticipantWhereInput[]
    OR?: EventParticipantWhereInput[]
    NOT?: EventParticipantWhereInput | EventParticipantWhereInput[]
    eventId?: StringFilter<"EventParticipant"> | string
    userId?: StringFilter<"EventParticipant"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EventParticipantOrderByWithRelationInput = {
    eventId?: SortOrder
    userId?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type EventParticipantWhereUniqueInput = Prisma.AtLeast<{
    eventId_userId?: EventParticipantEventIdUserIdCompoundUniqueInput
    AND?: EventParticipantWhereInput | EventParticipantWhereInput[]
    OR?: EventParticipantWhereInput[]
    NOT?: EventParticipantWhereInput | EventParticipantWhereInput[]
    eventId?: StringFilter<"EventParticipant"> | string
    userId?: StringFilter<"EventParticipant"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "eventId_userId">

  export type EventParticipantOrderByWithAggregationInput = {
    eventId?: SortOrder
    userId?: SortOrder
    _count?: EventParticipantCountOrderByAggregateInput
    _max?: EventParticipantMaxOrderByAggregateInput
    _min?: EventParticipantMinOrderByAggregateInput
  }

  export type EventParticipantScalarWhereWithAggregatesInput = {
    AND?: EventParticipantScalarWhereWithAggregatesInput | EventParticipantScalarWhereWithAggregatesInput[]
    OR?: EventParticipantScalarWhereWithAggregatesInput[]
    NOT?: EventParticipantScalarWhereWithAggregatesInput | EventParticipantScalarWhereWithAggregatesInput[]
    eventId?: StringWithAggregatesFilter<"EventParticipant"> | string
    userId?: StringWithAggregatesFilter<"EventParticipant"> | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    body?: StringFilter<"Question"> | string
    isPinned?: BoolFilter<"Question"> | boolean
    isResolved?: BoolFilter<"Question"> | boolean
    eventId?: StringFilter<"Question"> | string
    userId?: StringFilter<"Question"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    upvotes?: QuestionUpvoteListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    body?: SortOrder
    isPinned?: SortOrder
    isResolved?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    event?: EventOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    upvotes?: QuestionUpvoteOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    createdAt?: DateTimeFilter<"Question"> | Date | string
    body?: StringFilter<"Question"> | string
    isPinned?: BoolFilter<"Question"> | boolean
    isResolved?: BoolFilter<"Question"> | boolean
    eventId?: StringFilter<"Question"> | string
    userId?: StringFilter<"Question"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    upvotes?: QuestionUpvoteListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    body?: SortOrder
    isPinned?: SortOrder
    isResolved?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    body?: StringWithAggregatesFilter<"Question"> | string
    isPinned?: BoolWithAggregatesFilter<"Question"> | boolean
    isResolved?: BoolWithAggregatesFilter<"Question"> | boolean
    eventId?: StringWithAggregatesFilter<"Question"> | string
    userId?: StringWithAggregatesFilter<"Question"> | string
  }

  export type QuestionUpvoteWhereInput = {
    AND?: QuestionUpvoteWhereInput | QuestionUpvoteWhereInput[]
    OR?: QuestionUpvoteWhereInput[]
    NOT?: QuestionUpvoteWhereInput | QuestionUpvoteWhereInput[]
    questionId?: StringFilter<"QuestionUpvote"> | string
    authorId?: StringFilter<"QuestionUpvote"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type QuestionUpvoteOrderByWithRelationInput = {
    questionId?: SortOrder
    authorId?: SortOrder
    question?: QuestionOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type QuestionUpvoteWhereUniqueInput = Prisma.AtLeast<{
    questionId_authorId?: QuestionUpvoteQuestionIdAuthorIdCompoundUniqueInput
    AND?: QuestionUpvoteWhereInput | QuestionUpvoteWhereInput[]
    OR?: QuestionUpvoteWhereInput[]
    NOT?: QuestionUpvoteWhereInput | QuestionUpvoteWhereInput[]
    questionId?: StringFilter<"QuestionUpvote"> | string
    authorId?: StringFilter<"QuestionUpvote"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "questionId_authorId">

  export type QuestionUpvoteOrderByWithAggregationInput = {
    questionId?: SortOrder
    authorId?: SortOrder
    _count?: QuestionUpvoteCountOrderByAggregateInput
    _max?: QuestionUpvoteMaxOrderByAggregateInput
    _min?: QuestionUpvoteMinOrderByAggregateInput
  }

  export type QuestionUpvoteScalarWhereWithAggregatesInput = {
    AND?: QuestionUpvoteScalarWhereWithAggregatesInput | QuestionUpvoteScalarWhereWithAggregatesInput[]
    OR?: QuestionUpvoteScalarWhereWithAggregatesInput[]
    NOT?: QuestionUpvoteScalarWhereWithAggregatesInput | QuestionUpvoteScalarWhereWithAggregatesInput[]
    questionId?: StringWithAggregatesFilter<"QuestionUpvote"> | string
    authorId?: StringWithAggregatesFilter<"QuestionUpvote"> | string
  }

  export type PollWhereInput = {
    AND?: PollWhereInput | PollWhereInput[]
    OR?: PollWhereInput[]
    NOT?: PollWhereInput | PollWhereInput[]
    id?: StringFilter<"Poll"> | string
    createdAt?: DateTimeFilter<"Poll"> | Date | string
    body?: StringFilter<"Poll"> | string
    isLive?: BoolFilter<"Poll"> | boolean
    eventId?: StringFilter<"Poll"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    options?: PollOptionListRelationFilter
    votes?: PollVoteListRelationFilter
  }

  export type PollOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    body?: SortOrder
    isLive?: SortOrder
    eventId?: SortOrder
    event?: EventOrderByWithRelationInput
    options?: PollOptionOrderByRelationAggregateInput
    votes?: PollVoteOrderByRelationAggregateInput
  }

  export type PollWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PollWhereInput | PollWhereInput[]
    OR?: PollWhereInput[]
    NOT?: PollWhereInput | PollWhereInput[]
    createdAt?: DateTimeFilter<"Poll"> | Date | string
    body?: StringFilter<"Poll"> | string
    isLive?: BoolFilter<"Poll"> | boolean
    eventId?: StringFilter<"Poll"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    options?: PollOptionListRelationFilter
    votes?: PollVoteListRelationFilter
  }, "id">

  export type PollOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    body?: SortOrder
    isLive?: SortOrder
    eventId?: SortOrder
    _count?: PollCountOrderByAggregateInput
    _max?: PollMaxOrderByAggregateInput
    _min?: PollMinOrderByAggregateInput
  }

  export type PollScalarWhereWithAggregatesInput = {
    AND?: PollScalarWhereWithAggregatesInput | PollScalarWhereWithAggregatesInput[]
    OR?: PollScalarWhereWithAggregatesInput[]
    NOT?: PollScalarWhereWithAggregatesInput | PollScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Poll"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Poll"> | Date | string
    body?: StringWithAggregatesFilter<"Poll"> | string
    isLive?: BoolWithAggregatesFilter<"Poll"> | boolean
    eventId?: StringWithAggregatesFilter<"Poll"> | string
  }

  export type PollOptionWhereInput = {
    AND?: PollOptionWhereInput | PollOptionWhereInput[]
    OR?: PollOptionWhereInput[]
    NOT?: PollOptionWhereInput | PollOptionWhereInput[]
    id?: StringFilter<"PollOption"> | string
    index?: IntFilter<"PollOption"> | number
    body?: StringFilter<"PollOption"> | string
    pollId?: StringFilter<"PollOption"> | string
    poll?: XOR<PollScalarRelationFilter, PollWhereInput>
    votes?: PollVoteListRelationFilter
  }

  export type PollOptionOrderByWithRelationInput = {
    id?: SortOrder
    index?: SortOrder
    body?: SortOrder
    pollId?: SortOrder
    poll?: PollOrderByWithRelationInput
    votes?: PollVoteOrderByRelationAggregateInput
  }

  export type PollOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pollId_index?: PollOptionPollIdIndexCompoundUniqueInput
    AND?: PollOptionWhereInput | PollOptionWhereInput[]
    OR?: PollOptionWhereInput[]
    NOT?: PollOptionWhereInput | PollOptionWhereInput[]
    index?: IntFilter<"PollOption"> | number
    body?: StringFilter<"PollOption"> | string
    pollId?: StringFilter<"PollOption"> | string
    poll?: XOR<PollScalarRelationFilter, PollWhereInput>
    votes?: PollVoteListRelationFilter
  }, "id" | "pollId_index">

  export type PollOptionOrderByWithAggregationInput = {
    id?: SortOrder
    index?: SortOrder
    body?: SortOrder
    pollId?: SortOrder
    _count?: PollOptionCountOrderByAggregateInput
    _avg?: PollOptionAvgOrderByAggregateInput
    _max?: PollOptionMaxOrderByAggregateInput
    _min?: PollOptionMinOrderByAggregateInput
    _sum?: PollOptionSumOrderByAggregateInput
  }

  export type PollOptionScalarWhereWithAggregatesInput = {
    AND?: PollOptionScalarWhereWithAggregatesInput | PollOptionScalarWhereWithAggregatesInput[]
    OR?: PollOptionScalarWhereWithAggregatesInput[]
    NOT?: PollOptionScalarWhereWithAggregatesInput | PollOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PollOption"> | string
    index?: IntWithAggregatesFilter<"PollOption"> | number
    body?: StringWithAggregatesFilter<"PollOption"> | string
    pollId?: StringWithAggregatesFilter<"PollOption"> | string
  }

  export type PollVoteWhereInput = {
    AND?: PollVoteWhereInput | PollVoteWhereInput[]
    OR?: PollVoteWhereInput[]
    NOT?: PollVoteWhereInput | PollVoteWhereInput[]
    authorId?: StringFilter<"PollVote"> | string
    pollOptionId?: StringFilter<"PollVote"> | string
    pollId?: StringFilter<"PollVote"> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    pollOption?: XOR<PollOptionScalarRelationFilter, PollOptionWhereInput>
    poll?: XOR<PollScalarRelationFilter, PollWhereInput>
  }

  export type PollVoteOrderByWithRelationInput = {
    authorId?: SortOrder
    pollOptionId?: SortOrder
    pollId?: SortOrder
    author?: UserOrderByWithRelationInput
    pollOption?: PollOptionOrderByWithRelationInput
    poll?: PollOrderByWithRelationInput
  }

  export type PollVoteWhereUniqueInput = Prisma.AtLeast<{
    authorId_pollId?: PollVoteAuthorIdPollIdCompoundUniqueInput
    AND?: PollVoteWhereInput | PollVoteWhereInput[]
    OR?: PollVoteWhereInput[]
    NOT?: PollVoteWhereInput | PollVoteWhereInput[]
    authorId?: StringFilter<"PollVote"> | string
    pollOptionId?: StringFilter<"PollVote"> | string
    pollId?: StringFilter<"PollVote"> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    pollOption?: XOR<PollOptionScalarRelationFilter, PollOptionWhereInput>
    poll?: XOR<PollScalarRelationFilter, PollWhereInput>
  }, "authorId_pollId">

  export type PollVoteOrderByWithAggregationInput = {
    authorId?: SortOrder
    pollOptionId?: SortOrder
    pollId?: SortOrder
    _count?: PollVoteCountOrderByAggregateInput
    _max?: PollVoteMaxOrderByAggregateInput
    _min?: PollVoteMinOrderByAggregateInput
  }

  export type PollVoteScalarWhereWithAggregatesInput = {
    AND?: PollVoteScalarWhereWithAggregatesInput | PollVoteScalarWhereWithAggregatesInput[]
    OR?: PollVoteScalarWhereWithAggregatesInput[]
    NOT?: PollVoteScalarWhereWithAggregatesInput | PollVoteScalarWhereWithAggregatesInput[]
    authorId?: StringWithAggregatesFilter<"PollVote"> | string
    pollOptionId?: StringWithAggregatesFilter<"PollVote"> | string
    pollId?: StringWithAggregatesFilter<"PollVote"> | string
  }

  export type UserCreateInput = {
    id: string
    email: string
    createdAt?: Date | string
    displayName: string
    color: string
    events?: EventCreateNestedManyWithoutOwnerInput
    participations?: EventParticipantCreateNestedManyWithoutUserInput
    questions?: QuestionCreateNestedManyWithoutAuthorInput
    upvotes?: QuestionUpvoteCreateNestedManyWithoutAuthorInput
    votes?: PollVoteCreateNestedManyWithoutAuthorInput
    bookMarks?: EventCreateNestedManyWithoutBookMarkedByInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    createdAt?: Date | string
    displayName: string
    color: string
    events?: EventUncheckedCreateNestedManyWithoutOwnerInput
    participations?: EventParticipantUncheckedCreateNestedManyWithoutUserInput
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput
    upvotes?: QuestionUpvoteUncheckedCreateNestedManyWithoutAuthorInput
    votes?: PollVoteUncheckedCreateNestedManyWithoutAuthorInput
    bookMarks?: EventUncheckedCreateNestedManyWithoutBookMarkedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    events?: EventUpdateManyWithoutOwnerNestedInput
    participations?: EventParticipantUpdateManyWithoutUserNestedInput
    questions?: QuestionUpdateManyWithoutAuthorNestedInput
    upvotes?: QuestionUpvoteUpdateManyWithoutAuthorNestedInput
    votes?: PollVoteUpdateManyWithoutAuthorNestedInput
    bookMarks?: EventUpdateManyWithoutBookMarkedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutOwnerNestedInput
    participations?: EventParticipantUncheckedUpdateManyWithoutUserNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput
    upvotes?: QuestionUpvoteUncheckedUpdateManyWithoutAuthorNestedInput
    votes?: PollVoteUncheckedUpdateManyWithoutAuthorNestedInput
    bookMarks?: EventUncheckedUpdateManyWithoutBookMarkedByNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email: string
    createdAt?: Date | string
    displayName: string
    color: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type EventCreateInput = {
    id?: string
    displayName: string
    slug?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutEventsInput
    participants?: EventParticipantCreateNestedManyWithoutEventInput
    questions?: QuestionCreateNestedManyWithoutEventInput
    polls?: PollCreateNestedManyWithoutEventInput
    bookMarkedBy?: UserCreateNestedManyWithoutBookMarksInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    displayName: string
    slug?: string | null
    createdAt?: Date | string
    ownerId: string
    participants?: EventParticipantUncheckedCreateNestedManyWithoutEventInput
    questions?: QuestionUncheckedCreateNestedManyWithoutEventInput
    polls?: PollUncheckedCreateNestedManyWithoutEventInput
    bookMarkedBy?: UserUncheckedCreateNestedManyWithoutBookMarksInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEventsNestedInput
    participants?: EventParticipantUpdateManyWithoutEventNestedInput
    questions?: QuestionUpdateManyWithoutEventNestedInput
    polls?: PollUpdateManyWithoutEventNestedInput
    bookMarkedBy?: UserUpdateManyWithoutBookMarksNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    participants?: EventParticipantUncheckedUpdateManyWithoutEventNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutEventNestedInput
    polls?: PollUncheckedUpdateManyWithoutEventNestedInput
    bookMarkedBy?: UserUncheckedUpdateManyWithoutBookMarksNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    displayName: string
    slug?: string | null
    createdAt?: Date | string
    ownerId: string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type EventParticipantCreateInput = {
    event: EventCreateNestedOneWithoutParticipantsInput
    user: UserCreateNestedOneWithoutParticipationsInput
  }

  export type EventParticipantUncheckedCreateInput = {
    eventId: string
    userId: string
  }

  export type EventParticipantUpdateInput = {
    event?: EventUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneRequiredWithoutParticipationsNestedInput
  }

  export type EventParticipantUncheckedUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EventParticipantCreateManyInput = {
    eventId: string
    userId: string
  }

  export type EventParticipantUpdateManyMutationInput = {

  }

  export type EventParticipantUncheckedUpdateManyInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isPinned?: boolean
    isResolved?: boolean
    event: EventCreateNestedOneWithoutQuestionsInput
    author: UserCreateNestedOneWithoutQuestionsInput
    upvotes?: QuestionUpvoteCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isPinned?: boolean
    isResolved?: boolean
    eventId: string
    userId: string
    upvotes?: QuestionUpvoteUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutQuestionsNestedInput
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput
    upvotes?: QuestionUpvoteUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    upvotes?: QuestionUpvoteUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isPinned?: boolean
    isResolved?: boolean
    eventId: string
    userId: string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUpvoteCreateInput = {
    question: QuestionCreateNestedOneWithoutUpvotesInput
    author: UserCreateNestedOneWithoutUpvotesInput
  }

  export type QuestionUpvoteUncheckedCreateInput = {
    questionId: string
    authorId: string
  }

  export type QuestionUpvoteUpdateInput = {
    question?: QuestionUpdateOneRequiredWithoutUpvotesNestedInput
    author?: UserUpdateOneRequiredWithoutUpvotesNestedInput
  }

  export type QuestionUpvoteUncheckedUpdateInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUpvoteCreateManyInput = {
    questionId: string
    authorId: string
  }

  export type QuestionUpvoteUpdateManyMutationInput = {

  }

  export type QuestionUpvoteUncheckedUpdateManyInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type PollCreateInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isLive?: boolean
    event: EventCreateNestedOneWithoutPollsInput
    options?: PollOptionCreateNestedManyWithoutPollInput
    votes?: PollVoteCreateNestedManyWithoutPollInput
  }

  export type PollUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isLive?: boolean
    eventId: string
    options?: PollOptionUncheckedCreateNestedManyWithoutPollInput
    votes?: PollVoteUncheckedCreateNestedManyWithoutPollInput
  }

  export type PollUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutPollsNestedInput
    options?: PollOptionUpdateManyWithoutPollNestedInput
    votes?: PollVoteUpdateManyWithoutPollNestedInput
  }

  export type PollUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    eventId?: StringFieldUpdateOperationsInput | string
    options?: PollOptionUncheckedUpdateManyWithoutPollNestedInput
    votes?: PollVoteUncheckedUpdateManyWithoutPollNestedInput
  }

  export type PollCreateManyInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isLive?: boolean
    eventId: string
  }

  export type PollUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PollUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type PollOptionCreateInput = {
    id?: string
    index: number
    body: string
    poll: PollCreateNestedOneWithoutOptionsInput
    votes?: PollVoteCreateNestedManyWithoutPollOptionInput
  }

  export type PollOptionUncheckedCreateInput = {
    id?: string
    index: number
    body: string
    pollId: string
    votes?: PollVoteUncheckedCreateNestedManyWithoutPollOptionInput
  }

  export type PollOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    poll?: PollUpdateOneRequiredWithoutOptionsNestedInput
    votes?: PollVoteUpdateManyWithoutPollOptionNestedInput
  }

  export type PollOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    votes?: PollVoteUncheckedUpdateManyWithoutPollOptionNestedInput
  }

  export type PollOptionCreateManyInput = {
    id?: string
    index: number
    body: string
    pollId: string
  }

  export type PollOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
  }

  export type PollOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
  }

  export type PollVoteCreateInput = {
    author: UserCreateNestedOneWithoutVotesInput
    pollOption: PollOptionCreateNestedOneWithoutVotesInput
    poll: PollCreateNestedOneWithoutVotesInput
  }

  export type PollVoteUncheckedCreateInput = {
    authorId: string
    pollOptionId: string
    pollId: string
  }

  export type PollVoteUpdateInput = {
    author?: UserUpdateOneRequiredWithoutVotesNestedInput
    pollOption?: PollOptionUpdateOneRequiredWithoutVotesNestedInput
    poll?: PollUpdateOneRequiredWithoutVotesNestedInput
  }

  export type PollVoteUncheckedUpdateInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    pollOptionId?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
  }

  export type PollVoteCreateManyInput = {
    authorId: string
    pollOptionId: string
    pollId: string
  }

  export type PollVoteUpdateManyMutationInput = {

  }

  export type PollVoteUncheckedUpdateManyInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    pollOptionId?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
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

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventParticipantListRelationFilter = {
    every?: EventParticipantWhereInput
    some?: EventParticipantWhereInput
    none?: EventParticipantWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionUpvoteListRelationFilter = {
    every?: QuestionUpvoteWhereInput
    some?: QuestionUpvoteWhereInput
    none?: QuestionUpvoteWhereInput
  }

  export type PollVoteListRelationFilter = {
    every?: PollVoteWhereInput
    some?: PollVoteWhereInput
    none?: PollVoteWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionUpvoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PollVoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    displayName?: SortOrder
    color?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    displayName?: SortOrder
    color?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    displayName?: SortOrder
    color?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PollListRelationFilter = {
    every?: PollWhereInput
    some?: PollWhereInput
    none?: PollWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PollOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventSlugOwnerIdCompoundUniqueInput = {
    slug: string
    ownerId: string
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
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

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventParticipantEventIdUserIdCompoundUniqueInput = {
    eventId: string
    userId: string
  }

  export type EventParticipantCountOrderByAggregateInput = {
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type EventParticipantMaxOrderByAggregateInput = {
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type EventParticipantMinOrderByAggregateInput = {
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    body?: SortOrder
    isPinned?: SortOrder
    isResolved?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    body?: SortOrder
    isPinned?: SortOrder
    isResolved?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    body?: SortOrder
    isPinned?: SortOrder
    isResolved?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type QuestionUpvoteQuestionIdAuthorIdCompoundUniqueInput = {
    questionId: string
    authorId: string
  }

  export type QuestionUpvoteCountOrderByAggregateInput = {
    questionId?: SortOrder
    authorId?: SortOrder
  }

  export type QuestionUpvoteMaxOrderByAggregateInput = {
    questionId?: SortOrder
    authorId?: SortOrder
  }

  export type QuestionUpvoteMinOrderByAggregateInput = {
    questionId?: SortOrder
    authorId?: SortOrder
  }

  export type PollOptionListRelationFilter = {
    every?: PollOptionWhereInput
    some?: PollOptionWhereInput
    none?: PollOptionWhereInput
  }

  export type PollOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PollCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    body?: SortOrder
    isLive?: SortOrder
    eventId?: SortOrder
  }

  export type PollMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    body?: SortOrder
    isLive?: SortOrder
    eventId?: SortOrder
  }

  export type PollMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    body?: SortOrder
    isLive?: SortOrder
    eventId?: SortOrder
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

  export type PollScalarRelationFilter = {
    is?: PollWhereInput
    isNot?: PollWhereInput
  }

  export type PollOptionPollIdIndexCompoundUniqueInput = {
    pollId: string
    index: number
  }

  export type PollOptionCountOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    body?: SortOrder
    pollId?: SortOrder
  }

  export type PollOptionAvgOrderByAggregateInput = {
    index?: SortOrder
  }

  export type PollOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    body?: SortOrder
    pollId?: SortOrder
  }

  export type PollOptionMinOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    body?: SortOrder
    pollId?: SortOrder
  }

  export type PollOptionSumOrderByAggregateInput = {
    index?: SortOrder
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

  export type PollOptionScalarRelationFilter = {
    is?: PollOptionWhereInput
    isNot?: PollOptionWhereInput
  }

  export type PollVoteAuthorIdPollIdCompoundUniqueInput = {
    authorId: string
    pollId: string
  }

  export type PollVoteCountOrderByAggregateInput = {
    authorId?: SortOrder
    pollOptionId?: SortOrder
    pollId?: SortOrder
  }

  export type PollVoteMaxOrderByAggregateInput = {
    authorId?: SortOrder
    pollOptionId?: SortOrder
    pollId?: SortOrder
  }

  export type PollVoteMinOrderByAggregateInput = {
    authorId?: SortOrder
    pollOptionId?: SortOrder
    pollId?: SortOrder
  }

  export type EventCreateNestedManyWithoutOwnerInput = {
    create?: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput> | EventCreateWithoutOwnerInput[] | EventUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOwnerInput | EventCreateOrConnectWithoutOwnerInput[]
    createMany?: EventCreateManyOwnerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<EventParticipantCreateWithoutUserInput, EventParticipantUncheckedCreateWithoutUserInput> | EventParticipantCreateWithoutUserInput[] | EventParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutUserInput | EventParticipantCreateOrConnectWithoutUserInput[]
    createMany?: EventParticipantCreateManyUserInputEnvelope
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutAuthorInput = {
    create?: XOR<QuestionCreateWithoutAuthorInput, QuestionUncheckedCreateWithoutAuthorInput> | QuestionCreateWithoutAuthorInput[] | QuestionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutAuthorInput | QuestionCreateOrConnectWithoutAuthorInput[]
    createMany?: QuestionCreateManyAuthorInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUpvoteCreateNestedManyWithoutAuthorInput = {
    create?: XOR<QuestionUpvoteCreateWithoutAuthorInput, QuestionUpvoteUncheckedCreateWithoutAuthorInput> | QuestionUpvoteCreateWithoutAuthorInput[] | QuestionUpvoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuestionUpvoteCreateOrConnectWithoutAuthorInput | QuestionUpvoteCreateOrConnectWithoutAuthorInput[]
    createMany?: QuestionUpvoteCreateManyAuthorInputEnvelope
    connect?: QuestionUpvoteWhereUniqueInput | QuestionUpvoteWhereUniqueInput[]
  }

  export type PollVoteCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PollVoteCreateWithoutAuthorInput, PollVoteUncheckedCreateWithoutAuthorInput> | PollVoteCreateWithoutAuthorInput[] | PollVoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PollVoteCreateOrConnectWithoutAuthorInput | PollVoteCreateOrConnectWithoutAuthorInput[]
    createMany?: PollVoteCreateManyAuthorInputEnvelope
    connect?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutBookMarkedByInput = {
    create?: XOR<EventCreateWithoutBookMarkedByInput, EventUncheckedCreateWithoutBookMarkedByInput> | EventCreateWithoutBookMarkedByInput[] | EventUncheckedCreateWithoutBookMarkedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutBookMarkedByInput | EventCreateOrConnectWithoutBookMarkedByInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput> | EventCreateWithoutOwnerInput[] | EventUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOwnerInput | EventCreateOrConnectWithoutOwnerInput[]
    createMany?: EventCreateManyOwnerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventParticipantCreateWithoutUserInput, EventParticipantUncheckedCreateWithoutUserInput> | EventParticipantCreateWithoutUserInput[] | EventParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutUserInput | EventParticipantCreateOrConnectWithoutUserInput[]
    createMany?: EventParticipantCreateManyUserInputEnvelope
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<QuestionCreateWithoutAuthorInput, QuestionUncheckedCreateWithoutAuthorInput> | QuestionCreateWithoutAuthorInput[] | QuestionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutAuthorInput | QuestionCreateOrConnectWithoutAuthorInput[]
    createMany?: QuestionCreateManyAuthorInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUpvoteUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<QuestionUpvoteCreateWithoutAuthorInput, QuestionUpvoteUncheckedCreateWithoutAuthorInput> | QuestionUpvoteCreateWithoutAuthorInput[] | QuestionUpvoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuestionUpvoteCreateOrConnectWithoutAuthorInput | QuestionUpvoteCreateOrConnectWithoutAuthorInput[]
    createMany?: QuestionUpvoteCreateManyAuthorInputEnvelope
    connect?: QuestionUpvoteWhereUniqueInput | QuestionUpvoteWhereUniqueInput[]
  }

  export type PollVoteUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PollVoteCreateWithoutAuthorInput, PollVoteUncheckedCreateWithoutAuthorInput> | PollVoteCreateWithoutAuthorInput[] | PollVoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PollVoteCreateOrConnectWithoutAuthorInput | PollVoteCreateOrConnectWithoutAuthorInput[]
    createMany?: PollVoteCreateManyAuthorInputEnvelope
    connect?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutBookMarkedByInput = {
    create?: XOR<EventCreateWithoutBookMarkedByInput, EventUncheckedCreateWithoutBookMarkedByInput> | EventCreateWithoutBookMarkedByInput[] | EventUncheckedCreateWithoutBookMarkedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutBookMarkedByInput | EventCreateOrConnectWithoutBookMarkedByInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput> | EventCreateWithoutOwnerInput[] | EventUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOwnerInput | EventCreateOrConnectWithoutOwnerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOwnerInput | EventUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: EventCreateManyOwnerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOwnerInput | EventUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOwnerInput | EventUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventParticipantCreateWithoutUserInput, EventParticipantUncheckedCreateWithoutUserInput> | EventParticipantCreateWithoutUserInput[] | EventParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutUserInput | EventParticipantCreateOrConnectWithoutUserInput[]
    upsert?: EventParticipantUpsertWithWhereUniqueWithoutUserInput | EventParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventParticipantCreateManyUserInputEnvelope
    set?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    disconnect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    delete?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    update?: EventParticipantUpdateWithWhereUniqueWithoutUserInput | EventParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventParticipantUpdateManyWithWhereWithoutUserInput | EventParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<QuestionCreateWithoutAuthorInput, QuestionUncheckedCreateWithoutAuthorInput> | QuestionCreateWithoutAuthorInput[] | QuestionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutAuthorInput | QuestionCreateOrConnectWithoutAuthorInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutAuthorInput | QuestionUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: QuestionCreateManyAuthorInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutAuthorInput | QuestionUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutAuthorInput | QuestionUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionUpvoteUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<QuestionUpvoteCreateWithoutAuthorInput, QuestionUpvoteUncheckedCreateWithoutAuthorInput> | QuestionUpvoteCreateWithoutAuthorInput[] | QuestionUpvoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuestionUpvoteCreateOrConnectWithoutAuthorInput | QuestionUpvoteCreateOrConnectWithoutAuthorInput[]
    upsert?: QuestionUpvoteUpsertWithWhereUniqueWithoutAuthorInput | QuestionUpvoteUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: QuestionUpvoteCreateManyAuthorInputEnvelope
    set?: QuestionUpvoteWhereUniqueInput | QuestionUpvoteWhereUniqueInput[]
    disconnect?: QuestionUpvoteWhereUniqueInput | QuestionUpvoteWhereUniqueInput[]
    delete?: QuestionUpvoteWhereUniqueInput | QuestionUpvoteWhereUniqueInput[]
    connect?: QuestionUpvoteWhereUniqueInput | QuestionUpvoteWhereUniqueInput[]
    update?: QuestionUpvoteUpdateWithWhereUniqueWithoutAuthorInput | QuestionUpvoteUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: QuestionUpvoteUpdateManyWithWhereWithoutAuthorInput | QuestionUpvoteUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: QuestionUpvoteScalarWhereInput | QuestionUpvoteScalarWhereInput[]
  }

  export type PollVoteUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PollVoteCreateWithoutAuthorInput, PollVoteUncheckedCreateWithoutAuthorInput> | PollVoteCreateWithoutAuthorInput[] | PollVoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PollVoteCreateOrConnectWithoutAuthorInput | PollVoteCreateOrConnectWithoutAuthorInput[]
    upsert?: PollVoteUpsertWithWhereUniqueWithoutAuthorInput | PollVoteUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PollVoteCreateManyAuthorInputEnvelope
    set?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    disconnect?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    delete?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    connect?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    update?: PollVoteUpdateWithWhereUniqueWithoutAuthorInput | PollVoteUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PollVoteUpdateManyWithWhereWithoutAuthorInput | PollVoteUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PollVoteScalarWhereInput | PollVoteScalarWhereInput[]
  }

  export type EventUpdateManyWithoutBookMarkedByNestedInput = {
    create?: XOR<EventCreateWithoutBookMarkedByInput, EventUncheckedCreateWithoutBookMarkedByInput> | EventCreateWithoutBookMarkedByInput[] | EventUncheckedCreateWithoutBookMarkedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutBookMarkedByInput | EventCreateOrConnectWithoutBookMarkedByInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutBookMarkedByInput | EventUpsertWithWhereUniqueWithoutBookMarkedByInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutBookMarkedByInput | EventUpdateWithWhereUniqueWithoutBookMarkedByInput[]
    updateMany?: EventUpdateManyWithWhereWithoutBookMarkedByInput | EventUpdateManyWithWhereWithoutBookMarkedByInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput> | EventCreateWithoutOwnerInput[] | EventUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOwnerInput | EventCreateOrConnectWithoutOwnerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOwnerInput | EventUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: EventCreateManyOwnerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOwnerInput | EventUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOwnerInput | EventUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventParticipantCreateWithoutUserInput, EventParticipantUncheckedCreateWithoutUserInput> | EventParticipantCreateWithoutUserInput[] | EventParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutUserInput | EventParticipantCreateOrConnectWithoutUserInput[]
    upsert?: EventParticipantUpsertWithWhereUniqueWithoutUserInput | EventParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventParticipantCreateManyUserInputEnvelope
    set?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    disconnect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    delete?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    update?: EventParticipantUpdateWithWhereUniqueWithoutUserInput | EventParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventParticipantUpdateManyWithWhereWithoutUserInput | EventParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<QuestionCreateWithoutAuthorInput, QuestionUncheckedCreateWithoutAuthorInput> | QuestionCreateWithoutAuthorInput[] | QuestionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutAuthorInput | QuestionCreateOrConnectWithoutAuthorInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutAuthorInput | QuestionUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: QuestionCreateManyAuthorInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutAuthorInput | QuestionUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutAuthorInput | QuestionUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionUpvoteUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<QuestionUpvoteCreateWithoutAuthorInput, QuestionUpvoteUncheckedCreateWithoutAuthorInput> | QuestionUpvoteCreateWithoutAuthorInput[] | QuestionUpvoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuestionUpvoteCreateOrConnectWithoutAuthorInput | QuestionUpvoteCreateOrConnectWithoutAuthorInput[]
    upsert?: QuestionUpvoteUpsertWithWhereUniqueWithoutAuthorInput | QuestionUpvoteUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: QuestionUpvoteCreateManyAuthorInputEnvelope
    set?: QuestionUpvoteWhereUniqueInput | QuestionUpvoteWhereUniqueInput[]
    disconnect?: QuestionUpvoteWhereUniqueInput | QuestionUpvoteWhereUniqueInput[]
    delete?: QuestionUpvoteWhereUniqueInput | QuestionUpvoteWhereUniqueInput[]
    connect?: QuestionUpvoteWhereUniqueInput | QuestionUpvoteWhereUniqueInput[]
    update?: QuestionUpvoteUpdateWithWhereUniqueWithoutAuthorInput | QuestionUpvoteUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: QuestionUpvoteUpdateManyWithWhereWithoutAuthorInput | QuestionUpvoteUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: QuestionUpvoteScalarWhereInput | QuestionUpvoteScalarWhereInput[]
  }

  export type PollVoteUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PollVoteCreateWithoutAuthorInput, PollVoteUncheckedCreateWithoutAuthorInput> | PollVoteCreateWithoutAuthorInput[] | PollVoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PollVoteCreateOrConnectWithoutAuthorInput | PollVoteCreateOrConnectWithoutAuthorInput[]
    upsert?: PollVoteUpsertWithWhereUniqueWithoutAuthorInput | PollVoteUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PollVoteCreateManyAuthorInputEnvelope
    set?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    disconnect?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    delete?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    connect?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    update?: PollVoteUpdateWithWhereUniqueWithoutAuthorInput | PollVoteUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PollVoteUpdateManyWithWhereWithoutAuthorInput | PollVoteUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PollVoteScalarWhereInput | PollVoteScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutBookMarkedByNestedInput = {
    create?: XOR<EventCreateWithoutBookMarkedByInput, EventUncheckedCreateWithoutBookMarkedByInput> | EventCreateWithoutBookMarkedByInput[] | EventUncheckedCreateWithoutBookMarkedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutBookMarkedByInput | EventCreateOrConnectWithoutBookMarkedByInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutBookMarkedByInput | EventUpsertWithWhereUniqueWithoutBookMarkedByInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutBookMarkedByInput | EventUpdateWithWhereUniqueWithoutBookMarkedByInput[]
    updateMany?: EventUpdateManyWithWhereWithoutBookMarkedByInput | EventUpdateManyWithWhereWithoutBookMarkedByInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type EventParticipantCreateNestedManyWithoutEventInput = {
    create?: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput> | EventParticipantCreateWithoutEventInput[] | EventParticipantUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutEventInput | EventParticipantCreateOrConnectWithoutEventInput[]
    createMany?: EventParticipantCreateManyEventInputEnvelope
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutEventInput = {
    create?: XOR<QuestionCreateWithoutEventInput, QuestionUncheckedCreateWithoutEventInput> | QuestionCreateWithoutEventInput[] | QuestionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutEventInput | QuestionCreateOrConnectWithoutEventInput[]
    createMany?: QuestionCreateManyEventInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type PollCreateNestedManyWithoutEventInput = {
    create?: XOR<PollCreateWithoutEventInput, PollUncheckedCreateWithoutEventInput> | PollCreateWithoutEventInput[] | PollUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PollCreateOrConnectWithoutEventInput | PollCreateOrConnectWithoutEventInput[]
    createMany?: PollCreateManyEventInputEnvelope
    connect?: PollWhereUniqueInput | PollWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutBookMarksInput = {
    create?: XOR<UserCreateWithoutBookMarksInput, UserUncheckedCreateWithoutBookMarksInput> | UserCreateWithoutBookMarksInput[] | UserUncheckedCreateWithoutBookMarksInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBookMarksInput | UserCreateOrConnectWithoutBookMarksInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EventParticipantUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput> | EventParticipantCreateWithoutEventInput[] | EventParticipantUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutEventInput | EventParticipantCreateOrConnectWithoutEventInput[]
    createMany?: EventParticipantCreateManyEventInputEnvelope
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<QuestionCreateWithoutEventInput, QuestionUncheckedCreateWithoutEventInput> | QuestionCreateWithoutEventInput[] | QuestionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutEventInput | QuestionCreateOrConnectWithoutEventInput[]
    createMany?: QuestionCreateManyEventInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type PollUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<PollCreateWithoutEventInput, PollUncheckedCreateWithoutEventInput> | PollCreateWithoutEventInput[] | PollUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PollCreateOrConnectWithoutEventInput | PollCreateOrConnectWithoutEventInput[]
    createMany?: PollCreateManyEventInputEnvelope
    connect?: PollWhereUniqueInput | PollWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBookMarksInput = {
    create?: XOR<UserCreateWithoutBookMarksInput, UserUncheckedCreateWithoutBookMarksInput> | UserCreateWithoutBookMarksInput[] | UserUncheckedCreateWithoutBookMarksInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBookMarksInput | UserCreateOrConnectWithoutBookMarksInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type EventParticipantUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput> | EventParticipantCreateWithoutEventInput[] | EventParticipantUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutEventInput | EventParticipantCreateOrConnectWithoutEventInput[]
    upsert?: EventParticipantUpsertWithWhereUniqueWithoutEventInput | EventParticipantUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventParticipantCreateManyEventInputEnvelope
    set?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    disconnect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    delete?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    update?: EventParticipantUpdateWithWhereUniqueWithoutEventInput | EventParticipantUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventParticipantUpdateManyWithWhereWithoutEventInput | EventParticipantUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutEventNestedInput = {
    create?: XOR<QuestionCreateWithoutEventInput, QuestionUncheckedCreateWithoutEventInput> | QuestionCreateWithoutEventInput[] | QuestionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutEventInput | QuestionCreateOrConnectWithoutEventInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutEventInput | QuestionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: QuestionCreateManyEventInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutEventInput | QuestionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutEventInput | QuestionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type PollUpdateManyWithoutEventNestedInput = {
    create?: XOR<PollCreateWithoutEventInput, PollUncheckedCreateWithoutEventInput> | PollCreateWithoutEventInput[] | PollUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PollCreateOrConnectWithoutEventInput | PollCreateOrConnectWithoutEventInput[]
    upsert?: PollUpsertWithWhereUniqueWithoutEventInput | PollUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: PollCreateManyEventInputEnvelope
    set?: PollWhereUniqueInput | PollWhereUniqueInput[]
    disconnect?: PollWhereUniqueInput | PollWhereUniqueInput[]
    delete?: PollWhereUniqueInput | PollWhereUniqueInput[]
    connect?: PollWhereUniqueInput | PollWhereUniqueInput[]
    update?: PollUpdateWithWhereUniqueWithoutEventInput | PollUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: PollUpdateManyWithWhereWithoutEventInput | PollUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: PollScalarWhereInput | PollScalarWhereInput[]
  }

  export type UserUpdateManyWithoutBookMarksNestedInput = {
    create?: XOR<UserCreateWithoutBookMarksInput, UserUncheckedCreateWithoutBookMarksInput> | UserCreateWithoutBookMarksInput[] | UserUncheckedCreateWithoutBookMarksInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBookMarksInput | UserCreateOrConnectWithoutBookMarksInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBookMarksInput | UserUpsertWithWhereUniqueWithoutBookMarksInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBookMarksInput | UserUpdateWithWhereUniqueWithoutBookMarksInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBookMarksInput | UserUpdateManyWithWhereWithoutBookMarksInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EventParticipantUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput> | EventParticipantCreateWithoutEventInput[] | EventParticipantUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutEventInput | EventParticipantCreateOrConnectWithoutEventInput[]
    upsert?: EventParticipantUpsertWithWhereUniqueWithoutEventInput | EventParticipantUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventParticipantCreateManyEventInputEnvelope
    set?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    disconnect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    delete?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    update?: EventParticipantUpdateWithWhereUniqueWithoutEventInput | EventParticipantUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventParticipantUpdateManyWithWhereWithoutEventInput | EventParticipantUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<QuestionCreateWithoutEventInput, QuestionUncheckedCreateWithoutEventInput> | QuestionCreateWithoutEventInput[] | QuestionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutEventInput | QuestionCreateOrConnectWithoutEventInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutEventInput | QuestionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: QuestionCreateManyEventInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutEventInput | QuestionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutEventInput | QuestionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type PollUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<PollCreateWithoutEventInput, PollUncheckedCreateWithoutEventInput> | PollCreateWithoutEventInput[] | PollUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PollCreateOrConnectWithoutEventInput | PollCreateOrConnectWithoutEventInput[]
    upsert?: PollUpsertWithWhereUniqueWithoutEventInput | PollUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: PollCreateManyEventInputEnvelope
    set?: PollWhereUniqueInput | PollWhereUniqueInput[]
    disconnect?: PollWhereUniqueInput | PollWhereUniqueInput[]
    delete?: PollWhereUniqueInput | PollWhereUniqueInput[]
    connect?: PollWhereUniqueInput | PollWhereUniqueInput[]
    update?: PollUpdateWithWhereUniqueWithoutEventInput | PollUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: PollUpdateManyWithWhereWithoutEventInput | PollUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: PollScalarWhereInput | PollScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBookMarksNestedInput = {
    create?: XOR<UserCreateWithoutBookMarksInput, UserUncheckedCreateWithoutBookMarksInput> | UserCreateWithoutBookMarksInput[] | UserUncheckedCreateWithoutBookMarksInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBookMarksInput | UserCreateOrConnectWithoutBookMarksInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBookMarksInput | UserUpsertWithWhereUniqueWithoutBookMarksInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBookMarksInput | UserUpdateWithWhereUniqueWithoutBookMarksInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBookMarksInput | UserUpdateManyWithWhereWithoutBookMarksInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: EventCreateOrConnectWithoutParticipantsInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutParticipationsInput = {
    create?: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipationsInput
    connect?: UserWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: EventCreateOrConnectWithoutParticipantsInput
    upsert?: EventUpsertWithoutParticipantsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutParticipantsInput, EventUpdateWithoutParticipantsInput>, EventUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneRequiredWithoutParticipationsNestedInput = {
    create?: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipationsInput
    upsert?: UserUpsertWithoutParticipationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParticipationsInput, UserUpdateWithoutParticipationsInput>, UserUncheckedUpdateWithoutParticipationsInput>
  }

  export type EventCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<EventCreateWithoutQuestionsInput, EventUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutQuestionsInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionUpvoteCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionUpvoteCreateWithoutQuestionInput, QuestionUpvoteUncheckedCreateWithoutQuestionInput> | QuestionUpvoteCreateWithoutQuestionInput[] | QuestionUpvoteUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionUpvoteCreateOrConnectWithoutQuestionInput | QuestionUpvoteCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionUpvoteCreateManyQuestionInputEnvelope
    connect?: QuestionUpvoteWhereUniqueInput | QuestionUpvoteWhereUniqueInput[]
  }

  export type QuestionUpvoteUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionUpvoteCreateWithoutQuestionInput, QuestionUpvoteUncheckedCreateWithoutQuestionInput> | QuestionUpvoteCreateWithoutQuestionInput[] | QuestionUpvoteUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionUpvoteCreateOrConnectWithoutQuestionInput | QuestionUpvoteCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionUpvoteCreateManyQuestionInputEnvelope
    connect?: QuestionUpvoteWhereUniqueInput | QuestionUpvoteWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EventUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<EventCreateWithoutQuestionsInput, EventUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutQuestionsInput
    upsert?: EventUpsertWithoutQuestionsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutQuestionsInput, EventUpdateWithoutQuestionsInput>, EventUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput
    upsert?: UserUpsertWithoutQuestionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuestionsInput, UserUpdateWithoutQuestionsInput>, UserUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuestionUpvoteUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionUpvoteCreateWithoutQuestionInput, QuestionUpvoteUncheckedCreateWithoutQuestionInput> | QuestionUpvoteCreateWithoutQuestionInput[] | QuestionUpvoteUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionUpvoteCreateOrConnectWithoutQuestionInput | QuestionUpvoteCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionUpvoteUpsertWithWhereUniqueWithoutQuestionInput | QuestionUpvoteUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionUpvoteCreateManyQuestionInputEnvelope
    set?: QuestionUpvoteWhereUniqueInput | QuestionUpvoteWhereUniqueInput[]
    disconnect?: QuestionUpvoteWhereUniqueInput | QuestionUpvoteWhereUniqueInput[]
    delete?: QuestionUpvoteWhereUniqueInput | QuestionUpvoteWhereUniqueInput[]
    connect?: QuestionUpvoteWhereUniqueInput | QuestionUpvoteWhereUniqueInput[]
    update?: QuestionUpvoteUpdateWithWhereUniqueWithoutQuestionInput | QuestionUpvoteUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionUpvoteUpdateManyWithWhereWithoutQuestionInput | QuestionUpvoteUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionUpvoteScalarWhereInput | QuestionUpvoteScalarWhereInput[]
  }

  export type QuestionUpvoteUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionUpvoteCreateWithoutQuestionInput, QuestionUpvoteUncheckedCreateWithoutQuestionInput> | QuestionUpvoteCreateWithoutQuestionInput[] | QuestionUpvoteUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionUpvoteCreateOrConnectWithoutQuestionInput | QuestionUpvoteCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionUpvoteUpsertWithWhereUniqueWithoutQuestionInput | QuestionUpvoteUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionUpvoteCreateManyQuestionInputEnvelope
    set?: QuestionUpvoteWhereUniqueInput | QuestionUpvoteWhereUniqueInput[]
    disconnect?: QuestionUpvoteWhereUniqueInput | QuestionUpvoteWhereUniqueInput[]
    delete?: QuestionUpvoteWhereUniqueInput | QuestionUpvoteWhereUniqueInput[]
    connect?: QuestionUpvoteWhereUniqueInput | QuestionUpvoteWhereUniqueInput[]
    update?: QuestionUpvoteUpdateWithWhereUniqueWithoutQuestionInput | QuestionUpvoteUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionUpvoteUpdateManyWithWhereWithoutQuestionInput | QuestionUpvoteUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionUpvoteScalarWhereInput | QuestionUpvoteScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutUpvotesInput = {
    create?: XOR<QuestionCreateWithoutUpvotesInput, QuestionUncheckedCreateWithoutUpvotesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutUpvotesInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpvotesInput = {
    create?: XOR<UserCreateWithoutUpvotesInput, UserUncheckedCreateWithoutUpvotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpvotesInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutUpvotesNestedInput = {
    create?: XOR<QuestionCreateWithoutUpvotesInput, QuestionUncheckedCreateWithoutUpvotesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutUpvotesInput
    upsert?: QuestionUpsertWithoutUpvotesInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutUpvotesInput, QuestionUpdateWithoutUpvotesInput>, QuestionUncheckedUpdateWithoutUpvotesInput>
  }

  export type UserUpdateOneRequiredWithoutUpvotesNestedInput = {
    create?: XOR<UserCreateWithoutUpvotesInput, UserUncheckedCreateWithoutUpvotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpvotesInput
    upsert?: UserUpsertWithoutUpvotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpvotesInput, UserUpdateWithoutUpvotesInput>, UserUncheckedUpdateWithoutUpvotesInput>
  }

  export type EventCreateNestedOneWithoutPollsInput = {
    create?: XOR<EventCreateWithoutPollsInput, EventUncheckedCreateWithoutPollsInput>
    connectOrCreate?: EventCreateOrConnectWithoutPollsInput
    connect?: EventWhereUniqueInput
  }

  export type PollOptionCreateNestedManyWithoutPollInput = {
    create?: XOR<PollOptionCreateWithoutPollInput, PollOptionUncheckedCreateWithoutPollInput> | PollOptionCreateWithoutPollInput[] | PollOptionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: PollOptionCreateOrConnectWithoutPollInput | PollOptionCreateOrConnectWithoutPollInput[]
    createMany?: PollOptionCreateManyPollInputEnvelope
    connect?: PollOptionWhereUniqueInput | PollOptionWhereUniqueInput[]
  }

  export type PollVoteCreateNestedManyWithoutPollInput = {
    create?: XOR<PollVoteCreateWithoutPollInput, PollVoteUncheckedCreateWithoutPollInput> | PollVoteCreateWithoutPollInput[] | PollVoteUncheckedCreateWithoutPollInput[]
    connectOrCreate?: PollVoteCreateOrConnectWithoutPollInput | PollVoteCreateOrConnectWithoutPollInput[]
    createMany?: PollVoteCreateManyPollInputEnvelope
    connect?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
  }

  export type PollOptionUncheckedCreateNestedManyWithoutPollInput = {
    create?: XOR<PollOptionCreateWithoutPollInput, PollOptionUncheckedCreateWithoutPollInput> | PollOptionCreateWithoutPollInput[] | PollOptionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: PollOptionCreateOrConnectWithoutPollInput | PollOptionCreateOrConnectWithoutPollInput[]
    createMany?: PollOptionCreateManyPollInputEnvelope
    connect?: PollOptionWhereUniqueInput | PollOptionWhereUniqueInput[]
  }

  export type PollVoteUncheckedCreateNestedManyWithoutPollInput = {
    create?: XOR<PollVoteCreateWithoutPollInput, PollVoteUncheckedCreateWithoutPollInput> | PollVoteCreateWithoutPollInput[] | PollVoteUncheckedCreateWithoutPollInput[]
    connectOrCreate?: PollVoteCreateOrConnectWithoutPollInput | PollVoteCreateOrConnectWithoutPollInput[]
    createMany?: PollVoteCreateManyPollInputEnvelope
    connect?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutPollsNestedInput = {
    create?: XOR<EventCreateWithoutPollsInput, EventUncheckedCreateWithoutPollsInput>
    connectOrCreate?: EventCreateOrConnectWithoutPollsInput
    upsert?: EventUpsertWithoutPollsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutPollsInput, EventUpdateWithoutPollsInput>, EventUncheckedUpdateWithoutPollsInput>
  }

  export type PollOptionUpdateManyWithoutPollNestedInput = {
    create?: XOR<PollOptionCreateWithoutPollInput, PollOptionUncheckedCreateWithoutPollInput> | PollOptionCreateWithoutPollInput[] | PollOptionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: PollOptionCreateOrConnectWithoutPollInput | PollOptionCreateOrConnectWithoutPollInput[]
    upsert?: PollOptionUpsertWithWhereUniqueWithoutPollInput | PollOptionUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: PollOptionCreateManyPollInputEnvelope
    set?: PollOptionWhereUniqueInput | PollOptionWhereUniqueInput[]
    disconnect?: PollOptionWhereUniqueInput | PollOptionWhereUniqueInput[]
    delete?: PollOptionWhereUniqueInput | PollOptionWhereUniqueInput[]
    connect?: PollOptionWhereUniqueInput | PollOptionWhereUniqueInput[]
    update?: PollOptionUpdateWithWhereUniqueWithoutPollInput | PollOptionUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: PollOptionUpdateManyWithWhereWithoutPollInput | PollOptionUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: PollOptionScalarWhereInput | PollOptionScalarWhereInput[]
  }

  export type PollVoteUpdateManyWithoutPollNestedInput = {
    create?: XOR<PollVoteCreateWithoutPollInput, PollVoteUncheckedCreateWithoutPollInput> | PollVoteCreateWithoutPollInput[] | PollVoteUncheckedCreateWithoutPollInput[]
    connectOrCreate?: PollVoteCreateOrConnectWithoutPollInput | PollVoteCreateOrConnectWithoutPollInput[]
    upsert?: PollVoteUpsertWithWhereUniqueWithoutPollInput | PollVoteUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: PollVoteCreateManyPollInputEnvelope
    set?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    disconnect?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    delete?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    connect?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    update?: PollVoteUpdateWithWhereUniqueWithoutPollInput | PollVoteUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: PollVoteUpdateManyWithWhereWithoutPollInput | PollVoteUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: PollVoteScalarWhereInput | PollVoteScalarWhereInput[]
  }

  export type PollOptionUncheckedUpdateManyWithoutPollNestedInput = {
    create?: XOR<PollOptionCreateWithoutPollInput, PollOptionUncheckedCreateWithoutPollInput> | PollOptionCreateWithoutPollInput[] | PollOptionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: PollOptionCreateOrConnectWithoutPollInput | PollOptionCreateOrConnectWithoutPollInput[]
    upsert?: PollOptionUpsertWithWhereUniqueWithoutPollInput | PollOptionUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: PollOptionCreateManyPollInputEnvelope
    set?: PollOptionWhereUniqueInput | PollOptionWhereUniqueInput[]
    disconnect?: PollOptionWhereUniqueInput | PollOptionWhereUniqueInput[]
    delete?: PollOptionWhereUniqueInput | PollOptionWhereUniqueInput[]
    connect?: PollOptionWhereUniqueInput | PollOptionWhereUniqueInput[]
    update?: PollOptionUpdateWithWhereUniqueWithoutPollInput | PollOptionUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: PollOptionUpdateManyWithWhereWithoutPollInput | PollOptionUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: PollOptionScalarWhereInput | PollOptionScalarWhereInput[]
  }

  export type PollVoteUncheckedUpdateManyWithoutPollNestedInput = {
    create?: XOR<PollVoteCreateWithoutPollInput, PollVoteUncheckedCreateWithoutPollInput> | PollVoteCreateWithoutPollInput[] | PollVoteUncheckedCreateWithoutPollInput[]
    connectOrCreate?: PollVoteCreateOrConnectWithoutPollInput | PollVoteCreateOrConnectWithoutPollInput[]
    upsert?: PollVoteUpsertWithWhereUniqueWithoutPollInput | PollVoteUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: PollVoteCreateManyPollInputEnvelope
    set?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    disconnect?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    delete?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    connect?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    update?: PollVoteUpdateWithWhereUniqueWithoutPollInput | PollVoteUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: PollVoteUpdateManyWithWhereWithoutPollInput | PollVoteUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: PollVoteScalarWhereInput | PollVoteScalarWhereInput[]
  }

  export type PollCreateNestedOneWithoutOptionsInput = {
    create?: XOR<PollCreateWithoutOptionsInput, PollUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: PollCreateOrConnectWithoutOptionsInput
    connect?: PollWhereUniqueInput
  }

  export type PollVoteCreateNestedManyWithoutPollOptionInput = {
    create?: XOR<PollVoteCreateWithoutPollOptionInput, PollVoteUncheckedCreateWithoutPollOptionInput> | PollVoteCreateWithoutPollOptionInput[] | PollVoteUncheckedCreateWithoutPollOptionInput[]
    connectOrCreate?: PollVoteCreateOrConnectWithoutPollOptionInput | PollVoteCreateOrConnectWithoutPollOptionInput[]
    createMany?: PollVoteCreateManyPollOptionInputEnvelope
    connect?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
  }

  export type PollVoteUncheckedCreateNestedManyWithoutPollOptionInput = {
    create?: XOR<PollVoteCreateWithoutPollOptionInput, PollVoteUncheckedCreateWithoutPollOptionInput> | PollVoteCreateWithoutPollOptionInput[] | PollVoteUncheckedCreateWithoutPollOptionInput[]
    connectOrCreate?: PollVoteCreateOrConnectWithoutPollOptionInput | PollVoteCreateOrConnectWithoutPollOptionInput[]
    createMany?: PollVoteCreateManyPollOptionInputEnvelope
    connect?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PollUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<PollCreateWithoutOptionsInput, PollUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: PollCreateOrConnectWithoutOptionsInput
    upsert?: PollUpsertWithoutOptionsInput
    connect?: PollWhereUniqueInput
    update?: XOR<XOR<PollUpdateToOneWithWhereWithoutOptionsInput, PollUpdateWithoutOptionsInput>, PollUncheckedUpdateWithoutOptionsInput>
  }

  export type PollVoteUpdateManyWithoutPollOptionNestedInput = {
    create?: XOR<PollVoteCreateWithoutPollOptionInput, PollVoteUncheckedCreateWithoutPollOptionInput> | PollVoteCreateWithoutPollOptionInput[] | PollVoteUncheckedCreateWithoutPollOptionInput[]
    connectOrCreate?: PollVoteCreateOrConnectWithoutPollOptionInput | PollVoteCreateOrConnectWithoutPollOptionInput[]
    upsert?: PollVoteUpsertWithWhereUniqueWithoutPollOptionInput | PollVoteUpsertWithWhereUniqueWithoutPollOptionInput[]
    createMany?: PollVoteCreateManyPollOptionInputEnvelope
    set?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    disconnect?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    delete?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    connect?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    update?: PollVoteUpdateWithWhereUniqueWithoutPollOptionInput | PollVoteUpdateWithWhereUniqueWithoutPollOptionInput[]
    updateMany?: PollVoteUpdateManyWithWhereWithoutPollOptionInput | PollVoteUpdateManyWithWhereWithoutPollOptionInput[]
    deleteMany?: PollVoteScalarWhereInput | PollVoteScalarWhereInput[]
  }

  export type PollVoteUncheckedUpdateManyWithoutPollOptionNestedInput = {
    create?: XOR<PollVoteCreateWithoutPollOptionInput, PollVoteUncheckedCreateWithoutPollOptionInput> | PollVoteCreateWithoutPollOptionInput[] | PollVoteUncheckedCreateWithoutPollOptionInput[]
    connectOrCreate?: PollVoteCreateOrConnectWithoutPollOptionInput | PollVoteCreateOrConnectWithoutPollOptionInput[]
    upsert?: PollVoteUpsertWithWhereUniqueWithoutPollOptionInput | PollVoteUpsertWithWhereUniqueWithoutPollOptionInput[]
    createMany?: PollVoteCreateManyPollOptionInputEnvelope
    set?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    disconnect?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    delete?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    connect?: PollVoteWhereUniqueInput | PollVoteWhereUniqueInput[]
    update?: PollVoteUpdateWithWhereUniqueWithoutPollOptionInput | PollVoteUpdateWithWhereUniqueWithoutPollOptionInput[]
    updateMany?: PollVoteUpdateManyWithWhereWithoutPollOptionInput | PollVoteUpdateManyWithWhereWithoutPollOptionInput[]
    deleteMany?: PollVoteScalarWhereInput | PollVoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVotesInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    connect?: UserWhereUniqueInput
  }

  export type PollOptionCreateNestedOneWithoutVotesInput = {
    create?: XOR<PollOptionCreateWithoutVotesInput, PollOptionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: PollOptionCreateOrConnectWithoutVotesInput
    connect?: PollOptionWhereUniqueInput
  }

  export type PollCreateNestedOneWithoutVotesInput = {
    create?: XOR<PollCreateWithoutVotesInput, PollUncheckedCreateWithoutVotesInput>
    connectOrCreate?: PollCreateOrConnectWithoutVotesInput
    connect?: PollWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    upsert?: UserUpsertWithoutVotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVotesInput, UserUpdateWithoutVotesInput>, UserUncheckedUpdateWithoutVotesInput>
  }

  export type PollOptionUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<PollOptionCreateWithoutVotesInput, PollOptionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: PollOptionCreateOrConnectWithoutVotesInput
    upsert?: PollOptionUpsertWithoutVotesInput
    connect?: PollOptionWhereUniqueInput
    update?: XOR<XOR<PollOptionUpdateToOneWithWhereWithoutVotesInput, PollOptionUpdateWithoutVotesInput>, PollOptionUncheckedUpdateWithoutVotesInput>
  }

  export type PollUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<PollCreateWithoutVotesInput, PollUncheckedCreateWithoutVotesInput>
    connectOrCreate?: PollCreateOrConnectWithoutVotesInput
    upsert?: PollUpsertWithoutVotesInput
    connect?: PollWhereUniqueInput
    update?: XOR<XOR<PollUpdateToOneWithWhereWithoutVotesInput, PollUpdateWithoutVotesInput>, PollUncheckedUpdateWithoutVotesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EventCreateWithoutOwnerInput = {
    id?: string
    displayName: string
    slug?: string | null
    createdAt?: Date | string
    participants?: EventParticipantCreateNestedManyWithoutEventInput
    questions?: QuestionCreateNestedManyWithoutEventInput
    polls?: PollCreateNestedManyWithoutEventInput
    bookMarkedBy?: UserCreateNestedManyWithoutBookMarksInput
  }

  export type EventUncheckedCreateWithoutOwnerInput = {
    id?: string
    displayName: string
    slug?: string | null
    createdAt?: Date | string
    participants?: EventParticipantUncheckedCreateNestedManyWithoutEventInput
    questions?: QuestionUncheckedCreateNestedManyWithoutEventInput
    polls?: PollUncheckedCreateNestedManyWithoutEventInput
    bookMarkedBy?: UserUncheckedCreateNestedManyWithoutBookMarksInput
  }

  export type EventCreateOrConnectWithoutOwnerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput>
  }

  export type EventCreateManyOwnerInputEnvelope = {
    data: EventCreateManyOwnerInput | EventCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type EventParticipantCreateWithoutUserInput = {
    event: EventCreateNestedOneWithoutParticipantsInput
  }

  export type EventParticipantUncheckedCreateWithoutUserInput = {
    eventId: string
  }

  export type EventParticipantCreateOrConnectWithoutUserInput = {
    where: EventParticipantWhereUniqueInput
    create: XOR<EventParticipantCreateWithoutUserInput, EventParticipantUncheckedCreateWithoutUserInput>
  }

  export type EventParticipantCreateManyUserInputEnvelope = {
    data: EventParticipantCreateManyUserInput | EventParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isPinned?: boolean
    isResolved?: boolean
    event: EventCreateNestedOneWithoutQuestionsInput
    upvotes?: QuestionUpvoteCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isPinned?: boolean
    isResolved?: boolean
    eventId: string
    upvotes?: QuestionUpvoteUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAuthorInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAuthorInput, QuestionUncheckedCreateWithoutAuthorInput>
  }

  export type QuestionCreateManyAuthorInputEnvelope = {
    data: QuestionCreateManyAuthorInput | QuestionCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpvoteCreateWithoutAuthorInput = {
    question: QuestionCreateNestedOneWithoutUpvotesInput
  }

  export type QuestionUpvoteUncheckedCreateWithoutAuthorInput = {
    questionId: string
  }

  export type QuestionUpvoteCreateOrConnectWithoutAuthorInput = {
    where: QuestionUpvoteWhereUniqueInput
    create: XOR<QuestionUpvoteCreateWithoutAuthorInput, QuestionUpvoteUncheckedCreateWithoutAuthorInput>
  }

  export type QuestionUpvoteCreateManyAuthorInputEnvelope = {
    data: QuestionUpvoteCreateManyAuthorInput | QuestionUpvoteCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PollVoteCreateWithoutAuthorInput = {
    pollOption: PollOptionCreateNestedOneWithoutVotesInput
    poll: PollCreateNestedOneWithoutVotesInput
  }

  export type PollVoteUncheckedCreateWithoutAuthorInput = {
    pollOptionId: string
    pollId: string
  }

  export type PollVoteCreateOrConnectWithoutAuthorInput = {
    where: PollVoteWhereUniqueInput
    create: XOR<PollVoteCreateWithoutAuthorInput, PollVoteUncheckedCreateWithoutAuthorInput>
  }

  export type PollVoteCreateManyAuthorInputEnvelope = {
    data: PollVoteCreateManyAuthorInput | PollVoteCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutBookMarkedByInput = {
    id?: string
    displayName: string
    slug?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutEventsInput
    participants?: EventParticipantCreateNestedManyWithoutEventInput
    questions?: QuestionCreateNestedManyWithoutEventInput
    polls?: PollCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutBookMarkedByInput = {
    id?: string
    displayName: string
    slug?: string | null
    createdAt?: Date | string
    ownerId: string
    participants?: EventParticipantUncheckedCreateNestedManyWithoutEventInput
    questions?: QuestionUncheckedCreateNestedManyWithoutEventInput
    polls?: PollUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutBookMarkedByInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutBookMarkedByInput, EventUncheckedCreateWithoutBookMarkedByInput>
  }

  export type EventUpsertWithWhereUniqueWithoutOwnerInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutOwnerInput, EventUncheckedUpdateWithoutOwnerInput>
    create: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput>
  }

  export type EventUpdateWithWhereUniqueWithoutOwnerInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutOwnerInput, EventUncheckedUpdateWithoutOwnerInput>
  }

  export type EventUpdateManyWithWhereWithoutOwnerInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutOwnerInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    displayName?: StringFilter<"Event"> | string
    slug?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    ownerId?: StringFilter<"Event"> | string
  }

  export type EventParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: EventParticipantWhereUniqueInput
    update: XOR<EventParticipantUpdateWithoutUserInput, EventParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<EventParticipantCreateWithoutUserInput, EventParticipantUncheckedCreateWithoutUserInput>
  }

  export type EventParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: EventParticipantWhereUniqueInput
    data: XOR<EventParticipantUpdateWithoutUserInput, EventParticipantUncheckedUpdateWithoutUserInput>
  }

  export type EventParticipantUpdateManyWithWhereWithoutUserInput = {
    where: EventParticipantScalarWhereInput
    data: XOR<EventParticipantUpdateManyMutationInput, EventParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type EventParticipantScalarWhereInput = {
    AND?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
    OR?: EventParticipantScalarWhereInput[]
    NOT?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
    eventId?: StringFilter<"EventParticipant"> | string
    userId?: StringFilter<"EventParticipant"> | string
  }

  export type QuestionUpsertWithWhereUniqueWithoutAuthorInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutAuthorInput, QuestionUncheckedUpdateWithoutAuthorInput>
    create: XOR<QuestionCreateWithoutAuthorInput, QuestionUncheckedCreateWithoutAuthorInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutAuthorInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutAuthorInput, QuestionUncheckedUpdateWithoutAuthorInput>
  }

  export type QuestionUpdateManyWithWhereWithoutAuthorInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutAuthorInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    body?: StringFilter<"Question"> | string
    isPinned?: BoolFilter<"Question"> | boolean
    isResolved?: BoolFilter<"Question"> | boolean
    eventId?: StringFilter<"Question"> | string
    userId?: StringFilter<"Question"> | string
  }

  export type QuestionUpvoteUpsertWithWhereUniqueWithoutAuthorInput = {
    where: QuestionUpvoteWhereUniqueInput
    update: XOR<QuestionUpvoteUpdateWithoutAuthorInput, QuestionUpvoteUncheckedUpdateWithoutAuthorInput>
    create: XOR<QuestionUpvoteCreateWithoutAuthorInput, QuestionUpvoteUncheckedCreateWithoutAuthorInput>
  }

  export type QuestionUpvoteUpdateWithWhereUniqueWithoutAuthorInput = {
    where: QuestionUpvoteWhereUniqueInput
    data: XOR<QuestionUpvoteUpdateWithoutAuthorInput, QuestionUpvoteUncheckedUpdateWithoutAuthorInput>
  }

  export type QuestionUpvoteUpdateManyWithWhereWithoutAuthorInput = {
    where: QuestionUpvoteScalarWhereInput
    data: XOR<QuestionUpvoteUpdateManyMutationInput, QuestionUpvoteUncheckedUpdateManyWithoutAuthorInput>
  }

  export type QuestionUpvoteScalarWhereInput = {
    AND?: QuestionUpvoteScalarWhereInput | QuestionUpvoteScalarWhereInput[]
    OR?: QuestionUpvoteScalarWhereInput[]
    NOT?: QuestionUpvoteScalarWhereInput | QuestionUpvoteScalarWhereInput[]
    questionId?: StringFilter<"QuestionUpvote"> | string
    authorId?: StringFilter<"QuestionUpvote"> | string
  }

  export type PollVoteUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PollVoteWhereUniqueInput
    update: XOR<PollVoteUpdateWithoutAuthorInput, PollVoteUncheckedUpdateWithoutAuthorInput>
    create: XOR<PollVoteCreateWithoutAuthorInput, PollVoteUncheckedCreateWithoutAuthorInput>
  }

  export type PollVoteUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PollVoteWhereUniqueInput
    data: XOR<PollVoteUpdateWithoutAuthorInput, PollVoteUncheckedUpdateWithoutAuthorInput>
  }

  export type PollVoteUpdateManyWithWhereWithoutAuthorInput = {
    where: PollVoteScalarWhereInput
    data: XOR<PollVoteUpdateManyMutationInput, PollVoteUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PollVoteScalarWhereInput = {
    AND?: PollVoteScalarWhereInput | PollVoteScalarWhereInput[]
    OR?: PollVoteScalarWhereInput[]
    NOT?: PollVoteScalarWhereInput | PollVoteScalarWhereInput[]
    authorId?: StringFilter<"PollVote"> | string
    pollOptionId?: StringFilter<"PollVote"> | string
    pollId?: StringFilter<"PollVote"> | string
  }

  export type EventUpsertWithWhereUniqueWithoutBookMarkedByInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutBookMarkedByInput, EventUncheckedUpdateWithoutBookMarkedByInput>
    create: XOR<EventCreateWithoutBookMarkedByInput, EventUncheckedCreateWithoutBookMarkedByInput>
  }

  export type EventUpdateWithWhereUniqueWithoutBookMarkedByInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutBookMarkedByInput, EventUncheckedUpdateWithoutBookMarkedByInput>
  }

  export type EventUpdateManyWithWhereWithoutBookMarkedByInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutBookMarkedByInput>
  }

  export type UserCreateWithoutEventsInput = {
    id: string
    email: string
    createdAt?: Date | string
    displayName: string
    color: string
    participations?: EventParticipantCreateNestedManyWithoutUserInput
    questions?: QuestionCreateNestedManyWithoutAuthorInput
    upvotes?: QuestionUpvoteCreateNestedManyWithoutAuthorInput
    votes?: PollVoteCreateNestedManyWithoutAuthorInput
    bookMarks?: EventCreateNestedManyWithoutBookMarkedByInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id: string
    email: string
    createdAt?: Date | string
    displayName: string
    color: string
    participations?: EventParticipantUncheckedCreateNestedManyWithoutUserInput
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput
    upvotes?: QuestionUpvoteUncheckedCreateNestedManyWithoutAuthorInput
    votes?: PollVoteUncheckedCreateNestedManyWithoutAuthorInput
    bookMarks?: EventUncheckedCreateNestedManyWithoutBookMarkedByInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type EventParticipantCreateWithoutEventInput = {
    user: UserCreateNestedOneWithoutParticipationsInput
  }

  export type EventParticipantUncheckedCreateWithoutEventInput = {
    userId: string
  }

  export type EventParticipantCreateOrConnectWithoutEventInput = {
    where: EventParticipantWhereUniqueInput
    create: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput>
  }

  export type EventParticipantCreateManyEventInputEnvelope = {
    data: EventParticipantCreateManyEventInput | EventParticipantCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutEventInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isPinned?: boolean
    isResolved?: boolean
    author: UserCreateNestedOneWithoutQuestionsInput
    upvotes?: QuestionUpvoteCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutEventInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isPinned?: boolean
    isResolved?: boolean
    userId: string
    upvotes?: QuestionUpvoteUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutEventInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutEventInput, QuestionUncheckedCreateWithoutEventInput>
  }

  export type QuestionCreateManyEventInputEnvelope = {
    data: QuestionCreateManyEventInput | QuestionCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type PollCreateWithoutEventInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isLive?: boolean
    options?: PollOptionCreateNestedManyWithoutPollInput
    votes?: PollVoteCreateNestedManyWithoutPollInput
  }

  export type PollUncheckedCreateWithoutEventInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isLive?: boolean
    options?: PollOptionUncheckedCreateNestedManyWithoutPollInput
    votes?: PollVoteUncheckedCreateNestedManyWithoutPollInput
  }

  export type PollCreateOrConnectWithoutEventInput = {
    where: PollWhereUniqueInput
    create: XOR<PollCreateWithoutEventInput, PollUncheckedCreateWithoutEventInput>
  }

  export type PollCreateManyEventInputEnvelope = {
    data: PollCreateManyEventInput | PollCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutBookMarksInput = {
    id: string
    email: string
    createdAt?: Date | string
    displayName: string
    color: string
    events?: EventCreateNestedManyWithoutOwnerInput
    participations?: EventParticipantCreateNestedManyWithoutUserInput
    questions?: QuestionCreateNestedManyWithoutAuthorInput
    upvotes?: QuestionUpvoteCreateNestedManyWithoutAuthorInput
    votes?: PollVoteCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutBookMarksInput = {
    id: string
    email: string
    createdAt?: Date | string
    displayName: string
    color: string
    events?: EventUncheckedCreateNestedManyWithoutOwnerInput
    participations?: EventParticipantUncheckedCreateNestedManyWithoutUserInput
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput
    upvotes?: QuestionUpvoteUncheckedCreateNestedManyWithoutAuthorInput
    votes?: PollVoteUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutBookMarksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookMarksInput, UserUncheckedCreateWithoutBookMarksInput>
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    participations?: EventParticipantUpdateManyWithoutUserNestedInput
    questions?: QuestionUpdateManyWithoutAuthorNestedInput
    upvotes?: QuestionUpvoteUpdateManyWithoutAuthorNestedInput
    votes?: PollVoteUpdateManyWithoutAuthorNestedInput
    bookMarks?: EventUpdateManyWithoutBookMarkedByNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    participations?: EventParticipantUncheckedUpdateManyWithoutUserNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput
    upvotes?: QuestionUpvoteUncheckedUpdateManyWithoutAuthorNestedInput
    votes?: PollVoteUncheckedUpdateManyWithoutAuthorNestedInput
    bookMarks?: EventUncheckedUpdateManyWithoutBookMarkedByNestedInput
  }

  export type EventParticipantUpsertWithWhereUniqueWithoutEventInput = {
    where: EventParticipantWhereUniqueInput
    update: XOR<EventParticipantUpdateWithoutEventInput, EventParticipantUncheckedUpdateWithoutEventInput>
    create: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput>
  }

  export type EventParticipantUpdateWithWhereUniqueWithoutEventInput = {
    where: EventParticipantWhereUniqueInput
    data: XOR<EventParticipantUpdateWithoutEventInput, EventParticipantUncheckedUpdateWithoutEventInput>
  }

  export type EventParticipantUpdateManyWithWhereWithoutEventInput = {
    where: EventParticipantScalarWhereInput
    data: XOR<EventParticipantUpdateManyMutationInput, EventParticipantUncheckedUpdateManyWithoutEventInput>
  }

  export type QuestionUpsertWithWhereUniqueWithoutEventInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutEventInput, QuestionUncheckedUpdateWithoutEventInput>
    create: XOR<QuestionCreateWithoutEventInput, QuestionUncheckedCreateWithoutEventInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutEventInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutEventInput, QuestionUncheckedUpdateWithoutEventInput>
  }

  export type QuestionUpdateManyWithWhereWithoutEventInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutEventInput>
  }

  export type PollUpsertWithWhereUniqueWithoutEventInput = {
    where: PollWhereUniqueInput
    update: XOR<PollUpdateWithoutEventInput, PollUncheckedUpdateWithoutEventInput>
    create: XOR<PollCreateWithoutEventInput, PollUncheckedCreateWithoutEventInput>
  }

  export type PollUpdateWithWhereUniqueWithoutEventInput = {
    where: PollWhereUniqueInput
    data: XOR<PollUpdateWithoutEventInput, PollUncheckedUpdateWithoutEventInput>
  }

  export type PollUpdateManyWithWhereWithoutEventInput = {
    where: PollScalarWhereInput
    data: XOR<PollUpdateManyMutationInput, PollUncheckedUpdateManyWithoutEventInput>
  }

  export type PollScalarWhereInput = {
    AND?: PollScalarWhereInput | PollScalarWhereInput[]
    OR?: PollScalarWhereInput[]
    NOT?: PollScalarWhereInput | PollScalarWhereInput[]
    id?: StringFilter<"Poll"> | string
    createdAt?: DateTimeFilter<"Poll"> | Date | string
    body?: StringFilter<"Poll"> | string
    isLive?: BoolFilter<"Poll"> | boolean
    eventId?: StringFilter<"Poll"> | string
  }

  export type UserUpsertWithWhereUniqueWithoutBookMarksInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBookMarksInput, UserUncheckedUpdateWithoutBookMarksInput>
    create: XOR<UserCreateWithoutBookMarksInput, UserUncheckedCreateWithoutBookMarksInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBookMarksInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBookMarksInput, UserUncheckedUpdateWithoutBookMarksInput>
  }

  export type UserUpdateManyWithWhereWithoutBookMarksInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBookMarksInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    displayName?: StringFilter<"User"> | string
    color?: StringFilter<"User"> | string
  }

  export type EventCreateWithoutParticipantsInput = {
    id?: string
    displayName: string
    slug?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutEventsInput
    questions?: QuestionCreateNestedManyWithoutEventInput
    polls?: PollCreateNestedManyWithoutEventInput
    bookMarkedBy?: UserCreateNestedManyWithoutBookMarksInput
  }

  export type EventUncheckedCreateWithoutParticipantsInput = {
    id?: string
    displayName: string
    slug?: string | null
    createdAt?: Date | string
    ownerId: string
    questions?: QuestionUncheckedCreateNestedManyWithoutEventInput
    polls?: PollUncheckedCreateNestedManyWithoutEventInput
    bookMarkedBy?: UserUncheckedCreateNestedManyWithoutBookMarksInput
  }

  export type EventCreateOrConnectWithoutParticipantsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutParticipationsInput = {
    id: string
    email: string
    createdAt?: Date | string
    displayName: string
    color: string
    events?: EventCreateNestedManyWithoutOwnerInput
    questions?: QuestionCreateNestedManyWithoutAuthorInput
    upvotes?: QuestionUpvoteCreateNestedManyWithoutAuthorInput
    votes?: PollVoteCreateNestedManyWithoutAuthorInput
    bookMarks?: EventCreateNestedManyWithoutBookMarkedByInput
  }

  export type UserUncheckedCreateWithoutParticipationsInput = {
    id: string
    email: string
    createdAt?: Date | string
    displayName: string
    color: string
    events?: EventUncheckedCreateNestedManyWithoutOwnerInput
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput
    upvotes?: QuestionUpvoteUncheckedCreateNestedManyWithoutAuthorInput
    votes?: PollVoteUncheckedCreateNestedManyWithoutAuthorInput
    bookMarks?: EventUncheckedCreateNestedManyWithoutBookMarkedByInput
  }

  export type UserCreateOrConnectWithoutParticipationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
  }

  export type EventUpsertWithoutParticipantsInput = {
    update: XOR<EventUpdateWithoutParticipantsInput, EventUncheckedUpdateWithoutParticipantsInput>
    create: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutParticipantsInput, EventUncheckedUpdateWithoutParticipantsInput>
  }

  export type EventUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEventsNestedInput
    questions?: QuestionUpdateManyWithoutEventNestedInput
    polls?: PollUpdateManyWithoutEventNestedInput
    bookMarkedBy?: UserUpdateManyWithoutBookMarksNestedInput
  }

  export type EventUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutEventNestedInput
    polls?: PollUncheckedUpdateManyWithoutEventNestedInput
    bookMarkedBy?: UserUncheckedUpdateManyWithoutBookMarksNestedInput
  }

  export type UserUpsertWithoutParticipationsInput = {
    update: XOR<UserUpdateWithoutParticipationsInput, UserUncheckedUpdateWithoutParticipationsInput>
    create: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParticipationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParticipationsInput, UserUncheckedUpdateWithoutParticipationsInput>
  }

  export type UserUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    events?: EventUpdateManyWithoutOwnerNestedInput
    questions?: QuestionUpdateManyWithoutAuthorNestedInput
    upvotes?: QuestionUpvoteUpdateManyWithoutAuthorNestedInput
    votes?: PollVoteUpdateManyWithoutAuthorNestedInput
    bookMarks?: EventUpdateManyWithoutBookMarkedByNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutOwnerNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput
    upvotes?: QuestionUpvoteUncheckedUpdateManyWithoutAuthorNestedInput
    votes?: PollVoteUncheckedUpdateManyWithoutAuthorNestedInput
    bookMarks?: EventUncheckedUpdateManyWithoutBookMarkedByNestedInput
  }

  export type EventCreateWithoutQuestionsInput = {
    id?: string
    displayName: string
    slug?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutEventsInput
    participants?: EventParticipantCreateNestedManyWithoutEventInput
    polls?: PollCreateNestedManyWithoutEventInput
    bookMarkedBy?: UserCreateNestedManyWithoutBookMarksInput
  }

  export type EventUncheckedCreateWithoutQuestionsInput = {
    id?: string
    displayName: string
    slug?: string | null
    createdAt?: Date | string
    ownerId: string
    participants?: EventParticipantUncheckedCreateNestedManyWithoutEventInput
    polls?: PollUncheckedCreateNestedManyWithoutEventInput
    bookMarkedBy?: UserUncheckedCreateNestedManyWithoutBookMarksInput
  }

  export type EventCreateOrConnectWithoutQuestionsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutQuestionsInput, EventUncheckedCreateWithoutQuestionsInput>
  }

  export type UserCreateWithoutQuestionsInput = {
    id: string
    email: string
    createdAt?: Date | string
    displayName: string
    color: string
    events?: EventCreateNestedManyWithoutOwnerInput
    participations?: EventParticipantCreateNestedManyWithoutUserInput
    upvotes?: QuestionUpvoteCreateNestedManyWithoutAuthorInput
    votes?: PollVoteCreateNestedManyWithoutAuthorInput
    bookMarks?: EventCreateNestedManyWithoutBookMarkedByInput
  }

  export type UserUncheckedCreateWithoutQuestionsInput = {
    id: string
    email: string
    createdAt?: Date | string
    displayName: string
    color: string
    events?: EventUncheckedCreateNestedManyWithoutOwnerInput
    participations?: EventParticipantUncheckedCreateNestedManyWithoutUserInput
    upvotes?: QuestionUpvoteUncheckedCreateNestedManyWithoutAuthorInput
    votes?: PollVoteUncheckedCreateNestedManyWithoutAuthorInput
    bookMarks?: EventUncheckedCreateNestedManyWithoutBookMarkedByInput
  }

  export type UserCreateOrConnectWithoutQuestionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
  }

  export type QuestionUpvoteCreateWithoutQuestionInput = {
    author: UserCreateNestedOneWithoutUpvotesInput
  }

  export type QuestionUpvoteUncheckedCreateWithoutQuestionInput = {
    authorId: string
  }

  export type QuestionUpvoteCreateOrConnectWithoutQuestionInput = {
    where: QuestionUpvoteWhereUniqueInput
    create: XOR<QuestionUpvoteCreateWithoutQuestionInput, QuestionUpvoteUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionUpvoteCreateManyQuestionInputEnvelope = {
    data: QuestionUpvoteCreateManyQuestionInput | QuestionUpvoteCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutQuestionsInput = {
    update: XOR<EventUpdateWithoutQuestionsInput, EventUncheckedUpdateWithoutQuestionsInput>
    create: XOR<EventCreateWithoutQuestionsInput, EventUncheckedCreateWithoutQuestionsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutQuestionsInput, EventUncheckedUpdateWithoutQuestionsInput>
  }

  export type EventUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEventsNestedInput
    participants?: EventParticipantUpdateManyWithoutEventNestedInput
    polls?: PollUpdateManyWithoutEventNestedInput
    bookMarkedBy?: UserUpdateManyWithoutBookMarksNestedInput
  }

  export type EventUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    participants?: EventParticipantUncheckedUpdateManyWithoutEventNestedInput
    polls?: PollUncheckedUpdateManyWithoutEventNestedInput
    bookMarkedBy?: UserUncheckedUpdateManyWithoutBookMarksNestedInput
  }

  export type UserUpsertWithoutQuestionsInput = {
    update: XOR<UserUpdateWithoutQuestionsInput, UserUncheckedUpdateWithoutQuestionsInput>
    create: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuestionsInput, UserUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    events?: EventUpdateManyWithoutOwnerNestedInput
    participations?: EventParticipantUpdateManyWithoutUserNestedInput
    upvotes?: QuestionUpvoteUpdateManyWithoutAuthorNestedInput
    votes?: PollVoteUpdateManyWithoutAuthorNestedInput
    bookMarks?: EventUpdateManyWithoutBookMarkedByNestedInput
  }

  export type UserUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutOwnerNestedInput
    participations?: EventParticipantUncheckedUpdateManyWithoutUserNestedInput
    upvotes?: QuestionUpvoteUncheckedUpdateManyWithoutAuthorNestedInput
    votes?: PollVoteUncheckedUpdateManyWithoutAuthorNestedInput
    bookMarks?: EventUncheckedUpdateManyWithoutBookMarkedByNestedInput
  }

  export type QuestionUpvoteUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionUpvoteWhereUniqueInput
    update: XOR<QuestionUpvoteUpdateWithoutQuestionInput, QuestionUpvoteUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionUpvoteCreateWithoutQuestionInput, QuestionUpvoteUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionUpvoteUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionUpvoteWhereUniqueInput
    data: XOR<QuestionUpvoteUpdateWithoutQuestionInput, QuestionUpvoteUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionUpvoteUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionUpvoteScalarWhereInput
    data: XOR<QuestionUpvoteUpdateManyMutationInput, QuestionUpvoteUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionCreateWithoutUpvotesInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isPinned?: boolean
    isResolved?: boolean
    event: EventCreateNestedOneWithoutQuestionsInput
    author: UserCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutUpvotesInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isPinned?: boolean
    isResolved?: boolean
    eventId: string
    userId: string
  }

  export type QuestionCreateOrConnectWithoutUpvotesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutUpvotesInput, QuestionUncheckedCreateWithoutUpvotesInput>
  }

  export type UserCreateWithoutUpvotesInput = {
    id: string
    email: string
    createdAt?: Date | string
    displayName: string
    color: string
    events?: EventCreateNestedManyWithoutOwnerInput
    participations?: EventParticipantCreateNestedManyWithoutUserInput
    questions?: QuestionCreateNestedManyWithoutAuthorInput
    votes?: PollVoteCreateNestedManyWithoutAuthorInput
    bookMarks?: EventCreateNestedManyWithoutBookMarkedByInput
  }

  export type UserUncheckedCreateWithoutUpvotesInput = {
    id: string
    email: string
    createdAt?: Date | string
    displayName: string
    color: string
    events?: EventUncheckedCreateNestedManyWithoutOwnerInput
    participations?: EventParticipantUncheckedCreateNestedManyWithoutUserInput
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput
    votes?: PollVoteUncheckedCreateNestedManyWithoutAuthorInput
    bookMarks?: EventUncheckedCreateNestedManyWithoutBookMarkedByInput
  }

  export type UserCreateOrConnectWithoutUpvotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpvotesInput, UserUncheckedCreateWithoutUpvotesInput>
  }

  export type QuestionUpsertWithoutUpvotesInput = {
    update: XOR<QuestionUpdateWithoutUpvotesInput, QuestionUncheckedUpdateWithoutUpvotesInput>
    create: XOR<QuestionCreateWithoutUpvotesInput, QuestionUncheckedCreateWithoutUpvotesInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutUpvotesInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutUpvotesInput, QuestionUncheckedUpdateWithoutUpvotesInput>
  }

  export type QuestionUpdateWithoutUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutQuestionsNestedInput
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutUpvotesInput = {
    update: XOR<UserUpdateWithoutUpvotesInput, UserUncheckedUpdateWithoutUpvotesInput>
    create: XOR<UserCreateWithoutUpvotesInput, UserUncheckedCreateWithoutUpvotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpvotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpvotesInput, UserUncheckedUpdateWithoutUpvotesInput>
  }

  export type UserUpdateWithoutUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    events?: EventUpdateManyWithoutOwnerNestedInput
    participations?: EventParticipantUpdateManyWithoutUserNestedInput
    questions?: QuestionUpdateManyWithoutAuthorNestedInput
    votes?: PollVoteUpdateManyWithoutAuthorNestedInput
    bookMarks?: EventUpdateManyWithoutBookMarkedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutOwnerNestedInput
    participations?: EventParticipantUncheckedUpdateManyWithoutUserNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput
    votes?: PollVoteUncheckedUpdateManyWithoutAuthorNestedInput
    bookMarks?: EventUncheckedUpdateManyWithoutBookMarkedByNestedInput
  }

  export type EventCreateWithoutPollsInput = {
    id?: string
    displayName: string
    slug?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutEventsInput
    participants?: EventParticipantCreateNestedManyWithoutEventInput
    questions?: QuestionCreateNestedManyWithoutEventInput
    bookMarkedBy?: UserCreateNestedManyWithoutBookMarksInput
  }

  export type EventUncheckedCreateWithoutPollsInput = {
    id?: string
    displayName: string
    slug?: string | null
    createdAt?: Date | string
    ownerId: string
    participants?: EventParticipantUncheckedCreateNestedManyWithoutEventInput
    questions?: QuestionUncheckedCreateNestedManyWithoutEventInput
    bookMarkedBy?: UserUncheckedCreateNestedManyWithoutBookMarksInput
  }

  export type EventCreateOrConnectWithoutPollsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutPollsInput, EventUncheckedCreateWithoutPollsInput>
  }

  export type PollOptionCreateWithoutPollInput = {
    id?: string
    index: number
    body: string
    votes?: PollVoteCreateNestedManyWithoutPollOptionInput
  }

  export type PollOptionUncheckedCreateWithoutPollInput = {
    id?: string
    index: number
    body: string
    votes?: PollVoteUncheckedCreateNestedManyWithoutPollOptionInput
  }

  export type PollOptionCreateOrConnectWithoutPollInput = {
    where: PollOptionWhereUniqueInput
    create: XOR<PollOptionCreateWithoutPollInput, PollOptionUncheckedCreateWithoutPollInput>
  }

  export type PollOptionCreateManyPollInputEnvelope = {
    data: PollOptionCreateManyPollInput | PollOptionCreateManyPollInput[]
    skipDuplicates?: boolean
  }

  export type PollVoteCreateWithoutPollInput = {
    author: UserCreateNestedOneWithoutVotesInput
    pollOption: PollOptionCreateNestedOneWithoutVotesInput
  }

  export type PollVoteUncheckedCreateWithoutPollInput = {
    authorId: string
    pollOptionId: string
  }

  export type PollVoteCreateOrConnectWithoutPollInput = {
    where: PollVoteWhereUniqueInput
    create: XOR<PollVoteCreateWithoutPollInput, PollVoteUncheckedCreateWithoutPollInput>
  }

  export type PollVoteCreateManyPollInputEnvelope = {
    data: PollVoteCreateManyPollInput | PollVoteCreateManyPollInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutPollsInput = {
    update: XOR<EventUpdateWithoutPollsInput, EventUncheckedUpdateWithoutPollsInput>
    create: XOR<EventCreateWithoutPollsInput, EventUncheckedCreateWithoutPollsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutPollsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutPollsInput, EventUncheckedUpdateWithoutPollsInput>
  }

  export type EventUpdateWithoutPollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEventsNestedInput
    participants?: EventParticipantUpdateManyWithoutEventNestedInput
    questions?: QuestionUpdateManyWithoutEventNestedInput
    bookMarkedBy?: UserUpdateManyWithoutBookMarksNestedInput
  }

  export type EventUncheckedUpdateWithoutPollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    participants?: EventParticipantUncheckedUpdateManyWithoutEventNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutEventNestedInput
    bookMarkedBy?: UserUncheckedUpdateManyWithoutBookMarksNestedInput
  }

  export type PollOptionUpsertWithWhereUniqueWithoutPollInput = {
    where: PollOptionWhereUniqueInput
    update: XOR<PollOptionUpdateWithoutPollInput, PollOptionUncheckedUpdateWithoutPollInput>
    create: XOR<PollOptionCreateWithoutPollInput, PollOptionUncheckedCreateWithoutPollInput>
  }

  export type PollOptionUpdateWithWhereUniqueWithoutPollInput = {
    where: PollOptionWhereUniqueInput
    data: XOR<PollOptionUpdateWithoutPollInput, PollOptionUncheckedUpdateWithoutPollInput>
  }

  export type PollOptionUpdateManyWithWhereWithoutPollInput = {
    where: PollOptionScalarWhereInput
    data: XOR<PollOptionUpdateManyMutationInput, PollOptionUncheckedUpdateManyWithoutPollInput>
  }

  export type PollOptionScalarWhereInput = {
    AND?: PollOptionScalarWhereInput | PollOptionScalarWhereInput[]
    OR?: PollOptionScalarWhereInput[]
    NOT?: PollOptionScalarWhereInput | PollOptionScalarWhereInput[]
    id?: StringFilter<"PollOption"> | string
    index?: IntFilter<"PollOption"> | number
    body?: StringFilter<"PollOption"> | string
    pollId?: StringFilter<"PollOption"> | string
  }

  export type PollVoteUpsertWithWhereUniqueWithoutPollInput = {
    where: PollVoteWhereUniqueInput
    update: XOR<PollVoteUpdateWithoutPollInput, PollVoteUncheckedUpdateWithoutPollInput>
    create: XOR<PollVoteCreateWithoutPollInput, PollVoteUncheckedCreateWithoutPollInput>
  }

  export type PollVoteUpdateWithWhereUniqueWithoutPollInput = {
    where: PollVoteWhereUniqueInput
    data: XOR<PollVoteUpdateWithoutPollInput, PollVoteUncheckedUpdateWithoutPollInput>
  }

  export type PollVoteUpdateManyWithWhereWithoutPollInput = {
    where: PollVoteScalarWhereInput
    data: XOR<PollVoteUpdateManyMutationInput, PollVoteUncheckedUpdateManyWithoutPollInput>
  }

  export type PollCreateWithoutOptionsInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isLive?: boolean
    event: EventCreateNestedOneWithoutPollsInput
    votes?: PollVoteCreateNestedManyWithoutPollInput
  }

  export type PollUncheckedCreateWithoutOptionsInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isLive?: boolean
    eventId: string
    votes?: PollVoteUncheckedCreateNestedManyWithoutPollInput
  }

  export type PollCreateOrConnectWithoutOptionsInput = {
    where: PollWhereUniqueInput
    create: XOR<PollCreateWithoutOptionsInput, PollUncheckedCreateWithoutOptionsInput>
  }

  export type PollVoteCreateWithoutPollOptionInput = {
    author: UserCreateNestedOneWithoutVotesInput
    poll: PollCreateNestedOneWithoutVotesInput
  }

  export type PollVoteUncheckedCreateWithoutPollOptionInput = {
    authorId: string
    pollId: string
  }

  export type PollVoteCreateOrConnectWithoutPollOptionInput = {
    where: PollVoteWhereUniqueInput
    create: XOR<PollVoteCreateWithoutPollOptionInput, PollVoteUncheckedCreateWithoutPollOptionInput>
  }

  export type PollVoteCreateManyPollOptionInputEnvelope = {
    data: PollVoteCreateManyPollOptionInput | PollVoteCreateManyPollOptionInput[]
    skipDuplicates?: boolean
  }

  export type PollUpsertWithoutOptionsInput = {
    update: XOR<PollUpdateWithoutOptionsInput, PollUncheckedUpdateWithoutOptionsInput>
    create: XOR<PollCreateWithoutOptionsInput, PollUncheckedCreateWithoutOptionsInput>
    where?: PollWhereInput
  }

  export type PollUpdateToOneWithWhereWithoutOptionsInput = {
    where?: PollWhereInput
    data: XOR<PollUpdateWithoutOptionsInput, PollUncheckedUpdateWithoutOptionsInput>
  }

  export type PollUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutPollsNestedInput
    votes?: PollVoteUpdateManyWithoutPollNestedInput
  }

  export type PollUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    eventId?: StringFieldUpdateOperationsInput | string
    votes?: PollVoteUncheckedUpdateManyWithoutPollNestedInput
  }

  export type PollVoteUpsertWithWhereUniqueWithoutPollOptionInput = {
    where: PollVoteWhereUniqueInput
    update: XOR<PollVoteUpdateWithoutPollOptionInput, PollVoteUncheckedUpdateWithoutPollOptionInput>
    create: XOR<PollVoteCreateWithoutPollOptionInput, PollVoteUncheckedCreateWithoutPollOptionInput>
  }

  export type PollVoteUpdateWithWhereUniqueWithoutPollOptionInput = {
    where: PollVoteWhereUniqueInput
    data: XOR<PollVoteUpdateWithoutPollOptionInput, PollVoteUncheckedUpdateWithoutPollOptionInput>
  }

  export type PollVoteUpdateManyWithWhereWithoutPollOptionInput = {
    where: PollVoteScalarWhereInput
    data: XOR<PollVoteUpdateManyMutationInput, PollVoteUncheckedUpdateManyWithoutPollOptionInput>
  }

  export type UserCreateWithoutVotesInput = {
    id: string
    email: string
    createdAt?: Date | string
    displayName: string
    color: string
    events?: EventCreateNestedManyWithoutOwnerInput
    participations?: EventParticipantCreateNestedManyWithoutUserInput
    questions?: QuestionCreateNestedManyWithoutAuthorInput
    upvotes?: QuestionUpvoteCreateNestedManyWithoutAuthorInput
    bookMarks?: EventCreateNestedManyWithoutBookMarkedByInput
  }

  export type UserUncheckedCreateWithoutVotesInput = {
    id: string
    email: string
    createdAt?: Date | string
    displayName: string
    color: string
    events?: EventUncheckedCreateNestedManyWithoutOwnerInput
    participations?: EventParticipantUncheckedCreateNestedManyWithoutUserInput
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput
    upvotes?: QuestionUpvoteUncheckedCreateNestedManyWithoutAuthorInput
    bookMarks?: EventUncheckedCreateNestedManyWithoutBookMarkedByInput
  }

  export type UserCreateOrConnectWithoutVotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
  }

  export type PollOptionCreateWithoutVotesInput = {
    id?: string
    index: number
    body: string
    poll: PollCreateNestedOneWithoutOptionsInput
  }

  export type PollOptionUncheckedCreateWithoutVotesInput = {
    id?: string
    index: number
    body: string
    pollId: string
  }

  export type PollOptionCreateOrConnectWithoutVotesInput = {
    where: PollOptionWhereUniqueInput
    create: XOR<PollOptionCreateWithoutVotesInput, PollOptionUncheckedCreateWithoutVotesInput>
  }

  export type PollCreateWithoutVotesInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isLive?: boolean
    event: EventCreateNestedOneWithoutPollsInput
    options?: PollOptionCreateNestedManyWithoutPollInput
  }

  export type PollUncheckedCreateWithoutVotesInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isLive?: boolean
    eventId: string
    options?: PollOptionUncheckedCreateNestedManyWithoutPollInput
  }

  export type PollCreateOrConnectWithoutVotesInput = {
    where: PollWhereUniqueInput
    create: XOR<PollCreateWithoutVotesInput, PollUncheckedCreateWithoutVotesInput>
  }

  export type UserUpsertWithoutVotesInput = {
    update: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    events?: EventUpdateManyWithoutOwnerNestedInput
    participations?: EventParticipantUpdateManyWithoutUserNestedInput
    questions?: QuestionUpdateManyWithoutAuthorNestedInput
    upvotes?: QuestionUpvoteUpdateManyWithoutAuthorNestedInput
    bookMarks?: EventUpdateManyWithoutBookMarkedByNestedInput
  }

  export type UserUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutOwnerNestedInput
    participations?: EventParticipantUncheckedUpdateManyWithoutUserNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput
    upvotes?: QuestionUpvoteUncheckedUpdateManyWithoutAuthorNestedInput
    bookMarks?: EventUncheckedUpdateManyWithoutBookMarkedByNestedInput
  }

  export type PollOptionUpsertWithoutVotesInput = {
    update: XOR<PollOptionUpdateWithoutVotesInput, PollOptionUncheckedUpdateWithoutVotesInput>
    create: XOR<PollOptionCreateWithoutVotesInput, PollOptionUncheckedCreateWithoutVotesInput>
    where?: PollOptionWhereInput
  }

  export type PollOptionUpdateToOneWithWhereWithoutVotesInput = {
    where?: PollOptionWhereInput
    data: XOR<PollOptionUpdateWithoutVotesInput, PollOptionUncheckedUpdateWithoutVotesInput>
  }

  export type PollOptionUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    poll?: PollUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type PollOptionUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
  }

  export type PollUpsertWithoutVotesInput = {
    update: XOR<PollUpdateWithoutVotesInput, PollUncheckedUpdateWithoutVotesInput>
    create: XOR<PollCreateWithoutVotesInput, PollUncheckedCreateWithoutVotesInput>
    where?: PollWhereInput
  }

  export type PollUpdateToOneWithWhereWithoutVotesInput = {
    where?: PollWhereInput
    data: XOR<PollUpdateWithoutVotesInput, PollUncheckedUpdateWithoutVotesInput>
  }

  export type PollUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutPollsNestedInput
    options?: PollOptionUpdateManyWithoutPollNestedInput
  }

  export type PollUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    eventId?: StringFieldUpdateOperationsInput | string
    options?: PollOptionUncheckedUpdateManyWithoutPollNestedInput
  }

  export type EventCreateManyOwnerInput = {
    id?: string
    displayName: string
    slug?: string | null
    createdAt?: Date | string
  }

  export type EventParticipantCreateManyUserInput = {
    eventId: string
  }

  export type QuestionCreateManyAuthorInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isPinned?: boolean
    isResolved?: boolean
    eventId: string
  }

  export type QuestionUpvoteCreateManyAuthorInput = {
    questionId: string
  }

  export type PollVoteCreateManyAuthorInput = {
    pollOptionId: string
    pollId: string
  }

  export type EventUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: EventParticipantUpdateManyWithoutEventNestedInput
    questions?: QuestionUpdateManyWithoutEventNestedInput
    polls?: PollUpdateManyWithoutEventNestedInput
    bookMarkedBy?: UserUpdateManyWithoutBookMarksNestedInput
  }

  export type EventUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: EventParticipantUncheckedUpdateManyWithoutEventNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutEventNestedInput
    polls?: PollUncheckedUpdateManyWithoutEventNestedInput
    bookMarkedBy?: UserUncheckedUpdateManyWithoutBookMarksNestedInput
  }

  export type EventUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventParticipantUpdateWithoutUserInput = {
    event?: EventUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type EventParticipantUncheckedUpdateWithoutUserInput = {
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type EventParticipantUncheckedUpdateManyWithoutUserInput = {
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutQuestionsNestedInput
    upvotes?: QuestionUpvoteUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    eventId?: StringFieldUpdateOperationsInput | string
    upvotes?: QuestionUpvoteUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUpvoteUpdateWithoutAuthorInput = {
    question?: QuestionUpdateOneRequiredWithoutUpvotesNestedInput
  }

  export type QuestionUpvoteUncheckedUpdateWithoutAuthorInput = {
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUpvoteUncheckedUpdateManyWithoutAuthorInput = {
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type PollVoteUpdateWithoutAuthorInput = {
    pollOption?: PollOptionUpdateOneRequiredWithoutVotesNestedInput
    poll?: PollUpdateOneRequiredWithoutVotesNestedInput
  }

  export type PollVoteUncheckedUpdateWithoutAuthorInput = {
    pollOptionId?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
  }

  export type PollVoteUncheckedUpdateManyWithoutAuthorInput = {
    pollOptionId?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
  }

  export type EventUpdateWithoutBookMarkedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEventsNestedInput
    participants?: EventParticipantUpdateManyWithoutEventNestedInput
    questions?: QuestionUpdateManyWithoutEventNestedInput
    polls?: PollUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutBookMarkedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    participants?: EventParticipantUncheckedUpdateManyWithoutEventNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutEventNestedInput
    polls?: PollUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutBookMarkedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type EventParticipantCreateManyEventInput = {
    userId: string
  }

  export type QuestionCreateManyEventInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isPinned?: boolean
    isResolved?: boolean
    userId: string
  }

  export type PollCreateManyEventInput = {
    id?: string
    createdAt?: Date | string
    body: string
    isLive?: boolean
  }

  export type EventParticipantUpdateWithoutEventInput = {
    user?: UserUpdateOneRequiredWithoutParticipationsNestedInput
  }

  export type EventParticipantUncheckedUpdateWithoutEventInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EventParticipantUncheckedUpdateManyWithoutEventInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput
    upvotes?: QuestionUpvoteUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    upvotes?: QuestionUpvoteUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PollUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    options?: PollOptionUpdateManyWithoutPollNestedInput
    votes?: PollVoteUpdateManyWithoutPollNestedInput
  }

  export type PollUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    options?: PollOptionUncheckedUpdateManyWithoutPollNestedInput
    votes?: PollVoteUncheckedUpdateManyWithoutPollNestedInput
  }

  export type PollUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpdateWithoutBookMarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    events?: EventUpdateManyWithoutOwnerNestedInput
    participations?: EventParticipantUpdateManyWithoutUserNestedInput
    questions?: QuestionUpdateManyWithoutAuthorNestedInput
    upvotes?: QuestionUpvoteUpdateManyWithoutAuthorNestedInput
    votes?: PollVoteUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutBookMarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutOwnerNestedInput
    participations?: EventParticipantUncheckedUpdateManyWithoutUserNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput
    upvotes?: QuestionUpvoteUncheckedUpdateManyWithoutAuthorNestedInput
    votes?: PollVoteUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBookMarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    displayName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUpvoteCreateManyQuestionInput = {
    authorId: string
  }

  export type QuestionUpvoteUpdateWithoutQuestionInput = {
    author?: UserUpdateOneRequiredWithoutUpvotesNestedInput
  }

  export type QuestionUpvoteUncheckedUpdateWithoutQuestionInput = {
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUpvoteUncheckedUpdateManyWithoutQuestionInput = {
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type PollOptionCreateManyPollInput = {
    id?: string
    index: number
    body: string
  }

  export type PollVoteCreateManyPollInput = {
    authorId: string
    pollOptionId: string
  }

  export type PollOptionUpdateWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    votes?: PollVoteUpdateManyWithoutPollOptionNestedInput
  }

  export type PollOptionUncheckedUpdateWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    votes?: PollVoteUncheckedUpdateManyWithoutPollOptionNestedInput
  }

  export type PollOptionUncheckedUpdateManyWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
  }

  export type PollVoteUpdateWithoutPollInput = {
    author?: UserUpdateOneRequiredWithoutVotesNestedInput
    pollOption?: PollOptionUpdateOneRequiredWithoutVotesNestedInput
  }

  export type PollVoteUncheckedUpdateWithoutPollInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    pollOptionId?: StringFieldUpdateOperationsInput | string
  }

  export type PollVoteUncheckedUpdateManyWithoutPollInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    pollOptionId?: StringFieldUpdateOperationsInput | string
  }

  export type PollVoteCreateManyPollOptionInput = {
    authorId: string
    pollId: string
  }

  export type PollVoteUpdateWithoutPollOptionInput = {
    author?: UserUpdateOneRequiredWithoutVotesNestedInput
    poll?: PollUpdateOneRequiredWithoutVotesNestedInput
  }

  export type PollVoteUncheckedUpdateWithoutPollOptionInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
  }

  export type PollVoteUncheckedUpdateManyWithoutPollOptionInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
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
/**
 * Applies a given `project` function to each value emitted by the source
 * Observable, and emits the resulting values as an Observable.
 *
 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
 * it passes each source value through a transformation function to get
 * corresponding output values.</span>
 *
 * ![image](/assets/marbles-diagrams/map.png)
 *
 * Similar to the well known `Array.prototype.map` function, this operator
 * applies a projection to each value and emits that projection in the output
 * Observable.
 *
 * ## Example
 * Map every click to the clientX position of that click
 * ```javascript
 * import { fromEvent } from 'rxjs';
 * import { map } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const positions = clicks.pipe(map(ev => ev.clientX));
 * positions.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link mapTo}
 * @see {@link pluck}
 *
 * @param {function(value: T, index: number): R} project The function to apply
 * to each `value` emitted by the source Observable. The `index` parameter is
 * the number `i` for the i-th emission that has happened since the
 * subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to define what `this` is in the
 * `project` function.
 * @return {Observable<R>} An Observable that emits the values from the source
 * Observable transformed by the given `project` function.
 * @method map
 * @owner Observable
 */
 declare function map<T, R>(project: (value: T, index: number) => R, thisArg?: any): OperatorFunction<T, R>;
 declare class MapOperator<T, R> implements Operator<T, R> {
    private project;
    private thisArg;
    constructor(project: (value: T, index: number) => R, thisArg: any);
    call(subscriber: Subscriber<R>, source: any): any;
}

declare function from<O extends ObservableInput<any>>(input: O, scheduler?: SchedulerLike): Observable<ObservedValueOf<O>>;

declare function of<T>(a: T, scheduler?: SchedulerLike): Observable<T>;
declare function of<T, T2>(a: T, b: T2, scheduler?: SchedulerLike): Observable<T | T2>;
declare function of<T, T2, T3>(a: T, b: T2, c: T3, scheduler?: SchedulerLike): Observable<T | T2 | T3>;
declare function of<T, T2, T3, T4>(a: T, b: T2, c: T3, d: T4, scheduler?: SchedulerLike): Observable<T | T2 | T3 | T4>;
declare function of<T, T2, T3, T4, T5>(a: T, b: T2, c: T3, d: T4, e: T5, scheduler?: SchedulerLike): Observable<T | T2 | T3 | T4 | T5>;
declare function of<T, T2, T3, T4, T5, T6>(a: T, b: T2, c: T3, d: T4, e: T5, f: T6, scheduler?: SchedulerLike): Observable<T | T2 | T3 | T4 | T5 | T6>;
declare function of<T, T2, T3, T4, T5, T6, T7>(a: T, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7, scheduler?: SchedulerLike): Observable<T | T2 | T3 | T4 | T5 | T6 | T7>;
declare function of<T, T2, T3, T4, T5, T6, T7, T8>(a: T, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7, h: T8, scheduler?: SchedulerLike): Observable<T | T2 | T3 | T4 | T5 | T6 | T7 | T8>;
declare function of<T, T2, T3, T4, T5, T6, T7, T8, T9>(a: T, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7, h: T8, i: T9, scheduler?: SchedulerLike): Observable<T | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>;
declare function of<T>(...args: Array<T | SchedulerLike>): Observable<T>;

/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
 *
 * If a keySelector function is provided, then it will project each value from the source observable into a new value that it will
 * check for equality with previously projected values. If a keySelector function is not provided, it will use each value from the
 * source observable directly with an equality check against previous values.
 *
 * In JavaScript runtimes that support `Set`, this operator will use a `Set` to improve performance of the distinct value checking.
 *
 * In other runtimes, this operator will use a minimal implementation of `Set` that relies on an `Array` and `indexOf` under the
 * hood, so performance will degrade as more values are checked for distinction. Even in newer browsers, a long-running `distinct`
 * use might result in memory leaks. To help alleviate this in some scenarios, an optional `flushes` parameter is also provided so
 * that the internal `Set` can be "flushed", basically clearing it of values.
 *
 * ## Examples
 * A simple example with numbers
 * ```javascript
 * import { of } from 'rxjs';
 * import { distinct } from 'rxjs/operators';
 *
 * of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1).pipe(
 *     distinct(),
 *   )
 *   .subscribe(x => console.log(x)); // 1, 2, 3, 4
 * ```
 *
 * An example using a keySelector function
 * ```typescript
 * import { of } from 'rxjs';
 * import { distinct } from 'rxjs/operators';
 *
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'},
 *   ).pipe(
 *     distinct((p: Person) => p.name),
 *   )
 *   .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * ```
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [keySelector] Optional function to select which value you want to check as distinct.
 * @param {Observable} [flushes] Optional Observable for flushing the internal HashSet of the operator.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinct
 * @owner Observable
 */
declare function distinct<T, K>(keySelector?: (value: T) => K, flushes?: Observable<any>): MonoTypeOperatorFunction<T>;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
declare class DistinctSubscriber<T, K> extends OuterSubscriber<T, T> {
    private keySelector;
    private values;
    constructor(destination: Subscriber<T>, keySelector: (value: T) => K, flushes: Observable<any>);
    notifyNext(outerValue: T, innerValue: T, outerIndex: number, innerIndex: number, innerSub: InnerSubscriber<T, T>): void;
    notifyError(error: any, innerSub: InnerSubscriber<T, T>): void;
    protected _next(value: T): void;
    private _useKeySelector;
    private _finalizeNext;
}

/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
declare class Subscriber<T> extends Subscription implements Observer<T> {
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     * @nocollapse
     */
    static create<T>(next?: (x?: T) => void, error?: (e?: any) => void, complete?: () => void): Subscriber<T>;
    /** @internal */ syncErrorValue: any;
    /** @internal */ syncErrorThrown: boolean;
    /** @internal */ syncErrorThrowable: boolean;
    protected isStopped: boolean;
    protected destination: PartialObserver<any> | Subscriber<any>;
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    constructor(destinationOrNext?: PartialObserver<any> | ((value: T) => void), error?: (e?: any) => void, complete?: () => void);
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    next(value?: T): void;
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached `Error`. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    error(err?: any): void;
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    complete(): void;
    unsubscribe(): void;
    protected _next(value: T): void;
    protected _error(err: any): void;
    protected _complete(): void;
    /** @deprecated This is an internal implementation detail, do not use. */
    _unsubscribeAndRecycle(): Subscriber<T>;
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
declare class SafeSubscriber<T> extends Subscriber<T> {
    private _parentSubscriber;
    private _context;
    constructor(_parentSubscriber: Subscriber<T>, observerOrNext?: PartialObserver<T> | ((value: T) => void), error?: (e?: any) => void, complete?: () => void);
    next(value?: T): void;
    error(err?: any): void;
    complete(): void;
    private __tryOrUnsub;
    private __tryOrSetError;
    /** @internal This is an internal implementation detail, do not use. */
    _unsubscribe(): void;
}

interface Operator<T, R> {
    call(subscriber: Subscriber<R>, source: any): TeardownLogic;
}

/**
 * A representation of any set of values over any amount of time. This is the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
declare class Observable<T> implements Subscribable<T> {
    /** Internal implementation detail, do not use directly. */
    _isScalar: boolean;
    /** @deprecated This is an internal implementation detail, do not use. */
    source: Observable<any>;
    /** @deprecated This is an internal implementation detail, do not use. */
    operator: Operator<any, T>;
    /**
     * @constructor
     * @param {Function} subscribe the function that is called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    constructor(subscribe?: (this: Observable<T>, subscriber: Subscriber<T>) => TeardownLogic);
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     * @nocollapse
     * @deprecated use new Observable() instead
     */
    static create: Function;
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    lift<R>(operator: Operator<T, R>): Observable<R>;
    subscribe(observer?: PartialObserver<T>): Subscription;
    /** @deprecated Use an observer instead of a complete callback */
    subscribe(next: null | undefined, error: null | undefined, complete: () => void): Subscription;
    /** @deprecated Use an observer instead of an error callback */
    subscribe(next: null | undefined, error: (error: any) => void, complete?: () => void): Subscription;
    /** @deprecated Use an observer instead of a complete callback */
    subscribe(next: (value: T) => void, error: null | undefined, complete: () => void): Subscription;
    subscribe(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): Subscription;
    /** @deprecated This is an internal implementation detail, do not use. */
    _trySubscribe(sink: Subscriber<T>): TeardownLogic;
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [promiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    forEach(next: (value: T) => void, promiseCtor?: PromiseConstructorLike): Promise<void>;
    /** @internal This is an internal implementation detail, do not use. */
    _subscribe(subscriber: Subscriber<any>): TeardownLogic;
    /**
     * @nocollapse
     * @deprecated In favor of iif creation function: import { iif } from 'rxjs';
     */
    static if: typeof iif;
    /**
     * @nocollapse
     * @deprecated In favor of throwError creation function: import { throwError } from 'rxjs';
     */
    static throw: typeof throwError;
    pipe(): Observable<T>;
    pipe<A>(op1: OperatorFunction<T, A>): Observable<A>;
    pipe<A, B>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>): Observable<B>;
    pipe<A, B, C>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>): Observable<C>;
    pipe<A, B, C, D>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>): Observable<D>;
    pipe<A, B, C, D, E>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>): Observable<E>;
    pipe<A, B, C, D, E, F>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>, op6: OperatorFunction<E, F>): Observable<F>;
    pipe<A, B, C, D, E, F, G>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>, op6: OperatorFunction<E, F>, op7: OperatorFunction<F, G>): Observable<G>;
    pipe<A, B, C, D, E, F, G, H>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>, op6: OperatorFunction<E, F>, op7: OperatorFunction<F, G>, op8: OperatorFunction<G, H>): Observable<H>;
    pipe<A, B, C, D, E, F, G, H, I>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>, op6: OperatorFunction<E, F>, op7: OperatorFunction<F, G>, op8: OperatorFunction<G, H>, op9: OperatorFunction<H, I>): Observable<I>;
    pipe<A, B, C, D, E, F, G, H, I>(op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>, op6: OperatorFunction<E, F>, op7: OperatorFunction<F, G>, op8: OperatorFunction<G, H>, op9: OperatorFunction<H, I>, ...operations: OperatorFunction<any, any>[]): Observable<{}>;
    toPromise<T>(this: Observable<T>): Promise<T>;
    toPromise<T>(this: Observable<T>, PromiseCtor: typeof Promise): Promise<T>;
    toPromise<T>(this: Observable<T>, PromiseCtor: PromiseConstructorLike): Promise<T>;
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
declare class OuterSubscriber<T, R> extends Subscriber<T> {
    notifyNext(outerValue: T, innerValue: R, outerIndex: number, innerIndex: number, innerSub: InnerSubscriber<T, R>): void;
    notifyError(error: any, innerSub: InnerSubscriber<T, R>): void;
    notifyComplete(innerSub: InnerSubscriber<T, R>): void;
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
declare class InnerSubscriber<T, R> extends Subscriber<R> {
    private parent;
    outerValue: T;
    outerIndex: number;
    private index;
    constructor(parent: OuterSubscriber<T, R>, outerValue: T, outerIndex: number);
    protected _next(value: R): void;
    protected _error(error: any): void;
    protected _complete(): void;
}

/** OPERATOR INTERFACES */
interface UnaryFunction<T, R> {
    (source: T): R;
}
interface OperatorFunction<T, R> extends UnaryFunction<Observable<T>, Observable<R>> {
}
declare type FactoryOrValue<T> = T | (() => T);
interface MonoTypeOperatorFunction<T> extends OperatorFunction<T, T> {
}
interface Timestamp<T> {
    value: T;
    timestamp: number;
}
interface TimeInterval<T> {
    value: T;
    interval: number;
}
/** SUBSCRIPTION INTERFACES */
interface Unsubscribable {
    unsubscribe(): void;
}
declare type TeardownLogic = Unsubscribable | Function | void;
interface SubscriptionLike extends Unsubscribable {
    unsubscribe(): void;
    readonly closed: boolean;
}
declare type SubscribableOrPromise<T> = Subscribable<T> | Subscribable<never> | PromiseLike<T> | InteropObservable<T>;
/** OBSERVABLE INTERFACES */
interface Subscribable<T> {
    subscribe(observer?: PartialObserver<T>): Unsubscribable;
    /** @deprecated Use an observer instead of a complete callback */
    subscribe(next: null | undefined, error: null | undefined, complete: () => void): Unsubscribable;
    /** @deprecated Use an observer instead of an error callback */
    subscribe(next: null | undefined, error: (error: any) => void, complete?: () => void): Unsubscribable;
    /** @deprecated Use an observer instead of a complete callback */
    subscribe(next: (value: T) => void, error: null | undefined, complete: () => void): Unsubscribable;
    subscribe(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): Unsubscribable;
}
declare type ObservableInput<T> = SubscribableOrPromise<T> | ArrayLike<T> | Iterable<T>;
/** @deprecated use {@link InteropObservable } */
declare type ObservableLike<T> = InteropObservable<T>;
declare type InteropObservable<T> = {
    [Symbol.observable]: () => Subscribable<T>;
};
/** OBSERVER INTERFACES */
interface NextObserver<T> {
    closed?: boolean;
    next: (value: T) => void;
    error?: (err: any) => void;
    complete?: () => void;
}
interface ErrorObserver<T> {
    closed?: boolean;
    next?: (value: T) => void;
    error: (err: any) => void;
    complete?: () => void;
}
interface CompletionObserver<T> {
    closed?: boolean;
    next?: (value: T) => void;
    error?: (err: any) => void;
    complete: () => void;
}
declare type PartialObserver<T> = NextObserver<T> | ErrorObserver<T> | CompletionObserver<T>;
interface Observer<T> {
    closed?: boolean;
    next: (value: T) => void;
    error: (err: any) => void;
    complete: () => void;
}
/** SCHEDULER INTERFACES */
interface SchedulerLike {
    now(): number;
    schedule<T>(work: (this: SchedulerAction<T>, state?: T) => void, delay?: number, state?: T): Subscription;
}
interface SchedulerAction<T> extends Subscription {
    schedule(state?: T, delay?: number): Subscription;
}
declare type ObservedValueOf<O> = O extends ObservableInput<infer T> ? T : never;

/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
declare class Subscription implements SubscriptionLike {
    /** @nocollapse */
    static EMPTY: Subscription;
    /**
     * A flag to indicate whether this Subscription has already been unsubscribed.
     * @type {boolean}
     */
    closed: boolean;
    /** @internal */
    protected _parent: Subscription;
    /** @internal */
    protected _parents: Subscription[];
    /** @internal */
    private _subscriptions;
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    constructor(unsubscribe?: () => void);
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    unsubscribe(): void;
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription. Can also be used to add a child subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * When a parent subscription is unsubscribed, any child subscriptions that were added to it are also unsubscribed.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    add(teardown: TeardownLogic): Subscription;
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    remove(subscription: Subscription): void;
    /** @internal */
    private _addParent;
}

/**
 * Creates an Observable that emits no items to the Observer and immediately
 * emits an error notification.
 *
 * <span class="informal">Just emits 'error', and nothing else.
 * </span>
 *
 * ![image](/assets/marbles-diagrams/throw.png)
 *
 * This static operator is useful for creating a simple Observable that only
 * emits the error notification. It can be used for composing with other
 * Observables, such as in a {@link mergeMap}.
 *
 * ## Examples
 * ### Emit the number 7, then emit an error
 * ```javascript
 * import { throwError, concat, of } from 'rxjs';
 *
 * const result = concat(of(7), throwError(new Error('oops!')));
 * result.subscribe(x => console.log(x), e => console.error(e));
 *
 * // Logs:
 * // 7
 * // Error: oops!
 * ```
 *
 * ---
 *
 * ### Map and flatten numbers to the sequence 'a', 'b', 'c', but throw an error for 2
 * ```javascript
 * import { throwError, interval, of } from 'rxjs';
 * import { mergeMap } from 'rxjs/operators';
 *
 * interval(1000).pipe(
 *   mergeMap(x => x === 2
 *     ? throwError('Twos are bad')
 *     : of('a', 'b', 'c')
 *   ),
 * ).subscribe(x => console.log(x), e => console.error(e));
 *
 * // Logs:
 * // a
 * // b
 * // c
 * // a
 * // b
 * // c
 * // Twos are bad
 * ```
 *
 * @see {@link Observable}
 * @see {@link empty}
 * @see {@link never}
 * @see {@link of}
 *
 * @param {any} error The particular Error to pass to the error notification.
 * @param {SchedulerLike} [scheduler] A {@link SchedulerLike} to use for scheduling
 * the emission of the error notification.
 * @return {Observable} An error Observable: emits only the error notification
 * using the given error argument.
 * @static true
 * @name throwError
 * @owner Observable
 */
declare function throwError(error: any, scheduler?: SchedulerLike): Observable<never>;

/**
 * Decides at subscription time which Observable will actually be subscribed.
 *
 * <span class="informal">`If` statement for Observables.</span>
 *
 * `iif` accepts a condition function and two Observables. When
 * an Observable returned by the operator is subscribed, condition function will be called.
 * Based on what boolean it returns at that moment, consumer will subscribe either to
 * the first Observable (if condition was true) or to the second (if condition was false). Condition
 * function may also not return anything - in that case condition will be evaluated as false and
 * second Observable will be subscribed.
 *
 * Note that Observables for both cases (true and false) are optional. If condition points to an Observable that
 * was left undefined, resulting stream will simply complete immediately. That allows you to, rather
 * then controlling which Observable will be subscribed, decide at runtime if consumer should have access
 * to given Observable or not.
 *
 * If you have more complex logic that requires decision between more than two Observables, {@link defer}
 * will probably be a better choice. Actually `iif` can be easily implemented with {@link defer}
 * and exists only for convenience and readability reasons.
 *
 *
 * ## Examples
 * ### Change at runtime which Observable will be subscribed
 * ```javascript
 * import { iif, of } from 'rxjs';
 *
 * let subscribeToFirst;
 * const firstOrSecond = iif(
 *   () => subscribeToFirst,
 *   of('first'),
 *   of('second'),
 * );
 *
 * subscribeToFirst = true;
 * firstOrSecond.subscribe(value => console.log(value));
 *
 * // Logs:
 * // "first"
 *
 * subscribeToFirst = false;
 * firstOrSecond.subscribe(value => console.log(value));
 *
 * // Logs:
 * // "second"
 *
 * ```
 *
 * ### Control an access to an Observable
 * ```javascript
 * let accessGranted;
 * const observableIfYouHaveAccess = iif(
 *   () => accessGranted,
 *   of('It seems you have an access...'), // Note that only one Observable is passed to the operator.
 * );
 *
 * accessGranted = true;
 * observableIfYouHaveAccess.subscribe(
 *   value => console.log(value),
 *   err => {},
 *   () => console.log('The end'),
 * );
 *
 * // Logs:
 * // "It seems you have an access..."
 * // "The end"
 *
 * accessGranted = false;
 * observableIfYouHaveAccess.subscribe(
 *   value => console.log(value),
 *   err => {},
 *   () => console.log('The end'),
 * );
 *
 * // Logs:
 * // "The end"
 * ```
 *
 * @see {@link defer}
 *
 * @param {function(): boolean} condition Condition which Observable should be chosen.
 * @param {Observable} [trueObservable] An Observable that will be subscribed if condition is true.
 * @param {Observable} [falseObservable] An Observable that will be subscribed if condition is false.
 * @return {Observable} Either first or second Observable, depending on condition.
 * @static true
 * @name iif
 * @owner Observable
 */
declare function iif<T, F>(condition: () => boolean, trueResult?: SubscribableOrPromise<T>, falseResult?: SubscribableOrPromise<F>): Observable<T | F>;

/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * ![image](/assets/marbles-diagrams/take.png)
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * ## Example
 * Take the first 5 seconds of an infinite 1-second interval Observable
 * ```ts
 * import { interval } from 'rxjs';
 * import { take } from 'rxjs/operators';
 *
 * const intervalCount = interval(1000);
 * const takeFive = intervalCount.pipe(take(5));
 * takeFive.subscribe(x => console.log(x));
 *
 * // Logs:
 * // 0
 * // 1
 * // 2
 * // 3
 * // 4
 * ```
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
declare function take<T>(count: number): MonoTypeOperatorFunction<T>;

declare function filter<T, S extends T>(predicate: (value: T, index: number) => value is S, thisArg?: any): OperatorFunction<T, S>;
declare function filter<T>(predicate: (value: T, index: number) => boolean, thisArg?: any): MonoTypeOperatorFunction<T>;

/**
 * The same Observable instance returned by any call to {@link empty} without a
 * `scheduler`. It is preferrable to use this over `empty()`.
 */
declare const EMPTY: Observable<never>;

declare function toConveyorBelt(fruit: string): void;

declare function tap<T>(next: (x: T) => void): MonoTypeOperatorFunction<T>;
declare function tap<T>(observer: PartialObserver<T>): MonoTypeOperatorFunction<T>;

declare function distinctUntilChanged<T>(compare?: (x: T, y: T) => boolean): MonoTypeOperatorFunction<T>;
declare function distinctUntilChanged<T, K>(compare: (x: K, y: K) => boolean, keySelector: (x: T) => K): MonoTypeOperatorFunction<T>;

/**
 * Returns an Observable that skips the first `count` items emitted by the source Observable. test
 *
 * ![image](/assets/marbles-diagrams/skip.png)
 *
 * @param {Number} count - The number of times, items emitted by source Observable should be skipped.
 * @return {Observable} An Observable that skips values emitted by the source Observable.
 *
 * @method skip
 * @owner Observable
 */
declare function skip<T>(count: number): MonoTypeOperatorFunction<T>;

declare function merge<T>(v1: ObservableInput<T>): Observable<T>;
declare function merge<T>(v1: ObservableInput<T>, concurrent?: number): Observable<T>;
declare function merge<T, T2>(v1: ObservableInput<T>, v2: ObservableInput<T2>): Observable<T | T2>;
declare function merge<T, T2>(v1: ObservableInput<T>, v2: ObservableInput<T2>, concurrent?: number): Observable<T | T2>;
declare function merge<T, T2, T3>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>): Observable<T | T2 | T3>;
declare function merge<T, T2, T3>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, concurrent?: number): Observable<T | T2 | T3>;
declare function merge<T, T2, T3, T4>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>): Observable<T | T2 | T3 | T4>;
declare function merge<T, T2, T3, T4>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, concurrent?: number): Observable<T | T2 | T3 | T4>;
declare function merge<T, T2, T3, T4, T5>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>): Observable<T | T2 | T3 | T4 | T5>;
declare function merge<T, T2, T3, T4, T5>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, concurrent?: number): Observable<T | T2 | T3 | T4 | T5>;
declare function merge<T, T2, T3, T4, T5, T6>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>): Observable<T | T2 | T3 | T4 | T5 | T6>;
declare function merge<T, T2, T3, T4, T5, T6>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, concurrent?: number): Observable<T | T2 | T3 | T4 | T5 | T6>;
declare function merge<T>(...observables: (ObservableInput<T> | number)[]): Observable<T>;
declare function merge<T, R>(...observables: (ObservableInput<any> | number)[]): Observable<R>;

/**
 * Emits only the last `count` values emitted by the source Observable.
 *
 * <span class="informal">Remembers the latest `count` values, then emits those
 * only when the source completes.</span>
 *
 * ![image](/assets/marbles-diagrams/takeLast.png)
 *
 * `takeLast` returns an Observable that emits at most the last `count` values
 * emitted by the source Observable. If the source emits fewer than `count`
 * values then all of its values are emitted. This operator must wait until the
 * `complete` notification emission from the source in order to emit the `next`
 * values on the output Observable, because otherwise it is impossible to know
 * whether or not more values will be emitted on the source. For this reason,
 * all values are emitted synchronously, followed by the complete notification.
 *
 * ## Example
 * Take the last 3 values of an Observable with many values
 * ```ts
 * import { range } from 'rxjs';
 * import { takeLast } from 'rxjs/operators';
 *
 * const many = range(1, 100);
 * const lastThree = many.pipe(takeLast(3));
 * lastThree.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link take}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of values to emit from the end of
 * the sequence of values emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits at most the last count
 * values emitted by the source Observable.
 * @method takeLast
 * @owner Observable
 */
declare function takeLast<T>(count: number): MonoTypeOperatorFunction<T>;

/**
 * Skip the last `count` values emitted by the source Observable.
 *
 * ![image](/assets/marbles-diagrams/skipLast.png)
 *
 * `skipLast` returns an Observable that accumulates a queue with a length
 * enough to store the first `count` values. As more values are received,
 * values are taken from the front of the queue and produced on the result
 * sequence. This causes values to be delayed.
 *
 * ## Example
 * Skip the last 2 values of an Observable with many values
 * ```ts
 * import { range } from 'rxjs';
 * import { skipLast } from 'rxjs/operators';
 *
 * const many = range(1, 5);
 * const skipLastTwo = many.pipe(skipLast(2));
 * skipLastTwo.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 1 2 3
 * ```
 *
 * @see {@link skip}
 * @see {@link skipUntil}
 * @see {@link skipWhile}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `skipLast(i)`, it throws
 * ArgumentOutOrRangeError if `i < 0`.
 *
 * @param {number} count Number of elements to skip from the end of the source Observable.
 * @returns {Observable<T>} An Observable that skips the last count values
 * emitted by the source Observable.
 * @method skipLast
 * @owner Observable
 */
declare function skipLast<T>(count: number): MonoTypeOperatorFunction<T>;

/**
 * Returns an Observable that will resubscribe to the source stream when the source stream completes, at most count times.
 *
 * <span class="informal">Repeats all values emitted on the source. It's like {@link retry}, but for non error cases.</span>
 *
 * ![image](/assets/marbles-diagrams/repeat.png)
 *
 * Similar to {@link retry}, this operator repeats the stream of items emitted by the source for non error cases.
 * Repeat can be useful for creating observables that are meant to have some repeated pattern or rhythm.
 *
 * Note: `repeat(0)` returns an empty observable and `repeat()` will repeat forever
 *
 * ## Example
 * Repeat a message stream
 * ```ts
 * import { of } from 'rxjs';
 * import { repeat, delay } from 'rxjs/operators';
 *
 * const source = of('Repeat message');
 * const example = source.pipe(repeat(3));
 * example.subscribe(x => console.log(x));
 *
 * // Results
 * // Repeat message
 * // Repeat message
 * // Repeat message
 * ```
 *
 * Repeat 3 values, 2 times
 * ```ts
 * import { interval } from 'rxjs';
 * import { repeat, take } from 'rxjs/operators';
 *
 * const source = interval(1000);
 * const example = source.pipe(take(3), repeat(2));
 * example.subscribe(x => console.log(x));
 *
 * // Results every second
 * // 0
 * // 1
 * // 2
 * // 0
 * // 1
 * // 2
 * ```
 *
 * @see {@link repeatWhen}
 * @see {@link retry}
 *
 * @param {number} [count] The number of times the source Observable items are repeated, a count of 0 will yield
 * an empty Observable.
 * @return {Observable} An Observable that will resubscribe to the source stream when the source stream completes
 * , at most count times.
 * @method repeat
 * @owner Observable
 */
declare function repeat<T>(count?: number): MonoTypeOperatorFunction<T>;

declare function takeWhile<T, S extends T>(predicate: (value: T, index: number) => value is S): OperatorFunction<T, S>;
declare function takeWhile<T, S extends T>(predicate: (value: T, index: number) => value is S, inclusive: false): OperatorFunction<T, S>;
declare function takeWhile<T>(predicate: (value: T, index: number) => boolean, inclusive?: boolean): MonoTypeOperatorFunction<T>;

/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will resubscribe to the source Observable for a maximum of `count` resubscriptions (given
 * as a number parameter) rather than propagating the `error` call.
 *
 * ![image](/assets/marbles-diagrams/retry.png)
 *
 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
 *
 * ## Example
 * ```ts
 * import { interval, of, throwError } from 'rxjs';
 * import { mergeMap, retry } from 'rxjs/operators';
 *
 * const source = interval(1000);
 * const example = source.pipe(
 *   mergeMap(val => {
 *     if(val > 5){
 *       return throwError('Error!');
 *     }
 *     return of(val);
 *   }),
 *   //retry 2 times on error
 *   retry(2)
 * );
 *
 * const subscribe = example.subscribe({
 *   next: val => console.log(val),
 *   error: val => console.log(`${val}: Retried 2 times then quit!`)
 * });
 *
 * // Output:
 * // 0..1..2..3..4..5..
 * // 0..1..2..3..4..5..
 * // 0..1..2..3..4..5..
 * // "Error!: Retried 2 times then quit!"
 * ```
 *
 * @param {number} count - Number of retry attempts before failing.
 * @return {Observable} The source Observable modified with the retry logic.
 * @method retry
 * @owner Observable
 */
declare function retry<T>(count?: number): MonoTypeOperatorFunction<T>;

declare function catchError<T, O extends ObservableInput<any>>(selector: (err: any, caught: Observable<T>) => O): OperatorFunction<T, T | ObservedValueOf<O>>;

declare function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>>(v1: O1, v2: O2): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>]>;
declare function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>]>;
declare function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3, v4: O4): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>]>;
declare function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3, v4: O4, v5: O5): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>, ObservedValueOf<O5>]>;
declare function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>, O6 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3, v4: O4, v5: O5, v6: O6): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>, ObservedValueOf<O5>, ObservedValueOf<O6>]>;
declare function zip<O extends ObservableInput<any>>(array: O[]): Observable<ObservedValueOf<O>[]>;
declare function zip<R>(array: ObservableInput<any>[]): Observable<R>;
declare function zip<O extends ObservableInput<any>>(...observables: O[]): Observable<ObservedValueOf<O>[]>;
declare function zip<O extends ObservableInput<any>, R>(...observables: Array<O | ((...values: ObservedValueOf<O>[]) => R)>): Observable<R>;
declare function zip<R>(...observables: Array<ObservableInput<any> | ((...values: Array<any>) => R)>): Observable<R>;
declare class ZipOperator<T, R> implements Operator<T, R> {
    resultSelector: (...values: Array<any>) => R;
    constructor(resultSelector?: (...values: Array<any>) => R);
    call(subscriber: Subscriber<R>, source: any): any;
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
declare class ZipSubscriber<T, R> extends Subscriber<T> {
    private values;
    private resultSelector;
    private iterators;
    private active;
    constructor(destination: Subscriber<R>, resultSelector?: (...values: Array<any>) => R, values?: any);
    protected _next(value: any): void;
    protected _complete(): void;
    notifyInactive(): void;
    checkIterators(): void;
    protected _tryresultSelector(args: any[]): void;
}

declare function concatMap<T, O extends ObservableInput<any>>(project: (value: T, index: number) => O): OperatorFunction<T, ObservedValueOf<O>>;

/**
 * Creates an observable sequence that emits a single value and then completes.
 * @param {T} value - The value to emit.
 * @returns {Observable<T>} An observable sequence containing the single specified value.
 */
// declare function of<T>(value: T): Observable<T>;

/**
 * Transforms items emitted by an observable sequence into observables, then flattens these observables into a single observable sequence.
 *
 * ![image](/assets/marbles-diagrams/mergeMap.png)
 *
 * @param {function(value: T, index: number): Observable<U>} project - A function that returns an observable for each item emitted by the source observable.
 * @returns {OperatorFunction<T, U>} An observable sequence that is the result of flattening the transformed items.
 */
declare function mergeMap<T, U>(project: (value: T, index: number) => Observable<U>): OperatorFunction<T, U>;

/**
 * Filters items emitted by an observable sequence by only emitting those that satisfy a specified predicate.
 * @param {function(value: T, index: number): boolean} predicate - A function that evaluates each item in the source observable.
 * @returns {OperatorFunction<T, T>} An observable sequence that contains only those items that satisfy the predicate.
 */
declare function filter<T>(predicate: (value: T, index: number) => boolean): OperatorFunction<T, T>;

/**
 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
 * @param {function(err: any, caught: Observable<T>): ObservableInput<T>} selector - A function that handles the error and returns a new observable or throws an error.
 * @returns {OperatorFunction<T, T>} An observable sequence that is a result of the error handling.
 */
declare function catchError<T>(selector: (err: any, caught: Observable<T>) => ObservableInput<T>): OperatorFunction<T, T>;

/**
 * Buffers the source observable values until the size hits the maximum buffer size.
 * @param {number} bufferSize - The maximum buffer size.
 * @returns {OperatorFunction<T, T[]>} An observable sequence of arrays of buffered values.
 */
declare function bufferCount<T>(bufferSize: number): OperatorFunction<T, T[]>;

/**
 * Groups the values emitted by the source observable based on a key and returns a grouped observable for each key.
 *
 * ![image](/assets/marbles-diagrams/groupBy.png)
 *
 * @param {function(value: T): K} keySelector - A function that extracts the key for each value emitted by the source observable.
 * @param {function(value: T): R} [elementSelector] - Optional. A function that maps each value to an element in the grouped observable.
 * @param {function(grouped: GroupedObservable<K, R>): ObservableInput<any>} [durationSelector] - Optional. A function that controls the duration of each grouped observable.
 * @returns {OperatorFunction<T, GroupedObservable<K, R>>} An observable sequence that emits grouped observables based on key values.
 */
declare function groupBy<T, K, R = T>(
  keySelector: (value: T) => K,
  elementSelector?: (value: T) => R,
  durationSelector?: (grouped: GroupedObservable<K, R>) => ObservableInput<any>
): OperatorFunction<T, GroupedObservable<K, R>>;

/**
 * An observable that represents a group of items emitted by `groupBy` based on a common key.
 * @class
 * @extends {Observable<R>}
 * @template K, R
 */
declare class GroupedObservable<K, R> extends Observable<R> {

  /**
   * The key representing the group.
   */
  readonly key: K;

  /**
   * Constructs a `GroupedObservable` instance.
   *
   * @param {K} key - The key representing the group.
   * @param {function(observer: Observer<R>): void} subscribe - The subscribe function that handles emissions for this group.
   */
  constructor(key: K, subscribe: (observer: Observer<R>) => void);
}

/**
 * Collects all source observable values into an array and emits it when the source completes.
 *
 * ![image](/assets/marbles-diagrams/toArray.png)
 *
 * @returns {OperatorFunction<T, T[]>} An observable that emits an array containing all the values emitted by the source observable when it completes.
 */
declare function toArray<T>(): OperatorFunction<T, T[]>;

/**
 * Projects each value from the source observable into an observable and switches to the most recently projected observable.
 *
 * ![image](/assets/marbles-diagrams/switchMap.png)
 *
 * @param {function(value: T, index: number): Observable<R>} project - A function that returns an observable for each value emitted by the source observable.
 * @returns {OperatorFunction<T, R>} An observable sequence that mirrors the latest observable.
 */
declare function switchMap<T, R>(project: (value: T, index: number) => Observable<R>): OperatorFunction<T, R>;


// /**
//  * Groups the values emitted by the source observable based on a key and returns a grouped observable for each key.
//  *
//  * ![image](/assets/marbles-diagrams/groupBy.png)
//  *
//  * @param {function(value: T): K} keySelector - A function that extracts the key for each value emitted by the source observable.
//  * @param {function(value: T): R} [elementSelector] - Optional. A function that maps each value to an element in the grouped observable.
//  * @param {function(grouped: GroupedObservable<K, R>): ObservableInput<any>} [durationSelector] - Optional. A function that controls the duration of each grouped observable.
//  * @returns {OperatorFunction<T, GroupedObservable<K, R>>} An observable sequence that emits grouped observables based on key values.
//  */
// declare function groupBy<T, K, R = T>(
//   keySelector: (value: T) => K,
//   elementSelector?: (value: T) => R,
//   durationSelector?: (grouped: GroupedObservable<K, R>) => ObservableInput<any>
// ): OperatorFunction<T, GroupedObservable<K, R>>;

/**
 * Combines the latest values from multiple observables into one observable, emitting them as an array or a custom projection.
 *
 * ![image](/assets/marbles-diagrams/combineLatest.png)
 *
 * @param {...ObservableInput<any>} observables - The observables to combine.
 * @returns {Observable<any[]>} An observable of combined values.
 */
declare function combineLatest<T, R>(...observables: ObservableInput<any>[]): Observable<any[]>;

/**
 * Concatenates multiple observables by subscribing to them one after the other.
 *
 * ![image](/assets/marbles-diagrams/concat.png)
 *
 * @param {...ObservableInput<any>} observables - The observables to concatenate.
 * @returns {Observable<any>} An observable that emits values from each input observable sequentially.
 */
declare function concat<T, R>(...observables: ObservableInput<any>[]): Observable<any>;

/**
 * When all observables complete, emits the last value from each observable.
 *
 * ![image](/assets/marbles-diagrams/forkJoin.png)
 *
 * @param {...ObservableInput<any>} observables - The observables to join.
 * @returns {Observable<any[]>} An observable that emits an array of the last values from each observable.
 */
declare function forkJoin<T, R>(...observables: ObservableInput<any>[]): Observable<any[]>;

/**
 * Merges multiple observables into one observable, emitting values as they arrive.
 *
 * ![image](/assets/marbles-diagrams/merge.png)
 *
 * @param {...ObservableInput<any>} observables - The observables to merge.
 * @returns {Observable<any>} An observable that emits values from each input observable as they are produced.
 */
declare function merge<T, R>(...observables: ObservableInput<any>[]): Observable<any>;

/**
 * Returns an observable that mirrors the first observable to emit a value.
 *
 * ![image](/assets/marbles-diagrams/race.png)
 *
 * @param {...ObservableInput<any>} observables - The observables to race.
 * @returns {Observable<any>} An observable that mirrors the first observable to emit.
 */
declare function race<T, R>(...observables: ObservableInput<any>[]): Observable<any>;

/**
 * Combines multiple observables into one by emitting an array containing the latest values from each input observable each time any input observable emits.
 *
 * ![image](/assets/marbles-diagrams/zip.png)
 *
 * @param {...ObservableInput<any>} observables - The observables to zip.
 * @returns {Observable<any[]>} An observable of arrays containing the latest values from each input observable.
 */
declare function zip<T, R>(...observables: ObservableInput<any>[]): Observable<any[]>;

/**
 * Combines multiple observables by emitting their values in sequence, but waits until the previous observable completes before moving on to the next one.
 *
 * ![image](/assets/marbles-diagrams/concatall.png)
 *
 * @returns {OperatorFunction<ObservableInput<T>, T>} An observable that emits values from each input observable sequentially.
 */
declare function concatAll<T>(): OperatorFunction<ObservableInput<T>, T>;

/**
 * Merges multiple observables into one observable, but limits the number of concurrently active inner observables.
 *
 * ![image](/assets/marbles-diagrams/mergeAll.png)
 *
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] - Maximum number of inner observables being subscribed to concurrently.
 * @returns {OperatorFunction<ObservableInput<T>, T>} An observable that emits values from all the input observables as they are produced.
 */
declare function mergeAll<T>(concurrent?: number): OperatorFunction<ObservableInput<T>, T>;

/**
 * Combines multiple observables by emitting their values in sequence, waiting for each observable to complete before moving on to the next.
 *
 * ![image](/assets/marbles-diagrams/switchAll.png)
 *
 * @returns {OperatorFunction<ObservableInput<T>, T>} An observable that emits values from the most recent input observable.
 */
declare function switchAll<T>(): OperatorFunction<ObservableInput<T>, T>;

/**
 * Combines multiple observables by emitting the latest values from the input observables, but switches to a new observable if a new source observable is provided.
 *
 * ![image](/assets/marbles-diagrams/switchMap.png)
 *
 * @param {function(value: T, index: number): ObservableInput<R>} project - A function that returns an observable for each value emitted by the source observable.
 * @returns {OperatorFunction<T, R>} An observable that emits values from the most recent observable.
 */
declare function switchMap<T, R>(project: (value: T, index: number) => ObservableInput<R>): OperatorFunction<T, R>;

/**
 * Combines multiple observables by concatenating the values of the observables, waiting for the current observable to complete before moving to the next one.
 *
 * ![image](/assets/marbles-diagrams/concatMap.png)
 *
 * @param {function(value: T, index: number): ObservableInput<R>} project - A function that returns an observable for each value emitted by the source observable.
 * @returns {OperatorFunction<T, R>} An observable that emits values from the concatenated observables.
 */
declare function concatMap<T, R>(project: (value: T, index: number) => ObservableInput<R>): OperatorFunction<T, R>;

/**
 * Emits the values from the source observable, then emits the provided values after the source completes.
 *
 * ![image](/assets/marbles-diagrams/endWith.png)
 *
 * @param {...T} values - Values to emit after the source observable completes.
 * @returns {OperatorFunction<T, T>} An observable that emits the source values followed by the provided values.
 */
declare function endWith<T>(...values: T[]): OperatorFunction<T, T>;

/**
 * Emits the previous and current values as an array when the source observable emits.
 *
 * ![image](/assets/marbles-diagrams/pairwise.png)
 *
 * @returns {OperatorFunction<T, [T, T]>} An observable of pairs of consecutive values.
 */
declare function pairWise<T>(): OperatorFunction<T, [T, T]>;

/**
 * Emits the provided values first, followed by values from the source observable.
 *
 * ![image](/assets/marbles-diagrams/startWith.png)
 *
 * @param {...T} values - Values to emit before emitting values from the source observable.
 * @returns {OperatorFunction<T, T>} An observable that emits the provided values first, then emits values from the source observable.
 */
declare function startWith<T>(...values: T[]): OperatorFunction<T, T>;

/**
 * Combines the latest values from the source observable and other input observables, emitting them as an array.
 *
 * ![image](/assets/marbles-diagrams/withLatestFrom.png)
 *
 * @param {...ObservableInput<any>} others - Observables to combine with the source observable.
 * @returns {OperatorFunction<T, [T, ...any[]]>} An observable that emits an array of the latest values from the source and other observables.
 */
declare function withLatestFrom<T, R>(...others: ObservableInput<any>[]): OperatorFunction<T, [T, ...any[]]>;

/**
 * Emits the values from the source observable if the condition function returns true.
 * Otherwise, emits values from the provided observable.
 *
 * ![image](/assets/marbles-diagrams/defaultIfEmpty.png)
 *
 * @param {T} [defaultValue] - The value to emit if the source observable is empty.
 * @returns {OperatorFunction<T, T>} An observable that emits values from the source observable or the default value.
 */
declare function defaultIfEmpty<T>(defaultValue?: T): OperatorFunction<T, T>;

/**
 * Emits the values from the source observable until the notifier observable emits a value.
 *
 * ![image](/assets/marbles-diagrams/takeUntil.png)
 *
 * @param {ObservableInput<any>} notifier - Observable that, when it emits a value, completes the source observable.
 * @returns {OperatorFunction<T, T>} An observable that emits values from the source observable until the notifier emits.
 */
declare function takeUntil<T>(notifier: ObservableInput<any>): OperatorFunction<T, T>;

/**
 * Emits the values from the source observable while the condition function returns true.
 *
 * ![image](/assets/marbles-diagrams/takeWhile.png)
 *
 * @param {function(value: T, index: number): boolean} predicate - A function to evaluate each value emitted by the source observable.
 * @returns {OperatorFunction<T, T>} An observable that emits values from the source observable as long as the condition is true.
 */
declare function takeWhile<T>(predicate: (value: T, index: number) => boolean): OperatorFunction<T, T>;

/**
 * Emits a value from the source observable if the condition function returns true.
 * Otherwise, completes the source observable without emitting.
 *
 * ![image](/assets/marbles-diagrams/ifElse.png)
 *
 * @param {function(value: T): boolean} condition - A function that determines whether to emit the value or not.
 * @param {ObservableInput<T>} [elseObservable] - Optional. An observable to emit if the condition is false.
 * @returns {OperatorFunction<T, T>} An observable that emits a value if the condition is true or completes without emitting if false.
 */
declare function ifElse<T>(condition: (value: T) => boolean, elseObservable?: ObservableInput<T>): OperatorFunction<T, T>;

/**
 * Emits the source observable's value if it passes the provided predicate function,
 * otherwise switches to another observable.
 *
 * ![image](/assets/marbles-diagrams/switchMap.png)
 *
 * @param {function(value: T): boolean} predicate - A function to evaluate each value emitted by the source observable.
 * @param {ObservableInput<T>} alternate - An observable to switch to if the predicate function returns false.
 * @returns {OperatorFunction<T, T>} An observable that emits the source values if the predicate is true, otherwise values from the alternate observable.
 */
declare function switchIf<T>(predicate: (value: T) => boolean, alternate: ObservableInput<T>): OperatorFunction<T, T>;

/**
 * Emits a boolean value indicating whether every value emitted by the source observable satisfies the provided predicate function.
 *
 * ![image](/assets/marbles-diagrams/every.png)
 *
 * @param {function(value: T, index: number): boolean} predicate - A function that evaluates each value emitted by the source observable.
 * @returns {Observable<boolean>} An observable that emits `true` if all values satisfy the predicate function, otherwise `false`.
 */
declare function every<T>(predicate: (value: T, index: number) => boolean): OperatorFunction<T, boolean>;

/**
 * Creates an observable that emits the values of either the first observable or the second observable based on the condition.
 *
 * ![image](/assets/marbles-diagrams/iif.png)
 *
 * @param {function(): boolean} condition - A function that returns `true` to emit values from the `trueSource`, otherwise emits values from the `falseSource`.
 * @param {ObservableInput<T>} trueSource - The observable to emit values from if the condition is `true`.
 * @param {ObservableInput<T>} [falseSource] - Optional. The observable to emit values from if the condition is `false`.
 * @returns {Observable<T>} An observable that emits values from `trueSource` or `falseSource` based on the condition.
 */
declare function iif<T>(condition: () => boolean, trueSource: ObservableInput<T>, falseSource?: ObservableInput<T>): Observable<T>;

/**
 * Emits `true` if the source observable emits the same sequence of values as another observable.
 *
 * ![image](/assets/marbles-diagrams/sequenceEqual.png)
 *
 * @param {ObservableInput<T>} compareTo - The observable to compare the source observable's values to.
 * @returns {Observable<boolean>} An observable that emits `true` if the source observable and `compareTo` emit the same sequence of values, otherwise `false`.
 */
declare function sequenceEqual<T>(compareTo: ObservableInput<T>): OperatorFunction<T, boolean>;


/**
 * Creates an observable that emits the provided values in sequence.
 *
 * ![image](/assets/marbles-diagrams/of.png)
 *
 * @param {...T} values - The values to emit.
 * @returns {Observable<T>} An observable that emits the provided values.
 */
declare function of<T>(...values: T[]): Observable<T>;

/**
 * Creates an observable that emits a single value and then completes.
 *
 * ![image](/assets/marbles-diagrams/from.png)
 *
 * @param {T} value - The value to emit.
 * @returns {Observable<T>} An observable that emits the single provided value.
 */
declare function from<T>(value: T): Observable<T>;

/**
 * Creates an observable that emits values from an array or iterable sequence.
 *
 * ![image](/assets/marbles-diagrams/from.png)
 *
 * @param {ArrayLike<T> | Iterable<T>} values - The array or iterable sequence to convert to an observable.
 * @returns {Observable<T>} An observable that emits the values from the array or iterable.
 */
declare function from<T>(values: ArrayLike<T> | Iterable<T>): Observable<T>;

/**
 * Creates an observable that emits values based on a factory function.
 *
 * ![image](/assets/marbles-diagrams/defer.png)
 *
 * @param {function(): Observable<T>} factory - A factory function that returns an observable.
 * @returns {Observable<T>} An observable that emits values from the observable returned by the factory function.
 */
declare function defer<T>(factory: () => Observable<T>): Observable<T>;

/**
 * Creates an observable that emits the values from a Promise.
 *
 * ![image](/assets/marbles-diagrams/fromPromise.png)
 *
 * @param {Promise<T>} promise - The promise to convert to an observable.
 * @returns {Observable<T>} An observable that emits the resolved value of the promise.
 */
declare function fromPromise<T>(promise: Promise<T>): Observable<T>;

/**
 * Creates an observable that emits values from an event source.
 *
 * ![image](/assets/marbles-diagrams/fromEvent.png)
 *
 * @param {EventTarget} target - The target that emits the event.
 * @param {string} eventName - The event name to listen for.
 * @returns {Observable<Event>} An observable that emits events from the target.
 */
declare function fromEvent<T extends Event>(target: EventTarget, eventName: string): Observable<T>;

/**
 * Creates an observable that emits values based on a provided scheduler.
 *
 * ![image](/assets/marbles-diagrams/interval.png)
 *
 * @param {number} period - The interval time in milliseconds.
 * @param {Scheduler} [scheduler] - Optional. The scheduler to use.
 * @returns {Observable<number>} An observable that emits increasing numbers at specified intervals.
 */
declare function interval(period: number, scheduler?: SchedulerLike): Observable<number>;

/**
 * Creates an observable that emits a single value after a delay.
 *
 * ![image](/assets/marbles-diagrams/delay.png)
 *
 * @param {number} dueTime - The time to wait before emitting the value.
 * @param {Scheduler} [scheduler] - Optional. The scheduler to use.
 * @returns {Observable<T>} An observable that emits the value after the specified delay.
 */
declare function timer(dueTime: number, scheduler?: SchedulerLike): Observable<number>;

/**
 * Creates an observable that emits an incrementing number every specified interval.
 *
 * ![image](/assets/marbles-diagrams/interval.png)
 *
 * @param {number} period - The interval time in milliseconds.
 * @param {Scheduler} [scheduler] - Optional. The scheduler to use.
 * @returns {Observable<number>} An observable that emits increasing numbers at specified intervals.
 */
declare function interval(period: number, scheduler?: SchedulerLike): Observable<number>;

/**
 * Creates an observable that emits a sequence of numbers in a specified range.
 *
 * ![image](/assets/marbles-diagrams/range.png)
 *
 * @param {number} start - The starting number of the sequence.
 * @param {number} count - The number of values to generate.
 * @returns {Observable<number>} An observable that emits a sequence of numbers.
 */
declare function range(start: number, count?: number): Observable<number>;

/**
 * Creates an observable that emits values from a provided iterable sequence.
 *
 * ![image](/assets/marbles-diagrams/from.png)
 *
 * @param {Iterable<T>} iterable - The iterable sequence to convert to an observable.
 * @returns {Observable<T>} An observable that emits values from the iterable sequence.
 */
declare function from<T>(iterable: Iterable<T>): Observable<T>;

/**
 * Creates an observable that emits the values from a provided array.
 *
 * ![image](/assets/marbles-diagrams/from.png)
 *
 * @param {Array<T>} array - The array to convert to an observable.
 * @returns {Observable<T>} An observable that emits values from the array.
 */
declare function from<T>(array: Array<T>): Observable<T>;

/**
 * Returns an observable that mirrors the source observable but will retry when an error occurs, using the notifier observable.
 *
 * ![image](/assets/marbles-diagrams/retryWhen.png)
 *
 * @param {function(errors: Observable<Error>): Observable<any>} notifier - A function that takes an observable of errors and returns an observable to signal when to retry.
 * @returns {Observable<T>} An observable that mirrors the source observable and retries based on the notifier.
 */
declare function retryWhen<T>(notifier: (errors: Observable<Error>) => Observable<any>): OperatorFunction<T, T>;

/**
 * Emits all values from the source observable that pass the provided predicate function.
 *
 * ![image](/assets/marbles-diagrams/filter.png)
 *
 * @param {function(value: T, index: number): boolean} predicate - A function to evaluate each value emitted by the source observable.
 * @returns {OperatorFunction<T, T>} An observable that emits values from the source observable that satisfy the predicate.
 */
declare function filter<T>(predicate: (value: T, index: number) => boolean): OperatorFunction<T, T>;

/**
 * Emits only the first `count` values emitted by the source observable.
 *
 * ![image](/assets/marbles-diagrams/take.png)
 *
 * @param {number} count - The maximum number of values to emit.
 * @returns {OperatorFunction<T, T>} An observable sequence that contains only the first `count` values.
 */
declare function take<T>(count: number): OperatorFunction<T, T>;

/**
 * Emits the values from the source observable until the notifier observable emits a value.
 *
 * ![image](/assets/marbles-diagrams/takeUntil.png)
 *
 * @param {ObservableInput<any>} notifier - Observable that, when it emits a value, completes the source observable.
 * @returns {OperatorFunction<T, T>} An observable that emits values from the source observable until the notifier emits.
 */
declare function takeUntil<T>(notifier: ObservableInput<any>): OperatorFunction<T, T>;

/**
 * Emits values from the source observable as long as the provided predicate function returns true.
 *
 * ![image](/assets/marbles-diagrams/takeWhile.png)
 *
 * @param {function(value: T, index: number): boolean} predicate - A function to evaluate each value emitted by the source observable.
 * @returns {OperatorFunction<T, T>} An observable that emits values from the source observable while the predicate returns true.
 */
declare function takeWhile<T>(predicate: (value: T, index: number) => boolean): OperatorFunction<T, T>;

/**
 * Emits the values from the source observable, skipping the first `count` values.
 *
 * ![image](/assets/marbles-diagrams/skip.png)
 *
 * @param {number} count - The number of values to skip.
 * @returns {OperatorFunction<T, T>} An observable that emits values from the source observable, skipping the first `count` values.
 */
declare function skip<T>(count: number): OperatorFunction<T, T>;

/**
 * Emits values from the source observable, skipping values while the provided predicate function returns true.
 *
 * ![image](/assets/marbles-diagrams/skipWhile.png)
 *
 * @param {function(value: T, index: number): boolean} predicate - A function to evaluate each value emitted by the source observable.
 * @returns {OperatorFunction<T, T>} An observable that emits values from the source observable after the predicate function returns false.
 */
declare function skipWhile<T>(predicate: (value: T, index: number) => boolean): OperatorFunction<T, T>;

/**
 * Emits values from the source observable, but only if they are distinct based on the provided comparison function.
 * @param {function(value: T, index: number): boolean} [compare] - Optional. A function to compare the values to determine uniqueness.
 * @returns {OperatorFunction<T, T>} An observable that emits only distinct values from the source observable.
 */
declare function distinctUntilChanged<T>(compare?: (value: T, index: number) => boolean): OperatorFunction<T, T>;

/**
 * Emits values from the source observable that match a specific pattern.
 * @param {string} key - The key to check for distinct values.
 * @returns {OperatorFunction<T, T>} An observable that emits distinct values based on the provided key.
 */
declare function distinctUntilKeyChanged<T>(key: string): OperatorFunction<T, T>;

/**
 * Emits values from the source observable that meet a specific condition.
 *
 * ![image](/assets/marbles-diagrams/first.png)
 *
 * @param {function(value: T, index: number): boolean} [predicate] - Optional. A function to evaluate each value emitted by the source observable.
 * @param {T} [defaultValue] - Optional. A default value to emit if no value satisfies the predicate.
 * @returns {Observable<T>} An observable that emits the first value that satisfies the predicate or the default value.
 */
declare function first<T>(predicate?: (value: T, index: number) => boolean, defaultValue?: T): Observable<T>;

/**
 * Emits values from the source observable that meet a specific condition.
 *
 * ![image](/assets/marbles-diagrams/last.png)
 *
 * @param {function(value: T, index: number): boolean} [predicate] - Optional. A function to evaluate each value emitted by the source observable.
 * @param {T} [defaultValue] - Optional. A default value to emit if no value satisfies the predicate.
 * @returns {Observable<T>} An observable that emits the last value that satisfies the predicate or the default value.
 */
declare function last<T>(predicate?: (value: T, index: number) => boolean, defaultValue?: T): Observable<T>;

/**
 * Emits a boolean value indicating whether every value emitted by the source observable satisfies the provided predicate function.
 *
 * ![image](/assets/marbles-diagrams/every.png)
 *
 * @param {function(value: T, index: number): boolean} predicate - A function that evaluates each value emitted by the source observable.
 * @returns {Observable<boolean>} An observable that emits `true` if all values satisfy the predicate function, otherwise `false`.
 */
declare function every<T>(predicate: (value: T, index: number) => boolean): OperatorFunction<T, boolean>;

/**
 * Projects each value from the source observable into a new observable and emits the values from those observables.
 *
 * ![image](/assets/marbles-diagrams/switchMap.png)
 *
 * @param {function(value: T, index: number): ObservableInput<R>} project - A function that maps each value to an observable.
 * @returns {OperatorFunction<T, R>} An observable that emits values from the projected observables.
 */
declare function switchMap<T, R>(project: (value: T, index: number) => ObservableInput<R>): OperatorFunction<T, R>;

/**
 * Projects each value from the source observable into a new observable and emits the values from those observables in order.
 *
 * ![image](/assets/marbles-diagrams/exhaustMap.png)
 *
 * @param {function(value: T, index: number): ObservableInput<R>} project - A function that maps each value to an observable.
 * @returns {OperatorFunction<T, R>} An observable that emits values from the projected observables.
 */
declare function exhaustMap<T, R>(project: (value: T, index: number) => ObservableInput<R>): OperatorFunction<T, R>;

/**
 * Maps each value from the source observable to a new value using the provided projection function, and emits the new value.
 *
 * ![image](/assets/marbles-diagrams/mapTo.png)
 *
 * @param {R} value - The value to emit for each source value.
 * @returns {OperatorFunction<T, R>} An observable that emits the specified value.
 */
declare function mapTo<T, R>(value: R): OperatorFunction<T, R>;

/**
 * Projects each value from the source observable into an observable and emits the values from those observables as a single observable.
 *
 * ![image](/assets/marbles-diagrams/combineLatest.png)
 *
 * @param {ObservableInput<any>[]} others - Other observables to combine with the source observable.
 * @returns {OperatorFunction<T, R>} An observable that emits the combined latest values from the source and other observables.
 */
declare function combineLatest<T, R>(...others: ObservableInput<any>[]): OperatorFunction<T, R>;

/**
 * Maps each value from the source observable to an observable and emits the values from those observables.
 * @param {function(): void} [finalize] - A function to execute when the observable completes or errors.
 * @returns {OperatorFunction<T, T>} An observable that emits values from the source observable and calls finalize.
 */
declare function finalize<T>(finalize: () => void): OperatorFunction<T, T>;

/**
 * Projects each value from the source observable to a new observable and flattens the emissions into a single observable.
 * @param {function(value: T, index: number): ObservableInput<R>} project - A function that maps each value to an observable.
 * @returns {OperatorFunction<T, R>} An observable that emits values from the flattened observables.
 */
declare function flatMap<T, R>(project: (value: T, index: number) => ObservableInput<R>): OperatorFunction<T, R>;

/**
 * Transforms the values emitted by the source observable by applying a function and emits a new observable.
 *
 * ![image](/assets/marbles-diagrams/scan.png)
 *
 * @param {function(accumulator: R, value: T, index: number): R} accumulator - A function that accumulates values.
 * @param {R} [seed] - Optional initial value to start the accumulation.
 * @returns {OperatorFunction<T, R>} An observable that emits the accumulated values.
 */
declare function scan<T, R>(accumulator: (accumulator: R, value: T, index: number) => R, seed?: R): OperatorFunction<T, R>;

/**
 * Converts a cold observable into a hot observable that multicasts to all subscribers.
 *
 * ![image](/assets/marbles-diagrams/share.png)
 *
 * @param {Object} [config] - Optional configuration object for the `share` operator.
 * @returns {Observable<T>} A hot observable that multicasts to all subscribers.
 */
declare function share<T>(config?: { connector?: () => Subject<T>; resetOnError?: boolean; resetOnComplete?: boolean; }): Observable<T>;

/**
 * Converts a cold observable into a hot observable that multicasts to all subscribers and uses a refCounted Subject.
 * @param {number} [bufferSize=1] - The number of values to cache and replay to new subscribers.
 * @param {number} [windowTime=Infinity] - The maximum time window of values to cache and replay.
 * @returns {Observable<T>} A hot observable that multicasts to all subscribers and replays cached values.
 */
declare function shareReplay<T>(bufferSize?: number, windowTime?: number): Observable<T>;

/**
 * Returns an observable that multicasts to all subscribers using a behavior subject.
 * @param {T} initialValue - The initial value to emit to new subscribers.
 * @returns {Observable<T>} A hot observable that multicasts to all subscribers and starts with the initial value.
 */
declare function publishBehavior<T>(initialValue: T): Observable<T>;

/**
 * Returns an observable that multicasts to all subscribers using a replay subject.
 * @param {number} [bufferSize=1] - The number of values to cache and replay to new subscribers.
 * @param {number} [windowTime=Infinity] - The maximum time window of values to cache and replay.
 * @returns {Observable<T>} A hot observable that multicasts to all subscribers and replays cached values.
 */
declare function publishReplay<T>(bufferSize?: number, windowTime?: number): Observable<T>;

/**
 * Returns an observable that multicasts to all subscribers using a subject.
 * @returns {Observable<T>} A hot observable that multicasts to all subscribers.
 */
declare function publish<T>(): Observable<T>;

/**
 * Returns an observable that multicasts to all subscribers using a `ReplaySubject` that replays all emitted values.
 * @param {number} [bufferSize=1] - The number of values to cache and replay to new subscribers.
 * @param {number} [windowTime=Infinity] - The maximum time window of values to cache and replay.
 * @returns {Observable<T>} A hot observable that multicasts to all subscribers and replays cached values.
 */
declare function replay<T>(bufferSize?: number, windowTime?: number): Observable<T>;

/**
 * Returns an observable that multicasts to all subscribers using a `Subject` and automatically connects when a subscription is made.
 * @param {function(): Subject<T>} subjectFactory - A factory function that creates the subject to use for multicasting.
 * @returns {Observable<T>} A hot observable that multicasts to all subscribers using the provided subject.
 */
declare function multicast<T>(subjectFactory: () => Subject<T>): Observable<T>;

declare class SubjectSubscriber<T> extends Subscriber<T> {
  protected destination: Subject<T>;
  constructor(destination: Subject<T>);
}
/**
* A Subject is a special type of Observable that allows values to be
* multicasted to many Observers. Subjects are like EventEmitters.
*
* Every Subject is an Observable and an Observer. You can subscribe to a
* Subject, and you can call next to feed values as well as error and complete.
*
* @class Subject<T>
*/
declare class Subject<T> extends Observable<T> implements SubscriptionLike {
  observers: Observer<T>[];
  closed: boolean;
  isStopped: boolean;
  hasError: boolean;
  thrownError: any;
  constructor();
  /**@nocollapse
   * @deprecated use new Subject() instead
  */
  static create: Function;
  lift<R>(operator: Operator<T, R>): Observable<R>;
  next(value?: T): void;
  error(err: any): void;
  complete(): void;
  unsubscribe(): void;
  /** @deprecated This is an internal implementation detail, do not use. */
  _trySubscribe(subscriber: Subscriber<T>): TeardownLogic;
  /** @deprecated This is an internal implementation detail, do not use. */
  _subscribe(subscriber: Subscriber<T>): Subscription;
  /**
   * Creates a new Observable with this Subject as the source. You can do this
   * to create customize Observer-side logic of the Subject and conceal it from
   * code that uses the Observable.
   * @return {Observable} Observable that the Subject casts to
   */
  asObservable(): Observable<T>;
}

/**
 * Counts the number of emissions on the source and emits that number when the
 * source completes.
 *
 * <span class="informal">Tells how many values were emitted, when the source
 * completes.</span>
 *
 * ![image](/assets/marbles-diagrams/count.png)
 *
 * `count` transforms an Observable that emits values into an Observable that
 * emits a single value that represents the number of values emitted by the
 * source Observable. If the source Observable terminates with an error, `count`
 * will pass this error notification along without emitting a value first. If
 * the source Observable does not terminate at all, `count` will neither emit
 * a value nor terminate. This operator takes an optional `predicate` function
 * as argument, in which case the output emission will represent the number of
 * source values that matched `true` with the `predicate`.
 *
 * ## Examples
 *
 * Counts how many seconds have passed before the first click happened
 *
 * ```ts
 * import { interval, fromEvent, takeUntil, count } from 'rxjs';
 *
 * const seconds = interval(1000);
 * const clicks = fromEvent(document, 'click');
 * const secondsBeforeClick = seconds.pipe(takeUntil(clicks));
 * const result = secondsBeforeClick.pipe(count());
 * result.subscribe(x => console.log(x));
 * ```
 *
 * Counts how many odd numbers are there between 1 and 7
 *
 * ```ts
 * import { range, count } from 'rxjs';
 *
 * const numbers = range(1, 7);
 * const result = numbers.pipe(count(i => i % 2 === 1));
 * result.subscribe(x => console.log(x));
 * // Results in:
 * // 4
 * ```
 *
 * @see {@link max}
 * @see {@link min}
 * @see {@link reduce}
 *
 * @param predicate A function that is used to analyze the value and the index and
 * determine whether or not to increment the count. Return `true` to increment the count,
 * and return `false` to keep the count the same.
 * If the predicate is not provided, every value will be counted.
 * @return A function that returns an Observable that emits one number that
 * represents the count of emissions.
 */
declare function count<T>(predicate?: (value: T, index: number) => boolean): OperatorFunction<T, number>;

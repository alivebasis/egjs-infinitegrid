import Component from "@egjs/component";
import { IJQuery, ILayout, StyleType, IInfiniteGridItem, IInfiniteGridStatus } from "./types";
export interface IInfiniteGridOptions {
    itemSelector: string;
    isOverflowScroll: boolean;
    threshold: number;
    isEqualSize: boolean;
    isConstantSize: boolean;
    useRecycle: boolean;
    horizontal: boolean;
    transitionDuration: number;
    useFit: boolean;
    attributePrefix: string;
}
declare class InfiniteGrid extends Component {
    static VERSION: string;
    options: IInfiniteGridOptions;
    private _loadingBar;
    private _items;
    private _renderer;
    private _manager;
    private _watcher;
    private _infinite;
    private _status;
    constructor(element: HTMLElement | string | IJQuery, options?: Partial<IInfiniteGridOptions>);
    append(elements: HTMLElement[] | IJQuery | string[] | string, groupKey?: string | number): this;
    prepend(elements: HTMLElement[] | IJQuery | string[] | string, groupKey?: string | number): this;
    setLayout(LayoutKlass: ILayout | (new (...args: any[]) => ILayout), options?: {}): this;
    getItems(includeCached?: boolean): IInfiniteGridItem[];
    layout(isRelayout?: boolean): this;
    remove(element: HTMLElement, isLayout?: boolean): IInfiniteGridItem[];
    getGroupKeys(includeCached?: boolean): (string | number)[];
    getStatus(startKey?: string | number, endKey?: string | number): IInfiniteGridStatus;
    setStatus(status: IInfiniteGridStatus, applyScrollPos?: boolean): this;
    clear(): this;
    setLoadingBar(userLoadingBar?: {
        append?: string | HTMLElement;
        prepepnd?: string | HTMLElement;
    } | string): this;
    isProcessing(): boolean;
    getLoadingBar(isAppend?: boolean): HTMLElement;
    startLoading(isAppend?: boolean, userStyle?: StyleType): this;
    endLoading(userStyle?: StyleType): this;
    getItem(groupIndex?: number, itemIndex?: number): IInfiniteGridItem;
    updateItem(groupIndex?: number, itemIndex?: number): this;
    updateItems(): this;
    moveTo(index?: number, itemIndex?: number): this;
    destroy(): void;
    private _setContainerSize(size);
    private _appendLoadingBar();
    private _setSize(size);
    private _fitItems(base, margin?);
    private _fit(useFit?);
    private _getEdgeValue(cursor);
    private _isProcessing();
    private _isLoading();
    private _getLoadingStatus();
    private _process(status, isAdd?);
    private _insert({elements, isAppend, isChildren, groupKey});
    private _recycle({start, end});
    private _renderLoading(userStyle?);
    private _updateItem(item);
    private _setScrollPos(pos);
    private _scrollTo(pos);
    private _onImageError(e);
    private _postCache({cache, isAppend, isTrusted, moveItem});
    private _postLayout({fromCache, groups, items, newItems, isAppend, isChildren, isTrusted, moveCache, moveItem});
    private _requestAppend({cache});
    private _requestPrepend({cache});
    private _onResize();
    private _onCheck({isForward, scrollPos, horizontal, orgScrollPos});
    private _onLayoutComplete({items, isAppend, isTrusted, useRecycle, fromCache, isLayout});
    private _reset();
}
export default InfiniteGrid;

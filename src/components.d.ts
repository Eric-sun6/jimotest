/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface JimoBadge {
        "bgColor": string;
        "color": string;
        "num": Number | string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLJimoBadgeElement extends Components.JimoBadge, HTMLStencilElement {
    }
    var HTMLJimoBadgeElement: {
        prototype: HTMLJimoBadgeElement;
        new (): HTMLJimoBadgeElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "jimo-badge": HTMLJimoBadgeElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface JimoBadge {
        "bgColor"?: string;
        "color"?: string;
        "num"?: Number | string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "jimo-badge": JimoBadge;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "jimo-badge": LocalJSX.JimoBadge & JSXBase.HTMLAttributes<HTMLJimoBadgeElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}

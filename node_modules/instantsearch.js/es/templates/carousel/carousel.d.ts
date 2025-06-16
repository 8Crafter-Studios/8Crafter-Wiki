
import { html } from 'htm/preact';
import { h } from 'preact';
import type { CarouselProps as CarouselUiProps, VNode } from 'instantsearch-ui-components';
type Template = (params: {
    html: typeof html;
}) => VNode | VNode[] | null;
type CreateCarouselTemplateProps<TObject extends Record<string, unknown>> = {
    templates?: Partial<{
        previous: Exclude<Template, string>;
        next: Exclude<Template, string>;
    }>;
    cssClasses?: Partial<CarouselUiProps<TObject>['classNames']>;
};
type CarouselTemplateProps<TObject extends Record<string, unknown>> = Pick<CarouselUiProps<TObject>, 'items'> & {
    templates: {
        item?: CarouselUiProps<TObject>['itemComponent'];
    };
    cssClasses?: Partial<CarouselUiProps<TObject>['classNames']>;
};
export declare function carousel<TObject extends Record<string, unknown>>({ cssClasses, templates, }?: CreateCarouselTemplateProps<TObject>): ({ items, templates: widgetTemplates, cssClasses: widgetCssClasses, }: CarouselTemplateProps<TObject>) => h.JSX.Element;
export {};

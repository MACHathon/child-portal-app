import * as Contentful from "contentful";

export interface TypeComponentHeaderFields {
  internalName: Contentful.EntryFields.Symbol;
  logoutLable: Contentful.EntryFields.Symbol;
  countrySelectorLabel: Contentful.EntryFields.Symbol;
  loginCtaLabel: Contentful.EntryFields.Symbol;
}

export type TypeComponentHeader = Contentful.Entry<TypeComponentHeaderFields>;

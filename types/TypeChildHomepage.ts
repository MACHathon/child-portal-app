import * as Contentful from "contentful";

export interface TypeChildHomepageFields {
    childSelectorLabel: Contentful.EntryFields.Symbol;
    parentSelectorLabel?: Contentful.EntryFields.Symbol;
    emailInputLabel: Contentful.EntryFields.Symbol;
    passwordInputLabel: Contentful.EntryFields.Symbol;
    pinInputLabel: Contentful.EntryFields.Symbol;
    childIdLabel: Contentful.EntryFields.Symbol;
    invalidCredentialsLabel: Contentful.EntryFields.Symbol;
    loginCtaLabel: Contentful.EntryFields.Symbol;
    askYourParentsLabel: Contentful.EntryFields.Symbol;
}

export type TypeChildHomepage = Contentful.Entry<TypeChildHomepageFields>;

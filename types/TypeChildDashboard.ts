import * as Contentful from "contentful";

export interface TypeChildDashboardFields {
    helloLabel: Contentful.EntryFields.Symbol;
    donateItemsLabel: Contentful.EntryFields.Symbol;
    donateItemsDescription: Contentful.EntryFields.Symbol;
    spendToykensLabel: Contentful.EntryFields.Symbol;
    spendMyToykensDescription: Contentful.EntryFields.Symbol;
    chooseRewardLabel: Contentful.EntryFields.Symbol;
    chooseRewardsDescription: Contentful.EntryFields.Symbol;
    trailsLabel: Contentful.EntryFields.Symbol;
    trailsDescription: Contentful.EntryFields.Symbol;
}

export type TypeChildDashboard = Contentful.Entry<TypeChildDashboardFields>;

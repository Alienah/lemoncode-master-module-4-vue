import {
  Module,
  MutationTree,
  ActionTree,
  GetterTree,
  ActionContext,
} from "vuex";

export interface OrgSearchState {
  orgSearched: string;
}

export interface OrgSearchGetters {
  orgSearched(state: OrgSearchState): string;
}

export enum OrgSearchMutationsEnums {
  SET_ORG_SEARCHED = "SET_ORG_SEARCHED",
}

export type OrgSearchMutations<S = OrgSearchState> = {
  [OrgSearchMutationsEnums.SET_ORG_SEARCHED](
    state: S,
    orgSearched: string
  ): void;
};

export enum OrgSearchActionsEnums {
  SET_ORG_SEARCHED = "setOrgSearched",
}

export type OrgSearchActions<S = OrgSearchState> = {
  [OrgSearchActionsEnums.SET_ORG_SEARCHED](
    { commit }: ActionContext<S, unknown>,
    orgSearched: string
  ): void;
};

const state: () => OrgSearchState = () => ({
  orgSearched: "Lemoncode",
});
const getters: GetterTree<OrgSearchState, unknown> & OrgSearchGetters = {
  orgSearched: (state: OrgSearchState) => state.orgSearched,
};
const mutations: MutationTree<OrgSearchState> & OrgSearchMutations = {
  [OrgSearchMutationsEnums.SET_ORG_SEARCHED](state, orgSearched) {
    state.orgSearched = orgSearched;
  },
};
const actions: ActionTree<OrgSearchState, unknown> & OrgSearchActions = {
  [OrgSearchActionsEnums.SET_ORG_SEARCHED](
    { commit }: ActionContext<OrgSearchState, unknown>,
    orgSearched: string
  ) {
    if (!orgSearched) return;
    commit(OrgSearchMutationsEnums.SET_ORG_SEARCHED, orgSearched);
  },
};

const OrgSearchModule: Module<OrgSearchState, unknown> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default OrgSearchModule;

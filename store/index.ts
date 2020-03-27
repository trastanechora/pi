import { MutationTree, ActionTree } from "vuex";

import Vue from "vue";

// import { CancelToken } from "axios"
// const baseUrl = 'https://api.hnpwa.com/v0' // "/api"

interface Dictionary<T> {
  [key: string]: T;
}

// export interface Users {
//   [key: string]: User
// }
export interface User {
  created: string;
  createdTime: number;
  id: string;
  karma: number;
}

export interface Items {
  [key: number]: Item;
}
export interface Item {
  comments: any[];
  commentsCount: number;
  content: string;
  domain: string;
  id: number;
  points: number;
  time: number | Date | undefined;
  timeAgo: string;
  title: string;
  type: string;
  url: string;
  user: string;
}

// export interface Feeds {
//   [key: string]: Feed
// }
export interface Feed {
  commentsCount: number;
  domain: string;
  id: number;
  points: number;
  time: number | Date | undefined;
  timeAgo: string;
  title: string;
  type: string;
  url: string;
  user: string;
}

export interface IRootState {
  items: Items;
  users: Dictionary<User>;
  feeds: Dictionary<Feed>;
}
// =================================================
// State
// =================================================
const s = (): IRootState => {
  const state = {
    items: {
      /* [id: number]: Item */
    },
    users: {
      /* [id: string]: User */
    },
    feeds: {
      /* [page: number] : [ [id: number] ] */
    }
  };

  return state;
};

// =================================================
// Mutations
// =================================================
const mutations: MutationTree<IRootState> = {
  SET_FEED: (state, { feed, ids, page }) => {
    Vue.set(state.feeds[feed], page, ids);
  },
  SET_ITEM: (state, { item }: { item: Item }) => {
    if (item) {
      Vue.set(state.items as Item[], item.id, item);
    }
  },
  SET_ITEMS: (state, { items }: { items: Item[] }) => {
    items.forEach(item => {
      if (item) {
        Vue.set(state.items as Item[], item.id, item);
      }
    });
  },
  SET_USER: (state, { id, user }: { id: string; user: User }) => {
    Vue.set(state.users, id, user || false); /* false means user not found */
  }
};

// =================================================
// Actions
// =================================================
const actions: ActionTree<IRootState, any> = {};

export { s as state, actions, mutations };

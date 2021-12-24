import { getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";

import store from "@/store/index";

@Module({ dynamic: true, store, name: "auth", namespaced: true })
class AuthStore extends VuexModule {
  userSeq = 0;

  @Mutation
  setUserSeq(seq: number) {
    this.userSeq = seq;
  }
}

export const authStore = getModule(AuthStore, store);

<template>
  <div>
    <header class="header">
      <div>header</div>
      <div class="logout" @click="logout">Logout</div>
    </header>
    <div class="main-content">
      <router-view />
    </div>
    <footer class="footer">footer ne</footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { USER } from "@/store/type";
import { Action } from "vuex-class";

const namespace: string = "user";

@Component({
  name: "default-layout"
})
export default class DefaultLayout extends Vue {
  @Action(USER.USER_LOGOUT, { namespace }) public userLogout: any;

  public logout() {
    this.userLogout();
  }
}
</script>

<style scoped lang="less">
.header {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 90px;

  .logout {
    cursor: pointer;
  }
}

.main-content {
  min-height: calc(100vh - 50px - 80px);
}

.footer {
  height: 80px;
  text-align: center;
  background: #cdcdcd;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

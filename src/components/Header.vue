<template>
  <div class="header">
    <div class="content">
      <div class="logo">
        <router-link to="/">
          <img alt="Lemoncode logo" src="../assets/logo.png" />
          MembersList
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  background-color: darkslategray;
  height: 64px;
  display: flex;
  font-size: 18px;

  * {
    color: white;
  }
}

.content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  img {
    height: 42px;
    width: 42px;
    margin-right: 8px;
  }
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
}
</style>

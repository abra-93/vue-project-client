<template>
  <div class="header">
    <div class="header__wrap">
      <!-- Logo -->
      <a class="header__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/14/FRONT3X-Logo.png"
          alt="IMG-LOGO"
        />
      </a>

      <!-- Menu -->
      <div class="heaader__menu menu">
        <nav class="menu__wrap">
          <ul class="menu__wrap-item">
            <li class="menu__item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="menu__item">
              <router-link to="/about">About</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-header",
};
</script>

<style lang="scss">
.header {
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  background-color: #fff;
  width: 320px;
  height: 100vh;
  border-right: 1px solid #e5e5e7;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  &__wrap {
    padding-top: 74px;
  }
  &__logo {
    max-width: 100px;
  }
}
.menu {
  margin-top: 50px;
  &__wrap-item {
    list-style-type: none;
    margin: 0px;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    flex-direction: column;
  }
  &__item {
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 0px;
    padding-right: 0px;
    text-align: center;
    a {
      text-transform: uppercase;
      font-weight: 500;
      padding: 0;
      border-bottom: 1px solid transparent;
    }
  }
}
</style>

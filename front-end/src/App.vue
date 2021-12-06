<template>
  <div id="app">
    <div class="header">
      <div class="sides">
        <router-link to="/" style="text-decoration: none; color: black;">
          <h1>Home</h1>
        </router-link>
        <router-link to="/browse" style="text-decoration: none; color: black;">
          <h1>Browse</h1>
        </router-link>
      </div>
      <div class="input">
        <button class="users">
          <router-link to="/cart" style="text-decoration: none; color: black;">Cart</router-link>
        </button>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="footer">
      <p>link to github</p>
    </div>
  </div>
</template>

<style>
html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}
.users {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin: 8px;
}
.input {
  position: fixed;
  right: 5px;
}
/* Header */
.header {
  display: flex;
  padding: 10px 100px 0px 100px;
  background-color: #5BDEFF;
  color: #1C454F;
}
.stuff {
  height: 50px;
  display: inline;
}
.title {
  margin-top: 5px;
}

.title h1 {
  font-size: 30px;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

/* Footer */
.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  background: #e3e3e3;
  font-size: 12px;
}

.footer a {
  color: #000;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>

<template>
  <div id="app">
    <FractionComponent />
  </div>
</template>

<script>
import FractionComponent from "./components/FractionComponent.vue";

export default {
  name: "app",
  components: {
    FractionComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background-color: rgb(242, 243, 248);
}

*,
:after,
:before {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-size: 22px;
}

.input-form {
  margin-bottom: 10px;
}

.input-form input {
  padding: 10px 6px;
  border-radius: 4px;
  border: solid 1px #e2e2e2;
  width: 100%;
  background: #d8f2f4;
  transition: all 0.3s ease-in-out;
}

.input-form input:focus {
  border: solid 1px #01b670;
  outline: 0;
}

.btn-submit {
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  background: #ffeaea;
  box-shadow: 0px 0px 6px 0px #197b55;
  color: #ffffff;
  background: #019d84;
  transition: all 0.3s ease-in-out;
}

.btn-submit:hover {
  background: #19b377;
  cursor: pointer;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}

.form-container {
  min-height: 350px;
}

.section-card {
  width: 480px;
  height: auto;
  box-shadow: 0px 0px 13px 0px rgba(82, 63, 105, 0.05);
  background-color: #ffffff;
  margin-bottom: 20px;
  border-radius: 4px;
}

.section-head {
  padding: 0px 25px;
  min-height: 60px;
  font-size: 1rem;
  font-weight: 500;
  color: #464457;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ebedf2;
  background: #01b670;
  color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.section-body {
  padding: 25px;
  min-height: 350px;
}

.error-message {
  margin-top: 5px;
  color: #ff3c3c;
  text-align: left;
  font-size: 12px;
}
</style>

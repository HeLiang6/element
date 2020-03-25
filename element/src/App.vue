<template>
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
html,
body,
div,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6,
p,
dl,
dt,
dd,
ol,
form,
input,
textarea,
th,
td,
select {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
html{
  font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
}
html,
body {
  min-height: 100%;
}

body {
  font-family: "Microsoft YaHei";
  font-size: 14px;
  color: #333;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}
ul,
ol {
  list-style: none;
}

img {
  border: none;
  vertical-align: middle;
}

a {
  text-decoration: none;
  color: #232323;
}

table {
  border-collapse: collapse;
  table-layout: fixed;
}

input,
textarea {
  outline: none;
  border: none;
}

textarea {
  resize: none;
  overflow: auto;
}

.clearfix {
  zoom: 1;
}

.clearfix:after {
  content: ".";
  width: 0;
  height: 0;
  visibility: hidden;
  display: block;
  clear: both;
  overflow: hidden;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.tl {
  text-align: left;
}

.tc {
  text-align: center;
}

.tr {
  text-align: right;
}
i,em{
  font-style: normal;
}
</style>

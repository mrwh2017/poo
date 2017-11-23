<template lang="html">
  <div class="list">
    <div class="wrapper">
      <section class="card__section">
        <div class="container">
          <div class="cover">
            <img src="src/assets/03.jpg" alt="">
          </div>
          <div class="abstract">
            <p>春眠不觉晓， 处处闻啼鸟</p>
            <p>春眠不觉晓， 处处闻啼鸟</p>
            <p>春眠不觉晓， 处处闻啼鸟</p>
            <p>春眠不觉晓， 处处闻啼鸟</p>
          </div>
        </div>
      </section>
      <section class="card__section">
        <div class="container">
          <h1>dsdsdsds</h1>
        </div>
      </section>
      <section class="card__section">
        <div class="container">
          <h1>dsdsdsds</h1>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',

}
</script>

<style lang="scss" scoped>
.list{
  max-width: 640px;
  width: 100%;
  text-align: left;
  height: 100%;
  margin: 0 auto;
  background-color: rgb(45, 101, 224);
}
.wrapper{
  padding: 1px 8px;
  background-color: red;
  color: #3c4043;
}
.card__section{
  background-color: #fff;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  border-radius: 8px;
  border-bottom: 1px hidden #fff;
  margin: 0 0 10px 0;
}
.container{
  line-height: 20px;
  padding: 11px 16px;
}
.cover{
  border-bottom: 1px solid #DFE1E5;
  margin: 0 0 12px;
  padding: 0 0 11px;
}
img{
  width: 100%;
}
</style>

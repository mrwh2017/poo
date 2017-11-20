<template lang="html">
  <div class="comment">
    <section class="comment-header">
      <h2 class="comment-header__title">525 条评论</h2>
      <span class="comment-header__sort">leasest/hotest</span>
    </section>

    <section class="comment-create">
      <div class="comment-create__avatar">
        <img src="" alt="">
      </div>
      <div class="comment-create__text">
        <section class="text__write">
          <textarea name="name" wrap="soft"  placeholder="edit something" rows="3" ></textarea>
        </section>
        <section class="text__btns">
          <span>cancel</span>
          <span>send</span>
        </section>
      </div>
    </section>


  </div>
</template>

<script>
export default {
  name: 'comment',
}
</script>

<style lang="scss" scoped>
.comment{
  max-width: 640px;
  width: 100%;
  height: 100%;
  margin: 0px auto 32px;
  background-color: rgb(45, 101, 224);
}
.comment-header, .comment-create{
  display: flex;
  flex-direction: row;
  margin: auto 30px;
  margin-bottom: 24px;
}
.comment-header__title{
  font-size: 16px;
  margin-right: 32px;
}

.comment-create__avatar{
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 16px;
  background-color: rgb(72, 238, 66);
}
.comment-create__text{
  flex: 1;
  display: flex;
  flex-direction: column;
  textarea{
    resize: vertical;
  }
}
.text__write{
  flex: 1;
}
.text__write textarea{
  width: 100%;
}

.text__btns{
  display: flex;
  align-items: center;
  align-content: flex-end;
  justify-content: flex-end;
}
.text__btns span{
  padding: 10px 16px;
}
.text__btns span:last-child{
  background-color: rgb(84, 97, 241);
}

</style>

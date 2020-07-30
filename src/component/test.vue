<template>
   <div id="test">
       {{msg}}
   </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'It Is my life'
    }
  }
}
</script>

<style scoped>
   #test{
      width:300px;
      height:300px;
      line-height:300px;
      background:green;
      color:red;
      font-size:22px;
      font-weight:bold;
      text-align: center;
   }
</style>
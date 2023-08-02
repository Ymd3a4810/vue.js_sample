<template>
  <div>
    <el-col :span="12">
      <el-card class="box-card" shadow="hover" style="margin: 5px 0;">
        <el-row :gutter="12">
          <el-col :span="21">{{ todo }}</el-col>
          <el-col :span="3">
            <el-button @click="removeTodo(index)" type="success" icon="el-icon-check" circle></el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </div>
</template>

<script>
import axios from 'axios';


/* eslint-disable */
const client = axios.create({
  baseURL: `${process.env.VUE_APP_GITHUB_ENDPOINT}`,
  headers: {
    'Authorization': `token ${process.env.VUE_APP_GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type':'application/json',
  },
});
/* eslint-enable */

// propsには受け取るときの名前をcamelCaseで指定する
export default {
  name: 'TodoItem',
  // 読み取り専用なので代入できない
  props:{
    todo:String,
    index:Number,
  },
  // TODO1: removeTodoをメソッドの中に作る
  // TODO2: 親のコンポーネントに受け取るメソッドを作る
  // TOOD3: 親のコンポーネントのpropsで2で作ったメソッドを渡す
  // TODO4: 1で作ったメソッドの中で、3で渡されたメソッドをemitする
  methods: {
    removeTodo(index){

      this.$emit('remove-todo',index);
    }
  },  
}
</script>
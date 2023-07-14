<template>
  <div>
    <h1>issueリスト</h1>
    <!-- getIssue()をクリックイベントに登録する -->
    <el-button type="success" @click="getIssues()">issue取得</el-button>
    <!-- 取得したデータを確認するための暫定要素 -->
    <div>{{ issues }}</div>
  </div>
</template>

<script>
import axios from 'axios'; // --1

export default {
  name: 'IssueList',
  data(){
    return{
        issues:[]
    }
  }
  methods: {
    getIssues() {
      axios.get('https://api.github.com/repos/diveintocode-corp/vue_seriese_api/issues',
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
              'Content-Type':'application/json',
            },
          },
        )
        .then((res) => {
          this.issues = res
      })
    }
  }
}
</script>
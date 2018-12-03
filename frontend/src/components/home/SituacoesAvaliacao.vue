<template>
    <div class="nota-home">
        <vue-json-to-csv :jsonData="situacoesAvaliacao"
  :labels="{
    co_situacao: { title: 'co_situacao' },
    ds_situacao: { title: 'ds_situacao' }
   }"
  separator=';'
  @success="val => handleSuccess(val)"
  @error="val => handleError(val)">
  <button>
    <b>Situações avaliação</b>
  </button>
</vue-json-to-csv>
       <hr>
       </div>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'
import VueJsonToCsv from 'vue-json-to-csv'

export default {
    name: 'SituacoesAvaliacao',
    components: {
        VueJsonToCsv       
    },
    
    data: function() {
        return {
            situacoesAvaliacao: [],
            
        }
    },
     methods: {
        loadSituacoesAvaliacao() {
            const url = `${baseApiUrl}/situacoesAvaliacao`
            axios.get(url).then(res => {
                this.situacoesAvaliacao = res.data
            })
        },
        loadSituacaoAvaliacao(situacaoAvaliacao, mode = 'history') {
            this.mode = mode
            this.situacaoAvaliacao = { ...situacaoAvaliacao }
        }
    },
    mounted() {
        this.loadSituacoesAvaliacao()
    }
}
</script>

<style>

</style>

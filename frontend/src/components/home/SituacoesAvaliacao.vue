<template>
    <div class="nota-home">
        <vue-json-to-csv :jsonData="situacoesAvaliacao"
  :labels="{
    co_situacao: { title: 'co_situacao' },
    ds_situacao: { title: 'ds_situacao' }
   }"
    csv-title='tb_situacao_servico'
    separator=';'
    @update:success="val => handleSuccess(val)"
    @update:error="val => handleError(val)">
  <button class="fa fa-file-excel-o">
    <b>  tb_situacao_servico</b>
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

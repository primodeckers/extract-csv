<template>
    <div class="avaliacao-home">
        <vue-json-to-csv :jsonData="avaliacoes"
    :labels="{
    id: { title: 'id' },
    id_cidadao: { title: 'id_cidadao' },
    id_servico: { title: 'id_servico' },
    id_orgao: { title: 'id_orgao' },
    nu_protocolo: { title: 'nu_protocolo' },
    ds_etapa: { title: 'ds_etapa' },
    co_situacao: { title: 'co_situacao' },
    dt_avaliacao: { title: 'dt_avaliacao' },
    
  }"
  separator=';'
  @success="val => handleSuccess(val)"
  @error="val => handleError(val)">
  <button>
    <b>tb_avaliacao</b>
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
    name: 'Avaliacoes',
    components: {
        VueJsonToCsv       
    },
    
    data: function() {
        return {
            avaliacoes: []
            
        }
    },
     methods: {
        loadAvaliacoes() {
            const url = `${baseApiUrl}/avaliacoes`
            axios.get(url).then(res => {
                this.avaliacoes = res.data
            })
        },
        loadAvaliacao(avaliacao, mode = 'history') {
            this.mode = mode
            this.avaliacao = { ...avaliacao }
        }
    },
    mounted() {
        this.loadAvaliacoes()
    }
}
</script>

<style>

</style>

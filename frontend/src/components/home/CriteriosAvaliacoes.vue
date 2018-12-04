<template>
    <div class="criterio-valiacao-home">
        <vue-json-to-csv :jsonData="criteriosAvaliacoes"
  :labels="{
    co_criterio: { title: 'co_criterio' },
    ds_criterio: { title: 'ds_criterio' },
    fl_permite_observacao: { title: 'fl_permite_observacao' }
  }"
  separator=';'
  @success="val => handleSuccess(val)"
  @error="val => handleError(val)">
  <button>
    <b>tb_criterio_avaliacao</b>
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
    name: 'CriteriosAvaliacoes',
    components: {
        VueJsonToCsv       
    },
    
    data: function() {
        return {
            criteriosAvaliacoes: [],
            
        }
    },
     methods: {
        loadCriteriosAvaliacoes() {
            const url = `${baseApiUrl}/criteriosAvaliacoes`
            axios.get(url).then(res => {
                this.criteriosAvaliacoes = res.data
            })
        },
        loadCriterioAvaliacao(criterioAvaliacao, mode = 'history') {
            this.mode = mode
            this.criterioAvaliacao = { ...criterioAvaliacao }
        }
    },
    mounted() {
        this.loadCriteriosAvaliacoes()
    }
}
</script>

<style>

</style>

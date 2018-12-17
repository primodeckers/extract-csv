<template>
    <div class="nota-home">
        <vue-json-to-csv :jsonData="notaCriteriosAvaliacoes"
  :labels="{
    id_nota: { title: 'id_nota' },
    co_criterio: { title: 'co_criterio' }
  }"
    csv-title='tb_nota_criterio_avaliacao'
    separator=';'
    @update:success="val => handleSuccess(val)"
    @update:error="val => handleError(val)">
  <button class="fa fa-file-excel-o">
    <b>  tb_nota_criterio_avaliacao</b>
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
    name: 'NotaCriteriosAvaliacoes',
    components: {
        VueJsonToCsv       
    },
    
    data: function() {
        return {
            notaCriteriosAvaliacoes: [],
            
        }
    },
     methods: {
        loadNotaCriterioAvaliacoes() {
            const url = `${baseApiUrl}/notasCriteriosAvaliacoes`
            axios.get(url).then(res => {
                this.notaCriteriosAvaliacoes = res.data
            })
        },
        loadNotaCriterioAvaliacao(notaCriterioAvaliacao, mode = 'history') {
            this.mode = mode
            this.notaCriterioAvaliacao = { ...notaCriterioAvaliacao }
        }
    },
    mounted() {
        this.loadNotaCriterioAvaliacoes()
    }
}
</script>

<style>

</style>

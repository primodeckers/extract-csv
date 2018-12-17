<template>
    <div class="nota-home">
        <vue-json-to-csv :jsonData="notas"
  :labels="{
    id: { title: 'id' },
    co_tipo_nota: { title: 'co_tipo_nota' },
    ds_nota: { title: 'ds_nota' },
    ds_outro_criterio: { title: 'ds_outro_criterio' },
    ds_nofl_avaliacao_anonimata: { title: 'fl_avaliacao_anonima' },
    dt_nota: { title: 'dt_nota' },

  }"
    csv-title='tb_nota'
    separator=';'
    @update:success="val => handleSuccess(val)"
    @update:error="val => handleError(val)">
  <button class="fa fa-file-excel-o">
    <b>  tb_nota</b>
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
    name: 'NotasCsv',
    components: {
        VueJsonToCsv       
    },
    
    data: function() {
        return {
            notas: [],
            
        }
    },
     methods: {
        loadNotas() {
            const url = `${baseApiUrl}/notas`
            axios.get(url).then(res => {
                this.notas = res.data
            })
        },
        loadNota(nota, mode = 'history') {
            this.mode = mode
            this.nota = { ...nota }
        }
    },
    mounted() {
        this.loadNotas()
    }
}
</script>

<style>

</style>

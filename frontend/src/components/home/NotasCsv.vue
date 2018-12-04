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
  separator=';'
  @success="val => handleSuccess(val)"
  @error="val => handleError(val)">
  <button>
    <b>tb_notas</b>
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

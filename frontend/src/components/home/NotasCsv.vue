<template>
  <div>
    <wait-list
      :wait=0.01
      :promiseMethod="sample()">
      <p slot="loading">Aguarde o carregamento da <b>tb_notas </b>
          <img src="@/assets/loading.gif" alt="Loading">
      </p>
      <div slot="loaded">        
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
                <b>  tb_notas</b>    
            </button>
  
        </vue-json-to-csv>


      </div>
    </wait-list>
   
  
  </div>
</template>
 
<script>
   import { baseApiUrl } from '@/global'
   import axios from 'axios'
   import { WaitList, WaitImg } from 'vue-wait-component'
   import VueJsonToCsv from 'vue-json-to-csv'


 
export default {
   name: 'NostasCsv',
  components: { WaitList, WaitImg, VueJsonToCsv },
  data() {
    return {
          notas: []
        }
  },
  methods: {
    sample() {       
      return new Promise(resolve => {
        setTimeout(() => {
            const url = `${baseApiUrl}/notas`   
             let data =  axios.get(url).then(res => {
                this.notas = res.data
             })
          resolve(data)
        }, 3000);
      }).then(response => {
        this.data = response;
        
      

      });
    },

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
        this.sample()
    }
};

</script> 
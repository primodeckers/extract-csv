            <template>
  <div>
    <wait-list
      :wait=0.01
      :promiseMethod="sample()">
      <p slot="loading">Aguarde o carregamento da <b>tb_situacao_servico </b>
          <img src="@/assets/loading.gif" alt="Loading">
      </p>
      <div slot="loaded">        
           <vue-json-to-csv :jsonData="situacoes"
           :labels="{
            co_situacao: { title: 'co_situacao' },
            ds_situacao: { title: 'ds_situacao' },
            }"
            csv-title='tb_situacao_servico'
            separator=';'
            @update:success="val => handleSuccess(val)"
            @update:error="val => handleError(val)">

            <button class="fa fa-file-excel-o">
                <b>  tb_situacao_servico</b>    
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
   name: 'SituacoesAvaliacao',
  components: { WaitList, WaitImg, VueJsonToCsv },
  data() {
    return {
          situacoes: []
        }
  },
  methods: {
    sample() {       
      return new Promise(resolve => {
        setTimeout(() => {
            const url = `${baseApiUrl}/situacoes`   
             let data =  axios.get(url).then(res => {
                this.situacoes = res.data
             })
          resolve(data)
        }, 3000);
      }).then(response => {
        this.data = response;
        
      

      });
    },

    loadSituacoes() {
                const url = `${baseApiUrl}/situacoes`                
                axios.get(url).then(res => {
                this.situacoes = res.data
                            
            })
        },
    loadSituacao(situacao, mode = 'history') {
            this.mode = mode
            this.situacao = { ...situacao }
        }
      },
      mounted() {
        this.loadSituacoes()
        this.sample()
    }
};

</script> 
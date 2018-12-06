<template>
  <div>
    <wait-list
      :wait=0.01
      :promiseMethod="sample()">
      <p slot="loading">Aguarde o carregamento da <b>tb_servicos </b>
          <img src="@/assets/loading.gif" alt="Loading">
      </p>
      <div slot="loaded">
        
           <vue-json-to-csv :jsonData="servicos"
           :labels="{
            nome: { title: 'nome' },
            porcentagemDigital: {title: 'porcentagem_digital'},
            servicoDigital: {title: 'servico_digital'},
            idServico: {title: 'id_servico' },
            idOrgao: {title: 'id_orgao'},
            nomeOrgao: {title: 'nome_orgao'},           
            avaliacoesPositivas: {title: 'avaliacoes_positivas'},
            avaliacoesNegativas: {title: 'avaliacoes_negativas'}

            }"
            csv-title='tb_servicos'
            separator=';'
            @update:success="val => handleSuccess(val)"
            @update:error="val => handleError(val)">

            <button class="fa fa-file-excel-o">
                <b>  tb_servicos</b>    
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
   name: 'Loading',
  components: { WaitList, WaitImg, VueJsonToCsv },
  data() {
    return {
        servicos: [],
        };
  },
  methods: {
    sample() {       
      return new Promise(resolve => {
        setTimeout(() => {
            const url = `${baseApiUrl}/servicos`   
             let data =  axios.get(url).then(res => {
                this.servicos = res.data
             })
          resolve(data)
        }, 30000);
      }).then(response => {
        this.data = response;
      

      });
    },
    loadServicos() {
                const url = `${baseApiUrl}/servicos`                
                axios.get(url).then(res => {
                this.servicos = res.data
                            
            })
        }
  }
};

</script> 
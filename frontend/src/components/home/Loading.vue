<template>
  <div>
    <wait-list
      :wait=0.01
      :promiseMethod="sample()">
      <p slot="loading">Aguarde o carregamento da tb_servicos 
          <img src="@/assets/loading.gif" alt="Loading">
      </p>
      <div slot="loaded">
        
           <vue-json-to-csv :jsonData="servicos"
           :labels="{
            idServico: { title: 'id_servico' },
            nome: { title: 'nome' },
            idOrgao: { title: 'id_orgao'},
            nomeOrgao: { title: 'nome_orgao'},
            porcentagemDigital: { title: 'porcentagem_digital' },
            servicoDigital: { title: 'servico_digital' },
            orgao: { id: 'fl_avaliacao_anonima' },
            dt_nota: { title: 'dt_nota' }

            }"
            separator=';'
            @success="val => handleSuccess(val)"
            @error="val => handleError(val)">

            <button >
                <b>tb_servicos</b>    
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
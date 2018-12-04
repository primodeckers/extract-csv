<template>
    <div class="ps-home">
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
       <hr>
       
       </div>
</template>

<script>

import { baseApiUrl } from '@/global'
import axios from 'axios'
import VueJsonToCsv from 'vue-json-to-csv'

export default {
    name: 'PortalServicosCsv',
    components: {
        VueJsonToCsv
    },
    
    data: function() {
        return {
                servicos: [],
                

        }
    },
    methods: {
        loadServicos() {
            const url = `${baseApiUrl}/servicos`                
                axios.get(url).then(res => {
                this.servicos = res.data
             
            })
        },
        loadServico(servico, mode = 'history') {
            this.mode = mode
            this.servico = { ...servico }
        }
    },  
    mounted() {
        this.loadServicos()
    }
    

}


</script>

<style>

</style>

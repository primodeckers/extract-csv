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
    dt_nota: { title: 'dt_nota' },

  }"
  separator=';'
  @success="val => handleSuccess(val)"
  @error="val => handleError(val)">

  <button-spinner
    :is-loading="isLoading" 
    :disabled="isLoading"
    :status="status">
    <span>Servicos</span>
</button-spinner>

</vue-json-to-csv>
       <hr>
       </div>
</template>

<script>

import { baseApiUrl } from '@/global'
import axios from 'axios'
import VueJsonToCsv from 'vue-json-to-csv'
 
import VueButtonSpinner from 'vue-button-spinner'

export default {
    name: 'PortalServicosCsv',
    components: {
        VueJsonToCsv, VueButtonSpinner      
    },
    
    data: function() {
        return {
            servico: {},
            servicos: [],
            isLoading: false,
            status: '',
            
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
    onSubmit() {
			    this.isLoading = true
				$someRequest('/url', 'GET')
				.then(response => {
					this.isLoading = false
					this.status = true // or success
					setTimeout(() => { this.status = '' }, 2000) // to clear the status :)
				})
				.catch(error => {
					console.error(error)
					this.isLoading = false
					this.status = false //or error
				})
			},
    mounted() {
        this.loadServicos()
    },
    created() {
        this.onSubmit()
    },

}
</script>

<style>

</style>

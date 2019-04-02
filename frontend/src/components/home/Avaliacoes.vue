<template>
  <div>
    <wait-list :wait="0.01" :promiseMethod="sample()">
      <p slot="loading">
        Aguarde o carregamento da
        <b>tb_avaliacao</b>
        <img src="@/assets/loading.gif" alt="Loading">
      </p>
      <div slot="loaded">
        <vue-json-to-csv
          :jsonData="avaliacoes"
          :labels="{
              id: { title: 'id' },
              id_cidadao: { title: 'id_cidadao' },
              id_servico: { title: 'id_servico' },
              id_orgao: { title: 'id_orgao' },
              nu_protocolo: { title: 'nu_protocolo' },
              ds_etapa: { title: 'ds_etapa' },
              co_situacao: { title: 'co_situacao' },
              dt_avaliacao: { title: 'dt_avaliacao' },
    
             }"
          csv-title="tb_avaliacao"
          separator=";"
          @update:success="val => handleSuccess(val)"
          @update:error="val => handleError(val)"
        >
          <button class="fa fa-file-excel-o">
            <b>tb_avaliacao</b>
          </button>
        </vue-json-to-csv>
      </div>
    </wait-list>
  </div>
</template>
 
<script>
import { baseApiUrl } from "@/global";
import axios from "axios";
import { WaitList, WaitImg } from "vue-wait-component";
import VueJsonToCsv from "vue-json-to-csv";

export default {
  name: "Avaliacoes",
  components: { WaitList, WaitImg, VueJsonToCsv },
  data() {
    return {
      avaliacoes: []
    };
  },
  methods: {
    sample() {
      return new Promise(resolve => {
        setTimeout(() => {
          const url  = `${baseApiUrl}/avaliacoes`;
          let data = axios.get(url).then(res => {
            this.avaliacoes = res.data;
          });
          resolve(data);
        }, 10000);
      }).then(response => {
        this.data = response;
      });
    },

    loadAvaliacoes() {
      const url = `${baseApiUrl}/avaliacoes`;
      axios.get(url).then(res => {
        this.avaliacoes = res.data;
      });
    },
    loadAvaliacao(avaliacao, mode = "history") {
      this.mode = mode;
      this.avaliacao = { ...avaliacao };
    }
  },
  mounted() {
    this.loadAvaliacoes();
    this.sample();
  }
};
</script> 
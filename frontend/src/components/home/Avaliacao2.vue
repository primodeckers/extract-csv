<template>
  <div>
    <button @click.prevent="copyAvaliacoes();downloadItem()" class="fa fa-file-excel-o">
      <b>tb_avaliacao</b>
    </button>
  </div>
</template>


<script>
import axios from "axios";
import { baseApiUrl } from "@/global";

export default {
  name: "Avaliacao2",

  methods: {
    copyAvaliacoes() {
      const url = `${baseApiUrl}/getAvaliacoes/`;
      axios.get(url);
    },

    downloadItem() {
      axios
        .post(
          "http://localhost:3000/getAvaliacoes/tb_avaliacao.csv",
          {},
          { headers: { "Content-Type": "arraybuffer" } }
        )
        .then(response => {
          let blob = new Blob([response.data], { type: "application/csv" });
          let link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = "tb_avaliacao.csv";
          link.click();
        });
    }
  }
};
</script>

<style>
</style>

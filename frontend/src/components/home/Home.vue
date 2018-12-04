<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Arquivos" sub="Extract" />
        <!-- <DownloadCsv /> -->
        
        <NotasCsv /> 
     
        <CriteriosAvaliacoes />
       
        <Avaliacoes />
     
        <NotaCriteriosAvaliacoes />
      
        <SituacoesAvaliacao />
        
           
        <Loading />
    
        
        
    </div>
    
</template>

<script>
import PageTitle from '../template/PageTitle'
import Avaliacoes from './Avaliacoes'
import NotasCsv from './NotasCsv'
import CriteriosAvaliacoes from './CriteriosAvaliacoes'
import NotaCriteriosAvaliacoes from './NotaCriteriosAvaliacoes'
import SituacoesAvaliacao from './SituacoesAvaliacao'
//import PortalServicosCsv from './PortalServicosCsv'
import Loading from './Loading'







//import axios from 'axios'
//import { baseApiUrl } from '@/global'



export default {
    name: 'Home',
    components: { PageTitle, Avaliacoes, NotasCsv, CriteriosAvaliacoes, NotaCriteriosAvaliacoes, SituacoesAvaliacao, Loading }

}
</script>

<style>

</style>

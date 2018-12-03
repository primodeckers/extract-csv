<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Arquivos" sub="Extract" />
        <!-- <DownloadCsv /> -->
        
        <NotasCsv /> 
        
        <hr>
        <CriteriosAvaliacoes />
        <hr>
        <Avaliacoes />
        <hr>
        <NotaCriteriosAvaliacoes />
        <hr>
        <SituacoesAvaliacao />
        <hr>
        <PortalServicosCsv />
        <hr>
        <Subimit />
    </div>
    
</template>

<script>
import PageTitle from '../template/PageTitle'
import Avaliacoes from './Avaliacoes'
import NotasCsv from './NotasCsv'
import CriteriosAvaliacoes from './CriteriosAvaliacoes'
import NotaCriteriosAvaliacoes from './NotaCriteriosAvaliacoes'
import SituacoesAvaliacao from './SituacoesAvaliacao'
import PortalServicosCsv from './PortalServicosCsv'
import Subimit from './Subimit'





//import axios from 'axios'
//import { baseApiUrl } from '@/global'



export default {
    name: 'Home',
    components: { PageTitle, Subimit, Avaliacoes, NotasCsv, PortalServicosCsv, CriteriosAvaliacoes, NotaCriteriosAvaliacoes, SituacoesAvaliacao }

}
</script>

<style>

</style>

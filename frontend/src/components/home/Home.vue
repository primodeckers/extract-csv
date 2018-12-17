<template>
    <div class="home">
        <PageTitle icon="fa fa-file-excel-o" main=" Parses" />
        <NotasCsv />     
        <CriteriosAvaliacoes />       
        <Avaliacoes />     
        <NotaCriteriosAvaliacoes />      
        <SituacoesAvaliacao />           
        <PortalServicos />
    
        
        
    </div>
    
</template>

<script>
import PageTitle from '../template/PageTitle'
import Avaliacoes from './Avaliacoes'
import NotasCsv from './NotasCsv'
import CriteriosAvaliacoes from './CriteriosAvaliacoes'
import NotaCriteriosAvaliacoes from './NotaCriteriosAvaliacoes'
import SituacoesAvaliacao from './SituacoesAvaliacao'
import PortalServicos from './PortalServicos'

export default {
    name: 'Home',
    components: { PageTitle, Avaliacoes, NotasCsv, CriteriosAvaliacoes, NotaCriteriosAvaliacoes, SituacoesAvaliacao, PortalServicos }

}
</script>

<style>

</style>

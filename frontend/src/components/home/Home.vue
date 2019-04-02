<template>
    <div class="home">
        <PageTitle icon="fa fa-file-excel-o" main=" Parses" />
        
        <CriteriosAvaliacoes />       
           
        <NotaCriteriosAvaliacoes />      
        <SituacoesAvaliacao />           
          
        
        <hr>
        <NotasCsv />
        <hr>
        <SituacoesAvaliacao />
        <hr>
        <PortalServicos />
        <hr>
        <Avaliacao2 /> 
        
        <hr>
        
    
        
        
    </div>
    
</template>

<script>
import PageTitle from '../template/PageTitle'
import NotasCsv from './NotasCsv'
import CriteriosAvaliacoes from './CriteriosAvaliacoes'
import NotaCriteriosAvaliacoes from './NotaCriteriosAvaliacoes'
import SituacoesAvaliacao from './SituacoesAvaliacao'
import PortalServicos from './PortalServicos'
import Avaliacao2 from './Avaliacao2'


export default {
    name: 'Home',
    components: { PageTitle, NotasCsv, CriteriosAvaliacoes, NotaCriteriosAvaliacoes, SituacoesAvaliacao, PortalServicos, Avaliacao2 }

}
</script>

<style>

</style>

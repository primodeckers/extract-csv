<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Administração do sistema"></PageTitle>
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Usuários">
                    <UserAdmin />
                    </b-tab>
                              
                </b-tabs>
                
            </b-card>
        </div>
    </div>



</template>

<script>
import PageTitle from '../template/PageTitle'
import UserAdmin from './UserAdmin'

export default {
    name: 'AdminPAges',
    components: { PageTitle, UserAdmin }

}
</script>

<style>

</style>

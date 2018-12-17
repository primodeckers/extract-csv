import Vue from 'vue'
export const userKey = '__Parse_To_user'

export const baseApiUrl = 'http://localhost:4000'
export const baseApiPortalServicos = 'https://www.servicos.gov.br/api/v1/servicos?campos=id%2C%20nome%2C%20porcentagemDigital%2C%20servicoDigital%2C%20avaliacoes%2C%20orgao'

export function showError(e) {
    if(e && e.response && e.response.data) {
        Vue.toasted.global.defaultError({ msg : e.response.data })
    } else if(typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg : e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, baseApiPortalServicos, userKey }
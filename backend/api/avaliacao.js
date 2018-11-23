module.exports = app => {

    const get = (req, res) => {
        app.db('avaliacao.tb_avaliacao')
            .select('id', 'id_cidadao', 'id_orgao', 'id_servico','nu_protocolo', 'ds_etapa', 'co_situacao', 'dt_avaliacao')
            .then(avaliacao => res.json(avaliacao))
            .catch(err => res.status(500).send(err))
    }

    return { get }
}

module.exports = app => {

    const get = (req, res) => {
        app.db('avaliacao.tb_situacao_avaliacao')
            .select('co_situacao', 'ds_situacao')
            .then(situacoesAvaliacao => res.json(situacoesAvaliacao))
            .catch(err => res.status(500).send(err))
    }

    return { get }
}

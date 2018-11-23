module.exports = app => {

    const get = (req, res) => {
        app.db('avaliacao.tb_nota')
            .select('id', 'co_tipo_nota', 'ds_nota', 'ds_outro_criterio', 'fl_avaliacao_anonima', 'dt_nota')
            .then(notas => res.json(notas))
            .catch(err => res.status(500).send(err))
    }

    return { get }
}
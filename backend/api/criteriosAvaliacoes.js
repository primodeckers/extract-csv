module.exports = app => {

    const get = async (req, res) => {
        app.db('avaliacao.tb_criterio_avaliacao')
            .select('co_criterio', 'ds_criterio', 'fl_permite_observacao')
            .then(criteriosAvaliacoes => res.json(criteriosAvaliacoes))
            .catch(err => res.status(500).send(err))
    }

    return { get }
}

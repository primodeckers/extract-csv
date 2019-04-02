module.exports = app => {

    const get  = async (req, res) => { 
        app.db('avaliacao.tb_nota_criterio_avaliacao')
            .select('id_nota', 'co_criterio')
            .then(notasCriteriosAvaliacoes => res.json(notasCriteriosAvaliacoes))
            .catch(err => res.status(500).send(err))
    }

    return { get }
}

module.exports = app => {

    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)
    
    app.route('/users/:id')
        .put(app.api.user.save)

    app.route('/avaliacoes')
        .get(app.api.avaliacao.get)
    
    app.route('/criteriosAvaliacoes')
        .get(app.api.criteriosAvaliacoes.get)
        
    app.route('/notas')
        .get(app.api.notas.get)

    app.route('/notasCriteriosAvaliacoes')
        .get(app.api.notasCriteriosAvaliacoes.get)
    
        app.route('/situacoesAvaliacao')
        .get(app.api.situacoesAvaliacao.get)
}
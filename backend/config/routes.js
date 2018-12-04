const admin = require('./admin')

module.exports = app => {

    app.route('/servicos')
    //.all(app.config.passport.authenticate())
    .get(app.api.portalServicos.get)
    
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.user.save))
        .get(admin(app.api.user.get))
    
    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(admin(app.api.user.save))
        .get(admin(app.api.user.getById))
        .delete(admin(app.api.user.remove))

    app.route('/avaliacoes')
        .all(app.config.passport.authenticate())
        .get(app.api.avaliacao.get)
    
    app.route('/criteriosAvaliacoes')
        .all(app.config.passport.authenticate())
        .get(app.api.criteriosAvaliacoes.get)
        
    app.route('/notas')
        .all(app.config.passport.authenticate())
        .get(app.api.notas.get)

    app.route('/notasCriteriosAvaliacoes')
        .all(app.config.passport.authenticate())
        .get(app.api.notasCriteriosAvaliacoes.get)
    
    app.route('/situacoesAvaliacao')
        .all(app.config.passport.authenticate())
        .get(app.api.situacoesAvaliacao.get)

   
}
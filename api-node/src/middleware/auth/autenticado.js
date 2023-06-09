const { verify, decode } = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;
    const secret = process.env.SECRET;

    if (!token) {
        return res.status(401).send('Token de acesso não informado')
    }

    const [, tokenAcesso] = token.split(" ");
    
    try {
        verify(tokenAcesso, secret);
        const { id, email } = decode(tokenAcesso);
        req.usuarioID = id;
        req.usuarioEmail = email;
        return next();
    } catch (error) {
        res.status(401).send('Usuário não autorizado');
    }
}
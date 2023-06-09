const AuthService = require("../AuthService");

describe("AuthService test", () => {  
    
    it("deveria retornar uma excecao quando os dados nao forem preenchidos corretamente.", () => {
        const authService = new AuthService();
        expect(() => authService.validaDados("", "test@tes.com", "123456")).toThrow('Nome é obrigatorio');
        expect(() => authService.validaDados("test", "", "123456")).toThrow('Email é obrigatorio');
        expect(() => authService.validaDados("test", "test@tes.com", "")).toThrow('Senha é obrigatorio');
    });

    
});
import { Router } from "express";
import { criaContaService } from "../../service/userCriarConta/criarContaService.js";
import { veirificarUser } from "../../repository/userCriarConta/criarContaRepo.js";

const endConta = Router();


endConta.post('/cadastrar-se', async (req, res) => {
    try{
        const info = req.body;
        const id = await criaContaService(info)
        res.status(201).send({ID:id})
    } catch (err)
    {
        return res.status(401).json({ erro: err.message})
    }
})

endConta.get('/users/:nome', async (req, res) => {
    try{
        const nome = req.params.nome
        const resposta = veirificarUser(nome);
        res.status(201).send(resposta)
    } catch(err){
        return res.status(401).send({erro:err.message})
    }
})

export default endConta;
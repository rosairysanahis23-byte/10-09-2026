import { Router } from "express";
import { equipamentoService } from "../services/equipamentos.services.js";

export const equipamentoRouter = Router()

equipamentoRouter.get("/", async (req, res) =>{
    try{
        const equipamento = await equipamentoService.listarEquipamento()
            res.json(equipamento)
    } catch(error){
        console.error(error);
    }
})
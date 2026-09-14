import { pool } from "../database/db.js"

class EquipamentoService {
    async listarEquipamento(){
        const res = await pool.quey("SELECT * FROM equipamento")
        return res.rows
    }
}

export const equipamentoService = EquipamentoService
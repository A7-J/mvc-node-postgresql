const Student = require('../models/studentModel');

// 1. LISTAR ESTUDANTES (Buscar da tabela SQL)
exports.getAllStudents = async (req, res) => {
    try {
        // Busca todos os registros na tabela 'students'
        const students = await Student.findAll();
        
        // Renderiza a sua página passando a lista real do banco
        res.render('index', { students });
    } catch (error) {
        res.status(500).send("Erro ao buscar estudantes: " + error.message);
    }
};

// 2. CADASTRAR ESTUDANTE (Inserir na tabela SQL)
exports.createStudent = async (req, res) => {
    try {
        const { name, course } = req.body;
        
        // Insere uma nova linha na tabela. O ID é gerado automaticamente!
        await Student.create({ name, course });
        
        // Redireciona de volta para a página inicial atualizada
        res.redirect('/');
    } catch (error) {
        res.status(500).send("Erro ao salvar estudante: " + error.message);
    }
};

// 3. EXCLUIR ESTUDANTE (Deletar da tabela SQL)
exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Remove a linha que possui o ID correspondente
        await Student.destroy({
            where: { id: id }
        });
        
        // Retorna status 200 (OK) para a sua Fetch API do frontend
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send("Erro ao excluir estudante: " + error.message);
    }
};

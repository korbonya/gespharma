import Category from '../models/category.js';

export const createCategory = async (req, res) => {
    const {name} = req.body
    try{
        const category = new Category({name})
        const categoryCreated = await category.save()
        res.json(categoryCreated)
    }catch(error){
        res.status(500).json({message:error.message})
    }
    
}

export const getAllCategories = async (req, res) => {
    try{
        const categories = await Category.find()
        res.json(categories)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}


// export const createCategory = async (req, res) => {
//     const { body } = req;
//     try {
//         const category = new Category(body);
//         await category.save();
//         res.json(category);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// export const getAllCategories = async (req, res) => {
//     try {
//         const categories = await Category.find();
//         res.json(categories);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const updatedCategory = await Category.findByIdAndUpdate(id, body, { new: true });
        if (!updatedCategory) {
            return res.status(404).json({ message: "Catégorie non trouvée" });
        }
        res.json(updatedCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await Category.findByIdAndRemove(id);
        if (!deletedCategory) {
            return res.status(404).json({ message: "Catégorie non trouvée" });
        }
        res.json({ message: "Catégorie supprimée avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

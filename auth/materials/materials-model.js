const db = require("../../data/dbConfig");

async function getMaterials() {
  const materials = await db("materials");
  return materials;
}

const getById = (material_id) => {
  return db("materials").where("material_id", material_id).first();
};

async function createMaterial(material, memberId) {
  const [id] = await db("materials").insert({...material, member_id: memberId});
  return getById(id);
}

async function updateMaterial(materialId, changes) {
  return await db("materials").where("material_id", materialId).update(changes);
}

async function deleteMaterial(id) {
  return db("materials").where("material_id", id).del();
}

function findUsersMaterials(id) {
  return db("materials").where("materials.member_id", id)
}

module.exports = {
  getMaterials,
  getById,
  createMaterial,
  updateMaterial,
  deleteMaterial,
  findUsersMaterials
};

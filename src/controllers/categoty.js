import category from "../models/category";

export const creteCategory = async (req, res) => {
  try {
    const data = await category.create(req.body);
    if (!data) {
      throw new Error("failed to create category");
    }

    return res.status(200).json({
      message: "Successfully created category",
      data,
    });
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message,
    });
  }
};
export const getAllCategory = async (req, res) => {
  try {
    const data = await category.find();
    if (!data || data.length === 0) {
      throw new Error("failed to find category");
    }
    return res.status(200).json({
      message: "Successfully created category",
      data,
    });
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message,
    });
  }
};
export const getCategoryById = async (req, res) => {
  try {
    const data = await category.findById(req.params.id);
    if (!data) {
      throw new Error("failed to getDetail category");
    }
    return res.status(200).json({
      message: "Successfully created category",
      data,
    });
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message,
    });
  }
};
export const updateCategory = async (req, res) => {
  try {
    const data = await category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!data) {
      throw new Error("failed to getDetail category");
    }
    return res.status(200).json({
      message: "Successfully ",
      data,
    });
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message,
    });
  }
};
export const deleteCategory = async (req, res) => {
  try {
    const data = await category.findByIdAndDelete(req.params.id);
    if (!data) {
      throw new Error("failed to getDetail category");
    }
    return res.status(200).json({
      message: "Successfully ",
      data,
    });
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message,
    });
  }
};

import ProductCategoryCreateInterface from "../services/interfaces/ProductCategoryCreateInterface";
import { ProductCategorySchemaInterface } from "../models/interfaces/ProductCategorySchemaInterface";
import ProductCategoryUpdateInterface from "../services/interfaces/ProductCategoryUpdateInterface";
import ProductCategoryInterface from "../services/interfaces/ProductCategoryInterface";

const fromProductCategoryCreate = (productCategory: ProductCategoryCreateInterface) => {
    return {
        name: productCategory.name
    }
}

const fromProductCategoryUpdate = (productCategory: ProductCategoryUpdateInterface) => {
    return {
        name: productCategory.name
    }
}

const toProductCategory = (productCategory: ProductCategorySchemaInterface): ProductCategoryInterface => {
    return {
        id: productCategory._id,
        version: productCategory.__v,
        createdAt: productCategory.createdAt,
        updatedAt: productCategory.updatedAt,
        deletedAt: productCategory.deletedAt,
        name:  productCategory.name,
        workflowTemplate: productCategory.workflowTemplate,
        parent: productCategory.parent
    }
}


const toProductCategoryArray = (productCategories: ProductCategorySchemaInterface[]): ProductCategoryInterface[] => {
    return productCategories.map(toProductCategory);
}

export default {
    fromProductCategoryCreate,
    fromProductCategoryUpdate,
    toProductCategory,
    toProductCategoryArray
}
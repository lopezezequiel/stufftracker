import { model } from "mongoose";
import { ProductCategorySchema, ProductCategorySchemaInterface } from "./interfaces/ProductCategorySchemaInterface";

export default model<ProductCategorySchemaInterface>('ProductCategory', ProductCategorySchema);


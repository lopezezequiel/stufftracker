import { ProductTemplateSchemaInterface, ProductTemplateSchema } from "./interfaces/ProductTemplateSchemaInterface";
import { model } from "mongoose";

export default model<ProductTemplateSchemaInterface>('ProductTemplate', ProductTemplateSchema);

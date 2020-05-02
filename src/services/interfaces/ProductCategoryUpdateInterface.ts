import { ProductCategorySchemaInterface } from "../../models/interfaces/ProductCategorySchemaInterface";

//en los updates todos los campos son opcionales para dar soporte a actualizaciones parciales
export default interface ProductCategoryUpdateInterface {
    name?: ProductCategorySchemaInterface['name']
}
import { GenericSchemaInterface } from "../../models/interfaces/GenericSchemaInterface";


//todo find a better name
interface GenericInterface {
    id: GenericSchemaInterface['_id'],
    version: GenericSchemaInterface['__v'],
    createdAt: GenericSchemaInterface['createdAt'],
    updatedAt: GenericSchemaInterface['updatedAt'],
    deletedAt: GenericSchemaInterface['deletedAt']
}

export default GenericInterface;
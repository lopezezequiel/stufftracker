import { Document } from "mongoose"

export interface GenericSchemaInterface extends Document {
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
    deleted: boolean
}
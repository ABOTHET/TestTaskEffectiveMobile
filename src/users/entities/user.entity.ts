import {AutoIncrement, Column, DataType, HasMany, HasOne, Model, PrimaryKey, Table, Unique} from "sequelize-typescript";
import { InferAttributes, InferCreationAttributes } from "sequelize";
import {HistoryActions} from "../../history-actions/entities/history-actions.entity";


@Table({tableName: "users", timestamps: false})
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {

    @Column({primaryKey: true, allowNull: false, unique: true,
        type: DataType.UUID, defaultValue: DataType.UUIDV4})
    uuid: string;
    @Unique
    @Column({allowNull: false, validate: {isEmail: true}})
    email: string;
    @Column({allowNull: false})
    password: string;
    @Column({allowNull: false})
    name: string;
    @Column({allowNull: false})
    surname: string;

    //

    @HasMany(() => HistoryActions)
    historyActions: HistoryActions[];

}
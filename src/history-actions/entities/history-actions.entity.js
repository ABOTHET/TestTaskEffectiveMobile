import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../../users/entities/user.entity";

@Table({tableName: "historyActions", timestamps: false})
export class HistoryActions extends Model {

    @Column({primaryKey: true, allowNull: false, unique: true,
        type: DataType.UUID, defaultValue: DataType.UUIDV4})
    uuid;
    @ForeignKey(() => User)
    @Column({allowNull: false, type: DataType.UUID})
    userUuid;
    @Column({allowNull: false, type: DataType.STRING})
    action;
    @Column({allowNull: false, type: DataType.DATE})
    createdAt = new Date();

    //

    @BelongsTo(() => User)
    user;

}
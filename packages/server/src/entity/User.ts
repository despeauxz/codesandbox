import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@Entity("users")
@ObjectType()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Field()
    @Column("varchar", { unique: true })
    username: string;

    @Field()
    @Column("varchar", { unique: true })
    email: string

    @Column()
    password: string
}

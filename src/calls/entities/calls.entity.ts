import { Assistance } from "src/assistance/entities/assistance.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export enum Priority{
    URGENTE = "Urgente",
    ALTA = "Alta",
    MEDIA = "Média",
    BAIXA = "Baixa"
}


@Entity({name:'calls'})
export class Calls{
    @PrimaryGeneratedColumn('rowid')
    id: number

    @Column()
    name:string

    @Column()
    description: string

    @Column({type: 'simple-array'})
    equipments: string[]

    @Column({
        type:'enum',
        enum: Priority,
        default: Priority.BAIXA
    })
    priority: Priority

    @Column({nullable:true})
    photo: string

    @CreateDateColumn()
    createAt:Date

    @UpdateDateColumn()
    updateAt: Date



    @ManyToOne(()=> Assistance, assistance => assistance.calls)
    assistance: Assistance


}
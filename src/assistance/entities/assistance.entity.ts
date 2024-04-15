import { Calls } from "src/calls/entities/calls.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum Dificulty{
    JUNIOR = 'Júnior',
    PLENO = 'Pleno',
    SENIOR = 'Sênior'
}

export enum Status{
    ABERTO = 'Aberto',
    EM_ANDAMENTO = 'Em Andamento',
    FECHADO = 'Fechado'
}

@Entity()
export class Assistance{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    technicalName: string

    @Column({
        type:'enum',
        enum: Status,
        default: Status.ABERTO
    })
    status: Status

    @Column({
        type:'enum',
        enum: Dificulty,
        default: Dificulty.JUNIOR
    })
    dificulty: Dificulty

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date

    @OneToMany(() => Calls, calls => calls.assistance)
    calls: Calls[]
}


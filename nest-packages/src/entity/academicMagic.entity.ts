import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('academic_magic')
export class AcademicMagicEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column('int', { nullable: false })
  formId: number

  @Column('int', { nullable: false })
  formDataId: number

  @Column('varchar', { nullable: false, name: 'fn_1' })
  'formdata[fn_1]': string

  @Column('varchar', { default: 0, nullable: false, name: 'fn_2' })
  'formdata[fn_2]': string

  @Column('varchar', { default: 0, nullable: false, name: 'fn_3' })
  'formdata[fn_3]': string

  @Column('varchar', { default: 0, nullable: false, name: 'fn_4' })
  'formdata[fn_4]': string

  @Column('varchar', { default: '无', nullable: false, name: 'fn_5' })
  'formdata[fn_5]': string

  @Column('varchar', { default: '', nullable: false, name: 'fn_6' })
  'formdata[fn_6]': string

  @Column('varchar', { default: 0, nullable: false, name: 'gps_addr' })
  'formdata[gps_addr]': string

  @Column('varchar', { default: 0, nullable: false, name: 'gpx_xy' })
  'formdata[gps_xy]': string

  @Column('text', { nullable: true })
  cookie: string

  @CreateDateColumn()
  createTime: Date | string
}

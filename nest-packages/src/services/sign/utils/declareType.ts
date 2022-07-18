import { AcademicMagicEntity } from 'src/entity/academicMagic.entity'

export type signInfo = {
  [k in keyof AcademicMagicEntity as k extends 'formId'
    ? 'form_id'
    : k extends 'formDataId'
    ? 'formid'
    : k extends 'id' | 'createTime' | 'cookie'
    ? never
    : k]: AcademicMagicEntity[k extends 'form_id'
    ? 'formId'
    : k extends 'form_id'
    ? 'formDataId'
    : k]
}

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseResponseCode } from 'src/constant/code'
import { BaseResponse } from 'src/utils/baseResponse'
import { Repository } from 'typeorm'
import { AcademicMagicEntity } from '../../entity/academicMagic.entity'
import type { signInfo } from './utils/declareType'
import { magicSign } from './utils/signRequest'
@Injectable()
export class AcademicMagicService {
  constructor(
    @InjectRepository(AcademicMagicEntity)
    private readonly academicMagicEntity: Repository<AcademicMagicEntity>,
  ) {}

  async searchUser(userId: number): Promise<AcademicMagicEntity | null> {
    try {
      return await this.academicMagicEntity.findOne({
        where: {
          id: userId,
        },
      })
    } catch (e) {
      console.log('searchUser id: %d Error: %d', userId, e.message)
    }
  }

  async magicSign(signInformation: AcademicMagicEntity): Promise<boolean> {
    const data: signInfo = {
      form_id: 0,
      formid: 0,
      'formdata[fn_1]': '',
      'formdata[fn_2]': '',
      'formdata[fn_3]': '',
      'formdata[fn_4]': '',
      'formdata[fn_5]': '',
      'formdata[fn_6]': '',
      'formdata[gps_addr]': '',
      'formdata[gps_xy]': '',
    }
    Object.keys(signInformation).reduce((pre, cur: string) => {
      if (cur === 'formId') {
        pre['form_id'] = signInformation[cur]
      } else if (cur === 'formDataId') {
        pre['formid'] = signInformation[cur]
      } else if (/formdata/.test(cur)) {
        pre[cur] = signInformation[cur]
      }
      return pre
    }, data)

    // 请求接口 签到
    try {
      return await magicSign(signInformation.cookie, data)
    } catch (e) {
      console.log('sign error: ' + e.message)
    }
  }

  async academicMagicSign(params: {
    id: number
  }): Promise<BaseResponse<null> | boolean> {
    try {
      const academicMagicUserInfo = await this.searchUser(params.id)
      if (academicMagicUserInfo === null) {
        return new BaseResponse(BaseResponseCode.Error, '查询用户为空')
      } else {
        return await this.magicSign(academicMagicUserInfo)
      }
    } catch (e) {
      console.log('academicMagicSign', e.message)
    }
  }
}

import { Controller, Get, Query } from '@nestjs/common';
import { BaseResponse } from 'src/utils/baseResponse';
import { AcademicMagicService } from 'src/services/sign/academicMagic.service';
import { BaseResponseCode } from 'src/constant/code';
@Controller('sign')
export class AcademicMagicController {
  constructor(private readonly appService: AcademicMagicService) {}
  @Get('magicSign')
  async academicMagicSignService(
    @Query() params: { id: number },
  ): Promise<BaseResponse<string>> {
    try {
      console.log(params);
      if (!params.id) throw new Error('id is null');
      console.log('params', params);
      const signStatus = await this.appService.academicMagicSign(params);
      console.log('签到状态:', signStatus);
      if (signStatus instanceof BaseResponse) {
        return signStatus;
      }
      return new BaseResponse(BaseResponseCode.SUCCESS, '签到成功');
    } catch (e) {
      console.log('error', e);
      return new BaseResponse(BaseResponseCode.Error, 'error', e.message);
    }
  }
}

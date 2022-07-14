/**
 * @author heart
 * @description 基本返回类
 * @Date 2022-05-16
 */
import { BaseResponseCode } from '../constant/code';
// 基本数据类型返回类
export class BaseResponse<T = null> {
  private readonly code: BaseResponseCode;
  private readonly message: string;
  private readonly data: T;
  constructor(code: BaseResponseCode, message?: string, data?: T) {
    this.code = code;
    this.message = message;
    this.data = data;
  }
}

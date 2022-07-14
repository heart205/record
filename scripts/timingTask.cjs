/**
 * @author heart
 * @description 定时任务请求
 * @Date 2022-07-14
 */

var http = require('http');
var { requestTimingTask, cancelTimingTask } = require('../utils/taskLoop.cjs');
var { readEnvFile } = require('../utils/readEnvFile.cjs');
var { isProduction } = require('../constant/index');
// 魔方签到任务： 一个星期一次 每天一次
const oneDayTimer = 1000 * 60 * 24;
function academicMagicSign() {
  const date = new Date();
  if (date.getDay() !== 1) {
    //周一打卡签到
    console.log(`不在打卡日期范围内,今天是周${date.getDay()}日`);
    return;
  }
  const envObject = readEnvFile(
    process.cwd() + `/.${isProduction ? 'production' : 'development'}.env`,
  );

  console.log(`${envObject.baseUrl}`);
  const req = http.request(`${envObject}/sign/magicSign?id=1`, (res) => {
    let data = '';

    res.on('data', function (chunk) {
      data += chunk;
    });

    res.on('end', function () {
      console.log('魔方签到请求结束:', data.toString());
    });
  });

  req.on('error', (e) => {
    console.error(`魔方签到请求错误: ${e.message}`);
  });

  req.end();
}

function addAcademicMagicSign() {
  requestTimingTask(academicMagicSign, oneDayTimer);
}

function cancelAcademicMagicSign() {
  cancelTimingTask(academicMagicSign);
}

module.exports = {
  addAcademicMagicSign,
  cancelAcademicMagicSign,
};

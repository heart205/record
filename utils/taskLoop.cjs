/**
 * @author heart
 * @description 任务接口调度轮讯
 * @Date 2022-07-14
 */

var { logger } = require('./logger.cjs')
const isHaveMap = function () {
  return typeof Map !== 'undefined'
}
// 定时任务请求
let taskList

function addTimingTask(callback, timer) {
  logger.info('添加定时任务', taskList)
  const timeoutFlag = setInterval(() => {
    callback instanceof Function && callback()
    cancelTimingTask()
  }, timer)
  isHaveMap()
    ? taskList.set(callback, timeoutFlag)
    : taskList.push({ callback, timer: timeoutFlag })
}

function cancelTimingTask(callback) {
  logger.info('取消定时任务')
  if (isHaveMap()) {
    clearInterval(taskList.get(callback))
    taskList.delete(callback)
    return
  }
  const index = taskList.findIndex((val) => val.callback === callback)
  if (index > -1) {
    clearInterval(taskList[index].timer)
    taskList.splice(index, 1)
  }
}

function requestTimingTask(callback, timer, config) {
  if (!taskList) {
    taskList = isHaveMap() ? new Map() : []
  }
  // 判断callback是否存在在目录中 存在从config中判断是否需要覆盖
  if (taskList.has(callback)) {
    if (config.overrideTimeTask) {
      cancelTimingTask()
      addTimingTask(callback, timer)
    }
  } else {
    addTimingTask(callback, timer)
  }
}

module.exports = {
  requestTimingTask,
  cancelTimingTask,
}

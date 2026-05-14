import dayjs from 'dayjs';

/**
 * @desc find the intersection of source array on target array
 * @param {Array} target - The target array
 * @returns {Array}
 * <Greeting name="sshuzhong@outlook.com" />
 */
Array.prototype.$intersects = function (target) {
  const list = Object(this);
  if (Array.isArray(list) && Array.isArray(target)) {
    const result = [];
    list.forEach(i => {
      if (target.includes(i)) {
        result.push(i);
      }
    });
    return result;
  }
  return [];
};
/**
 * @desc find the complement of the source array on the target array
 * @param {Array} target - The target array
 * @returns {Array}
 * <Greeting name="sshuzhong@outlook.com" />
 */
Array.prototype.$supplies = function (target) {
  const list = Object(this);
  if (Array.isArray(list) && Array.isArray(target)) {
    const result = [];
    target.forEach(i => {
      if (!list.includes(i)) {
        result.push(i);
      }
    });
    return result;
  }
  return [];
};
/**
 * @desc find the minus of the source array on the target array
 * @param {Array} target - The target array
 * @returns {Array}
 * <Greeting name="sshuzhong@outlook.com" />
 */
Array.prototype.$minus = function (target) {
  const list = Object(this);
  if (Array.isArray(list) && Array.isArray(target)) {
    const result = [];
    list.forEach(i => {
      if (!target.includes(i)) {
        result.push(i);
      }
    });
    return result;
  }
  return [];
};
/**
 * @desc
 * @param {String} target - The target Date
 * @returns {Boolean}
 * <Greeting name="sshuzhong@outlook.com" />
 */
String.prototype.$isLater = function(target) {
  const current = dayjs(this);
  const targetDate = dayjs(target);
  if (!current.isValid() || !targetDate.isValid()) {
    return false;
  }
  return current.isAfter(targetDate);
};
/**
 * @desc
 * @param {String} target - The target Date
 * @returns {Boolean}
 * <Greeting name="sshuzhong@outlook.com" />
 */
String.prototype.$isBefore = function(target) {
  const current = dayjs(this);
  const targetDate = dayjs(target);
  if (!current.isValid() || !targetDate.isValid()) {
    return false;
  }
  return current.isBefore(targetDate);
};
/**
 * @desc
 * @param {String} target1 - The target Date
 * @param {String} target2 - The target Date
 * @returns {Boolean}
 * <Greeting name="sshuzhong@outlook.com" />
 */
String.prototype.$isBetween = function(target1, target2) {
  const current = dayjs(this);
  const start = dayjs(target1);
  const end = dayjs(target2);
  if (!current.isValid() || !start.isValid() || !end.isValid()) {
    return false;
  }
  return current.isAfter(start) && current.isBefore(end);
};
/**
 * @desc
 * @param {String} goal
 * @returns {String}
 * <Greeting name="sshuzhong@outlook.com" />
 */
String.prototype.$format = function(goal = 'YYYY/MM/DD HH:mm:ss') {
  try {
    if (/^\d+(\.\d+)?$/.test(this)) {
      return dayjs(Number(this)).format(goal);
    }
    return this;
  } catch (e) {
    return this;
  }
};

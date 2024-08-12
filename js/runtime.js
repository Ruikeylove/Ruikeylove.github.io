var now = new Date(); // 获取当前时间
var start = new Date("08/10/2024 00:00:00"); // 设置起始时间为2024年8月10日午夜

function formatTime(value) {
  // 格式化时间，确保至少有两位数字
  return value < 10 ? '0' + value : value;
}

function calculateRuntime() {
  var runtime = now - start; // 计算从起始时间到当前时间的毫秒数
  var days = Math.floor(runtime / (1000 * 60 * 60 * 24)); // 计算总天数
  var hours = Math.floor((runtime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // 计算剩余小时数
  var minutes = Math.floor((runtime % (1000 * 60 * 60)) / (1000 * 60)); // 计算剩余分钟数
  var seconds = Math.floor((runtime % (1000 * 60)) / 1000); // 计算剩余秒数

  // 格式化时间输出
  var formattedDays = formatTime(days);
  var formattedHours = formatTime(hours);
  var formattedMinutes = formatTime(minutes);
  var formattedSeconds = formatTime(seconds);

  // 输出格式化后的时间
  return `已经运行（${formattedDays}）天（${formattedHours}）时（${formattedMinutes}）分（${formattedSeconds}）秒`;
}

console.log(calculateRuntime()); // 打印运行时间
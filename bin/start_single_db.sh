#sh

# 前提: 已经安装mongo服务

if [ ! -d "./mongo" ];then
mkdir ./mongo
else
echo "数据库文件夹已存在"
fi

if [ ! -d "./mongo/db" ];then
mkdir ./mongo/db
else
echo "已创建db文件夹"
fi

# 是否创建log , data 文件夹
if [ ! -d "./mongo/db/log" ];then
mkdir ./mongo/db/log
else
echo "已创建log文件"
fi
if [ ! -d "./mongo/db/data" ];then
mkdir ./mongo/db/data
else
echo "已创建data文件夹"
fi

# 启动服务
port="27017"
if [ ! -n "$1" ] ;then
    echo "默认启动端口为27017, 你可以使用sh的第一个参数指定"
else
    port="$1"
fi
sudo mongod --dbpath ./mongo/db/data --logpath ./mongo/db/log/log.log --port 27017
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件 s
npm build

cd ./dist
git init
git add -A
git commit -m 'chore'
git remote add origin git@github.com:xiaoqingb/travel-platfrom.git
git push -u origin master -f

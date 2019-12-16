#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm build

cd ./dist

git add -A
git commit -m 'chore'
git push -f git@github.com:xiaoqingb/travel-platform.git

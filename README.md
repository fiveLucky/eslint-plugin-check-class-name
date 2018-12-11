# eslint-plugin-check-class-name
检查class名称

# 使用

```
{
  "plugins": [
    "eslint-plugin-check-class-name"
  ],
  "rules": {
    "check-class-name/check": [
      "warn",
      {
        "target": "$folder", 
        "extends": "PView",
        "include": "/src/view",
        "message": "PView 名称与文件夹名称不一致"
      }
    ]
  }
}
```
## 配置参数
#### target
  - < String > 指定的 class 名称  
    >eg: target: "Table"
  - < String of RegExp > 匹配指定规则的名称
    >eg: target: "/[A-Za-z]/" （内部使用RegExp.test()方法）
  - < String is $folder > 使用class所在文件folder名称进行检查
    >eg: target: "$folder"
#### extends
  - < String > 指定supperClass名称， 默认 undefined
    >eg: extends: "Component"
#### include
  - < String > 指定匹配文件路径，默认'/'，匹配所有文件
    >eg: include: "/src/view/"
#### message
  - < String > 指定提示信息，默认 "class 名称有误"
    >eg: message: " class 名称与文件夹名称不一致"

'use strict';

module.exports = {
  rules: {
        // 强制数组方法的回调函数中有 return 语句
        // http://eslint.cn/docs/rules/array-callback-return
        "array-callback-return": ["error"],

        // 需要约束 for-in
        // http://eslint.cn/docs/rules/guard-for-in
        "guard-for-in": ["error"],

        // 要求遵循大括号约定
        // http://eslint.cn/docs/rules/curly
        "curly": ["error"],

        // 要求 Switch 语句中有 Default 分支
        // http://eslint.cn/docs/rules/default-case
        "default-case": ["error"],

        // 要求使用 === 和 !== 选项 "smart" 除了以下这些情况外，强制使用 === 和 !==：

        // 比较两个字面量的值
        // 比较 typeof 的值
        // 与 null 进行比较
        // http://eslint.cn/docs/rules/eqeqeq
        "eqeqeq": ["error", "smart"],

        // 禁止出现空函数
        // http://eslint.cn/docs/rules/no-empty-function
        "no-empty-function": ["error"],

        // 禁止与 null 进行比较
        // http://eslint.cn/docs/rules/no-eq-null
        "no-eq-null": ["error"],

        // 禁止对原生对象或只读的全局对象进行赋值
        // http://eslint.cn/docs/rules/no-global-assign
        "no-global-assign": ["error"],

        // 禁止在全局范围使用变量和函数声明
        // http://eslint.cn/docs/rules/no-implicit-globals
        "no-implicit-globals": ["error"],

        // 禁止 this 关键字在类或类对象之外出现
        // http://eslint.cn/docs/rules/no-invalid-this
        "no-invalid-this": ["error"],

        // 禁用迭代器,__iterator__ 属性曾是 SpiderMonkey 对 JavaScript 的扩展，被用来创建自定义迭代器，兼容JavaScript的 for in 和 for each。然而，这个属性现在废弃了，所以不应再使用它。
        // http://eslint.cn/docs/rules/no-iterator
        "no-iterator": ["error"],

        // 禁止 case 语句落空
        // http://eslint.cn/docs/rules/no-fallthrough
        "no-fallthrough": ["error"],

        // 禁止循环中存在函数
        //http://eslint.cn/docs/rules/no-loop-func
        "no-loop-func": ["error"],

        // 禁用 eval()
        // http://eslint.cn/docs/rules/no-eval
        "no-eval": ["error"],

        // 禁止扩展原生对象
        // http://eslint.cn/docs/rules/no-extend-native
        "no-extend-native": ["error"],

        // error; 浏览器端不允许定义全局变量和全局函数，可以通过挂载到window对象上和使用IIFE表达式
        // http://eslint.cn/docs/rules/no-implicit-globals
        'no-implicit-globals': ["error"],

        // error; 禁止使用八进制的转义符比如 "Copyright \251"
        // http://eslint.cn/docs/rules/no-octal-escape
        'no-octal-escape': ["error"],

        // error; 禁止直接使用__proto__属性，可以使用getPrototypeOf替代
        // http://eslint.cn/docs/rules/no-proto
        'no-proto': ["error"],

        // 禁止使用void操作符
        // http://eslint.cn/docs/rules/no-void
        "no-void": ["error"],

        // 禁用 with 语句
        // http://eslint.cn/docs/rules/no-with
        "no-warning-comments": ["error"],

        // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动 
        // http://eslint.cn/docs/rules/for-direction
        "for-direction": ["error"],

        // 禁止使用不带 await 表达式的 async 函数
        // http://eslint.cn/docs/rules/require-await
        "require-await": ["error"],

        /** 变量相关 **/
        // error; 禁止label名称和var相同
        // http://eslint.cn/docs/rules/no-label-var
        'no-label-var': ["error"],


        // error; 禁止将undefined当成标志符
        // http://eslint.cn/docs/rules/no-undefined
        'no-undefined': ["error"],

        // error; 禁止使用未定义的变量, typeof 后面的变量除外
        // http://eslint.cn/docs/rules/no-undef
        'no-undef': [
            "error",
            {
                typeof: false
            }
        ],

        // error; 变量使用之前必须进行定义
        // http://eslint.cn/docs/rules/no-use-before-define
        'no-use-before-define': ["error"],

        /** 代码风格 **/
        // error; 默认不允许尾随逗号, ie8及以下浏览器会报错
        // http://eslint.cn/docs/rules/comma-dangle
        'comma-dangle': ["error"],

        // error; 一个缩进必须用四个空格替代, switch语句里面的case 2个空格
        // http://eslint.cn/docs/rules/indent
        'indent': [
            "error",
            4
        ],

        // error; 代码块嵌套的深度禁止超过 5 层
        // http://eslint.cn/docs/rules/max-depth
        'max-depth': [
            "error",
            5
        ],

        // error; 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
        // http://eslint.cn/docs/rules/max-nested-callbacks
        'max-nested-callbacks': [
            'error',
            3
        ],

        // error; 函数的参数禁止超过 10 个
        // http://eslint.cn/docs/rules/max-params
        'max-params': ["error", 10],
    
        // error; new 后面类必须带上括号
        // http://eslint.cn/docs/rules/new-parens
        'new-parens': ["error"],

        // error; 禁止混用空格和缩进
        // http://eslint.cn/docs/rules/no-mixed-spaces-and-tabs
        'no-mixed-spaces-and-tabs': ["error"],

        // error; 禁止属性前有空格，比如 foo. bar()
        // http://eslint.cn/docs/rules/no-whitespace-before-property
        'no-whitespace-before-property': ["error"],

        /** es6语法相关 **/
        // error; 禁止import重复模块
        // http://eslint.cn/docs/rules/no-duplicate-imports
        'no-duplicate-imports': ["error"],

        // error; 模板字符串内的首尾禁止有空格，比如${test}不要写成${ test }
        // http://eslint.cn/docs/rules/template-curly-spacing
        'template-curly-spacing': ["error", 'never']
  }
};

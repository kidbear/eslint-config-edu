'use strict';

module.exports = {
  rules: {
        /**
         * =================== error 部分 ==================
         **/

        // 强制数组方法的回调函数中有 return 语句
        // http://eslint.cn/docs/rules/array-callback-return
        'array-callback-return': ['error'],

        // 需要约束 for-in
        // http://eslint.cn/docs/rules/guard-for-in
        'guard-for-in': ['error'],

        // 要求遵循大括号约定
        // http://eslint.cn/docs/rules/curly
        'curly': ['error'],

        // 要求 Switch 语句中有 Default 分支
        // http://eslint.cn/docs/rules/default-case
        'default-case': ['error'],

        // 要求使用 === 和 !== 选项 'smart' 除了以下这些情况外，强制使用 === 和 !==：

        // 比较两个字面量的值
        // 比较 typeof 的值
        // 与 null 进行比较
        // http://eslint.cn/docs/rules/eqeqeq
        'eqeqeq': ['error', 'smart'],

        // 禁止出现空函数
        // http://eslint.cn/docs/rules/no-empty-function
        'no-empty-function': ['error'],

        // 禁止与 null 进行比较
        // http://eslint.cn/docs/rules/no-eq-null
        'no-eq-null': ['error'],

        // 禁止对原生对象或只读的全局对象进行赋值
        // http://eslint.cn/docs/rules/no-global-assign
        'no-global-assign': ['error'],

        // 禁止在全局范围使用变量和函数声明
        // http://eslint.cn/docs/rules/no-implicit-globals
        'no-implicit-globals': ['error'],

        // 禁止 this 关键字在类或类对象之外出现
        // http://eslint.cn/docs/rules/no-invalid-this
        'no-invalid-this': ['error'],

        // 禁用迭代器,__iterator__ 属性曾是 SpiderMonkey 对 JavaScript 的扩展，被用来创建自定义迭代器，兼容JavaScript的 for in 和 for each。然而，这个属性现在废弃了，所以不应再使用它。
        // http://eslint.cn/docs/rules/no-iterator
        'no-iterator': ['error'],

        // 禁止 case 语句落空
        // http://eslint.cn/docs/rules/no-fallthrough
        'no-fallthrough': ['error'],

        // 禁止循环中存在函数
        //http://eslint.cn/docs/rules/no-loop-func
        'no-loop-func': ['error'],

        // 禁用 eval()
        // http://eslint.cn/docs/rules/no-eval
        'no-eval': ['error'],

        // 禁止扩展原生对象
        // http://eslint.cn/docs/rules/no-extend-native
        'no-extend-native': ['error'],

        // error; 浏览器端不允许定义全局变量和全局函数，可以通过挂载到window对象上和使用IIFE表达式
        // http://eslint.cn/docs/rules/no-implicit-globals
        'no-implicit-globals': ['error'],

        // error; 禁止使用八进制的转义符比如 'Copyright \251'
        // http://eslint.cn/docs/rules/no-octal-escape
        'no-octal-escape': ['error'],

        // error; 禁止直接使用__proto__属性，可以使用getPrototypeOf替代
        // http://eslint.cn/docs/rules/no-proto
        'no-proto': ['error'],

        // 禁止使用void操作符
        // http://eslint.cn/docs/rules/no-void
        'no-void': ['error'],

        // 禁用 with 语句
        // http://eslint.cn/docs/rules/no-with
        'no-warning-comments': ['error'],

        // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动 
        // http://eslint.cn/docs/rules/for-direction
        'for-direction': ['error'],

        // 禁止使用不带 await 表达式的 async 函数
        // http://eslint.cn/docs/rules/require-await
        'require-await': ['error'],

        /** 变量相关 **/
        // error; 禁止label名称和var相同
        // http://eslint.cn/docs/rules/no-label-var
        'no-label-var': ['error'],


        // error; 禁止将undefined当成标志符
        // http://eslint.cn/docs/rules/no-undefined
        'no-undefined': ['error'],

        // error; 禁止使用未定义的变量, typeof 后面的变量除外
        // http://eslint.cn/docs/rules/no-undef
        'no-undef': [
            'error',
            {
                typeof: false
            }
        ],

        // error; 变量使用之前必须进行定义
        // http://eslint.cn/docs/rules/no-use-before-define
        'no-use-before-define': ['error'],

        /** 代码风格 **/
        // error; 默认不允许尾随逗号, ie8及以下浏览器会报错
        // http://eslint.cn/docs/rules/comma-dangle
        'comma-dangle': ['error'],

        // error; 一个缩进必须用四个空格替代, switch语句里面的case 2个空格
        // http://eslint.cn/docs/rules/indent
        'indent': [
            'error',
            4
        ],

        // error; 代码块嵌套的深度禁止超过 5 层
        // http://eslint.cn/docs/rules/max-depth
        'max-depth': [
            'error',
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
        'max-params': ['error', 10],
    
        // error; new 后面类必须带上括号
        // http://eslint.cn/docs/rules/new-parens
        'new-parens': ['error'],

        // error; 禁止混用空格和缩进
        // http://eslint.cn/docs/rules/no-mixed-spaces-and-tabs
        'no-mixed-spaces-and-tabs': ['error'],

        // error; 禁止属性前有空格，比如 foo. bar()
        // http://eslint.cn/docs/rules/no-whitespace-before-property
        'no-whitespace-before-property': ['error'],

        /** es6语法相关 **/
        // error; 禁止import重复模块
        // http://eslint.cn/docs/rules/no-duplicate-imports
        'no-duplicate-imports': ['error'],

        // error; 模板字符串内的首尾禁止有空格，比如${test}不要写成${ test }
        // http://eslint.cn/docs/rules/template-curly-spacing
        'template-curly-spacing': ['error', 'never'],


        /**
         * =================== warn 部分 ==================
         **/

         // 把 var 语句看作是在块级作用域范围之内
        // http://eslint.cn/docs/rules/block-scoped-var
        'block-scoped-var': ['warn'],

        // 限制圈复杂度，圈复杂度数量上表现为覆盖所有代码的独立现行路径条数。如果你不能为你的代码确定一个合适的圈复杂度阈值，最好禁用此规则。
        // http://eslint.cn/docs/rules/complexity
        'complexity': ['warn', 2],

        // 要求使用一致的 return 语句
        // http://eslint.cn/docs/rules/consistent-return
        'consistent-return': ['warn'],

        // 强制在点号之前或之后换行
        // http://eslint.cn/docs/rules/dot-location
        'dot-location': ['warn', 'property'],

        // 禁用 Alert
        // http://eslint.cn/docs/rules/no-alert
        'no-alert': ['warn'],

        // 禁用 caller 或 callee
        // http://eslint.cn/docs/rules/no-caller
        'no-caller': ['warn'],

        // 禁止在 case 或 default 子句中出现词法声明,该规则禁止词法声明 (let、const、function 和 class) 出现在 case或default 子句中。原因是，词法声明在整个 switch 语句块中是可见的，但是它只有在运行到它定义的 case 语句时，才会进行初始化操作。为了保证词法声明语句只在当前 case 语句中有效，将你子句包裹在块中。
        // http://eslint.cn/docs/rules/no-case-declarations
        'no-case-declarations': ['warn'],

        // 禁止在 else 前有 return
        // http://eslint.cn/docs/rules/no-else-return
        'no-else-return': ['warn'],

        // 禁止不必要的函数绑定
        // http://eslint.cn/docs/rules/no-extra-bind
        'no-extra-bind': ['warn'],

        // 禁止浮点小数
        // http://eslint.cn/docs/rules/no-floating-decimal
        'no-floating-decimal': ['warn'],
        // 禁用不必要的嵌套块
        // http://eslint.cn/docs/rules/no-lone-blocks
        'no-lone-blocks': ['warn'],

        // 禁止使用魔术数字
        // http://eslint.cn/docs/rules/no-magic-numbers
        'no-magic-numbers': ['warn'],

        // 禁止多行字符串
        // http://eslint.cn/docs/rules/no-multi-str
        'no-multi-str': ['warn'],

        // 禁用Function构造函数
        // http://eslint.cn/docs/rules/no-new-func
        'no-new-func': ['warn'],

        // 禁止对函数参数再赋值
        // http://eslint.cn/docs/rules/no-param-reassign
        'no-param-reassign': ['warn'],

        // 禁止重新声明变量
        // http://eslint.cn/docs/rules/no-redeclare
        'no-redeclare': ['warn'],

        // 禁止在返回语句中赋值
        // http://eslint.cn/docs/rules/no-return-assign
        'no-return-assign': ['warn'],

        // 禁止自身赋值
        // http://eslint.cn/docs/rules/no-self-assign
        'no-self-assign': ['warn'],

        // 禁止自身比较
        // http://eslint.cn/docs/rules/no-self-compare
        'no-self-compare': ['warn'],

        // 不允许使用逗号操作符
        // http://eslint.cn/docs/rules/no-sequences 
        'no-sequences': ['warn'],

        // 禁用一成不变的循环条件
        // http://eslint.cn/docs/rules/no-unmodified-loop-condition
        'no-unmodified-loop-condition': ['warn'],

        // 禁止未使用过的表达式
        // http://eslint.cn/docs/rules/no-unused-expressions
        'no-unused-expressions': ['warn'],

        // 禁用不必要的 .call() 和 .apply()
        // http://eslint.cn/docs/rules/no-useless-call
        'no-useless-call': ['warn'],

        // 禁止没有必要的字符拼接
        // http://eslint.cn/docs/rules/no-useless-concat
        'no-useless-concat': ['warn'],

        // 禁用不必要的转义
        // http://eslint.cn/docs/rules/no-useless-escape
        'no-useless-escape': ['warn'],

        // 禁止多余的 return 语句
        // http://eslint.cn/docs/rules/no-useless-return
        'no-useless-return': ['warn'],

        // 要求使用 Error 对象作为 Promise 拒绝的原因
        // http://eslint.cn/docs/rules/prefer-promise-reject-errors
        'prefer-promise-reject-errors': ['warn'],

        // warn; 禁止throw一个字面量，比如 throw 2, throw 'error';
        // http://eslint.cn/docs/rules/no-throw-literal
        'no-throw-literal': ['warn'],

        // 需要把立即执行的函数包裹起来
        // http://eslint.cn/docs/rules/wrap-iife
        'wrap-iife': ['warn', 'inside']
        },

        /** 代码风格 **/
        // warn; 单行最多允许80个字符, 对包含url的行不进行此限制
        // http://eslint.cn/docs/rules/max-len
        'max-len': ['warn', {
              code: 80,
              tabWidth: 2,
              ignoreUrls: true
        }],
        // warn; 大括号内的首尾必须有换行
        // http://eslint.cn/docs/rules/object-curly-newline
        'object-curly-newline': [
                'warn',
                {
                    multiline: true,
                    consistent: true
                }
        ],

        // warn; 结尾必须有分号
        // http://eslint.cn/docs/rules/semi
        'semi': ['warn'],

        // warn; 分号必须写在行尾，禁止在行首出现
        'semi-style': ['warn', 'last']

        /**
         * =================== off 部分 ==================
         **/

  }
}

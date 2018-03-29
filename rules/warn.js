module.exports = {
  rules: {
        // 把 var 语句看作是在块级作用域范围之内
        // http://eslint.cn/docs/rules/block-scoped-var
        "block-scoped-var": ["warn"],

        // 限制圈复杂度，圈复杂度数量上表现为覆盖所有代码的独立现行路径条数。如果你不能为你的代码确定一个合适的圈复杂度阈值，最好禁用此规则。
        // http://eslint.cn/docs/rules/complexity
        "complexity": ["warn", 2],

        // 要求使用一致的 return 语句
        // http://eslint.cn/docs/rules/consistent-return
        "consistent-return": ["warn"],

        // 强制在点号之前或之后换行
        // http://eslint.cn/docs/rules/dot-location
        "dot-location": ["warn", "property"],

        // 禁用 Alert
        // http://eslint.cn/docs/rules/no-alert
        "no-alert": ["warn"],

        // 禁用 caller 或 callee
        // http://eslint.cn/docs/rules/no-caller
        "no-caller": ["warn"],

        // 禁止在 case 或 default 子句中出现词法声明,该规则禁止词法声明 (let、const、function 和 class) 出现在 case或default 子句中。原因是，词法声明在整个 switch 语句块中是可见的，但是它只有在运行到它定义的 case 语句时，才会进行初始化操作。为了保证词法声明语句只在当前 case 语句中有效，将你子句包裹在块中。
        // http://eslint.cn/docs/rules/no-case-declarations
        "no-case-declarations": ["warn"],

        // 禁止在 else 前有 return
        // http://eslint.cn/docs/rules/no-else-return
        "no-else-return": ["warn"],

        // 禁止不必要的函数绑定
        // http://eslint.cn/docs/rules/no-extra-bind
        "no-extra-bind": ["warn"],

        // 禁止浮点小数
        // http://eslint.cn/docs/rules/no-floating-decimal
        "no-floating-decimal": ["warn"],
        // 禁用不必要的嵌套块
        // http://eslint.cn/docs/rules/no-lone-blocks
        "no-lone-blocks": ["warn"],

        // 禁止使用魔术数字
        // http://eslint.cn/docs/rules/no-magic-numbers
        "no-magic-numbers": ["warn"],

        // 禁止多行字符串
        // http://eslint.cn/docs/rules/no-multi-str
        "no-multi-str": ["warn"],

        // 禁用Function构造函数
        // http://eslint.cn/docs/rules/no-new-func
        "no-new-func": ["warn"],

        // 禁止对函数参数再赋值
        // http://eslint.cn/docs/rules/no-param-reassign
        "no-param-reassign": ["warn"],

        // 禁止重新声明变量
        // http://eslint.cn/docs/rules/no-redeclare
        "no-redeclare": ["warn"],

        // 禁止在返回语句中赋值
        // http://eslint.cn/docs/rules/no-return-assign
        "no-return-assign": ["warn"],

        // 禁止自身赋值
        // http://eslint.cn/docs/rules/no-self-assign
        "no-self-assign": ["warn"],

        // 禁止自身比较
        // http://eslint.cn/docs/rules/no-self-compare
        "no-self-compare": ["warn"],

        // 不允许使用逗号操作符
        // http://eslint.cn/docs/rules/no-sequences 
        "no-sequences": ["warn"],

        // 禁用一成不变的循环条件
        // http://eslint.cn/docs/rules/no-unmodified-loop-condition
        "no-unmodified-loop-condition": ["warn"],

        // 禁止未使用过的表达式
        // http://eslint.cn/docs/rules/no-unused-expressions
        "no-unused-expressions": ["warn"],

        // 禁用不必要的 .call() 和 .apply()
        // http://eslint.cn/docs/rules/no-useless-call
        "no-useless-call": ["warn"],

        // 禁止没有必要的字符拼接
        // http://eslint.cn/docs/rules/no-useless-concat
        "no-useless-concat": ["warn"],

        // 禁用不必要的转义
        // http://eslint.cn/docs/rules/no-useless-escape
        "no-useless-escape": ["warn"],

        // 禁止多余的 return 语句
        // http://eslint.cn/docs/rules/no-useless-return
        "no-useless-return": ["warn"],

        // 要求使用 Error 对象作为 Promise 拒绝的原因
        // http://eslint.cn/docs/rules/prefer-promise-reject-errors
        "prefer-promise-reject-errors": ["warn"],

        // warn; 禁止throw一个字面量，比如 throw 2, throw "error";
        // http://eslint.cn/docs/rules/no-throw-literal
        'no-throw-literal': ["warn"],

        // 需要把立即执行的函数包裹起来
        // http://eslint.cn/docs/rules/wrap-iife
        "wrap-iife": ["warn", "inside"]
        },

        /** 代码风格 **/
        // warn; 单行最多允许80个字符, 对包含url的行不进行此限制
        // http://eslint.cn/docs/rules/max-len
        'max-len': ["warn", {
              code: 80,
              tabWidth: 2,
              ignoreUrls: true
        }],
        // warn; 大括号内的首尾必须有换行
        // http://eslint.cn/docs/rules/object-curly-newline
        'object-curly-newline': [
                "warn",
                {
                    multiline: true,
                    consistent: true
                }
        ],

        // warn; 结尾必须有分号
        // http://eslint.cn/docs/rules/semi
        'semi': ["warn"],

        // warn; 分号必须写在行尾，禁止在行首出现
        'semi-style': ["warn", 'last'],
}

module.exports = {
  meta: {
    docs: {
      description: '检查class名称',
      category: "common errors",
      recommended: true,
    }
  },
  create(context) {
    const option = context.options[0] || {};
    const target = option.target || '';
    const extendsFrom = option.extends || '';
    const include = option.include || '/';
    const message = option.message || "class 名称有误";


    return {
      "ClassDeclaration": function a(node) {
        const filePath = context.getFilename() || '';
        const absolutePath = filePath.split(include)[1] || '';
        const folderName = absolutePath.split('/')[1];
        const className = node.id && node.id.name || '';
        const includeResult = filePath.indexOf(include) > -1;
        let targetResult = className === target;
        if (/^\/*.+\/$/.test(target)) {
          targetResult = new RegExp(target.replace(/\//g, '')).test(className);
        }
        if (target === '$folder') {
          targetResult = className.indexOf(folderName) === 0;
        }
        const extendsResult = node.superClass && node.superClass.name === extendsFrom;

        if (includeResult && !targetResult && extendsResult) {
          context.report({ node, message: message + ', class name is \'' + className + '\'.' })
        }
      }
    }
  }
}
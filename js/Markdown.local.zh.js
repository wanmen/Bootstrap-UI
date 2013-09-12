// Usage:
//
// var editor = new Markdown.Editor(converter, null, {strings: Markdown.local.zh});

(function () {
  Markdown.local = Markdown.local || {};
  Markdown.local.zh = {
    bold: "粗体 <strong> Ctrl+B",
    boldexample: "粗体文本",

    italic: "斜体 <em> Ctrl+I",
    italicexample: "斜体文本",

    link: "超链接 <a> Ctrl+L",
    linkdescription: "插入超链接",
    linkdialog: "<h4>插入超链接</h4><p>http://example.com/ \"可选的标题\"</p>",

    quote: "引用 <blockquote> Ctrl+Q",
    quoteexample: "引用",

    code: "代码 <pre><code> Ctrl+K",
    codeexample: "在此插入代码",

    image: "图片 <img> Ctrl+G",
    imagedescription: "插入图片",
    imagedialog: "<h4>插入图片</h4><p>http://example.com/images/diagram.jpg \"可选的标题\"</p>",

    olist: "有序列表 <ol> Ctrl+O",
    ulist: "无序列表 <ul> Ctrl+U",
    litem: "列表项",

    heading: "标题 <h1>/<h2> Ctrl+H",
    headingexample: "标题",

    hr: "水平线 <hr> Ctrl+R",

    undo: "撤销 - Ctrl+Z",
    redo: "恢复 - Ctrl+Y",
    redomac: "恢复 - Ctrl+Shift+Z",

    help: "Markdown语法说明"
  };

})();

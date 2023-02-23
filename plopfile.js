module.exports = (plop) => {
  //COMPONENTS
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
      {
        type: "list",
        name: "parts",
        message: "What parts will you have?",
        choices: [
          {
            name: "header col-one col-two",
            value: ["header", "col-one", "col-two"],
          },
        ],
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/Component/Component.js.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.test.js",
        templateFile: "templates/Component/Component.test.js.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.ts",
        templateFile: "templates/Index/PascalCaseWithTool.js.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/styles.ts",
        templateFile: "templates/Component/ComponentStyles.js.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/tool.js",
        templateFile: "templates/Component/ComponentTool.js.hbs",
      },
    ],
  });
  //PAGES
  plop.setGenerator("page", {
    description: "Create a page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/Page/Page.js.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.test.js",
        templateFile: "templates/Page/Page.test.js.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/index.ts",
        templateFile: "templates/Index/PascalCase.js.hbs",
      },
    ],
  });
  //VIEWS
  plop.setGenerator("view", {
    description: "Create a view",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your view name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/views/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/View/View.js.hbs",
      },
      {
        type: "add",
        path: "src/views/{{pascalCase name}}/{{pascalCase name}}.test.js",
        templateFile: "templates/View/View.test.js.hbs",
      },
      {
        type: "add",
        path: "src/views/{{pascalCase name}}/index.ts",
        templateFile: "templates/Index/PascalCase.js.hbs",
      },
    ],
  });
  //HOOKS
  plop.setGenerator("hook", {
    description: "Create a hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your hook name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/hooks/{{camelCase name}}/{{camelCase name}}.tsx",
        templateFile: "templates/Hook/Hook.js.hbs",
      },
      {
        type: "add",
        path: "src/hooks/{{camelCase name}}/{{camelCase name}}.test.js",
        templateFile: "templates/Hook/Hook.test.js.hbs",
      },
      {
        type: "add",
        path: "src/hooks/{{camelCase name}}/index.ts",
        templateFile: "templates/Index/CamelCase.js.hbs",
      },
    ],
  });
  //UTILS
  plop.setGenerator("util", {
    description: "Create an util",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your util name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/utils/{{camelCase name}}/{{camelCase name}}.tsx",
        templateFile: "templates/Util/Util.js.hbs",
      },
      {
        type: "add",
        path: "src/utils/{{camelCase name}}/{{camelCase name}}.test.js",
        templateFile: "templates/Util/Util.test.js.hbs",
      },
      {
        type: "add",
        path: "src/utils/{{camelCase name}}/index.ts",
        templateFile: "templates/Index/CamelCase.js.hbs",
      },
    ],
  });
  //SLICE
  plop.setGenerator("slice", {
    description: "Create a slice",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your slice name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/config/{{camelCase name}}Slice.tsx",
        templateFile: "templates/Slice/Slice.js.hbs",
      },
    ],
  });
};

/**
 * Meta JS File that will be picked up by the Vue CLI
 */
module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'Project powered by LianLianPay, Inc.'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    extra: {
      type: 'string',
      message: 'Extra Messaging!'
    }
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};
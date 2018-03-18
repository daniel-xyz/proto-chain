const Block = require('../core/block')

const fooBlock = Block.mineBlock(Block.genesis(), 'foo')

console.log(fooBlock.toString())
const Block = require('./block')

class Blockchain {
    constructor() {
        this.chain = [Block.genesis]
    }

    addBlock(data) {
        const lastBlock = this.chain[this.chain.length - 1]
        const block = Block.mineBlock(lastBlock, data)

        this.chain.push(block)

        return block
    }

    isValidChain(chain) {
        return JSON.stringify(chain[0]) === JSON.stringify(Block.genesis())
    }
}

module.exports = Blockchain

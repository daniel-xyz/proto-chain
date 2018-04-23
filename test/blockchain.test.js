const Blockchain = require('../core/blockchain')
const Block = require('../core/block')

describe('Blockchain', () => {
    let bc

    beforeEach(() => {
        bc = new Blockchain()
    })

    it('should start with the genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis)
    })

    it('adds a new block', () => {
        const data = 'foo'

        bc.addBlock(data)

        expect(bc.chain[bc.chain.length - 1].data).toEqual(data)
    })
})
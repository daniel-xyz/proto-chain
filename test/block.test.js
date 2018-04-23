const Block = require('../core/block')

describe('Block', () => {
    let data, lastBlock, block

    beforeEach(() => {
        data = 'bar'
        lastBlock = Block.genesis()
        block = Block.mineBlock(lastBlock, data)
    })

    it('sets `data` to match the given input', () => {
        expect(block.data).toEqual(data)
    })

    it('sets `lastHash` to match the hash of the last block', () => {
        expect(block.lastHash).toBe(lastBlock.hash)
    })
})
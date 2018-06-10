const Block = require('./block')
const { DIFFICULTY } = require('../config')

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

  it('generates a hash that matches the difficulty', () => {
    expect(block.hash.substring(0, DIFFICULTY)).toEqual('0'.repeat(DIFFICULTY))
    console.log(block.toString())
  })
})

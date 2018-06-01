const Blockchain = require('../core/blockchain')
const Block = require('../core/block')

describe('Blockchain', () => {
  let bc, bc2

  beforeEach(() => {
    bc = new Blockchain()
    bc2 = new Blockchain()
  })

  it('should start with the genesis block', () => {
    expect(bc.chain[0]).toEqual(Block.genesis())
  })

  it('adds a new block', () => {
    const data = 'foo'

    bc.addBlock(data)

    expect(bc.chain[bc.chain.length - 1].data).toEqual(data)
  })

  it('validates a valid chain', () => {
    bc2.addBlock('foo')

    expect(bc.isValidChain(bc2.chain)).toBe(true)
  })

  it('invalidates a chain with a corrupt genesis block', () => {
    bc2.chain[0].data = 'Bad data'

    expect(bc.isValidChain(bc2.chain)).toBe(false)
  })

  it('invalides a corrupt chain', () => {
    bc2.addBlock('foo')
    bc2.chain[1].data = 'Not foo'

    expect(bc.isValidChain(bc2.chain)).toBe(false)
  })
})

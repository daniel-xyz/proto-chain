class Block {
    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp
        this.lastHash = lastHash
        this.hash = hash
        this.data = data
    }

    toString() {
        return `
            ::::: Block Information :::::
            
                  Timestamp -> ${this.timestamp}
                  Last Hash -> ${this.lastHash}
                  Hash      -> ${this.hash}
                  Data      -> ${this.data}
        `
    }

    static genesis() {
        return new this('genesis', '-----', 'U3K2i98xD20Kl44AsQezD1')
    }

    static mineBlock(lastBlock, data) {
        const timestamp = Date.now()
        const lastHash = lastBlock.hash
        const hash = 'todo-hash'

        return new this(timestamp, lastHash, hash, data)
    }
}

module.exports = Block
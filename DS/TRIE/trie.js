class TrieNode{
    constructor(){
        this.children={}
        this.isEndOfWord=false
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode()
    }

    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new TrieNode()
            }

            node=node.children[char]
        }
        node.isEndOfWord=true
    }

    search(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
            return false
            }
            node=node.children[char]
        }
        return node.isEndOfWord
    }

    isPrefix(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.children[char]){
                return false;
            }
            node=node.children[char]
        }

        return true
    }
    _findNode(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.children[char]){
                return null
            }
            node=node.children[char]
        }

        return node
    }

    autocomplete(prefix){
        let result=[]
        let prefixNode=this._findNode(prefix)

        if(!prefixNode)return result

        let dfs=(node,currentWord)=>{
            if(node.isEndOfWord){
                result.push(currentWord)
            }
            for(let char in node.children){
                dfs(node.children[char],currentWord+char)
            }
        }

        dfs(prefixNode,prefix)
        return result
    }
}

let trie=new Trie()
trie.insert("hari")
trie.insert("harish")
trie.insert("harini")
trie.insert("logesh")
trie.insert("logu")
console.log(trie.search("hari"))
console.log(trie.isPrefix("log"))
console.log(trie.autocomplete("har"))

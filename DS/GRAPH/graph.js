class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        for(let key in this.adjacencyList){
            if(this.adjacencyList[key].has(vertex)){
                this.removeEdge(key,vertex)
            }
        }
        delete this.adjacencyList[vertex]
    }

    display(){
        for(let key in this.adjacencyList){
            console.log(key,"===>",[...this.adjacencyList[key]].length>0?[...this.adjacencyList[key]]:"no vertexs paired")
        }
    }
}

let graph=new Graph()
graph.addEdge("a","b")
graph.addEdge("c","b")
graph.addEdge("a","c")
graph.addVertex("e")
graph.addEdge("e","a")
graph.display()
graph.removeVertex("a")
graph.display()
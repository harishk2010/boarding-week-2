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
    breadthFirstSearch(start){
        if(!this.adjacencyList[start]){
            console.log("start vertex not found")
            return []
        }
        let queue=[start], result=[],visited={}
        visited[start]=true
        while(queue.length){
            let curr=queue.shift()
            result.push(curr)
            this.adjacencyList[curr].forEach(neigh=>{
                if(!visited[neigh]){
                    visited[neigh]=true
                    queue.push(neigh)
                }
            })

        }
        return result
    }

    // hasCycle(){
    //     let visited={}

        

    //     const dfs=(curr,parent)=>{
    //         visited[curr]=true
    //         for(let neigh of this.adjacencyList[curr]){
    //             if(!visited[neigh]){
    //                 visited[neigh]=true
    //                 dfs(neigh,curr)
    //             }else if(neigh!==parent){
    //                 return true
    //             }
    //         }

    //     }
    //     for(let vertex in this.adjacencyList){
    //         if(!visited[vertex]){
    //             if(dfs(vertex,null)){
    //                 return true
    //             }
    //         }
    //     }
    //     return false
    // }
    hasCycle() {
        let visited = {};
    
        for (let vertex in this.adjacencyList) {
            if (!visited[vertex]) {
                if (this.checkCycleBFS(vertex, visited)) {
                    return true;
                }
            }
        }
        return false;
    }
    
    checkCycleBFS(start, visited) {
        let queue = [[start, null]];
    
        visited[start] = true;
    
        while (queue.length) {
            let [current, parent] = queue.shift();
    
            for (let neighbor of this.adjacencyList[current]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push([neighbor, current]);
                } else if (neighbor !== parent) {
                    return true;
                }
            }
        }
        return false;
    }

    numberOfCycles(){
        let visited={}
        let count=0

        for(let vertex in this.adjacencyList){
            if(!visited[vertex]){
                if(this.dfsCycle(vertex,visited,null)){
                    count++
                }
            }
        }
        return count
    }
    dfsCycle(current , visited,parent){
        visited[current]=true
        for(let neigh of this.adjacencyList[current]){
            if(!visited[neigh]){
                if(this.dfsCycle(neigh,visited,current)){
                    return true
                }else if(neigh !==parent){
                    return true
                }
            }
        }
        return false
    }
}

let graph=new Graph()
graph.addEdge("a","b")
graph.addEdge("c","b")
graph.addEdge("a","c")
graph.addVertex("e")
graph.addEdge("e","a")
// graph.display()
// graph.removeVertex("a")
graph.display()
console.log(graph.breadthFirstSearch("a"))
console.log(graph.hasCycle())
console.log(graph.numberOfCycles())
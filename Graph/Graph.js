var Graph = (function () {
    function Graph() {
        this.adjacencyList = new Map();
    }
    Graph.prototype.addVertex = function (vertex) {
        if (!this.adjacencyList.get(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    };
    Graph.prototype.addEdge = function (source, destination) {
        if (!this.adjacencyList.get(source))
            this.addVertex(source);
        if (!this.adjacencyList.get(destination))
            this.addVertex(destination);
        this.adjacencyList.get(source).push(destination);
        this.adjacencyList.get(destination).push(source);
    };
    // recursion
    Graph.prototype.DFT = function (start) {
        const visited = new Map();
        const graph = this.adjacencyList;
        function DFT(vertex) {
            if (visited.get(vertex))
                return;
            visited.set(vertex, true);
            console.log(vertex);
            const connectedVertcies = graph.get(vertex);
            for (let i = 0; i < connectedVertcies.length; i++) {
                DFT(connectedVertcies[i]);
            }
        }
        DFT(start);
    };
    // recursion
    Graph.prototype.DFS = function (searchVertex, start) {
        const visited = new Map();
        const graph = this.adjacencyList;
        function DFS(vertex) {
            if (visited.get(vertex))
                return null;
            visited.set(vertex, true);
            if (vertex === searchVertex)
                return [vertex];
            const connectedVertcies = graph.get(vertex);
            for (let i = 0; i < connectedVertcies.length; i++) {
                const result = DFS(connectedVertcies[i]);
                if (result && result.length > 0)
                    return result.concat(vertex);
            }
            return null;
        }
        return DFS(start);
    };
    return Graph;
})();
const g = new Graph();
g.addEdge(1, 2);
g.addEdge(3, 1);
g.addEdge(2, 3);
const g2 = new Graph();
g2.addEdge(1, 2);
g2.addEdge(1, 7);
g2.addEdge(2, 3);
g2.addEdge(2, 6);
g2.addEdge(3, 4);
g2.addEdge(3, 5);
g2.addEdge(100, 99);
console.log(g2.adjacencyList);
g2.DFT(1);
console.log(g2.DFS(5, 1));

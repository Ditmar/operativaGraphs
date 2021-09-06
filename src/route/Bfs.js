class Bfs {
    constructor() {

    }
    run(vertex) {
        if (vertex.visited) {
            return;
        }
        console.log(`vertice ${vertex.label}`);
        vertex.visited = true;
        let { listVertex } = vertex;
        for (let i = 0; i < listVertex.length; i++) {
            let nextVertex = listVertex[i];
            this.run(nextVertex);
        }
    }
}
export default Bfs;
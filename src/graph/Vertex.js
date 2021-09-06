import Edges from "./Edges";
class Vertex {
  constructor(label) {
    this.listVertex = [];
    this.edges = {};
    this.label = label;
    this.visited = false;
    this.tagLabel = null;
  }
  connectVertex(vertex, weight) {
    const edge = new Edges(this, vertex, weight);
    this.listVertex.push(vertex);
    if (this.edges[this.label + "_" + vertex.label] == null) {
      this.edges[this.label + "_" + vertex.label] = edge;
    }
  }
}
export default Vertex;

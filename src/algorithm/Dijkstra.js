import Label from "../graph/Label";

class Dijktra {
  constructor(graph) {
    this.graph = graph;
  }
  run(source) {
    if (!source) {
      throw "Es necesario el vertice origen";
    }
    //etiquetamos con etiqueta perminante.
    source.visited = true;
    //y creamos label de esta forma;
    source.tagLabel = new Label(0, null, source.label);
    while (!this.checkPermanentLabel()) {
      for (let i = 0; i < source.listVertex.length; i++) {
        let vertexAdyacent = source.listVertex[i];
        if (vertexAdyacent.tagLabel == null) {
          vertexAdyacent.tagLabel = new Label(Infinity, null, null);
        }
        let edge = source.edges[source.label + "_" + vertexAdyacent.label];
        let { weight } = edge;
        if (
          vertexAdyacent.visited == false &&
          source.tagLabel.weight + weight < vertexAdyacent.tagLabel.weight
        ) {
          vertexAdyacent.tagLabel.weight = source.tagLabel.weight + weight;
          vertexAdyacent.tagLabel.parent = source;
          vertexAdyacent.tagLabel.current = vertexAdyacent.label;
        }
      }
      let minimus = Infinity;
      for (let i = 0; i < this.graph.length; i++) {
        if (this.graph[i].visited == false) {
          let labelTag = this.graph[i].tagLabel;
          if (labelTag) {
            if (labelTag.weight < minimus) {
              minimus = labelTag.weight;
              source = this.graph[i];
            }
          }
        }
      }
      source.visited = true;
    }
  }
  getResult() {
    let labels = [];
    for (let i = 0; i < this.graph.length; i++) {
      labels = [...labels, this.graph[i].tagLabel];
    }
    return labels;
  }
  checkPermanentLabel() {
    for (let i = 0; i < this.graph.length; i++) {
      if (!this.graph[i].visited) {
        return false;
      }
    }
    return true;
  }
}
export default Dijktra;

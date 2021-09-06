import Vertex from "../graph/Vertex";

class Prim {
  constructor(graph) {
    this.graph = graph; //referencia
    this.resultTree = [];
    this.list = [];
    this.vertexList = [];
    this.graph.forEach((element) => {
      this.vertexList = [...this.vertexList, element];
    });
  }
  run() {
    let i = this.vertexList[0];
    this.list.push(i);
    //remove i form the vertexList
    //borrar i de vertexlist

    this.vertexList = this.vertexList.filter((item) => i.label !== item.label);
    while (this.vertexList.length != 0) {
      let j = this.getMinimusVertex();
      this.list.push(j);
      this.vertexList = this.vertexList.filter(
        (item) => j.label !== item.label
      );
    }
    console.log("finish");
  }
  getMinimusVertex() {
    let minimusWeight = Infinity;
    let source = null;
    let destination = null;
    for (let i = 0; i < this.list.length; i++) {
      for (let j = 0; j < this.vertexList.length; j++) {
        let { edges, label: labeli } = this.list[i];
        let { label: labelj } = this.vertexList[j];
        let existedge = edges[`${labeli}_${labelj}`];
        if (existedge) {
          if (minimusWeight > existedge.weight) {
            minimusWeight = existedge.weight;
            source = this.list[i];
            destination = this.vertexList[j];
          }
        }
      }
    }
    //logica para armar el arbol
    let newSource = this.resultTree.find((item) => item.label === source.label);
    if (!newSource) {
      newSource = new Vertex(source.label);
      this.resultTree = [...this.resultTree, newSource];
    }
    let newDestination = this.resultTree.find(
      (item) => item.label === destination.label
    );
    if (!newDestination) {
      newDestination = new Vertex(destination.label);
      this.resultTree = [...this.resultTree, newDestination];
    }
    let { edges } = destination;
    newSource.connectVertex(newDestination, minimusWeight);
    if (edges[`${destination.label}_${source.label}`]) {
      newDestination.connectVertex(newSource, minimusWeight);
    }
    return destination;
  }
  getTree() {
    return this.resultTree;
  }
}
export default Prim;

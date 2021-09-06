import Vertex from "./graph/Vertex";
import Bfs from "./route/Bfs";
import Prim from "./algorithm/Prim";
import Dijktra from "./algorithm/Dijkstra";
const main = () => {
  let v1 = new Vertex("v1");
  let v2 = new Vertex("v2");
  let v3 = new Vertex("v3");
  let v4 = new Vertex("v4");
  let v5 = new Vertex("v5");
  const graph = [];
  v1.connectVertex(v3, 1);
  v1.connectVertex(v2, 1);
  v2.connectVertex(v3, 6);
  v2.connectVertex(v5, 3);
  v3.connectVertex(v1, 1);
  v3.connectVertex(v2, 6);
  v3.connectVertex(v4, 7);
  v4.connectVertex(v2, 3);
  v4.connectVertex(v5, 2);
  v5.connectVertex(v2, 3);
  v5.connectVertex(v4, 2);
  graph.push(v1);
  graph.push(v2);
  graph.push(v3);
  graph.push(v4);
  graph.push(v5);
  // console.log(v1);
  // const prim = new Prim(graph);
  // prim.run();
  // const resultTree = prim.getTree();
  // console.log(resultTree);
  // ref valor ref
  console.log("test");
  const dijktra = new Dijktra(graph);
  dijktra.run(v1);
  let result = dijktra.getResult();
  console.log(result);
  // for (let i = 0; i < result.length; i++) {
  //   console.log(`[${result[i].weight}, ${result[i].parent?.label}]`);
  // }
};
export default main();

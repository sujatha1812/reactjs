#findobject#

const trees = [
  { name: "birch", count: 4 },
  { name: "maple", count: 5 },
  { name: "oak", count: 2 }
];

const result = trees.find(tree => tree.name === "oak"); 
//{name:"oak",countt:2}

const result = trees.find(tree => tree.count > 2);//{name:"birch",count:4}
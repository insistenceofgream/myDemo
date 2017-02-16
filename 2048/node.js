function getChildren(parent){
  console.log(parent.nodeType!=3?parent.nodeName:parent.nodeValue);
  var children=parent.childNodes;
  for (var i=0;i<children.length ;i++ )
  {
    getChildren(children[i]);
  }
}
getChildren(document.body);
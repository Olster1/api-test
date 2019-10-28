function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function fetchUsers(numOfUsers, errorDiv, ul) {
  const url = 'https://randomuser.me/api/?results=' + numOfUsers; 
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
     errorDiv.innerHTML = "Got data";
      data.results.map(function(author) {
        console.log(author.name.first);
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = author.picture.medium;
            span.innerHTML = `${author.name.first} ${author.name.last}`;
            append(li, img);
            append(li, span);
            append(ul, li);
          });
    })
  .catch(function(error) {
      errorDiv.innerHTML = "Couldn't get data";
  });  
}
const goodbye = (name) => {
  return 'S pozdravem ' + name;
};

const formalGoodbye = (name) => {
  return 'S ucitivým pozdravem ' + name;
};

const rudeGoodbye = (name) => {
  return 'Tě pic ' + '<br>' + name;
};

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

const fillBody = (body, name, goodbyeFunction) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.innerHTML = body;
  const closingElm = document.querySelector('.email__closing');
  closingElm.textContent = goodbyeFunction;
  name = 'Dobromyslík';
};

fillSubject('Mávám');
fillBody(
  'Túze tě zdravím, jsme se dlouho neviděli a fakt by ses měl ozvat!' +
    '<br>' +
    'Dobromyslík' +
    '<br>' +
    rudeGoodbye(name),
);

const closingElm = document.querySelector('.email__greeting');
closingElm.textContent = ' ';

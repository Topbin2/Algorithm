
function solution(n, plans, clients) {
  const arr = new Array(clients.length).fill(0);

  const info = []; 

  plans = plans.map((arr) => arr.split(' '));

  let accService = [];
  for(let i = 0; i < plans.length; i++) {
      const obj = {
              number: i + 1,
              data: Number(plans[i][0]),
              service: [],
              } 

      for(let j = 1; j < plans[i].length; j++) {
            accService.push(plans[i][j]);
      }
      obj.service = [...accService];
      info.push(obj);
  }

  clients = clients.map((arr) => arr.split(' '));

  const consumer = [];

  for(let i = 0; i < clients.length; i++) {
          const obj = {
              data: Number(clients[i][0]),
              service: [...clients[i].slice(1)],
          }
          consumer.push(obj);
  }

  for(let i = 0; i < consumer.length; i++) {
    for(let j = 0; j < info.length; j++) {
      if(consumer[i].data < info[j].data) {
        for(let k = 0; k < consumer[i].service.length; k++) {
          if(!info[j].service.includes(consumer[i].service[k])) break;
          if(k === consumer[i].service.length - 1) arr[i] = info[j].number;
        }
      }
    }
  }

  return arr;
}

[
  { number: 1, data: 100, service: [ '1', '3' ] },
  { number: 2, data: 500, service: [ '1', '3', '4' ] },
  { number: 3, data: 2000, service: [ '1', '3', '4', '5' ] }
] [
  { data: 300, service: [ '3', '5' ] },
  { data: 1500, service: [ '1' ] },
  { data: 100, service: [ '1', '3' ] },
  { data: 50, service: [ '1', '2' ] }
]

console.log(solution(3, ['100 1 3', '500 4', '2000 5'], ['300 3 5', '1500 1', '100 1 3', '50 1 2']));
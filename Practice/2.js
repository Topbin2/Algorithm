function solution(periods, payments, estimates) {

  const arr = [];
  const result = [0, 0];

  for(let i = 0; i < periods.length; i++) {
      const nextPayments = [estimates[i], ...payments[i].slice(1)].reduce((a, b) => a + b, 0);

      const obj = {
          period: periods[i],
          payments: payments[i].reduce((a, b) => a + b, 0),
          nextPeriod: periods[i] + 1,
          nextPayments: nextPayments,
          isVIP: '',
      };


      if(obj.period < 24) obj.isVIP = 'NO';
      else if (obj.period >= 24 && obj.period < 60) {
          if(obj.payments >= 900000) obj.isVIP = 'YES';
          else obj.isVIP = 'NO';
      }
      else if(obj.period >= 60) {
          if(obj.payments >= 600000) obj.isVIP = 'YES';
          else obj.isVIP = 'NO';
      }

      arr[i] = obj;
  }


  for(let i = 0; i < arr.length; i++) {
      const person = arr[i];
      if(person.isVIP === 'NO') {
          if(vip(person.nextPeriod, person.nextPayments)) result[0]++;
      }
      else {
          if(!vip(person.nextPeriod, person.nextPayments)) result[1]++;
      }
  }

  return result;
}

function vip(period, payments) {
  if(period >= 24 && period < 60 && payments >= 900000) return true;
  else if(period >= 60 && payments >= 600000) return true;
  else return false;
}
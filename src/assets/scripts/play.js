window.addEventListener('message', e => {
    e['data'] &&
      '10536581' === e['data']['id'] &&
      document.getElementById(`${e['data']['id']}`) &&
      (document.getElementById(`${e['data']['id']}`).style.height = `${
        e['data']['frameHeight'] + 30
      }px`);
  });
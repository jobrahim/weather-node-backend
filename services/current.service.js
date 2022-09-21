
class CurrentService {

  constructor(){
  }

  find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products);
      }, 3000);
    })
  }


}

module.exports = CurrentService;

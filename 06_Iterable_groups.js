class Group{
    constructor(){
      this.data = [];
    }
    
    add(item) {
      if (!this.has(item)) {
        this.data.push(item)
      }
    }
    
    has(item) {
      return this.data.includes(item);
    }
    
    delete(item) {
      this.data = this.data.filter(i => i !== item);
    }
    
    static from(ites){
      let group = new Group();
      for(let ite of ites) {
        group.add(ite);
      }
      return group;
    }
    
    [Symbol.iterator]() {
      return new GroupIterator(this);
    }
  }
  
  class GroupIterator{
    constructor(group) {
      this.index = 0;
      this.data = group.data;
    }
      
    next() {
      if (this.index === this.data.length) {
        return {done: true};
      } else {
        const result = {value: this.data[this.index], done: false};
        this.index++;
        return result;
      }
    }
  }
  
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c
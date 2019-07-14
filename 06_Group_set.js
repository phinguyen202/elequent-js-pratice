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
  }
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
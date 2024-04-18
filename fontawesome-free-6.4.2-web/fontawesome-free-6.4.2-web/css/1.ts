const person = {
    name: 'Dima',
    age: 40,
    logInfo: function(){
      console.group('${this.name} info:'),
      console.log('Name is ${this.name}'),
      console.log('Age is ${this.age}'),
      console.groupEnd()
    }
      }
  const lena = {
    name:'Elena',
    age: 23
  }
  console.log(person.logInfo())
  person.logInfo.bind(lena)()
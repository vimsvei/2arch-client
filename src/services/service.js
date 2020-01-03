class Service {
  _architectureState = [
    {id: 1, name:'New', color:''},
    {id: 2, name:"Active", color:''},
    {id: 3, name:"Change", color:''},
    {id: 4, name:"Old", color:''},
    {id: 5, name:"Internal", color:''},
    {id: 6, name:"Legacy", color:''},
  ];
  
  getArchitectureState = async () => {
    return this._architectureState;
  }
}

export default Service;

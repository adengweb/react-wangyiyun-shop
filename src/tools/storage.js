// 封装localStorage
export default class Storage{
  constructor(props) {
		this.props = props || {}
		this.source = this.props.source || window.localStorage
		this.initRun();
  }
  
  set(key, value, expired) {
    let source = this.source;
    source[key] = JSON.stringify(value);
    if (expired){
      source[`${key}__expires__`] = Date.now() + 1000*60*expired
    };
    return value;
  }
  get(key) {
    const source = this.source,
    expired = source[`${key}__expires__`]||Date.now+1;
    const now = Date.now();
  
    if ( now >= expired ) {
      this.remove(key);
      return;
    }
    const value = source[key] ? JSON.parse(source[key]) : source[key];
    return value;
  }
  remove(key) {
    const data = this.source,
      value = data[key];
    delete data[key];
    delete data[`${key}__expires__`];
    return value;
  }

  initRun(){
		const reg = new RegExp("__expires__");
		let data = this.source;
		let list = Object.keys(data);
		if(list.length > 0){
			list.map((key,v)=>{
				if( !reg.test(key )){
					let now = Date.now();
					let expires = data[`${key}__expires__`]||Date.now+1;
					if (now >= expires ) {
						this.remove(key);
					};
				};
				return key;
			});
		};
	}
}
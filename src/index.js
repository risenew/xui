import myTest from './component/test.vue'
import myTest1 from './component/test1.vue'
const plugTest={
	 install(Vue,options){
	 	 Vue.component('my-test-o',myTest)
	 	 Vue.component('my-test-p',myTest1)
	 }
}

export default plugTest;
/*
 * @Author: newboolean sunjiyan1228@163.com
 * @Date: 2024-01-13 14:47:46
 * @LastEditors: newboolean sunjiyan1228@163.com
 * @LastEditTime: 2024-01-13 15:29:48
 * @FilePath: \my-vue3-project\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
	createSSRApp
} from "vue";
import App from "./App.vue";

// 导入 pinia 实例
import pinia from './stores'

export function createApp() {
	const app = createSSRApp(App);
	// 使用 pinia
	app.use(pinia)
	return {
		app,
	};
}

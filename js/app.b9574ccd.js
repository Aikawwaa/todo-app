(function(){"use strict";var t={7850:function(t,e,n){var r=n(9242),o=n(3396),a=n(7139);const s={class:"main"},i=(0,o._)("button",{type:"submit"},"Добавить",-1),u=["onUpdate:modelValue"],l=["onClick"];function c(t,e,n,c,p,d){return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("h1",null,(0,a.zw)(p.projectName),1),(0,o._)("form",{onSubmit:e[1]||(e[1]=(0,r.iM)(((...t)=>d.addTask&&d.addTask(...t)),["prevent"]))},[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>p.newTask=t),placeholder:"Новая задача",required:""},null,512),[[r.nr,p.newTask]]),i],32),(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(d.filteredTasks,((t,e)=>((0,o.wg)(),(0,o.iD)("li",{key:e},[(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":e=>t.done=e},null,8,u),[[r.e8,t.done]]),(0,o.Uk)(" "+(0,a.zw)(t.text)+" ",1),(0,o._)("button",{onClick:t=>d.deleteTask(e),class:"delete"},"Удалить",8,l)])))),128))]),(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>p.taskFilter=t),placeholder:"Фильтр",class:"filter"},null,512),[[r.nr,p.taskFilter]])])}n(7658);var p={data(){return{projectName:"Мой проект",newTask:"",tasks:[],taskFilter:""}},mounted(){const t=localStorage.getItem("todo-app-data");if(t){const e=JSON.parse(t);this.projectName=e.projectName,this.tasks=e.tasks}},methods:{addTask(){this.newTask&&(this.tasks.push({text:this.newTask,done:!1}),this.newTask="",this.saveData())},deleteTask(t){this.tasks.splice(t,1),this.saveData()},saveData(){const t={projectName:this.projectName,tasks:this.tasks};localStorage.setItem("todo-app-data",JSON.stringify(t))}},computed:{filteredTasks(){return this.tasks.filter((t=>t.text.toLowerCase().includes(this.taskFilter.toLowerCase())))}}},d=n(89);const f=(0,d.Z)(p,[["render",c]]);var h=f,k=n(2483);const v=(0,k.p7)({history:(0,k.r5)(),routes:[]});var m=v;(0,r.ri)(h).use(m).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var s=1/0;for(c=0;c<t.length;c++){r=t[c][0],o=t[c][1],a=t[c][2];for(var i=!0,u=0;u<r.length;u++)(!1&a||s>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(i=!1,a<s&&(s=a));if(i){t.splice(c--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,s=r[0],i=r[1],u=r[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(u)var c=u(n)}for(e&&e(r);l<s.length;l++)a=s[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(c)},r=self["webpackChunktemplate"]=self["webpackChunktemplate"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7850)}));r=n.O(r)})();
//# sourceMappingURL=app.b9574ccd.js.map
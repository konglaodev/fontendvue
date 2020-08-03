import Vue from "vue";
import VueRouter from "vue-router";
//all crud router
import Village from "@/components/crud/address/village";
import City from "@/components/crud/address/city";
import Provine from "@/components/crud/address/provine";
import majorinfo from "@/components/major/majorinfo";
import salary from "@/components/account/salary";
// router emplloyee
import Employeenormal from "@/views/Employee/employeenormal";
import Empprivate from "@/views/Employee/empprivate";
import Empsalary from "@/views/Employee/empsalary";
import Ceo from "@/views/Employee/ceo";
Vue.use(VueRouter);

const routes = [
  // employee path
  {
    path: "/employeenormal",
    name: "employeenormal",
    component: Employeenormal,
  },
  {
    path: "/empsalary",
    name: "empsaary",
    component: Empsalary,
  },
  {
    path: "/empprivate",
    name: "empprivate",
    component: Empprivate,
  },
  {
    path: "/ceo",
    name: "ceo",
    component: Ceo,
  },
  // ສາຂາ
  {
    path: "/major",
    name: "majorinfo",
    component: majorinfo,
  },
  // router calsalary
  {
    path: "/salary",
    name: "salary",
    component: salary,
  },
  //crud address
  {
    path: "/crudvillage",
    name: "crudvillage",
    component: Village,
  },
  {
    path: "/crudcity",
    name: "crudvillage",
    component: City,
  },
  {
    path: "/crudprovine",
    name: "crudprovine",
    component: Provine,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

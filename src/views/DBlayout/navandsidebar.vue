<template>
  <div class="fontnew">
    <v-app-bar absolute elevate-on-scroll app dark>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mdAndUp"
        class="mr-5 ml-5 mt-2"
        style="-webkit-box-shadow: -3px -3px 57px -3px rgba(0,0,0,0.33);
        -moz-box-shadow: -3px -3px 57px -3px rgba(0,0,0,0.33);
        box-shadow: -3px -3px 57px -3px rgba(0,0,0,0.33);"
        @click="displayMini = !displayMini"
      >
        <v-icon v-if="displayMini == false">menu</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>ລະບົບຈັດການຂໍ້ມູນບໍລິສັດຮຸ່ງອາລຸນ</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        class="mr-5 ml-5 mt-2"
        style="-webkit-box-shadow: -3px -3px 57px -3px rgba(0,0,0,0.33);
        -moz-box-shadow: -3px -3px 57px -3px rgba(0,0,0,0.33);
        box-shadow: -3px -3px 57px -3px rgba(0,0,0,0.33);"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- sidebar on desktop-->
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.mdAndUp"
      permanent
      floating
      app
      color="#202040"
      dark
      style="background: radial-gradient(circle, rgba(0,0,0,0.4489146000196954) 6%, rgba(0,0,0,0.8578781854538691) 76%);"
      :mini-variant="displayMini"
      mini-variant-width="80"
      :expand-on-hover="displayMini ? true : false"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-img
              src="data:image/png;base64,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"
              width="50px"
            ></v-img>
          </v-list-item-title>
          <v-list-item-subtitle v-if="displayMini == false"
            >ບໍລິສັດຮຸ້ງອາລຸນ</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list nav>
        <v-list-group prepend-icon="account_circle">
          <template v-slot:activator>
            <v-list-item-title>ພະນັກງານ</v-list-item-title>
          </template>
          <v-list-group sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>ຈັດການຂໍ້ມູນພະນັກງານ</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="item in items"
              :key="item"
              router
              :to="item.router"
              link
            >
              <v-list-item-title>{{ item.text }}</v-list-item-title>
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>

      <!-- count money -->
      <v-list nav>
        <v-list-group prepend-icon="money">
          <template v-slot:activator>
            <v-list-item-title>ບັນຊີການຈ່າຍເງີນຂອງບໍລິສັດ</v-list-item-title>
          </template>
          <v-list-group sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>ການເບີກເງີນເດືອນ</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="pay in paydetails"
              :key="pay"
              router
              :to="pay.router"
              link
            >
              <v-list-item-title>{{ pay.text }}</v-list-item-title>
              <v-list-item-action>
                <v-icon>{{ pay.icon }}</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
      <!-- tap crud all data -->
      <v-list>
        <v-list-group prepend-icon="mdi-chart-donut">
          <template v-slot:activator>
            <v-list-item-title>ຈັດການຂໍ້ມູນທັງໝົດ</v-list-item-title>
          </template>
          <v-list-group sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>ທີ່ຢູ່</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="crudadd in Address"
              :key="crudadd"
              router
              :to="crudadd.router"
              link
            >
              <v-list-item-title>{{ crudadd.text }}</v-list-item-title>
              <v-list-item-action>
                <v-icon>{{ crudadd.icon }}</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!-- sidebar on mobile version -->

    <v-navigation-drawer
      v-else
      right
      v-model="drawer"
      floating
      app
      color="#202040"
      dark
      style="background: radial-gradient(circle, rgba(0,0,0,0.4489146000196954) 6%, rgba(0,0,0,0.8578781854538691) 76%);"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-img
              src="data:image/png;base64,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"
              width="40px"
              class="ml-15 mt-2 mr-2"
            ></v-img>
            <v-list-item-subtitle class="ml-15"
              >ບໍລິການຂົນສົ່ງທົ່ວປະເທດ</v-list-item-subtitle
            >
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list>
        <v-list-group prepend-icon="account_circle">
          <template v-slot:activator>
            <v-list-item-title>ພະນັກງານ</v-list-item-title>
          </template>

          <v-list-group sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>ຈັດການຂໍ້ມູນພະນັກງານ</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="item in items"
              :key="item"
              router
              :to="item.router"
              link
            >
              <v-list-item-title>{{ item.text }}</v-list-item-title>
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
      <!-- new dorpdow count money -->
      <v-list>
        <v-list-group prepend-icon="money">
          <template v-slot:activator>
            <v-list-item-title>ບັນຊີການຈ່າຍເງີນຂອງບໍລິສັດ</v-list-item-title>
          </template>
          <v-list-group sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>ການເບີກເງີນເດືອນ</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="pay in paydetails"
              :key="pay"
              router
              :to="pay.router"
              link
            >
              <v-list-item-title>{{ pay.text }}</v-list-item-title>
              <v-list-item-action>
                <v-icon>{{ pay.icon }}</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
      <!-- end count money -->
      <!-- tap crud all data -->
      <v-list>
        <v-list-group prepend-icon="mdi-chart-donut">
          <template v-slot:activator>
            <v-list-item-title>ຈັດການຂໍ້ມູນທັງໝົດ</v-list-item-title>
          </template>
          <v-list-group sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>ທີ່ຢູ່</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="crudadd in Address"
              :key="crudadd"
              router
              :to="crudadd.router"
              link
            >
              <v-list-item-title>{{ crudadd.text }}</v-list-item-title>
              <v-list-item-action>
                <v-icon>{{ crudadd.icon }}</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <!-- end sidebar and list -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      displayMini: false,

      items: [
        {
          icon: "insert_drive_file",
          text: "ເບີ່ງຂໍ້ມູນພະນັກງານ",
          router: "/employeenormal",
        },
        {
          icon: "person",
          text: "ຫົວຫນ້າພະແນກ",
          router: "/ceo",
        },
        {
          icon: "peple",
          text: "ຫົວຫນ້າສາຂາ",
          router: "/ceoMajor",
        },
      ],
      paydetails: [
        {
          icon: "money",
          text: "ຂໍ້ມູນເງີນເດືອນ",
          router: "/empsalary",
        },
        {
          icon: "person",
          text: "ຄິດໄລ່ເງີນເດືອນ",
          router: "/calsalary",
        },
        {
          icon: "",
          text: "ການມາວຽກ",
          router: "/workday",
        },
      ],
      // crud nav
      Address: [
        {
          icon: "home",
          text: "ບ້ານ",
          router: "/crudvillage",
        },
        {
          icon: "apartment",
          text: "ເມືອງ",
          router: "crudcity",
        },
        {
          icon: "public",
          text: "ແຂວງ",
          router: "crudprovine",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="fontnew">
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="empid"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>ຫົວຫນ້າພະແນກ</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
                style="font-family:fontlao;"
                >ເພີ່ມພະນັກງານ</v-btn
              >
            </template>
            <v-card class="fontnew">
              <v-card-title>
                <span class="headline">
                  <h3 class="fontnew">{{ formTitle }}</h3></span
                >
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.empid"
                        label="ລະຫັດພະນັກງານ"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.empname"
                        label="ຊື່"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.salary"
                        label="ເງີນເດືອນ"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.department"
                        label="ພະແນກ"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.position"
                        label="ຕຳແໜ່ງ"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">ຍົກເລີກ</v-btn>
                <v-btn color="blue darken-1" text @click="save">ບັນທືກ</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "HalID",
          align: "start",
          sortable: false,
          value: "empid",
        },
        { text: "ຊື່ ນາມສະກຸນ", value: "empname" },
        { text: "ເງີນເດືອນ", value: "salary" },
        { text: "ພະແນກ", value: "department" },
        { text: "ຕຳແໜ່ງ", value: "position" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        empid: "",
        empname: "",
        salary: "",
        department: "",
        position: "",
      },
      defaultItem: {
        empid: "",
        empname: "",
        salary: "",
        department: "",
        position: "",
      },
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "ເພີ່ມ" : "ແກ້ໄຂ";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          empid: "HAL001",
          empname: "ກົງໃຈ ສາຍະວົງ",
          salary: 10000000,
          department: "ຄຸ້ມຄອງສາງ",
          position: "ຫົວໜ້າ",
        },
        {
          empid: "HAL002",
          empname: "ສຸຕິວັດ ຈັນທະວີໄຊ",
          salary: 10000000,
          department: "ຂົນສົ່ງ",
          position: "ຮອງຫົວໜ້າ",
        },
        {
          empid: "HAL003",
          empname: "ບີ້ ສິດທິລາດ",
          salary: 20000000,
          department: "ບັນຊີ",
          position: " ຫົວໜ້າບັນຊີ",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("ຕ້ອງການລືບແທ້ບໍ") && this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

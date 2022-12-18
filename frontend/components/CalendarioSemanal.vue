<template>
  <v-row>
    <v-col>
      <v-sheet>
        <v-calendar
          :now="today"
          :value="today"
          ref="calendar"
          :events="events"
          type="week"
          light
          locale="pt"
          color="blue"
          :first-interval="7"
          :interval-minutes="60"
          :interval-count="14"
          :weekdays="[1, 2, 3, 4, 5, 6]"
          hide-header="True"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    today: "2022-12-12",
    events: [],
    diasDaSemana: {"seg":"2022-12-12", "ter":"2022-12-13", "qua":"2022-12-14", "qui":"2022-12-15", "sex":"2022-12-16", "sab":"2022-12-17"},
  }),
  mounted() {
    this.$refs.calendar.scrollToTime("08:00");
  },
  methods: {
    async getHorarios() {
      await fetch(this.$global.baseUrlApi + "/horarios", { method: "GET" }).then((res) => res.json()).then((data_api) => {
          let horarios_api = data_api.data;

          for (let i = 1; i < horarios_api.length; i++) {
            let diadasemana = diasDaSemana[horarios_api[i].weekday]
            let evento_novo = {
              name: horarios_api[i].admin_id,
              start: diadasemana + horarios_api[i].start_time,
              end: diadasemana + horarios_api[i].end_time,
            };
            this.events.push(evento_novo);
          }
        });
    },
  },
  created() {
    this.getHorarios();
  },
};
</script>

<style>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}

.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}

.v-calendar {
  padding: 5%;
}
.v-calendar-daily_head-weekday {
  color: black !important;
  font-size: 25px !important;
}
.v-btn {
  visibility: hidden !important;
}
.v-application .blue {
  visibility: hidden !important;
}
.v-application .blue--text {
  color: black !important;
}
.v-btn__content {
  visibility: visible !important;
  font-size: 30px !important;
}
.v-calendar-daily_head-day {
  display: flex !important;
  flex-direction: column-reverse !important;
  padding-bottom: 25px !important;
}
</style>

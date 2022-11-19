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
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    today: "2019-01-08",
    events: [
      {
        name: "Weekly Meeting",
        start: "2019-01-07 09:00",
        end: "2019-01-07 10:00",
      },
      {
        name: "Mash Potatoes",
        start: "2019-01-09 12:30",
        end: "2019-01-09 15:30",
      },
    ],
    diasDaSemana: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"],
  }),
  mounted() {
    this.$refs.calendar.scrollToTime("08:00");
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

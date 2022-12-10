<template>
  <v-row justify="center">
    <v-col cols="12" md="8">
      <v-calendar
        :now="today"
        :value="today"
        ref="calendar"
        type="week"
        light
        :events="events"
        locale="pt"
        color="blue"
        :first-interval="7"
        :interval-minutes="60"
        :interval-count="14"
        interval-height="70px"
        :weekdays="[1, 2, 3, 4, 5, 6]"
      >
        <template v-slot:event="{ event }">
          {{ event.name }}
        </template>
      </v-calendar>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    today: "2019-01-08",
    events: [
      {
        name: "Millene",
        start: "2019-01-08 08:00",
        end: "2019-01-08 09:00",
        color: "#30167C",
      },
      {
        name: "Marcos Castello",
        start: "2019-01-08 10:00",
        end: "2019-01-08 12:00",
        color: "#30167C",
      },
      {
        name: "Willian Wang",
        start: "2019-01-09 09:00",
        end: "2019-01-09 11:00",
        color: "#FFD363",
      },
      {
        name: "Marcos Castello",
        start: "2019-01-10 08:00",
        end: "2019-01-10 10:00",
        color: "#30167C",
      },
      {
        name: "Matsu",
        start: "2019-01-10 10:00",
        end: "2019-01-10 11:00",
        color: "#77216F",
      },
      {
        name: "Willian Wang",
        start: "2019-01-11 09:00",
        end: "2019-01-11 11:00",
        color: "#FFD363",
      },
    ],
  }),
  methods: {
    getEventColor(event) {
      return event.color;
    },
  },
  mounted() {
    this.$refs.calendar.scrollToTime("08:00");
  },
};
</script>

<style>
.v-calendar {
  padding: 5%;
}

.v-calendar-daily {
  border: none !important;
}

.v-calendar .v-calendar-daily_head-weekday {
  color: black !important;
  font-size: 25px !important;
}

.v-calendar .v-calendar-daily__interval-text {
  font-size: 24px;
  top: -18px;
  margin-right: 10px;
}

.v-calendar
  .v-calendar-daily__interval:not(:first-of-type)
  > .v-calendar-daily__interval-text:after {
  content: "h";
}

.theme--light.v-calendar-events .v-event-timed {
  border: none !important;
}

.v-calendar .v-event-timed {
  font-size: 20px;
  padding: 15px;
  border-radius: 8px !important;
  color: #ffffff;
  font-weight: bold;
  font-size: 14px !important;
  white-space: normal !important;
}

.v-calendar .v-calendar-daily__intervals-head,
.v-calendar .v-calendar-daily_head-day,
.v-calendar .v-calendar-daily__intervals-body,
.v-calendar .v-calendar-daily__day {
  border-right: none !important;
}

.v-calendar .v-btn {
  visibility: hidden !important;
}

.v-calendar .v-calendar-daily_head-weekday {
  text-transform: none !important;
}

.v-calendar .v-calendar-daily_head-day {
  border-bottom: 10px solid rgba(0, 0, 0, 0) !important;
}

.v-calendar .v-calendar-daily__intervals-head::after {
  background: none !important;
}

.v-calendar .v-calendar-daily_head-day.v-present {
  border-bottom: 10px solid #05161e !important;
}

.v-calendar .v-application .blue {
  visibility: hidden !important;
}
.v-calendar .v-application .blue--text {
  color: black !important;
}
.v-calendar .v-btn__content {
  visibility: visible !important;
  font-size: 48px !important;
}
.v-calendar .v-calendar-daily_head-day {
  display: flex !important;
  flex-direction: column-reverse !important;
  padding-bottom: 25px !important;
}
</style>

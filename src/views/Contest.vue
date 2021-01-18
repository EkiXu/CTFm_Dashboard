<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row style="height:56px" />
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <BaseCard color="#03a9be">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Edit Contest
            </div>
            <div class="subtitle-1 font-weight-light">
              Adjust Your Contest
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    class="purple-input"
                    label="Contest Name"
                    v-model="contest.name"
                    prepend-icon="mdi-sword-cross"
                  />
                </v-col>
                <v-col cols="12">
                  <v-dialog
                    ref="datesDialog"
                    v-model="datesModal"
                    :return-value.sync="dates"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="dateRangeText"
                        label="Contest Dates"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      />
                    </template>
                    <v-date-picker
                      v-model="dates"
                      scrollable
                      range
                    >
                      <v-spacer />
                      <v-btn
                        text
                        color="primary"
                        @click="datesModal = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.datesDialog.save(dates)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-col>
                <v-col
                  cols="6"
                >
                  <v-dialog
                    ref="startTimeDialog"
                    v-model="startTimeModal"
                    :return-value.sync="startTime"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="startTime"
                        label="Start Time"
                        prepend-icon="mdi-clock-time-four-outline"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      />
                    </template>
                    <v-time-picker
                      v-if="startTimeModal"
                      v-model="startTime"
                      full-width
                    >
                      <v-spacer />
                      <v-btn
                        text
                        color="primary"
                        @click="startTimeModal = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.startTimeDialog.save(startTime)"
                      >
                        OK
                      </v-btn>
                    </v-time-picker>
                  </v-dialog>
                </v-col>
                <v-col
                  cols="6"
                >
                  <v-dialog
                    ref="endTimeDialog"
                    v-model="endTimeModal"
                    :return-value.sync="endTime"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="endTime"
                        label="End Time"
                        prepend-icon="mdi-clock-time-four-outline"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      />
                    </template>
                    <v-time-picker
                      v-if="endTimeModal"
                      v-model="endTime"
                      full-width
                    >
                      <v-spacer />
                      <v-btn
                        text
                        color="primary"
                        @click="endTimeModal = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.endTimeDialog.save(endTime)"
                      >
                        OK
                      </v-btn>
                    </v-time-picker>
                  </v-dialog>
                </v-col>
                <v-col
                  cols="12"
                >
                  <h2 style="padding-bottom:10px">
                    Content
                  </h2>
                  <Markdown
                    v-model="contest.description"
                    :height="360"
                  />
                </v-col>
                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="#00bcd4"
                    class="mr-0"
                    @click="editContest"
                  >
                    Update Contest
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import 'moment'
import Markdown from 'vue-meditor'
import BaseCard from '@/components/BaseCard.vue'
import { getContestAPI,updateContestAPI } from '@/api/contest'
export default {
  components: {
    BaseCard,
    Markdown
  },
  data(){
    return {
      startTime : null,
      startTimeModal: false,
      endTime : null,
      endTimeModal: false,
      dates: [],
      datesModal:false,
      contest:{
        name:'',
        start_time:'',
        end_time:'',
        description:'',
      }
    }
  },
  computed: {
    dateRangeText () {
      return this.dates.join(' ~ ')
    },
  },
  async created () {
    this.initialize()
  },
  methods: {
    async initialize(){
      const res = await getContestAPI()
      this.contest = res.data
      this.dates = [this.contest.start_time.substr(0, 10),this.contest.end_time.substr(0, 10)]
      this.startTime = this.contest.start_time.substr(11, 5)
      this.endTime = this.contest.end_time.substr(11, 5)
    },
    async editContest () {
      this.contest.start_time = this.dates[0]+"T"+this.startTime
      this.contest.end_time = this.dates[1]+"T"+this.endTime
      const res = await updateContestAPI(this.contest)
      this.$vToastify.success('Edit Successfully')
    },
  }
}
</script>

<style>

</style>
